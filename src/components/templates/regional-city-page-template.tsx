import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneCall, ShieldCheck, Clock, Building2,
  MapPin, Trophy, Users, ArrowRight, CheckCircle2,
  CalendarCheck, Briefcase, Sparkles, Factory,
  Stethoscope, GraduationCap, Truck, ChevronDown,
  ChevronRight, Droplets, UserCheck, Navigation
} from "lucide-react";
import {
  RegionalCityData,
  findRegionalCity,
  regionalCitiesByRegion,
} from "@/data/regional-cities";

interface RegionalCityPageTemplateProps {
  city: RegionalCityData;
  heroImageIndex?: number;
}

const SITE_URL = "https://www.enterprisecleaningcorp.com";
const PHONE_DISPLAY = "(508) 890-1000";
const PHONE_HREF = "tel:5088901000";

const HERO_IMAGES = [
  { src: "/images/office_cleaning_hero.png", alt: "Office cleaning" },
  { src: "/images/commercial-cleaning-entrprice.jpeg", alt: "Commercial cleaning team" },
  { src: "/images/janitorial_services_hero.jpg", alt: "Janitorial and floor care services" },
  { src: "/images/commercial-cleaning-pro.png", alt: "Commercial building cleaning" },
  { src: "/images/day_night_cleaning_hero.png", alt: "Day and night commercial cleaning" },
  { src: "/images/property_management_hero.png", alt: "Commercial property cleaning" },
  { src: "/images/industrial_cleaning_hero.png", alt: "Industrial facility cleaning" },
  { src: "/images/warehouse_cleaning_hero.png", alt: "Warehouse cleaning" },
  { src: "/images/medical_office_cleaning_hero.jpg", alt: "Medical office cleaning" },
];

const SERVICE_CONFIG: Record<string, { icon: React.ElementType; href: string }> = {
  "Office cleaning": { icon: Briefcase, href: "/office-cleaning" },
  "Janitorial services": { icon: Clock, href: "/janitorial-services" },
  "Medical office cleaning": { icon: Stethoscope, href: "/medical-office-cleaning" },
  "Day porter services": { icon: UserCheck, href: "/janitorial-services" },
  "Floor care": { icon: Sparkles, href: "/floor-care-services-central-ma" },
  "Post-construction cleaning": { icon: Building2, href: "/post-construction-cleaning-massachusetts" },
  "Window cleaning and pressure washing": { icon: Droplets, href: "/specialty-cleaning-services-central-ma" },
  "Turnover cleaning": { icon: CalendarCheck, href: "/turnover-cleaning-central-ma" },
};

const INDUSTRY_CONFIG: Record<string, { icon: React.ElementType; href: string }> = {
  "Manufacturing and industrial facilities": { icon: Factory, href: "/manufacturing-industrial-cleaning-central-ma" },
  "Medical and healthcare facilities": { icon: Stethoscope, href: "/medical-healthcare-cleaning-central-ma" },
  "Corporate offices and financial services": { icon: Briefcase, href: "/office-financial-cleaning-central-ma" },
  "Education and municipal buildings": { icon: GraduationCap, href: "/school-municipal-cleaning-central-ma" },
  "Property management and commercial real estate": { icon: Building2, href: "/property-management-cleaning-central-ma" },
  "Warehouses and distribution centers": { icon: Truck, href: "/warehouse-distribution-cleaning-central-ma" },
};

// In-copy contextual links. Longer phrases win over phrases they contain
// (e.g. "medical office cleaning" before "office cleaning"); each phrase links once per paragraph.
const COPY_LINKS: Record<string, string> = {
  "West Boylston": "/commercial-cleaning-west-boylston-ma",
  "medical office cleaning": "/medical-office-cleaning",
  "commercial janitorial services": "/janitorial-services",
  "janitorial services": "/janitorial-services",
  "office cleaning": "/office-cleaning",
  "warehouse cleaning": "/warehouse-distribution-cleaning-central-ma",
  "post construction cleaning services": "/post-construction-cleaning-massachusetts",
  "commercial tile and grout cleaning": "/floor-care-services-central-ma",
  "commercial floor waxing": "/floor-care-services-central-ma",
  "contact page": "/contact",
  "(508) 890-1000": PHONE_HREF,
};

const LINK_CLASS = "text-[#0090c8] font-semibold hover:underline";

function linkify(text: string, links: Record<string, string> = COPY_LINKS): React.ReactNode[] {
  const phrases = Object.keys(links).sort((a, b) => b.length - a.length);
  const lower = text.toLowerCase();
  const matches: { start: number; end: number; href: string }[] = [];
  for (const phrase of phrases) {
    const start = lower.indexOf(phrase.toLowerCase());
    if (start === -1) continue;
    const end = start + phrase.length;
    if (matches.some(m => start < m.end && end > m.start)) continue;
    matches.push({ start, end, href: links[phrase] });
  }
  matches.sort((a, b) => a.start - b.start);

  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  matches.forEach((m, i) => {
    if (m.start > cursor) nodes.push(text.slice(cursor, m.start));
    const label = text.slice(m.start, m.end);
    nodes.push(
      m.href.startsWith("/") ? (
        <Link key={i} href={m.href} className={LINK_CLASS}>{label}</Link>
      ) : (
        <a key={i} href={m.href} className={LINK_CLASS}>{label}</a>
      )
    );
    cursor = m.end;
  });
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

export function regionalCityMetadata(city: RegionalCityData, heroImageIndex = 0): Metadata {
  const pageUrl = `${SITE_URL}/${city.slug}`;
  const heroImage = HERO_IMAGES[heroImageIndex % HERO_IMAGES.length];
  const keywords = Array.from(new Set([city.primaryKeyword, ...city.keywords]));
  return {
    title: { absolute: city.metaTitle },
    description: city.metaDescription,
    keywords: keywords.join(", "),
    alternates: { canonical: pageUrl },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: pageUrl,
      siteName: "Enterprise Cleaning Corporation",
      locale: "en_US",
      type: "website",
      images: [{ url: heroImage.src, alt: `${heroImage.alt} in ${city.city}, ${city.state}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: city.metaTitle,
      description: city.metaDescription,
      images: [heroImage.src],
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
}

/** Splits "Best commercial cleaning company in Springfield, MA" so the location can be highlighted. */
function splitH1(h1: string): [string, string] {
  const idx = h1.lastIndexOf(" in ");
  return idx === -1 ? [h1, ""] : [h1.slice(0, idx), h1.slice(idx + 1)];
}

export function RegionalCityPageTemplate({ city, heroImageIndex = 0 }: RegionalCityPageTemplateProps) {
  const pageUrl = `${SITE_URL}/${city.slug}`;
  const location = `${city.city}, ${city.state}`;
  const heroImage = HERO_IMAGES[heroImageIndex % HERO_IMAGES.length];
  const [h1Lead, h1Location] = splitH1(city.h1);

  const regionGroups = regionalCitiesByRegion();
  const ownRegion = regionGroups.find(g => g.region === city.region);
  const sameStateRegions = regionGroups.filter(g => g.region !== city.region && g.cities[0].state === city.state);
  const otherStateRegions = regionGroups.filter(g => g.cities[0].state !== city.state);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        "url": pageUrl,
        "name": city.metaTitle,
        "description": city.metaDescription,
        "inLanguage": "en-US",
        "isPartOf": { "@type": "WebSite", "@id": `${SITE_URL}/#website`, "url": SITE_URL, "name": "Enterprise Cleaning Corporation" },
        "about": { "@id": `${pageUrl}#service` },
        "breadcrumb": { "@id": `${pageUrl}#breadcrumb` },
        "primaryImageOfPage": { "@type": "ImageObject", "url": `${SITE_URL}${heroImage.src}` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": `${SITE_URL}/#service-areas` },
          { "@type": "ListItem", "position": 3, "name": `Commercial Cleaning in ${location}`, "item": pageUrl },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        "name": `Commercial cleaning in ${location}`,
        "serviceType": "Commercial cleaning and janitorial services",
        "url": pageUrl,
        "description": `Office cleaning, janitorial, medical office cleaning, day porter, floor care, post-construction, window cleaning, and turnover cleaning for businesses in ${location}.`,
        "provider": {
          "@type": "ProfessionalService",
          "@id": `${SITE_URL}/#organization`,
          "name": "Enterprise Cleaning Corporation",
          "url": SITE_URL,
          "telephone": "+1-508-890-1000",
          "foundingDate": "2003",
          "image": `${SITE_URL}/images/ecc-new-logo.png`,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "99 Hartwell Street",
            "addressLocality": "West Boylston",
            "addressRegion": "MA",
            "postalCode": "01583",
            "addressCountry": "US",
          },
        },
        "areaServed": {
          "@type": "City",
          "name": city.city,
          "containedInPlace": { "@type": "State", "name": city.stateName },
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Commercial cleaning services",
          "itemListElement": city.services.items.map(svc => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": svc.name, "description": svc.description },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "mainEntity": city.faq.items.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(to right, #0090c8, #E31837, #FFE800)" }} />

        <div className="container mx-auto px-4 md:px-6">
          <nav aria-label="Breadcrumb" className="pt-6">
            <ol className="flex flex-wrap items-center gap-1 text-xs font-semibold text-slate-500">
              <li><Link href="/" className="hover:text-[#0090c8]">Home</Link></li>
              <li aria-hidden="true"><ChevronRight className="w-3 h-3" /></li>
              <li><Link href="/#service-areas" className="hover:text-[#0090c8]">Service Areas</Link></li>
              <li aria-hidden="true"><ChevronRight className="w-3 h-3" /></li>
              <li aria-current="page" className="text-slate-800">{location}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center lg:min-h-[520px]">
            {/* Left: Copy */}
            <div className="pt-6 pb-4 lg:py-14 pr-0 lg:pr-8 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0090c8] bg-[#0090c8]/8 border border-[#0090c8]/20 px-4 py-1.5 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#E31837]" />
                {city.subtitle} &bull; {city.region}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.1rem] font-black leading-[1.1] tracking-tight text-slate-900">
                {h1Lead}{h1Location && <><br /><span className="text-[#0090c8]">{h1Location}</span></>}
              </h1>

              <div className="space-y-3">
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-800">{city.intro.heading}</h2>
                {city.intro.paragraphs.map((p, i) => (
                  <p key={i} className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                    {linkify(p)}
                  </p>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#0090c8] text-white font-extrabold px-7 py-3.5 rounded-xl hover:bg-[#0078a8] transition-colors shadow-md shadow-[#0090c8]/25 text-base w-full sm:w-auto"
                >
                  Request a Free Walkthrough <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 text-slate-800 font-bold px-7 py-3.5 rounded-xl hover:bg-slate-50 transition-colors border border-slate-200 text-base w-full sm:w-auto"
                >
                  <PhoneCall className="w-4 h-4 text-[#0090c8]" />
                  {PHONE_DISPLAY}
                </a>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["Since 2003", "97% Client Retention", "4× WBJ Best of Business", "BBB Accredited Since 2007"].map(chip => (
                  <span key={chip} className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0090c8]" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Hero image */}
            <div className="relative block pb-10 lg:py-10">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200">
                <Image
                  src={heroImage.src}
                  alt={`${heroImage.alt} in ${location} by Enterprise Cleaning Corporation`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl flex items-center gap-2.5 sm:gap-3 border border-slate-100">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#E31837] flex items-center justify-center shrink-0">
                    <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-extrabold text-slate-900 text-xs sm:text-sm">4× Best of Business</div>
                    <div className="text-slate-500 text-[10px] sm:text-xs">Worcester Business Journal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-slate-900 text-white py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 md:divide-x divide-white/10">
            {[
              { val: "2003", label: "In Business Since" },
              { val: "97%", label: "Client Retention Rate" },
              { val: "4×", label: "WBJ Best of Business" },
              { val: "2007", label: "BBB Accredited Since" },
            ].map((s, i) => (
              <div key={i} className="px-2 md:px-8 py-1 text-center">
                <div className="text-2xl md:text-3xl font-black text-white">{s.val}</div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-semibold mt-0.5 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT THE CITY / BUSINESS ENVIRONMENT / HOW WE SERVE ─── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-3 space-y-10">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Local Focus</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">{city.about.heading}</h2>
                <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
                  {city.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-4">{city.business.heading}</h2>
                <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
                  {city.business.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
            </div>

            <aside className="lg:col-span-2 lg:sticky lg:top-28">
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0090c8]/10 flex items-center justify-center shrink-0">
                    <Navigation className="w-5 h-5 text-[#0090c8]" />
                  </div>
                  <h2 className="font-extrabold text-slate-900 text-lg sm:text-xl leading-tight">{city.approach.heading}</h2>
                </div>
                <div className="space-y-4 text-slate-600 text-sm font-medium leading-relaxed">
                  {city.approach.paragraphs.map((p, i) => <p key={i}>{linkify(p)}</p>)}
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center justify-center gap-2 bg-[#E31837] text-white font-extrabold px-6 py-3 rounded-xl hover:bg-[#c1122c] transition-colors text-sm w-full"
                >
                  Book a Free {city.city} Walkthrough <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ─── CORE CLEANING SERVICES ─── */}
      <section className="py-14 md:py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">What We Do</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{city.services.heading}</h2>
            <p className="text-slate-500 font-medium leading-relaxed">{city.services.intro}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {city.services.items.map((svc, idx) => {
              const cfg = SERVICE_CONFIG[svc.name] || { icon: Sparkles, href: "/contact" };
              const IconComp = cfg.icon;
              return (
                <Link key={idx} href={cfg.href} className="p-6 rounded-2xl bg-white border-2 border-slate-100 hover:border-[#0090c8]/40 hover:shadow-lg transition-all group text-left flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-[#0090c8]/8 flex items-center justify-center mb-5 transition-colors">
                      <IconComp className="w-6 h-6 text-[#0090c8]" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base mb-2 group-hover:text-[#0090c8] transition-colors">{svc.name}</h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{svc.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0090c8] mt-4">
                    Learn More <span className="sr-only">about {svc.name.toLowerCase()}</span> <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES WE SERVE ─── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Sectors Served</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{city.industries.heading}</h2>
            <p className="text-slate-500 font-medium">{city.industries.intro}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {city.industries.items.map((ind, idx) => {
              const cfg = INDUSTRY_CONFIG[ind.name] || { icon: Building2, href: "/contact" };
              const IconComp = cfg.icon;
              return (
                <Link key={idx} href={cfg.href} className="flex gap-4 bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 hover:border-[#0090c8]/40 hover:shadow-md transition-all group text-left">
                  <div className="w-11 h-11 rounded-xl bg-[#0090c8]/8 flex items-center justify-center shrink-0 group-hover:bg-[#0090c8]/15 transition-colors">
                    <IconComp className="w-5 h-5 text-[#0090c8]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-sm mb-1 group-hover:text-[#0090c8] transition-colors">{ind.name}</h3>
                    <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">{ind.description}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0090c8] mt-2">
                      View Services <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── AREAS WE SERVE ─── */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-[#00103A] to-[#0a2558] text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#00B8FF]">Neighborhoods &amp; Districts</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mt-2 mb-3">{city.areas.heading}</h2>
            <p className="text-slate-300 font-medium">{city.areas.intro}</p>
          </div>

          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {city.areas.items.map((area, idx) => (
              <li key={idx} className="flex gap-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5">
                <MapPin className="w-5 h-5 text-[#E31837] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-extrabold text-white text-base">{area.name}</h3>
                  <p className="text-slate-300 text-sm font-medium leading-relaxed mt-1">{area.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t border-white/15 pt-8">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-slate-300 mb-4">
              Nearby communities we plan to serve
            </h3>
            <ul className="flex flex-wrap gap-2">
              {city.areas.nearby.map(town => {
                const page = findRegionalCity(town, city.state);
                return (
                  <li key={town}>
                    {page ? (
                      <Link
                        href={`/${page.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold bg-[#0090c8] text-white px-3.5 py-2 rounded-full hover:bg-[#00B8FF] transition-colors"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        Commercial cleaning in {town}, {page.state}
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold bg-white/10 border border-white/15 text-slate-200 px-3.5 py-2 rounded-full">
                        {town}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US + HOW WE WORK ─── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">The Local Advantage</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">{city.why.heading}</h2>
              <ul className="space-y-3">
                {city.why.items.map((item, idx) => (
                  <li key={idx} className="flex gap-3 bg-slate-50 border border-slate-200 rounded-2xl p-4">
                    <ShieldCheck className="w-5 h-5 text-[#0090c8] shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-semibold text-sm sm:text-[0.95rem] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 text-sm">
                <Link href="/about" className={`${LINK_CLASS} inline-flex items-center gap-1`}>
                  Meet our owner-led team <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/success-stories" className={`${LINK_CLASS} inline-flex items-center gap-1`}>
                  Read client success stories <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Our Process</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">{city.process.heading}</h2>
              <ol className="space-y-4">
                {city.process.paragraphs.map((p, idx) => {
                  const StepIcon = [CalendarCheck, Users, PhoneCall][idx] || CheckCircle2;
                  return (
                    <li key={idx} className="flex gap-4 p-5 rounded-2xl border border-slate-200 hover:border-[#0090c8]/30 transition-colors">
                      <div className="flex flex-col items-center shrink-0">
                        <span className="text-2xl font-black text-[#0090c8]/40 leading-none">0{idx + 1}</span>
                        <StepIcon className="w-4 h-4 text-[#0090c8] mt-2" />
                      </div>
                      <p className="text-slate-600 text-sm font-medium leading-relaxed">{p}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQs ─── */}
      <section className="py-14 md:py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Common Questions</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">{city.faq.heading}</h2>
            </div>

            <div className="space-y-3">
              {city.faq.items.map((faq, index) => (
                <details key={index} className="group bg-white rounded-2xl border border-slate-200 hover:border-[#0090c8]/30 transition-colors overflow-hidden" open={index === 0}>
                  <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none font-extrabold text-slate-900 hover:text-[#0090c8] transition-colors text-sm sm:text-base [&::-webkit-details-marker]:hidden">
                    <h3>{faq.q}</h3>
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-5 sm:px-6 pb-6 text-slate-600 font-medium leading-relaxed text-sm border-t border-slate-200 pt-4">
                    {linkify(faq.a)}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MORE SERVICE AREAS (internal linking hub) ─── */}
      <section className="py-14 md:py-16 bg-white" aria-labelledby="more-service-areas">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="max-w-2xl mb-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Service Areas</p>
            <h2 id="more-service-areas" className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              More commercial cleaning service areas near {city.city}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ownRegion, ...sameStateRegions, ...otherStateRegions].filter(Boolean).map(group => {
              const g = group!;
              const others = g.cities.filter(c => c.slug !== city.slug);
              if (others.length === 0) return null;
              return (
                <div key={g.region} className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6">
                  <h3 className="font-extrabold text-slate-900 text-base mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#E31837]" />
                    {g.region}
                  </h3>
                  <ul className="space-y-2">
                    {others.map(c => (
                      <li key={c.slug}>
                        <Link href={`/${c.slug}`} className="text-sm font-semibold text-slate-700 hover:text-[#0090c8] inline-flex items-center gap-1.5">
                          <ChevronRight className="w-3.5 h-3.5 text-[#0090c8]" />
                          Commercial cleaning in {c.city}, {c.state}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6">
              <h3 className="font-extrabold text-slate-900 text-base mb-3 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#E31837]" />
                Central Massachusetts headquarters
              </h3>
              <ul className="space-y-2">
                {[
                  { href: "/commercial-cleaning-west-boylston-ma", label: "Commercial cleaning in West Boylston, MA" },
                  { href: "/commercial-cleaning-worcester-ma", label: "Commercial cleaning in Worcester, MA" },
                  { href: "/commercial-cleaning-sturbridge-ma", label: "Commercial cleaning in Sturbridge, MA" },
                  { href: "/#service-areas", label: "View all service areas" },
                ].map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm font-semibold text-slate-700 hover:text-[#0090c8] inline-flex items-center gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-[#0090c8]" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-14 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-3">Get Started</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">{city.cta.heading}</h2>
              <p className="text-slate-500 font-medium mt-4 leading-relaxed">{linkify(city.cta.text)}</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#E31837] text-white font-extrabold px-8 py-4 rounded-xl hover:bg-[#c1122c] transition-colors shadow-lg shadow-[#E31837]/25 text-base w-full sm:w-auto"
              >
                Request a Free Walkthrough <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 text-slate-800 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200 bg-white text-base w-full sm:w-auto"
              >
                <PhoneCall className="w-4 h-4 text-[#0090c8]" />
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-2">
              {["Owner-Led Since 2003", "97% Client Retention", "4× WBJ Best of Business", "BBB Accredited"].map(chip => (
                <span key={chip} className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0090c8]" />
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
