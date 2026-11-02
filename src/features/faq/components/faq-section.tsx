"use client";

import * as React from "react";
import { HelpCircle } from "lucide-react";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { AccordionItem } from "@/components/ui/accordion";
import { useFaq } from "../hooks/use-faq";
import { FAQ_DATA } from "../constants/faq-data";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function FaqSection() {
  const containerRef = useScrollReveal();
  const { isOpen, toggle } = useFaq("faq-membership");

  return (
    <section className="w-full py-20 bg-surface-bright border-b border-surface-container/60">
      <Container>
        <div ref={containerRef}>
          <SectionHeader
            badge="Frequently Asked Questions"
            badgeIcon={<HelpCircle className="h-3.5 w-3.5" />}
            title="Clear, Transparent Answers for Our Patients"
            description="Have questions about our in-house plans, appointments, or emergency care? Find quick answers below."
            badgeVariant="cyan"
          />

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {FAQ_DATA.map((faq) => (
              <AccordionItem
                key={faq.id}
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={isOpen(faq.id)}
                onToggle={toggle}
                className="reveal-item"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

