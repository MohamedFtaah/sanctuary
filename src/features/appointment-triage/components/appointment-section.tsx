"use client";

import * as React from "react";
import { Container } from "@/components/common/container";
import { TriageInfoSidebar } from "./triage-info-sidebar";
import { TriageForm } from "./triage-form";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function AppointmentSection() {
  const containerRef = useScrollReveal();

  return (
    <section
      id="appointment-triage"
      className="w-full py-20 bg-surface border-b border-surface-container/60 scroll-mt-20"
    >
      <Container>
        <div ref={containerRef}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 reveal-item">
              <TriageInfoSidebar />
            </div>

            <div className="lg:col-span-7 reveal-item">
              <TriageForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

