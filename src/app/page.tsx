import { HeroSection } from "@/features/hero/components/hero-section";
import { PracticeAdvantageSection } from "@/features/practice-advantage/components/advantage-section";
import { AboutDoctorSection } from "@/features/about-doctor/components/about-doctor-section";
import { ServicesSection } from "@/features/services/components/services-section";
import { MembershipSection } from "@/features/membership-plans/components/membership-section";
import { AppointmentSection } from "@/features/appointment-triage/components/appointment-section";
import { TestimonialsSection } from "@/features/testimonials/components/testimonials-section";
import { LocationSection } from "@/features/location-and-hours/components/location-section";
import { FaqSection } from "@/features/faq/components/faq-section";

export default function HomePage() {
  return (
    <main id="main-content" className="flex-1 flex flex-col w-full">
      <HeroSection />
      <PracticeAdvantageSection />
      <AboutDoctorSection />
      <ServicesSection />
      <MembershipSection />
      <AppointmentSection />
      <TestimonialsSection />
      <LocationSection />
      <FaqSection />
    </main>
  );
}

