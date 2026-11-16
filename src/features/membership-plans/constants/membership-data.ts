import { MembershipTier } from "../types/membership.types";

export const MEMBERSHIP_PERKS = [
  "No Waiting Periods",
  "Zero Insurance Bureaucracy",
  "Direct Specialist Access",
  "Transparent Fixed Pricing",
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: "child-plan",
    name: "Junior Wellness Plan",
    ageScope: "Ages 13 & Under",
    priceAnnual: "£329",
    period: "/ calendar year",
    description: "Complete paediatric preventive care tailored to developing smiles.",
    benefits: [
      "2 Routine Professional Hygiene Visits",
      "2 Comprehensive Specialist Examinations",
      "All Necessary Routine Digital X-Rays",
      "Professional Enamel Varnish Applications",
      "1 Emergency Clinical Assessment",
      "15% Savings on Restorative & Aesthetic Care",
    ],
    ctaText: "Enrol Junior Member",
  },
  {
    id: "adult-plan",
    name: "Private Aesthetic Plan",
    ageScope: "Ages 14 & Up",
    priceAnnual: "£399",
    period: "/ calendar year",
    description: "Our signature preventive and smile maintenance package.",
    isPopular: true,
    benefits: [
      "2 Comprehensive Specialist Cleanings & Polish",
      "2 Full Diagnostic Clinical Assessments",
      "Annual Digital Low-Dose Bitewing X-Rays",
      "Oral Cancer & Soft Tissue Screening",
      "1 Priority Emergency Triage Consultation",
      "15% Savings on Composite Bonding, Veneers & Implants",
    ],
    ctaText: "Enrol Private Member",
  },
  {
    id: "perio-plan",
    name: "Advanced Periodontal Plan",
    ageScope: "For Ongoing Gum & Bone Care",
    priceAnnual: "£549",
    period: "/ calendar year",
    description: "Intensive periodontal therapy to preserve foundation bone support.",
    benefits: [
      "3-4 Periodontal Maintenance Therapy Visits",
      "2 Comprehensive Specialist Examinations",
      "Full Diagnostic Radiographic Survey as Needed",
      "Digital Periodontal Pocket Depth Mapping",
      "1 Priority Emergency Triage Consultation",
      "15% Savings on Advanced Restorative Procedures",
    ],
    ctaText: "Enrol Periodontal Member",
  },
];

