import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/data/cities";
import { CityPageTemplate } from "@/components/templates/city-page-template";

const SLUG = "southborough-ma";

export const metadata: Metadata = {
  title: { absolute: "Commercial Cleaning Southborough, MA | Free Quote" },
  description: "Commercial cleaning for Southborough offices and local businesses. Owner-led since 2003 with 97% client retention. Get your free walkthrough.",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-southborough-ma",
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

export default function SouthboroughCommercialCleaningPage() {
  const city = getCityBySlug(SLUG);
  if (!city) notFound();
  return <CityPageTemplate city={city} heroImageIndex={3} />;
}
