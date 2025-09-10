import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0b0b0b",
          color: "#fff",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700 }}>Cheffery</div>
        <div style={{ fontSize: 28, marginTop: 8, color: "#D4AF37" }}>Where Innovators Come to Celebrate.</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}


