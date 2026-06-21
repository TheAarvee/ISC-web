import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();
  const scriptUrl =
    process.env.GOOGLE_SHEET_WEB_APP_URL ?? process.env.GOOGLE_APPS_SCRIPT_URL;

  if (!scriptUrl) {
    return NextResponse.json(
      { success: false, message: "Google Apps Script URL is not configured." },
      { status: 500 }
    );
  }

  const response = await fetch(scriptUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const text = await response.text();

  return NextResponse.json(
    {
      success: response.ok,
      message: response.ok ? "Form submitted successfully." : "Failed to submit form.",
      data: text,
    },
    { status: response.ok ? 200 : 500 }
  );
}
