import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { clinicJsonLd } from "@/lib/seo-schema";
import { LeadProfileProvider } from "@/features/lead-profile/context/lead-profile-context";
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
  metadataBase: new URL("https://sanctuary-beta-nine.vercel.app"),
  title: {
    default: "Private Aesthetic Dentistry & Bespoke Smile Transformations | UK",
    template: "%s | Private Cosmetic Dentistry",
  },
  description:
    "Refined UK private cosmetic dentistry and bespoke smile design. High-converting consultation workflows, composite bonding, porcelain veneers, and sub-second patient experience.",
  keywords: [
    "UK cosmetic dentist",
    "private aesthetic dentistry London",
    "composite bonding UK",
    "porcelain veneers consultation",
    "sub second dental portfolio",
    "private dental booking calendar",
    "smile makeovers UK",
    "minimally invasive dentistry",
  ],
  authors: [{ name: "Private Aesthetic Dentistry Specialist" }],
  creator: "Sanctuary Dental Interactive Prototype",
  publisher: "Sanctuary Dental Interactive Prototype",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "https://sanctuary-beta-nine.vercel.app",
  },
  openGraph: {
    title: "Private Aesthetic Dentistry & Bespoke Smile Transformations | UK",
    description:
      "Sub-second luxury clinical portfolio and high-converting private consultation platform for UK cosmetic dentistry.",
    url: "https://sanctuary-beta-nine.vercel.app",
    siteName: "Sanctuary Dental Prototype",
    images: [
      {
        url: "/images/hero-clinic.jpg",
        width: 1200,
        height: 630,
        alt: "Private cosmetic dentistry modern operatory suite",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Aesthetic Dentistry | UK",
    description:
      "Bespoke smile design and direct private consultation flow.",
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
    <html lang="en-GB" className={plusJakartaSans.variable}>
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

        <LeadProfileProvider>
          <Header />

          <div className="flex-1 flex flex-col">{children}</div>

          <FloatingEmergencyFab />

          <FooterSection />
        </LeadProfileProvider>

        {/* CRM Prototype Safe Analytics Tracker (Zero-Spam & Beacon Powered) */}
        <Script
          id="crm-analytics-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function() {
  var urlParams = new URLSearchParams(window.location.search);
  var leadId = urlParams.get('ref');
  if (!leadId) return;

  var timeSpent = 0;
  var timer = setInterval(function() { timeSpent += 5; }, 5000);

  function sendTelemetry(clickedBooking, clickedWhatsApp) {
    var payload = JSON.stringify({
      leadId: leadId,
      timeSpentSeconds: timeSpent,
      clickedBooking: Boolean(clickedBooking),
      clickedWhatsApp: Boolean(clickedWhatsApp),
      pageUrl: window.location.href,
      referrer: document.referrer || ''
    });

    var endpoint = 'https://involved-nerti-o0sans0o-a85dfacc.apps.mistral.run/api/v1/webhooks/prototype-visit';

    if (navigator.sendBeacon) {
      navigator.sendBeacon(endpoint, payload);
    } else {
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true
      });
    }
  }

  // تتبع النقرات على أزرار الحجز والواتساب تلقائياً
  window.addEventListener('click', function(e) {
    var target = e.target.closest('a, button');
    if (!target) return;
    var href = (target.getAttribute('href') || '').toLowerCase();
    var text = (target.innerText || '').toLowerCase();

    if (href.includes('wa.me') || href.includes('whatsapp') || text.includes('واتساب') || text.includes('whatsapp')) {
      sendTelemetry(false, true);
    } else if (href.includes('calendly') || href.includes('cal.com') || href.includes('booking') || text.includes('احجز') || text.includes('book') || text.includes('موعد')) {
      sendTelemetry(true, false);
    }
  });

  // إرسال مدة المكوث عند مغادرة الصفحة أو إغلاقها
  window.addEventListener('beforeunload', function() {
    sendTelemetry(false, false);
  });
  window.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
      sendTelemetry(false, false);
    }
  });
})();`,
          }}
        />
      </body>
    </html>
  );
}
