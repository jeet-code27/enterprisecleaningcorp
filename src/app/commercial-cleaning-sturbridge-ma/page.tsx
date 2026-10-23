import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/data/cities";
import { CityPageTemplate } from "@/components/templates/city-page-template";

const SLUG = "sturbridge-ma";

export const metadata: Metadata = {
  title: { absolute: "Commercial Cleaning Sturbridge, MA | 97% Clients Stay" },
  description: "Sturbridge offices, retail and hospitality spaces stay guest-ready with nightly janitorial and floor care. 97% client retention. Free quote.",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-sturbridge-ma",
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

export default function SturbridgeCommercialCleaningPage() {
  const city = getCityBySlug(SLUG);
  if (!city) notFound();
  return <CityPageTemplate city={city} heroImageIndex={18} />;
}
