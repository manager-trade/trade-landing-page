export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.trademanager.com.br";

/** Nome do produto (MIV v1.0): o site vende o Trade+. */
export const SITE_NAME = "Trade+";

/** Empresa que assina (razão social em ORGANIZATION.legalName). */
export const COMPANY_NAME = "Trade Manager";

export const SITE_TAGLINE =
  "Software de gestão de promotores de vendas";

export const DEFAULT_DESCRIPTION =
  "Software de Trade Marketing para gestão de promotores de vendas. Roteiros, check-in GPS, estoque e desempenho em tempo real com o Trade+.";

export const ORGANIZATION = {
  legalName: "Trade Manager Soluções em Trade Marketing Ltda.",
  email: "suporte@trademanager.com.br",
  phone: "+55-95-99139-0527",
  phoneDisplay: "+55 (95) 99139-0527",
  cnpj: "55.903.475/0001-80",
  address: {
    streetAddress: "R. Manoel Felipe, 108, Sala 3, Bairro Buritis",
    addressLocality: "Boa Vista",
    addressRegion: "RR",
    postalCode: "69309-170",
    addressCountry: "BR",
  },
  sameAs: [
    "https://www.instagram.com/trademais_/",
    "https://www.facebook.com/share/1JXwAzdu1Y/",
    "https://apps.apple.com/br/app/trade/id6633411717",
    "https://play.google.com/store/apps/details?id=com.trademanager.tradeapp",
  ],
} as const;

type SitePage = {
  path: string;
  title: string;
  description: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
  /** Páginas finas / placeholder — fora do sitemap e com noindex na rota. */
  noindex?: boolean;
};

export const SITE_PAGES: readonly SitePage[] = [
  {
    path: "/",
    title: `${SITE_NAME} - ${SITE_TAGLINE}`,
    description: DEFAULT_DESCRIPTION,
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/software-gestao-promotores",
    title: "Software de Gestão de Promotores",
    description:
      "Software de gestão de promotores de vendas com roteiros, check-in GPS, estoque no ponto de venda e relatórios em tempo real. Conheça o Trade+.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/aplicativo-para-promotor-de-vendas",
    title: "Aplicativo para Promotor de Vendas",
    description:
      "Aplicativo para promotor de vendas com roteiro do dia, check-in GPS, foto obrigatória e conferência de produtos. App Trade+ na App Store e Google Play.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/software-de-trade-marketing",
    title: "Software de Trade Marketing",
    description:
      "Software de Trade Marketing para gestão de promotores, execução no ponto de venda, roteiros e indicadores. Plataforma web + app com o Trade+.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/roteirizacao-de-promotores",
    title: "Roteirização de Promotores",
    description:
      "Roteirização de promotores com cadastro de rotas, visitas programadas e acompanhamento da execução no app. Otimize a cobertura de PDVs com o Trade+.",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/check-in-gps-pdv",
    title: "Check-in GPS no PDV",
    description:
      "Check-in e check-out com GPS e foto no PDV para validar presença do promotor. Controle de visitas em tempo real com o Trade+.",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/controle-de-validade-pdv",
    title: "Controle de Validade no PDV",
    description:
      "Controle de validade no PDV com filtros por criticidade, conferência de produtos e registro de lote. Reduza perdas com o app Trade+.",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/sobre",
    title: "Sobre Nós",
    description:
      "Conheça a Trade Manager: empresa brasileira de tecnologia para Trade Marketing, com foco em gestão de promotores de vendas em campo.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/parceiros",
    title: "Parceiros",
    description:
      "Programa de parceiros da Trade Manager. Em breve, oportunidades para empresas e profissionais de Trade Marketing no Brasil.",
    changeFrequency: "monthly",
    priority: 0.3,
    noindex: true,
  },
  {
    path: "/termos",
    title: "Termos de Uso",
    description:
      "Termos de Uso do Trade Manager e do produto Trade+: regras de utilização da plataforma web e do aplicativo móvel.",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/politica-de-privacidade",
    title: "Política de Privacidade",
    description:
      "Política de Privacidade da Trade Manager: como coletamos, usamos e protegemos dados pessoais no Trade+.",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/lgpd",
    title: "LGPD",
    description:
      "Como a Trade Manager se adequa à LGPD (Lei Geral de Proteção de Dados) e quais são os direitos dos titulares.",
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

export function absoluteUrl(path = "/"): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: COMPANY_NAME,
    legalName: ORGANIZATION.legalName,
    url: SITE_URL,
    logo: absoluteUrl("/icon-512.png"),
    email: ORGANIZATION.email,
    telephone: ORGANIZATION.phone,
    taxID: ORGANIZATION.cnpj,
    address: {
      "@type": "PostalAddress",
      streetAddress: ORGANIZATION.address.streetAddress,
      addressLocality: ORGANIZATION.address.addressLocality,
      addressRegion: ORGANIZATION.address.addressRegion,
      postalCode: ORGANIZATION.address.postalCode,
      addressCountry: ORGANIZATION.address.addressCountry,
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    sameAs: ORGANIZATION.sameAs,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: ORGANIZATION.phone,
        contactType: "customer support",
        email: ORGANIZATION.email,
        availableLanguage: ["Portuguese"],
        areaServed: "BR",
      },
    ],
  };
}

export function buildSoftwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    name: SITE_NAME,
    alternateName: [COMPANY_NAME, "Trade Mais"],
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    image: absoluteUrl("/icon-512.png"),
    inLanguage: "pt-BR",
    offers: {
      "@type": "Offer",
      url: absoluteUrl("/"),
      priceCurrency: "BRL",
      availability: "https://schema.org/OnlineOnly",
      description:
        "Teste grátis disponível. Condições comerciais sob consulta.",
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    featureList: [
      "Check-in e check-out com geolocalização",
      "Roteirização de visitas",
      "Controle de estoque no ponto de venda",
      "Relatórios e indicadores de desempenho",
      "Conferência de produtos por código de barras",
      "Gestão de validade",
      "Gestão de promotores de vendas",
    ],
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "pt-BR",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

/**
 * Imagem de compartilhamento oficial (MIV v1.0, pacote 3_Web).
 * Páginas que definem `openGraph` próprio substituem a imagem do layout,
 * então precisam repetir esta referência.
 */
export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Trade+: software de gestão de promotores e do PDV. Mais controle. Mais resultado.",
};
