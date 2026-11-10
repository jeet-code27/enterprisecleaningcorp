import raw from "./types-of-commercial-cleaning.json";

// "Types of commercial cleaning" reference listicle.
// Content source: Reference_Types_of_Commercial_Cleaning.docx

export interface CleaningType {
  n: number;
  name: string;
  definition: string;
  covers: string[];
  industries: string;
  frequency: string;
}

export interface CleaningTypesGuide {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  wordCount: number;
  cutToTheChase: string;
  atAGlance: string[];
  quickReference: { type: string; frequency: string; industries: string }[];
  typesIntro: string;
  types: CleaningType[];
  midCta: string;
  termsIntro: string;
  terms: { term: string; means: string; applies: string }[];
  steps: { title: string; text: string }[];
  about: string;
  faqs: { q: string; a: string }[];
  readyToTalk: string;
  citation: string;
  sources: { label: string; url: string }[];
}

export const cleaningTypesGuide: CleaningTypesGuide = raw;

/** ECC service pages that cover a type, keyed by entry number. Types ECC has no page for are left out. */
export const CLEANING_TYPE_SERVICE_LINKS: Record<number, { label: string; href: string }> = {
  1: { label: "Janitorial services", href: "/janitorial-services" },
  2: { label: "Office cleaning", href: "/office-cleaning" },
  3: { label: "Day porter and janitorial services", href: "/janitorial-services" },
  4: { label: "Deep and specialty cleaning", href: "/specialty-cleaning-services-central-ma" },
  6: { label: "Medical office cleaning", href: "/medical-office-cleaning" },
  8: { label: "Post-construction cleaning", href: "/post-construction-cleaning-massachusetts" },
  9: { label: "Commercial floor care", href: "/floor-care-services-central-ma" },
  10: { label: "Carpet care", href: "/floor-care-services-central-ma" },
  11: { label: "Tile and grout care", href: "/floor-care-services-central-ma" },
  12: { label: "Window cleaning", href: "/specialty-cleaning-services-central-ma" },
  14: { label: "Warehouse and distribution cleaning", href: "/warehouse-distribution-cleaning-central-ma" },
  16: { label: "School and municipal cleaning", href: "/school-municipal-cleaning-central-ma" },
  20: { label: "Turnover cleaning", href: "/turnover-cleaning-central-ma" },
};
