"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useLeadProfile } from "@/features/lead-profile/context/lead-profile-context";
import { AnimatedIcon } from "@/components/ui/animated-icon";

export function HeroBadges() {
  const { isDoctor, city } = useLeadProfile();

  const badges = isDoctor
    ? [
        {
          text: "Aesthetic & Cosmetic Specialist",
          icon: "crown",
          anim: "crown" as const,
          variant: "specialist",
        },
        {
          text: `${city}, UK`,
          icon: "pin",
          anim: "pin" as const,
          variant: "location",
        },
        {
          text: "Sub-Second Mobile Portfolio",
          icon: "sparkle",
          anim: "sparkle" as const,
          variant: "speed",
        },
      ]
    : [
        {
          text: "Premier Private Practice",
          icon: "award",
          anim: "crown" as const,
          variant: "specialist",
        },
        {
          text: `${city}, UK`,
          icon: "pin",
          anim: "pin" as const,
          variant: "location",
        },
        {
          text: "0.8s Sub-Second Experience",
          icon: "sparkle",
          anim: "sparkle" as const,
          variant: "speed",
        },
      ];

  return (
    <div className="flex flex-wrap items-center gap-2.5 mb-6">
      {/* Badge 1 */}
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-primary text-xs font-semibold shadow-sm border border-secondary/25"
      >
        <AnimatedIcon
          name={badges[0].icon}
          animation={badges[0].anim}
          size={15}
          iconClassName="text-secondary"
        />
        <span>{badges[0].text}</span>
      </motion.div>

      {/* Badge 2: City */}
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container text-primary text-xs font-semibold border border-surface-container-high"
      >
        <AnimatedIcon
          name="pin"
          animation="pin"
          size={15}
          iconClassName="text-secondary"
        />
        <span>{badges[1].text}</span>
      </motion.div>

      {/* Badge 3: Speed / High-Performance */}
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container text-on-primary text-xs font-semibold"
      >
        <AnimatedIcon
          name="shieldCheck"
          animation="shield"
          size={15}
          iconClassName="text-secondary-fixed"
        />
        <span>{badges[2].text}</span>
      </motion.div>
    </div>
  );
}
