"use client";

import * as React from "react";
import { Quote } from "lucide-react";
import { useLeadProfile } from "@/features/lead-profile/context/lead-profile-context";

export function DoctorBio() {
  const { isDoctor, doctorLastName, name, clinicName, city, targetService } = useLeadProfile();

  const quote = isDoctor
    ? `My clinical focus is straightforward: listening to your aesthetic aspirations, crafting refined ${targetService} with minimally invasive precision, and providing direct, transparent access to private care here in ${city}.`
    : `At ${clinicName}, we believe private dentistry should be sub-second, transparent, and clinically transformative. Every smile is crafted with multidisciplinary precision in ${city}.`;

  const bioParagraphs = isDoctor
    ? [
        `Dr. ${name || doctorLastName} is dedicated to delivering bespoke cosmetic smile transformations, pairing clinical artistry with conservative enamel preservation.`,
        `With an esteemed peer reputation across ${city}, Dr. ${doctorLastName} specialises in ${targetService}, sculpting natural, radiant aesthetics tailored to each patient's unique facial harmony.`,
        `By offering direct private calendar booking, patients bypass reception bureaucracy and phone tag, enjoying immediate consultation confirmation and a tranquil, discreet clinical experience.`,
      ]
    : [
        `${clinicName} represents a new standard of private cosmetic dentistry in ${city}, uniting leading clinical specialists under one refined roof.`,
        `Our state-of-the-art clinical suites are engineered for high-ticket smile makeovers, including advanced ${targetService}, 3D digital imaging, and painless minimally invasive techniques.`,
        `Designed to eliminate patient drop-off and friction, our digital consultation flow enables discerning patients across ${city} to secure confirmed consultations within seconds.`,
      ];

  return (
    <div className="flex flex-col">
      <div className="relative p-5 md:p-6 rounded-2xl bg-surface-container/60 border border-surface-container-high/60 mb-6">
        <Quote className="h-8 w-8 text-secondary/30 mb-2" />
        <p className="font-headline-sm text-base md:text-lg italic text-primary leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      <div className="flex flex-col gap-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
        {bioParagraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  );
}

