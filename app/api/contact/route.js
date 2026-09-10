import { NextResponse } from "next/server";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, company, email, phone, leaderCount, message } = body || {};

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const isValidEmail = /^\S+@\S+\.\S+$/.test(String(email));
  if (!isValidEmail) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }

  // TODO: connect to a real email service (e.g. Resend, SendGrid) or CRM so
  // this inquiry actually reaches Hector@accountability-app.com.
  console.log("New contact inquiry:", { name, company, email, phone, leaderCount, message });

  return NextResponse.json({ success: true });
}
