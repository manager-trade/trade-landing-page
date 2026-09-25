import type { LucideIcon } from "lucide-react";
import {
  BarChart2,
  CalendarCheck,
  Camera,
  CheckCircle2,
  MapPin,
  Navigation,
  Package,
  Smartphone,
  Timer,
} from "lucide-react";

export type SeoPageContent = {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  problemTitle: string;
  problem: string;
  benefitsTitle: string;
  benefits: { icon: LucideIcon; title: string; desc: string }[];
  howTitle: string;
  howSteps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  related: { href: string; label: string }[];
  ctaTitle: string;
  ctaDesc: string;
};

export const SEO_SOLUTION_PAGES: SeoPageContent[] = [
  {
    path: "/software-gestao-promotores",
    title: "Software de Gestão de Promotores",
    description:
      "Software de gestão de promotores de vendas com roteiros, check-in GPS, estoque no PDV e relatórios em tempo real. Conheça o Trade Manager.",
    eyebrow: "Software para equipes de campo",
    h1: "Software de gestão de promotores de vendas",
    intro:
      "O Trade Manager é um software de gestão de promotores feito para empresas de Trade Marketing que precisam acompanhar visitas, produtividade e execução no PDV sem planilhas.",
    problemTitle: "Por que trocar planilhas por um software de promotores?",
    problem:
      "Quando a operação cresce, WhatsApp e Excel deixam de dar conta: falta prova de presença, roteiros se perdem e o gestor só descobre problemas depois da visita. Um software de gestão de promotores centraliza o planejado e o executado em um só lugar.",
    benefitsTitle: "O que o Trade Manager controla",
    benefits: [
      {
        icon: Navigation,
        title: "Roteiros e cobertura",
        desc: "Monte rotas, acompanhe o cumprimento do dia e veja quais lojas foram atendidas.",
      },
      {
        icon: MapPin,
        title: "Check-in com GPS e foto",
        desc: "Registre entrada e saída no PDV com geolocalização e evidência visual.",
      },
      {
        icon: Package,
        title: "Estoque e validade",
        desc: "Conferência de produtos, rupturas e itens próximos do vencimento.",
      },
      {
        icon: BarChart2,
        title: "Indicadores de desempenho",
        desc: "Dashboards e relatórios para avaliar produtividade da equipe de campo.",
      },
    ],
    howTitle: "Como funciona na prática",
    howSteps: [
      {
        title: "Cadastre lojas, produtos e equipe",
        desc: "Organize a base da operação no painel web do Trade+.",
      },
      {
        title: "Defina roteiros de visitas",
        desc: "Planeje o dia de cada promotor com sequência e prioridades.",
      },
      {
        title: "Execute no aplicativo",
        desc: "O promotor faz check-in, conferências e check-out pelo celular.",
      },
      {
        title: "Acompanhe em tempo real",
        desc: "Gestores veem status, fotos, GPS e indicadores no painel.",
      },
    ],
    faqs: [
      {
        question: "O que é um software de gestão de promotores?",
        answer:
          "É uma plataforma que organiza roteiros, visitas, presença no PDV e indicadores da equipe de Trade Marketing — no web e no celular.",
      },
      {
        question: "O Trade Manager serve para agências e indústrias?",
        answer:
          "Sim. É voltado a operações que gerenciam promotores em campo, com painel para gestores e app para a equipe.",
      },
      {
        question: "Preciso instalar algo no computador?",
        answer:
          "Não. O gestor acessa pelo navegador em web.trademanager.com.br e o promotor usa o app Trade+ no celular.",
      },
    ],
    related: [
      {
        href: "/aplicativo-para-promotor-de-vendas",
        label: "Aplicativo para promotor de vendas",
      },
      {
        href: "/software-de-trade-marketing",
        label: "Software de Trade Marketing",
      },
      {
        href: "/roteirizacao-de-promotores",
        label: "Roteirização de promotores",
      },
    ],
    ctaTitle: "Veja o software de gestão de promotores na prática",
    ctaDesc:
      "Acesse o sistema ou fale com nossa equipe para entender como o Trade Manager se encaixa na sua operação.",
  },
  {
    path: "/aplicativo-para-promotor-de-vendas",
    title: "Aplicativo para Promotor de Vendas",
    description:
      "Aplicativo para promotor de vendas com roteiro do dia, check-in GPS, foto obrigatória e conferência de produtos. App Trade+ na App Store e Google Play.",
    eyebrow: "App mobile Trade+",
    h1: "Aplicativo para promotor de vendas",
    intro:
      "O app Trade+ é o aplicativo para promotor de vendas que leva o roteiro, o check-in e as tarefas do PDV para o celular — simples de usar em campo, completo para o gestor acompanhar.",
    problemTitle: "O promotor precisa de um app feito para o PDV",
    problem:
      "Apps genéricos de ponto ou formulário não cobrem a rotina de Trade Marketing. O aplicativo para promotor de vendas precisa orientar a visita, registrar presença com GPS e coletar dados de produtos sem atrito.",
    benefitsTitle: "O que o promotor faz no app",
    benefits: [
      {
        icon: CalendarCheck,
        title: "Roteiro do dia",
        desc: "Lista de lojas programadas, status visual e visita ativa em destaque.",
      },
      {
        icon: Camera,
        title: "Check-in e check-out com foto",
        desc: "Entrada e saída com câmera, GPS e geocodificação automática.",
      },
      {
        icon: Package,
        title: "Conferência por código de barras",
        desc: "Scanner, preço, lote, validade e controle do que já foi conferido.",
      },
      {
        icon: Timer,
        title: "Gestão de validade",
        desc: "Filtros por criticidade para priorizar itens próximos do vencimento.",
      },
    ],
    howTitle: "Fluxo da visita no aplicativo",
    howSteps: [
      {
        title: "Abra o roteiro",
        desc: "Veja as lojas do dia e a ordem de atendimento.",
      },
      {
        title: "Faça check-in",
        desc: "Tire a foto e confirme a presença com GPS.",
      },
      {
        title: "Execute as tarefas",
        desc: "Conferência de produtos, validade e registros da loja.",
      },
      {
        title: "Finalize com check-out",
        desc: "Encerre a visita e siga para o próximo PDV.",
      },
    ],
    faqs: [
      {
        question: "O aplicativo para promotor funciona em iOS e Android?",
        answer:
          "Sim. O Trade+ está disponível na App Store e no Google Play.",
      },
      {
        question: "O app funciona sem internet?",
        answer:
          "A operação é pensada para o dia a dia em campo; em caso de instabilidade, os dados são sincronizados quando a conexão volta — confirme o cenário da sua operação com o suporte.",
      },
      {
        question: "Quem configura o roteiro do promotor?",
        answer:
          "O gestor monta lojas, rotas e usuários no painel web; o promotor recebe o roteiro no aplicativo.",
      },
    ],
    related: [
      {
        href: "/software-gestao-promotores",
        label: "Software de gestão de promotores",
      },
      { href: "/check-in-gps-pdv", label: "Check-in GPS no PDV" },
      {
        href: "/controle-de-validade-pdv",
        label: "Controle de validade no PDV",
      },
    ],
    ctaTitle: "Baixe o app ou acesse o painel",
    ctaDesc:
      "Promotores usam o Trade+ no celular; gestores acompanham tudo em web.trademanager.com.br.",
  },
  {
    path: "/software-de-trade-marketing",
    title: "Software de Trade Marketing",
    description:
      "Software de Trade Marketing para gestão de promotores, execução no PDV, roteiros e indicadores. Plataforma web + app com o Trade Manager.",
    eyebrow: "Plataforma Trade+",
    h1: "Software de Trade Marketing",
    intro:
      "O Trade Manager é um software de Trade Marketing que conecta a estratégia do backoffice à execução do promotor no ponto de venda — com dados auditáveis e visão em tempo real.",
    problemTitle: "Trade Marketing sem sistema vira achismo",
    problem:
      "Sem um software de Trade Marketing, a operação depende de relatos manuais. Fica difícil saber se a visita aconteceu, se o mix está correto e onde há risco de ruptura ou validade.",
    benefitsTitle: "Da estratégia à execução no PDV",
    benefits: [
      {
        icon: Smartphone,
        title: "Campo e gestão integrados",
        desc: "App para o promotor e painel web para o gestor na mesma operação.",
      },
      {
        icon: MapPin,
        title: "Evidência de presença",
        desc: "Check-in/out com foto e GPS para validar a execução no PDV.",
      },
      {
        icon: Package,
        title: "Dados de produto na loja",
        desc: "Estoque, código de barras, lote e validade registrados na visita.",
      },
      {
        icon: BarChart2,
        title: "Indicadores da operação",
        desc: "Acompanhe desempenho, cobertura e histórico de visitas.",
      },
    ],
    howTitle: "Para quem é o Trade Manager",
    howSteps: [
      {
        title: "Agências de Trade Marketing",
        desc: "Padronize a operação de promotores em múltiplas contas e lojas.",
      },
      {
        title: "Indústrias e distribuidores",
        desc: "Tenha visibilidade da execução e da presença da marca no varejo.",
      },
      {
        title: "Supervisores e coordenadores",
        desc: "Monitore rotas, visitas e pendências sem correr atrás de planilha.",
      },
      {
        title: "Promotores em campo",
        desc: "Receba o roteiro e registre a visita com o mínimo de atrito.",
      },
    ],
    faqs: [
      {
        question: "Software de Trade Marketing é a mesma coisa que CRM?",
        answer:
          "Não. CRM foca relacionamento comercial; o software de Trade Marketing foca execução no PDV, roteiros, presença e dados de gôndola/estoque.",
      },
      {
        question: "O Trade+ substitui o ERP?",
        answer:
          "Não. Ele complementa a operação de campo e a gestão de promotores, com foco em visitas e execução no ponto de venda.",
      },
      {
        question: "Dá para começar com uma equipe pequena?",
        answer:
          "Sim. A plataforma atende desde operações enxutas até equipes maiores que precisam de padronização.",
      },
    ],
    related: [
      {
        href: "/software-gestao-promotores",
        label: "Gestão de promotores",
      },
      {
        href: "/aplicativo-para-promotor-de-vendas",
        label: "App para promotor",
      },
      {
        href: "/roteirizacao-de-promotores",
        label: "Roteirização de promotores",
      },
    ],
    ctaTitle: "Conheça o software de Trade Marketing da Trade Manager",
    ctaDesc:
      "Veja como o Trade+ organiza visitas, produtos e indicadores da sua operação.",
  },
  {
    path: "/roteirizacao-de-promotores",
    title: "Roteirização de Promotores",
    description:
      "Roteirização de promotores com cadastro de rotas, visitas programadas e acompanhamento da execução no app. Otimize a cobertura de PDVs com o Trade Manager.",
    eyebrow: "Planejamento de campo",
    h1: "Roteirização de promotores",
    intro:
      "A roteirização de promotores no Trade Manager ajuda a planejar quem visita qual loja, em qual ordem, e a conferir se o roteiro do dia foi cumprido — no painel e no aplicativo.",
    problemTitle: "Roteiro mal feito custa deslocamento e cobertura",
    problem:
      "Sem roteirização de promotores clara, a equipe perde tempo no deslocamento, deixa PDVs descobertos e o gestor não sabe se o plano do dia foi executado.",
    benefitsTitle: "Benefícios da roteirização no Trade+",
    benefits: [
      {
        icon: Navigation,
        title: "Rotas cadastradas",
        desc: "Organize territórios e sequências de atendimento por promotor.",
      },
      {
        icon: CalendarCheck,
        title: "Visitas programadas",
        desc: "Transforme o plano em lista do dia no aplicativo do promotor.",
      },
      {
        icon: MapPin,
        title: "Execução rastreável",
        desc: "Check-in/out mostra o que foi feito versus o que estava no roteiro.",
      },
      {
        icon: BarChart2,
        title: "Visão para o gestor",
        desc: "Acompanhe pendências, conclusões e histórico por loja e rota.",
      },
    ],
    howTitle: "Do planejamento à execução",
    howSteps: [
      {
        title: "Cadastre as lojas",
        desc: "Monte a base de PDVs que sua operação atende.",
      },
      {
        title: "Monte as rotas",
        desc: "Defina o roteiro e a cobertura desejada por região ou equipe.",
      },
      {
        title: "Publique o dia do promotor",
        desc: "O app apresenta a lista ordenada de visitas.",
      },
      {
        title: "Monitore o cumprimento",
        desc: "Veja status em andamento, concluídas e pendentes.",
      },
    ],
    faqs: [
      {
        question: "O que é roteirização de promotores?",
        answer:
          "É o planejamento de quais PDVs cada promotor visita, em que sequência e frequência, para maximizar cobertura e reduzir tempo de deslocamento.",
      },
      {
        question: "A roteirização fica só no mapa?",
        answer:
          "No Trade Manager, o roteiro vira operação: o promotor executa no app e o gestor acompanha a realização das visitas.",
      },
      {
        question: "Posso ajustar rotas com frequência?",
        answer:
          "Sim. A base de lojas, rotas e visitas é gerenciada no painel conforme a operação evolui.",
      },
    ],
    related: [
      {
        href: "/software-gestao-promotores",
        label: "Software de gestão de promotores",
      },
      { href: "/check-in-gps-pdv", label: "Check-in GPS no PDV" },
      {
        href: "/aplicativo-para-promotor-de-vendas",
        label: "Aplicativo para promotor",
      },
    ],
    ctaTitle: "Organize a roteirização da sua equipe",
    ctaDesc:
      "Planeje rotas no web e acompanhe a execução no app Trade+.",
  },
  {
    path: "/check-in-gps-pdv",
    title: "Check-in GPS no PDV",
    description:
      "Check-in e check-out com GPS e foto no PDV para validar presença do promotor. Controle de visitas em tempo real com o Trade Manager.",
    eyebrow: "Presença auditável",
    h1: "Check-in GPS no PDV",
    intro:
      "Com o Trade+, o check-in GPS no PDV registra entrada e saída do promotor com geolocalização e foto — para o gestor ter evidência real da visita, não só um relato.",
    problemTitle: "Sem check-in confiável, a visita vira dúvida",
    problem:
      "Quando a presença depende só da palavra do promotor ou de mensagem no WhatsApp, fica difícil auditar jornada, tempo em loja e cumprimento do roteiro.",
    benefitsTitle: "Como o check-in funciona no Trade+",
    benefits: [
      {
        icon: Camera,
        title: "Foto obrigatória",
        desc: "Entrada e saída com captura via câmera e guia de enquadramento.",
      },
      {
        icon: MapPin,
        title: "GPS e geocodificação",
        desc: "Coleta automática de localização no momento do check-in/out.",
      },
      {
        icon: Timer,
        title: "Controle de tempo",
        desc: "Acompanhe permanência e fluxo entre visitas do dia.",
      },
      {
        icon: CheckCircle2,
        title: "Status da visita",
        desc: "Veja visitas em andamento, concluídas e pendentes no painel.",
      },
    ],
    howTitle: "Passo a passo no PDV",
    howSteps: [
      {
        title: "Chegue à loja do roteiro",
        desc: "Abra a visita programada no aplicativo.",
      },
      {
        title: "Faça o check-in",
        desc: "Tire a foto e registre a entrada com GPS.",
      },
      {
        title: "Execute as tarefas",
        desc: "Conferências e registros enquanto a visita está ativa.",
      },
      {
        title: "Faça o check-out",
        desc: "Finalize com foto de saída e siga para o próximo PDV.",
      },
    ],
    faqs: [
      {
        question: "O check-in GPS no PDV substitui o ponto eletrônico?",
        answer:
          "Ele valida presença na loja da visita. Políticas de ponto e jornada devem ser alinhadas à necessidade da sua empresa e à legislação aplicável.",
      },
      {
        question: "A foto é obrigatória?",
        answer:
          "No fluxo do Trade+, a captura via câmera faz parte do check-in e check-out para gerar evidência da visita.",
      },
      {
        question: "O gestor vê o check-in em tempo real?",
        answer:
          "Sim. O painel web mostra o andamento das visitas e os registros associados à operação.",
      },
    ],
    related: [
      {
        href: "/aplicativo-para-promotor-de-vendas",
        label: "Aplicativo para promotor",
      },
      {
        href: "/roteirizacao-de-promotores",
        label: "Roteirização de promotores",
      },
      {
        href: "/software-gestao-promotores",
        label: "Software de gestão de promotores",
      },
    ],
    ctaTitle: "Tenha prova real de visita no PDV",
    ctaDesc:
      "Check-in e check-out com GPS e foto para sua operação de Trade Marketing.",
  },
  {
    path: "/controle-de-validade-pdv",
    title: "Controle de Validade no PDV",
    description:
      "Controle de validade no PDV com filtros por criticidade, conferência de produtos e registro de lote. Reduza perdas com o app Trade+.",
    eyebrow: "Prevenção de perdas",
    h1: "Controle de validade no PDV",
    intro:
      "O controle de validade no PDV com o Trade Manager ajuda promotores e gestores a identificar itens críticos, registrar lote/validade e agir antes da perda — direto na visita.",
    problemTitle: "Validade fora de controle vira prejuízo",
    problem:
      "Sem processo digital de controle de validade no PDV, produtos vencem na gôndola, a reposição falha e a operação só descobre o problema quando o dano já ocorreu.",
    benefitsTitle: "Recursos de validade no Trade+",
    benefits: [
      {
        icon: Timer,
        title: "Filtros por criticidade",
        desc: "Separe itens críticos, em atenção e ok para priorizar a ação.",
      },
      {
        icon: Package,
        title: "Conferência na visita",
        desc: "Registre preço, lote e validade durante a execução no PDV.",
      },
      {
        icon: Camera,
        title: "Rotina no aplicativo",
        desc: "O promotor executa o controle no celular, no fluxo da visita.",
      },
      {
        icon: BarChart2,
        title: "Visibilidade para gestão",
        desc: "Acompanhe registros e o histórico da operação no painel web.",
      },
    ],
    howTitle: "Como aplicar na operação",
    howSteps: [
      {
        title: "Cadastre o catálogo",
        desc: "Mantenha produtos e categorias organizados no sistema.",
      },
      {
        title: "Visite o PDV pelo roteiro",
        desc: "O promotor inicia a visita com check-in no app.",
      },
      {
        title: "Confera e classifique",
        desc: "Registre validade e use os filtros de criticidade.",
      },
      {
        title: "Aja sobre o risco",
        desc: "Priorize itens críticos e mantenha o histórico auditável.",
      },
    ],
    faqs: [
      {
        question: "O controle de validade no PDV é só para alimentos?",
        answer:
          "Não. Serve para qualquer operação que precise monitorar vencimento de produtos no ponto de venda.",
      },
      {
        question: "Dá para buscar por produto ou departamento?",
        answer:
          "Sim. O fluxo do app inclui busca e organização para agilizar a conferência em loja.",
      },
      {
        question: "Isso substitui o WMS do CD?",
        answer:
          "Não. O foco é a execução e o monitoramento no PDV durante a visita do promotor.",
      },
    ],
    related: [
      {
        href: "/aplicativo-para-promotor-de-vendas",
        label: "Aplicativo para promotor",
      },
      {
        href: "/software-de-trade-marketing",
        label: "Software de Trade Marketing",
      },
      {
        href: "/software-gestao-promotores",
        label: "Gestão de promotores",
      },
    ],
    ctaTitle: "Reduza perdas com controle de validade no PDV",
    ctaDesc:
      "Use o Trade+ para registrar e priorizar vencimentos na visita do promotor.",
  },
];

export function getSeoPageByPath(path: string) {
  return SEO_SOLUTION_PAGES.find((page) => page.path === path);
}
