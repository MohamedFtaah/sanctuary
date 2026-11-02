import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "header" | "footer";
}

export function Logo({ className, variant = "header" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-3 group transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-lg",
        className
      )}
      aria-label="Scinico Family Dental - Home"
    >
      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-secondary/20 bg-surface-container shadow-sm transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/logo.png"
          alt="Scinico Family Dental emblem"
          fill
          sizes="44px"
          className="object-contain p-1.5"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span
          className={cn(
            "font-headline-sm text-base md:text-lg font-bold leading-tight tracking-tight text-primary transition-colors group-hover:text-secondary",
            variant === "footer" && "text-primary"
          )}
        >
          Scinico Family Dental
        </span>
        <span className="font-label-credential text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant/80">
          Madison Near-East • Est. 1975
        </span>
      </div>
    </Link>
  );
}

