"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_DATA } from "../constants/hero-data";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { CountUp } from "@/components/ui/count-up";

export function HeroStatsCard() {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
      {/* Dynamic 3D Floating Operatory Image */}
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative rounded-3xl overflow-hidden border border-surface-container-high/80 bg-surface-container-lowest shadow-2xl group"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src="/images/hero-clinic.jpg"
            alt="Scinico Family Dental bright serene treatment room with panoramic garden view, ergonomic chair, and 3D digital imaging screen"
            fill
            sizes="(max-width: 1024px) 100vw, 550px"
            className="object-cover transition-transform duration-700 group-hover:scale-108"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
        </div>

        {/* Floating Stat Pod 1: Heartbeat Comfort Pod */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.08 }}
          className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-surface-container-lowest/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-secondary/25 flex items-center gap-3 cursor-default"
        >
          <div className="h-10 w-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary">
            <AnimatedIcon name="heart" animation="heart" size={20} />
          </div>
          <div>
            <p className="text-xs font-extrabold text-primary flex items-center gap-0.5">
              <CountUp value={99.4} decimals={1} suffix="%" />
              <span> Patient Comfort</span>
            </p>
            <p className="text-[11px] text-on-surface-variant font-medium">
              Zero Pressure Practice
            </p>
          </div>
        </motion.div>

        {/* Floating Stat Pod 2: Navy Veteran & Shield Pod */}
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          whileHover={{ scale: 1.08 }}
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-surface-container-lowest/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-secondary/25 flex items-center gap-3 cursor-default"
        >
          <div className="h-10 w-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center">
            <AnimatedIcon
              name="shieldCheck"
              animation="shield"
              size={20}
              iconClassName="text-secondary-fixed"
            />
          </div>
          <div>
            <p className="text-xs font-bold text-primary">
              {HERO_DATA.statsCards.veteranBadge}
            </p>
            <p className="text-[11px] text-secondary font-semibold flex items-center gap-1">
              <AnimatedIcon name="sparkle" animation="sparkle" size={12} />
              <span>Dedicated Operatory</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
