import * as React from "react";
import Link from "next/link";

export function FooterBottomBar() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-8 border-t border-surface-container/60 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-xs text-on-surface-variant">
      <div className="flex flex-col gap-1 text-center md:text-left">
        <p>
          &copy; {currentYear} Scinico Family Dental. All rights reserved. 50 Years of East Side Heritage.
        </p>
        <p className="text-outline text-[11px]">
          Accessibility Protocol: We comply with ADA Title III and WCAG 2.1 AA standards. Dedicated wheelchair access &amp; reserved clinic parking available.
        </p>
      </div>

      <div className="flex items-center gap-4 text-xs shrink-0">
        <Link href="#privacy-policy" className="hover:text-primary transition-colors">
          HIPAA &amp; Privacy Policy
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

