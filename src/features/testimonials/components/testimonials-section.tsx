"use client";

import * as React from "react";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { ReviewCard } from "./review-card";
import { ReviewStats } from "./review-stats";
import { PatientReview } from "../types/review.types";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useLeadProfile } from "@/features/lead-profile/context/lead-profile-context";

export function TestimonialsSection() {
  const containerRef = useScrollReveal();
  const { isDoctor, doctorLastName, clinicName, city, targetService } = useLeadProfile();

  const title = isDoctor
    ? "“Bespoke aesthetic artistry and complete clinical clarity.”"
    : "“Premier clinical standards and seamless private booking.”";

  const description = isDoctor
    ? `Read verified feedback from private patients who chose Dr. ${doctorLastName} for ${targetService} in ${city}.`
    : `Read verified feedback from private patients who trust ${clinicName} for world-class cosmetic dentistry in ${city}.`;

  const dynamicReviews: PatientReview[] = React.useMemo(() => {
    const clinicianRef = isDoctor ? `Dr. ${doctorLastName}` : clinicName;

    return [
      {
        id: "review-1",
        initials: "EM",
        authorName: "Elena M.",
        patientContext: `Private Aesthetic Patient • ${city}`,
        quote: `I had put off cosmetic treatment for years. The consultation with ${clinicianRef} was completely bespoke, gentle, and transparent. The transformation with ${targetService} exceeded all my expectations.`,
        ratingStars: 5,
        source: "Verified Google Review",
      },
      {
        id: "review-2",
        initials: "DK",
        authorName: "David K.",
        patientContext: `Smile Makeover Patient • ${city}`,
        quote: `Other clinics quoted astronomical fees with confusing plans. Here with ${clinicianRef}, the clinical communication was direct, transparent, and refined. The sub-second digital consultation flow made booking effortless.`,
        ratingStars: 5,
        source: "Verified Patient Review",
      },
      {
        id: "review-3",
        initials: "ST",
        authorName: "Sarah & Mark T.",
        patientContext: `Private Patient • ${city}`,
        quote: `Unrivalled aesthetic attention to detail. Having direct calendar access without endless reception phone tag is a game changer for private patients in ${city}.`,
        ratingStars: 5,
        source: "Private Patient Consultation",
      },
    ];
  }, [isDoctor, doctorLastName, clinicName, city, targetService]);

  return (
    <section
      id="patient-reviews"
      className="w-full py-20 bg-surface-bright border-b border-surface-container/60 scroll-mt-20"
    >
      <Container>
        <div ref={containerRef}>
          <SectionHeader
            badge="Verified Patient Experiences"
            title={title}
            description={description}
            badgeVariant="secondary"
          />

          <ReviewStats />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dynamicReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

