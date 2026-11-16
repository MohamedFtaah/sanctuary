"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowUpRight } from "lucide-react";
import { AnimatedIcon } from "./animated-icon";
import { useLeadProfile } from "@/features/lead-profile/context/lead-profile-context";

export function FloatingEmergencyFab() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const { city, calendlyUrl, isDoctor, doctorLastName, clinicName } = useLeadProfile();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const brandHeading = isDoctor ? `Dr. ${doctorLastName}` : clinicName;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 30 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5"
        >
          {/* Expanded quick contact drawer */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="rounded-2xl bg-surface-container-lowest p-4 shadow-2xl border border-secondary/30 flex flex-col gap-2.5 min-w-[250px]"
              >
                <div className="flex items-center gap-2 pb-2 border-b border-surface-container">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
                  </span>
                  <span className="font-label-credential text-xs font-bold text-primary">
                    {city} Consultation Open
                  </span>
                </div>

                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2.5 px-3 py-2 rounded-xl bg-primary text-on-primary hover:bg-primary-container transition-all text-xs font-semibold"
                >
                  <div className="flex items-center gap-2">
                    <AnimatedIcon name="calendar" animation="check" size={15} />
                    <span>Book Consultation Now</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <a
                  href="#appointment-triage"
                  onClick={() => setIsExpanded(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all text-xs font-semibold text-primary"
                >
                  <Calendar className="h-4 w-4 text-secondary" />
                  <span>Request Consultation Visit</span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Floating Trigger Button */}
          <motion.button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-primary via-primary-container to-primary text-on-primary shadow-xl border border-secondary/40 focus:outline-none focus:ring-4 focus:ring-secondary/30"
            aria-label="Direct booking and consultation"
          >
            {/* Luminous Pulsating Halo */}
            <span className="absolute -inset-1 rounded-full bg-secondary opacity-30 blur-sm group-hover:opacity-60 transition-opacity animate-pulse" />

            <div className="relative flex items-center justify-center h-7 w-7 rounded-full bg-secondary text-on-secondary shadow-sm">
              <AnimatedIcon name="calendar" animation="check" size={15} />
            </div>

            <span className="relative font-label-interactive text-xs font-bold tracking-wide pr-1">
              Book Consultation
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

