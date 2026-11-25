import { BrandLogo } from "@/components/BrandLogo";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  /** `dark` = fundo escuro (logo negativo). */
  tone?: "light" | "dark";
};

const heights = {
  sm: 22,
  md: 28,
  lg: 36,
  xl: 56,
} as const;

/** Atalho para o logo oficial Trade+ (MIV). Preferir BrandLogo direto em layouts simples. */
export function BrandMark({
  size = "md",
  className,
  tone = "dark",
}: BrandMarkProps) {
  return (
    <BrandLogo
      variant="horizontal"
      tone={tone}
      height={heights[size]}
      className={cn(className)}
    />
  );
}
