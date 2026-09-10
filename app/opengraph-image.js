import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.taglineEn}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#04342C",
          padding: "80px",
          color: "#E1F5EE",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 44 }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#1D9E75",
              color: "#ffffff",
              fontSize: 26,
              fontWeight: 700,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            LF
          </div>
          <div style={{ fontSize: 26, fontWeight: 700 }}>{siteConfig.name}</div>
        </div>
        <div style={{ display: "flex", fontSize: 58, fontWeight: 800, lineHeight: 1.15, maxWidth: 980 }}>
          {siteConfig.taglineEn}
        </div>
        <div style={{ display: "flex", fontSize: 28, marginTop: 28, color: "#5DCAA5", fontWeight: 600 }}>
          {siteConfig.product} — accountability-app.com
        </div>
      </div>
    ),
    { ...size }
  );
}
