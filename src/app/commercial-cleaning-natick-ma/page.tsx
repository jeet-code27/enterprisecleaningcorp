import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/data/cities";
import { CityPageTemplate } from "@/components/templates/city-page-template";

const SLUG = "natick-ma";

export const metadata: Metadata = {
  title: { absolute: "Commercial Cleaning Natick, MA | Free Quote" },
  description: "Commercial cleaning for Natick offices and local businesses. Enterprise Cleaning: Owner-led since 2003 with 97% client retention. Get a free quote.",
  keywords: "commercial cleaning natick ma, office cleaning natick ma, office cleaning west natick, janitorial services natick ma, commercial cleaning services",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-natick-ma",
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

export default function NatickCommercialCleaningPage() {
  const city = getCityBySlug(SLUG);
  if (!city) notFound();
  return <CityPageTemplate city={city} heroImageIndex={23} />;
}
