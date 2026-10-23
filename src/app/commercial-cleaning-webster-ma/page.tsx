import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/data/cities";
import { CityPageTemplate } from "@/components/templates/city-page-template";

const SLUG = "webster-ma";

export const metadata: Metadata = {
  title: { absolute: "Commercial Cleaning Webster, MA | Free Walkthrough & Quote" },
  description: "Webster businesses: skip the call center. Talk to the owners, get a free walkthrough and a written quote. Janitorial and floor care by in-house crews.",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-webster-ma",
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

export default function WebsterCommercialCleaningPage() {
  const city = getCityBySlug(SLUG);
  if (!city) notFound();
  return <CityPageTemplate city={city} heroImageIndex={19} />;
}
