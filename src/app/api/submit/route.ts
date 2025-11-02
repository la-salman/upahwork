import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import path from "path";
import fs from "fs";

// Force Node.js runtime
export const runtime = "nodejs";

type CompanyForm = {
  formType: "company";
  companyName: string;
  services: string[];
  email: string;
  phone: string;
  location: string;
};

type IndividualForm = {
  formType: "individual";
  fullName: string;
  services: string[];
  email: string;
  phone: string;
  location: string;
};

type SheetForm = CompanyForm | IndividualForm;

export async function POST(request: NextRequest) {
  console.log("=== API Route Called ===");
  console.log("Timestamp:", new Date().toISOString());
  
  try {
    const body = (await request.json()) as SheetForm;
    console.log("Request body received, formType:", body.formType);

    // Validate form type
    if (!body.formType || (body.formType !== "company" && body.formType !== "individual")) {
      return NextResponse.json(
        { message: "Invalid form type", error: "Form type must be 'company' or 'individual'" },
        { status: 400 }
      );
    }

    // Validate common fields
    if (!body.email || !body.phone || !body.location || !body.services) {
      return NextResponse.json(
        { message: "All fields are required", error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate form type specific fields
    if (body.formType === "company") {
      const companyBody = body as CompanyForm;
      if (!companyBody.companyName) {
        return NextResponse.json(
          { message: "Company name is required", error: "Missing company name" },
          { status: 400 }
        );
      }
    } else {
      const individualBody = body as IndividualForm;
      if (!individualBody.fullName) {
        return NextResponse.json(
          { message: "Full name is required", error: "Missing full name" },
          { status: 400 }
        );
      }
    }

    if (!body.services || body.services.length === 0) {
      return NextResponse.json(
        { message: "Please select at least one service", error: "No services selected" },
        { status: 400 }
      );
    }

    // Validate environment variables
    console.log("=== Checking Environment Variables ===");
    console.log("GOOGLE_SHEET_ID exists:", !!process.env.GOOGLE_SHEET_ID);
    console.log("GOOGLE_SHEET_ID value (masked):", 
      process.env.GOOGLE_SHEET_ID 
        ? `${process.env.GOOGLE_SHEET_ID.substring(0, 4)}...${process.env.GOOGLE_SHEET_ID.substring(process.env.GOOGLE_SHEET_ID.length - 4)}` 
        : "NOT SET");
    console.log("All env vars starting with GOOGLE:", 
      Object.keys(process.env).filter(key => key.startsWith("GOOGLE")));
    
    if (!process.env.GOOGLE_SHEET_ID) {
      console.error("❌ Missing GOOGLE_SHEET_ID environment variable");
      return NextResponse.json(
        { message: "Server configuration error", error: "Missing environment variables" },
        { status: 500 }
      );
    }
    console.log("✅ GOOGLE_SHEET_ID is set");

    // Load credentials from JSON file
    console.log("=== Loading Credentials ===");
    const credentialsPath = path.join(
      process.cwd(),
      "upahwork-company-users-70c7547d5013.json"
    );
    console.log("Current working directory:", process.cwd());
    console.log("Credentials file path:", credentialsPath);
    console.log("Credentials file exists:", fs.existsSync(credentialsPath));

    let credentials;
    try {
      console.log("Attempting to read credentials file...");
      const credentialsFile = fs.readFileSync(credentialsPath, "utf8");
      credentials = JSON.parse(credentialsFile);
      console.log("✅ Credentials file loaded successfully");
      console.log("Credentials client_email exists:", !!credentials.client_email);
      console.log("Credentials private_key exists:", !!credentials.private_key);
      console.log("Credentials type:", credentials.type || "not specified");
      console.log("Credentials project_id:", credentials.project_id || "not specified");
    } catch (err: any) {
      console.error("❌ Error reading credentials file:");
      console.error("Error message:", err.message);
      console.error("Error code:", err.code);
      console.error("Error stack:", err.stack);
      return NextResponse.json(
        { message: "Server configuration error", error: "Could not load credentials" },
        { status: 500 }
      );
    }

    console.log("=== Initializing Google Sheets API ===");
    
    // Create auth client
    let sheets;
    try {
      console.log("Creating Google Auth client...");
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: credentials.client_email,
          private_key: credentials.private_key,
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      // Get authenticated client
      console.log("Getting authenticated client...");
      const authClient = await auth.getClient();
      console.log("✅ Auth client obtained");
      
      // Create sheets API instance
      console.log("Creating Sheets API instance...");
      sheets = google.sheets({ version: "v4", auth: authClient as any });
      console.log("✅ Sheets API instance created");
    } catch (authError: any) {
      console.error("❌ Error during Google Auth initialization:");
      console.error("Error message:", authError.message);
      console.error("Error code:", authError.code);
      console.error("Error stack:", authError.stack);
      throw authError;
    }

    // Prepare the data based on form type
    let values: string[][];
    let range: string;

    if (body.formType === "company") {
      const companyBody = body as CompanyForm;
      // Company form: Type, Company Name, Services, Email, Phone, Location
      values = [[
        "Company",
        companyBody.companyName,
        companyBody.services.join(", "),
        companyBody.email,
        companyBody.phone,
        companyBody.location,
      ]];
      range = "Sheet1!A:F"; // Updated to 6 columns to include Type
    } else {
      const individualBody = body as IndividualForm;
      // Individual form: Type, Full Name, Services, Email, Phone, Location
      values = [[
        "Individual",
        individualBody.fullName,
        individualBody.services.join(", "),
        individualBody.email,
        individualBody.phone,
        individualBody.location,
      ]];
      range = "Sheet1!A:F"; // Updated to 6 columns to include Type
    }

    const sheetId = process.env.GOOGLE_SHEET_ID;

    console.log(`=== Appending ${body.formType} form data to sheet ===`);
    console.log("Sheet ID:", sheetId);
    console.log("Range:", range);
    console.log("Values to append:", values);
    
    // Append data to sheet
    let response;
    try {
      response = await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: range,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: values,
        },
      });
      console.log("✅ Data appended successfully");
      console.log("Response data:", JSON.stringify(response.data, null, 2));
    } catch (appendError: any) {
      console.error("❌ Error appending data to sheet:");
      console.error("Error message:", appendError.message);
      console.error("Error code:", appendError.code);
      console.error("Error response:", appendError.response?.data);
      console.error("Error stack:", appendError.stack);
      throw appendError;
    }

    return NextResponse.json(
      { message: "Success", data: response.data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("=== ERROR CAUGHT ===");
    console.error("Error type:", error.constructor.name);
    console.error("Error message:", error.message);
    console.error("Error code:", error.code);
    console.error("Error status:", error.status);
    console.error("Error response:", error.response?.data);
    console.error("Error stack:", error.stack);
    console.error("Full error object:", JSON.stringify(error, Object.getOwnPropertyNames(error), 2));

    // Provide more detailed error message
    const errorMessage = error.message || "Unknown error occurred";
    console.error("Returning error response to client:", errorMessage);

    return NextResponse.json(
      {
        message: "Error submitting form",
        error: errorMessage,
        ...(process.env.NODE_ENV === "development" && {
          details: {
            code: error.code,
            status: error.status,
            response: error.response?.data,
          },
        }),
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { message: "Method not allowed. Only POST requests are supported." },
    { status: 405 }
  );
}
