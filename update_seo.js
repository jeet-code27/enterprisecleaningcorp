const fs = require('fs');
const path = require('path');

const baseDir = "e:\\AAA BizBox\\New folder\\14 - Enterprice Cleaning\\enterprise-cleaning\\src\\app";

const folders = [
  "office-financial-cleaning-central-ma",
  "medical-healthcare-cleaning-central-ma",
  "floor-care-services-central-ma",
  "emergency-restoration-services-central-ma",
  "manufacturing-industrial-cleaning-central-ma",
  "day-and-night-shift-commercial-cleaning-services-central-ma",
  "school-municipal-cleaning-central-ma",
  "warehouse-distribution-cleaning-central-ma",
  "specialty-cleaning-services-central-ma",
  "turnover-cleaning-central-ma",
  "real-estate-cleaning-central-ma",
  "property-management-cleaning-central-ma",
  "post-construction-cleaning-central-ma"
];

for (const folder of folders) {
  const filePath = path.join(baseDir, folder, "page.tsx");
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Replace title: "..." with title: { absolute: "..." }
  content = content.replace(/title:\s*"([^"]+)"/, 'title: { absolute: "$1" }');

  // 2. Add robots block if not present
  if (!content.includes('robots: {')) {
    // Find the end of the metadata block
    const metadataRegex = /(export const metadata: Metadata = \{[\s\S]*?)(\s*)\n};/;
    content = content.replace(metadataRegex, (match, p1, p2) => {
      let replacement = p1.trimEnd();
      // add comma if missing
      if (!replacement.endsWith(',')) {
        replacement += ',';
      }
      return `${replacement}\n  robots: {\n    index: true,\n    follow: true,\n    googleBot: {\n      index: true,\n      follow: true,\n      "max-video-preview": -1,\n      "max-image-preview": "large",\n      "max-snippet": -1,\n    },\n  },\n};`;
    });
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${folder}/page.tsx`);
  } else {
    console.log(`No changes needed or skipped: ${folder}/page.tsx`);
  }
}
