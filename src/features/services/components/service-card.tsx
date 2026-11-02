"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DentalService } from "../types/service.types";
import { Badge } from "@/components/ui/badge";
import { AnimatedIcon, AnimationType } from "@/components/ui/animated-icon";

const serviceAnimationMap: Record<string, { icon: string; anim: AnimationType }> = {
  "3d-imaging": { icon: "scan", anim: "scan" },
  implants: { icon: "crown", anim: "crown" },
  endodontics: { icon: "heart", anim: "heart" },
  preventative: { icon: "sparkle", anim: "sparkle" },
  restorations: { icon: "layers", anim: "shield" },
  cosmetics: { icon: "smile", anim: "smile" },
};

export function ServiceCard({ service }: { service: DentalService }) {
  const conf = serviceAnimationMap[service.id] || { icon: "sparkle", anim: "sparkle" };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className="flex flex-col justify-between rounded-2xl border border-surface-container/70 bg-surface-container-lowest p-6 md:p-8 shadow-card hover:shadow-card-hover hover:border-secondary/40 transition-colors group cursor-default"
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="h-12 w-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-on-secondary transition-colors duration-300">
            <AnimatedIcon
              name={conf.icon}
              animation={conf.anim}
              size={22}
              iconClassName="transition-transform"
            />
          </div>
          <Badge variant="cyan" className="text-[11px] font-semibold">
            {service.categoryTag}
          </Badge>
        </div>

        <h3 className="font-headline-sm text-lg md:text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
          {service.title}
        </h3>

        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">
          {service.description}
        </p>

        <ul className="flex flex-col gap-2.5 pt-4 border-t border-surface-container/50">
          {service.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-xs font-medium text-on-surface-variant"
            >
              <AnimatedIcon
                name="check"
                animation="check"
                size={14}
                iconClassName="text-secondary"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-4 border-t border-surface-container/40">
        <Link
          href="#appointment-triage"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-primary transition-colors group-hover:translate-x-1.5 duration-200"
        >
          <span>Schedule Service Consultation</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}
