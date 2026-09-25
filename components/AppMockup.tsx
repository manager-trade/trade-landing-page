import type { ReactNode } from "react";

interface NavItem {
  label: string;
  active?: boolean;
  section?: string;
}

interface Column {
  key: string;
  label: string;
}

type Row = Record<string, ReactNode>;

export interface AppMockupProps {
  navItems: NavItem[];
  /** Rótulo no topbar (ex.: "Roteiro / Visitas") */
  breadcrumb: string;
  title: string;
  buttonLabel: string;
  columns: Column[];
  rows: Row[];
}

export function StatusBadge({
  label,
  variant = "green",
}: {
  label: string;
  variant?: "green" | "orange" | "gray";
}) {
  const palette = {
    green: {
      bg: "#DCFCE7",
      text: "#16A34A",
      border: "rgba(22,163,74,0.25)",
    },
    orange: {
      bg: "#FEF3C7",
      text: "#D97706",
      border: "rgba(217,119,6,0.25)",
    },
    gray: {
      bg: "#F3F4F6",
      text: "#6B7280",
      border: "rgba(107,114,128,0.25)",
    },
  };
  const c = palette[variant];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "0.2rem 0.55rem",
        borderRadius: 999,
        fontSize: "0.68rem",
        fontWeight: 500,
        backgroundColor: c.bg,
        color: c.text,
        border: `1px solid ${c.border}`,
      }}
    >
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: c.text,
          display: "inline-block",
        }}
      />
      {label}
    </span>
  );
}

/** Preview do painel trade-gestao-web (chrome atual: sidebar escura + Trade+). */
export function AppMockup({
  navItems,
  breadcrumb,
  title,
  buttonLabel,
  columns,
  rows,
}: AppMockupProps) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "440px",
        borderRadius: "16px",
        border: "1px solid #E5E7EB",
        boxShadow:
          "0 20px 40px -12px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.04)",
        overflow: "hidden",
        color: "#111827",
        fontFamily: "inherit",
        backgroundColor: "#F3F4F6",
      }}
    >
      {/* Sidebar escura — espelha AppShell atual */}
      <div
        style={{
          width: "168px",
          backgroundColor: "#1E293B",
          color: "#F8FAFC",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            padding: "1rem 1rem 0.85rem",
            borderBottom: "1px solid rgba(248,250,252,0.1)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "0.95rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            Trade<span style={{ color: "#EA580C" }}>+</span>
          </p>
          <p
            style={{
              margin: "0.15rem 0 0",
              fontSize: "0.58rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(248,250,252,0.55)",
            }}
          >
            Gestão
          </p>
        </div>

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "0.75rem 0.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.7rem",
          }}
        >
          {navItems.map((item) => (
            <div key={`${item.section ?? ""}-${item.label}`}>
              {item.section && (
                <div
                  style={{
                    fontSize: "0.55rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(248,250,252,0.45)",
                    padding: "0 0.55rem 0.28rem",
                  }}
                >
                  {item.section}
                </div>
              )}
              <div
                style={{
                  padding: "0.38rem 0.55rem",
                  borderRadius: 6,
                  fontSize: "0.7rem",
                  fontWeight: item.active ? 600 : 500,
                  color: item.active ? "#FFFFFF" : "rgba(248,250,252,0.55)",
                  backgroundColor: item.active ? "#C2410C" : "transparent",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            padding: "0.65rem 0.75rem",
            borderTop: "1px solid rgba(248,250,252,0.1)",
            fontSize: "0.68rem",
            fontWeight: 500,
            color: "#DC2626",
          }}
        >
          Sair
        </div>
      </div>

      {/* Coluna principal: topbar + conteúdo */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        {/* Topbar clara */}
        <div
          style={{
            height: "44px",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 1.1rem",
            backgroundColor: "rgba(255,255,255,0.85)",
            borderBottom: "1px solid #E5E7EB",
            backdropFilter: "blur(8px)",
          }}
        >
          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: 500,
              color: "#6B7280",
            }}
          >
            {breadcrumb}
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                width: 26,
                height: 26,
                borderRadius: 999,
                backgroundColor: "#EA580C",
                color: "#fff",
                fontSize: "0.62rem",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              SU
            </span>
            <span style={{ fontSize: "0.68rem", color: "#374151", fontWeight: 500 }}>
              Suporte
            </span>
          </div>
        </div>

        {/* Conteúdo */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "0.95rem 1.15rem",
            overflow: "hidden",
            minHeight: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.8rem",
              gap: 12,
            }}
          >
            <h2
              style={{
                fontSize: "1.15rem",
                fontWeight: 600,
                margin: 0,
                color: "#111827",
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </h2>
            <button
              type="button"
              style={{
                backgroundColor: "#EA580C",
                color: "white",
                border: "none",
                padding: "0.4rem 0.85rem",
                borderRadius: 8,
                fontSize: "0.7rem",
                fontWeight: 600,
                cursor: "default",
                boxShadow: "0 4px 12px rgba(234,88,12,0.28)",
                whiteSpace: "nowrap",
                fontFamily: "inherit",
              }}
            >
              {buttonLabel}
            </button>
          </div>

          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 12,
              overflow: "auto",
              flex: 1,
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "left",
              }}
            >
              <thead>
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      style={{
                        backgroundColor: "#F9FAFB",
                        padding: "0.55rem 0.85rem",
                        fontSize: "0.62rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "#6B7280",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                        borderBottom: "1px solid #E5E7EB",
                      }}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        style={{
                          padding: "0.55rem 0.85rem",
                          fontSize: "0.74rem",
                          borderBottom:
                            i < rows.length - 1 ? "1px solid #F3F4F6" : "none",
                          color: "#374151",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row[col.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
