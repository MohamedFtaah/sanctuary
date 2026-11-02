import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-label-interactive text-label-interactive transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tertiary-container disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-primary-container text-on-primary hover:bg-primary shadow-sm hover:shadow-md hover:-translate-y-0.5",
        primary:
          "bg-primary-container text-on-primary hover:bg-primary shadow-sm hover:shadow-md hover:-translate-y-0.5",
        secondary:
          "bg-secondary text-on-secondary hover:bg-secondary/90 shadow-sm hover:shadow-md hover:-translate-y-0.5",
        outline:
          "border border-primary/20 bg-transparent text-primary hover:bg-surface-container/60 hover:border-primary/40",
        ghost:
          "text-primary hover:bg-surface-container/60 hover:text-primary",
        urgent:
          "bg-error text-on-error hover:bg-error/90 shadow-sm animate-pulse-glow",
        accent:
          "bg-secondary-container text-on-secondary-fixed hover:bg-secondary-container/90 font-bold",
        shimmer:
          "btn-shimmer bg-primary-container text-on-primary hover:bg-primary shadow-sm hover:shadow-md hover:-translate-y-0.5",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-13 rounded-lg px-8 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

