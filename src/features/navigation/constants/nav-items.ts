import { NavItem, ClinicContactInfo } from "../types/navigation.types";

export const NAVIGATION_LINKS: NavItem[] = [
  { label: "About Dr. Rick", href: "#about-dr-scinico" },
  { label: "Services", href: "#comprehensive-services" },
  { label: "Membership Plan", href: "#membership-plans", badge: "No Insurance" },
  { label: "Patient Reviews", href: "#patient-reviews" },
  { label: "Location & Parking", href: "#location-and-hours" },
];

export const CLINIC_CONTACT: ClinicContactInfo = {
  address: "2037 Winnebago St, Suite 1, Madison, WI",
  phone: "(608) 249-6616",
  phoneRaw: "6082496616",
  hours: "Mon–Thu 7:30am–5:00pm, Fri By Appt",
  emergencyNote: "Emergency triage for acute toothache available",
  ratingScore: "4.9/5",
  reviewsCount: "180+ Reviews",
};

