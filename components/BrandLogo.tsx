import { cn } from "@/lib/utils";

/** Arquivos oficiais do MIV Trade+ v1.0 (pacote 1_Marca). Não recompor o logo. */
const FILES = {
  horizontal: {
    light: "/brand/trade-plus-logo-horizontal.svg",
    dark: "/brand/trade-plus-logo-horizontal-negativo.svg",
    ratio: 1073 / 400,
  },
  simbolo: {
    light: "/brand/trade-plus-simbolo.svg",
    dark: "/brand/trade-plus-simbolo.svg",
    ratio: 1,
  },
} as const;

type BrandLogoProps = {
  /** `horizontal` = símbolo + "Trade+"; `simbolo` = só o pin com check. */
  variant?: keyof typeof FILES;
  /** `dark` = fundo escuro (versão negativo, nome em branco). */
  tone?: "light" | "dark";
  /** Altura em px. */
  height?: number;
  className?: string;
};

export function BrandLogo({
  variant = "horizontal",
  tone = "light",
  height = 36,
  className,
}: BrandLogoProps) {
  const file = FILES[variant];
  return (
    // eslint-disable-next-line @next/next/no-img-element -- SVG oficial, sem otimização
    <img
      src={tone === "dark" ? file.dark : file.light}
      alt={variant === "simbolo" ? "" : "Trade+"}
      aria-hidden={variant === "simbolo" ? true : undefined}
      width={Math.round(height * file.ratio)}
      height={height}
      className={cn("shrink-0", className)}
    />
  );
}
