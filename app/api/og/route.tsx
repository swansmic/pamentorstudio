import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          width: "1200px",
          height: "630px",
          backgroundColor: "#fafaf9",
          padding: "72px",
          borderBottom: "6px solid #a8a29e",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <p
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#78716c",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            PA School Admissions Mentorship
          </p>
          <p
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#1c1917",
              lineHeight: "1.05",
              margin: 0,
            }}
          >
            PA Mentor Studio
          </p>
          <p
            style={{
              fontSize: "26px",
              color: "#57534e",
              lineHeight: "1.4",
              margin: 0,
            }}
          >
            Longitudinal mentorship for serious PA school applicants.
          </p>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
