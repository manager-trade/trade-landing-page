import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { JsonLd } from "@/components/JsonLd";
import type { SeoPageContent } from "@/lib/seo-pages";
import { absoluteUrl, OG_IMAGE, SITE_NAME } from "@/lib/seo";
import {
  LOGIN_URL,
  REGISTER_URL,
  TRIAL_LABEL,
  TRIAL_NOTE,
  WHATSAPP_URL,
} from "@/lib/links";

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
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | ${SITE_NAME}`,
      description: page.description,
      images: [OG_IMAGE.url],
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

const primaryCta =
  "inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_-12px_rgba(234,88,12,0.9)] transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-orange-600";

const secondaryCta =
  "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-orange-400/50 hover:text-orange-300";

export function SeoSolutionPage({ page }: { page: SeoPageContent }) {
  return (
    <PageLayout>
      <JsonLd data={[buildWebPageJsonLd(page), buildFaqJsonLd(page)]} />

      <div className="bg-[#0b1220] text-slate-100">
        {/* Hero — mesmo gradiente da home */}
        <section
          className="map-ground relative overflow-hidden border-b border-white/5 py-20 sm:py-24"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 20% 10%, rgba(249,115,22,0.22), transparent 55%), radial-gradient(ellipse 60% 45% at 90% 30%, rgba(36,166,79,0.12), transparent 50%), linear-gradient(165deg, #0b1220 0%, #111827 45%, #0f172a 100%)",
          }}
        >
          <div className="reveal-up mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              {page.eyebrow}
            </span>
            <h1 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-slate-100 sm:text-4xl lg:text-[2.75rem]">
              {page.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
              {page.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={primaryCta}
              >
                Começar teste grátis
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryCta}
              >
                Falar no WhatsApp
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-400">{TRIAL_NOTE}</p>
          </div>
        </section>

        <div className="mx-auto max-w-3xl space-y-20 px-4 py-20 sm:px-6 lg:px-8">
          <section>
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {page.problemTitle}
            </h2>
            <p className="text-base leading-relaxed text-slate-300">
              {page.problem}
            </p>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {page.benefitsTitle}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {page.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-white/10 bg-[#111827] p-5 transition-colors hover:border-orange-400/30"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/15">
                      <benefit.icon className="h-4 w-4 text-orange-400" />
                    </div>
                    <p className="font-semibold text-white">{benefit.title}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {page.howTitle}
            </h2>
            <ol className="space-y-4">
              {page.howSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-[#111827] p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Perguntas frequentes
            </h2>
            <div className="space-y-4">
              {page.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <h3 className="mb-2 font-semibold text-white">
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-extrabold tracking-tight text-white">
              Continue explorando
            </h2>
            <ul className="space-y-2">
              {page.related.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-orange-400 transition-colors hover:text-orange-300"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 bg-[#111827] px-6 py-12 text-center shadow-[0_-24px_80px_-20px_rgba(234,88,12,0.35)]">
            <h2 className="mb-3 text-xl font-extrabold tracking-tight text-white sm:text-2xl">
              {page.ctaTitle}
            </h2>
            <p className="mx-auto mb-7 max-w-md text-sm leading-relaxed text-slate-400">
              {page.ctaDesc}
            </p>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryCta}
            >
              {TRIAL_LABEL}
            </a>
            <p className="mt-4 text-sm text-slate-400">
              Sem cartão de crédito. Já é cliente?{" "}
              <a
                href={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-orange-400 hover:text-orange-300 hover:underline"
              >
                Entrar
              </a>
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
