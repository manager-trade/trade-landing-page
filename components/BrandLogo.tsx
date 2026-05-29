import Image from "next/image";
import { cn } from "@/lib/utils";

const sizes = {
  sm: 16,
  md: 20,
  lg: 24,
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
      className={cn("shrink-0", className)}
      aria-hidden
    />
  );
}
