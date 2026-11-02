"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { DOCTOR_DATA } from "../constants/doctor-data";
import { AnimatedIcon, AnimationType } from "@/components/ui/animated-icon";

const credAnimationMap: Record<string, { icon: string; anim: AnimationType }> = {
  education: { icon: "check", anim: "check" },
  specialty: { icon: "scan", anim: "scan" },
  military: { icon: "shield", anim: "shield" },
  award: { icon: "star", anim: "star" },
};

export function DoctorCredentials() {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {DOCTOR_DATA.credentials.map((cred, idx) => {
        const conf = credAnimationMap[cred.type] || { icon: "star", anim: "star" };

        return (
          <motion.div
            key={idx}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="flex items-start gap-3 p-4 rounded-xl bg-surface-container-lowest border border-surface-container/70 shadow-sm hover:border-secondary/40 transition-colors group cursor-default"
          >
            <div className="h-9 w-9 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0 group-hover:bg-secondary/15 transition-colors">
              <AnimatedIcon
                name={conf.icon}
                animation={conf.anim}
                size={18}
                iconClassName="text-secondary"
              />
            </div>
            <div>
              <p className="font-headline-sm text-sm font-bold text-primary group-hover:text-secondary transition-colors">
                {cred.title}
              </p>
              <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                {cred.institution}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
