import * as React from "react";
import Link from "next/link";
import { X, Phone, Calendar, MapPin, Clock } from "lucide-react";
import { NAVIGATION_LINKS, CLINIC_CONTACT } from "../constants/nav-items";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/logo";
import { cn } from "@/lib/utils";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-50 bg-primary/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-surface-container-lowest p-6 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-surface-container">
            <Logo />
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-primary hover:bg-surface-container transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-2">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between px-3 py-3 rounded-lg font-headline-sm text-base text-primary hover:bg-surface-container hover:text-secondary transition-colors"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-secondary-container text-on-secondary-fixed px-2 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-6 mt-6 border-t border-surface-container flex flex-col gap-3">
          <div className="flex flex-col gap-2 text-xs text-on-surface-variant font-body-sm mb-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-secondary shrink-0" />
              <span>2037 Winnebago St, Madison</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-secondary shrink-0" />
              <span>Mon–Thu: 7:30am – 5:00pm</span>
            </div>
          </div>

          <Button asChild variant="primary" className="w-full justify-center">
            <Link href="#appointment-triage" onClick={onClose}>
              <Calendar className="mr-2 h-4 w-4" />
              Request Appointment
            </Link>
          </Button>

          <Button asChild variant="outline" className="w-full justify-center">
            <a href={`tel:${CLINIC_CONTACT.phoneRaw}`}>
              <Phone className="mr-2 h-4 w-4 text-secondary" />
              Call ({CLINIC_CONTACT.phone})
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}

