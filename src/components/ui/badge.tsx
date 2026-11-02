import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-label-credential text-label-credential uppercase tracking-wider transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-surface-container text-surface-tint border border-surface-container-high",
        secondary:
          "bg-secondary/10 text-secondary border border-secondary/20",
        navy:
          "bg-primary-container text-on-primary border border-primary/20",
        cyan:
          "bg-tertiary-container/10 text-tertiary-container border border-tertiary-container/20",
        outline:
          "border border-outline-variant/60 text-on-surface-variant bg-transparent",
        rating:
          "bg-surface-container-lowest text-on-surface border border-surface-container/60 shadow-sm",
        error:
          "bg-error-container text-on-error-container border border-error/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

