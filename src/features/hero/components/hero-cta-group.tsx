"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_DATA } from "../constants/hero-data";
import { AnimatedIcon } from "@/components/ui/animated-icon";

export function HeroCtaGroup() {
  return (
    <div className="flex flex-col gap-5 mt-8">
      <div className="flex flex-wrap items-center gap-4">
        {/* Request Appointment Button with Spring Press */}
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
          <Button asChild size="lg" variant="shimmer" className="text-base font-semibold">
            <Link href="#appointment-triage" className="flex items-center gap-2">
              <AnimatedIcon name="calendar" animation="check" size={18} />
              <span>Request an Appointment</span>
            </Link>
          </Button>
        </motion.div>

        {/* Explore In-House Membership Button */}
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
          <Button asChild size="lg" variant="outline" className="text-base font-semibold">
            <Link href="#membership-plans" className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-secondary" />
              <span>Explore In-House Membership</span>
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Early-Bird Notice with Ticking Clock */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container/70 border border-surface-container-high/60 max-w-xl transition-shadow hover:shadow-sm"
      >
        <AnimatedIcon
          name="clock"
          animation="clock"
          size={18}
          iconClassName="text-secondary mt-0.5"
        />
        <p className="text-xs text-on-surface-variant font-body-sm leading-relaxed">
          {HERO_DATA.earlyBirdNotice}
        </p>
      </motion.div>
    </div>
  );
}
