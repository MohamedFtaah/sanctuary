"use client";

import * as React from "react";
import { Logo } from "@/components/common/logo";
import { ShieldCheck, Award } from "lucide-react";
import { useLeadProfile } from "@/features/lead-profile/context/lead-profile-context";

export function FooterBrand() {
  const { isDoctor, doctorLastName, clinicName, city } = useLeadProfile();

  const description = isDoctor
    ? `Personal clinical portfolio for Dr. ${doctorLastName} in ${city}. Delivering refined aesthetic dentistry with direct private consultation booking.`
    : `Premier private dental practice in ${city} engineered for sub-second patient experience, clinical excellence, and bespoke smile design.`;

  return (
    <div className="lg:col-span-4 flex flex-col gap-4">
      <Logo variant="footer" />
      <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap items-center gap-2 mt-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary text-xs font-semibold border border-surface-container-high">
          <Award className="h-3.5 w-3.5 text-secondary" />
          <span>Aesthetic &amp; Cosmetic Specialist</span>
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary text-xs font-semibold">
          <ShieldCheck className="h-3.5 w-3.5 text-secondary-fixed" />
          <span>{city}, United Kingdom</span>
        </span>
      </div>
    </div>
  );
}

