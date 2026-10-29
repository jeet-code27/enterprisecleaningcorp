import React from "react";
import { notFound } from "next/navigation";
import { getRegionalCityBySlug } from "@/data/regional-cities";
import { RegionalCityPageTemplate, regionalCityMetadata } from "@/components/templates/regional-city-page-template";

const SLUG = "best-commercial-cleaning-company-burlington-ma";
const HERO_IMAGE_INDEX = 0;

export const metadata = regionalCityMetadata(getRegionalCityBySlug(SLUG)!, HERO_IMAGE_INDEX);

export default function BurlingtonMaCommercialCleaningPage() {
  const city = getRegionalCityBySlug(SLUG);
  if (!city) notFound();
  return <RegionalCityPageTemplate city={city} heroImageIndex={HERO_IMAGE_INDEX} />;
}

