import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const REQUIRED_FIELDS = [
  "firstName",
  "lastName",
  "email",
  "applicationStatus",
  "statement",
] as const;

type Body = {
  firstName: string;
  lastName: string;
  email: string;
  applicationStatus: string;
  pathwayInterest: string;
  statement: string;
  referral: string;
  questions: string;
};

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

function buildHtml(b: Body, timestamp: string): string {
  const row = (label: string, value: string) =>
    `<tr>
      <td style="padding:8px 0;color:#666;font-size:13px;width:180px;vertical-align:top;">${label}</td>
      <td style="padding:8px 0;font-size:14px;">${escapeHtml(value)}</td>
    </tr>`;

  const section = (label: string, value: string) =>
    value
      ? `<p style="font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:.05em;margin:20px 0 6px;">${label}</p>
         <p style="font-size:14px;line-height:1.7;white-space:pre-wrap;margin:0;">${escapeHtml(value)}</p>`
      : "";

  return `<!DOCTYPE html>
<html>
<body style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:32px 24px;color:#1a1a1a;background:#fff;">
  <h2 style="font-size:17px;font-weight:600;margin:0 0 4px;">New PA Mentor Studio Coaching Application</h2>
  <p style="font-size:12px;color:#999;margin:0 0 24px;">${escapeHtml(timestamp)}</p>
  <hr style="border:none;border-top:1px solid #e5e7eb;margin:0 0 20px;" />
  <table style="width:100%;border-collapse:collapse;">
    ${row("Name", `${b.firstName} ${b.lastName}`)}
    ${row("Email", b.email)}
    ${row("Application Stage", b.applicationStatus)}
    ${row("Pathway Interest", b.pathwayInterest || "Not specified")}
  </table>
  <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />
  ${section("Statement", b.statement)}
  ${section("Referral", b.referral)}
  ${section("Questions", b.questions)}
  <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0 16px;" />
  <p style="font-size:12px;color:#aaa;line-height:1.6;margin:0;">
    This is an application inquiry. Submitting this form does not constitute enrollment or a financial commitment.
  </p>
</body>
</html>`;
}

function buildText(b: Body, timestamp: string): string {
  const lines = [
    "New PA Mentor Studio Coaching Application",
    timestamp,
    "",
    `Name: ${b.firstName} ${b.lastName}`,
    `Email: ${b.email}`,
    `Application Stage: ${b.applicationStatus}`,
    `Pathway Interest: ${b.pathwayInterest || "Not specified"}`,
    "",
    "Statement:",
    b.statement,
  ];
  if (b.referral) lines.push("", `Referral: ${b.referral}`);
  if (b.questions) lines.push("", "Questions:", b.questions);
  lines.push(
    "",
    "---",
    "This is an application inquiry. Submitting this form does not constitute enrollment or a financial commitment."
  );
  return lines.join("\n");
}

export async function POST(request: Request) {
  let raw: Record<string, unknown>;

  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const body: Body = {
    firstName: trim(raw.firstName),
    lastName: trim(raw.lastName),
    email: trim(raw.email),
    applicationStatus: trim(raw.applicationStatus),
    pathwayInterest: trim(raw.pathwayInterest),
    statement: trim(raw.statement),
    referral: trim(raw.referral),
    questions: trim(raw.questions),
  };

  for (const field of REQUIRED_FIELDS) {
    if (!body[field]) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const timestamp = new Date().toUTCString();

  console.log("[Apply]", {
    name: `${body.firstName} ${body.lastName}`,
    email: body.email,
    applicationStatus: body.applicationStatus,
    pathwayInterest: body.pathwayInterest || null,
    timestamp,
  });

  try {
    await resend.emails.send({
      from: process.env.APPLICATION_FROM_EMAIL as string,
      to: process.env.APPLICATION_NOTIFICATION_EMAIL as string,
      subject: "New PA Mentor Studio Coaching Application",
      html: buildHtml(body, timestamp),
      text: buildText(body, timestamp),
    });
  } catch (err) {
    console.error(
      "[Apply] Email delivery failed:",
      err instanceof Error ? err.message : "Unknown error"
    );
    return NextResponse.json(
      { error: "Submission failed. Please try again or reach out directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
