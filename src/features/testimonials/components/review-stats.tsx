import * as React from "react";
import { Star } from "lucide-react";

export function ReviewStats() {
  return (
    <div className="reveal-item flex flex-wrap items-center justify-center gap-4 mb-12">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container text-primary text-sm font-semibold border border-surface-container-high shadow-sm">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-secondary text-secondary"
            />
          ))}
        </div>
        <span>4.9 / 5.0 Average</span>
        <span className="text-on-surface-variant font-normal">
          (Google, DenScore &amp; Reddit)
        </span>
      </div>
    </div>
  );
}

