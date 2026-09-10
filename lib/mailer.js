import nodemailer from "nodemailer";

let transporter;

function getTransporter() {
  if (transporter) return transporter;

  const { ZOHO_EMAIL, ZOHO_APP_PASSWORD, ZOHO_SMTP_HOST } = process.env;
  if (!ZOHO_EMAIL || !ZOHO_APP_PASSWORD) return null;

  transporter = nodemailer.createTransport({
    host: ZOHO_SMTP_HOST || "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: { user: ZOHO_EMAIL, pass: ZOHO_APP_PASSWORD },
  });

  return transporter;
}

export async function sendMail({ subject, text, html, replyTo }) {
  const client = getTransporter();
  if (!client) {
    throw new Error("Email is not configured. Set ZOHO_EMAIL and ZOHO_APP_PASSWORD.");
  }

  const to = process.env.CONTACT_TO_EMAIL || process.env.ZOHO_EMAIL;

  await client.sendMail({
    from: `"Leadership Flow Technologies" <${process.env.ZOHO_EMAIL}>`,
    to,
    replyTo,
    subject,
    text,
    html,
  });
}

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
