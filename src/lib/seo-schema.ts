export const clinicJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
      "@id": "https://sanctuary-beta-nine.vercel.app/#dentist",
      name: "Private Aesthetic Dentistry & Smile Architecture",
      alternateName: "Sanctuary Dental Interactive Prototype",
      description:
        "Sub-second private cosmetic dental portfolio and consultation platform. Specialised in composite bonding, porcelain veneers, and minimally invasive smile makeovers across the United Kingdom.",
      url: "https://sanctuary-beta-nine.vercel.app",
      telephone: "+44-20-7946-0123",
      email: "consultations@sanctuarydental.co.uk",
      image: "https://sanctuary-beta-nine.vercel.app/images/hero-clinic.jpg",
      logo: "https://sanctuary-beta-nine.vercel.app/images/logo.png",
      priceRange: "£££",
      currenciesAccepted: "GBP",
      paymentAccepted: "Credit Card, Debit Card, Direct Debit, Private Consultation Plan",
      medicalSpecialty: [
        "https://schema.org/Dentistry",
        "Cosmetic Dentistry",
        "Aesthetic Dentistry",
        "Restorative Dentistry",
        "Preventive Dentistry",
        "Digital Smile Design",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Private Practice Suite",
        addressLocality: "London",
        addressRegion: "Greater London",
        postalCode: "W1G 9PW",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.5194,
        longitude: -0.1478,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:30",
          closes: "18:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        ratingCount: "192",
        reviewCount: "192",
      },
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Direct Calendar Access & Instant Confirmation",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Private Consultation Suites",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Sub-Second Digital Smile Design & 3D Imaging",
          value: true,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://sanctuary-beta-nine.vercel.app/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does the direct consultation flow work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can book directly into the private clinical calendar with instant confirmation, bypassing traditional reception bottlenecks.",
          },
        },
        {
          "@type": "Question",
          name: "What aesthetic dental treatments are offered?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We specialise in minimally invasive smile transformations including composite bonding, porcelain veneers, clear aligners, and comprehensive aesthetic dentistry.",
          },
        },
      ],
    },
  ],
};

