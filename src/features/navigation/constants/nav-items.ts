import { NavItem, ClinicContactInfo } from "../types/navigation.types";

export const NAVIGATION_LINKS: NavItem[] = [
  { label: "About", href: "#about-doctor" },
  { label: "Services", href: "#services" },
  { label: "Private Plans", href: "#membership-plans", badge: "Direct Care" },
  { label: "Patient Reviews", href: "#patient-reviews" },
  { label: "Location & Suites", href: "#location-and-hours" },
];

export const CLINIC_CONTACT: ClinicContactInfo = {
  address: "Private Consultation Suites, UK",
  phone: "020 7946 0123",
  phoneRaw: "02079460123",
  hours: "Mon–Fri 8:30am–6:00pm, By Appointment",
  emergencyNote: "Direct private consultation triage available",
  ratingScore: "5.0/5",
  reviewsCount: "190+ Reviews",
};

