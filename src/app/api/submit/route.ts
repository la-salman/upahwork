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
  try {
    const body = (await request.json()) as SheetForm;

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
    if (!process.env.GOOGLE_SHEET_ID) {
      console.error("Missing GOOGLE_SHEET_ID environment variable");
      return NextResponse.json(
        { message: "Server configuration error", error: "Missing environment variables" },
        { status: 500 }
      );
    }

    // Load credentials from JSON file
    const credentialsPath = path.join(
      process.cwd(),
      "upahwork-company-users-70c7547d5013.json"
    );

    let credentials;
    try {
      const credentialsFile = fs.readFileSync(credentialsPath, "utf8");
      credentials = JSON.parse(credentialsFile);
    } catch (err) {
      console.error("Error reading credentials file:", err);
      return NextResponse.json(
        { message: "Server configuration error", error: "Could not load credentials" },
        { status: 500 }
      );
    }

    console.log("Initializing Google Sheets API...");
    
    // Create auth client
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: credentials.client_email,
        private_key: credentials.private_key,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Get authenticated client
    const authClient = await auth.getClient();
    
    // Create sheets API instance
    const sheets = google.sheets({ version: "v4", auth: authClient as any });

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

    console.log(`Appending ${body.formType} form data to sheet...`);
    
    // Append data to sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: values,
      },
    });

    console.log("Data appended successfully:", response.data);

    return NextResponse.json(
      { message: "Success", data: response.data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error submitting form:", error);
    console.error("Error stack:", error.stack);

    // Provide more detailed error message
    const errorMessage = error.message || "Unknown error occurred";

    return NextResponse.json(
      {
        message: "Error submitting form",
        error: errorMessage,
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
