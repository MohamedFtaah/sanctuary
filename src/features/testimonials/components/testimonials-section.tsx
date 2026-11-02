"use client";

import * as React from "react";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { ReviewCard } from "./review-card";
import { ReviewStats } from "./review-stats";
import { TESTIMONIALS_DATA } from "../constants/reviews-data";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function TestimonialsSection() {
  const containerRef = useScrollReveal();

  return (
    <section
      id="patient-reviews"
      className="w-full py-20 bg-surface-bright border-b border-surface-container/60 scroll-mt-20"
    >
      <Container>
        <div ref={containerRef}>
          <SectionHeader
            badge="Verified Patient Experiences"
            title="&ldquo;The most honest, gentle dentist in Madison.&rdquo;"
            description="Read verified feedback from our Schenk-Atwood and Near-East neighbors who trust Dr. Scinico with their family's oral health."
            badgeVariant="secondary"
          />

          <ReviewStats />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

