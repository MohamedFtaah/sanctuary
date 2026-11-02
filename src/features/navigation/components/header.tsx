"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Menu } from "lucide-react";
import { AnnouncementBar } from "./announcement-bar";
import { MainNav } from "./main-nav";
import { MobileDrawer } from "./mobile-drawer";
import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { useNavigation } from "../hooks/use-navigation";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { CLINIC_CONTACT } from "../constants/nav-items";
import { cn } from "@/lib/utils";

export function Header() {
  const { isScrolled, activeSection } = useNavigation();
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      <AnnouncementBar />

      <div
        className={cn(
          "h-20 w-full transition-all duration-300 px-margin-mobile md:px-8 lg:px-margin",
          isScrolled
            ? "bg-surface-container-lowest/95 backdrop-blur-md shadow-md border-b border-surface-container/80"
            : "bg-surface-container-lowest/85 backdrop-blur-sm border-b border-surface-container/30"
        )}
      >
        <div className="max-w-[1440px] h-full mx-auto flex items-center justify-between gap-space-md">
          <Logo />

          <MainNav activeSection={activeSection} />

          <div className="hidden sm:flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="sm" className="hidden xl:inline-flex">
                <a href={`tel:${CLINIC_CONTACT.phoneRaw}`} className="flex items-center gap-2">
                  <AnimatedIcon name="phone" animation="phone" size={14} iconClassName="text-secondary" />
                  <span>{CLINIC_CONTACT.phone}</span>
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="shimmer" size="sm">
                <Link href="#appointment-triage" className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>Book Consultation</span>
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.button
            type="button"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 rounded-lg text-primary hover:bg-surface-container transition-colors"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
          >
            <Menu className="h-6 w-6" />
          </motion.button>
        </div>
      </div>

      <MobileDrawer isOpen={isOpen} onClose={closeMenu} />
    </header>
  );
}
