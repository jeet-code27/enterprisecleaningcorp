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
  title: { absolute: "Commercial Cleaning Waltham, MA | Enterprise Cleaning Corp" },
  description: "Commercial cleaning and janitorial services in Waltham, MA. Serving Route 128 biotech, tech, and corporate offices. Get a free quote today.",
  keywords: "commercial cleaning services, office cleaning services, commercial office cleaning services, commercial cleaning company, commercial cleaning services massachusetts, office cleaning services in massachusetts, corporate cleaning services near me, commercial disinfection services, commercial cleaning waltham ma",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-waltham-ma"
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
    "name": "Waltham, MA"
  },
  "url": "https://enterprisecleaningcorp.com/commercial-cleaning-waltham-ma"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Enterprise Cleaning Corporation serve Waltham, MA?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Waltham is part of our Massachusetts service area, covering Route 128 corporate and biotech offices as well as the Moody Street downtown district." }
    },
    {
      "@type": "Question",
      "name": "Do you clean biotech and life-sciences office space in Waltham?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We clean biotech-adjacent office suites in Waltham, coordinating cleaning schedules and protocols with each facility's compliance requirements." }
    },
    {
      "@type": "Question",
      "name": "What cleaning services are available for Route 128 offices in Waltham?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nightly janitorial, day porter coverage, floor care, window cleaning and pressure washing, post-construction cleaning, and turnover cleaning." }
    },
    {
      "@type": "Question",
      "name": "How much does commercial cleaning cost in Waltham?",
      "acceptedAnswer": { "@type": "Answer", "text": "Pricing depends on square footage, building type, and frequency. We provide a free on-site walkthrough and written quote for every Waltham property." }
    },
    {
      "@type": "Question",
      "name": "Do you clean businesses on Moody Street in downtown Waltham?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We serve retail and office tenants throughout the Moody Street commercial district in addition to Route 128 corporate accounts." }
    },
    {
      "@type": "Question",
      "name": "How often should a Waltham corporate office be professionally cleaned?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most Waltham offices are cleaned five nights a week; biotech and higher-traffic corporate spaces may require daily service." }
    },
    {
      "@type": "Question",
      "name": "Does Enterprise Cleaning Corporation offer day porter services in Waltham?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Day porter coverage is available for Waltham businesses that need daytime restocking and spot cleaning in addition to nightly service." }
    },
    {
      "@type": "Question",
      "name": "What industries does Enterprise Cleaning Corporation serve in Waltham?",
      "acceptedAnswer": { "@type": "Answer", "text": "Biotech and life sciences, corporate and technology offices, financial services, and property management portfolios throughout Waltham." }
    },
    {
      "@type": "Question",
      "name": "Is Enterprise Cleaning Corporation experienced with compliance-sensitive facilities?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We coordinate cleaning schedules and protocols with facility-specific compliance requirements, which is common among Waltham's biotech and life-sciences tenants." }
    },
    {
      "@type": "Question",
      "name": "How do I get a cleaning quote for my Waltham property?",
      "acceptedAnswer": { "@type": "Answer", "text": "Call (508) 890-1000 to schedule a free walkthrough and receive a written proposal for your Waltham property." }
    }
  ]
};

export default function WalthamCityPage() {
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
                Waltham, MA &bull; Route 128 Tech Corridor
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400 mb-2 sm:mb-3">City Service Hub</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black leading-[1.1] tracking-tight text-slate-900">
                  Commercial<br />
                  Cleaning Services<br />
                  <span className="text-[#0090c8]">in Waltham, MA</span>
                </h1>
              </div>

              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                Waltham anchors the Route 128/I-95 technology and biotech corridor. Enterprise Cleaning Corporation provides tailored commercial cleaning, janitorial, and floor care for corporate parks, biotech campuses, and Moody Street businesses.
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
                  src="/images/waltham_cleaning_hero.png"
                  alt="Commercial Cleaning in Waltham MA"
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
              { val: "Rte 128", unit: "", label: "Tech Corridor Coverage" },
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

      {/* ─── ABOUT WALTHAM ─── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Built for Waltham</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight max-w-3xl">
                Commercial Cleaning Built for Waltham&apos;s Business Community
              </h2>
            </div>
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Text — wider column */}
              <div className="lg:col-span-3 space-y-4 text-slate-600 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  Waltham anchors one of the most concentrated stretches of the Route 128/I-95 technology corridor — a stretch of Greater Boston sometimes referred to as &quot;America&apos;s Technology Highway&quot; — with roughly 4,800 businesses serving a population of about 66,000. Thermo Fisher Scientific&apos;s global headquarters sits on Presidential Way, anchoring a biotech and life-sciences cluster that includes companies like Arrakis Therapeutics and Upstream Bio, while Lionbridge and Rocket Software maintain major offices nearby. Bentley University and Brandeis University together enroll more than 12,000 students, feeding a steady pipeline of educated workers into Waltham&apos;s economy, and the Moody Street downtown district gives the city a walkable commercial core distinct from its corporate office parks.
                </p>
                <p>
                  That combination — biotech and life-sciences campuses, corporate office parks along Route 128, and a compact downtown commercial district on Moody Street — means Waltham facility managers are often responsible for buildings with very different compliance and appearance standards. A biotech office suite may need cleaning protocols suited to lab-adjacent space, while a Moody Street storefront needs a completely different service model.
                </p>
                <p>
                  Enterprise Cleaning Corporation brings the same reliability standards that have earned us a 97% client retention rate in Central Massachusetts to Waltham&apos;s biotech, corporate, and downtown business community, with{" "}
                  <Link href="/day-and-night-shift-commercial-cleaning-services-central-ma" className="text-[#0090c8] font-semibold hover:underline">nightly janitorial, day porter</Link>, and{" "}
                  <Link href="/floor-care-services-central-ma" className="text-[#0090c8] font-semibold hover:underline">floor care cleaning schedules</Link>
                  {" "}built around the specific compliance and appearance expectations of each building type.
                </p>
                <p>
                  Biotech and life-sciences tenants along Route 128 often have appearance and cleanliness expectations closer to a lab environment than a typical office, even in space that isn&apos;t technically wet-lab. We coordinate cleaning schedules and access with each facility&apos;s own requirements rather than assuming every Waltham account can be treated the same way a standard downtown office would be.
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
                  <p className="text-slate-500 text-xs font-medium mb-4">Enterprise Cleaning Corporation serves commercial properties throughout Waltham, including:</p>
                  <div className="space-y-2">
                    {[
                      { area: "Presidential Way / Rte 128 Corridor", detail: "Biotech & life-sciences campuses anchored by Thermo Fisher HQ" },
                      { area: "Moody Street Downtown District", detail: "Retail, restaurants, and small professional offices" },
                      { area: "Trapelo Rd & Winter St Corporate Parks", detail: "Technology and professional-services tenants" },
                      { area: "Bentley & Brandeis University Area", detail: "Research and education-adjacent office space" },
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
              Waltham&apos;s dense mix of biotech campuses, Route 128 corporate offices, and the Moody Street commercial district means no two buildings need the same cleaning plan, and we build Waltham accounts around that reality rather than a generic template.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Clock, title: "23+ Years Regional Experience", text: "More than two decades serving Central Massachusetts, Rhode Island, and Southern New Hampshire." },
              { icon: Users, title: "97% Client Retention Rate", text: "Reflecting unmatched consistency and long-term client trust — the highest in our market." },
              { icon: Trophy, title: "4× WBJ Award Winner", text: "Four-time Worcester Business Journal 'Best of Business' award winner, voted by the local community." },
              { icon: Award, title: "BBB Accredited Since 2007", text: "A track record of ethical business practices and responsive customer service spanning nearly two decades." },
              { icon: ShieldCheck, title: "Owner-Accessible Service", text: "You get direct access to leadership. No franchise ticket numbers. No call center runaround." },
              { icon: MapPin, title: "Route 128 & Biotech Experts", text: "Proven care for compliance-sensitive biotech suites, tech parks, and corporate offices in Waltham." },
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
              Core Cleaning Services in Waltham, MA
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              Enterprise Cleaning Corporation provides a full range of commercial cleaning services to Waltham businesses, scaled to fit everything from a single office suite to a multi-building portfolio:
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
              Industries We Serve in Waltham
            </h2>
            <p className="text-slate-500 font-medium">
              Our Waltham accounts span a range of industries, each with its own cleaning standards and scheduling requirements:
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
                { num: "01", title: "Free On-Site Walkthrough", text: "A member of our team visits your Waltham property — no subcontractors, no sales reps." },
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
                Every Waltham account starts the same way: a free, no-obligation walkthrough of your property with a member of our team, not a subcontractor or a franchise sales rep. We look at square footage, floor types, restroom count, tenant mix, and current pain points, then put together a written scope and price before any contract is signed.
              </p>
              <p>
                Once a schedule is set, your account gets a dedicated crew rather than a rotating pool of subcontracted labor, so the same people learn your building, your supply closets, and your particular quirks — a security system that needs a specific arm-and-disarm sequence, a{" "}
                <Link href="/floor-care-services-central-ma" className="text-[#0090c8] font-semibold hover:underline">floor that scuffs easily</Link>,
                {" "}a tenant who works late. Consistency in staffing is one of the most requested — and least delivered — things facility managers ask for from a cleaning vendor, and it&apos;s built into how we staff every Waltham account from day one.
              </p>
              <p>
                We check in regularly rather than waiting for a complaint, and because our ownership is directly reachable — not buried behind a franchise call center — issues get resolved in a conversation, not a ticket queue. That combination of a stable crew, a direct point of contact, and a willingness to actually show up when something needs attention is reflected in a 97% client retention rate across our full service area.
              </p>
              <p>
                Every Waltham crew is fully insured and bonded, trained on the equipment and cleaning chemicals used on your property, and briefed on any building-specific access, security, or safety requirements before their first shift. If your Waltham property has a facility handbook, badge-in procedure, or vendor compliance requirement, we build our onboarding around it rather than asking you to work around us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREA + BANNER ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/waltham_cleaning_banner.png"
            alt="Commercial cleaning in Waltham MA"
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
                Serving Waltham and the Surrounding Area
              </h2>
              <div className="space-y-4 text-slate-200 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  In addition to Waltham, Enterprise Cleaning Corporation regularly services commercial properties in the surrounding communities of Chelmsford, Tewksbury, Dracut, Billerica, and throughout the broader Central Massachusetts, Rhode Island, and Southern New Hampshire region.
                </p>
                <p>
                  For a Waltham facility manager overseeing a biotech office or a corporate suite on Route 128, the practical benefit is a cleaning partner who doesn&apos;t apply the same generic checklist to every property — floor care, restroom stocking, and scheduling are all adjusted to the specific building, not templated across the city.
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
                { icon: MapPin, stat: "Rte 128", label: "Tech Corridor" },
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
                Frequently Asked Questions — Waltham, MA
              </h2>
              <p className="text-slate-500 font-medium">
                Common questions about our commercial cleaning services in Waltham.
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
                Get a Free Cleaning Quote for Your Waltham Property
              </h2>
              <p className="text-slate-500 font-medium mt-4 leading-relaxed">
                Enterprise Cleaning Corporation offers a free, no-obligation on-site walkthrough for every Waltham property. Call (508) 890-1000 or request a quote online to schedule yours and receive a written proposal built around your building, your schedule, and your budget.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E31837] text-white font-extrabold px-8 py-4 rounded-xl hover:bg-[#c1122c] transition-colors shadow-lg shadow-[#E31837]/25 text-base"
              >
                Get a Free Waltham Quote <ArrowRight className="w-4 h-4" />
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
              {["Fully Insured & Bonded", "97% Client Retention", "4× WBJ Best of Business", "Route 128 & Biotech"].map(chip => (
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
