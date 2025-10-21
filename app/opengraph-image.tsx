import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Shahzad Akram - Front-End Developer"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "white",
        fontWeight: "bold",
      }}
    >
      <div style={{ fontSize: 72, marginBottom: 20 }}>Shahzad Akram</div>
      <div style={{ fontSize: 48, color: "#a78bfa" }}>Front-End Developer</div>
    </div>,
    {
      ...size,
    },
  )
}
