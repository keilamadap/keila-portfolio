import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.positioning}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Editorial OG card generated at build time. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAF8F6",
          color: "#1F1B18",
          padding: "56px 64px",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "2px solid #1F1B18", paddingBottom: 14, fontSize: 20, letterSpacing: 4, fontFamily: "monospace" }}>
          <span>KEILA AMADA — FRONTEND ENGINEER</span>
          <span style={{ color: "#A8432A" }}>NATAL, BR</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 82, lineHeight: 1.02, letterSpacing: -2 }}>
          <span>Frontend Engineer building</span>
          <span>
            <span style={{ color: "#A8432A", fontStyle: "italic" }}>scalable</span>&nbsp;digital products.
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, letterSpacing: 3, fontFamily: "monospace", color: "#4D4540" }}>
          <span>REACT · NEXT.JS · TYPESCRIPT</span>
          <span>BASED IN BRAZIL. WORKING GLOBALLY.</span>
        </div>
      </div>
    ),
    size,
  );
}
