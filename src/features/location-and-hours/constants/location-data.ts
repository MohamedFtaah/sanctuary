import { OfficeHourItem, ClinicAccessPoint } from "../types/location.types";

export const OFFICE_HOURS: OfficeHourItem[] = [
  { day: "Monday", hours: "7:30 AM – 5:00 PM" },
  { day: "Tuesday", hours: "7:30 AM – 5:00 PM" },
  { day: "Wednesday", hours: "7:30 AM – 5:00 PM" },
  { day: "Thursday", hours: "7:30 AM – 5:00 PM" },
  { day: "Friday", hours: "By Appointment / Urgent Care", isSpecial: true },
  { day: "Saturday – Sunday", hours: "Closed (Emergency on-call routing)" },
];

export const CLINIC_ACCESS_POINTS: ClinicAccessPoint[] = [
  {
    title: "Dedicated Rear Parking Lot",
    description:
      "Turn directly behind the building for dedicated reserved patient parking spaces with no meters or time limits.",
    icon: "Car",
  },
  {
    title: "Barrier-Free ADA Ramp Entrance",
    description:
      "Full ADA accessible ramp from the private parking lot straight into our Suite 1 ground-level treatment wing.",
    icon: "Accessibility",
  },
  {
    title: "Metro Transit & Bike Friendly",
    description:
      "Steps from Madison Metro bus stops on Winnebago St and minutes from the Capital City State Bike Trail.",
    icon: "Bus",
  },
];

