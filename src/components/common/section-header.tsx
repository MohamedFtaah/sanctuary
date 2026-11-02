import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  badgeVariant?: "default" | "secondary" | "navy" | "cyan" | "outline" | "rating";
}

export function SectionHeader({
  badge,
  badgeIcon,
  title,
  description,
  align = "center",
  className,
  badgeVariant = "default",
}: SectionHeaderProps) {
  const alignmentClass =
    align === "center"
      ? "text-center items-center mx-auto"
      : align === "right"
      ? "text-right items-end ml-auto"
      : "text-left items-start";

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl mb-12 lg:mb-16",
        alignmentClass,
        className
      )}
    >
      {badge && (
        <Badge variant={badgeVariant} className="mb-4">
          {badgeIcon}
          <span>{badge}</span>
        </Badge>
      )}
      <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight font-bold">
        {title}
      </h2>
      {description && (
        <p className="mt-4 font-body-lg text-base md:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

