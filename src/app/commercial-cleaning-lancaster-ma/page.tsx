import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/data/cities";
import { CityPageTemplate } from "@/components/templates/city-page-template";

const SLUG = "lancaster-ma";

export const metadata: Metadata = {
  title: { absolute: "Commercial Cleaning Lancaster, MA | Free Walkthrough" },
  description: "Lancaster offices and schools, cleaned on your schedule. Dedicated crew, written scope, no contract signed before you review it. Free walkthrough.",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-lancaster-ma",
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

export default function LancasterCommercialCleaningPage() {
  const city = getCityBySlug(SLUG);
  if (!city) notFound();
  return <CityPageTemplate city={city} heroImageIndex={10} />;
}
