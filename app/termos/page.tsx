import { PageLayout } from "@/components/PageLayout";

export const metadata = {
  title: "Termos de Uso — Trade Manager",
};

const sections = [
  {
    title: "1. Aceitação dos Termos",
    content: `Ao acessar ou utilizar o produto Trade+ — composto pelo sistema web disponível em web.trademanager.com.br e pelo aplicativo móvel Trade+ — você ("Usuário") concorda integralmente com estes Termos de Uso. Caso não concorde com qualquer disposição, interrompa imediatamente o uso da plataforma.

Estes termos constituem um contrato vinculante entre o Usuário (ou a empresa por ele representada) e a Trade Manager Soluções em Trade Marketing Ltda., CNPJ 55.903.475/0001-80, com sede na R. Manoel Felipe, 108, Sala 3, Bairro Buritis, Boa Vista – RR, CEP 69.309-170.`,
  },
  {
    title: "2. Descrição do Serviço",
    content: `O Trade Manager é uma empresa de tecnologia para Trade Marketing. Seu produto principal — o Trade+ — é uma solução SaaS voltada para a gestão de promotores de vendas em campo, composta por:

• Plataforma Web Trade+: gerenciamento de lojas, catálogo de produtos, roteiros de visitas, controle de usuários e emissão de relatórios gerenciais.
• Aplicativo Móvel Trade+: roteiro diário de visitas, check-in e check-out com geolocalização e foto obrigatória, conferência de produtos por código de barras, controle de validade de itens, e consulta de informações das lojas.

O serviço é destinado exclusivamente a empresas e profissionais do setor de Trade Marketing.`,
  },
  {
    title: "3. Cadastro e Conta",
    content: `3.1. O acesso à plataforma exige o cadastro de uma conta corporativa. O responsável pelo cadastro declara ter poderes para representar a empresa contratante.

3.2. O Usuário é responsável por manter a confidencialidade de suas credenciais de acesso. Qualquer atividade realizada com as credenciais é de responsabilidade do Usuário.

3.3. A Trade Manager reserva-se o direito de suspender ou cancelar contas que violem estes Termos, sem necessidade de aviso prévio.`,
  },
  {
    title: "4. Uso Permitido",
    content: `O Usuário compromete-se a utilizar a plataforma exclusivamente para finalidades legítimas relacionadas à gestão de Trade Marketing, sendo vedado:

• Compartilhar credenciais de acesso com terceiros não autorizados;
• Realizar engenharia reversa, descompilar ou tentar extrair o código-fonte da plataforma;
• Utilizar a plataforma para fins ilegais, difamatórios ou que causem dano a terceiros;
• Introduzir vírus, malware ou qualquer código malicioso;
• Acessar ou tentar acessar dados de outras organizações cadastradas na plataforma.`,
  },
  {
    title: "5. Coleta e Uso de Dados pelo Usuário",
    content: `5.1. O aplicativo móvel coleta dados de geolocalização (GPS) e fotografias dos promotores durante as visitas. A empresa contratante, na condição de controladora desses dados, deve garantir que os promotores foram devidamente informados e consentiram com essa coleta, em conformidade com a Lei Geral de Proteção de Dados (Lei n.º 13.709/2018).

5.2. Os dados de visita, produtos conferidos e registros de check-in/check-out são armazenados de forma segura e ficam disponíveis para consulta pelo gestor responsável da empresa contratante.`,
  },
  {
    title: "6. Propriedade Intelectual",
    content: `Todos os direitos de propriedade intelectual relativos ao produto Trade+ — incluindo, mas não se limitando a, código-fonte, design, logotipos, marca, textos e funcionalidades — são de titularidade exclusiva da Trade Manager Soluções em Trade Marketing Ltda.

Nenhuma disposição destes Termos concede ao Usuário qualquer direito sobre a propriedade intelectual da Trade Manager, exceto a licença limitada de uso da plataforma durante a vigência do contrato.`,
  },
  {
    title: "7. Disponibilidade e Suporte",
    content: `7.1. A Trade Manager envidarará esforços razoáveis para manter a plataforma disponível 24 horas por dia, 7 dias por semana, podendo haver interrupções para manutenções programadas, que serão comunicadas com antecedência sempre que possível.

7.2. O suporte técnico é prestado de segunda a sexta-feira, das 9h às 18h, e aos sábados, das 9h às 13h, por meio do canal suporte@trademanager.com.br. O suporte online está disponível 24 horas.`,
  },
  {
    title: "8. Limitação de Responsabilidade",
    content: `Na máxima extensão permitida pela legislação aplicável, a Trade Manager não será responsável por danos indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou da impossibilidade de uso da plataforma, incluindo perda de dados, perda de receita ou interrupção de negócios.

A responsabilidade total da Trade Manager, em qualquer hipótese, não excederá o valor pago pelo Usuário nos 3 (três) meses anteriores ao evento gerador do dano.`,
  },
  {
    title: "9. Rescisão",
    content: `Qualquer das partes poderá rescindir o uso da plataforma mediante aviso prévio de 30 (trinta) dias. A Trade Manager poderá rescindir imediatamente em caso de violação grave destes Termos.

Após a rescisão, os dados do Usuário serão mantidos por até 90 (noventa) dias para fins de exportação, após o qual serão definitivamente excluídos.`,
  },
  {
    title: "10. Alterações nos Termos",
    content: `A Trade Manager poderá atualizar estes Termos periodicamente. As alterações serão notificadas por e-mail cadastrado ou por aviso na plataforma com antecedência mínima de 15 (quinze) dias. O uso continuado após a vigência das novas condições implica aceitação das mudanças.`,
  },
  {
    title: "11. Lei Aplicável e Foro",
    content: `Estes Termos são regidos pela legislação brasileira. Quaisquer disputas decorrentes deste instrumento serão submetidas ao Foro da Comarca de Boa Vista – RR, com renúncia expressa a qualquer outro, por mais privilegiado que seja.`,
  },
];

export default function TermosPage() {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            Legal
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Termos de Uso
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            Última atualização: 1 de maio de 2026
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Leia atentamente estes Termos de Uso antes de utilizar a plataforma
            Trade Manager. Eles definem as regras e condições para o uso dos
            nossos serviços.
          </p>
        </div>

        {/* TOC */}
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

        {/* Sections */}
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
