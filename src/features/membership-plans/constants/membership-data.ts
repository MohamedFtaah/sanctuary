import { MembershipTier } from "../types/membership.types";

export const MEMBERSHIP_PERKS = [
  "No Annual Maximums",
  "No Waiting Periods",
  "No Deductibles",
  "No Pre-Existing Exclusions",
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: "child-plan",
    name: "Child Wellness Plan",
    ageScope: "Ages 13 & Under",
    priceAnnual: "$429",
    period: "/ calendar year",
    description: "Complete pediatric preventative dentistry tailored to growing smiles.",
    benefits: [
      "2 Routine Professional Cleanings",
      "2 Comprehensive Doctor Exams",
      "All Necessary Routine Digital X-Rays",
      "2 Professional Fluoride Varnish Applications",
      "1 Emergency Exam & Diagnostic X-Ray",
      "15% Savings on Fillings & Restorative Care",
    ],
    ctaText: "Enroll Child Member",
  },
  {
    id: "adult-plan",
    name: "Adult Wellness Plan",
    ageScope: "Ages 14 & Up",
    priceAnnual: "$489",
    period: "/ calendar year",
    description: "Our most popular preventative package for adults and seniors.",
    isPopular: true,
    benefits: [
      "2 Routine Professional Cleanings",
      "2 Comprehensive Doctor Exams",
      "Annual Bitewing & Periapical X-Rays",
      "Oral Cancer Screening at Every Visit",
      "1 Emergency Exam & Diagnostic X-Ray",
      "15% Savings on Restorative, Crowns & Implants",
    ],
    ctaText: "Enroll Adult Member",
  },
  {
    id: "perio-plan",
    name: "Periodontal Maintenance Plan",
    ageScope: "For Patients Managing Gum Health",
    priceAnnual: "$689",
    period: "/ calendar year",
    description: "Advanced ongoing periodontal therapy to maintain bone support.",
    benefits: [
      "3-4 Periodontal Maintenance Cleanings",
      "2 Comprehensive Doctor Exams",
      "Full Diagnostic X-Ray Survey as Needed",
      "Periodontal Pocket Depth Tracking",
      "1 Emergency Exam & Diagnostic X-Ray",
      "15% Savings on All Periodontal & Restorative Procedures",
    ],
    ctaText: "Enroll Perio Member",
  },
];

