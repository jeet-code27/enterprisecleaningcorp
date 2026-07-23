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
  title: { absolute: "Commercial Cleaning Worcester, MA | Enterprise Cleaning Corp" },
  description: "Commercial cleaning and janitorial services in Worcester, MA. 97% client retention, 4x WBJ award winner. Get a free quote from Enterprise Cleaning Corporation.",
  keywords: "Commercial cleaning services, commercial cleaning, janitorial services, office cleaning, commercial office cleaning, commercial cleaning services worcester, worcester commercial cleaning services, medical office cleaning worcester ma, post construction cleaning massachusetts",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-worcester-ma"
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
  "areaServed": { "@type": "City", "name": "Worcester, MA" },
  "url": "https://www.enterprisecleaningcorp.com/commercial-cleaning-worcester-ma"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What commercial cleaning services does Enterprise Cleaning Corporation offer in Worcester, MA?",
      "acceptedAnswer": { "@type": "Answer", "text": "We provide nightly janitorial, day porter services, floor care, window cleaning and pressure washing, post-construction cleaning, and turnover cleaning for offices, medical facilities, industrial buildings, and property management portfolios throughout Worcester." }
    },
    {
      "@type": "Question",
      "name": "How much does commercial cleaning cost in Worcester?",
      "acceptedAnswer": { "@type": "Answer", "text": "Pricing depends on square footage, cleaning frequency, and the services required. We provide a free on-site walkthrough and a written quote for every Worcester property before any contract is signed." }
    },
    {
      "@type": "Question",
      "name": "Does Enterprise Cleaning Corporation clean medical offices in Worcester?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We clean medical and healthcare administrative offices throughout Worcester, including outpatient clinics and healthcare-adjacent office space, using cleaning protocols built for facilities that serve patients." }
    },
    {
      "@type": "Question",
      "name": "How often should a Worcester office be professionally cleaned?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most Worcester offices are cleaned five nights a week, but the right frequency depends on foot traffic, square footage, and industry. We recommend a frequency during your free walkthrough." }
    },
    {
      "@type": "Question",
      "name": "Do you offer day porter services in Worcester?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our day porters work on-site during business hours to handle restocking, spot cleaning, and restroom checks for Worcester offices and commercial buildings that need daytime coverage in addition to nightly cleaning." }
    },
    {
      "@type": "Question",
      "name": "Can Enterprise Cleaning Corporation handle post-construction cleanup in Worcester?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We handle rough, final, and touch-up post-construction cleaning for contractors and developers completing projects in Worcester and the surrounding area." }
    },
    {
      "@type": "Question",
      "name": "Is Enterprise Cleaning Corporation local to Worcester?",
      "acceptedAnswer": { "@type": "Answer", "text": "Our headquarters is in West Boylston, just north of Worcester, and Worcester has been one of our primary service areas for more than two decades." }
    },
    {
      "@type": "Question",
      "name": "What industries does Enterprise Cleaning Corporation serve in Worcester?",
      "acceptedAnswer": { "@type": "Answer", "text": "We serve manufacturing and industrial facilities, medical and healthcare offices, corporate and financial offices, educational and municipal facilities, property management portfolios, and warehouses throughout Worcester." }
    },
    {
      "@type": "Question",
      "name": "How do I get a free cleaning quote for my Worcester property?",
      "acceptedAnswer": { "@type": "Answer", "text": "Call (508) 890-1000 or submit a quote request. We schedule a free on-site walkthrough of your Worcester property and provide a written proposal." }
    },
    {
      "@type": "Question",
      "name": "Why do Worcester businesses choose Enterprise Cleaning Corporation over other cleaning companies?",
      "acceptedAnswer": { "@type": "Answer", "text": "A 97% client retention rate, four Worcester Business Journal 'Best of Business' awards, BBB accreditation since 2007, and direct access to the owners rather than a franchise call center." }
    }
  ]
};

export default function WorcesterCityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataFAQ) }} />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-white">
        {/* Decorative top stripe */}
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(to right, #0090c8, #E31837, #FFE800)" }} />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[520px]">

            {/* Left: Copy */}
            <div className="py-12 lg:py-16 pr-0 lg:pr-8 space-y-7">

              {/* Breadcrumb pill */}
              <div className="inline-flex items-center gap-2 text-sm font-bold text-[#0090c8] bg-[#0090c8]/8 border border-[#0090c8]/20 px-4 py-1.5 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#E31837]" />
                Worcester, MA &bull; Central Massachusetts
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400 mb-3">City Service Hub</p>
                <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-black leading-[1.08] tracking-tight text-slate-900">
                  Commercial<br />
                  Cleaning Services<br />
                  <span className="text-[#0090c8]">in Worcester, MA</span>
                </h1>
              </div>

              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                Worcester is the commercial and institutional anchor of Central Massachusetts — and it's the market Enterprise Cleaning Corporation knows best. Our West Boylston headquarters puts us minutes from every major Worcester corridor.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0090c8] text-white font-extrabold px-7 py-3.5 rounded-xl hover:bg-[#0078a8] transition-colors shadow-md shadow-[#0090c8]/25 text-base"
                >
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:5088901000"
                  className="inline-flex items-center gap-2 text-slate-800 font-bold px-7 py-3.5 rounded-xl hover:bg-slate-50 transition-colors border border-slate-200 text-base"
                >
                  <PhoneCall className="w-4 h-4 text-[#0090c8]" />
                  (508) 890-1000
                </a>
              </div>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-3">
                {["97% Client Retention", "4× WBJ Award Winner", "BBB Accredited Since 2007", "20+ Years Local"].map(chip => (
                  <span key={chip} className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0090c8]" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Hero image — centered, rounded all sides */}
            <div className="relative hidden lg:block py-10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl border border-slate-200">
                <Image
                  src="/images/worcester_cleaning_hero.png"
                  alt="Commercial Cleaning in Worcester MA"
                  fill
                  sizes="50vw"
                  className="object-cover object-center"
                  priority
                />
                {/* Floating badge */}
                <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 border border-slate-100">
                  <div className="w-9 h-9 rounded-full bg-[#E31837] flex items-center justify-center shrink-0">
                    <Trophy className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-extrabold text-slate-900 text-sm">4× Best of Business</div>
                    <div className="text-slate-500 text-xs">Worcester Business Journal</div>
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
              { val: "23+", unit: "Years", label: "Serving Central MA" },
              { val: "97%", unit: "", label: "Client Retention Rate" },
              { val: "4×", unit: "", label: "WBJ Best of Business" },
              { val: "~4 mi", unit: "", label: "From Worcester HQ" },
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

      {/* ─── ABOUT WORCESTER ─── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Built for Worcester</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight max-w-3xl">
                Commercial Cleaning Built for Worcester's Business Community
              </h2>
            </div>
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Text — wider column */}
              <div className="lg:col-span-3 space-y-4 text-slate-600 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  Worcester is the commercial and institutional anchor of Central Massachusetts and the second-largest city in New England, with a downtown that has been rebuilding around Polar Park, CitySquare, and a growing biotech and medical corridor built on UMass Chan Medical School, UMass Memorial Health, and Saint Vincent Hospital. Add Worcester Polytechnic Institute, Clark University, and a dense ring of manufacturing and industrial parks along I-290 and I-190, and the result is a city with an unusually wide range of commercial cleaning needs in one ZIP code radius — hospital administrative wings, biotech office suites, downtown Class A towers, and industrial floor space, often within a few miles of each other.
                </p>
                <p>
                  Enterprise Cleaning Corporation is headquartered a few miles north of Worcester in West Boylston, which means Worcester is not a satellite market for us — it is the market we know best. We have served{" "}
                  <Link href="/manufacturing-industrial-cleaning-central-ma" className="text-[#0090c8] font-semibold hover:underline">industrial facilities</Link>,{" "}
                  <Link href="/medical-healthcare-cleaning-central-ma" className="text-[#0090c8] font-semibold hover:underline">medical office buildings</Link>, and corporate accounts throughout Worcester and Worcester County for more than 23 years, and our crews are on Worcester properties every night of the week.
                </p>
                <p>
                  Facility and property managers in Worcester are typically balancing several buildings, several vendors, and a limited amount of time to manage any of it closely. What they need from a cleaning company is not a sales pitch — it's a crew that shows up on schedule, a point of contact who answers the phone, and a level of consistency that means they stop thinking about cleaning altogether. That consistency is reflected in our 97% client retention rate: once a Worcester account signs with us, they tend to stay.
                </p>
                <p>
                  Because Worcester is where our own crews spend the most time, we've built scheduling experience across nearly every type of building the city has to offer — a downtown financial office that needs{" "}
                  <Link href="/day-and-night-shift-commercial-cleaning-services-central-ma" className="text-[#0090c8] font-semibold hover:underline">quiet, after-hours service</Link>;
                  {" "}a hospital administrative wing that needs discretion around active clinical space; and an{" "}
                  <Link href="/manufacturing-industrial-cleaning-central-ma" className="text-[#0090c8] font-semibold hover:underline">industrial building</Link>
                  {" "}on Route 20 that needs a crew comfortable working around forklifts and shift changes.
                </p>
              </div>

              {/* Neighborhoods — narrower column, stacked compactly */}
              <div className="lg:col-span-2">
                <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#0090c8]/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4 text-[#0090c8]" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base leading-tight">Neighborhoods & Districts</h3>
                  </div>
                  <div className="space-y-2">
                    {[
                      { area: "Downtown Worcester & CitySquare", detail: "Class A offices, financial & legal, retail" },
                      { area: "Worcester's Medical Corridor", detail: "UMass Chan, UMass Memorial Health office space" },
                      { area: "Green Island & Route 20 Industrial", detail: "Manufacturing, warehousing, light-industrial" },
                      { area: "Route 9 Corridor", detail: "Retail, professional offices, medical suites" },
                      { area: "Worcester Regional Airport Business Park", detail: "Corporate and logistics tenants" },
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
              Because our headquarters sits just north of the city, Worcester accounts get faster response times, a crew that already knows the building stock in the area — from downtown high-rises to Route 20 and Route 9 industrial parks — and direct access to ownership rather than a call center.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Clock, title: "23+ Years Local Experience", text: "More than two decades serving Central Massachusetts, Rhode Island, and Southern New Hampshire." },
              { icon: Users, title: "97% Client Retention Rate", text: "Reflecting unmatched consistency and long-term client trust — the highest in our market." },
              { icon: Trophy, title: "4× WBJ Award Winner", text: "Four-time Worcester Business Journal 'Best of Business' award winner, voted by the local community." },
              { icon: Award, title: "BBB Accredited Since 2007", text: "A track record of ethical business practices and responsive customer service spanning nearly two decades." },
              { icon: ShieldCheck, title: "Owner-Accessible Service", text: "You get direct access to leadership. No franchise ticket numbers. No call center runaround." },
              { icon: MapPin, title: "Minutes from Worcester", text: "Our West Boylston HQ puts us closer than any Boston-based company — faster response, better service." },
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
              Core Cleaning Services in Worcester, MA
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              Enterprise Cleaning Corporation provides a full range of commercial cleaning services to Worcester businesses, scaled to fit everything from a single office suite to a multi-building portfolio:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {([
              {
                icon: Clock,
                title: "Night & Day Cleaning",
                desc: "Recurring after-hours and daytime cleaning for offices, common areas, restrooms, and break rooms — scheduled around your business hours.",
                href: "/day-and-night-shift-commercial-cleaning-services-central-ma"
              },
              {
                icon: Sparkles,
                title: "Floor Care Services",
                desc: "Stripping, waxing, buffing, and polishing for VCT and hard-surface floors, plus scheduled carpet cleaning to protect flooring investments.",
                href: "/floor-care-services-central-ma"
              },
              {
                icon: Users,
                title: "Deep Cleaning",
                desc: "Thorough, restorative cleaning to revitalize your facility — ideal for spaces that need more than routine nightly service.",
                href: "/specialty-cleaning-services-central-ma"
              },
              {
                icon: Building2,
                title: "Flood Cleanup",
                desc: "24/7 emergency response for water, flood, and storm damage. Rapid mobilization to minimize disruption and restore your facility.",
                href: "/emergency-restoration-services-central-ma"
              },
              {
                icon: CalendarCheck,
                title: "Turnover Cleaning",
                desc: "Complete turnover cleaning for commercial suites and multi-tenant properties, built around the tight timelines property managers work with.",
                href: "/turnover-cleaning-central-ma"
              },
              {
                icon: Truck,
                title: "Post Construction",
                desc: "Detailed rough, final, and touch-up cleaning after construction projects — for contractors, developers, and property owners.",
                href: "/post-construction-cleaning-central-ma"
              },
            ] as { icon: React.ElementType; title: string; desc: string; href: string }[]).map((svc, idx) => (
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
              Industries We Serve in Worcester
            </h2>
            <p className="text-slate-500 font-medium">
              Our Worcester accounts span a range of industries, each with its own cleaning standards and scheduling requirements:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {([
              {
                icon: Factory,
                name: "Manufacturing & Industrial",
                desc: "Production floors, warehouses, and industrial office space that need cleaning built around shift schedules and safety requirements.",
                href: "/manufacturing-industrial-cleaning-central-ma"
              },
              {
                icon: Stethoscope,
                name: "Medical & Healthcare",
                desc: "Medical offices, outpatient clinics, and healthcare administrative space cleaned to the standards patients and staff expect.",
                href: "/medical-healthcare-cleaning-central-ma"
              },
              {
                icon: Briefcase,
                name: "Corporate Offices & Financial",
                desc: "Class A and Class B office space, financial and professional service offices where first impressions matter to clients and employees alike.",
                href: "/office-financial-cleaning-central-ma"
              },
              {
                icon: GraduationCap,
                name: "Educational & Municipal",
                desc: "Schools, municipal buildings, and public facilities cleaned around occupied schedules and public-use requirements.",
                href: "/school-municipal-cleaning-central-ma"
              },
              {
                icon: Building2,
                name: "Property Management & Real Estate",
                desc: "Multi-tenant office buildings, retail centers, and mixed-use properties where property and facility managers need one accountable vendor.",
                href: "/property-management-cleaning-central-ma"
              },
              {
                icon: Truck,
                name: "Warehouses & Distribution",
                desc: "Large-footprint logistics and distribution space that needs efficient, scheduled cleaning without interrupting operations.",
                href: "/warehouse-distribution-cleaning-central-ma"
              },
            ] as { icon: React.ElementType; name: string; desc: string; href: string }[]).map((ind, idx) => (
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

            {/* 4-step process row at top */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { num: "01", title: "Free On-Site Walkthrough", text: "A member of our team visits your Worcester property — no subcontractors, no sales reps." },
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

            {/* Full text below, single column — no blank gaps */}
            <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-[0.97rem] border-t border-slate-100 pt-8">
              <p>
                Every Worcester account starts the same way: a free, no-obligation walkthrough of your property with a member of our team, not a subcontractor or a franchise sales rep. We look at square footage, floor types, restroom count, tenant mix, and current pain points, then put together a written scope and price before any contract is signed.
              </p>
              <p>
                Once a schedule is set, your account gets a dedicated crew rather than a rotating pool of subcontracted labor, so the same people learn your building, your supply closets, and your particular quirks — a security system that needs a specific arm-and-disarm sequence, a{" "}
                <Link href="/floor-care-services-central-ma" className="text-[#0090c8] font-semibold hover:underline">floor that needs specialist care</Link>,
                {" "}a tenant who works late. Consistency in staffing is one of the most requested — and least delivered — things facility managers ask for from a cleaning vendor, and it's built into how we staff every Worcester account from day one.
              </p>
              <p>
                We check in regularly rather than waiting for a complaint, and because our ownership is directly reachable — not buried behind a franchise call center — issues get resolved in a conversation, not a ticket queue. That combination of a stable crew, a direct point of contact, and a willingness to actually show up when something needs attention is reflected in a 97% client retention rate across our full service area.
              </p>
              <p>
                Every Worcester crew is fully insured and bonded, trained on the equipment and cleaning chemicals used on your property, and briefed on any building-specific access, security, or safety requirements before their first shift. If your Worcester property needs{" "}
                <Link href="/post-construction-cleaning-central-ma" className="text-[#0090c8] font-semibold hover:underline">post-construction cleanup</Link>,{" "}
                <Link href="/turnover-cleaning-central-ma" className="text-[#0090c8] font-semibold hover:underline">turnover cleaning</Link>, or{" "}
                <Link href="/emergency-restoration-services-central-ma" className="text-[#0090c8] font-semibold hover:underline">emergency flood response</Link>,
                {" "}we build our onboarding around your requirements rather than asking you to work around us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREA + BANNER IMAGE ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/worcester_cleaning_banner.png"
            alt="Commercial cleaning in Worcester MA"
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
                Serving Worcester and the Surrounding Area
              </h2>
              <div className="space-y-4 text-slate-200 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  In addition to Worcester, Enterprise Cleaning Corporation regularly services commercial properties in the surrounding communities of Shrewsbury, West Boylston, Auburn, Holden, Millbury, and throughout the broader Central Massachusetts, Rhode Island, and Southern New Hampshire region.
                </p>
                <p>
                  For a Worcester facility or property manager, that translates into fewer emergencies, fewer complaints from tenants or staff about a dirty restroom or a streaky lobby floor, and one less vendor relationship to manage closely. You get a crew that already knows Worcester's building stock, a schedule that fits your hours, and a company that has been answering the phone in this market for more than 23 years.
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
                { icon: ShieldCheck, stat: "23+ Yrs", label: "Local Expertise" },
                { icon: Trophy, stat: "4×", label: "WBJ Best of Business" },
                { icon: Users, stat: "97%", label: "Client Retention" },
                { icon: MapPin, stat: "~4 mi", label: "From Worcester" },
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
                Frequently Asked Questions — Worcester, MA
              </h2>
              <p className="text-slate-500 font-medium">
                Common questions about our commercial cleaning services in Worcester.
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
                Ready to Upgrade Your Worcester Cleaning Service?
              </h2>
              <p className="text-slate-500 font-medium mt-4 leading-relaxed">
                Schedule a free, no-obligation walkthrough of your Worcester property. Receive a written proposal tailored to your building, schedule, and budget.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E31837] text-white font-extrabold px-8 py-4 rounded-xl hover:bg-[#c1122c] transition-colors shadow-lg shadow-[#E31837]/25 text-base"
              >
                Get a Free Worcester Quote <ArrowRight className="w-4 h-4" />
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
              {["Fully Insured & Bonded", "97% Client Retention", "4× WBJ Best of Business", "HQ Minutes Away"].map(chip => (
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
