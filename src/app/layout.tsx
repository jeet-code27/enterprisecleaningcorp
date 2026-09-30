import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { LayoutWrapper } from "@/components/layout-wrapper";
import AuthProvider from "@/components/auth-provider";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import { ConversionTracker } from "@/components/analytics/ConversionTracker";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["CleaningService", "LocalBusiness", "ProfessionalService"],
  "@id": "https://www.enterprisecleaningcorp.com/#organization",
  "name": "Enterprise Cleaning Corporation",
  "alternateName": [
    "Enterprise Cleaning Corp",
    "Enterprise Cleaning and Restoration Corporation"
  ],
  "image": "https://www.enterprisecleaningcorp.com/images/ecc-new-logo.png",
  "logo": "https://www.enterprisecleaningcorp.com/images/ecc-new-logo.png",
  "url": "https://www.enterprisecleaningcorp.com/",
  "telephone": "+1-508-890-1000",
  "email": "customerservice@enterprisecleaningcorp.com",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Check, Invoice",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "99 Hartwell Street, Suite B",
    "addressLocality": "West Boylston",
    "addressRegion": "MA",
    "postalCode": "01583",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.36195,
    "longitude": -71.77708
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-508-890-1000",
      "contactType": "customer service",
      "areaServed": ["US", "US-MA", "US-RI", "US-NH"],
      "availableLanguage": ["English", "Portuguese", "Spanish"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+1-508-890-1000",
      "contactType": "emergency",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    }
  ],
  "sameAs": [
    "https://www.facebook.com/people/Enterprise-Cleaning/61591593631296/",
    "https://www.instagram.com/enterprisecleaningcorporation",
    "https://www.linkedin.com/company/enterprise-cleaning-corporation/",
    "https://www.bbb.org/us/ma/west-boylston/profile/cleaning-services/enterprise-cleaning-corporation-0101-92576"
  ],
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Central Massachusetts" },
    { "@type": "AdministrativeArea", "name": "Worcester County, MA" },
    { "@type": "AdministrativeArea", "name": "Middlesex County, MA" },
    { "@type": "AdministrativeArea", "name": "Greater Boston, MA" },
    { "@type": "AdministrativeArea", "name": "Rhode Island" },
    { "@type": "AdministrativeArea", "name": "Southern New Hampshire" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Commercial Cleaning & Janitorial Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Janitorial Services",
          "description": "Daily, nightly, and scheduled commercial janitorial services for corporate, medical, industrial, and institutional facilities."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Office Cleaning Services",
          "description": "Professional commercial office cleaning for Class A and B office buildings, tech offices, and corporate suites."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Medical & Healthcare Facility Cleaning",
          "description": "Terminal and clinical healthcare cleaning adhering to CDC/OSHA standards for medical clinics, dental practices, and outpatient suites."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Floor Care Services",
          "description": "Stripping, waxing, buffing, VCT refinishing, carpet cleaning, and commercial tile and grout cleaning."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Water Damage & Restoration",
          "description": "24/7 rapid deployment water extraction, flood cleanup, structural drying, and direct insurance billing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Post-Construction Cleaning",
          "description": "Rough, final, and touch-up post-construction cleaning for general contractors, architectural firms, and building owners."
        }
      }
    ]
  }
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.enterprisecleaningcorp.com"),
  title: "Enterprise Cleaning Corp | Commercial Cleaning Services",
  description: "Enterprise Cleaning Corporation provides professional commercial cleaning, janitorial, and emergency cleanup services across Central MA, Rhode Island & Southern NH.",
  keywords: "Commercial Cleaning, Janitorial Services, Office Cleaning Central MA, Facility Maintenance, Floor Care, Water Damage Cleanup, Enterprise Cleaning Corp",
  authors: [{ name: "Enterprise Cleaning Corporation" }],
  publisher: "Enterprise Cleaning Corporation",
  creator: "Enterprise Cleaning Corporation",
  alternates: {
    canonical: "./",
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
  openGraph: {
    title: "Enterprise Cleaning Corp | Commercial Cleaning Services",
    description: "Enterprise Cleaning Corporation provides professional commercial cleaning, janitorial, and emergency cleanup services across Central MA, Rhode Island & Southern NH.",
    url: "https://www.enterprisecleaningcorp.com",
    siteName: "Enterprise Cleaning Corporation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Cleaning Corp | Commercial Cleaning Services",
    description: "Enterprise Cleaning Corporation provides professional commercial cleaning, janitorial, and emergency cleanup services across Central MA, Rhode Island & Southern NH.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Global LocalBusiness & CleaningService JSON-LD Schema (Day 9 NAP & Schema Alignment) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F9TDR10JGE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F9TDR10JGE');
          `}
        </Script>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TXMPTWHN');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TXMPTWHN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <AuthProvider>
          <MetaPixel />
          <ConversionTracker />
          <LayoutWrapper>{children}</LayoutWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
