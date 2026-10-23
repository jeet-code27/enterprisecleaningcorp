import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/data/cities";
import { CityPageTemplate } from "@/components/templates/city-page-template";

const SLUG = "oxford-ma";

export const metadata: Metadata = {
  title: { absolute: "Commercial Cleaning Oxford, MA | 24/7 Emergency Help" },
  description: "Oxford retail, office and warehouse cleaning on Route 12 and Route 20. Flood and storm cleanup 24/7. 97% client retention. Free quote today.",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-oxford-ma",
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

export default function OxfordCommercialCleaningPage() {
  const city = getCityBySlug(SLUG);
  if (!city) notFound();
  return <CityPageTemplate city={city} heroImageIndex={16} />;
}
