"use client";

import * as React from "react";
import { OFFICE_HOURS } from "../constants/location-data";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { cn } from "@/lib/utils";

export function HoursScheduleList() {
  return (
    <div className="rounded-2xl border border-surface-container/70 bg-surface-container-lowest p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-headline-sm text-base font-bold text-primary flex items-center gap-2">
          <AnimatedIcon name="clock" animation="clock" size={18} iconClassName="text-secondary" />
          <span>Office Clinical Hours</span>
        </h4>

        {/* Live pulsing open beacon */}
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary/10 text-[11px] font-bold text-secondary">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          <span>Open Mon–Thu</span>
        </span>
      </div>

      <ul className="flex flex-col divide-y divide-surface-container text-xs sm:text-sm">
        {OFFICE_HOURS.map((item, idx) => (
          <li
            key={idx}
            className="py-2.5 flex items-center justify-between font-body-sm"
          >
            <span className="font-semibold text-primary">{item.day}</span>
            <span
              className={cn(
                "font-medium",
                item.isSpecial
                  ? "text-secondary font-semibold"
                  : "text-on-surface-variant"
              )}
            >
              {item.hours}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-4 pt-3 border-t border-surface-container text-[11px] text-on-surface-variant leading-relaxed">
        * Early 7:30 AM hygiene appointments allow you to receive comprehensive care without missing work hours.
      </div>
    </div>
  );
}
