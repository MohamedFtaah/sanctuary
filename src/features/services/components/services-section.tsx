"use client";

import * as React from "react";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { ServiceCard } from "./service-card";
import { TechnologySpotlight } from "./technology-spotlight";
import { SERVICES_DATA } from "../constants/services-data";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function ServicesSection() {
  const containerRef = useScrollReveal();

  return (
    <section
      id="comprehensive-services"
      className="w-full py-20 bg-surface border-b border-surface-container/60 scroll-mt-20"
    >
      <Container>
        <div ref={containerRef}>
          <SectionHeader
            badge="In-House Clinical Scope"
            title="Comprehensive Dental Services Under One Roof"
            description="Combining decades of restorative surgical skill with advanced 3D volumetric diagnostics for precision, tranquility, and lasting health."
            badgeVariant="secondary"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="reveal-item">
            <TechnologySpotlight />
          </div>
        </div>
      </Container>
    </section>
  );
}

