import { NextResponse } from "next/server";
import { sendMail, escapeHtml } from "@/lib/mailer";

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

  try {
    await sendMail({
      subject: `New contact inquiry from ${name}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Company: ${company || "-"}`,
        `Email: ${email}`,
        `Phone: ${phone || "-"}`,
        `Number of Leaders: ${leaderCount || "-"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New contact inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "-")}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
        <p><strong>Number of Leaders:</strong> ${escapeHtml(leaderCount || "-")}</p>
        <p><strong>Message:</strong><br />${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return NextResponse.json(
      { error: "Could not send your message right now. Please email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
