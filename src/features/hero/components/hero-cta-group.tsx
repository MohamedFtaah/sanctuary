"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLeadProfile } from "@/features/lead-profile/context/lead-profile-context";
import { AnimatedIcon } from "@/components/ui/animated-icon";

export function HeroCtaGroup() {
  const { isDoctor, doctorLastName, targetService, calendlyUrl } = useLeadProfile();

  const primaryCtaText = isDoctor
    ? `Book Consultation with Dr. ${doctorLastName}`
    : "Book Private Consultation";

  const secondaryCtaText = isDoctor
    ? `View ${targetService} Cases`
    : `Explore ${targetService} Showcase`;

  const notificationText = isDoctor
    ? `Direct Calendar Sync — select your consultation slot with Dr. ${doctorLastName} with zero reception delay.`
    : `Instant Private Consultation Booking — zero waiting lists, confirmed directly in real-time.`;

  return (
    <div className="flex flex-col gap-5 mt-8 w-full">
      <div className="flex flex-wrap items-center gap-4">
        {/* Primary Consultation Booking CTA */}
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
          <Button asChild size="lg" variant="shimmer" className="text-base font-semibold">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              <span>{primaryCtaText}</span>
            </a>
          </Button>
        </motion.div>

        {/* Secondary Showcase Button */}
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
          <Button asChild size="lg" variant="outline" className="text-base font-semibold">
            <Link href="#services" className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-secondary" />
              <span>{secondaryCtaText}</span>
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Real-time Triage / Notice */}
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
          {notificationText}
        </p>
      </motion.div>
    </div>
  );
}
