"use client";

import * as React from "react";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { DoctorPortrait } from "./doctor-portrait";
import { DoctorBio } from "./doctor-bio";
import { DoctorCredentials } from "./doctor-credentials";
import { DOCTOR_DATA } from "../constants/doctor-data";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function AboutDoctorSection() {
  const containerRef = useScrollReveal();

  return (
    <section
      id="about-dr-scinico"
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
                badge="Physician Leadership"
                title={DOCTOR_DATA.name}
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

