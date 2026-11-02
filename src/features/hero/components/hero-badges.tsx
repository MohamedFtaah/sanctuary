"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { HERO_DATA } from "../constants/hero-data";
import { AnimatedIcon } from "@/components/ui/animated-icon";

export function HeroBadges() {
  return (
    <div className="flex flex-wrap items-center gap-2.5 mb-6">
      {/* 4.9/5 Rating Badge with Twinkling Star */}
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-primary text-xs font-semibold shadow-sm border border-secondary/20"
      >
        <AnimatedIcon
          name="star"
          animation="star"
          size={15}
          iconClassName="fill-secondary text-secondary"
        />
        <span>{HERO_DATA.badges[0].text}</span>
        <span className="text-on-surface-variant font-normal">
          {HERO_DATA.badges[0].subtext}
        </span>
      </motion.div>

      {/* Top Dentist Badge with Shining Award */}
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container text-primary text-xs font-semibold border border-surface-container-high"
      >
        <AnimatedIcon
          name="award"
          animation="crown"
          size={15}
          iconClassName="text-secondary"
        />
        <span>{HERO_DATA.badges[1].text}</span>
      </motion.div>

      {/* 50-Year Heritage Badge with Protective Shield */}
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
        <span>{HERO_DATA.badges[2].text}</span>
      </motion.div>
    </div>
  );
}
