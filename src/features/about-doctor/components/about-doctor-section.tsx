"use client";

import * as React from "react";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { DoctorPortrait } from "./doctor-portrait";
import { DoctorBio } from "./doctor-bio";
import { DoctorCredentials } from "./doctor-credentials";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useLeadProfile } from "@/features/lead-profile/context/lead-profile-context";

export function AboutDoctorSection() {
  const containerRef = useScrollReveal();
  const { isDoctor, doctorLastName, name, clinicName } = useLeadProfile();

  const formattedDoctorName = (name || doctorLastName || "").trim();
  const cleanTitleName = formattedDoctorName.startsWith("Dr.")
    ? formattedDoctorName
    : `Dr. ${formattedDoctorName}`;

  const sectionTitle = isDoctor
    ? `About ${cleanTitleName}`
    : `Clinical Excellence at ${clinicName}`;

  const badgeText = isDoctor ? "Specialist Leadership" : "Practice Excellence";

  return (
    <section
      id="about-doctor"
      className="w-full py-20 bg-surface-bright border-b border-surface-container/60 scroll-mt-20"
    >

      <Container>
        <div ref={containerRef}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 reveal-item">
              <DoctorPortrait />
            </div>

            <div className="lg:col-span-7 reveal-item flex flex-col">
              <SectionHeader
                badge={badgeText}
                title={sectionTitle}
                align="left"
                className="mb-6"
                badgeVariant="navy"
              />

              <DoctorBio />
              <DoctorCredentials />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

