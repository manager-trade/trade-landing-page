import { OG_IMAGE } from "@/lib/seo";
import { PageLayout } from "@/components/PageLayout";

export const metadata = {
  title: "Parceiros",
  description:
    "Programa de parceiros da Trade Manager. Em breve, oportunidades para empresas e profissionais de Trade Marketing no Brasil.",
  alternates: { canonical: "/parceiros" },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Parceiros | Trade Manager",
    description:
      "Programa de parceiros da Trade Manager. Em breve, oportunidades para empresas e profissionais de Trade Marketing no Brasil.",
    url: "/parceiros",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
};

export default function ParceirosPage() {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
          Empresa
        </span>
        <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
          Parceiros
        </h1>
        <p className="mt-4 text-gray-500 max-w-md mx-auto">
          Em breve compartilharemos informações sobre nosso programa de
          parceiros.
        </p>
      </div>
    </PageLayout>
  );
}
