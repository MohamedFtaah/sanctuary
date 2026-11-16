"use client";

import * as React from "react";
import { Navigation, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLeadProfile } from "@/features/lead-profile/context/lead-profile-context";

export function MapEmbedCard() {
  const { city, isDoctor, doctorLastName, clinicName } = useLeadProfile();

  const query = encodeURIComponent(
    isDoctor
      ? `Dr ${doctorLastName} Aesthetic Dentistry ${city} UK`
      : `${clinicName} ${city} UK`
  );

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(city + "%2C%20UK")}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="flex flex-col rounded-2xl border border-surface-container/70 bg-surface-container-lowest overflow-hidden shadow-sm">
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-surface-container">
        {/* Interactive Google Maps Embed iframe with lazy loading */}
        <iframe
          title={`${isDoctor ? `Dr. ${doctorLastName}` : clinicName} Location Map`}
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
        />
      </div>

      <div className="p-5 flex flex-wrap items-center justify-between gap-3 bg-surface-container/40 border-t border-surface-container">
        <div>
          <span className="text-xs font-bold text-primary block">
            Central {city} Location
          </span>
          <span className="text-[11px] text-on-surface-variant block">
            Prime private healthcare suites with accessible transport connections
          </span>
        </div>

        <Button asChild variant="outline" size="sm">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5"
          >
            <Navigation className="h-3.5 w-3.5 text-secondary" />
            <span>Open in Maps</span>
            <ExternalLink className="h-3 w-3 opacity-60" />
          </a>
        </Button>
      </div>
    </div>
  );
}

