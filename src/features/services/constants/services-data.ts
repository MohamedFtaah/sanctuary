import { DentalService } from "../types/service.types";

export const SERVICES_DATA: DentalService[] = [
  {
    id: "3d-imaging",
    title: "3D Volumetric Imaging & Low-Dose X-Rays",
    categoryTag: "Diagnostic Precision",
    description:
      "Sub-millimeter anatomical precision with ultra-low radiation. Detailed bone, nerve, and root scans captured in seconds right in our Madison suite.",
    features: [
      "CBCT 3D Cone Beam Technology",
      "Instant Chairside Digital Display",
      "Up to 90% Lower Dose Than Older Film",
    ],
    icon: "Scan",
    isPopular: true,
  },
  {
    id: "implants",
    title: "Dental Implants & Restorations",
    categoryTag: "Tooth Replacement",
    description:
      "Permanent, natural-feeling tooth replacements. Dr. Scinico plans and restores titanium implant abutments and high-strength custom ceramic crowns.",
    features: [
      "Custom Titanium & Zirconia Abutments",
      "Natural Color & Light Translucency",
      "Single Tooth & Multi-Unit Support",
    ],
    icon: "Crown",
  },
  {
    id: "endodontics",
    title: "Gentle Root Canal & Extractions",
    categoryTag: "Pain Relief & Preservation",
    description:
      "Relieving acute pain and preserving your natural teeth. Advanced rotary instrumentation makes endodontic procedures quiet, fast, and tranquil.",
    features: [
      "Advanced Painless Anesthesia",
      "Rotary Nickel-Titanium Precision",
      "Conservative Biological Preservation",
    ],
    icon: "HeartPulse",
  },
  {
    id: "preventative",
    title: "Preventative Cleanings & Periodontal Therapy",
    categoryTag: "Foundation Care",
    description:
      "Thorough ultrasonic scaling, gentle polish, and targeted periodontal maintenance to preserve the bone support of your smile for life.",
    features: [
      "Ultrasonic Biofilm Debridement",
      "Digital Periodontal Bone Charting",
      "Gentle Hygienic Maintenance",
    ],
    icon: "Sparkles",
  },
  {
    id: "restorations",
    title: "Tooth-Colored Fillings & Ceramic Crowns",
    categoryTag: "Biomimetic Restoration",
    description:
      "Mercury-free composite bonding and precision-milled porcelain crowns that seamlessly mimic natural light refraction and enamel density.",
    features: [
      "100% Metal-Free Enamel Match",
      "High-Strength Bio-Ceramic Porcelain",
      "Long-Lasting Adhesive Margins",
    ],
    icon: "Layers",
  },
  {
    id: "cosmetics",
    title: "Cosmetic Whitening & Porcelain Veneers",
    categoryTag: "Smile Aesthetics",
    description:
      "Custom-fitted clinical whitening trays and handcrafted porcelain veneers designed to complement your facial symmetry and natural tooth shade.",
    features: [
      "Custom At-Home & In-Office Trays",
      "Minimally Invasive Enamel Prep",
      "Stain-Resistant Glass Ceramics",
    ],
    icon: "Smile",
  },
];

