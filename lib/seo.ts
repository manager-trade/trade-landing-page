export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.trademanager.com.br";

export const SITE_NAME = "Trade Manager";

export const SITE_TAGLINE = "Gestão completa de promotores de vendas";

export const DEFAULT_DESCRIPTION =
  "Tenha controle total sobre sua equipe de campo. Gerencie visitas, estoque, rotas e desempenho em tempo real com o Trade Manager.";

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
    "https://apps.apple.com/br/app/trade/id6633411717",
    "https://play.google.com/store/apps/details?id=com.trademanager.tradeapp",
  ],
} as const;

export const SITE_PAGES = [
  {
    path: "/",
    title: `${SITE_NAME} - ${SITE_TAGLINE}`,
    description: DEFAULT_DESCRIPTION,
    changeFrequency: "weekly" as const,
    priority: 1,
  },
  {
    path: "/sobre",
    title: "Sobre Nós",
    description:
      "Conheça a Trade Manager: empresa brasileira de tecnologia para Trade Marketing, com foco em gestão de promotores de vendas em campo.",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/parceiros",
    title: "Parceiros",
    description:
      "Programa de parceiros da Trade Manager. Em breve, oportunidades para empresas e profissionais de Trade Marketing no Brasil.",
    changeFrequency: "monthly" as const,
    priority: 0.5,
  },
  {
    path: "/termos",
    title: "Termos de Uso",
    description:
      "Termos de Uso do Trade Manager e do produto Trade+: regras de utilização da plataforma web e do aplicativo móvel.",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
  {
    path: "/politica-de-privacidade",
    title: "Política de Privacidade",
    description:
      "Política de Privacidade da Trade Manager: como coletamos, usamos e protegemos dados pessoais no Trade+.",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
  {
    path: "/lgpd",
    title: "LGPD",
    description:
      "Como a Trade Manager se adequa à LGPD (Lei Geral de Proteção de Dados) e quais são os direitos dos titulares.",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
] as const;

export function absoluteUrl(path = "/"): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: ORGANIZATION.legalName,
    url: SITE_URL,
    logo: absoluteUrl("/icon.png"),
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
    name: "Trade+",
    alternateName: SITE_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    image: absoluteUrl("/icon.png"),
    inLanguage: "pt-BR",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
      description: "Entre em contato para condições comerciais",
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    featureList: [
      "Check-in e check-out com geolocalização",
      "Roteirização de visitas",
      "Controle de estoque no PDV",
      "Relatórios e indicadores de desempenho",
      "Conferência de produtos por código de barras",
      "Gestão de validade",
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
