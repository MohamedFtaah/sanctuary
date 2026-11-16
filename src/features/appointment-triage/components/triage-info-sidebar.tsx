"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Sparkles, Calendar, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { useLeadProfile } from "@/features/lead-profile/context/lead-profile-context";

export function TriageInfoSidebar() {
  const { isDoctor, doctorLastName, clinicName, city, calendlyUrl } = useLeadProfile();

  const heading = isDoctor
    ? `Schedule Your Consultation Directly with Dr. ${doctorLastName}`
    : `Reserve a Private Consultation at ${clinicName}`;

  const subtext = isDoctor
    ? `Zero reception friction. Select a time directly into Dr. ${doctorLastName}'s private calendar.`
    : `Fast-track your consultation booking in ${city} with instant confirmation.`;

  const primaryBtnText = isDoctor
    ? `Book Consultation with Dr. ${doctorLastName}`
    : `Reserve Private Consultation`;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Badge variant="cyan" className="mb-4">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Direct Calendar Access</span>
        </Badge>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold tracking-tight mb-4">
          {heading}
        </h2>
        <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
          {subtext}
        </p>
      </div>

      {/* Featured Direct Calendar Action Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="p-5 rounded-2xl bg-gradient-to-br from-primary via-primary-container to-primary text-on-primary shadow-xl border border-secondary/30 flex flex-col gap-4"
      >
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container/30 text-secondary-fixed text-xs font-semibold">
            <Calendar className="h-3.5 w-3.5" />
            <span>Instant Real-Time Confirmation</span>
          </span>
          <span className="text-[11px] text-surface-dim">Zero Waitlist</span>
        </div>

        <div>
          <h4 className="font-headline-sm text-base font-bold text-white mb-1">
            Open Private Booking Calendar
          </h4>
          <p className="text-xs text-primary-fixed-dim leading-relaxed">
            Select an exact date and private time slot directly into the schedule.
          </p>
        </div>

        <Button asChild variant="accent" size="lg" className="w-full justify-center">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <span>{primaryBtnText}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Button>
      </motion.div>

      <div className="flex flex-col gap-3 mt-1">
        {/* Rapid Confirmation Card */}
        <motion.div
          whileHover={{ x: 6 }}
          className="flex items-start gap-3.5 p-4 rounded-2xl bg-surface-container/60 border border-surface-container-high/60 transition-colors"
        >
          <div className="h-10 w-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5">
            <AnimatedIcon name="clock" animation="clock" size={20} />
          </div>
          <div>
            <h4 className="font-headline-sm text-sm font-bold text-primary">
              Sub-Second Digital Flow
            </h4>
            <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
              No reception phone tag or paperwork delays. Secure your appointment in under 60 seconds.
            </p>
          </div>
        </motion.div>

        {/* Private Suite Location Card */}
        <motion.div
          whileHover={{ x: 6 }}
          className="flex items-start gap-3.5 p-4 rounded-2xl bg-surface-container/60 border border-surface-container-high/60 transition-colors"
        >
          <div className="h-10 w-10 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0 mt-0.5">
            <AnimatedIcon name="pin" animation="pin" size={20} iconClassName="text-secondary" />
          </div>
          <div>
            <h4 className="font-headline-sm text-sm font-bold text-primary">
              Private Practice in {city}
            </h4>
            <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
              Dedicated private suites designed for complete patient comfort, discretion, and calm.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="p-4 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-start gap-3">
        <ShieldAlert className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
        <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
          <strong className="text-primary font-semibold">Prefer to request a custom callback?</strong> Fill out the triage form alongside and our private care coordinator will reach out within 2 hours.
        </p>
      </div>
    </div>
  );
}
