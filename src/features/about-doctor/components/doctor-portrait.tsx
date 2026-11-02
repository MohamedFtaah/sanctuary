"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DOCTOR_DATA } from "../constants/doctor-data";
import { AnimatedIcon } from "@/components/ui/animated-icon";

export function DoctorPortrait() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none">
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative rounded-3xl overflow-hidden border border-surface-container-high bg-surface-container-lowest shadow-xl group"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src="/images/dr-scinico.jpg"
            alt="Dr. Richard Scinico DMD, welcoming dentist with over 30 years of clinical practice in modern scrubs"
            fill
            sizes="(max-width: 1024px) 100vw, 480px"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-106"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent" />
        </div>

        <div className="absolute bottom-0 inset-x-0 p-6 text-on-primary">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-on-secondary text-xs font-semibold mb-2 shadow-sm"
          >
            <AnimatedIcon name="crown" animation="crown" size={14} />
            <span>Castle Connolly Top Dentist</span>
          </motion.div>
          <h3 className="font-headline-sm text-xl font-bold text-white">
            Richard N. Scinico, DMD
          </h3>
          <p className="text-xs text-primary-fixed mt-1">
            {DOCTOR_DATA.role} • {DOCTOR_DATA.experience}
          </p>
        </div>
      </motion.div>

      {/* Floating Navy Veteran Ribbon with Floating Spring Physics */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.06 }}
        className="absolute -bottom-5 -right-2 sm:right-4 bg-primary-container text-on-primary px-4 py-2.5 rounded-2xl shadow-xl border border-primary/30 flex items-center gap-3 cursor-default"
      >
        <div className="h-9 w-9 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold">
          <AnimatedIcon name="shieldCheck" animation="shield" size={18} />
        </div>
        <div>
          <p className="text-xs font-bold leading-tight">U.S. Navy Veteran</p>
          <p className="text-[11px] text-primary-fixed-dim leading-tight">
            10-Yr Commissioned Officer
          </p>
        </div>
      </motion.div>
    </div>
  );
}
