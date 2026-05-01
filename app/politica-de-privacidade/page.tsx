import { PageLayout } from "@/components/PageLayout";

export const metadata = {
  title: "Política de Privacidade — Trade Manager",
};

const sections = [
  {
    title: "1. Introdução",
    content: `A Trade Manager Ltda. ("Trade Manager", "nós") está comprometida com a proteção da privacidade dos dados pessoais tratados por meio de sua plataforma. Esta Política de Privacidade descreve quais dados coletamos, como os utilizamos, com quem os compartilhamos e quais são os direitos dos titulares.

Esta Política se aplica à plataforma web (web.trademanager.com.br) e ao aplicativo móvel Trade Manager, utilizados por empresas de Trade Marketing e pelos promotores de vendas em campo.`,
  },
  {
    title: "2. Dados Coletados",
    content: `2.1. Dados de Cadastro Corporativo
Coletamos os seguintes dados das empresas e administradores que contratam nossos serviços:
• Nome completo do responsável
• E-mail corporativo
• Telefone de contato
• CNPJ e razão social da empresa

2.2. Dados dos Promotores (usuários do app)
• Nome e e-mail (para criação de conta no aplicativo)
• Dados de geolocalização (GPS) coletados durante check-in e check-out nas lojas
• Fotografias registradas na entrada e saída de cada visita
• Horários de início e término das visitas

2.3. Dados Operacionais
• Produtos conferidos, preços, lotes e datas de validade registrados durante as visitas
• Histórico de visitas realizadas por loja e promotor
• Informações sobre o dispositivo móvel (modelo, sistema operacional, versão do app)

2.4. Dados de Uso da Plataforma
• Logs de acesso (IP, data e hora, páginas acessadas)
• Cookies de sessão e preferências`,
  },
  {
    title: "3. Finalidade do Tratamento",
    content: `Os dados coletados são tratados para as seguintes finalidades:

• Prestação do serviço contratado: gerenciar usuários, lojas, produtos e roteiros de visitas;
• Verificação de presença: confirmar que o promotor esteve fisicamente na loja por meio de geolocalização e foto;
• Geração de relatórios: fornecer à empresa contratante informações sobre a execução do Trade Marketing;
• Suporte técnico: identificar e corrigir problemas na plataforma;
• Comunicação: enviar notificações sobre o serviço, atualizações e faturas;
• Cumprimento de obrigações legais.`,
  },
  {
    title: "4. Base Legal",
    content: `O tratamento dos dados pessoais pela Trade Manager se fundamenta nas seguintes bases legais previstas na LGPD (Lei n.º 13.709/2018):

• Execução de contrato: para os dados necessários à prestação do serviço contratado;
• Consentimento: para dados de geolocalização e fotografias dos promotores, cujo consentimento deve ser obtido pela empresa contratante;
• Legítimo interesse: para melhorias da plataforma, segurança e prevenção a fraudes;
• Cumprimento de obrigação legal: quando exigido por autoridade competente.`,
  },
  {
    title: "5. Compartilhamento de Dados",
    content: `Não vendemos dados pessoais a terceiros. Os dados podem ser compartilhados apenas nas seguintes situações:

• Com a empresa contratante: os gestores têm acesso aos dados operacionais gerados pelos promotores vinculados à sua conta;
• Com prestadores de serviço: empresas que nos auxiliam na hospedagem, infraestrutura de nuvem, processamento de pagamentos e suporte técnico, todos sujeitos a obrigações contratuais de confidencialidade;
• Por obrigação legal: quando exigido por lei, regulamento ou decisão judicial.`,
  },
  {
    title: "6. Armazenamento e Segurança",
    content: `6.1. Os dados são armazenados em servidores seguros, com criptografia em trânsito (TLS) e em repouso.

6.2. Adotamos controles de acesso baseados em funções (RBAC), monitoramento de atividades suspeitas e auditorias periódicas de segurança.

6.3. Em caso de incidente de segurança que possa causar risco aos titulares, notificaremos a Autoridade Nacional de Proteção de Dados (ANPD) e os titulares afetados conforme prazo legal.`,
  },
  {
    title: "7. Retenção de Dados",
    content: `• Dados de conta ativa: mantidos durante toda a vigência do contrato.
• Dados operacionais (visitas, fotos, geolocalização): mantidos por até 2 (dois) anos após o registro, salvo obrigação legal que exija prazo maior.
• Após o encerramento do contrato: os dados são mantidos por até 90 (noventa) dias para exportação, após o qual são excluídos de forma segura.`,
  },
  {
    title: "8. Cookies",
    content: `Utilizamos cookies essenciais para o funcionamento da plataforma web (autenticação, preferências de idioma e sessão). Não utilizamos cookies de rastreamento publicitário.

O usuário pode configurar seu navegador para bloquear cookies, mas isso pode impedir o correto funcionamento de algumas funcionalidades da plataforma.`,
  },
  {
    title: "9. Direitos dos Titulares",
    content: `Nos termos da LGPD, os titulares de dados pessoais têm direito a:

• Confirmar a existência de tratamento de seus dados;
• Acessar os dados que possuímos sobre eles;
• Corrigir dados incompletos, inexatos ou desatualizados;
• Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;
• Obter informações sobre o compartilhamento de dados;
• Revogar o consentimento quando aplicável.

Para exercer esses direitos, entre em contato pelo e-mail: privacidade@trademanager.com.br.`,
  },
  {
    title: "10. Alterações nesta Política",
    content: `Esta Política poderá ser atualizada periodicamente. Notificaremos alterações relevantes por e-mail cadastrado ou por aviso na plataforma com antecedência mínima de 15 (quinze) dias.`,
  },
  {
    title: "11. Contato",
    content: `Dúvidas sobre esta Política de Privacidade podem ser enviadas para:

E-mail: privacidade@trademanager.com.br
Encarregado de Proteção de Dados (DPO): [Nome a definir]
Endereço: São Paulo – SP, Brasil`,
  },
];

export default function PrivacidadePage() {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            Legal
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            Última atualização: 1 de maio de 2026
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Esta Política descreve como a Trade Manager coleta, usa, armazena e
            protege os dados pessoais de seus usuários, em conformidade com a
            Lei Geral de Proteção de Dados (LGPD — Lei n.º 13.709/2018).
          </p>
        </div>

        <nav className="mb-10 p-5 bg-orange-50 border border-orange-100 rounded-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">
            Sumário
          </p>
          <ol className="space-y-1">
            {sections.map((s) => (
              <li key={s.title}>
                <a
                  href={`#${s.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="text-sm text-gray-700 hover:text-orange-600 transition-colors"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-10">
          {sections.map((s) => (
            <section
              key={s.title}
              id={s.title.replace(/\s+/g, "-").toLowerCase()}
            >
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                {s.title}
              </h2>
              <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {s.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
