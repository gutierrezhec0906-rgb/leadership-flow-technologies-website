import { NextResponse } from "next/server";
import { sendMail, escapeHtml } from "@/lib/mailer";

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

  try {
    // Notifies the team of the request. There's no guide file to attach yet —
    // once one exists, send/attach it to `email` directly here as well.
    await sendMail({
      subject: "New Leadership Development Guide request",
      replyTo: email,
      text: `New guide request from: ${email}`,
      html: `<p>New guide request from: <strong>${escapeHtml(email)}</strong></p>`,
    });
  } catch (err) {
    console.error("Failed to send subscribe notification email:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
