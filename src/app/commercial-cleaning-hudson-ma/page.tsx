import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/data/cities";
import { CityPageTemplate } from "@/components/templates/city-page-template";

const SLUG = "hudson-ma";

export const metadata: Metadata = {
  title: { absolute: "Commercial Cleaning Hudson, MA | 4x WBJ Award Winner" },
  description: "Hudson downtown offices, retail and light industrial: 4x WBJ Best of Business cleaning crews, 97% retention. Free walkthrough, written quote.",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-hudson-ma",
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

export default function HudsonCommercialCleaningPage() {
  const city = getCityBySlug(SLUG);
  if (!city) notFound();
  return <CityPageTemplate city={city} heroImageIndex={22} />;
}
