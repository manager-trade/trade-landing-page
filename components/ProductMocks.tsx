/**
 * Mockups CSS simplificados — espelham o chrome do Trade+ Gestão e do app,
 * sem reproduzir telas completas. Cores do MIV / tokens reais:
 * primary #EA580C · tertiary #16A34A · sidebar #111827 · content #F6F5F3
 */

import type { ReactNode } from "react";

const ORANGE = "#EA580C";
const GREEN = "#16A34A";
const SIDEBAR = "#111827";
const CONTENT = "#F6F5F6";
const SURFACE = "#FFFFFF";
const MUTED = "#6B7280";
const LINE = "#E5E7EB";

function Dot({ color }: { color: string }) {
  return (
    <span
      className="inline-block h-1.5 w-1.5 rounded-full"
      style={{ backgroundColor: color }}
      aria-hidden
    />
  );
}

function StatusPill({
  label,
  tone,
}: {
  label: string;
  tone: "ok" | "run" | "wait";
}) {
  const map = {
    ok: { bg: "#DCFCE7", fg: GREEN },
    run: { bg: "#FFEDD5", fg: ORANGE },
    wait: { bg: "#F3F4F6", fg: MUTED },
  }[tone];
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium"
      style={{ backgroundColor: map.bg, color: map.fg }}
    >
      <Dot color={map.fg} />
      {label}
    </span>
  );
}

/** Painel web simplificado: sidebar grafite + tabela operacional. */
export function WebPanelMock({
  variant = "visitas",
  className = "",
}: {
  variant?: "visitas" | "lojas" | "rotas";
  className?: string;
}) {
  const nav = [
    { label: "Painel" },
    { label: "Rotas", active: variant === "rotas" },
    { label: "Visitas", active: variant === "visitas" },
    { label: "Lojas", active: variant === "lojas" },
    { label: "Produtos" },
  ];

  const titles = {
    visitas: "Visitas",
    lojas: "Lojas",
    rotas: "Rotas",
  } as const;

  type Row = [string, string, string, "ok" | "run" | "wait", string];
  const rows: Row[] =
    variant === "lojas"
      ? [
          ["Aliança Express", "Boa Vista", "RR", "ok", "Ativa"],
          ["Boa Esperança Max", "Boa Vista", "RR", "ok", "Ativa"],
          ["São Pedro Express", "Manaus", "AM", "wait", "Inativa"],
          ["União Alimentos", "Boa Vista", "RR", "ok", "Ativa"],
        ]
      : variant === "rotas"
        ? [
            ["Carlos Fonseca", "Zona Oeste", "Seg–Sex", "ok", "Ativa"],
            ["Ana Oliveira", "Centro", "Seg–Qui", "ok", "Ativa"],
            ["Pedro Santos", "Boa Vista", "Ter–Sáb", "run", "Rascunho"],
            ["Juliana Lopes", "Matutina", "Seg–Sex", "ok", "Ativa"],
          ]
        : [
            ["Aliança Express", "Carlos Fonseca", "Hoje", "run", "Em andamento"],
            ["Boa Esperança Max", "Ana Oliveira", "Hoje", "ok", "Concluída"],
            ["União Alimentos", "Pedro Santos", "Ontem", "ok", "Concluída"],
            ["São Pedro Express", "Juliana Lopes", "Ontem", "wait", "Pendente"],
          ];

  const cols =
    variant === "lojas"
      ? ["Fantasia", "Cidade", "UF", "Situação"]
      : variant === "rotas"
        ? ["Promotor", "Rota", "Dias", "Status"]
        : ["Loja", "Promotor", "Quando", "Status"];

  return (
    <div
      className={`flex overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.55)] ${className}`}
      style={{ backgroundColor: CONTENT, height: 360 }}
      aria-hidden
    >
      {/* Sidebar — chrome Gestão */}
      <aside
        className="hidden w-[132px] shrink-0 flex-col p-3 sm:flex"
        style={{ backgroundColor: SIDEBAR }}
      >
        <p className="px-2 text-[13px] font-semibold tracking-tight text-white">
          Trade<span style={{ color: ORANGE }}>+</span>
        </p>
        <p className="mt-0.5 px-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">
          Gestão
        </p>
        <nav className="mt-5 flex flex-col gap-1">
          {nav.map((item) => (
            <div
              key={item.label}
              className="rounded-md px-2.5 py-1.5 text-[11px] font-medium"
              style={{
                backgroundColor: item.active ? ORANGE : "transparent",
                color: item.active ? "#fff" : "rgba(248,250,252,0.55)",
              }}
            >
              {item.label}
            </div>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div
          className="flex items-center justify-between border-b px-4 py-3"
          style={{ borderColor: LINE, backgroundColor: SURFACE }}
        >
          <div>
            <p className="text-[10px] text-slate-400">Campo / {titles[variant]}</p>
            <p className="text-sm font-semibold text-slate-900">
              {titles[variant]}
            </p>
          </div>
          <span
            className="rounded-lg px-2.5 py-1 text-[10px] font-semibold text-white"
            style={{ backgroundColor: ORANGE }}
          >
            Filtrar
          </span>
        </div>

        <div className="flex gap-2 border-b px-4 py-2.5" style={{ borderColor: LINE }}>
          {[72, 96, 64].map((w, i) => (
            <div
              key={i}
              className="h-7 rounded-lg"
              style={{ width: w, backgroundColor: "#F3F4F6", border: `1px solid ${LINE}` }}
            />
          ))}
        </div>

        <div className="min-w-0 flex-1 overflow-hidden px-2 pb-2 pt-1">
          <div
            className="grid gap-x-2 px-2 py-2 text-[9px] font-semibold uppercase tracking-wide text-slate-400"
            style={{
              gridTemplateColumns: "1.4fr 1.1fr 0.7fr 0.9fr",
            }}
          >
            {cols.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid items-center gap-x-2 rounded-lg px-2 py-2.5 text-[11px]"
              style={{
                gridTemplateColumns: "1.4fr 1.1fr 0.7fr 0.9fr",
                backgroundColor: i % 2 === 0 ? SURFACE : "transparent",
              }}
            >
              <span className="truncate font-medium text-slate-800">{row[0]}</span>
              <span className="truncate text-slate-500">{row[1]}</span>
              <span className="truncate text-slate-500">{row[2]}</span>
              <StatusPill label={row[4]} tone={row[3]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Mini painel — só conteúdo, sem sidebar (overlay / secondary). */
export function WebPanelMini({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border shadow-lg ${className}`}
      style={{ backgroundColor: SURFACE, borderColor: LINE }}
      aria-hidden
    >
      <div
        className="flex items-center justify-between px-3 py-2"
        style={{ backgroundColor: ORANGE }}
      >
        <span className="text-[11px] font-semibold text-white">Produtos</span>
        <span className="rounded bg-white/20 px-1.5 py-0.5 text-[9px] text-white">
          + Novo
        </span>
      </div>
      <div className="space-y-2 p-3">
        {[
          ["Achocolatado 1kg", "Ativo"],
          ["Água Sanitária 1L", "Ativo"],
          ["Arroz T1 5kg", "Ativo"],
        ].map(([name, st]) => (
          <div key={name} className="flex items-center justify-between gap-2">
            <div className="h-2 flex-1 rounded" style={{ backgroundColor: "#F3F4F6" }}>
              <span className="sr-only">{name}</span>
            </div>
            <span className="text-[10px] font-medium text-slate-600">{name}</span>
            <StatusPill label={st} tone="ok" />
          </div>
        ))}
      </div>
    </div>
  );
}

const SECONDARY = "#9A3412";

function PhoneChrome({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative w-[232px] shrink-0 overflow-hidden rounded-[2rem] bg-[#0a0a0a] p-[3px] shadow-[0_28px_60px_-20px_rgba(0,0,0,0.7)] ${className}`}
      aria-hidden
    >
      <div className="relative overflow-hidden rounded-[1.85rem] bg-[#F3F4F6]">
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-2.5 z-20 h-[22px] w-[78px] -translate-x-1/2 rounded-full bg-black" />
        {children}
      </div>
    </div>
  );
}

/** App — roteiro do dia (espelha RoteiroScreen de forma simplificada). */
export function PhoneRoteiroMock({ className = "" }: { className?: string }) {
  const stores = [
    {
      n: 1,
      name: "ATUAL DISTRIBUIDORA",
      addr: "Rua São Pedro, Liberdade",
      state: "open" as const,
    },
    {
      n: 2,
      name: "SUPERMERCADO UNIÃO",
      addr: "Rua Minas Gerais, Centro",
      state: "locked" as const,
    },
    {
      n: 3,
      name: "MERCADO BOM PREÇO",
      addr: "Av. Central, 450",
      state: "locked" as const,
    },
  ];

  return (
    <PhoneChrome className={className}>
      <div className="flex min-h-[460px] flex-col">
        <div
          className="px-4 pb-4 pt-11 text-white"
          style={{
            background: `linear-gradient(160deg, ${SECONDARY} 0%, ${ORANGE} 100%)`,
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-wide text-orange-100/90">
                Quinta-feira, 25 nov
              </p>
              <p className="mt-0.5 text-[15px] font-bold leading-tight">
                Olá, Camila
              </p>
            </div>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-[11px] font-bold">
              CL
            </span>
          </div>

          <div className="mt-3.5 flex overflow-hidden rounded-xl bg-white/15">
            <div className="flex-1 border-r border-white/20 px-2 py-2 text-center">
              <p className="text-xl font-bold leading-none">3</p>
              <p className="mt-0.5 text-[9px] text-orange-50/90">Lojas hoje</p>
            </div>
            <div className="flex-1 px-2 py-2 text-center">
              <p className="text-xl font-bold leading-none">48</p>
              <p className="mt-0.5 text-[9px] text-orange-50/90">Clientes</p>
            </div>
          </div>
        </div>

        {/* Banner visita ativa */}
        <div
          className="mx-3 -mt-2.5 flex items-center gap-2 rounded-xl border bg-white px-3 py-2.5 shadow-sm"
          style={{ borderColor: "#FED7AA" }}
        >
          <span
            className="h-2 w-2 shrink-0 rounded-full"
            style={{ backgroundColor: ORANGE }}
          />
          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-medium text-slate-400">
              Visita em andamento
            </p>
            <p className="truncate text-[11px] font-semibold text-slate-800">
              Atual Distribuidora
            </p>
          </div>
          <span
            className="shrink-0 text-[10px] font-bold"
            style={{ color: ORANGE }}
          >
            Abrir
          </span>
        </div>

        <div className="flex-1 space-y-2 px-3 pb-4 pt-3">
          <p className="px-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
            Visitas do dia
          </p>
          {stores.map((s) => (
            <div
              key={s.n}
              className="flex items-center gap-2.5 rounded-xl border bg-white p-2.5"
              style={{
                borderColor: s.state === "open" ? "#FDBA74" : LINE,
                opacity: s.state === "locked" ? 0.72 : 1,
              }}
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white"
                style={{
                  backgroundColor: s.state === "open" ? ORANGE : "#9CA3AF",
                }}
              >
                {s.state === "locked" ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 8h-1V6a4 4 0 10-8 0v2H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-8a2 2 0 00-2-2zM9 6a2 2 0 114 0v2H9V6z" />
                  </svg>
                ) : (
                  s.n
                )}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-bold uppercase tracking-tight text-slate-800">
                  {s.name}
                </p>
                <p className="truncate text-[9px] text-slate-400">{s.addr}</p>
              </div>
              {s.state === "open" ? (
                <StatusPill label="Aberta" tone="run" />
              ) : (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="2"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </PhoneChrome>
  );
}

/** App — check-in com foto + GPS (simplificado). */
export function PhoneCheckinMock({ className = "" }: { className?: string }) {
  return (
    <PhoneChrome className={className}>
      <div className="flex min-h-[460px] flex-col">
        <div
          className="px-4 pb-3.5 pt-11 text-white"
          style={{
            background: `linear-gradient(160deg, ${SECONDARY} 0%, ${ORANGE} 100%)`,
          }}
        >
          <p className="text-[9px] font-medium uppercase tracking-wide text-orange-100/90">
            Check-in
          </p>
          <p className="mt-0.5 text-[15px] font-bold leading-tight">
            Aliança Express
          </p>
          <p className="mt-1 text-[10px] text-orange-50/85">
            Foto + GPS obrigatórios
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-3">
          {/* Viewfinder */}
          <div
            className="relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl"
            style={{
              minHeight: 168,
              background:
                "linear-gradient(145deg, #1e293b 0%, #334155 50%, #1e293b 100%)",
            }}
          >
            <div
              className="absolute inset-4 rounded-xl border-2 border-dashed"
              style={{ borderColor: "rgba(249,115,22,0.65)" }}
            />
            <div className="relative z-10 text-center">
              <div
                className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg"
                style={{ backgroundColor: ORANGE }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </div>
              <p className="text-[11px] font-semibold text-white">
                Enquadre a fachada
              </p>
              <p className="mt-0.5 text-[9px] text-slate-300">
                Toque para capturar
              </p>
            </div>
          </div>

          <div
            className="flex items-center gap-2.5 rounded-xl border bg-white px-3 py-2.5"
            style={{ borderColor: LINE }}
          >
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
              style={{ backgroundColor: "#DCFCE7", color: GREEN }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-slate-800">
                GPS capturado
              </p>
              <p className="text-[9px] text-slate-400">Precisão 12 m · Boa Vista</p>
            </div>
            <span
              className="ml-auto text-[10px] font-bold"
              style={{ color: GREEN }}
            >
              OK
            </span>
          </div>

          <div
            className="rounded-xl py-3 text-center text-[13px] font-bold text-white shadow-[0_8px_20px_-8px_rgba(234,88,12,0.8)]"
            style={{ backgroundColor: ORANGE }}
          >
            Confirmar check-in
          </div>
        </div>
      </div>
    </PhoneChrome>
  );
}
