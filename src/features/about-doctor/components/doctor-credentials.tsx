"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useLeadProfile } from "@/features/lead-profile/context/lead-profile-context";
import { AnimatedIcon, AnimationType } from "@/components/ui/animated-icon";

export function DoctorCredentials() {
  const { isDoctor, doctorLastName, targetService, city, clinicName } = useLeadProfile();

  const credentials = isDoctor
    ? [
        {
          title: "GDC Registered & Insured Specialist",
          institution: "General Dental Council UK Standards",
          type: "education",
          icon: "check",
          anim: "check" as AnimationType,
        },
        {
          title: "British Academy of Cosmetic Dentistry",
          institution: "Active Clinical Member & Fellow",
          type: "specialty",
          icon: "crown",
          anim: "crown" as AnimationType,
        },
        {
          title: `Peer Reputation in ${city}`,
          institution: "Private Cosmetic & Restorative Practice",
          type: "award",
          icon: "star",
          anim: "star" as AnimationType,
        },
        {
          title: "Specialised Clinical Focus",
          institution: `${targetService} Specialist`,
          type: "specialty",
          icon: "scan",
          anim: "scan" as AnimationType,
        },
      ]
    : [
        {
          title: "Multidisciplinary Clinical Team",
          institution: "GDC Registered UK Specialists & Surgeons",
          type: "education",
          icon: "check",
          anim: "check" as AnimationType,
        },
        {
          title: "Advanced 3D Diagnostic Suites",
          institution: "Sub-Millimeter CBCT & Intraoral Scanners",
          type: "specialty",
          icon: "scan",
          anim: "scan" as AnimationType,
        },
        {
          title: `Private Practice Excellence in ${city}`,
          institution: "High-Ticket Smile Transformations",
          type: "award",
          icon: "crown",
          anim: "crown" as AnimationType,
        },
        {
          title: `Flagship Center for ${clinicName}`,
          institution: `${targetService} Precision Protocols`,
          type: "specialty",
          icon: "star",
          anim: "star" as AnimationType,
        },
      ];

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {credentials.map((cred, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
          className="flex items-start gap-3 p-4 rounded-xl bg-surface-container-lowest border border-surface-container/70 shadow-sm hover:border-secondary/40 transition-colors group cursor-default"
        >
          <div className="h-9 w-9 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0 group-hover:bg-secondary/15 transition-colors">
            <AnimatedIcon
              name={cred.icon}
              animation={cred.anim}
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
      ))}
    </div>
  );
}
