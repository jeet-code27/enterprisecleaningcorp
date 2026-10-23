import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/data/cities";
import { CityPageTemplate } from "@/components/templates/city-page-template";

const SLUG = "gardner-ma";

export const metadata: Metadata = {
  title: { absolute: "Commercial Cleaning Gardner, MA | 97% Clients Stay" },
  description: "Gardner warehouses, manufacturers and offices: floor care, stripping and waxing plus nightly janitorial around your shifts. Free quote, written scope.",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-gardner-ma",
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

export default function GardnerCommercialCleaningPage() {
  const city = getCityBySlug(SLUG);
  if (!city) notFound();
  return <CityPageTemplate city={city} heroImageIndex={11} />;
}
