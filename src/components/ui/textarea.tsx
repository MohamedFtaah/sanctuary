import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          className={cn(
            "w-full rounded-lg bg-surface px-4 py-3 font-body-md text-body-md text-primary transition-all duration-200 outline-none border border-transparent resize-y min-h-[100px]",
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
Textarea.displayName = "Textarea";

export { Textarea };

