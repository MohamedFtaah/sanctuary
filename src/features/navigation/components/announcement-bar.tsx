import * as React from "react";
import { CLINIC_CONTACT } from "../constants/nav-items";
import { AnimatedIcon } from "@/components/ui/animated-icon";

export function AnnouncementBar() {
  return (
    <div className="w-full bg-primary-container text-on-primary font-label-credential text-label-credential py-2 px-margin-mobile lg:px-margin transition-colors border-b border-primary/20">
      <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-y-1.5 gap-x-space-md">
        <div className="flex flex-wrap items-center gap-x-space-lg gap-y-1">
          {/* Address with Bouncing Map Pin */}
          <span className="flex items-center gap-1.5 hover:text-secondary-fixed transition-colors group cursor-default">
            <AnimatedIcon
              name="pin"
              animation="pin"
              size={14}
              iconClassName="text-tertiary-fixed-dim group-hover:text-secondary-fixed"
            />
            <span>{CLINIC_CONTACT.address}</span>
          </span>

          <span className="hidden md:inline-block text-outline-variant/40">•</span>

          {/* Phone with Ringing Animation */}
          <a
            className="flex items-center gap-1.5 hover:text-secondary-fixed transition-colors group"
            href={`tel:${CLINIC_CONTACT.phoneRaw}`}
          >
            <AnimatedIcon
              name="phone"
              animation="phone"
              size={14}
              iconClassName="text-tertiary-fixed-dim group-hover:text-secondary-fixed"
            />
            <span>{CLINIC_CONTACT.phone}</span>
          </a>

          <span className="hidden xl:inline-block text-outline-variant/40">•</span>

          {/* Hours with Ticking Clock */}
          <span className="hidden xl:flex items-center gap-1.5 text-surface-dim">
            <AnimatedIcon
              name="clock"
              animation="clock"
              size={14}
              iconClassName="text-tertiary-fixed-dim"
            />
            <span>{CLINIC_CONTACT.hours}</span>
          </span>
        </div>

        <div className="flex items-center gap-space-sm">
          {/* Live Open Beacon */}
          <div className="hidden sm:flex items-center gap-1.5 bg-secondary-container/20 px-2 py-0.5 rounded-full text-[11px] text-secondary-fixed font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-fixed" />
            </span>
            <span>Open Mon–Thu 7:30 AM</span>
          </div>

          {/* Rating with Sparkle Star */}
          <div className="flex items-center gap-1.5 bg-surface-container-lowest/10 px-2.5 py-0.5 rounded-full hover:bg-surface-container-lowest/20 transition-all cursor-pointer">
            <AnimatedIcon
              name="star"
              animation="star"
              size={14}
              iconClassName="fill-secondary-fixed-dim text-secondary-fixed-dim"
            />
            <span className="font-label-interactive text-label-interactive text-surface-bright">
              {CLINIC_CONTACT.ratingScore}
            </span>
            <span className="text-outline-variant text-[11px]">
              ({CLINIC_CONTACT.reviewsCount})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
