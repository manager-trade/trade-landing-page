import { ImageResponse } from "next/og";

export const alt =
  "Trade Manager — Gestão completa de promotores de vendas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #FFF7ED 0%, #FFFFFF 45%, #FFEDD5 100%)",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#F97316",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            T
          </div>
          <span style={{ fontSize: 32, fontWeight: 700, color: "#111827" }}>
            Trade Manager
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 54,
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.15,
              maxWidth: 960,
            }}
          >
            <span>Gestão completa de</span>
            <span style={{ color: "#F97316" }}>promotores de vendas</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#6B7280",
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            Visitas, estoque, rotas e desempenho em tempo real para operações de
            Trade Marketing no Brasil.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span style={{ fontSize: 22, color: "#9A3412", fontWeight: 600 }}>
            www.trademanager.com.br
          </span>
          <span
            style={{
              fontSize: 18,
              color: "#C2410C",
              background: "#FFEDD5",
              border: "1px solid #FDBA74",
              borderRadius: 999,
              padding: "10px 18px",
              fontWeight: 600,
            }}
          >
            Sistema de Trade Marketing
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
