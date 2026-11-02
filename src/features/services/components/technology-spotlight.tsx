"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, ShieldAlert, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedIcon } from "@/components/ui/animated-icon";

export function TechnologySpotlight() {
  return (
    <div className="mt-12 rounded-3xl bg-gradient-to-r from-primary-container via-[#0e4357] to-primary-container text-on-primary p-8 md:p-10 shadow-xl border border-primary/40 relative overflow-hidden">
      {/* High-tech Scanning Beam Light effect */}
      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
        className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-secondary-container/20 to-transparent skew-x-12 pointer-events-none"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 flex flex-col items-start">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/15 text-secondary-fixed text-xs font-semibold mb-4 border border-secondary-fixed/20"
          >
            <AnimatedIcon name="scan" animation="scan" size={15} />
            <span>State-of-the-Art In-Office Diagnostics</span>
          </motion.div>

          <h3 className="font-headline-md text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
            Sub-Millimeter 3D Volumetric Imaging on Winnebago Street
          </h3>

          <p className="font-body-md text-sm md:text-base text-primary-fixed-dim leading-relaxed max-w-2xl">
            We eliminated the inconvenience of referral centers. Our in-house Cone Beam CT produces ultra-sharp 3D cross-sections of dental roots, bone volume, and nerve canals in seconds with minimal radiation.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-surface-bright">
            <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
              <Eye className="h-3.5 w-3.5 text-secondary-fixed" /> Instant Chairside Visualization
            </span>
            <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
              <ShieldAlert className="h-3.5 w-3.5 text-secondary-fixed" /> Precision Guided Planning
            </span>
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-start lg:justify-end">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild variant="accent" size="lg" className="w-full sm:w-auto">
              <Link href="#appointment-triage">
                <span>Book Exam &amp; Scan</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
