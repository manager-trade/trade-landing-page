import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { JsonLd } from "@/components/JsonLd";
import type { SeoPageContent } from "@/lib/seo-pages";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";

export function buildSeoPageMetadata(page: SeoPageContent): Metadata {
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      title: `${page.title} | ${SITE_NAME}`,
      description: page.description,
      url: page.path,
      type: "website",
      locale: "pt_BR",
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | ${SITE_NAME}`,
      description: page.description,
    },
  };
}

function buildFaqJsonLd(page: SeoPageContent) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function buildWebPageJsonLd(page: SeoPageContent) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.h1,
    description: page.description,
    url: absoluteUrl(page.path),
    inLanguage: "pt-BR",
    isPartOf: {
      "@id": `${absoluteUrl()}/#website`,
    },
  };
}

export function SeoSolutionPage({ page }: { page: SeoPageContent }) {
  return (
    <PageLayout>
      <JsonLd data={[buildWebPageJsonLd(page), buildFaqJsonLd(page)]} />

      <section className="bg-orange-50/60 py-16 border-b border-orange-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            {page.eyebrow}
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            {page.h1}
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg">{page.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://web.trademanager.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-orange-600 text-white font-semibold text-sm hover:bg-orange-700 transition-colors shadow-md shadow-orange-200"
            >
              Acessar Sistema
            </a>
            <Link
              href="/#contato"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold text-sm hover:border-orange-500 hover:text-orange-600 transition-colors"
            >
              Falar com a equipe
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
            {page.problemTitle}
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            {page.problem}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            {page.benefitsTitle}
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {page.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-4 h-4 text-orange-600" />
                  </div>
                  <p className="font-semibold text-gray-900">{benefit.title}</p>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            {page.howTitle}
          </h2>
          <ol className="space-y-4">
            {page.howSteps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-white"
              >
                <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 font-bold text-sm flex items-center justify-center shrink-0">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold text-gray-900">{step.title}</p>
                  <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            Perguntas frequentes
          </h2>
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-5 rounded-xl border border-gray-100 bg-gray-50"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-extrabold text-gray-900 mb-4">
            Continue explorando
          </h2>
          <ul className="space-y-2">
            {page.related.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm text-orange-700 hover:text-orange-800 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="text-center py-4 border-t border-gray-100">
          <h2 className="text-xl font-extrabold text-gray-900 mb-3">
            {page.ctaTitle}
          </h2>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            {page.ctaDesc}
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
