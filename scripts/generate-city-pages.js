const fs = require('fs');
const path = require('path');

const cities = require('../src/data/cities.json');
const newCities = cities.filter(c => c.slug !== 'boylston-ma');

function toPascalCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

console.log(`Generating pages for ${newCities.length} cities...`);

newCities.forEach((city, index) => {
  const dirName = `commercial-cleaning-${city.slug}`;
  const targetDir = path.join(__dirname, '..', 'src', 'app', dirName);
  
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const funcName = `${toPascalCase(city.city)}CommercialCleaningPage`;
  const sanitizedDescription = city.metaDescription.replace(/"/g, '\\"');

  const content = `import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/data/cities";
import { CityPageTemplate } from "@/components/templates/city-page-template";

const SLUG = "${city.slug}";

export const metadata: Metadata = {
  title: { absolute: "${city.seoTitle}" },
  description: "${sanitizedDescription}",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-${city.slug}",
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

export default function ${funcName}() {
  const city = getCityBySlug(SLUG);
  if (!city) notFound();
  return <CityPageTemplate city={city} heroImageIndex={${index}} />;
}
`;

  const targetFile = path.join(targetDir, 'page.tsx');
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log(`Created: ${dirName}/page.tsx`);
});

console.log('All 24 city pages generated successfully!');
