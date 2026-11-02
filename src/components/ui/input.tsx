import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            "w-full rounded-lg bg-surface px-4 py-3 font-body-md text-body-md text-primary transition-all duration-200 outline-none border border-transparent",
            "focus:bg-surface-container-lowest focus:border-tertiary-container focus:ring-4 focus:ring-tertiary-container/15",
            "placeholder:text-on-surface-variant/50",
            error && "border-error focus:border-error focus:ring-error/20",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs font-medium text-error flex items-center gap-1">
            <span>•</span> {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

