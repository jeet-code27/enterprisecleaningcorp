import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/data/cities";
import { CityPageTemplate } from "@/components/templates/city-page-template";

const SLUG = "grafton-ma";

export const metadata: Metadata = {
  title: { absolute: "Commercial Cleaning Grafton, MA | Enterprise Cleaning Corp" },
  description: "Commercial cleaning for Grafton medical, veterinary and education sites plus offices on Routes 140 and 122. 4x WBJ Best of Business winner. Get a free quote.",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-grafton-ma",
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

export default function GraftonCommercialCleaningPage() {
  const city = getCityBySlug(SLUG);
  if (!city) notFound();
  return <CityPageTemplate city={city} heroImageIndex={12} />;
}
