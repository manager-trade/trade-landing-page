import type { ReactNode } from "react";
import { BrandLogo } from "@/components/BrandLogo";

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
      bg: "rgba(34,197,94,0.1)",
      text: "#16a34a",
      border: "rgba(34,197,94,0.3)",
    },
    orange: {
      bg: "rgba(249,115,22,0.1)",
      text: "#ea6f0a",
      border: "rgba(249,115,22,0.3)",
    },
    gray: {
      bg: "rgba(100,116,139,0.08)",
      text: "#64748b",
      border: "rgba(100,116,139,0.2)",
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

export function AppMockup({
  navItems,
  title,
  buttonLabel,
  columns,
  rows,
}: AppMockupProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "420px",
        borderRadius: "16px",
        border: "1px solid #e2e8f0",
        boxShadow:
          "0 20px 40px -12px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
        overflow: "hidden",
        color: "#1e293b",
        fontFamily: "inherit",
      }}
    >
      {/* Orange top bar */}
      <div
        style={{
          backgroundColor: "#f97316",
          height: "38px",
          padding: "0 1.25rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            color: "white",
            fontWeight: 700,
            fontSize: "0.78rem",
            letterSpacing: "0.04em",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <BrandLogo size="sm" />
          TRADE MANAGER
        </span>
        <span
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "0.68rem",
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
          </svg>
          Sair
        </span>
      </div>

      {/* Body: sidebar + content */}
      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        {/* Sidebar */}
        <div
          style={{
            width: "155px",
            backgroundColor: "#ffffff",
            borderRight: "1px solid #e2e8f0",
            padding: "0.6rem 0.6rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.08rem",
            flexShrink: 0,
            overflowY: "auto",
          }}
        >
          {navItems.map((item) => (
            <div key={item.label}>
              {item.section && (
                <div
                  style={{
                    fontSize: "0.55rem",
                    fontWeight: 700,
                    letterSpacing: "0.09em",
                    textTransform: "uppercase",
                    color: "#94a3b8",
                    padding: "0.55rem 0.5rem 0.18rem",
                  }}
                >
                  {item.section}
                </div>
              )}
              <div
                style={{
                  padding: "0.4rem 0.6rem",
                  borderRadius: 5,
                  fontSize: "0.73rem",
                  color: item.active ? "#f97316" : "#475569",
                  backgroundColor: item.active
                    ? "rgba(249,115,22,0.08)"
                    : "transparent",
                  fontWeight: item.active ? 600 : 400,
                  borderLeft: item.active
                    ? "2px solid #f97316"
                    : "2px solid transparent",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "1rem 1.35rem",
            backgroundColor: "#f8fafc",
            overflow: "hidden",
            minWidth: 0,
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.85rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                margin: 0,
                color: "#1e293b",
                fontFamily: "inherit",
              }}
            >
              {title}
            </h2>
            <button
              style={{
                backgroundColor: "#f97316",
                color: "white",
                border: "none",
                padding: "0.38rem 0.8rem",
                borderRadius: 6,
                fontSize: "0.7rem",
                fontWeight: 500,
                cursor: "default",
                boxShadow: "0 4px 12px rgba(249,115,22,0.3)",
                whiteSpace: "nowrap",
                fontFamily: "inherit",
              }}
            >
              {buttonLabel}
            </button>
          </div>

          {/* Table */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: 10,
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
                        backgroundColor: "#dfdfdf",
                        padding: "0.55rem 0.85rem",
                        fontSize: "0.65rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "#313131",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
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
                            i < rows.length - 1 ? "1px solid #f1f5f9" : "none",
                          color: "#475569",
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
