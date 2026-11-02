import * as React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  requiredIndicator?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, requiredIndicator, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "font-label-interactive text-label-interactive text-primary block select-none",
        className
      )}
      {...props}
    >
      {children}
      {requiredIndicator && <span className="text-error ml-1">*</span>}
    </label>
  )
);
Label.displayName = "Label";

export { Label };

