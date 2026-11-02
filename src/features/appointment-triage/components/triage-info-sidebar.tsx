"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedIcon } from "@/components/ui/animated-icon";

export function TriageInfoSidebar() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Badge variant="cyan" className="mb-4">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Direct Office Booking</span>
        </Badge>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold tracking-tight mb-4">
          Request an Appointment
        </h2>
        <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
          Tell us your preferred time and clinical needs. Our East Madison coordination team will reach out within 2–4 business hours to finalize your visit.
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-2">
        {/* Early 7:30 AM Card */}
        <motion.div
          whileHover={{ x: 6 }}
          className="flex items-start gap-3.5 p-4 rounded-2xl bg-surface-container/60 border border-surface-container-high/60 transition-colors"
        >
          <div className="h-10 w-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5">
            <AnimatedIcon name="clock" animation="clock" size={20} />
          </div>
          <div>
            <h4 className="font-headline-sm text-sm font-bold text-primary">
              Early Bird Appointments: 7:30 AM
            </h4>
            <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
              We open at 7:30 AM Monday through Thursday so you don&apos;t miss work, classes, or state commitments.
            </p>
          </div>
        </motion.div>

        {/* Winnebago Location Card */}
        <motion.div
          whileHover={{ x: 6 }}
          className="flex items-start gap-3.5 p-4 rounded-2xl bg-surface-container/60 border border-surface-container-high/60 transition-colors"
        >
          <div className="h-10 w-10 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0 mt-0.5">
            <AnimatedIcon name="pin" animation="pin" size={20} iconClassName="text-secondary" />
          </div>
          <div>
            <h4 className="font-headline-sm text-sm font-bold text-primary">
              Winnebago St Location
            </h4>
            <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
              2037 Winnebago St, Suite 1. Free private parking lot directly behind the clinic with ADA ramp access.
            </p>
          </div>
        </motion.div>

        {/* Prefer to call card */}
        <motion.div
          whileHover={{ x: 6 }}
          className="flex items-start gap-3.5 p-4 rounded-2xl bg-surface-container/60 border border-surface-container-high/60 transition-colors"
        >
          <div className="h-10 w-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shrink-0 mt-0.5">
            <AnimatedIcon name="phone" animation="phone" size={20} iconClassName="text-secondary-fixed" />
          </div>
          <div>
            <h4 className="font-headline-sm text-sm font-bold text-primary">
              Prefer to Call Directly?
            </h4>
            <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
              Our clinic receptionist answers right away:{" "}
              <a
                href="tel:6082496616"
                className="font-bold text-secondary hover:underline inline-flex items-center gap-1"
              >
                (608) 249-6616
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      <div className="p-4 rounded-2xl bg-error/10 border border-error/20 flex items-start gap-3">
        <ShieldAlert className="h-5 w-5 text-error shrink-0 mt-0.5 animate-pulse" />
        <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
          <strong className="text-error font-semibold">Acute Emergency?</strong> If you have severe facial swelling or bleeding, please call our direct office number immediately for urgent same-day triage.
        </p>
      </div>
    </div>
  );
}
