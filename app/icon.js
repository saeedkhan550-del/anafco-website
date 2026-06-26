import { ImageResponse } from "next/og";

// Generates /icon (PNG) — Google's favicon crawler is far more reliable
// with a raster PNG than an SVG. Renders the ANAFCO "A" mark on the
// lime accent tile, matching the brand palette.
export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#C6F24E",
          borderRadius: 16,
          fontSize: 46,
          fontWeight: 800,
          fontFamily: "sans-serif",
          color: "#0A0A0B",
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}
