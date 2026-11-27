import Link from "next/link";
import type { ReactNode } from "react";
import { BrandMark } from "@/components/BrandMark";

const FOOTER_LINKS = [
  { label: "Termos de Uso", href: "/termos" },
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "LGPD", href: "/lgpd" },
];

export function PageLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      {/* Header — território escuro da home */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b1220]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center text-white"
            aria-label="Trade+ — página inicial"
          >
            <BrandMark size="md" />
          </Link>
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-orange-400"
          >
            ← Voltar ao início
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">{children}</main>

      {/* Footer — mesmo tom da home */}
      <footer className="mt-16 border-t border-white/5 bg-[#0b1220] py-10 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 text-xs sm:flex-row sm:px-6 lg:px-8">
          <span className="text-slate-500">
            © 2026 Trade Manager Soluções em Trade Marketing Ltda. Todos os
            direitos reservados.
          </span>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-orange-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
