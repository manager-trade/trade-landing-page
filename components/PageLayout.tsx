import Link from "next/link";
import type { ReactNode } from "react";
import { BrandLogo } from "@/components/BrandLogo";

export function PageLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-base text-gray-900"
          >
            <BrandLogo size="md" />
            Trade Manager
          </Link>
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-orange-600 transition-colors"
          >
            ← Voltar ao início
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <span>
            © 2026 Trade Manager Soluções em Trade Marketing Ltda. Todos os
            direitos reservados.
          </span>
          <div className="flex gap-5">
            <Link
              href="/termos"
              className="hover:text-orange-500 transition-colors"
            >
              Termos de Uso
            </Link>
            <Link
              href="/politica-de-privacidade"
              className="hover:text-orange-500 transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/lgpd"
              className="hover:text-orange-500 transition-colors"
            >
              LGPD
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
