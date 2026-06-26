import { ImageResponse } from "next/og";

// Branded 1200x630 share/preview image (/opengraph-image). Used by Google,
// LinkedIn, WhatsApp, X, etc. — so previews are intentional and on-brand
// instead of a random hero-image crop.
export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "ANAFCO Technologies — Software that runs your business";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0B",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        {/* logo lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 84,
              height: 84,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#C6F24E",
              borderRadius: 22,
              fontSize: 58,
              fontWeight: 800,
              color: "#0A0A0B",
            }}
          >
            A
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#FAFAFA" }}>
            ANAFCO Technologies
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 700, color: "#FAFAFA", lineHeight: 1.05 }}>
            Software that runs your business.
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#A1A1AA", maxWidth: 900 }}>
            SaaS · POS · ISP Billing · AI Automation · Cloud
          </div>
        </div>

        {/* footer url with accent bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", width: 56, height: 6, background: "#C6F24E", borderRadius: 999 }} />
          <div style={{ display: "flex", fontSize: 28, color: "#C6F24E", fontWeight: 600 }}>
            anafco.site
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
