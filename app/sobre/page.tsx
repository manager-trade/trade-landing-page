import { PageLayout } from "@/components/PageLayout";
import {
  MapPin,
  Smartphone,
  Monitor,
  Users,
  Target,
  Shield,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Sobre Nós — Trade Manager",
};

const values = [
  {
    icon: Target,
    title: "Foco no resultado",
    desc: "Cada funcionalidade da plataforma foi pensada para gerar dados reais que aumentam a eficiência das operações de campo.",
  },
  {
    icon: Shield,
    title: "Confiança e segurança",
    desc: "Tratamos os dados dos nossos clientes com responsabilidade, seguindo rigorosamente a LGPD e as melhores práticas de segurança.",
  },
  {
    icon: Zap,
    title: "Simplicidade",
    desc: "Acreditamos que uma boa ferramenta precisa ser fácil de usar. Nosso app foi desenhado para promotores em campo, não para especialistas em tecnologia.",
  },
  {
    icon: Users,
    title: "Parceria",
    desc: "Trabalhamos lado a lado com nossos clientes para entender os desafios reais do Trade Marketing e evoluir continuamente a plataforma.",
  },
];

const features = [
  {
    icon: Monitor,
    label: "Plataforma Web",
    desc: "Gestão completa de lojas, produtos, usuários e roteiros, com relatórios detalhados.",
  },
  {
    icon: Smartphone,
    label: "App Móvel",
    desc: "Check-in/out com foto e GPS, conferência de produtos por código de barras e controle de validade.",
  },
];

export default function SobrePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-orange-50/60 py-16 border-b border-orange-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-orange-600 fill-orange-100" />
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Empresa
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Sobre a Trade Manager
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg">
            Somos uma empresa brasileira de tecnologia para Trade Marketing,
            sediada em Boa Vista – RR. Desenvolvemos o{" "}
            <strong>Trade+</strong> — nossa plataforma completa de gestão de
            promotores de vendas em campo — para resolver um problema real: a
            dificuldade de acompanhar equipes de field de forma eficiente,
            rastreável e confiável.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {/* Nossa história */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
            Nossa história
          </h2>
          <div className="text-gray-600 leading-relaxed space-y-4 text-sm">
            <p>
              Fundada em julho de 2024, em Boa Vista – RR, a Trade Manager
              nasceu da vivência direta com os desafios do Trade Marketing. Vimos
              empresas perdendo produtividade e visibilidade por dependerem de
              planilhas, ligações e processos manuais para acompanhar centenas de
              visitas diárias de promotores espalhados por diferentes cidades e
              redes varejistas.
            </p>
            <p>
              Diante disso, desenvolvemos o <strong>Trade+</strong> — uma
              plataforma completa que conecta o gestor ao promotor em campo: do
              planejamento do roteiro à confirmação de presença com
              geolocalização, da conferência de produtos ao controle de validade
              — tudo em tempo real, organizado e auditável.
            </p>
            <p>
              Hoje, o Trade+ ajuda empresas a transformar suas operações de
              campo em vantagem competitiva.
            </p>
          </div>
        </section>

        {/* Missão */}
        <section className="bg-orange-50 border border-orange-100 rounded-2xl p-8">
          <h2 className="text-xl font-extrabold text-gray-900 mb-2">
            Nossa missão
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Simplificar a gestão de promotores de vendas, tornando cada visita
            ao ponto de venda rastreável, produtiva e orientada a dados — para
            que as empresas possam focar no que importa: vender mais.
          </p>
          <p className="mt-4 text-sm text-gray-400">
            Trade Manager Soluções em Trade Marketing Ltda. · CNPJ
            55.903.475/0001-80 · Boa Vista, RR
          </p>
        </section>

        {/* O que fazemos */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            O que fazemos
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                  <f.icon className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    {f.label}{" "}
                    <span className="text-orange-600">Trade+</span>
                  </p>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Valores */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            Nossos valores
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                    <v.icon className="w-4 h-4 text-orange-600" />
                  </div>
                  <p className="font-semibold text-gray-900">{v.title}</p>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-4">
          <h2 className="text-xl font-extrabold text-gray-900 mb-3">
            Pronto para transformar sua operação?
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Conheça a plataforma e veja na prática como o Trade Manager pode
            ajudar sua equipe.
          </p>
          <a
            href="https://web.trademanager.com.br/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-orange-600 text-white font-semibold text-sm hover:bg-orange-700 transition-colors shadow-md shadow-orange-200"
          >
            Acessar Sistema
          </a>
        </section>
      </div>
    </PageLayout>
  );
}
