"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLeadProfile } from "@/features/lead-profile/context/lead-profile-context";

interface LogoProps {
  className?: string;
  variant?: "header" | "footer";
}

export function Logo({ className, variant = "header" }: LogoProps) {
  const { isDoctor, doctorLastName, name, clinicName, city } = useLeadProfile();

  const brandTitle = isDoctor
    ? `Dr. ${doctorLastName || name} | Aesthetic Dentistry`
    : clinicName;

  const brandSubtitle = isDoctor
    ? `Bespoke Smile Architecture • ${city}, UK`
    : `Premier Private Practice • ${city}, UK`;

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-3 group transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-lg",
        className
      )}
      aria-label={`${brandTitle} - Home`}
    >
      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-secondary/20 bg-surface-container shadow-sm transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/logo.png"
          alt={`${brandTitle} emblem`}
          fill
          sizes="44px"
          className="object-contain p-1.5"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span
          className={cn(
            "font-headline-sm text-sm sm:text-base md:text-lg font-bold leading-tight tracking-tight text-primary transition-colors group-hover:text-secondary max-w-[200px] sm:max-w-xs md:max-w-none truncate",
            variant === "footer" && "text-primary"
          )}
        >
          {brandTitle}
        </span>
        <span className="font-label-credential text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant/80">
          {brandSubtitle}
        </span>
      </div>
    </Link>
  );
}

