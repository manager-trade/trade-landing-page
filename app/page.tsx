"use client";

import { useState } from "react";
import { MobileMockup } from "@/components/MobileMockup";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import {
  Menu,
  X,
  LogIn,
  BarChart2,
  Navigation,
  Package,
  TrendingUp,
  Clock,
  LayoutGrid,
  ShieldCheck,
  CheckCircle2,
  Mail,
  Phone,
  // eslint-disable-next-line deprecation/deprecation
  Instagram,
  // eslint-disable-next-line deprecation/deprecation
  Linkedin,
  // eslint-disable-next-line deprecation/deprecation
  Facebook,
} from "lucide-react";
import {
  AppMockup,
  StatusBadge,
  type AppMockupProps,
} from "@/components/AppMockup";
const NAV_LINKS = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Plataforma Web", href: "#plataforma" },
  { label: "App Mobile", href: "#mobile" },
  { label: "Contato", href: "#contato" },
];

const FEATURES = [
  {
    icon: <LogIn className="w-6 h-6 text-orange-600" />,
    title: "Check-in e Check-out",
    desc: "Controle preciso de entrada e saída nos estabelecimentos com geolocalização em tempo real.",
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-orange-600" />,
    title: "Relatório de Visitas",
    desc: "Acompanhe todas as visitas realizadas com detalhes completos e informações importantes.",
  },
  {
    icon: <Navigation className="w-6 h-6 text-orange-600" />,
    title: "Roteirização Inteligente",
    desc: "Cadastre e otimize rotas dos seus promotores para maximizar a cobertura e a eficiência.",
  },
  {
    icon: <Package className="w-6 h-6 text-orange-600" />,
    title: "Controle de Estoque",
    desc: "Monitore o estoque em cada ponto de venda e tenha sempre o registro atualizado.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-orange-600" />,
    title: "Indicadores de Desempenho",
    desc: "Dashboard completo com KPIs para avaliar a performance da equipe.",
  },
  {
    icon: <Clock className="w-6 h-6 text-orange-600" />,
    title: "Gestão de Tempo",
    desc: "Organize a agenda e o tempo gasto de cada promotor em cada visita.",
  },
  {
    icon: <LayoutGrid className="w-6 h-6 text-orange-600" />,
    title: "Mix de Produtos",
    desc: "Controle o mix de produtos em cada estabelecimento de forma simples e automatizada.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-orange-600" />,
    title: "Segurança de Dados",
    desc: "Dados protegidos com criptografia e backups automáticos na nuvem.",
  },
];

const STATS = [
  { value: "98%", label: "Aumento na produtividade" },
  { value: "+500", label: "Empresas atendidas" },
  { value: "10k+", label: "Promotores cadastrados" },
  { value: "24/7", label: "Suporte disponível" },
];

const PLATFORM_FEATURES = [
  "Dashboard com visão geral da operação",
  "Gestão de visitas e promotores",
  "Relatórios detalhados e exportáveis",
  "Cadastro e gerenciamento de rotas",
  "Controle de estoque por estabelecimento",
  "Análise de desempenho em tempo real",
];

const PLATFORM_TABS = [
  { label: "Gestão de Lojas" },
  { label: "Catálogo de Produtos" },
  { label: "Roteiro de Visitas" },
];

const NAV_ITEMS = (active: string) => [
  { label: "Dashboard", section: "MENU PRINCIPAL" },
  { label: "Lançamentos", active: active === "Lançamentos" },
  { label: "Roteiro", active: active === "Roteiro" },
  {
    label: "Produtos",
    section: "ADMINISTRAÇÃO",
    active: active === "Produtos",
  },
  { label: "Lojas", active: active === "Lojas" },
  { label: "Usuários" },
  { label: "Relatórios" },
];

const MOCKUP_CONFIGS: AppMockupProps[] = [
  // 0 — Gestão de Lojas (ref: web-lojas.png — Lançamentos page)
  {
    navItems: NAV_ITEMS("Lançamentos"),
    title: "Gestão de Lojas",
    buttonLabel: "Exportar",
    columns: [
      { key: "uf", label: "UF" },
      { key: "razao", label: "Razão Social" },
      { key: "fantasia", label: "Fantasia" },
      { key: "categoria", label: "Categoria" },
      { key: "produto", label: "Produto" },
      { key: "validade", label: "Validade" },
    ],
    rows: [
      {
        uf: "RR",
        razao: "Mercado Nova Aliança Ltda",
        fantasia: "Aliança Express",
        categoria: "Bebidas e Sucos",
        produto: "Água Mineral S/ Gás 1.5L",
        validade: "15/10/2026",
      },
      {
        uf: "SP",
        razao: "Supermercado Boa Esperança SA",
        fantasia: "Boa Esperança Max",
        categoria: "Laticínios Premium",
        produto: "Queijo Prato Fatiado 200G",
        validade: "20/11/2026",
      },
      {
        uf: "RR",
        razao: "Comercial de Alimentos União",
        fantasia: "União Alimentos",
        categoria: "Mercearia Geral",
        produto: "Arroz Agulhinha T1 5KG",
        validade: "10/10/2026",
      },
      {
        uf: "SP",
        razao: "Mercadinho São Pedro",
        fantasia: "São Pedro Express",
        categoria: "Limpeza Doméstica",
        produto: "Detergente Neutro 500ML",
        validade: "12/10/2026",
      },
      {
        uf: "RR",
        razao: "Distribuidora Global Foods",
        fantasia: "Global Foods",
        categoria: "Congelados",
        produto: "Frango Congelado 1KG",
        validade: "05/10/2026",
      },
    ],
  },
  // 1 — Catálogo de Produtos (ref: web-produtos.png)
  {
    navItems: NAV_ITEMS("Produtos"),
    title: "Catálogo de Produtos",
    buttonLabel: "+ Produto",
    columns: [
      { key: "produto", label: "Produto" },
      { key: "unidade", label: "Unidade" },
      { key: "categoria", label: "Categoria" },
      { key: "cod", label: "Cod. Barras" },
      { key: "situacao", label: "Situação" },
    ],
    rows: [
      {
        produto: "Achocolatado Pó Sachê 1,01KG",
        unidade: "UND",
        categoria: "Achocolatado e Outros",
        cod: "7896021320059",
        situacao: <StatusBadge label="Ativo" />,
      },
      {
        produto: "Achocolatado Pó Sachê 300G",
        unidade: "UND",
        categoria: "Achocolatado e Outros",
        cod: "7896021320042",
        situacao: <StatusBadge label="Ativo" />,
      },
      {
        produto: "Água Sanitária da Ilha 12X1L",
        unidade: "UND",
        categoria: "CNA",
        cod: "7896017200075",
        situacao: <StatusBadge label="Ativo" />,
      },
      {
        produto: "Água Sanitária da Ilha 3X5L",
        unidade: "UND",
        categoria: "CNA",
        cod: "7896017200655",
        situacao: <StatusBadge label="Ativo" />,
      },
      {
        produto: "Sabão em Pó Ação Profunda",
        unidade: "CX",
        categoria: "Limpeza Geral",
        cod: "7896031200511",
        situacao: <StatusBadge label="Ativo" />,
      },
    ],
  },
  // 2 — Roteiro de Visitas (ref: web-roteiro.png — rotas, not individual visits)
  {
    navItems: NAV_ITEMS("Roteiro"),
    title: "Roteiro de Visitas",
    buttonLabel: "+ Nova Rota",
    columns: [
      { key: "usuario", label: "Usuário" },
      { key: "rota", label: "Rota" },
      { key: "dias", label: "Dias" },
      { key: "regiao", label: "Região" },
      { key: "status", label: "Status" },
    ],
    rows: [
      {
        usuario: "Carlos Fonseca",
        rota: "Rota Demo 1",
        dias: "Seg, Ter, Qua, Qui, Sex, Sáb",
        regiao: "Zona Oeste",
        status: <StatusBadge label="Ativa" />,
      },
      {
        usuario: "Ana Oliveira",
        rota: "Rota Matutina",
        dias: "Dom-Sáb",
        regiao: "Boa Vista",
        status: <StatusBadge label="Ativa" />,
      },
      {
        usuario: "Pedro Santos",
        rota: "Rota Vespertina",
        dias: "Qua, Sex",
        regiao: "Boa Vista",
        status: <StatusBadge label="Ativa" />,
      },
      {
        usuario: "Juliana Lopes",
        rota: "Rota de Apoio",
        dias: "Seg-Sáb",
        regiao: "Boa Vista",
        status: <StatusBadge label="Ativa" />,
      },
      {
        usuario: "Fernando Costa",
        rota: "Rota de Vendas",
        dias: "Seg-Sáb",
        regiao: "Boa Vista",
        status: <StatusBadge label="Ativa" />,
      },
    ],
  },
];

const APP_FEATURE_GROUPS = [
  {
    group: "Roteiro de Visitas",
    items: [
      "Lista de lojas programadas para o dia",
      "Ordenação obrigatória com status visual",
      "Banner fixo de visita ativa em aberto",
    ],
  },
  {
    group: "Check-in e Check-out",
    items: [
      "Foto obrigatória via câmera na entrada e saída",
      "Coleta automática de GPS e geocodificação",
      "Guia visual de enquadramento na câmera",
    ],
  },
  {
    group: "Conferência de Produtos",
    items: [
      "Scanner de código de barras em tempo real",
      "Formulário com preço, lote e validade",
      "Verificação se produto já foi conferido",
    ],
  },
  {
    group: "Gestão de Validade",
    items: [
      "Filtros por criticidade: crítico, atenção e ok",
      "Cores de alerta por proximidade do vencimento",
      "Busca por departamento e produto",
    ],
  },
];

const FOOTER_COLUMNS = [
  {
    title: "Produto",
    links: [
      { label: "Funcionalidades", href: "/#funcionalidades" },
      { label: "Plataforma Web", href: "/#plataforma" },
      { label: "App Mobile", href: "/#mobile" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre Nós", href: "/sobre" },
      { label: "Parceiros", href: "/parceiros" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { label: "Central de Ajuda", href: "#" },
      { label: "Documentação", href: "#" },
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

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ── HEADER ───────────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg text-gray-900"
          >
            <BrandLogo size="lg" />
            Trade Manager
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-gray-600 hover:text-orange-600 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#contato"
              className="text-sm font-medium px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600 transition-colors"
            >
              Faça Contato
            </Link>
            <a
              href="https://web.trademanager.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-700 transition-colors"
            >
              Acessar Sistema
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-gray-700 hover:text-orange-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://web.trademanager.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-orange-500 text-white text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Acessar Sistema
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-orange-50/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top: badge + title + description — full width */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-300 bg-orange-50 text-orange-700 text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block" />
              Sistema de Trade Marketing
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Gestão completa de{" "}
              <span className="text-orange-500">promotores de vendas</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Tenha controle total sobre sua equipe de campo. Gerencie visitas,
              estoque, rotas e desempenho em tempo real com o Trade Manager.
            </p>
          </div>

          {/* Middle: bullets (left) + mockup (right) */}
          <div className="flex flex-col lg:flex-row items-start gap-10 mb-10">
            <div className="flex flex-col justify-center gap-4 lg:w-64 shrink-0">
              {[
                "Controle de Visitas",
                "Controle de Estoque",
                "Rotas Inteligentes",
                "Check-in/Checkout",
              ].map((f) => (
                <span
                  key={f}
                  className="flex items-center gap-2.5 text-sm text-gray-700 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  {f}
                </span>
              ))}
            </div>
            <div className="flex-1 w-full min-w-0">
              <AppMockup {...MOCKUP_CONFIGS[2]} />
            </div>
          </div>

          {/* Bottom: CTA buttons — full width centered */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://web.trademanager.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold text-sm hover:bg-orange-700 transition-colors shadow-md shadow-orange-200"
            >
              Acessar Sistema
            </a>
            <Link
              href="#funcionalidades"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold text-sm hover:border-orange-500 hover:text-orange-600 transition-colors"
            >
              Conhecer Funcionalidades
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <section id="funcionalidades" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Funcionalidades
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
              Tudo que você precisa para <br className="hidden sm:block" />
              gerenciar sua equipe de campo
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Uma plataforma completa com recursos avançados para otimizar suas
              operações de Trade Marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md hover:border-orange-100 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      {/* <section className="bg-orange-600 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
            {STATS.map((s) => (
              <div key={s.value}>
                <p className="text-4xl sm:text-5xl font-extrabold">{s.value}</p>
                <p className="mt-1 text-sm text-orange-100">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── WEB PLATFORM ─────────────────────────────────────────── */}
      <section id="plataforma" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top: badge + title + description — full width */}
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-300 bg-orange-50 text-orange-700 text-xs font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block" />
              Plataforma Web
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
              Painel administrativo completo para gestores
            </h2>
            <p className="text-gray-500 max-w-2xl">
              Tenha controle total das suas operações de Trade Marketing através
              de um painel web intuitivo e completo, acessível de qualquer
              navegador.
            </p>
          </div>

          {/* Middle: bullets (left) + mockup (right) */}
          <div className="flex flex-col lg:flex-row items-start gap-10">
            <ul className="space-y-3 lg:w-72 shrink-0">
              {PLATFORM_FEATURES.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 text-sm text-gray-700 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex-1 w-full min-w-0">
              {/* Tabs */}
              <div className="flex gap-2 mb-4 flex-wrap">
                {PLATFORM_TABS.map((t, i) => (
                  <button
                    key={t.label}
                    onClick={() => setActiveTab(i)}
                    className={`text-sm px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === i
                        ? "border-orange-500 border-2 text-orange-500 bg-white"
                        : "bg-white border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-600"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <AppMockup {...MOCKUP_CONFIGS[activeTab]} />
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE APP ─────────────────────────────────────────── */}
      <section id="mobile" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top: badge + title + desc — full width */}
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-300 bg-orange-50 text-orange-700 text-xs font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block" />
              Aplicativo Mobile
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
              Na palma da mão do seu promotor
            </h2>
            <p className="text-gray-500 max-w-2xl">
              Aplicativo intuitivo e fácil de usar, desenvolvido para facilitar
              o dia a dia dos promotores de vendas em campo com todas as
              ferramentas necessárias.
            </p>
          </div>

          {/* Middle: left groups | phone | right groups */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-10">
            {/* Left: first 2 groups */}
            <div className="lg:w-72 shrink-0 space-y-5">
              {APP_FEATURE_GROUPS.slice(0, 2).map((g) => (
                <div
                  key={g.group}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">
                    {g.group}
                  </p>
                  <ul className="space-y-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-gray-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Phone */}
            <div className="flex-1 flex justify-center">
              <MobileMockup />
            </div>

            {/* Right: last 2 groups */}
            <div className="lg:w-72 shrink-0 space-y-5">
              {APP_FEATURE_GROUPS.slice(2).map((g) => (
                <div
                  key={g.group}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">
                    {g.group}
                  </p>
                  <ul className="space-y-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-gray-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: store buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://apps.apple.com/br/app/trade/id6633411717"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.trademanager.tradeapp&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.609 22.186A.996.996 0 0 1 3 21.232V2.768a1 1 0 0 1 .609-.954zM14.208 12l3.029 3.029-9.753 5.643 6.724-8.672zm4.657-1.986a.982.982 0 0 1 0 1.972l-1.628.944L14.208 12l3.029-3.029 1.628.943zM7.484 3.328L17.237 8.97l-3.029 3.03-6.724-8.672z" />
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────── */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            Contato
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Fale com nossa equipe
          </h2>
          <p className="mt-3 text-gray-500 max-w-md mx-auto">
            Nossa equipe está pronta para ajudar você a transformar sua operação
            de Trade Marketing.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <a
              href="mailto:suporte@trademanager.com.br"
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                <Mail className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                E-mail
              </p>
              <p className="text-sm font-medium text-gray-800">
                suporte@trademanager.com.br
              </p>
            </a>

            <a
              href="tel:+559591390527"
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                <Phone className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Telefone
              </p>
              <p className="text-sm font-medium text-gray-800">
                +55 (95) 99139-0527
              </p>
            </a>

            <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Atendimento
              </p>
              <p className="text-sm font-medium text-gray-800 text-center">
                Seg–Sex: 9h às 18h
                <br />
                Suporte Online 24h
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="https://web.trademanager.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-orange-600 text-white font-semibold text-sm hover:bg-orange-700 transition-colors shadow-md shadow-orange-200"
            >
              Acessar Sistema
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-gray-300 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link
                href="/"
                className="flex items-center gap-2 font-bold text-lg text-white mb-3"
              >
                <BrandLogo size="lg" />
                Trade Manager
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                A solução completa para gestão de promotores de vendas em Trade
                Marketing.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Columns */}
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-white mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
            © 2026 Trade Manager Soluções em Trade Marketing Ltda. Todos os
            direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
