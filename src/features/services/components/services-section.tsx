"use client";

import * as React from "react";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { ServiceCard } from "./service-card";
import { TechnologySpotlight } from "./technology-spotlight";
import { SERVICES_DATA } from "../constants/services-data";
import { DentalService } from "../types/service.types";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useLeadProfile } from "@/features/lead-profile/context/lead-profile-context";

export function ServicesSection() {
  const containerRef = useScrollReveal();
  const { isDoctor, doctorLastName, clinicName, city, targetService } = useLeadProfile();

  const flagshipService: DentalService = React.useMemo(() => {
    return {
      id: "flagship-target-service",
      title: targetService,
      categoryTag: isDoctor ? `Primary Focus in ${city}` : `Premier Focus in ${city}`,
      description: isDoctor
        ? `Bespoke smile design and minimally invasive clinical artistry personally sculpted by Dr. ${doctorLastName} in ${city} for natural, transformative aesthetics.`
        : `Comprehensive, state-of-the-art smile transformations delivered by specialist clinicians at ${clinicName} in ${city} using cutting-edge digital dentistry.`,
      features: [
        "Bespoke Digital Smile Simulation & 3D Preview",
        "Minimally Invasive Enamel-First Protocol",
        isDoctor
          ? `Direct Consultation with Dr. ${doctorLastName}`
          : `Priority Private Consultation at ${clinicName}`,
      ],
      icon: "Sparkles",
      isPopular: true,
    };
  }, [isDoctor, doctorLastName, clinicName, city, targetService]);

  const displayedServices = React.useMemo(() => {
    // Pin targetService as first card, then take base services
    const filteredBase = SERVICES_DATA.filter((s) => s.id !== "cosmetics");
    return [flagshipService, ...filteredBase];
  }, [flagshipService]);

  const sectionTitle = isDoctor
    ? `Specialised Clinical Focus & Smile Design`
    : `Comprehensive Private Services at ${clinicName}`;

  const sectionDescription = isDoctor
    ? `From refined ${targetService} to restorative smile architecture, each treatment is personally delivered by Dr. ${doctorLastName} in ${city}.`
    : `Combining decades of restorative surgical skill with advanced 3D volumetric diagnostics for precision, tranquility, and lasting health in ${city}.`;

  return (
    <section
      id="services"
      className="w-full py-20 bg-surface border-b border-surface-container/60 scroll-mt-20 relative"
    >
      {/* Anchor alias for backwards compatibility */}
      <div id="comprehensive-services" className="-top-24 relative" />

      <Container>
        <div ref={containerRef}>
          <SectionHeader
            badge="In-House Clinical Scope"
            title={sectionTitle}
            description={sectionDescription}
            badgeVariant="secondary"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedServices.map((service) => (
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

