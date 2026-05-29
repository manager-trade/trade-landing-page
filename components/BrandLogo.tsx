import Image from "next/image";
import { cn } from "@/lib/utils";

const sizes = {
  sm: 20,
  md: 26,
  lg: 32,
} as const;

type BrandLogoProps = {
  size?: keyof typeof sizes;
  className?: string;
};

export function BrandLogo({ size = "md", className }: BrandLogoProps) {
  const px = sizes[size];

  return (
    <Image
      src="/icon.png"
      alt=""
      width={px}
      height={px}
      className={cn("shrink-0 rounded-lg", className)}
      aria-hidden
    />
  );
}
