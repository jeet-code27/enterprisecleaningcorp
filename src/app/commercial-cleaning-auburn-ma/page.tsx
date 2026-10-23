import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/data/cities";
import { CityPageTemplate } from "@/components/templates/city-page-template";

const SLUG = "auburn-ma";

export const metadata: Metadata = {
  title: { absolute: "Commercial Cleaning Auburn, MA | Free Walkthrough & Quote" },
  description: "Retail, office or warehouse near I-290 and the Pike? Get nightly janitorial and floor care with 24/7 flood response. Free walkthrough, scope in writing.",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-auburn-ma",
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

export default function AuburnCommercialCleaningPage() {
  const city = getCityBySlug(SLUG);
  if (!city) notFound();
  return <CityPageTemplate city={city} heroImageIndex={0} />;
}
