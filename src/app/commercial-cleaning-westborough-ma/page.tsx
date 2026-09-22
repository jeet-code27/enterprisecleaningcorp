import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneCall, ShieldCheck, Clock, Building2,
  MapPin, Trophy, Users, ArrowRight, CheckCircle2,
  CalendarCheck, Briefcase, Sparkles, Factory,
  Stethoscope, GraduationCap, Truck, Award, ChevronDown,
  Layers, HardHat, Check, UserCheck, Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Commercial Cleaning Westborough, MA | Enterprise Cleaning Corp" },
  description: "Carpet cleaning, post-construction cleanup and full commercial cleaning for Westborough, MA businesses. Locally owned, 97% client retention. Get a free quote.",
  keywords: "commercial cleaning Westborough MA, carpet cleaning Westborough MA, post-construction cleaning Westborough MA, office cleaning Westborough MA, janitorial services Westborough MA, commercial carpet cleaning Westborough, post construction cleanup Worcester County",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-westborough-ma"
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
  "@type": "CleaningService",
  "name": "Enterprise Cleaning Corporation",
  "image": "https://res.cloudinary.com/dnd8u5sll/image/upload/v1787296503/ecc-new-logo_wzkxbr.png",
  "url": "https://www.enterprisecleaningcorp.com/commercial-cleaning-westborough-ma",
  "telephone": "+1-508-890-1000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "99 Hartwell Street",
    "addressLocality": "West Boylston",
    "addressRegion": "MA",
    "postalCode": "01583",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Westborough, Massachusetts"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.2695,
    "longitude": -71.6162
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Carpet cleaning"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Post-construction cleaning"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Office and janitorial cleaning"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Medical and healthcare office cleaning"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Floor care"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Window cleaning"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Pressure washing"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Disinfection and electrostatic spraying"
      }
    }
  ]
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does commercial cleaning cost in Westborough, MA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing depends on square footage, the type of space, and how often you need service. We walk every building before quoting so the price reflects your actual space, not a generic per-square-foot rate."
      }
    },
    {
      "@type": "Question",
      "name": "Do you clean carpets in occupied offices, or does the building need to close?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most carpet cleaning is scheduled after hours or on weekends so your team never has to work around wet carpet or equipment. We plan around your business hours, not the other way around."
      }
    },
    {
      "@type": "Question",
      "name": "How soon after construction wraps up can you start a post construction clean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We can typically schedule within a few days of your contractor's completion date. For larger projects, we coordinate the rough clean and final clean around your construction timeline so the space is ready when you need it."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer one time cleaning or only ongoing contracts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both. Some Westborough clients start with a one-time deep clean or post-construction job and move into a regular contract afterward. Others just need periodic carpet or floor care on top of their existing janitorial service."
      }
    }
  ]
};

export default function WestboroughCityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataFAQ) }} />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(to right, #0090c8, #E31837, #FFE800)" }} />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[540px]">

            {/* Left: Copy */}
            <div className="py-12 lg:py-16 pr-0 lg:pr-8 space-y-6">
              <div className="inline-flex items-center gap-2 text-sm font-bold text-[#0090c8] bg-[#0090c8]/8 border border-[#0090c8]/20 px-4 py-1.5 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#E31837]" />
                Westborough, MA &bull; Mass Pike, Route 9 &amp; I-495 Hub
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400 mb-2 sm:mb-3">City Service Hub</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] font-black leading-[1.12] tracking-tight text-slate-900">
                  Commercial cleaning services in <span className="text-[#0090c8]">Westborough, Massachusetts</span>
                </h1>
              </div>

              <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
                Specializing in commercial carpet cleaning, post-construction cleanup, and ongoing janitorial programs for corporate campuses, medical suites, and industrial properties across Westborough.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-1">
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

              <div className="flex flex-wrap gap-2.5 pt-1">
                {["97% Client Retention", "4× WBJ Award Winner", "BBB Accredited Since 2007", "More Than Two Decades Local"].map(chip => (
                  <span key={chip} className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200/60">
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
                  src="/images/westborough_cleaning_hero.png"
                  alt="Commercial cleaning in Westborough MA office park"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
                {/* Floating badge */}
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
              { val: "20+", unit: "Years", label: "Serving Central MA" },
              { val: "97%", unit: "", label: "Client Retention Rate" },
              { val: "4×", unit: "", label: "WBJ Best of Business" },
              { val: "I-495", unit: "& Route 9", label: "Corridor Specialists" },
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

      {/* ─── ABOUT WESTBOROUGH & HISTORY ─── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Local Heritage &amp; Commercial Growth</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight max-w-3xl">
                Commercial cleaning built for Westborough&apos;s active business sector
              </h2>
            </div>
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Text — wider column */}
              <div className="lg:col-span-3 space-y-4 text-slate-600 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  Westborough has a funny nickname if you know your Massachusetts town history. Back in November 1717 it became the hundredth town incorporated in the Commonwealth, carved out of the western part of Marlborough by families who had already been farming the land around Lake Chauncy for decades. The name gives it away, &quot;west borough,&quot; the west part of Marlborough. Drive through downtown today at the intersection of Main, South, and Milk streets and you can still feel that history in the brick storefronts and the colonial era houses that line the older streets near the Bay Street Green.
                </p>
                <p>
                  Westborough has grown up a lot since those first twenty seven families settled here. Sitting right where the Massachusetts Turnpike, Route 9, and Interstate 495 come together, the town has turned into one of the busier commercial corners of Worcester County. New office parks, corporate campuses, and light industrial buildings have gone up steadily over the past couple of decades, and that growth has not slowed down. Facility managers, property owners, and business owners around town are dealing with more square footage, more foot traffic, and more wear on floors and carpets than ever before.
                </p>
                <p>
                  That is exactly the kind of work Enterprise Cleaning Corporation handles every week for clients across Central Massachusetts, and Westborough sits squarely inside our primary service area. From corporate headquarters along Route 9 to research, biotechnology, and light manufacturing campuses along the I-495 technology belt, we provide dependable, owner-supervised{" "}
                  <Link href="/janitorial-services" className="text-[#0090c8] font-semibold hover:underline">commercial janitorial services</Link>{" "}
                  tailored to your facility&apos;s specific operating requirements.
                </p>
              </div>

              {/* Landmarks and Commercial Districts — narrower column */}
              <div className="lg:col-span-2">
                <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#0090c8]/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4 text-[#0090c8]" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base leading-tight">Key Westborough Districts</h3>
                  </div>
                  <p className="text-slate-500 text-xs font-medium mb-4">Enterprise Cleaning Corporation serves facilities throughout Westborough, including:</p>
                  <div className="space-y-2.5">
                    {[
                      { area: "Route 9 & Computer Drive", detail: "Corporate campuses, financial firms & multi-tenant office parks" },
                      { area: "I-495 / Mass Pike Interchange", detail: "Technology parks, logistics facilities & regional headquarters" },
                      { area: "Downtown (Main, South & Milk)", detail: "Historic brick retail storefronts, law offices & professional suites" },
                      { area: "Lake Chauncy Commercial Corridor", detail: "Medical clinics, conservation-adjacent campuses & executive parks" },
                      { area: "Technology Drive & Flanders Road", detail: "Biotech, life sciences, R&D labs & industrial flex buildings" },
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

      {/* ─── WHY WESTBOROUGH BUSINESSES CHOOSE ENTERPRISE CLEANING ─── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Local Accountability</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Why Westborough businesses choose Enterprise Cleaning
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Running a business in a growing town means your building takes a beating. Between the corporate offices along Route 9, the retail and restaurant scene downtown, and the mix of professional and medical offices scattered through town, Westborough facilities see heavy daily traffic. A lobby that looked sharp on move in day can start to look tired within a year if nobody who knows what they are doing is maintaining it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Direct Owner Accountability",
                text: "We are not a national franchise that swaps out crews every few months. Enterprise Cleaning is run day to day by owners Steve Buchalter and Julio Biage out of our home base in West Boylston, just up the road from Westborough."
              },
              {
                icon: Users,
                title: "97% Client Retention Rate",
                text: "When you call, you are talking to people who actually run the company, not a script reader at a call center. That kind of accountability is why once a Westborough business brings us on, they tend to stay."
              },
              {
                icon: Award,
                title: "4× WBJ Best of Business Winner",
                text: "Recognized four times by the Worcester Business Journal as the leading commercial cleaning service in Central Massachusetts, demonstrating decades of verified operational consistency."
              },
              {
                icon: Clock,
                title: "More Than Two Decades Local",
                text: "Cleaning commercial buildings across Central Massachusetts for more than two decades, developing deep familiarity with regional climate challenges, winter salting, and high-traffic wear."
              },
              {
                icon: MapPin,
                title: "Minutes From Route 9 & 495",
                text: "Headquartered just minutes away in West Boylston, our supervisors and mobile crews provide fast, responsive site visits and walkthroughs without Boston-area delays."
              },
              {
                icon: Sparkles,
                title: "100% In-House Cleaners",
                text: "We do not pass your building off to third-party subcontractors. Every cleaner on your property is an insured, vetted, and thoroughly trained Enterprise team member."
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200 hover:border-[#0090c8]/40 hover:shadow-lg transition-all text-left group">
                <div className="w-12 h-12 rounded-xl bg-[#0090c8]/8 flex items-center justify-center mb-5 group-hover:bg-[#0090c8]/15 transition-colors">
                  <item.icon className="w-6 h-6 text-[#0090c8]" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-2.5">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEAD SERVICE 1: CARPET CLEANING ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0090c8] text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Lead Specialty Service
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Carpet cleaning that holds up under Westborough&apos;s foot traffic
              </h2>

              <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  Carpet takes more abuse than almost anything else in a commercial building. Between salted boots in the winter, coffee spills in the break room, and everyday foot traffic through a lobby or conference room, carpet in an office or retail space wears out fast without a real maintenance plan.
                </p>
                <p>
                  Our{" "}
                  <Link href="/floor-care-services-central-ma" className="text-[#0090c8] font-bold hover:underline">
                    commercial carpet cleaning crews
                  </Link>{" "}
                  use hot water extraction and low moisture methods depending on the type of carpet and how quickly the space needs to be back in use. We handle spot and stain treatment, high traffic lane cleaning, and full facility carpet programs scheduled around your business hours so cleaning never gets in the way of your workday.
                </p>
                <p>
                  For offices along Route 9 and 495 that want their space looking sharp for client visits, and for property managers juggling multiple tenants with different carpet types, we build a schedule that fits the building instead of forcing the building to fit a generic plan.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Hot Water Deep Extraction",
                  "Low-Moisture Fast-Drying Cleans",
                  "Winter Salt & Slush Removal",
                  "Targeted Stain & Odor Treatment",
                  "High-Traffic Walkway Restoration",
                  "Scheduled Multi-Tenant Programs"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <Check className="w-4 h-4 text-[#0090c8] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/floor-care-services-central-ma"
                  className="inline-flex items-center gap-2 text-[#0090c8] font-bold hover:text-[#0078a8] text-sm group"
                >
                  Explore Commercial Floor &amp; Carpet Care Programs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/images/floor_care_hero.png"
                  alt="Commercial Carpet and Floor Cleaning in Westborough MA"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent text-white">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#FFE800]">Route 9 &amp; I-495 Carpet Care</div>
                  <div className="text-lg font-extrabold mt-1">Scheduled Around Your Operating Hours</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── LEAD SERVICE 2: POST CONSTRUCTION CLEANUP ─── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/images/post_construction_hero.png"
                  alt="Post Construction Cleaning for Westborough MA Projects"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent text-white">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#00B8FF]">Rough · Detail · Final Turnover</div>
                  <div className="text-lg font-extrabold mt-1">General Contractor &amp; Developer Support</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#E31837] text-xs font-black uppercase tracking-wider">
                <HardHat className="w-3.5 h-3.5" /> Project Handover Specialist
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Post construction cleanup for Westborough&apos;s building boom
              </h2>

              <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  With as much new construction and renovation as Westborough has seen lately, from office build outs to retail fit outs downtown, post construction cleaning has become one of the services we get called for most in this part of the county.
                </p>
                <p>
                  Construction leaves behind more mess than most people expect. Drywall dust settles into vents and corners. Adhesive residue and paint overspray end up on flooring that was supposed to be protected. Window film, price stickers, and packing material get left on brand new fixtures.
                </p>
                <p>
                  Our{" "}
                  <Link href="/post-construction-cleaning-massachusetts" className="text-[#0090c8] font-bold hover:underline">
                    post construction cleanup crews
                  </Link>{" "}
                  handle the full sequence: a rough clean to clear out debris and heavy dust, a detail clean to get every surface, sill, and fixture spotless, and a final walk through clean so the space is ready to hand over to tenants or open its doors to customers. Whether it is a single office suite or a full building turnover, we coordinate directly with your general contractor or property manager to hit the handover date.
                </p>
              </div>

              {/* 3-Phase Process Badges */}
              <div className="grid sm:grid-cols-3 gap-3 pt-2">
                {[
                  { phase: "Phase 1: Rough Clean", desc: "Debris hauling, coarse dust extraction, safety prep" },
                  { phase: "Phase 2: Detail Clean", desc: "Sills, baseboards, vents, fixture sanitizing & tape removal" },
                  { phase: "Phase 3: Final Touch", desc: "Spot check, glass detailing & immediate tenant occupancy" }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
                    <div className="text-xs font-black text-[#E31837] uppercase">{item.phase}</div>
                    <div className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-4 text-sm">
                <Link
                  href="/post-construction-cleaning-massachusetts"
                  className="text-[#0090c8] font-bold hover:text-[#0078a8] inline-flex items-center gap-1.5"
                >
                  View Massachusetts Post-Construction Specs <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-slate-300">|</span>
                <Link
                  href="/blog/post-construction-cleaning-marlborough-495-corridor"
                  className="text-slate-600 font-semibold hover:text-[#0090c8]"
                >
                  Read 495 Corridor Construction Guide
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── FULL RANGE OF SERVICES ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Comprehensive Solutions</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              The full range of services we bring to Westborough
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Carpet care and post construction cleanup are two of the services Westborough clients call us for most, but they are part of a bigger lineup. Enterprise Cleaning provides:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Nightly and Scheduled Office Cleaning",
                desc: "Recurring after-hours office cleaning tailored to multi-tenant campuses, financial offices, and corporate suites across Route 9.",
                href: "/office-cleaning"
              },
              {
                icon: Users,
                title: "Day Porter & Matron Staffing",
                desc: "Full-time or part-time on-site daytime attendants for buildings that require active restroom restocking, spill response, and continuous lobby hospitality.",
                href: "/office-cleaning"
              },
              {
                icon: Stethoscope,
                title: "Medical & Healthcare Office Cleaning",
                desc: "Clinical-grade sanitization and disinfection protocols compliant with healthcare standards for medical suites, therapy centers, and clinical practices.",
                href: "/medical-healthcare-cleaning-central-ma"
              },
              {
                icon: Sparkles,
                title: "Floor Care Beyond Carpet (Strip & Wax)",
                desc: "Comprehensive hard-floor care, including VCT tile stripping and waxing, high-speed buffing, and stone care to restore heavy-traffic shine.",
                href: "/floor-care-services-central-ma"
              },
              {
                icon: Building2,
                title: "Window Cleaning (Interior & Exterior)",
                desc: "Streak-free commercial window cleaning for corporate facades, ground-floor retail display glass, interior office partitions, and conference centers.",
                href: "/specialty-cleaning-services-central-ma"
              },
              {
                icon: Truck,
                title: "Pressure Washing & Exterior Care",
                desc: "High-pressure exterior washing for commercial entryways, sidewalks, dumpster pads, loading docks, and exterior facades.",
                href: "/specialty-cleaning-services-central-ma"
              },
              {
                icon: Layers,
                title: "Disinfection & Electrostatic Spraying",
                desc: "Hospital-grade touchpoint sanitization and 360-degree electrostatic misting for offices and communal areas during seasonal health resets.",
                href: "/specialty-cleaning-services-central-ma"
              },
              {
                icon: HardHat,
                title: "Post-Construction Cleanliness Sequence",
                desc: "Complete rough-to-final cleanup for tenant fit-outs, commercial renovations, and newly constructed facilities along the 495 corridor.",
                href: "/post-construction-cleaning-central-ma"
              },
              {
                icon: Briefcase,
                title: "Tenant Turnover Cleaning",
                desc: "Fast, detail-oriented turnover cleaning between commercial leases, allowing property managers to present immaculate spaces to prospective tenants.",
                href: "/turnover-cleaning-central-ma"
              },
            ].map((svc, idx) => (
              <Link key={idx} href={svc.href} className="p-6 rounded-2xl border-2 border-slate-100 hover:border-[#0090c8]/40 hover:shadow-lg transition-all group text-left block bg-white">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-[#0090c8]/8 flex items-center justify-center mb-5 transition-colors">
                  <svc.icon className="w-6 h-6 text-[#0090c8]" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-2 group-hover:text-[#0090c8] transition-colors">{svc.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{svc.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0090c8] mt-3">
                  Service Details <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto">
            <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
              Most of our Westborough clients start with one service and add others once they see how the crews handle their building. A lot of the office parks near the highway interchange use us for both nightly cleaning and periodic floor care, since it is simpler to have one company handle the whole building than to coordinate three separate vendors.
            </p>
          </div>
        </div>
      </section>

      {/* ─── LOCALLY OWNED & REGIONAL ACCREDITATION ─── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-black tracking-widest uppercase text-[#0090c8] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
                Established Credibility
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Locally owned, more than two decades in Central Massachusetts
              </h2>
              <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  Enterprise Cleaning Corporation has been cleaning commercial buildings across Central Massachusetts for more than two decades. Owners Steve Buchalter and Julio Biage run the company out of West Boylston, and that owner level involvement is a big part of why clients stay.
                </p>
                <p>
                  The company has won the Worcester Business Journal Best of Business award four times, has held Better Business Bureau accreditation since 2007, and works with regional organizations including MacIntire Insurance and the Worcester Club.
                </p>
                <p>
                  Westborough sits well inside our regular service territory, a short drive from our home base and close to many of the other Worcester County towns we serve like Shrewsbury, Marlborough, Framingham, and Southborough.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-3">
                <Link
                  href="/about"
                  className="px-6 py-3 rounded-xl bg-[#003B7A] hover:bg-[#002f61] text-white font-extrabold text-sm shadow-md transition inline-flex items-center gap-2"
                >
                  Meet Ownership &amp; Our Team <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/success-stories"
                  className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm border border-slate-200 transition inline-flex items-center gap-2"
                >
                  View Regional Case Studies
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#0090c8]/20 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#FFE800]">
                    <Award className="w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-widest">Industry Leadership</span>
                  </div>
                  <h3 className="text-2xl font-black text-white">Trust Earned Across 20+ Years</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Direct executive accountability from Steve Buchalter and Julio Biage on every commercial account.
                  </p>
                </div>

                <div className="space-y-3.5 border-t border-white/10 pt-5 text-sm">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>BBB Accredited with A+ Standing Since 2007</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>4× WBJ Best of Business Commercial Cleaning Winner</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Consistent 97% Client Retention Across All Accounts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Trusted by MacIntire Insurance &amp; The Worcester Club</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span>Headquarters: West Boylston, MA</span>
                  <span className="text-[#FFE800] font-bold">Serving Westborough Daily</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SERVING THE WHOLE BUSINESS COMMUNITY + BANNER IMAGE ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/westborough_cleaning_banner.png"
            alt="Commercial cleaning in Westborough MA corporate corridor"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-900/75" />
        </div>

        <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#00B8FF]">Community Breadth</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Serving the whole Westborough business community
              </h2>
              <div className="space-y-4 text-slate-200 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  We work with businesses across Westborough&apos;s commercial landscape, from the office parks near the Mass Pike and 495 interchange to the smaller professional offices and retail spaces around the downtown core near the Bay Street Green and the farmers market.
                </p>
                <p>
                  Property managers overseeing buildings near Lake Chauncy and the conservation land the town is known for often need cleaning schedules that respect quiet hours and shared spaces, and we build our routes around that.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E31837] text-white font-extrabold px-6 py-3 rounded-xl hover:bg-red-700 transition-colors shadow-lg text-sm">
                  Request a Free Walkthrough <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:5088901000" className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition-colors text-sm backdrop-blur-md">
                  <PhoneCall className="w-4 h-4 text-[#00B8FF]" />
                  (508) 890-1000
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, stat: "20+ Yrs", label: "Local Proven Track Record" },
                { icon: Trophy, stat: "4×", label: "WBJ Best of Business" },
                { icon: Users, stat: "97%", label: "Client Retention Rate" },
                { icon: MapPin, stat: "I-495", label: "Route 9 Tech Corridor" },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center hover:bg-white/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[#00B8FF] mx-auto mb-2" />
                  <div className="text-2xl font-black text-white mb-0.5">{item.stat}</div>
                  <div className="text-xs text-slate-300 font-semibold">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES WE SERVE IN WESTBOROUGH ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Sectors Served</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Industries we serve in Westborough
            </h2>
            <p className="text-slate-600 font-medium">
              Every facility in Westborough has distinct cleaning requirements. We build tailored cleaning programs for:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Briefcase,
                name: "Corporate Headquarters & Tech Offices",
                desc: "Class A and B executive office complexes, technology campuses, and professional suites along Route 9 and 495.",
                href: "/office-financial-cleaning-central-ma"
              },
              {
                icon: Stethoscope,
                name: "Medical Clinics & Healthcare Suites",
                desc: "Medical practices, dental clinics, physical therapy offices, and diagnostic centers requiring rigorous pathogen protocols.",
                href: "/medical-healthcare-cleaning-central-ma"
              },
              {
                icon: Factory,
                name: "Light Manufacturing & Industrial",
                desc: "Industrial parks, light assembly facilities, and research campuses with strict shift schedules and safety parameters.",
                href: "/manufacturing-industrial-cleaning-central-ma"
              },
              {
                icon: Building2,
                name: "Commercial Property Portfolios",
                desc: "Multi-tenant office parks and retail plazas near downtown Westborough where managers require one trusted vendor.",
                href: "/property-management-cleaning-central-ma"
              },
              {
                icon: Truck,
                name: "Warehouses & Distribution Facilities",
                desc: "High-bay logistics centers and regional distribution depots needing dust containment, floor sweeping, and scrub maintenance.",
                href: "/warehouse-distribution-cleaning-central-ma"
              },
              {
                icon: GraduationCap,
                name: "Educational & Municipal Buildings",
                desc: "Private education facilities, civic centers, and public administrative offices requiring scheduled sanitization around public occupancy.",
                href: "/school-municipal-cleaning-central-ma"
              },
            ].map((ind, idx) => (
              <Link key={idx} href={ind.href} className="flex gap-4 bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#0090c8]/40 hover:shadow-md transition-all group text-left">
                <div className="w-11 h-11 rounded-xl bg-[#0090c8]/8 flex items-center justify-center shrink-0 group-hover:bg-[#0090c8]/15 transition-colors">
                  <ind.icon className="w-5 h-5 text-[#0090c8]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm mb-1 group-hover:text-[#0090c8] transition-colors">{ind.name}</h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">{ind.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0090c8] mt-2">
                    Industry Scope <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQS ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Common Questions</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                Common questions from Westborough business owners
              </h2>
              <p className="text-slate-500 font-medium">
                Straightforward answers about our commercial cleaning and specialized services in Westborough.
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
                Ready to talk about cleaning for your Westborough building?
              </h2>
              <p className="text-slate-600 font-medium mt-4 leading-relaxed text-base">
                Call Enterprise Cleaning Corporation at <a href="tel:5088901000" className="text-[#0090c8] font-bold hover:underline">(508) 890-1000</a>, or contact <Link href="/alex-puchulu-business-card" className="text-[#0090c8] font-bold hover:underline">Alex Puchulu</Link>, our Director of Sales and Marketing, directly for a walkthrough and a straightforward quote.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E31837] text-white font-extrabold px-8 py-4 rounded-xl hover:bg-[#c1122c] transition-colors shadow-lg shadow-[#E31837]/25 text-base"
              >
                Schedule an On-Site Walkthrough <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:5088901000"
                className="inline-flex items-center gap-2 text-slate-800 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200 text-base"
              >
                <PhoneCall className="w-4 h-4 text-[#0090c8]" />
                (508) 890-1000
              </a>
              <a
                href="tel:5083042369"
                className="inline-flex items-center gap-2 text-[#003B7A] bg-white font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors border border-blue-200 text-base shadow-sm"
              >
                <UserCheck className="w-4 h-4 text-[#0090c8]" />
                Call Alex Direct: (508) 304-2369
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {[
                "Insured & Bonded",
                "97% Client Retention",
                "4× WBJ Best of Business",
                "Route 9 & 495 Coverage",
                "Steve & Julio Owner Supervision"
              ].map(chip => (
                <span key={chip} className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-sm">
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
