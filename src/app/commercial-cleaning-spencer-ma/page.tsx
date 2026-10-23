import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/data/cities";
import { CityPageTemplate } from "@/components/templates/city-page-template";

const SLUG = "spencer-ma";

export const metadata: Metadata = {
  title: { absolute: "Commercial Cleaning Spencer, MA | Owner-Run, 23+ Years" },
  description: "Spencer business owners get direct access to the owners, not a call center. Janitorial, office and floor care. Free quote in writing.",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-spencer-ma",
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

export default function SpencerCommercialCleaningPage() {
  const city = getCityBySlug(SLUG);
  if (!city) notFound();
  return <CityPageTemplate city={city} heroImageIndex={6} />;
}
