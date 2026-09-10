import { NextResponse } from "next/server";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const isValidEmail = /^\S+@\S+\.\S+$/.test(email);

  if (!isValidEmail) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }

  // TODO: connect to a real email/CRM provider (e.g. Resend, Mailchimp, HubSpot)
  // to actually deliver the Leadership Development Guide.
  console.log("Newsletter signup:", email);

  return NextResponse.json({ success: true });
}
