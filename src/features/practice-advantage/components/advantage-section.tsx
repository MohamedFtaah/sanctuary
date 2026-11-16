"use client";

import * as React from "react";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { AdvantageCard } from "./advantage-card";
import { ADVANTAGES_DATA } from "../constants/advantage-data";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useLeadProfile } from "@/features/lead-profile/context/lead-profile-context";

export function PracticeAdvantageSection() {
  const containerRef = useScrollReveal();
  const { isDoctor, doctorLastName, clinicName, city } = useLeadProfile();

  const title = isDoctor
    ? `The Private Clinical Advantage with Dr. ${doctorLastName}`
    : `The Private Practice Advantage at ${clinicName}`;

  const description = isDoctor
    ? `Independent, bespoke cosmetic oral healthcare in ${city} designed around conservative treatment, aesthetic precision, and direct specialist accountability.`
    : `Premier private healthcare in ${city} engineered around clinical ethics, sub-second patient experience, and transformative smile architecture.`;

  return (
    <section className="w-full py-20 bg-surface border-b border-surface-container/60">
      <Container>
        <div ref={containerRef}>
          <SectionHeader
            badge="The UK Private Dental Standard"
            title={title}
            description={description}
            badgeVariant="secondary"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES_DATA.map((advantage) => (
              <AdvantageCard key={advantage.id} item={advantage} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

