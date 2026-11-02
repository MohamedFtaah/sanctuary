"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { AdvantageItem } from "../types/advantage.types";
import { Badge } from "@/components/ui/badge";
import { AnimatedIcon, AnimationType } from "@/components/ui/animated-icon";

const animationMap: Record<string, { icon: string; anim: AnimationType }> = {
  "zero-quotas": { icon: "shield", anim: "shield" },
  continuity: { icon: "check", anim: "check" },
  "judgment-free": { icon: "heart", anim: "heart" },
  "conservative-philosophy": { icon: "sparkle", anim: "sparkle" },
};

export function AdvantageCard({ item }: { item: AdvantageItem }) {
  const conf = animationMap[item.id] || { icon: "sparkle", anim: "sparkle" };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className="flex flex-col justify-between rounded-2xl border border-surface-container/70 bg-surface-container-lowest p-6 md:p-8 shadow-card hover:shadow-card-hover hover:border-secondary/40 transition-colors group cursor-default"
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="h-12 w-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-secondary/15 group-hover:text-secondary transition-colors duration-300">
            <AnimatedIcon
              name={conf.icon}
              animation={conf.anim}
              size={22}
              iconClassName="text-primary group-hover:text-secondary transition-colors"
            />
          </div>
          <Badge variant="cyan" className="text-[11px] font-semibold">
            {item.pillTag}
          </Badge>
        </div>

        <h3 className="font-headline-sm text-lg md:text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
          {item.title}
        </h3>

        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-surface-container/40 flex items-center gap-2 text-xs font-semibold text-secondary">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
        </span>
        <span>Scinico Clinical Standard</span>
      </div>
    </motion.div>
  );
}
