This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Google Sheets Integration Setup

The "Join as a Service Provider" form is connected to Google Sheets. To set this up:

1. **Create a Google Sheet** (or use an existing one)
   - The sheet will automatically have headers created: Company Name, Services, Email, Phone, Location, Timestamp

2. **Get your Google Sheet ID**
   - Open your Google Sheet
   - Look at the URL: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit`
   - Copy the `YOUR_SHEET_ID_HERE` part

3. **Set the Environment Variable**
   - Create a `.env.local` file in the root directory (if it doesn't exist)
   - Add: `GOOGLE_SHEET_ID=your_google_sheet_id_here`
   - Replace `your_google_sheet_id_here` with your actual Sheet ID

4. **Share the Google Sheet with the Service Account**
   - The service account email is: `spreadsheet@upahwork-company-users.iam.gserviceaccount.com`
   - In your Google Sheet, click "Share" and add this email with "Editor" permissions
   - This allows the service account to write data to your sheet

5. **Restart your development server** after setting the environment variable

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
