import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/data/cities";
import { CityPageTemplate } from "@/components/templates/city-page-template";

const SLUG = "northborough-ma";

export const metadata: Metadata = {
  title: { absolute: "Commercial Cleaning Northborough, MA | Enterprise Cleaning Corp" },
  description: "Commercial cleaning in Northborough, MA: janitorial, office, medical office, floor care, deep cleaning, flood cleanup, turnovers and post-construction. Free quote.",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-northborough-ma",
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

export default function NorthboroughCommercialCleaningPage() {
  const city = getCityBySlug(SLUG);
  if (!city) notFound();
  return <CityPageTemplate city={city} heroImageIndex={2} />;
}
