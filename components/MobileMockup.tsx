"use client";

import { useState } from "react";
import {
  MapPin,
  Lock,
  ChevronRight,
  Settings,
  Store,
  Key,
  Headphones,
  Package,
  LogOut,
  CheckCircle2,
  Clock,
  ScanLine,
} from "lucide-react";

/* ─── Screen definitions ─────────────────────────────────── */

function HomeScreen() {
  const visits = [
    {
      num: 1,
      name: "ATUAL DISTRIBUIDORA",
      addr: "RUA SÃO PEDRO, BAIRRO LIBERDADE",
      done: false,
    },
    {
      num: null,
      name: "SUPERMERCADO UNIÃO",
      addr: "RUA MINAS GERAIS, ESQUINA COM RUA BAHIA",
      locked: true,
    },
    {
      num: null,
      name: "MERCADO BOM PREÇO",
      addr: "AV. CENTRAL, N 450, CENTRO",
      locked: true,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#f2f2f7",
        fontFamily: "inherit",
      }}
    >
      {/* Orange header */}
      <div
        style={{
          background: "linear-gradient(135deg, #c0392b 0%, #e8590c 100%)",
          padding: "1.1rem 1rem 1.4rem",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.6rem",
                opacity: 0.85,
                marginBottom: 2,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Quinta-Feira, 01 de Maio
            </p>
            <p style={{ fontSize: "1rem", fontWeight: 700, margin: 0 }}>
              Olá, CAMILA LIMA
            </p>
          </div>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Settings size={14} color="white" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            backgroundColor: "rgba(255,255,255,0.15)",
            borderRadius: 10,
            padding: "0.6rem",
            marginTop: "0.8rem",
            gap: 0,
          }}
        >
          <div
            style={{
              flex: 1,
              textAlign: "center",
              borderRight: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            <p style={{ fontSize: "1.3rem", fontWeight: 700, margin: 0 }}>4</p>
            <p style={{ fontSize: "0.6rem", opacity: 0.85, margin: 0 }}>
              Lojas hoje
            </p>
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <p style={{ fontSize: "1.3rem", fontWeight: 700, margin: 0 }}>48</p>
            <p style={{ fontSize: "0.6rem", opacity: 0.85, margin: 0 }}>
              Todos os clientes
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "0.9rem 0.75rem", overflowY: "auto" }}>
        <p
          style={{
            fontSize: "0.6rem",
            fontWeight: 700,
            color: "#8e8e93",
            letterSpacing: "0.08em",
            marginBottom: "0.6rem",
          }}
        >
          VISITAS DO DIA
        </p>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          {visits.map((v, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                padding: "0.65rem 0.75rem",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  backgroundColor: v.locked ? "#e5e5ea" : "#e8590c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  shrink: 0,
                  flexShrink: 0,
                }}
              >
                {v.locked ? (
                  <Lock size={12} color="#8e8e93" />
                ) : (
                  <span
                    style={{
                      color: "white",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                    }}
                  >
                    {v.num}
                  </span>
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: v.locked ? "#8e8e93" : "#1c1c1e",
                    margin: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {v.name}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    marginTop: 1,
                  }}
                >
                  <MapPin size={8} color="#8e8e93" />
                  <p
                    style={{
                      fontSize: "0.55rem",
                      color: "#8e8e93",
                      margin: 0,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {v.addr}
                  </p>
                </div>
              </div>
              {!v.locked && <ChevronRight size={14} color="#c7c7cc" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VisitaScreen() {
  const lojas = [
    { name: "LOJA AURORA", addr: "RUA CENTRAL, N 100, CENTRO" },
    { name: "LOJA VISTA ALTA", addr: "AV. PRINCIPAL, Bairro Mirante" },
    { name: "LOJA NOVA PRAIA", addr: "RUA DAS ONDAS, Bairro Litoral" },
    { name: "LOJA JARDIM SUL", addr: "AV. SUL, Bairro das Rosas" },
    { name: "MERCADO BOM PREÇO", addr: "AV. CENTRAL, N 450, CENTRO" },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#f2f2f7",
        fontFamily: "inherit",
      }}
    >
      {/* Orange top bar */}
      <div
        style={{
          background: "linear-gradient(135deg, #c0392b 0%, #e8590c 100%)",
          height: 40,
        }}
      />
      {/* White sheet */}
      <div
        style={{
          flex: 1,
          backgroundColor: "white",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          marginTop: -16,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "0.9rem 0.85rem 0.5rem",
            borderBottom: "1px solid #f2f2f7",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.65rem",
            }}
          >
            <p
              style={{
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "#1c1c1e",
                margin: 0,
              }}
            >
              Selecionar Loja
            </p>
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                backgroundColor: "#e5e5ea",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "0.6rem",
                  color: "#636366",
                  fontWeight: 600,
                }}
              >
                ✕
              </span>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#f2f2f7",
              borderRadius: 8,
              padding: "0.4rem 0.65rem",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span style={{ fontSize: "0.6rem", color: "#8e8e93" }}>🔍</span>
            <span style={{ fontSize: "0.68rem", color: "#8e8e93" }}>
              Buscar pelo nome ou cidade...
            </span>
          </div>
        </div>
        <p
          style={{
            fontSize: "0.58rem",
            fontWeight: 600,
            color: "#8e8e93",
            letterSpacing: "0.07em",
            padding: "0.5rem 0.85rem 0.3rem",
          }}
        >
          36 LOJAS
        </p>
        <div
          style={{ flex: 1, overflowY: "auto", padding: "0 0.75rem 0.75rem" }}
        >
          {lojas.map((l, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.6rem 0.5rem",
                borderBottom:
                  i < lojas.length - 1 ? "1px solid #f2f2f7" : "none",
              }}
            >
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  backgroundColor: "#fef0e7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Store size={14} color="#e8590c" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: "#1c1c1e",
                    margin: 0,
                  }}
                >
                  {l.name}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    marginTop: 1,
                  }}
                >
                  <MapPin size={8} color="#8e8e93" />
                  <p
                    style={{
                      fontSize: "0.55rem",
                      color: "#8e8e93",
                      margin: 0,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {l.addr}
                  </p>
                </div>
              </div>
              <ChevronRight size={13} color="#c7c7cc" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PerfilScreen() {
  const menuConta = [
    { icon: <Key size={14} color="#e8590c" />, label: "Alterar Senha" },
    { icon: <Headphones size={14} color="#e8590c" />, label: "Suporte" },
  ];
  const menuSistema = [
    {
      icon: <Package size={14} color="#e8590c" />,
      label: "Versão do App",
      sub: "1.0.0",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#f2f2f7",
        fontFamily: "inherit",
        overflowY: "auto",
      }}
    >
      {/* Profile header */}
      <div
        style={{
          background: "linear-gradient(135deg, #c0392b 0%, #e8590c 100%)",
          padding: "1.25rem 1rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "white", fontSize: "1.3rem", fontWeight: 700 }}>
            A
          </span>
        </div>
        <p
          style={{
            fontSize: "0.85rem",
            fontWeight: 700,
            color: "white",
            margin: 0,
          }}
        >
          NOME DO USUÁRIO
        </p>
        <p
          style={{
            fontSize: "0.65rem",
            color: "rgba(255,255,255,0.8)",
            margin: 0,
          }}
        >
          suporte@trademanager.com.br
        </p>
      </div>

      <div
        style={{
          padding: "0.9rem 0.75rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        {/* Conta */}
        <div>
          <p
            style={{
              fontSize: "0.58rem",
              fontWeight: 700,
              color: "#8e8e93",
              letterSpacing: "0.08em",
              marginBottom: "0.4rem",
              paddingLeft: 4,
            }}
          >
            CONTA
          </p>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            {menuConta.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  padding: "0.65rem 0.75rem",
                  borderBottom:
                    i < menuConta.length - 1 ? "1px solid #f2f2f7" : "none",
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 7,
                    backgroundColor: "#fef0e7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {m.icon}
                </div>
                <span
                  style={{ flex: 1, fontSize: "0.72rem", color: "#1c1c1e" }}
                >
                  {m.label}
                </span>
                <ChevronRight size={13} color="#c7c7cc" />
              </div>
            ))}
          </div>
        </div>

        {/* Sistema */}
        <div>
          <p
            style={{
              fontSize: "0.58rem",
              fontWeight: 700,
              color: "#8e8e93",
              letterSpacing: "0.08em",
              marginBottom: "0.4rem",
              paddingLeft: 4,
            }}
          >
            SISTEMA
          </p>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            {menuSistema.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  padding: "0.65rem 0.75rem",
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 7,
                    backgroundColor: "#fef0e7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {m.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <p
                    style={{ fontSize: "0.72rem", color: "#1c1c1e", margin: 0 }}
                  >
                    {m.label}
                  </p>
                  {m.sub && (
                    <p
                      style={{
                        fontSize: "0.6rem",
                        color: "#8e8e93",
                        margin: 0,
                      }}
                    >
                      {m.sub}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logout */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.65rem",
              padding: "0.65rem 0.75rem",
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 7,
                backgroundColor: "#fff0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LogOut size={13} color="#e8590c" />
            </div>
            <span
              style={{
                flex: 1,
                fontSize: "0.72rem",
                color: "#e8590c",
                fontWeight: 500,
              }}
            >
              Sair da conta
            </span>
            <ChevronRight size={13} color="#e8590c" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Phone frame ────────────────────────────────────────── */

const SCREENS = [
  {
    label: "Roteiro",
    icon: <CheckCircle2 size={13} />,
    component: <HomeScreen />,
  },
  { label: "Lojas", icon: <Store size={13} />, component: <VisitaScreen /> },
  {
    label: "Perfil",
    icon: <Settings size={13} />,
    component: <PerfilScreen />,
  },
];

export function MobileMockup() {
  const [active, setActive] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.25rem",
        fontFamily: "inherit",
      }}
    >
      {/* Tab selector */}
      <div style={{ display: "flex", gap: 8 }}>
        {SCREENS.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setActive(i)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              padding: "0.4rem 0.85rem",
              borderRadius: 8,
              fontSize: "0.78rem",
              fontWeight: 500,
              cursor: "pointer",
              border: "none",
              fontFamily: "inherit",
              backgroundColor: active === i ? "#f97316" : "white",
              color: active === i ? "white" : "#64748b",
              boxShadow:
                active === i
                  ? "0 2px 8px rgba(249,115,22,0.3)"
                  : "0 0 0 1px #e2e8f0",
              transition: "all 0.15s",
            }}
          >
            {s.icon}
            {s.label}
          </button>
        ))}
      </div>

      {/* Phone */}
      <div
        style={{
          width: 270,
          height: 560,
          backgroundColor: "#1c1c1e",
          borderRadius: 42,
          padding: "12px 10px",
          boxShadow:
            "0 30px 60px -10px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.1), 0 0 0 1px #111",
          position: "relative",
        }}
      >
        {/* Dynamic island */}
        <div
          style={{
            position: "absolute",
            top: 17,
            left: "50%",
            transform: "translateX(-50%)",
            width: 82,
            height: 26,
            backgroundColor: "#000",
            borderRadius: 50,
            zIndex: 10,
          }}
        />

        {/* Status bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 14px",
            height: 33,
            position: "relative",
            zIndex: 5,
          }}
        >
          <span
            style={{ fontSize: "0.68rem", fontWeight: 700, color: "white" }}
          >
            11:02
          </span>
          <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
            <svg width="12" height="9" viewBox="0 0 12 9" fill="white">
              <rect x="0" y="3" width="2" height="6" rx="0.5" />
              <rect x="3" y="2" width="2" height="7" rx="0.5" />
              <rect x="6" y="1" width="2" height="8" rx="0.5" />
              <rect x="9" y="0" width="2" height="9" rx="0.5" />
            </svg>
            <svg width="13" height="10" viewBox="0 0 13 10" fill="white">
              <path d="M6.5 2.5a6 6 0 0 1 4.24 1.76l1.06-1.06A7.5 7.5 0 0 0 6.5 1a7.5 7.5 0 0 0-5.3 2.2l1.06 1.06A6 6 0 0 1 6.5 2.5z" />
              <path d="M6.5 5a3 3 0 0 1 2.12.88l1.06-1.06A4.5 4.5 0 0 0 6.5 3.5a4.5 4.5 0 0 0-3.18 1.32l1.06 1.06A3 3 0 0 1 6.5 5z" />
              <circle cx="6.5" cy="8" r="1.5" />
            </svg>
            <svg width="19" height="10" viewBox="0 0 19 10" fill="none">
              <rect
                x="0.5"
                y="0.5"
                width="16"
                height="9"
                rx="3.5"
                stroke="white"
                strokeOpacity="0.35"
              />
              <rect x="1" y="1" width="12" height="8" rx="3" fill="white" />
              <path
                d="M17.5 3.5v3a1.5 1.5 0 0 0 0-3z"
                fill="white"
                fillOpacity="0.4"
              />
            </svg>
          </div>
        </div>

        {/* Screen content */}
        <div
          style={{
            height: "calc(100% - 33px)",
            borderRadius: 33,
            overflow: "hidden",
            backgroundColor: "#f2f2f7",
          }}
        >
          {SCREENS[active].component}
        </div>
      </div>
    </div>
  );
}
