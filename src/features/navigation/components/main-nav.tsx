"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NavItem } from "../types/navigation.types";
import { NAVIGATION_LINKS } from "../constants/nav-items";
import { cn } from "@/lib/utils";

interface MainNavProps {
  activeSection?: string;
}

export function MainNav({ activeSection }: MainNavProps) {
  return (
    <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
      {NAVIGATION_LINKS.map((item: NavItem) => {
        const isActive = activeSection === item.href.replace("#", "");
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "font-label-interactive text-label-interactive relative py-2 transition-colors",
              isActive ? "text-secondary font-bold" : "text-on-surface-variant hover:text-primary"
            )}
          >
            <motion.span
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-flex items-center gap-1.5"
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-[10px] font-bold uppercase tracking-wider bg-secondary-container/90 text-on-secondary-fixed px-1.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </motion.span>

            {isActive && (
              <motion.span
                layoutId="activeNavPill"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary via-secondary-fixed to-secondary rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
