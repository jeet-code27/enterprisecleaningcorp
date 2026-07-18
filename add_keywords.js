const fs = require('fs');
const path = require('path');

const baseDir = "e:\\AAA BizBox\\New folder\\14 - Enterprice Cleaning\\enterprise-cleaning\\src\\app";

const keywordMap = {
  "office-financial-cleaning-central-ma": "commercial office cleaning Central MA, financial institution janitorial services, bank cleaning Worcester, corporate office cleaners, commercial cleaning services",
  "medical-healthcare-cleaning-central-ma": "commercial medical facility cleaning, healthcare clinic janitorial services, medical office cleaners Central MA, hospital cleaning Worcester, commercial cleaning services",
  "floor-care-services-central-ma": "commercial floor care Central MA, VCT stripping and waxing, commercial carpet cleaning Worcester, industrial floor maintenance, commercial floor cleaning services",
  "emergency-restoration-services-central-ma": "commercial emergency cleanup Central MA, 24/7 commercial water damage restoration, industrial flood cleanup Worcester, commercial disaster recovery cleaning",
  "manufacturing-industrial-cleaning-central-ma": "commercial industrial cleaning Central MA, manufacturing facility janitorial, factory cleaners Worcester, industrial plant cleaning services, commercial warehouse cleaning",
  "day-and-night-shift-commercial-cleaning-services-central-ma": "commercial day porter services, night shift janitorial Central MA, 24 hour commercial cleaning Worcester, office day porter, day and night commercial cleaners",
  "school-municipal-cleaning-central-ma": "commercial school cleaning Central MA, municipal building janitorial services, university cleaners Worcester, educational facility commercial cleaning",
  "warehouse-distribution-cleaning-central-ma": "commercial warehouse cleaning Central MA, distribution center janitorial services, industrial logistics cleaning Worcester, large scale commercial cleaners",
  "specialty-cleaning-services-central-ma": "commercial window cleaning Central MA, commercial pressure washing Worcester, specialty commercial cleaning services, industrial power washing",
  "turnover-cleaning-central-ma": "commercial turnover cleaning Central MA, apartment turnover cleaning services, commercial property turnover cleaners Worcester, tenant changeover cleaning",
  "real-estate-cleaning-central-ma": "commercial real estate cleaning Central MA, property showing cleaning services, real estate agency cleaners Worcester, commercial open house cleaning",
  "property-management-cleaning-central-ma": "commercial property management cleaning Central MA, multi-tenant building janitorial, common area commercial cleaning Worcester, HOA cleaning services",
  "post-construction-cleaning-central-ma": "commercial post-construction cleaning Central MA, new build cleaning services, commercial renovation cleanup Worcester, construction site final cleaning"
};

for (const [folder, keywords] of Object.entries(keywordMap)) {
  const filePath = path.join(baseDir, folder, "page.tsx");
  if (!fs.existsSync(filePath)) {
    console.log(`Skipped (not found): ${folder}/page.tsx`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('keywords:')) {
    // Find where description is and add keywords after it
    content = content.replace(/(description:\s*"[^"]*",)/, `$1\n  keywords: "${keywords}",`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Added keywords for: ${folder}/page.tsx`);
  } else {
    // Replace existing keywords
    content = content.replace(/keywords:\s*"[^"]*",/, `keywords: "${keywords}",`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Replaced existing keywords for: ${folder}/page.tsx`);
  }
}
