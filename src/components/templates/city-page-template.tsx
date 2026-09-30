import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneCall, ShieldCheck, Clock, Building2,
  MapPin, Trophy, Users, ArrowRight, CheckCircle2,
  CalendarCheck, Briefcase, Sparkles, Factory,
  Stethoscope, GraduationCap, Truck, Award, ChevronDown
} from "lucide-react";
import { CityData } from "@/data/cities";

interface CityPageTemplateProps {
  city: CityData;
  heroImageIndex?: number;
}

const HERO_IMAGES = [
  { src: "/images/office_cleaning_hero.png", alt: "Office and commercial facility cleaning" },
  { src: "/images/commercial-cleaning-entrprice.jpeg", alt: "Professional commercial cleaning team" },
  { src: "/images/janitorial_services_hero.jpg", alt: "Commercial janitorial and floor care services" },
  { src: "/images/commercial-cleaning-pro.png", alt: "Commercial building deep cleaning" },
  { src: "/images/day_night_cleaning_hero.png", alt: "Day and night shift commercial cleaning" },
  { src: "/images/property_management_hero.png", alt: "Commercial property and facility maintenance" },
  { src: "/images/industrial_cleaning_hero.png", alt: "Industrial and commercial cleaning services" },
  { src: "/images/warehouse_cleaning_hero.png", alt: "Warehouse and commercial facility cleaning" },
];

const SERVICE_CONFIG: Record<string, { icon: React.ElementType; href: string }> = {
  "Janitorial Services": { icon: Clock, href: "/janitorial-services" },
  "Office Cleaning": { icon: Briefcase, href: "/office-cleaning" },
  "Medical Office Cleaning": { icon: Stethoscope, href: "/medical-office-cleaning" },
  "Floor Care Services": { icon: Sparkles, href: "/floor-care-services-central-ma" },
  "Deep Cleaning": { icon: Sparkles, href: "/specialty-cleaning-services-central-ma" },
  "Flood Cleanup": { icon: Truck, href: "/emergency-restoration-services-central-ma" },
  "Turnover Cleaning": { icon: CalendarCheck, href: "/turnover-cleaning-central-ma" },
  "Post Construction": { icon: Building2, href: "/post-construction-cleaning-central-ma" },
};

const INDUSTRIES = [
  {
    icon: Factory,
    name: "Manufacturing & Industrial Facilities",
    desc: "Production floors, warehouses, and industrial office space that need cleaning built around shift schedules and safety requirements.",
    href: "/manufacturing-industrial-cleaning-central-ma"
  },
  {
    icon: Stethoscope,
    name: "Medical & Healthcare Facilities",
    desc: "Medical offices, outpatient clinics, and healthcare administrative space cleaned to the standards patients and staff expect.",
    href: "/medical-healthcare-cleaning-central-ma"
  },
  {
    icon: Briefcase,
    name: "Corporate Offices & Financial Services",
    desc: "Class A and Class B office space, financial and professional service offices where first impressions matter to clients and employees alike.",
    href: "/office-financial-cleaning-central-ma"
  },
  {
    icon: GraduationCap,
    name: "Educational & Municipal Facilities",
    desc: "Schools, municipal buildings, and public facilities cleaned around occupied schedules and public-use requirements.",
    href: "/school-municipal-cleaning-central-ma"
  },
  {
    icon: Building2,
    name: "Property Management & Commercial Real Estate",
    desc: "Multi-tenant office buildings, retail centers, and mixed-use properties where property and facility managers need one accountable vendor across an entire portfolio.",
    href: "/property-management-cleaning-central-ma"
  },
  {
    icon: Truck,
    name: "Warehouses & Distribution Centers",
    desc: "Large-footprint logistics and distribution space that needs efficient, scheduled cleaning without interrupting receiving and shipping operations.",
    href: "/warehouse-distribution-cleaning-central-ma"
  },
];

export function CityPageTemplate({ city, heroImageIndex = 0 }: CityPageTemplateProps) {
  const pageUrl = `https://www.enterprisecleaningcorp.com/commercial-cleaning-${city.slug}`;
  const heroImage = HERO_IMAGES[heroImageIndex % HERO_IMAGES.length];

  const structuredDataService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Commercial Cleaning Services",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Enterprise Cleaning Corporation",
      "image": "https://www.enterprisecleaningcorp.com/images/ecc-new-logo.png",
      "telephone": "508-890-1000",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "99 Hartwell Street, Suite B",
        "addressLocality": "West Boylston",
        "addressRegion": "MA",
        "postalCode": "01583",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 42.3648,
        "longitude": -71.7854
      },
      "url": "https://www.enterprisecleaningcorp.com"
    },
    "areaServed": {
      "@type": "City",
      "name": `${city.city}, ${city.state}`
    },
    "url": pageUrl
  };

  const structuredDataFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": city.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const structuredDataBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.enterprisecleaningcorp.com/" },
      { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.enterprisecleaningcorp.com/#service-areas" },
      { "@type": "ListItem", "position": 3, "name": `${city.city}, ${city.state}`, "item": pageUrl }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataBreadcrumb) }} />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(to right, #0090c8, #E31837, #FFE800)" }} />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[520px]">

            {/* Left: Copy */}
            <div className="py-12 lg:py-16 pr-0 lg:pr-8 space-y-7">
              <div className="inline-flex items-center gap-2 text-sm font-bold text-[#0090c8] bg-[#0090c8]/8 border border-[#0090c8]/20 px-4 py-1.5 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#E31837]" />
                {city.eyebrow}
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400 mb-2 sm:mb-3">City Service Hub</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black leading-[1.1] tracking-tight text-slate-900">
                  {city.h1.includes(" in ") ? (
                    <>
                      {city.h1.split(" in ")[0]}<br />
                      <span className="text-[#0090c8]">in {city.h1.split(" in ")[1]}</span>
                    </>
                  ) : (
                    city.h1
                  )}
                </h1>
              </div>

              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                {city.heroIntro}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#0090c8] text-white font-extrabold px-7 py-3.5 rounded-xl hover:bg-[#0078a8] transition-colors shadow-md shadow-[#0090c8]/25 text-base w-full sm:w-auto"
                >
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:5088901000"
                  className="inline-flex items-center justify-center gap-2 text-slate-800 font-bold px-7 py-3.5 rounded-xl hover:bg-slate-50 transition-colors border border-slate-200 text-base w-full sm:w-auto"
                >
                  <PhoneCall className="w-4 h-4 text-[#0090c8]" />
                  (508) 890-1000
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                {["97% Client Retention", "4× WBJ Award Winner", "BBB Accredited Since 2007", "23+ Years Local"].map(chip => (
                  <span key={chip} className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0090c8]" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Hero image */}
            <div className="relative block pb-8 lg:py-10">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
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
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { val: "23+", unit: "Years", label: "Regional Experience" },
              { val: "97%", unit: "", label: "Client Retention Rate" },
              { val: "4×", unit: "", label: "WBJ Best of Business" },
              { val: "Since 2007", unit: "", label: "BBB Accredited" },
            ].map((s, i) => (
              <div key={i} className="px-4 md:px-8 py-2 text-center">
                <div className="text-2xl md:text-3xl font-black text-white">
                  {s.val}<span className="text-[#0090c8]">{s.unit}</span>
                </div>
                <div className="text-xs text-slate-400 font-semibold mt-0.5 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT CITY / LOCAL COMMUNITY ─── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Local Focus</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight max-w-3xl">
                {city.localHeading}
              </h2>
            </div>
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Text — wider column */}
              <div className="lg:col-span-3 space-y-4 text-slate-600 font-medium leading-relaxed text-[0.97rem]">
                <p>{city.localCopy}</p>
                <p>{city.whyCopy}</p>
                <p>
                  Enterprise Cleaning Corporation is headquartered in West Boylston and serves {city.city} and surrounding Central Massachusetts communities with{" "}
                  <Link href="/office-cleaning" className="text-[#0090c8] font-semibold hover:underline">nightly janitorial, day porter</Link>, and{" "}
                  <Link href="/floor-care-services-central-ma" className="text-[#0090c8] font-semibold hover:underline">commercial floor care</Link>.
                </p>
              </div>

              {/* Neighborhoods / Corridors — narrower column */}
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#0090c8]/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4 text-[#0090c8]" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base leading-tight">Key Commercial Corridors</h3>
                  </div>
                  <p className="text-slate-500 text-xs font-medium mb-4">Serving businesses along:</p>
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                    <span className="text-slate-800 font-bold text-xs sm:text-sm leading-relaxed">{city.corridors}</span>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#0090c8]/10 flex items-center justify-center shrink-0">
                      <Factory className="w-4 h-4 text-[#0090c8]" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base leading-tight">Property Types Supported</h3>
                  </div>
                  <p className="text-slate-500 text-xs font-medium mb-3">Facility types we regularly maintain:</p>
                  <p className="text-slate-700 font-semibold text-xs sm:text-sm leading-relaxed bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    {city.propertyTypes}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">The Local Advantage</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Why Local Businesses Choose Enterprise Cleaning Corporation
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              Serving {city.city} and neighboring communities with owner-operated accountability, dedicated staff, and 24/7 responsiveness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Clock, title: "23+ Years Regional Experience", text: "More than two decades serving Central Massachusetts, Rhode Island, and Southern New Hampshire." },
              { icon: Users, title: "97% Client Retention Rate", text: "Reflecting unmatched consistency and long-term client trust — the highest in our market." },
              { icon: Trophy, title: "4× WBJ Award Winner", text: "Four-time Worcester Business Journal 'Best of Business' award winner, voted by the local community." },
              { icon: Award, title: "BBB Accredited Since 2007", text: "A track record of ethical business practices and responsive customer service spanning nearly two decades." },
              { icon: ShieldCheck, title: "Owner-Accessible Service", text: "You get direct access to leadership. No franchise ticket numbers. No call center runaround." },
              { icon: MapPin, title: `Serving ${city.city} & Nearby`, text: `Quick dispatch across ${city.city} and surrounding communities including ${city.nearby.join(", ")}.` },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#0090c8]/30 hover:shadow-md transition-all text-left group">
                <div className="w-11 h-11 rounded-xl bg-[#0090c8]/8 flex items-center justify-center mb-4 group-hover:bg-[#0090c8]/15 transition-colors">
                  <item.icon className="w-5 h-5 text-[#0090c8]" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORE CLEANING SERVICES ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Core Cleaning Services in {city.city}, {city.state}
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              Enterprise Cleaning Corporation provides a full range of commercial cleaning services to {city.city} businesses, scaled to fit everything from a single office suite to a multi-building commercial facility:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {city.services.map((svc, idx) => {
              const cfg = SERVICE_CONFIG[svc.name] || { icon: Sparkles, href: "/contact" };
              const IconComp = cfg.icon;
              return (
                <Link key={idx} href={cfg.href} className="p-6 rounded-2xl border-2 border-slate-100 hover:border-[#0090c8]/40 hover:shadow-lg transition-all group text-left block flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-[#0090c8]/8 flex items-center justify-center mb-5 transition-colors">
                      <IconComp className="w-6 h-6 text-[#0090c8]" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base mb-2 group-hover:text-[#0090c8] transition-colors">{svc.name}</h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{svc.copy}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0090c8] mt-4">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES WE SERVE ─── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Sectors Served</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Industries We Serve in {city.city}
            </h2>
            <p className="text-slate-500 font-medium">
              Our accounts span a wide range of industries, each with its own cleaning standards and scheduling requirements:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind, idx) => (
              <Link key={idx} href={ind.href} className="flex gap-4 bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#0090c8]/40 hover:shadow-md transition-all group text-left">
                <div className="w-11 h-11 rounded-xl bg-[#0090c8]/8 flex items-center justify-center shrink-0 group-hover:bg-[#0090c8]/15 transition-colors">
                  <ind.icon className="w-5 h-5 text-[#0090c8]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm mb-1 group-hover:text-[#0090c8] transition-colors">{ind.name}</h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">{ind.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0090c8] mt-2">
                    View Services <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4-STEP WORKFLOW ─── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 text-center sm:text-left">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Our Process</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                How We Build Your Cleaning Plan in {city.city}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { num: "01", title: "Free On-Site Walkthrough", text: `A member of our team visits your ${city.city} property — no subcontractors, no sales reps.` },
                { num: "02", title: "Written Scope & Proposal", text: "We deliver a detailed written scope and transparent price. No contract signed before you review it." },
                { num: "03", title: "Dedicated Crew Assignment", text: "The same crew, every visit. They learn your building, access needs, and your schedule." },
                { num: "04", title: "Regular Check-Ins", text: "We proactively follow up — ownership is directly reachable, not buried behind a call center." },
              ].map((step, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0090c8]/30 transition-colors text-left">
                  <div className="text-3xl font-black text-[#0090c8]/30 mb-3">{step.num}</div>
                  <h3 className="font-extrabold text-slate-900 text-sm mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── REGIONAL BANNER ─── */}
      <section className="py-16 bg-gradient-to-br from-[#00103A] to-[#0a2558] text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0090c8]">Regional Service Area</span>
              <h2 className="text-2xl md:text-3xl font-black leading-tight">
                Serving {city.city} &amp; Surrounding Communities
              </h2>
              <p className="text-slate-300 text-sm font-medium leading-relaxed">
                In addition to {city.city}, Enterprise Cleaning Corporation provides scheduled commercial cleaning across nearby towns including {city.nearby.join(", ")}, and throughout Central Massachusetts, Rhode Island, and Southern New Hampshire.
              </p>
              <div className="flex gap-4 pt-2">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-slate-900 font-extrabold px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors shadow-lg text-sm">
                  Request a Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:5088901000" className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition-colors text-sm backdrop-blur-md">
                  <PhoneCall className="w-4 h-4 text-[#0090c8]" />
                  (508) 890-1000
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, stat: "23+ Yrs", label: "Regional Experience" },
                { icon: Trophy, stat: "4×", label: "WBJ Best of Business" },
                { icon: Users, stat: "97%", label: "Client Retention" },
                { icon: MapPin, stat: `${city.nearby.length}+`, label: "Nearby Towns" },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center hover:bg-white/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[#0090c8] mx-auto mb-2" />
                  <div className="text-2xl font-black text-white mb-0.5">{item.stat}</div>
                  <div className="text-xs text-slate-300 font-semibold">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQs ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Common Questions</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                Frequently Asked Questions — {city.city}, {city.state}
              </h2>
              <p className="text-slate-500 font-medium">
                Common questions about our commercial cleaning services in {city.city}.
              </p>
            </div>

            <div className="space-y-3">
              {city.faqs.map((faq, index) => (
                <details key={index} className="group bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#0090c8]/30 transition-colors overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-extrabold text-slate-900 hover:text-[#0090c8] transition-colors text-base">
                    <span>{faq.q}</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed text-sm border-t border-slate-200 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-3">Get Started</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Get a Free Cleaning Quote for Your {city.city} Property
              </h2>
              <p className="text-slate-500 font-medium mt-4 leading-relaxed">
                Enterprise Cleaning Corporation offers a free, no-obligation on-site walkthrough for every {city.city} property. Call (508) 890-1000 or request a quote online to receive a written proposal built around your building, your schedule, and your budget.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E31837] text-white font-extrabold px-8 py-4 rounded-xl hover:bg-[#c1122c] transition-colors shadow-lg shadow-[#E31837]/25 text-base"
              >
                Get a Free {city.city} Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:5088901000"
                className="inline-flex items-center gap-2 text-slate-800 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200 text-base"
              >
                <PhoneCall className="w-4 h-4 text-[#0090c8]" />
                (508) 890-1000
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {["Fully Insured & Bonded", "97% Client Retention", "4× WBJ Best of Business", "Local Service Area"].map(chip => (
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
