"use client";

import * as React from "react";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { AdvantageCard } from "./advantage-card";
import { ADVANTAGES_DATA } from "../constants/advantage-data";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function PracticeAdvantageSection() {
  const containerRef = useScrollReveal();

  return (
    <section className="w-full py-20 bg-surface border-b border-surface-container/60">
      <Container>
        <div ref={containerRef}>
          <SectionHeader
            badge="The Schenk-Atwood Standard"
            title="The Non-Corporate Dental Advantage"
            description="Private, independent oral healthcare designed around conservative treatment, clinical ethics, and personal accountability."
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

