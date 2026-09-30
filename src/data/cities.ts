import citiesRaw from "./cities.json";

export interface CityService {
  name: string;
  copy: string;
}

export interface CityFAQ {
  q: string;
  a: string;
}

export interface CityData {
  city: string;
  state: string;
  slug: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroIntro: string;
  localHeading: string;
  localCopy: string;
  corridors: string;
  propertyTypes: string;
  whyCopy: string;
  nearby: string[];
  services: CityService[];
  faqs: CityFAQ[];
}

export const allCities: CityData[] = citiesRaw as CityData[];

// Filter out Boylston since commercial-cleaning-boylston-ma already exists natively
export const newCities: CityData[] = allCities.filter(c => c.slug !== "boylston-ma");

export function getCityBySlug(slug: string): CityData | undefined {
  return allCities.find(c => c.slug === slug);
}
