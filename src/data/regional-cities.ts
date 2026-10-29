import regionalCitiesRaw from "./regional-cities.json";

// Greater Boston, Western Massachusetts & Connecticut landing pages.
// Content source: scratch/Greater_Boston_Landing_Pages.docx & ECC_Western_MA_and_CT_Landing_Pages.docx

export interface RegionalNamedItem {
  name: string;
  description: string;
}

export interface RegionalFAQ {
  q: string;
  a: string;
}

export interface RegionalCityData {
  city: string;
  state: "MA" | "CT";
  stateName: string;
  slug: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  primaryKeyword: string;
  keywords: string[];
  longTail: string[];
  intro: { heading: string; paragraphs: string[] };
  about: { heading: string; paragraphs: string[] };
  business: { heading: string; paragraphs: string[] };
  approach: { heading: string; paragraphs: string[] };
  services: { heading: string; intro: string; items: RegionalNamedItem[] };
  industries: { heading: string; intro: string; items: RegionalNamedItem[] };
  areas: { heading: string; intro: string; items: RegionalNamedItem[]; nearby: string[] };
  why: { heading: string; items: string[] };
  process: { heading: string; paragraphs: string[] };
  faq: { heading: string; items: RegionalFAQ[] };
  cta: { heading: string; text: string };
}

export const regionalCities: RegionalCityData[] = regionalCitiesRaw as RegionalCityData[];

export function getRegionalCityBySlug(slug: string): RegionalCityData | undefined {
  return regionalCities.find(c => c.slug === slug);
}

/** Finds the landing page for a nearby town name within the same state, if one exists. */
export function findRegionalCity(name: string, state: string): RegionalCityData | undefined {
  return regionalCities.find(c => c.city === name && c.state === state);
}

/** Pages grouped by region, in document order (e.g. "Western Massachusetts", "Central Connecticut"). */
export function regionalCitiesByRegion(): { region: string; cities: RegionalCityData[] }[] {
  const groups: { region: string; cities: RegionalCityData[] }[] = [];
  for (const c of regionalCities) {
    const group = groups.find(g => g.region === c.region);
    if (group) group.cities.push(c);
    else groups.push({ region: c.region, cities: [c] });
  }
  return groups;
}
