import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/data/cities";
import { CityPageTemplate } from "@/components/templates/city-page-template";

const SLUG = "sterling-ma";

export const metadata: Metadata = {
  title: { absolute: "Commercial Cleaning Sterling, MA | 24/7 Emergency Help" },
  description: "After-hours cleaning for Sterling offices and a 24/7 flood and storm cleanup line for emergencies. Insured and bonded. Call 508-890-1000 for a quote.",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-sterling-ma",
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

export default function SterlingCommercialCleaningPage() {
  const city = getCityBySlug(SLUG);
  if (!city) notFound();
  return <CityPageTemplate city={city} heroImageIndex={8} />;
}
