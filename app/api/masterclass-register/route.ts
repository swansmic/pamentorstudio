import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const WATCH_URL = "https://www.pamentorstudio.com/masterclass/watch";

function trim(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildInternalHtml(firstName: string, email: string, timestamp: string): string {
  return `<!DOCTYPE html>
<html>
<body style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:32px 24px;color:#1a1a1a;background:#fff;">
  <h2 style="font-size:17px;font-weight:600;margin:0 0 4px;">New Masterclass Registration</h2>
  <p style="font-size:12px;color:#999;margin:0 0 24px;">${escapeHtml(timestamp)}</p>
  <hr style="border:none;border-top:1px solid #e5e7eb;margin:0 0 20px;" />
  <table style="width:100%;border-collapse:collapse;">
    <tr>
      <td style="padding:8px 0;color:#666;font-size:13px;width:180px;vertical-align:top;">First Name</td>
      <td style="padding:8px 0;font-size:14px;">${escapeHtml(firstName)}</td>
    </tr>
    <tr>
      <td style="padding:8px 0;color:#666;font-size:13px;width:180px;vertical-align:top;">Email</td>
      <td style="padding:8px 0;font-size:14px;">${escapeHtml(email)}</td>
    </tr>
  </table>
  <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0 16px;" />
  <p style="font-size:12px;color:#aaa;line-height:1.6;margin:0;">
    Masterclass: What Admissions Committees Really Look For
  </p>
</body>
</html>`;
}

function buildRegistrantHtml(firstName: string): string {
  const escapedFirst = escapeHtml(firstName);
  const escapedUrl = escapeHtml(WATCH_URL);

  return `<!DOCTYPE html>
<html>
<body style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:0;color:#1a1a1a;background:#fff;">

  <!-- Header -->
  <div style="background:#1c2b3a;padding:28px 32px;">
    <p style="margin:0;font-size:13px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#c8d4df;">
      PA Mentor Studio
    </p>
  </div>

  <!-- Body -->
  <div style="padding:40px 32px;">
    <p style="font-size:16px;line-height:1.7;margin:0 0 20px;">
      Hi ${escapedFirst},
    </p>
    <p style="font-size:16px;line-height:1.7;margin:0 0 20px;">
      Thank you for registering for the free PA Mentor Studio masterclass:
    </p>
    <p style="font-size:17px;font-weight:600;font-style:italic;line-height:1.5;margin:0 0 28px;color:#1c2b3a;">
      What Admissions Committees Really Look For
    </p>
    <p style="font-size:16px;line-height:1.7;margin:0 0 32px;">
      You can watch the training using the button below.
    </p>

    <!-- CTA button -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 32px;">
      <tr>
        <td style="border-radius:3px;background:#1c2b3a;">
          <a href="${escapedUrl}"
             target="_blank"
             style="display:inline-block;padding:14px 28px;font-family:Georgia,serif;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:3px;">
            Watch the Masterclass
          </a>
        </td>
      </tr>
    </table>

    <p style="font-size:14px;color:#666;margin:0 0 8px;">
      Or copy this link into your browser:
    </p>
    <p style="font-size:13px;color:#888;word-break:break-all;margin:0 0 32px;">
      <a href="${escapedUrl}" style="color:#1c2b3a;">${escapedUrl}</a>
    </p>

    <hr style="border:none;border-top:1px solid #e5e7eb;margin:0 0 28px;" />

    <p style="font-size:15px;line-height:1.75;margin:0 0 20px;">
      In this training, you will learn:
    </p>
    <ul style="font-size:15px;line-height:1.85;margin:0 0 28px;padding-left:20px;color:#333;">
      <li>Why qualified PA applicants are often overlooked</li>
      <li>The seven mistakes admissions committees commonly see</li>
      <li>How successful applicants build a more strategic application</li>
    </ul>

    <p style="font-size:15px;line-height:1.75;margin:0 0 32px;">
      I hope you find it valuable.
    </p>

    <p style="font-size:15px;line-height:1.75;margin:0 0 4px;">Warmly,</p>
    <p style="font-size:15px;font-weight:600;margin:0 0 2px;">Michelle Strange, DMSc, PA-C, RDCS</p>
    <p style="font-size:13px;color:#888;margin:0;">Founder, PA Mentor Studio</p>
  </div>

  <!-- Footer -->
  <div style="background:#f5f4f0;border-top:1px solid #e5e7eb;padding:20px 32px;">
    <p style="font-size:11px;color:#aaa;line-height:1.6;margin:0;">
      You received this email because you registered for the PA Mentor Studio masterclass at
      pamentorstudio.com. If you did not register, you can disregard this message.
    </p>
  </div>

</body>
</html>`;
}

function buildRegistrantText(firstName: string): string {
  return [
    `Hi ${firstName},`,
    "",
    "Thank you for registering for the free PA Mentor Studio masterclass:",
    "",
    "What Admissions Committees Really Look For",
    "",
    "You can watch the training here:",
    "",
    WATCH_URL,
    "",
    "In this training, you will learn:",
    "- Why qualified PA applicants are often overlooked",
    "- The seven mistakes admissions committees commonly see",
    "- How successful applicants build a more strategic application",
    "",
    "I hope you find it valuable.",
    "",
    "Warmly,",
    "Michelle Strange, DMSc, PA-C, RDCS",
    "Founder, PA Mentor Studio",
    "",
    "---",
    "You received this email because you registered for the PA Mentor Studio masterclass at pamentorstudio.com.",
  ].join("\n");
}

export async function POST(request: Request) {
  let raw: Record<string, unknown>;

  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const firstName = trim(raw.firstName);
  const email = trim(raw.email);

  if (!firstName || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const timestamp = new Date().toUTCString();
  const fromEmail = process.env.APPLICATION_FROM_EMAIL;
  const toEmail = process.env.APPLICATION_NOTIFICATION_EMAIL;
  const hasResend = !!(process.env.RESEND_API_KEY && fromEmail && toEmail);

  console.log("[Masterclass] Registration received:", { firstName, email, timestamp });

  if (!hasResend) {
    console.warn("[Masterclass] Resend env vars not configured — skipping all email sends");
    return NextResponse.json({ success: true }, { status: 200 });
  }

  // Fire both emails concurrently; neither failure blocks the redirect.
  const [internalResult, registrantResult] = await Promise.allSettled([
    resend.emails.send({
      from: fromEmail as string,
      to: toEmail as string,
      subject: "New Masterclass Registration — PA Mentor Studio",
      html: buildInternalHtml(firstName, email, timestamp),
      text: [
        "New Masterclass Registration",
        timestamp,
        "",
        `First Name: ${firstName}`,
        `Email: ${email}`,
        "",
        "Masterclass: What Admissions Committees Really Look For",
      ].join("\n"),
    }),
    resend.emails.send({
      from: fromEmail as string,
      to: email,
      subject: "Your PA Mentor Studio Masterclass Access",
      html: buildRegistrantHtml(firstName),
      text: buildRegistrantText(firstName),
    }),
  ]);

  if (internalResult.status === "rejected") {
    console.error(
      "[Masterclass] Internal notification failed:",
      internalResult.reason instanceof Error
        ? internalResult.reason.message
        : internalResult.reason
    );
  } else {
    console.log("[Masterclass] Internal notification sent successfully");
  }

  if (registrantResult.status === "rejected") {
    console.error(
      "[Masterclass] Registrant confirmation failed:",
      registrantResult.reason instanceof Error
        ? registrantResult.reason.message
        : registrantResult.reason
    );
  } else {
    console.log("[Masterclass] Registrant confirmation sent to:", email);
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
