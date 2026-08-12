import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
  <h2 style="font-size:17px;font-weight:600;margin:0 0 4px;">New Updates Subscriber</h2>
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
    Subscribed via the Stay Updated page.
  </p>
</body>
</html>`;
}

function buildSubscriberHtml(firstName: string): string {
  const escapedFirst = escapeHtml(firstName);

  return `<!DOCTYPE html>
<html>
<body style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:0;color:#1a1a1a;background:#fff;">

  <div style="background:#1c2b3a;padding:28px 32px;">
    <p style="margin:0;font-size:13px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#c8d4df;">
      PA Mentor Studio
    </p>
  </div>

  <div style="padding:40px 32px;">
    <p style="font-size:16px;line-height:1.7;margin:0 0 20px;">
      Hi ${escapedFirst},
    </p>
    <p style="font-size:16px;line-height:1.7;margin:0 0 20px;">
      Thanks for signing up to stay updated. You will hear from me
      periodically with admissions insights, application timing guidance,
      and updates that are relevant to your PA journey.
    </p>
    <p style="font-size:16px;line-height:1.7;margin:0 0 32px;">
      I&rsquo;m glad to have you here.
    </p>

    <p style="font-size:15px;line-height:1.75;margin:0 0 4px;">Warmly,</p>
    <p style="font-size:15px;font-weight:600;margin:0 0 2px;">Michelle Strange, DMSc, PA-C, RDCS</p>
    <p style="font-size:13px;color:#888;margin:0;">Founder, PA Mentor Studio</p>
  </div>

  <div style="background:#f5f4f0;border-top:1px solid #e5e7eb;padding:20px 32px;">
    <p style="font-size:11px;color:#aaa;line-height:1.6;margin:0;">
      You received this email because you signed up for admissions updates at
      pamentorstudio.com. If you did not sign up, you can disregard this message.
    </p>
  </div>

</body>
</html>`;
}

function buildSubscriberText(firstName: string): string {
  return [
    `Hi ${firstName},`,
    "",
    "Thanks for signing up to stay updated. You will hear from me periodically",
    "with admissions insights, application timing guidance, and updates that",
    "are relevant to your PA journey.",
    "",
    "I'm glad to have you here.",
    "",
    "Warmly,",
    "Michelle Strange, DMSc, PA-C, RDCS",
    "Founder, PA Mentor Studio",
    "",
    "---",
    "You received this email because you signed up for admissions updates at pamentorstudio.com.",
  ].join("\n");
}

async function subscribeToKit(firstName: string, email: string): Promise<void> {
  const apiSecret = process.env.KIT_API_KEY;
  const formId = process.env.KIT_UPDATES_FORM_ID;
  if (!apiSecret || !formId) return;

  const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_secret: apiSecret, email, first_name: firstName }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Kit API ${res.status}: ${text}`);
  }
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

  console.log("[Subscribe] New subscriber:", { firstName, email, timestamp });

  if (!hasResend) {
    console.warn("[Subscribe] Resend env vars not configured — skipping all email sends");
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const [internalResult, subscriberResult, kitResult] = await Promise.allSettled([
    resend.emails.send({
      from: fromEmail as string,
      to: toEmail as string,
      subject: "New Updates Subscriber — PA Mentor Studio",
      html: buildInternalHtml(firstName, email, timestamp),
      text: [
        "New Updates Subscriber",
        timestamp,
        "",
        `First Name: ${firstName}`,
        `Email: ${email}`,
      ].join("\n"),
    }),
    resend.emails.send({
      from: fromEmail as string,
      to: email,
      subject: "You're Subscribed — PA Mentor Studio",
      html: buildSubscriberHtml(firstName),
      text: buildSubscriberText(firstName),
    }),
    subscribeToKit(firstName, email),
  ]);

  if (internalResult.status === "rejected") {
    console.error(
      "[Subscribe] Internal notification failed:",
      internalResult.reason instanceof Error
        ? internalResult.reason.message
        : internalResult.reason
    );
  } else {
    console.log("[Subscribe] Internal notification sent successfully");
  }

  if (subscriberResult.status === "rejected") {
    console.error(
      "[Subscribe] Subscriber confirmation failed:",
      subscriberResult.reason instanceof Error
        ? subscriberResult.reason.message
        : subscriberResult.reason
    );
  } else {
    console.log("[Subscribe] Subscriber confirmation sent to:", email);
  }

  if (kitResult.status === "rejected") {
    console.error(
      "[Subscribe] Kit subscription failed:",
      kitResult.reason instanceof Error ? kitResult.reason.message : kitResult.reason
    );
  } else {
    console.log("[Subscribe] Kit subscriber added:", email);
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
