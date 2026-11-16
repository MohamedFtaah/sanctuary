"use client";

import * as React from "react";
import { AlertCircle, Calendar, MapPin, Mail, ArrowUpRight } from "lucide-react";
import { useLeadProfile } from "@/features/lead-profile/context/lead-profile-context";

export function FooterEmergencyBox() {
  const { isDoctor, doctorLastName, clinicName, city, calendlyUrl } = useLeadProfile();

  const title = isDoctor
    ? `Dr. ${doctorLastName} Private Suite`
    : clinicName;

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-label-interactive text-label-interactive uppercase text-primary tracking-wider font-bold">
        {title}
      </h3>

      <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
        <p className="flex items-start gap-2">
          <MapPin className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
          <span>Private Consultation Suites, {city}, UK</span>
        </p>
        <p className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-secondary shrink-0" />
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary font-semibold text-secondary inline-flex items-center gap-1"
          >
            <span>Book Consultation via Direct Calendar</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </p>
        <p className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-secondary shrink-0" />
          <span>consultations@sanctuarydental.co.uk</span>
        </p>
      </div>

      <div className="mt-2 rounded-2xl bg-surface-container/80 p-4 border border-surface-container-high/80">
        <span className="font-label-credential text-xs font-bold text-secondary flex items-center gap-1.5 mb-1">
          <AlertCircle className="h-4 w-4" />
          <span>Direct Clinical Access</span>
        </span>
        <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
          Sub-second direct private calendar access ensures instant consultation confirmation with zero reception delays.
        </p>
      </div>
    </div>
  );
}

