import * as React from "react";
import { Logo } from "@/components/common/logo";
import { ShieldCheck, Award } from "lucide-react";

export function FooterBrand() {
  return (
    <div className="lg:col-span-4 flex flex-col gap-4">
      <Logo variant="footer" />
      <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm leading-relaxed">
        50 Years of Near-East Madison Heritage. Independent, physician-led general, restorative, and cosmetic dentistry with zero corporate pressure.
      </p>

      <div className="flex flex-wrap items-center gap-2 mt-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary text-xs font-semibold border border-surface-container-high">
          <Award className="h-3.5 w-3.5 text-secondary" />
          <span>Castle Connolly 2022–2026</span>
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary text-xs font-semibold">
          <ShieldCheck className="h-3.5 w-3.5 text-secondary-fixed" />
          <span>U.S. Navy Veteran</span>
        </span>
      </div>
    </div>
  );
}

