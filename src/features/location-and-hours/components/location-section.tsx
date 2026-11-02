"use client";

import * as React from "react";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { OfficeDetailsCard } from "./office-details-card";
import { HoursScheduleList } from "./hours-schedule-list";
import { MapEmbedCard } from "./map-embed-card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function LocationSection() {
  const containerRef = useScrollReveal();

  return (
    <section
      id="location-and-hours"
      className="w-full py-20 bg-surface border-b border-surface-container/60 scroll-mt-20"
    >
      <Container>
        <div ref={containerRef}>
          <SectionHeader
            badge="Easy Neighborhood Access"
            title="Located in Madison’s Schenk-Atwood Neighborhood"
            description="Conveniently situated on historic Winnebago Street, just minutes from the Capitol Isthmus, East Washington Avenue, and Lake Monona."
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

