import { OfficeHourItem, ClinicAccessPoint } from "../types/location.types";

export const OFFICE_HOURS: OfficeHourItem[] = [
  { day: "Monday", hours: "8:30 AM – 6:00 PM" },
  { day: "Tuesday", hours: "8:30 AM – 6:00 PM" },
  { day: "Wednesday", hours: "8:30 AM – 6:00 PM" },
  { day: "Thursday", hours: "8:30 AM – 6:00 PM" },
  { day: "Friday", hours: "8:30 AM – 5:00 PM (Consultations)", isSpecial: true },
  { day: "Saturday – Sunday", hours: "Private Consultations By Appointment" },
];

export const CLINIC_ACCESS_POINTS: ClinicAccessPoint[] = [
  {
    title: "Dedicated Private Patient Parking",
    description:
      "Reserved off-street patient parking spaces directly adjacent to the practice for complete convenience.",
    icon: "Car",
  },
  {
    title: "Step-Free Level Access & Lift",
    description:
      "Fully accessible step-free entrance and private lift access straight into our ground-floor consultation suites.",
    icon: "Accessibility",
  },
  {
    title: "Prime Central Transit Links",
    description:
      "Minutes from central railway and underground stations with seamless private arrival and discreet entrance.",
    icon: "Bus",
  },
];

