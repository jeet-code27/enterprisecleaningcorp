import { Metadata } from "next";
import { Hero } from "@/components/blocks/hero";
import { HowItWorks } from "@/components/ui/how-it-works";
import { WhyChooseUs } from "@/components/ui/why-choose-us";
import { ServicesSlideshow } from "@/components/blocks/services-slideshow";
import { EmergencyCTA } from "@/components/blocks/emergency-cta";
import { StatsBanner } from "@/components/ui/stats-banner";
import { GallerySection } from "@/components/blocks/gallery-section";
import { WhyEnterprise } from "@/components/blocks/why-enterprise";
import { ServiceAreas } from "@/components/blocks/service-areas";
import { GoogleMapSection } from "@/components/blocks/google-map";
import { FAQSection } from "@/components/blocks/faq-section";
import { TrustedByMarquee } from "@/components/ui/trusted-by-marquee";
import { AwardsSection } from "@/components/blocks/awards-section";
import { RailersSponsorship } from "@/components/blocks/railers-sponsorship";
import { SuccessStoriesSection } from "@/components/blocks/success-stories-section";
import Script from "next/script";

export const metadata: Metadata = {
  title: { absolute: "Commercial Cleaning Services & Janitorial │ Enterprise Cleaning Corp" },
  description: "Enterprise Cleaning Corporation provides top-rated commercial cleaning services, office cleaning services in Massachusetts, and commercial janitorial services near me with 97% client retention.",
  keywords: "commercial cleaning services, office cleaning services in Massachusetts, commercial janitorial services in Massachusetts, industrial cleaning company in Massachusetts, high technology janitorial services in massachusetts, commercial cleaning services near me, office cleaning services, commercial cleaning massachusetts, commercial cleaning companies, commercial janitorial services near me, commercial cleaning, commercial cleaning services massachusetts, janitorial services near me, cleaning company near me, commercial cleaner near me, building cleaning services near me, Commercial cleaning Worcester MA, Enterprise Cleaning Corp",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/",
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

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "CleaningService",
  "name": "Enterprise Cleaning and Restoration Corporation",
  "image": "https://www.enterprisecleaningcorp.com/images/ecc-new-logo.png",
  "url": "https://www.enterprisecleaningcorp.com/",
  "telephone": "+1 508-890-1000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "99 Hartwell St Ste B",
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
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Looking for commercial cleaning services near me or janitorial services near me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enterprise Cleaning Corporation is a leading cleaning company near me and trusted commercial cleaner near me. We deliver premier commercial cleaning services, commercial janitorial services near me, and building cleaning services near me across Worcester, Central Massachusetts, Boston, and Southern New Hampshire."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer office cleaning services in Massachusetts and industrial facility cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. As one of the top commercial cleaning companies and a certified industrial cleaning company in Massachusetts, we provide customized office cleaning services in Massachusetts, commercial janitorial services in Massachusetts, and specialized high technology janitorial services in massachusetts for cleanrooms, tech hubs, and corporate parks."
      }
    },
    {
      "@type": "Question",
      "name": "What areas does Enterprise Cleaning serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enterprise Cleaning Corporation provides commercial cleaning and janitorial services across Worcester and Central Massachusetts, with service throughout Rhode Island and New Hampshire."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Enterprise different from other Worcester cleaning companies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 97% client retention rate, 165+ recurring janitorial customers, over 500 yearly projects, four Worcester Business Journal “Best of Business” awards, 23+ years in business, direct owner accountability, and an in-house team that is never subcontracted."
      }
    },
    {
      "@type": "Question",
      "name": "Does Enterprise handle emergency water and flood damage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide emergency water/flood and mold services. We also work directly with the insurance company."
      }
    },
    {
      "@type": "Question",
      "name": "How long has Enterprise Cleaning been in business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enterprise has operated since 2003 — 23+ years serving Central Massachusetts — and has been BBB-accredited since 2007."
      }
    },
    {
      "@type": "Question",
      "name": "What types of facilities does Enterprise clean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Offices, healthcare and life-sciences facilities, schools, banks, manufacturing plants, and commercial properties / CRE managed by property and facility managers."
      }
    }
  ]
};

export default function Home() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans">
      <Script
        id="business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="relative z-10 w-full bg-background border-b border-border shadow-xl rounded-b-[3rem] pb-12">
        <Hero />

        <TrustedByMarquee />
        <StatsBanner />
        <ServicesSlideshow />
        <GallerySection />
        <EmergencyCTA />
        <HowItWorks />
        <WhyEnterprise />
        <AwardsSection />
        <RailersSponsorship />
        <SuccessStoriesSection />
        <GoogleMapSection />
        <FAQSection />
        <ServiceAreas />
      </main>
    </div>
  );
}
