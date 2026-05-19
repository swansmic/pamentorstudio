import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Stage 1: Log the submission server-side.
    // Stage 2: Wire to email provider (Resend, SendGrid, etc.)
    console.log("Application received:", body);
    console.log("[Apply] Summary:", {
      name: `${body.firstName} ${body.lastName}`,
      email: body.email,
      applicationStatus: body.applicationStatus,
      pathwayInterest: body.pathwayInterest,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
