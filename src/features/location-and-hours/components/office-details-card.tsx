"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { CLINIC_ACCESS_POINTS } from "../constants/location-data";
import { AnimatedIcon, AnimationType } from "@/components/ui/animated-icon";
import { useLeadProfile } from "@/features/lead-profile/context/lead-profile-context";

const locationAnimMap: Record<string, { icon: string; anim: AnimationType }> = {
  Car: { icon: "car", anim: "car" },
  Accessibility: { icon: "accessibility", anim: "check" },
  Bus: { icon: "bus", anim: "car" },
};

export function OfficeDetailsCard() {
  const { isDoctor, doctorLastName, clinicName, city, calendlyUrl } = useLeadProfile();

  const practiceName = isDoctor
    ? `Dr. ${doctorLastName} Private Suite`
    : clinicName;

  return (
    <div className="flex flex-col gap-6">
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="p-5 sm:p-6 rounded-2xl bg-surface-container/60 border border-surface-container-high/60 transition-shadow hover:shadow-sm"
      >
        <h4 className="font-headline-sm text-base font-bold text-primary mb-3 flex items-center gap-2">
          <AnimatedIcon name="pin" animation="pin" size={18} iconClassName="text-secondary" />
          <span>Practice Location</span>
        </h4>
        <p className="font-body-md text-sm text-on-surface leading-relaxed">
          <strong>{practiceName}</strong>
          <br />
          Private Consultation Suites
          <br />
          {city}, United Kingdom
        </p>

        <div className="mt-4 pt-4 border-t border-surface-container flex flex-col gap-2.5 text-xs font-medium">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-bold"
          >
            <AnimatedIcon name="calendar" animation="check" size={15} />
            <span className="hover:underline">Direct Calendar Booking Available</span>
          </a>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <Mail className="h-3.5 w-3.5 text-secondary" />
            <span>consultations@sanctuarydental.co.uk</span>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col gap-3">
        {CLINIC_ACCESS_POINTS.map((point, idx) => {
          const conf = locationAnimMap[point.icon] || { icon: "car", anim: "car" };
          return (
            <motion.div
              key={idx}
              whileHover={{ x: 6 }}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container-lowest border border-surface-container/70 shadow-sm transition-colors hover:border-secondary/30 cursor-default"
            >
              <div className="h-9 w-9 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0 mt-0.5">
                <AnimatedIcon
                  name={conf.icon}
                  animation={conf.anim}
                  size={18}
                  iconClassName="text-secondary"
                />
              </div>
              <div>
                <h5 className="font-headline-sm text-xs font-bold text-primary">
                  {point.title}
                </h5>
                <p className="font-body-sm text-[11px] text-on-surface-variant mt-0.5 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
