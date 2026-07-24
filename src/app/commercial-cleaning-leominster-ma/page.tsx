import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneCall, ShieldCheck, Clock, Building2,
  MapPin, Trophy, Users, ArrowRight, CheckCircle2,
  CalendarCheck, Briefcase, Sparkles, Factory,
  Stethoscope, GraduationCap, Truck, Award, ChevronDown
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Commercial Cleaning Leominster, MA | Enterprise Cleaning Corp" },
  description: "Commercial cleaning and janitorial services in Leominster, MA. Serving manufacturing, medical device, and office facilities. Get a free quote today.",
  keywords: "commercial cleaning services, warehouse cleaning, commercial janitorial services, industrial cleaning services near me, industrial cleaning near me, medical office cleaning, commercial cleaning services massachusetts, post construction cleaning massachusetts, commercial cleaning leominster ma",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-leominster-ma"
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

const structuredDataService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Commercial Cleaning Services",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Enterprise Cleaning Corporation",
    "telephone": "+1-508-890-1000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "99 Hartwell Street, Suite B",
      "addressLocality": "West Boylston",
      "addressRegion": "MA",
      "postalCode": "01583",
      "addressCountry": "US"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Leominster, MA"
  },
  "url": "https://enterprisecleaningcorp.com/commercial-cleaning-leominster-ma"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Enterprise Cleaning Corporation serve Leominster, MA?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Leominster is part of our Massachusetts service area, including its manufacturing, medical device, and retail base along Route 2." }
    },
    {
      "@type": "Question",
      "name": "Do you clean manufacturing and industrial facilities in Leominster?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We serve manufacturing floors, warehouses, and industrial office space throughout Leominster, scheduling around production and shift timelines." }
    },
    {
      "@type": "Question",
      "name": "Can you clean medical device manufacturing facilities in Leominster?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We serve medical device and life-sciences manufacturers in Leominster, coordinating cleaning schedules with each facility's production requirements." }
    },
    {
      "@type": "Question",
      "name": "What cleaning services are available for Leominster manufacturers?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nightly janitorial, day porter services, floor care, warehouse cleaning, post-construction cleaning, and turnover cleaning." }
    },
    {
      "@type": "Question",
      "name": "How much does industrial cleaning cost in Leominster?",
      "acceptedAnswer": { "@type": "Answer", "text": "Pricing depends on square footage, facility type, and frequency. We provide a free on-site walkthrough and written quote for every Leominster facility." }
    },
    {
      "@type": "Question",
      "name": "Do you clean retail space near the Mall at Whitney Field in Leominster?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We serve retail centers throughout Leominster in addition to our manufacturing and industrial accounts." }
    },
    {
      "@type": "Question",
      "name": "How often should a manufacturing facility in Leominster be cleaned?",
      "acceptedAnswer": { "@type": "Answer", "text": "Frequency depends on production volume and shift schedule. We recommend a cleaning plan after a free walkthrough of your Leominster facility." }
    },
    {
      "@type": "Question",
      "name": "Does Enterprise Cleaning Corporation offer day porter services in Leominster?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Day porter coverage is available for Leominster facilities that need daytime cleaning support in addition to nightly service." }
    },
    {
      "@type": "Question",
      "name": "What industries does Enterprise Cleaning Corporation serve in Leominster?",
      "acceptedAnswer": { "@type": "Answer", "text": "Manufacturing and industrial facilities, medical device production, warehouses and distribution, and retail throughout Leominster." }
    },
    {
      "@type": "Question",
      "name": "How do I get a cleaning quote for my Leominster facility?",
      "acceptedAnswer": { "@type": "Answer", "text": "Call (508) 890-1000 to schedule a free walkthrough and receive a written proposal for your Leominster facility." }
    }
  ]
};

export default function LeominsterCityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataFAQ) }} />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(to right, #0090c8, #E31837, #FFE800)" }} />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[520px]">

            {/* Left: Copy */}
            <div className="py-12 lg:py-16 pr-0 lg:pr-8 space-y-7">
              <div className="inline-flex items-center gap-2 text-sm font-bold text-[#0090c8] bg-[#0090c8]/8 border border-[#0090c8]/20 px-4 py-1.5 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#E31837]" />
                Leominster, MA &bull; North Central MA Hub
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400 mb-2 sm:mb-3">City Service Hub</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black leading-[1.1] tracking-tight text-slate-900">
                  Commercial<br />
                  Cleaning Services<br />
                  <span className="text-[#0090c8]">in Leominster, MA</span>
                </h1>
              </div>

              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                Leominster is the second-largest city in Worcester County and the manufacturing capital of North Central MA. Enterprise Cleaning Corporation provides specialized janitorial, floor care, and industrial cleaning built around production schedules.
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
                  src="/images/leominster_cleaning_hero.png"
                  alt="Commercial Cleaning in Leominster MA"
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
              { val: "Rte 2", unit: "", label: "Industrial Corridor" },
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

      {/* ─── ABOUT LEOMINSTER ─── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Built for Leominster</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight max-w-3xl">
                Commercial Cleaning Built for Leominster&apos;s Business Community
              </h2>
            </div>
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Text — wider column */}
              <div className="lg:col-span-3 space-y-4 text-slate-600 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  Leominster is the second-largest city in Worcester County, with a population of roughly 44,000, and it carries a manufacturing identity that goes back more than a century. Long known as the birthplace of the American plastics industry and still called the &quot;Plastic Capital of New England,&quot; Leominster is home to more than 120 manufacturing companies producing everything from medical devices and life-science products to consumer goods and military equipment. The Route 2 corridor gives the city fast access to the rest of North Central Massachusetts, and retail centers like the Mall at Whitney Field and Twin City Plaza have made Leominster one of the region&apos;s largest retail destinations alongside its industrial base.
                </p>
                <p>
                  That manufacturing heritage means Leominster facility managers are frequently responsible for production floors, warehouse space, and manufacturing-adjacent office areas — spaces with very different cleaning requirements than a standard downtown office. Medical device and life-sciences manufacturers in particular need cleaning schedules and protocols that respect production timelines and facility-specific requirements.
                </p>
                <p>
                  Enterprise Cleaning Corporation serves Leominster&apos;s{" "}
                  <Link href="/manufacturing-industrial-cleaning-central-ma" className="text-[#0090c8] font-semibold hover:underline">manufacturing, medical device</Link>, and retail base with cleaning plans built around production schedules rather than generic office hours, offering{" "}
                  <Link href="/day-and-night-shift-commercial-cleaning-services-central-ma" className="text-[#0090c8] font-semibold hover:underline">nightly janitorial, day porter</Link>, and{" "}
                  <Link href="/floor-care-services-central-ma" className="text-[#0090c8] font-semibold hover:underline">floor care standards</Link>
                  {" "}backed by the same reliability that has earned a 97% client retention rate across our full Central Massachusetts service area.
                </p>
                <p>
                  More than 120 manufacturing companies operate in Leominster today, many of them running multiple shifts. A cleaning schedule built for a downtown office doesn&apos;t work for a production floor that never fully stops — we coordinate around shift changes, break schedules, and production windows so cleaning happens without slowing down the line.
                </p>
              </div>

              {/* Neighborhoods — narrower column */}
              <div className="lg:col-span-2">
                <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#0090c8]/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4 text-[#0090c8]" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base leading-tight">Neighborhoods &amp; Districts</h3>
                  </div>
                  <p className="text-slate-500 text-xs font-medium mb-4">Enterprise Cleaning Corporation serves commercial properties throughout Leominster, including:</p>
                  <div className="space-y-2">
                    {[
                      { area: "Route 2 Industrial Corridor", detail: "Plastics, medical device, and general manufacturing plants" },
                      { area: "Mall at Whitney Field & Twin City Plaza", detail: "Major retail centers & commercial shopping strips" },
                      { area: "Downtown Leominster", detail: "Municipal and small professional office suites" },
                      { area: "North Leominster MBTA Area", detail: "Office and light-industrial space near the commuter station" },
                    ].map((d, i) => (
                      <div key={i} className="flex gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                        <MapPin className="w-3.5 h-3.5 text-[#E31837] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-bold text-slate-800 text-xs">{d.area}</div>
                          <div className="text-slate-400 text-xs font-medium mt-0.5">{d.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
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
              Leominster&apos;s manufacturing and medical device base calls for cleaning schedules that work around shift changes and production timelines, which is the kind of scheduling we&apos;ve built experience with across Worcester County&apos;s industrial base.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Clock, title: "23+ Years Regional Experience", text: "More than two decades serving Central Massachusetts, Rhode Island, and Southern New Hampshire." },
              { icon: Users, title: "97% Client Retention Rate", text: "Reflecting unmatched consistency and long-term client trust — the highest in our market." },
              { icon: Trophy, title: "4× WBJ Award Winner", text: "Four-time Worcester Business Journal 'Best of Business' award winner, voted by the local community." },
              { icon: Award, title: "BBB Accredited Since 2007", text: "A track record of ethical business practices and responsive customer service spanning nearly two decades." },
              { icon: ShieldCheck, title: "Owner-Accessible Service", text: "You get direct access to leadership. No franchise ticket numbers. No call center runaround." },
              { icon: MapPin, title: "Industrial & Medical Experts", text: "Proven care for plastics, medical device plants, warehouses, and commercial space across Leominster." },
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

      {/* ─── SERVICES ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Core Cleaning Services in Leominster, MA
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              Enterprise Cleaning Corporation provides a full range of commercial cleaning services to Leominster businesses, scaled to fit everything from a single office suite to a multi-building portfolio:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {(([
              {
                icon: Clock,
                title: "Night & Day Cleaning",
                desc: "Recurring after-hours cleaning for offices, common areas, restrooms, and break rooms, scheduled around your business hours so cleaning never disrupts operations.",
                href: "/day-and-night-shift-commercial-cleaning-services-central-ma"
              },
              {
                icon: Users,
                title: "Day Porter Services",
                desc: "On-site daytime staff who handle restocking, spot-cleaning, restroom checks, and light maintenance while your facility is open and in use.",
                href: "/day-and-night-shift-commercial-cleaning-services-central-ma"
              },
              {
                icon: Sparkles,
                title: "Floor Care Services",
                desc: "Stripping, waxing, buffing, and polishing for VCT and hard-surface floors, plus scheduled carpet cleaning to protect flooring investments and maintain a professional appearance.",
                href: "/floor-care-services-central-ma"
              },
              {
                icon: Building2,
                title: "Specialty Exterior Cleaning",
                desc: "Window cleaning and pressure washing for building exteriors, walkways, loading docks, and parking areas.",
                href: "/specialty-cleaning-services-central-ma"
              },
              {
                icon: CalendarCheck,
                title: "Post Construction",
                desc: "Rough, final, and touch-up cleaning phases for contractors, developers, and property owners bringing a newly built or renovated space online.",
                href: "/post-construction-cleaning-central-ma"
              },
              {
                icon: Truck,
                title: "Turnover Cleaning",
                desc: "Fast, thorough cleaning between tenants for commercial suites, apartment units, and multi-tenant properties, built around the tight timelines property managers work with.",
                href: "/turnover-cleaning-central-ma"
              },
            ]) as { icon: React.ElementType; title: string; desc: string; href: string }[]).map((svc, idx) => (
              <Link key={idx} href={svc.href} className="p-6 rounded-2xl border-2 border-slate-100 hover:border-[#0090c8]/40 hover:shadow-lg transition-all group text-left block">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-[#0090c8]/8 flex items-center justify-center mb-5 transition-colors">
                  <svc.icon className="w-6 h-6 text-[#0090c8]" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-2 group-hover:text-[#0090c8] transition-colors">{svc.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{svc.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0090c8] mt-3">
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Sectors Served</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Industries We Serve in Leominster
            </h2>
            <p className="text-slate-500 font-medium">
              Our Leominster accounts span a range of industries, each with its own cleaning standards and scheduling requirements:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {(([
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
            ]) as { icon: React.ElementType; name: string; desc: string; href: string }[]).map((ind, idx) => (
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

      {/* ─── HOW IT WORKS (PROCESS) ─── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Our Process</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                How We Build Your Cleaning Plan
              </h2>
            </div>

            {/* 4-step grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { num: "01", title: "Free On-Site Walkthrough", text: "A member of our team visits your Leominster property — no subcontractors, no sales reps." },
                { num: "02", title: "Written Scope & Proposal", text: "We deliver a detailed written scope and transparent price. No contract signed before you review it." },
                { num: "03", title: "Dedicated Crew Assignment", text: "The same crew, every visit. They learn your building, access needs, and your schedule." },
                { num: "04", title: "Regular Check-Ins", text: "We proactively follow up — ownership is directly reachable, not buried behind a call center." },
              ].map((step, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0090c8]/30 transition-colors text-left">
                  <div className="text-3xl font-black text-[#0090c8]/20 leading-none font-mono mb-3">{step.num}</div>
                  <div className="font-extrabold text-slate-900 text-sm mb-1.5">{step.title}</div>
                  <div className="text-slate-500 text-xs font-medium leading-relaxed">{step.text}</div>
                </div>
              ))}
            </div>

            {/* Full text — no blank gap */}
            <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-[0.97rem] border-t border-slate-100 pt-8">
              <p>
                Every Leominster account starts the same way: a free, no-obligation walkthrough of your property with a member of our team, not a subcontractor or a franchise sales rep. We look at square footage, floor types, restroom count, tenant mix, and current pain points, then put together a written scope and price before any contract is signed.
              </p>
              <p>
                Once a schedule is set, your account gets a dedicated crew rather than a rotating pool of subcontracted labor, so the same people learn your building, your supply closets, and your particular quirks — a security system that needs a specific arm-and-disarm sequence, a{" "}
                <Link href="/floor-care-services-central-ma" className="text-[#0090c8] font-semibold hover:underline">floor that scuffs easily</Link>,
                {" "}a tenant who works late. Consistency in staffing is one of the most requested — and least delivered — things facility managers ask for from a cleaning vendor, and it&apos;s built into how we staff every Leominster account from day one.
              </p>
              <p>
                We check in regularly rather than waiting for a complaint, and because our ownership is directly reachable — not buried behind a franchise call center — issues get resolved in a conversation, not a ticket queue. That combination of a stable crew, a direct point of contact, and a willingness to actually show up when something needs attention is reflected in a 97% client retention rate across our full service area.
              </p>
              <p>
                Every Leominster crew is fully insured and bonded, trained on the equipment and cleaning chemicals used on your property, and briefed on any building-specific access, security, or safety requirements before their first shift. If your Leominster property has a facility handbook, badge-in procedure, or vendor compliance requirement, we build our onboarding around it rather than asking you to work around us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREA + BANNER ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/leominster_cleaning_banner.png"
            alt="Commercial cleaning in Leominster MA"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8]">Regional Coverage</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Serving Leominster and the Surrounding Area
              </h2>
              <div className="space-y-4 text-slate-200 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  In addition to Leominster, Enterprise Cleaning Corporation regularly services commercial properties in the surrounding communities of Fitchburg, Lancaster, Sterling, Lunenburg, and throughout the broader Central Massachusetts, Rhode Island, and Southern New Hampshire region.
                </p>
                <p>
                  For a Leominster plant manager or facilities director, that means a cleaning vendor who treats a manufacturing floor&apos;s shift schedule as the starting point for planning, not an inconvenience to work around — and who understands that a medical device manufacturer&apos;s cleanliness expectations are not the same as a warehouse&apos;s.
                </p>
              </div>
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
                { icon: MapPin, stat: "Rte 2", label: "Manufacturing Corridor" },
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
                Frequently Asked Questions — Leominster, MA
              </h2>
              <p className="text-slate-500 font-medium">
                Common questions about our commercial cleaning services in Leominster.
              </p>
            </div>

            <div className="space-y-3">
              {structuredDataFAQ.mainEntity.map((faq, index) => (
                <details key={index} className="group bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#0090c8]/30 transition-colors overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-extrabold text-slate-900 hover:text-[#0090c8] transition-colors text-base">
                    <span>{faq.name}</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed text-sm border-t border-slate-200 pt-4">
                    {faq.acceptedAnswer.text}
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
                Get a Free Cleaning Quote for Your Leominster Property
              </h2>
              <p className="text-slate-500 font-medium mt-4 leading-relaxed">
                Enterprise Cleaning Corporation offers a free, no-obligation on-site walkthrough for every Leominster property. Call (508) 890-1000 or request a quote online to schedule yours and receive a written proposal built around your building, your schedule, and your budget.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E31837] text-white font-extrabold px-8 py-4 rounded-xl hover:bg-[#c1122c] transition-colors shadow-lg shadow-[#E31837]/25 text-base"
              >
                Get a Free Leominster Quote <ArrowRight className="w-4 h-4" />
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
              {["Fully Insured & Bonded", "97% Client Retention", "4× WBJ Best of Business", "Route 2 Corridor"].map(chip => (
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
