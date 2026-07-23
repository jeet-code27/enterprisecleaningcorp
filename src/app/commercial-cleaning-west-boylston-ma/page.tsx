import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneCall, ShieldCheck, Clock, Building2,
  MapPin, Trophy, Users, ArrowRight, CheckCircle2,
  CalendarCheck, Briefcase, Sparkles, Factory,
  Stethoscope, GraduationCap, Truck, Award, ChevronDown, Home
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Commercial Cleaning West Boylston, MA | Enterprise Cleaning Corp" },
  description: "Commercial cleaning and janitorial services in West Boylston, MA — home of Enterprise Cleaning Corporation. Get a free quote from our local headquarters team.",
  keywords: "commercial cleaning services, commercial cleaning company, commercial janitorial services, commercial cleaning near me, commercial cleaner near me, industrial cleaning near me, commercial cleaning ma, floor cleaning massachusetts, commercial cleaning west boylston ma",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-west-boylston-ma"
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
  "areaServed": { "@type": "City", "name": "West Boylston, MA" },
  "url": "https://enterprisecleaningcorp.com/commercial-cleaning-west-boylston-ma"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Enterprise Cleaning Corporation based in West Boylston?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our headquarters is located at 99 Hartwell Street, Suite B, in West Boylston, MA, in the Hartwell Street Industrial District." }
    },
    {
      "@type": "Question",
      "name": "Do you clean offices in the Worcester Corporate Center in West Boylston?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We serve office, R&D, and light-industrial tenants throughout the Worcester Corporate Center and the surrounding West Boylston business districts." }
    },
    {
      "@type": "Question",
      "name": "What cleaning services are available for Route 12 businesses in West Boylston?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nightly janitorial, day porter services, floor care, window cleaning and pressure washing, and turnover cleaning are all available for Route 12 corridor businesses." }
    },
    {
      "@type": "Question",
      "name": "How quickly can Enterprise Cleaning Corporation respond to a West Boylston property?",
      "acceptedAnswer": { "@type": "Answer", "text": "Because our crews and headquarters are based in West Boylston, response times for scheduling changes or new requests are among the fastest in our entire service area." }
    },
    {
      "@type": "Question",
      "name": "Do you clean industrial buildings in the Hartwell Street district?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We serve manufacturing and light-industrial tenants throughout the Hartwell Street Industrial District, where our own headquarters is also located." }
    },
    {
      "@type": "Question",
      "name": "How much does commercial cleaning cost in West Boylston?",
      "acceptedAnswer": { "@type": "Answer", "text": "Pricing depends on the size and type of facility. We provide a free on-site walkthrough and written quote for every West Boylston property." }
    },
    {
      "@type": "Question",
      "name": "Does Enterprise Cleaning Corporation offer day porter services in West Boylston?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Day porter coverage is available for West Boylston businesses that need daytime restocking, spot cleaning, and restroom maintenance in addition to nightly service." }
    },
    {
      "@type": "Question",
      "name": "What industries does Enterprise Cleaning Corporation serve in West Boylston?",
      "acceptedAnswer": { "@type": "Answer", "text": "Manufacturing and industrial facilities, corporate and R&D offices, property management portfolios, and retail and service businesses along Route 12." }
    },
    {
      "@type": "Question",
      "name": "Can I visit Enterprise Cleaning Corporation's office in West Boylston?",
      "acceptedAnswer": { "@type": "Answer", "text": "Our office is located at 99 Hartwell Street, Suite B, West Boylston, MA 01583. Call (508) 890-1000 to schedule a visit or a walkthrough of your property." }
    },
    {
      "@type": "Question",
      "name": "How do I get a cleaning quote for my West Boylston business?",
      "acceptedAnswer": { "@type": "Answer", "text": "Call (508) 890-1000. Because we're headquartered in West Boylston, we can typically schedule a walkthrough faster here than almost anywhere else we serve." }
    }
  ]
};

export default function WestBoylstonCityPage() {
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

              {/* HQ badge — unique to this page */}
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 text-sm font-bold text-[#0090c8] bg-[#0090c8]/8 border border-[#0090c8]/20 px-4 py-1.5 rounded-full">
                  <MapPin className="w-3.5 h-3.5 text-[#E31837]" />
                  West Boylston, MA &bull; Our HQ Town
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E31837] bg-[#E31837]/8 border border-[#E31837]/20 px-3 py-1.5 rounded-full">
                  <Home className="w-3 h-3" />
                  99 Hartwell St — Our Home Base
                </div>
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400 mb-2 sm:mb-3">City Service Hub</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black leading-[1.1] tracking-tight text-slate-900">
                  Commercial<br />
                  Cleaning Services<br />
                  <span className="text-[#0090c8]">in West Boylston, MA</span>
                </h1>
              </div>

              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                West Boylston is home to Enterprise Cleaning Corporation&apos;s own headquarters on Hartwell Street. We know every building in this town — because we operate from one of them every day.
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
                {["97% Client Retention", "4× WBJ Award Winner", "BBB Accredited Since 2007", "Headquartered Here"].map(chip => (
                  <span key={chip} className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0090c8]" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Hero image — visible on mobile & desktop */}
            <div className="relative block pb-8 lg:py-10">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200">
                <Image
                  src="/images/west_boylston_cleaning_hero.png"
                  alt="Commercial Cleaning in West Boylston MA — Enterprise Cleaning Corp Headquarters"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
                {/* HQ address badge */}
                <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl flex items-center gap-2.5 sm:gap-3 border border-slate-100">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#0090c8] flex items-center justify-center shrink-0">
                    <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-extrabold text-slate-900 text-xs sm:text-sm">Our HQ: 99 Hartwell St</div>
                    <div className="text-slate-500 text-[10px] sm:text-xs">West Boylston, MA 01583</div>
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
              { val: "HQ", unit: " Town", label: "Our Home Base" },
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

      {/* ─── ABOUT WEST BOYLSTON ─── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Built for West Boylston</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight max-w-3xl">
                Commercial Cleaning Built for West Boylston&apos;s Business Community
              </h2>
            </div>
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Text — wider column */}
              <div className="lg:col-span-3 space-y-4 text-slate-600 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  West Boylston is a small town of roughly 7,800 residents just north of Worcester, and it is also home to Enterprise Cleaning Corporation&apos;s own headquarters on Hartwell Street. The town&apos;s commercial base is concentrated in three areas: the Hartwell Street Industrial District, where{" "}
                  <Link href="/manufacturing-industrial-cleaning-central-ma" className="text-[#0090c8] font-semibold hover:underline">light industrial and traditional manufacturing</Link> tenants operate; the Route 12 Commercial District, home to restaurants, retail, and service businesses; and the Worcester Corporate Center, which the town has positioned for high-value office, R&amp;D, and light-industrial use. West Boylston&apos;s location at Exit 5 off I-190 gives all three districts fast access to Worcester, the Mass Pike, and the rest of Central Massachusetts.
                </p>
                <p>
                  Because we operate from Hartwell Street ourselves, West Boylston is not just a service area for Enterprise Cleaning Corporation — it&apos;s our home base. We know the building stock in the Hartwell Street Industrial District and the Worcester Corporate Center firsthand, and our crews can be on-site in West Boylston faster than in almost any other town we serve.
                </p>
                <p>
                  For a town this size, business owners and facility managers don&apos;t want to deal with a national franchise that treats West Boylston as an afterthought. They want a cleaning company that already knows the building, already knows the neighbors, and can be reached directly. That&apos;s the relationship we&apos;ve built with West Boylston businesses for more than two decades.
                </p>
                <p>
                  There&apos;s an obvious advantage to being asked to clean the same industrial district where your own company is based: we drive past these buildings, and often these exact neighbors, every day. When a West Boylston business calls with a same-week request or a scheduling change, we&apos;re not routing a crew in from another town — we&apos;re already here.
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
                  <p className="text-slate-500 text-xs font-medium mb-4">Enterprise Cleaning Corporation serves commercial properties throughout West Boylston, including:</p>
                  <div className="space-y-2">
                    {[
                      { area: "Hartwell Street Industrial District", detail: "Light-industrial & manufacturing — home to our own HQ" },
                      { area: "Route 12 Commercial District", detail: "Restaurants, retail, and service businesses" },
                      { area: "Worcester Corporate Center", detail: "High-value office, R&D, and light-industrial space" },
                      { area: "West Boylston Town Center", detail: "Municipal and small professional offices" },
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
                  {/* HQ address card */}
                  <div className="mt-4 bg-[#0090c8]/5 border border-[#0090c8]/20 rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Home className="w-3.5 h-3.5 text-[#0090c8]" />
                      <span className="text-xs font-extrabold text-[#0090c8] uppercase tracking-wider">Our Headquarters</span>
                    </div>
                    <div className="text-slate-700 text-xs font-bold">99 Hartwell Street, Suite B</div>
                    <div className="text-slate-500 text-xs font-medium">West Boylston, MA 01583</div>
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
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">The Home-Base Advantage</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Why Local Businesses Choose Enterprise Cleaning Corporation
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              West Boylston is where our own headquarters and crews are based, so response times, scheduling flexibility, and local knowledge of the Hartwell Street Industrial District and Route 12 corridor are as strong as they get anywhere in our service area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Clock, title: "23+ Years Local Experience", text: "More than two decades serving Central Massachusetts, Rhode Island, and Southern New Hampshire." },
              { icon: Users, title: "97% Client Retention Rate", text: "Reflecting unmatched consistency and long-term client trust — the highest in our market." },
              { icon: Trophy, title: "4× WBJ Award Winner", text: "Four-time Worcester Business Journal 'Best of Business' award winner, voted by the local community." },
              { icon: Award, title: "BBB Accredited Since 2007", text: "A track record of ethical business practices and responsive customer service spanning nearly two decades." },
              { icon: ShieldCheck, title: "Owner-Accessible Service", text: "You get direct access to leadership. No franchise ticket numbers. No call center runaround." },
              { icon: Home, title: "Headquartered in West Boylston", text: "99 Hartwell Street is our home. When you call, we're already in the same town — minutes away, not miles." },
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
              Core Cleaning Services in West Boylston, MA
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              Enterprise Cleaning Corporation provides a full range of commercial cleaning services to West Boylston businesses, scaled to fit everything from a single office suite to a multi-building portfolio:
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
              Industries We Serve in West Boylston
            </h2>
            <p className="text-slate-500 font-medium">
              Our West Boylston accounts span a range of industries, each with its own cleaning standards and scheduling requirements:
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
                { num: "01", title: "Free On-Site Walkthrough", text: "A member of our team visits your West Boylston property — no subcontractors, no sales reps." },
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
                Every West Boylston account starts the same way: a free, no-obligation walkthrough of your property with a member of our team, not a subcontractor or a franchise sales rep. We look at square footage, floor types, restroom count, tenant mix, and current pain points, then put together a written scope and price before any contract is signed.
              </p>
              <p>
                Once a schedule is set, your account gets a dedicated crew rather than a rotating pool of subcontracted labor, so the same people learn your building, your supply closets, and your particular quirks — a security system that needs a specific arm-and-disarm sequence, a{" "}
                <Link href="/floor-care-services-central-ma" className="text-[#0090c8] font-semibold hover:underline">floor that scuffs easily</Link>,
                {" "}a tenant who works late. Consistency in staffing is one of the most requested — and least delivered — things facility managers ask for from a cleaning vendor, and it&apos;s built into how we staff every West Boylston account from day one.
              </p>
              <p>
                We check in regularly rather than waiting for a complaint, and because our ownership is directly reachable — not buried behind a franchise call center — issues get resolved in a conversation, not a ticket queue. That combination of a stable crew, a direct point of contact, and a willingness to actually show up when something needs attention is reflected in a 97% client retention rate across our full service area.
              </p>
              <p>
                Every West Boylston crew is fully insured and bonded, trained on the equipment and cleaning chemicals used on your property, and briefed on any building-specific access, security, or safety requirements before their first shift. If your West Boylston property needs{" "}
                <Link href="/post-construction-cleaning-central-ma" className="text-[#0090c8] font-semibold hover:underline">post-construction cleanup</Link>,{" "}
                <Link href="/turnover-cleaning-central-ma" className="text-[#0090c8] font-semibold hover:underline">turnover cleaning</Link>, or{" "}
                <Link href="/emergency-restoration-services-central-ma" className="text-[#0090c8] font-semibold hover:underline">emergency flood response</Link>,
                {" "}we build our onboarding around your requirements rather than asking you to work around us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREA + BANNER ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/west_boylston_cleaning_banner.png"
            alt="Enterprise Cleaning Corporation West Boylston MA headquarters"
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
                Serving West Boylston and the Surrounding Area
              </h2>
              <div className="space-y-4 text-slate-200 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  In addition to West Boylston, Enterprise Cleaning Corporation regularly services commercial properties in the surrounding communities of{" "}
                  <Link href="/commercial-cleaning-worcester-ma" className="text-[#0090c8] font-semibold hover:underline">Worcester</Link>,{" "}
                  <Link href="/commercial-cleaning-shrewsbury-ma" className="text-[#0090c8] font-semibold hover:underline">Shrewsbury</Link>, Boylston, Holden, Sterling, and throughout the broader Central Massachusetts, Rhode Island, and Southern New Hampshire region.
                </p>
                <p>
                  For West Boylston business owners, that means calling a company that&apos;s a five-minute drive away rather than routing a request through a regional dispatch center, and getting a crew that already knows the town&apos;s building stock because it&apos;s the same neighborhood our own headquarters sits in.
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
                { icon: Home, stat: "HQ", label: "Based in West Boylston" },
                { icon: Trophy, stat: "4×", label: "WBJ Best of Business" },
                { icon: Users, stat: "97%", label: "Client Retention" },
                { icon: Clock, stat: "23+", label: "Years Experience" },
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
                Frequently Asked Questions — West Boylston, MA
              </h2>
              <p className="text-slate-500 font-medium">
                Common questions about our commercial cleaning services in West Boylston.
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
                Get a Free Cleaning Quote for Your West Boylston Property
              </h2>
              <p className="text-slate-500 font-medium mt-4 leading-relaxed">
                Enterprise Cleaning Corporation offers a free, no-obligation on-site walkthrough for every West Boylston property. Call (508) 890-1000 or request a quote online to schedule yours and receive a written proposal built around your building, your schedule, and your budget.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E31837] text-white font-extrabold px-8 py-4 rounded-xl hover:bg-[#c1122c] transition-colors shadow-lg shadow-[#E31837]/25 text-base"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
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
              {["Headquartered in West Boylston", "97% Client Retention", "4× WBJ Best of Business", "Fully Insured & Bonded"].map(chip => (
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
