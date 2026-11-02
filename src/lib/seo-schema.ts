export const clinicJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
      "@id": "https://scinicodental.com/#dentist",
      name: "Scinico Family Dental",
      alternateName: "Dr. Richard N. Scinico, DMD Family Dentistry",
      description:
        "Personalized, honest dental care in Madison's Near-East Side. Independent, physician-led dentistry with zero corporate pressure and 50 years of East Side heritage.",
      url: "https://scinicodental.com",
      telephone: "+1-608-249-6616",
      email: "care@scinicodental.com",
      image: "https://scinicodental.com/images/hero-clinic.jpg",
      logo: "https://scinicodental.com/images/logo.png",
      priceRange: "$$",
      currenciesAccepted: "USD",
      paymentAccepted: "Cash, Credit Card, In-House Membership Plan, Most PPO Insurances",
      medicalSpecialty: [
        "https://schema.org/Dentistry",
        "General Dentistry",
        "Cosmetic Dentistry",
        "Preventative Dentistry",
        "Restorative Dentistry",
        "Endodontics",
        "Periodontics",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "2037 Winnebago St, Suite 1",
        addressLocality: "Madison",
        addressRegion: "WI",
        postalCode: "53704",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.0886,
        longitude: -89.3563,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "07:30",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Friday"],
          description: "By Appointment Only",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        ratingCount: "184",
        reviewCount: "184",
      },
      founder: {
        "@type": "Person",
        name: "Dr. Richard Scinico",
        honorificPrefix: "Dr.",
        honorificSuffix: "DMD",
        jobTitle: "Lead Clinician & Practice Owner",
        alumniOf: "Southern Illinois University School of Dental Medicine",
        award: [
          "Castle Connolly Top Dentist 2022–2026",
          "U.S. Navy Veteran & 10-Yr Commissioned Officer",
        ],
      },
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Wheelchair Accessible Entrance & Ramp",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Private Reserved Off-Street Parking Lot",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "3D Volumetric Cone Beam CT Diagnostics",
          value: true,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://scinicodental.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does the in-house membership compare to standard insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are zero deductibles, zero waiting periods, and no annual maximum dollar caps. Every member receives all preventative cleanings, comprehensive exams, and diagnostic x-rays for 100% covered care, plus an automatic 15% discount on all restorative and cosmetic procedures.",
          },
        },
        {
          "@type": "Question",
          name: "What if I have an emergency on a weekend or Friday?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Call our main office number (608) 249-6616 right away. Existing patients with acute pain or trauma will be routed directly to Dr. Scinico's on-call clinical triage protocol for same-day triage and prescription coordination.",
          },
        },
        {
          "@type": "Question",
          name: "Can I park directly at the building on Winnebago Street?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We have a private, reserved off-street parking lot located directly behind 2037 Winnebago St with reserved patient spots and full wheelchair ramp access directly into our main ground-floor clinic entrance.",
          },
        },
      ],
    },
  ],
};

