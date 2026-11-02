"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { PlanTierCard } from "./plan-tier-card";
import { PlanComparisonCallout } from "./plan-comparison-callout";
import { MEMBERSHIP_TIERS, MEMBERSHIP_PERKS } from "../constants/membership-data";
import { AnimatedIcon } from "@/components/ui/animated-icon";

export function MembershipSection() {
  return (
    <section
      id="membership-plans"
      className="w-full py-20 bg-surface-bright border-b border-surface-container/60 scroll-mt-20"
    >
      <Container>
        <SectionHeader
          badge="Direct-to-Patient Membership"
          title="No Dental Insurance? No Problem."
          description="Receive comprehensive preventative care and discounts on all restorative services. Zero insurance middlemen, no waiting periods, no deductibles, and no maximum annual caps."
          badgeVariant="cyan"
        />

        {/* Animated Perks Pill Row */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 mb-14">
          {MEMBERSHIP_PERKS.map((perk, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.06, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container text-primary text-xs font-semibold border border-surface-container-high shadow-sm cursor-default"
            >
              <AnimatedIcon
                name="check"
                animation="check"
                size={13}
                iconClassName="text-secondary stroke-[3]"
              />
              <span>{perk}</span>
            </motion.span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_TIERS.map((plan) => (
            <PlanTierCard key={plan.id} plan={plan} />
          ))}
        </div>

        <PlanComparisonCallout />
      </Container>
    </section>
  );
}
