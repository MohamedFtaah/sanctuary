"use client";

import * as React from "react";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { OfficeDetailsCard } from "./office-details-card";
import { HoursScheduleList } from "./hours-schedule-list";
import { MapEmbedCard } from "./map-embed-card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useLeadProfile } from "@/features/lead-profile/context/lead-profile-context";

export function LocationSection() {
  const containerRef = useScrollReveal();
  const { isDoctor, doctorLastName, clinicName, city } = useLeadProfile();

  const title = isDoctor
    ? `Dr. ${doctorLastName} Private Practice in ${city}`
    : `Centrally Located in ${city} at ${clinicName}`;

  const description = isDoctor
    ? `Discreet, private cosmetic suites in prime ${city} with swift transport connections, level access, and dedicated personal care.`
    : `Modern private healthcare facility in central ${city} offering sub-second booking, on-site 3D diagnostics, and convenient access.`;

  return (
    <section
      id="location-and-hours"
      className="w-full py-20 bg-surface border-b border-surface-container/60 scroll-mt-20"
    >
      <Container>
        <div ref={containerRef}>
          <SectionHeader
            badge="Prime Location & Access"
            title={title}
            description={description}
            badgeVariant="secondary"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 flex flex-col gap-6 reveal-item">
              <OfficeDetailsCard />
              <HoursScheduleList />
            </div>

            <div className="lg:col-span-7 reveal-item">
              <MapEmbedCard />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

