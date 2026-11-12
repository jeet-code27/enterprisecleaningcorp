import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/data/cities";
import { CityPageTemplate } from "@/components/templates/city-page-template";

const SLUG = "holden-ma";

export const metadata: Metadata = {
  title: { absolute: "Property Management Cleaning Holden, MA | Commercial Cleaning" },
  description: "Commercial and property management cleaning in Holden, MA: common areas, turnovers and multi-tenant buildings, one accountable crew. Free walkthrough.",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-holden-ma",
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

export default function HoldenCommercialCleaningPage() {
  const city = getCityBySlug(SLUG);
  if (!city) notFound();
  return <CityPageTemplate city={city} heroImageIndex={1} />;
}
