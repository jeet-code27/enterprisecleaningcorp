import React from "react";
import { notFound } from "next/navigation";
import { getRegionalCityBySlug } from "@/data/regional-cities";
import { RegionalCityPageTemplate, regionalCityMetadata } from "@/components/templates/regional-city-page-template";

const SLUG = "best-commercial-cleaning-company-norwich-ct";
const HERO_IMAGE_INDEX = 8;

export const metadata = regionalCityMetadata(getRegionalCityBySlug(SLUG)!, HERO_IMAGE_INDEX);

export default function NorwichCtCommercialCleaningPage() {
  const city = getRegionalCityBySlug(SLUG);
  if (!city) notFound();
  return <RegionalCityPageTemplate city={city} heroImageIndex={HERO_IMAGE_INDEX} />;
}
