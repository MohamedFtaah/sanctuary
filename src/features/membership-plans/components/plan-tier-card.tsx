"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MembershipTier } from "../types/membership.types";
import { Button } from "@/components/ui/button";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { cn } from "@/lib/utils";

export function PlanTierCard({ plan }: { plan: MembershipTier }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className={cn(
        "relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-colors",
        plan.isPopular
          ? "border-2 border-secondary bg-surface-container-lowest shadow-2xl ring-4 ring-secondary/15"
          : "border border-surface-container/70 bg-surface-container-lowest shadow-card hover:shadow-card-hover"
      )}
    >
      {plan.isPopular && (
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-secondary text-on-secondary text-xs font-bold tracking-wide uppercase shadow-md flex items-center gap-1.5"
        >
          <AnimatedIcon name="sparkle" animation="sparkle" size={13} />
          <span>Most Popular Plan</span>
        </motion.div>
      )}

      <div>
        <div className="mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            {plan.ageScope}
          </span>
          <h3 className="font-headline-sm text-xl font-bold text-primary mt-1">
            {plan.name}
          </h3>
          <p className="font-body-sm text-xs text-on-surface-variant mt-1.5 leading-relaxed">
            {plan.description}
          </p>
        </div>

        <div className="my-6 pb-6 border-b border-surface-container flex items-baseline gap-1.5">
          <span className="font-display-hero text-4xl font-extrabold text-primary">
            {plan.priceAnnual}
          </span>
          <span className="text-xs font-medium text-on-surface-variant">
            {plan.period}
          </span>
        </div>

        <ul className="flex flex-col gap-3">
          {plan.benefits.map((benefit, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-on-surface-variant"
            >
              <div className="h-4 w-4 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5 text-secondary">
                <AnimatedIcon name="check" animation="check" size={11} />
              </div>
              <span className="leading-snug">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-4 border-t border-surface-container/60">
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Button
            asChild
            variant={plan.isPopular ? "shimmer" : "outline"}
            className="w-full justify-center"
          >
            <Link href="#appointment-triage">{plan.ctaText}</Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
