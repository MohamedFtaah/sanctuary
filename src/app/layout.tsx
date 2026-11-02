import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { clinicJsonLd } from "@/lib/seo-schema";
import { Header } from "@/features/navigation/components/header";
import { FooterSection } from "@/features/footer/components/footer-section";
import { FloatingEmergencyFab } from "@/components/ui/floating-emergency-fab";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#002532",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://scinicodental.com"),
  title: {
    default: "Scinico Family Dental | Madison, WI | Independent Near-East Dentistry",
    template: "%s | Scinico Family Dental",
  },
  description:
    "Personalized, honest dental care on Madison’s Near-East Side. Led by Dr. Richard N. Scinico, DMD with 30+ years of conservative, gentle clinical excellence. In-house membership plans, 3D imaging & reserved parking.",
  keywords: [
    "Madison WI dentist",
    "Near East Side Madison dentistry",
    "Dr Richard Scinico DMD",
    "Schenk-Atwood dental clinic",
    "dental membership plan Madison",
    "3D cone beam dentist Dane County",
    "emergency dentist Madison WI",
    "gentle dental care for dental anxiety",
    "conservative dentist Madison",
    "independent private dentist Madison",
  ],
  authors: [{ name: "Dr. Richard N. Scinico, DMD" }],
  creator: "Scinico Family Dental",
  publisher: "Scinico Family Dental",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "https://scinicodental.com",
  },
  openGraph: {
    title: "Scinico Family Dental | Honest, Independent Dental Care in Madison, WI",
    description:
      "Independent, physician-led dentistry with zero corporate pressure. 30+ years clinical excellence on historic Winnebago Street.",
    url: "https://scinicodental.com",
    siteName: "Scinico Family Dental",
    images: [
      {
        url: "/images/hero-clinic.jpg",
        width: 1200,
        height: 630,
        alt: "Scinico Family Dental modern operatory in Madison WI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scinico Family Dental | Madison, WI",
    description:
      "Gentle, honest family and restorative dentistry in Madison's Schenk-Atwood neighborhood.",
    images: ["/images/hero-clinic.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(clinicJsonLd),
          }}
        />
      </head>
      <body className="bg-background font-sans text-on-surface antialiased min-h-screen flex flex-col selection:bg-secondary-container selection:text-on-secondary-fixed">
        {/* WCAG 2.1 AA Accessibility Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-on-primary focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          Skip to main content
        </a>

        <Header />

        <div className="flex-1 flex flex-col">{children}</div>

        <FloatingEmergencyFab />

        <FooterSection />
      </body>
    </html>
  );
}
