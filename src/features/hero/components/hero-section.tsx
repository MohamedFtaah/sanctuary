"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/common/container";
import { HeroBadges } from "./hero-badges";
import { HeroCtaGroup } from "./hero-cta-group";
import { HeroStatsCard } from "./hero-stats-card";
import { AmbientMesh } from "@/components/ui/ambient-mesh";
import { HERO_DATA } from "../constants/hero-data";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-bright pt-32 pb-16 lg:pt-36 lg:pb-24 border-b border-surface-container/60">
      <AmbientMesh />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <HeroBadges />

            <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-primary tracking-tight leading-[1.12]">
              {HERO_DATA.tagline}
            </h1>

            <p className="mt-5 font-body-lg text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-2xl">
              {HERO_DATA.description}
            </p>

            <HeroCtaGroup />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <HeroStatsCard />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
