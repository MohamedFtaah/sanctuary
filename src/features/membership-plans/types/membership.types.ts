export interface MembershipTier {
  id: string;
  name: string;
  ageScope: string;
  priceAnnual: string;
  period: string;
  description: string;
  isPopular?: boolean;
  benefits: string[];
  ctaText: string;
}

