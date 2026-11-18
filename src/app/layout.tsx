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
  // 1. فحص الباراميترات ووضع المعاينة الآمنة
  const urlParams = new URLSearchParams(window.location.search);
  const leadId = urlParams.get('ref');
  const isAdminPreview = urlParams.get('preview') === 'admin' || leadId === 'preview';

  // إذا لم يكن هناك عميل محدد أو كانت معاينة إدارة، يتم إيقاف التتبع
  if (!leadId || isAdminPreview) return;

  const CRM_WEBHOOK_URL = 'https://increases-laugh-concerts-snapshot.trycloudflare.com/api/v1/webhooks/prototype-visit';

  // 2. جمع بيانات الجهاز والشاشة
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(navigator.userAgent);
  const deviceType = isTablet ? 'tablet' : isMobile ? 'mobile' : 'desktop';
  const screenResolution = (window.screen ? window.screen.width + 'x' + window.screen.height : 'unknown');
  const platform = navigator.platform || 'Unknown';

  // 3. حساب وقت التصفح الفعلي (يتوقف عند مغادرة التبويب)
  let activeSeconds = 0;
  let maxScrollDepth = 0;
  let intervalTimer = null;

  function startTimer() {
    if (!intervalTimer) {
      intervalTimer = setInterval(() => {
        if (!document.hidden) {
          activeSeconds += 1;
        }
      }, 1000);
    }
  }

  function stopTimer() {
    clearInterval(intervalTimer);
    intervalTimer = null;
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopTimer();
    else startTimer();
  });
  startTimer();

  // 4. حساب عمق التمرير Scroll Depth
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (docHeight > 0) {
      const currentDepth = Math.round((scrollTop / docHeight) * 100);
      if (currentDepth > maxScrollDepth) {
        maxScrollDepth = Math.min(100, currentDepth);
      }
    }
  }, { passive: true });

  // 5. دالة إرسال البيانات للـ CRM
  function sendTelemetry(actionType, extraDetails) {
    const payload = {
      leadId: leadId,
      pageUrl: window.location.href,
      timeSpent: activeSeconds,
      scrollDepth: maxScrollDepth,
      deviceType: deviceType,
      screenResolution: screenResolution,
      platform: platform,
      action: actionType || null,
      details: extraDetails || ''
    };

    const data = JSON.stringify(payload);
    if (navigator.sendBeacon) {
      const blob = new Blob([data], { type: 'application/json' });
      navigator.sendBeacon(CRM_WEBHOOK_URL, blob);
    } else {
      fetch(CRM_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data,
        keepalive: true
      }).catch(() => {});
    }
  }

  // 6. تتبع النقرات الحاسمة (CTA Clicks)
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a, button');
    if (!target) return;

    const href = target.getAttribute('href') || '';
    const text = target.innerText || target.getAttribute('aria-label') || '';

    if (href.includes('wa.me') || href.includes('whatsapp') || /واتساب|whatsapp/i.test(text)) {
      sendTelemetry('WHATSAPP_CLICK', 'Clicked WhatsApp: ' + text.trim());
    } else if (href.includes('booking') || href.includes('calendly') || /حجز|احجز|book/i.test(text)) {
      sendTelemetry('BOOKING_CLICK', 'Clicked Booking: ' + text.trim());
    } else if (href.startsWith('tel:') || /اتصل|call/i.test(text)) {
      sendTelemetry('PHONE_CLICK', 'Clicked Phone: ' + href);
    }
  });

  // 7. إرسال نبضة تحديث دورية كل 30 ثانية + نبضة عند مغادرة أو إغلاق الصفحة
  setInterval(() => {
    if (activeSeconds > 0 && !document.hidden) {
      sendTelemetry();
    }
  }, 30000);

  window.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      sendTelemetry();
    }
  });

  window.addEventListener('pagehide', () => sendTelemetry());
})();`,
          }}
        />
      </body>
    </html>
  );
}
