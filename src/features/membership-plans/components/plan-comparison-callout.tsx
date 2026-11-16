"use client";

import * as React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { useLeadProfile } from "@/features/lead-profile/context/lead-profile-context";

export function PlanComparisonCallout() {
  const { isDoctor, doctorLastName, clinicName } = useLeadProfile();

  const planName = isDoctor
    ? `Dr. ${doctorLastName} Private Plan`
    : `${clinicName} Plan`;

  return (
    <div className="mt-14 rounded-3xl bg-surface-container/60 border border-surface-container-high/70 p-6 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h4 className="font-headline-sm text-lg sm:text-xl font-bold text-primary mb-2">
            Why Choose Direct Private Care Over Bureaucratic Insurance?
          </h4>
          <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
            Traditional corporate dental insurance often entails months of pre-approvals and restrictive caps. Our direct private plan provides comprehensive preventive care, transparent investment schedules, and immediate clinic eligibility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-surface-container/80 flex flex-col gap-2">
            <span className="font-bold text-primary flex items-center gap-1.5 text-secondary">
              <CheckCircle2 className="h-4 w-4 shrink-0" /> {planName}
            </span>
            <ul className="text-on-surface-variant flex flex-col gap-1.5 text-[11px]">
              <li>• Immediate private benefits (no waiting)</li>
              <li>• Comprehensive preventive visits</li>
              <li>• Flat 15% reduction on cosmetic treatments</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-surface-container-lowest border border-surface-container/80 flex flex-col gap-2">
            <span className="font-bold text-outline flex items-center gap-1.5">
              <XCircle className="h-4 w-4 text-error shrink-0" /> Standard Insurance Policies
            </span>
            <ul className="text-on-surface-variant flex flex-col gap-1.5 text-[11px]">
              <li>• Strict waiting periods (6–12 months)</li>
              <li>• Restrictive claims approvals</li>
              <li>• Arbitrary treatment exclusions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

