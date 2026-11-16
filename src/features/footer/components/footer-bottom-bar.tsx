"use client";

import * as React from "react";
import Link from "next/link";
import { useLeadProfile } from "@/features/lead-profile/context/lead-profile-context";

export function FooterBottomBar() {
  const currentYear = new Date().getFullYear();
  const { isDoctor, doctorLastName, clinicName } = useLeadProfile();

  const brandName = isDoctor ? `Dr. ${doctorLastName} Aesthetic Dentistry` : clinicName;

  return (
    <div className="pt-8 border-t border-surface-container/60 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-xs text-on-surface-variant">
      <div className="flex flex-col gap-1 text-center md:text-left">
        <p>
          &copy; {currentYear} {brandName}. All rights reserved. Private Cosmetic Dentistry.
        </p>
        <p className="text-outline text-[11px]">
          Accessibility Protocol: We comply with UK Equality Act and WCAG 2.1 AA standards. Dedicated wheelchair access &amp; reserved clinic parking available.
        </p>
      </div>

      <div className="flex items-center gap-4 text-xs shrink-0">
        <Link href="#privacy-policy" className="hover:text-primary transition-colors">
          GDPR &amp; Privacy Notice
        </Link>
        <span className="text-outline-variant/60">•</span>
        <Link href="#terms-of-care" className="hover:text-primary transition-colors">
          Terms of Care
        </Link>
        <span className="text-outline-variant/60">•</span>
        <Link href="#sitemap" className="hover:text-primary transition-colors">
          Sitemap
        </Link>
      </div>
    </div>
  );
}

