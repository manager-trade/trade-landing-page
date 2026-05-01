import { PageLayout } from "@/components/PageLayout";

export const metadata = {
  title: "LGPD — Trade Manager",
};

const sections = [
  {
    title: "1. Compromisso com a LGPD",
    content: `A Trade Manager Ltda. está comprometida com o cumprimento integral da Lei Geral de Proteção de Dados Pessoais (LGPD — Lei n.º 13.709, de 14 de agosto de 2018), que regula o tratamento de dados pessoais no Brasil.

Esta página apresenta de forma objetiva como a Trade Manager se adequa à LGPD, quais os direitos dos titulares e como exercê-los.`,
  },
  {
    title: "2. Papel da Trade Manager no Tratamento de Dados",
    content: `A Trade Manager atua em dois papéis distintos:

Controladora: em relação aos dados dos administradores e responsáveis das empresas contratantes (e-mail, nome, telefone, CNPJ), que são necessários para a execução do contrato de prestação de serviços.

Operadora: em relação aos dados dos promotores de vendas (usuários do aplicativo móvel), que são inseridos e gerenciados pelas empresas contratantes. Neste caso, a empresa contratante é a controladora e a Trade Manager processa os dados em seu nome, seguindo as instruções contratuais.`,
  },
  {
    title: "3. Dados Pessoais Tratados",
    content: `A plataforma Trade Manager trata as seguintes categorias de dados pessoais:

Dados de identificação: nome, e-mail e telefone de administradores e promotores.

Dados de localização: coordenadas GPS coletadas no momento do check-in e check-out nas lojas visitadas, com o objetivo de confirmar a presença física do promotor.

Imagens: fotografias capturadas obrigatoriamente via câmera do dispositivo móvel na entrada e saída de cada visita.

Dados operacionais: registros de produtos conferidos, preços, lotes, datas de validade e histórico de visitas.

Dados técnicos: endereço IP, tipo de dispositivo, versão do sistema operacional e logs de acesso.`,
  },
  {
    title: "4. Base Legal para o Tratamento",
    content: `Todos os tratamentos de dados realizados pela Trade Manager possuem base legal prevista na LGPD:

• Art. 7º, V — Execução de contrato: dados necessários para prestar o serviço contratado pela empresa cliente.
• Art. 7º, I — Consentimento: dados de geolocalização e fotografias dos promotores, cujo consentimento deve ser coletado pela empresa contratante (controladora) junto aos seus funcionários antes do uso do aplicativo.
• Art. 7º, IX — Legítimo interesse: dados de uso da plataforma para melhorias de segurança e desempenho.
• Art. 7º, II — Cumprimento de obrigação legal ou regulatória.`,
  },
  {
    title: "5. Direitos dos Titulares de Dados",
    content: `Conforme os artigos 17 a 22 da LGPD, os titulares de dados pessoais têm os seguintes direitos:

Confirmação e acesso (Art. 18, I e II): confirmar se tratamos seus dados e receber cópia dos dados que possuímos.

Correção (Art. 18, III): solicitar a correção de dados incompletos, inexatos ou desatualizados.

Anonimização, bloqueio ou eliminação (Art. 18, IV): solicitar o tratamento de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.

Portabilidade (Art. 18, V): receber os dados em formato estruturado e interoperável.

Eliminação após revogação do consentimento (Art. 18, VI): quando o tratamento for baseado em consentimento, solicitar a eliminação dos dados após revogar o consentimento.

Informação sobre compartilhamento (Art. 18, VII): saber com quais entidades públicas e privadas compartilhamos seus dados.

Não sujeição a decisão automatizada (Art. 20): solicitar revisão de decisões tomadas exclusivamente com base em tratamento automatizado.`,
  },
  {
    title: "6. Como Exercer seus Direitos",
    content: `Para exercer qualquer direito previsto na LGPD, o titular deve enviar requisição para:

E-mail: privacidade@trademanager.com.br
Assunto: "Direitos LGPD — [descreva o direito que deseja exercer]"

A Trade Manager responderá em até 15 (quinze) dias corridos da data de recebimento da solicitação. Em caso de solicitação complexa, esse prazo poderá ser estendido com comunicação prévia ao titular.`,
  },
  {
    title: "7. Encarregado de Proteção de Dados (DPO)",
    content: `A Trade Manager designou um Encarregado de Proteção de Dados (Data Protection Officer — DPO), responsável por garantir o cumprimento da LGPD e servir como canal de comunicação entre a empresa, os titulares e a Autoridade Nacional de Proteção de Dados (ANPD).

Contato com o DPO:
E-mail: dpo@trademanager.com.br`,
  },
  {
    title: "8. Segurança dos Dados",
    content: `Adotamos medidas técnicas e organizacionais para proteger os dados pessoais contra acesso não autorizado, perda, destruição ou alteração, incluindo:

• Criptografia TLS em todas as comunicações entre o aplicativo/plataforma e nossos servidores;
• Criptografia em repouso nos bancos de dados;
• Controle de acesso baseado em perfil (RBAC) — cada usuário acessa apenas os dados relevantes à sua função;
• Monitoramento contínuo de segurança e auditorias periódicas;
• Política de senha segura e autenticação para todos os acessos.`,
  },
  {
    title: "9. Transferência Internacional de Dados",
    content: `Os dados podem ser hospedados em infraestrutura de nuvem cujos servidores estejam localizados fora do Brasil. Nesses casos, a Trade Manager garante que as transferências ocorrem somente para países ou organizações que ofereçam nível de proteção adequado à LGPD, ou mediante cláusulas contratuais específicas (Art. 33 da LGPD).`,
  },
  {
    title: "10. Incidentes de Segurança",
    content: `Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares, a Trade Manager notificará:

• A Autoridade Nacional de Proteção de Dados (ANPD): dentro do prazo legal;
• Os titulares afetados: em comunicação clara e objetiva, informando a natureza do incidente, os dados envolvidos e as medidas adotadas.`,
  },
  {
    title: "11. Contato e Canal de Comunicação com a ANPD",
    content: `Caso o titular entenda que seus direitos não foram atendidos pela Trade Manager, poderá registrar reclamação diretamente na Autoridade Nacional de Proteção de Dados (ANPD), pelo portal: www.gov.br/anpd.

Contato Trade Manager — Privacidade:
E-mail: privacidade@trademanager.com.br`,
  },
];

export default function LgpdPage() {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            Legal
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            LGPD
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            Última atualização: 1 de maio de 2026
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Entenda como a Trade Manager trata dados pessoais em conformidade
            com a Lei Geral de Proteção de Dados (Lei n.º 13.709/2018) e conheça
            seus direitos como titular.
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
