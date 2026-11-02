"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function AmbientMesh() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden -z-10"
    >
      {/* Floating Cyan Orb */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-secondary-fixed/25 via-surface-container to-transparent blur-3xl opacity-60"
      />

      {/* Floating Tourmaline Orb */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.95, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 -left-24 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-secondary-container/20 via-surface-container-high to-transparent blur-3xl opacity-50"
      />

      {/* Shimmering Center Light */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 h-[350px] w-[350px] rounded-full bg-surface-container-high/40 blur-3xl"
      />
    </div>
  );
}

