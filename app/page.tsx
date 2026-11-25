"use client";

import { useState } from "react";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import {
  WebPanelMock,
  WebPanelMini,
  PhoneRoteiroMock,
  PhoneCheckinMock,
} from "@/components/ProductMocks";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LOGIN_URL,
  REGISTER_URL,
  TRIAL_LABEL,
  TRIAL_NOTE,
  WHATSAPP_URL,
} from "@/lib/links";
import {
  Menu,
  X,
  ArrowRight,
  MapPin,
  Camera,
  Route,
  BarChart3,
  Mail,
  Phone,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

const NAV = [
  { label: "Como funciona", href: "#rota" },
  { label: "Web", href: "#web" },
  { label: "App", href: "#app" },
  { label: "Contato", href: "#contato" },
];

/** Fluxo real: route-plans (web) → /routes/list (app) → checkin/checkout foto+GPS → visitas/relatórios */
const ROUTE_STOPS = [
  {
    pin: "01",
    title: "Planejar",
    desc: "Organize promotores, roteiros e pontos de venda no painel — quem visita qual loja, em qual dia.",
    icon: Route,
  },
  {
    pin: "02",
    title: "Executar",
    desc: "O promotor segue o roteiro no app, loja a loja, com status pendente, em andamento e concluída.",
    icon: MapPin,
  },
  {
    pin: "03",
    title: "Evidenciar",
    desc: "Check-in e check-out com foto e GPS no ponto de venda. Fotos do antes e depois e checklist de execução.",
    icon: Camera,
  },
  {
    pin: "04",
    title: "Medir",
    desc: "Acompanhe a equipe de promotores: visitas, desempenho, validade e estoque no painel web.",
    icon: BarChart3,
  },
];

const WEB_POINTS = [
  "Gestão de promotores, perfis e equipe de campo",
  "Roteiros semanais e cobertura dos pontos de venda",
  "Visitas com resumo, fotos e checkout do supervisor",
  "Lojas, produtos e relatórios de validade e estoque",
];

const APP_POINTS = [
  "Roteiro do dia com ordem e status da visita",
  "Check-in/out com câmera e geolocalização",
  "Validade: departamentos, EAN e conferência",
  "Execução com fotos do antes e depois e checklist",
];

const FOOTER_COLUMNS = [
  {
    title: "Produto",
    links: [
      { label: "Como funciona", href: "/#rota" },
      { label: "Plataforma Web", href: "/#web" },
      { label: "App Mobile", href: "/#app" },
    ],
  },
  {
    title: "Soluções",
    links: [
      { label: "Gestão de Promotores", href: "/software-gestao-promotores" },
      {
        label: "App para Promotor",
        href: "/aplicativo-para-promotor-de-vendas",
      },
      { label: "Trade Marketing", href: "/software-de-trade-marketing" },
      { label: "Roteirização", href: "/roteirizacao-de-promotores" },
      { label: "Check-in GPS", href: "/check-in-gps-pdv" },
      { label: "Controle de Validade", href: "/controle-de-validade-pdv" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre Nós", href: "/sobre" },
      { label: "Parceiros", href: "/parceiros" },
      { label: "Fale Conosco", href: "/#contato" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Termos de Uso", href: "/termos" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade" },
      { label: "LGPD", href: "/lgpd" },
    ],
  },
];

function MapRoutes({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 700"
      fill="none"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        className="route-draw"
        d="M80 520 C220 480, 280 360, 420 340 S620 380, 700 280 S880 140, 1080 180"
        stroke="var(--map-line)"
        strokeWidth="2.5"
      />
      <path
        className="route-draw"
        d="M140 160 C300 200, 360 300, 520 320 S760 260, 900 400 S1020 560, 1140 520"
        stroke="rgba(36,166,79,0.35)"
        strokeWidth="2"
      />
      {[
        [180, 500],
        [420, 340],
        [700, 280],
        [900, 400],
        [1080, 180],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <circle className="pin-pulse" r="18" fill="rgba(249,115,22,0.35)" />
          <circle r="7" fill={i % 2 ? "#24a64f" : "#f97316"} />
          <circle r="2.5" fill="#fff" />
        </g>
      ))}
    </svg>
  );
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b1220] font-sans text-slate-100">
      {/* ── HEADER ─────────────────────────────────────────────── */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0b1220]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-white">
            <BrandMark size="md" />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-orange-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:text-orange-400"
            >
              Entrar
            </a>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition-[background-color,transform] hover:bg-orange-600 hover:-translate-y-0.5"
            >
              {TRIAL_LABEL}
            </a>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-slate-300 hover:bg-white/5 hover:text-orange-400 md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/5 bg-[#0b1220] px-4 py-4 md:hidden">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2.5 text-sm text-slate-200 hover:bg-white/5 hover:text-orange-400"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center rounded-full bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              {TRIAL_LABEL}
            </a>
          </div>
        )}
      </header>

      {/* ── HERO: territory map ────────────────────────────────── */}
      <section
        className="map-ground relative min-h-[100svh] overflow-hidden bg-[#0b1220] pt-16"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 20% 10%, rgba(249,115,22,0.22), transparent 55%), radial-gradient(ellipse 60% 45% at 90% 30%, rgba(36,166,79,0.12), transparent 50%), linear-gradient(165deg, #0b1220 0%, #111827 45%, #0f172a 100%)",
        }}
      >
        <MapRoutes className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />

        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-between px-4 pt-14 sm:px-6 lg:px-8 lg:pt-16">
          <div className="reveal-up max-w-2xl pb-10">
            <BrandMark size="xl" className="mb-6" />
            <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-slate-100 sm:text-4xl lg:text-[2.75rem]">
              Gestão de{" "}
              <span className="font-extrabold text-orange-400">
                promotores
              </span>{" "}
              e pontos de venda em um só mapa
            </h1>
            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
              Organize a equipe de promotores, planeje rotas no web e acompanhe
              cada ponto de venda no app — com check-in, GPS e foto como prova
              da visita.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_-12px_rgba(234,88,12,0.9)] transition-[background-color,transform] hover:bg-orange-600 hover:-translate-y-0.5"
              >
                {TRIAL_LABEL}
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="#rota"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-orange-400/50 hover:text-orange-300"
              >
                Ver a rota
              </Link>
            </div>
            <p className="mt-3 text-xs text-slate-400">{TRIAL_NOTE}</p>
          </div>

          <div className="relative -mx-4 mt-auto sm:-mx-6 lg:-mx-8">
            <div className="rounded-t-2xl border border-white/10 border-b-0 bg-transparent p-2 shadow-[0_-24px_80px_-20px_rgba(234,88,12,0.45)] sm:rounded-t-3xl sm:p-3">
              <WebPanelMock variant="visitas" className="rounded-t-xl sm:rounded-t-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── ROTA: mechanism ────────────────────────────────────── */}
      <section
        id="rota"
        className="scroll-mt-20 border-t border-white/5 bg-[#111827] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Uma rota. Quatro paradas. Operação fechada.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Do cadastro dos promotores ao check-in no ponto de venda: o
              Trade+ liga o plano da gestão à execução em campo.
            </p>
          </div>

          <ol className="relative mt-14 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="pointer-events-none absolute left-[12%] right-[12%] top-7 hidden h-px bg-gradient-to-r from-[#EA580C] via-orange-400/80 to-[#16A34A] lg:block"
              aria-hidden
            />
            {ROUTE_STOPS.map((stop) => {
              const Icon = stop.icon;
              return (
                <li
                  key={stop.pin}
                  className="relative border-t border-white/10 py-8 lg:border-t-0 lg:px-4 lg:pt-0"
                >
                  <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#EA580C] text-white shadow-[0_0_0_6px_#111827]">
                    <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
                    <span className="sr-only">Parada {stop.pin}</span>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-400">
                    {stop.pin}
                  </p>
                  <h3 className="mt-1.5 text-xl font-bold tracking-tight text-white">
                    {stop.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {stop.desc}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ── WEB pane ───────────────────────────────────────────── */}
      <section
        id="web"
        className="scroll-mt-20 bg-slate-50 py-20 text-slate-900 sm:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-sm font-semibold text-orange-600">
              Destino · Painel web
            </p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              O território visto de cima
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
              No painel web, gerencie promotores, planeje rotas, acompanhe
              visitas e mantenha lojas e produtos — tudo pelo navegador.
            </p>
            <ul className="mt-8 space-y-3">
              {WEB_POINTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#EA580C]" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://web.trademanager.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#EA580C]"
            >
              Abrir painel
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative">
            <WebPanelMock variant="lojas" />
            <div className="absolute -bottom-6 -left-4 hidden w-52 sm:block lg:-left-8">
              <WebPanelMini />
            </div>
          </div>
        </div>
      </section>

      {/* ── APP pane ───────────────────────────────────────────── */}
      <section
        id="app"
        className="map-ground relative scroll-mt-20 overflow-hidden bg-[#0b1220] py-20 sm:py-24"
      >
        <MapRoutes className="pointer-events-none absolute inset-0 h-full w-full opacity-40" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-2 relative flex justify-center lg:order-1 lg:justify-end">
            <div className="relative flex items-end">
              <PhoneRoteiroMock className="relative z-10" />
              <PhoneCheckinMock className="relative -ml-10 hidden translate-y-8 sm:block lg:-ml-12" />
              <div
                className="pointer-events-none absolute -inset-8 -z-0 rounded-full bg-[#EA580C]/15 blur-3xl"
                aria-hidden
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold text-[#16A34A]">
              Destino · App do promotor
            </p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Na mão do promotor, em cada ponto de venda
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-300">
              App Trade+ para campo: roteiro do dia, check-in com evidência,
              validade e execução no ponto de venda.
            </p>
            <ul className="mt-8 space-y-3">
              {APP_POINTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-200"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#16A34A]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://apps.apple.com/br/app/trade/id6633411717"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-black px-4 py-2.5 text-white ring-1 ring-white/20 transition-colors hover:bg-slate-900"
              >
                <svg
                  className="h-7 w-7 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="text-left leading-tight">
                  <span className="block text-[10px] font-medium text-slate-300">
                    Baixar na
                  </span>
                  <span className="block text-sm font-semibold tracking-tight">
                    App Store
                  </span>
                </span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.trademanager.tradeapp&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-black px-4 py-2.5 text-white ring-1 ring-white/20 transition-colors hover:bg-slate-900"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/google-play-icon.png"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 shrink-0 object-contain"
                  aria-hidden
                />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] font-medium text-slate-300">
                    Disponível no
                  </span>
                  <span className="block text-sm font-semibold tracking-tight">
                    Google Play
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTATO ────────────────────────────────────────────── */}
      <section
        id="contato"
        className="scroll-mt-20 border-t border-white/5 bg-[#111827] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border-2 border-orange-500 bg-[#0b1220]">
            <MapPin className="h-6 w-6 text-orange-400" />
          </div>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Próximo destino: falar com a gente
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-300">
            Equipe Trade Manager pronta para encaixar o Trade+ na sua operação
            de campo.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:suporte@trademanager.com.br"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left transition-colors hover:border-orange-400/40"
            >
              <Mail className="h-5 w-5 text-orange-400" />
              <span>
                <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                  E-mail
                </span>
                <span className="text-sm font-medium text-white">
                  suporte@trademanager.com.br
                </span>
              </span>
            </a>
            <a
              href="tel:+559591390527"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left transition-colors hover:border-orange-400/40"
            >
              <Phone className="h-5 w-5 text-orange-400" />
              <span>
                <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                  Telefone
                </span>
                <span className="text-sm font-medium text-white">
                  +55 (95) 99139-0527
                </span>
              </span>
            </a>
            <div className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left">
              <Clock className="h-5 w-5 text-[#24a64f]" />
              <span>
                <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                  Atendimento
                </span>
                <span className="text-sm font-medium text-white">
                  Seg–Sex 9h–18h · Online 24h
                </span>
              </span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_-12px_rgba(234,88,12,0.9)] transition-[background-color,transform] hover:bg-orange-600 hover:-translate-y-0.5"
            >
              {TRIAL_LABEL}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-[#25D366]/50 hover:text-[#25D366]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 bg-[#0b1220] py-14 text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
            <div>
              <Link href="/" className="text-white">
                <BrandMark size="lg" />
              </Link>
              <p className="mt-4 text-sm leading-relaxed">
                Trade+ — gestão de promotores e execução nos pontos de venda,
                pela Trade Manager.
              </p>
              <div className="mt-5 flex gap-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 transition-colors hover:bg-orange-500 hover:text-white"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 transition-colors hover:bg-orange-500 hover:text-white"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 text-sm font-semibold text-white">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors hover:text-orange-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/5 pt-6 text-center text-xs text-slate-500">
            © 2026 Trade Manager Soluções em Trade Marketing Ltda. Todos os
            direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
