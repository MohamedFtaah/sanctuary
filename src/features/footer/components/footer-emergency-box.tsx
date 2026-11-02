import * as React from "react";
import { AlertCircle, Phone, MapPin, Mail } from "lucide-react";

export function FooterEmergencyBox() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-label-interactive text-label-interactive uppercase text-primary tracking-wider font-bold">
        East Madison Clinic
      </h3>

      <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
        <p className="flex items-start gap-2">
          <MapPin className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
          <span>2037 Winnebago St, Suite 1, Madison, WI 53704</span>
        </p>
        <p className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-secondary shrink-0" />
          <a href="tel:6082496616" className="hover:text-primary font-semibold">
            (608) 249-6616
          </a>
        </p>
        <p className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-secondary shrink-0" />
          <span>care@scinicodental.com</span>
        </p>
      </div>

      <div className="mt-2 rounded-2xl bg-surface-container/80 p-4 border border-surface-container-high/80">
        <span className="font-label-credential text-xs font-bold text-error flex items-center gap-1.5 mb-1">
          <AlertCircle className="h-4 w-4" />
          <span>Emergency Routing</span>
        </span>
        <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
          Active patients experiencing severe pain or trauma: call our direct office number for on-call triage.
        </p>
      </div>
    </div>
  );
}

