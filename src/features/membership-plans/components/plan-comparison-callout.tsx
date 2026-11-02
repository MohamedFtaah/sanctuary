import * as React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export function PlanComparisonCallout() {
  return (
    <div className="mt-14 rounded-3xl bg-surface-container/60 border border-surface-container-high/70 p-6 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h4 className="font-headline-sm text-lg sm:text-xl font-bold text-primary mb-2">
            Why Choose Direct Dental Membership Over Insurance?
          </h4>
          <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
            Traditional dental insurance often carries annual maximums of $1,000 to $1,500—an allowance unchanged since 1970. Our in-house plan provides 100% covered preventative care with predictable pricing and immediate eligibility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-surface-container/80 flex flex-col gap-2">
            <span className="font-bold text-primary flex items-center gap-1.5 text-secondary">
              <CheckCircle2 className="h-4 w-4 shrink-0" /> Scinico Membership
            </span>
            <ul className="text-on-surface-variant flex flex-col gap-1.5 text-[11px]">
              <li>• Immediate benefits (no waiting)</li>
              <li>• Unlimited preventative visits</li>
              <li>• Flat 15% discount on all procedures</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-surface-container-lowest border border-surface-container/80 flex flex-col gap-2">
            <span className="font-bold text-outline flex items-center gap-1.5">
              <XCircle className="h-4 w-4 text-error shrink-0" /> Commercial Insurance
            </span>
            <ul className="text-on-surface-variant flex flex-col gap-1.5 text-[11px]">
              <li>• Strict waiting periods (6–12 mo)</li>
              <li>• Restrictive pre-authorizations</li>
              <li>• Low annual dollar caps</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

