import { ImageResponse } from "next/og";

export const alt = "Karawan Garage — automotive bodywork, paint and modifications in Bahrain";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "#F5F3EE",
          backgroundColor: "#111820",
          backgroundImage:
            "linear-gradient(135deg, rgba(233,162,59,0.13) 0%, transparent 48%), linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "auto, 48px 48px, 48px 48px",
          border: "3px solid #E9A23B",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          <div
            style={{
              width: "68px",
              height: "68px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E9A23B",
              color: "#111820",
              fontSize: "42px",
              fontWeight: 900,
            }}
          >
            K
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: "20px", letterSpacing: "5px", color: "#E9A23B" }}>
            BAHRAIN
            <span style={{ color: "rgba(245,243,238,0.55)", fontSize: "15px", letterSpacing: "3px" }}>AUTOMOTIVE SPECIALISTS</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: "82px", lineHeight: 1, fontWeight: 800, letterSpacing: "-3px" }}>
            KARAWAN GARAGE
          </div>
          <div style={{ width: "150px", height: "8px", backgroundColor: "#E9A23B" }} />
          <div style={{ fontSize: "28px", color: "rgba(245,243,238,0.72)" }}>
            BODYWORK · PAINT · MODIFICATIONS
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between" }}>
          <span style={{ fontSize: "20px", color: "rgba(245,243,238,0.55)", letterSpacing: "3px" }}>SERVING BAHRAIN</span>
          <span style={{ fontSize: "68px", fontWeight: 900, color: "#E9A23B", lineHeight: 1 }}>1959</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
