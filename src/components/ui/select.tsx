import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          className={cn(
            "w-full appearance-none rounded-lg bg-surface px-4 py-3 pr-10 font-body-md text-body-md text-primary transition-all duration-200 outline-none border border-transparent cursor-pointer",
            "focus:bg-surface-container-lowest focus:border-tertiary-container focus:ring-4 focus:ring-tertiary-container/15",
            error && "border-error focus:border-error focus:ring-error/20",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant">
          <ChevronDown className="h-4 w-4" />
        </div>
        {error && (
          <p className="mt-1.5 text-xs font-medium text-error flex items-center gap-1">
            <span>•</span> {error}
          </p>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };

