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
  title: { absolute: "Commercial Cleaning Marlborough, MA | Enterprise Cleaning Corp" },
  description: "Carpet cleaning, post-construction cleanup and full commercial cleaning for Marlborough, MA businesses. Family-run, trusted across Central Mass. Get a free quote.",
  keywords: "commercial cleaning Marlborough MA, carpet cleaning Marlborough MA, post-construction cleaning Marlborough MA, office cleaning Marlborough MA, janitorial services Marlborough MA, post construction cleaning 495 corridor, commercial cleaners Marlborough",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-marlborough-ma"
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
  "url": "https://www.enterprisecleaningcorp.com/commercial-cleaning-marlborough-ma",
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
    "name": "Marlborough, Massachusetts"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.3459,
    "longitude": -71.5523
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
      "name": "How often should a commercial space get its carpet cleaned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most offices and retail spaces do well with carpet cleaning every three to six months, depending on foot traffic. High-traffic lobbies and entryways sometimes need more frequent attention. We build a schedule based on how the space is actually used."
      }
    },
    {
      "@type": "Question",
      "name": "Can you clean around tenants in a multi tenant building?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We work with property managers all over Marlborough on exactly this. We schedule around occupied units and shared common areas so tenants are not disrupted."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in a post construction clean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A full post construction clean covers debris removal, dust removal from every surface including vents and sills, window and glass cleaning, floor cleaning and polishing, and a final detail pass so the space is ready for occupancy."
      }
    },
    {
      "@type": "Question",
      "name": "Do you serve businesses outside downtown Marlborough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We cover the whole city, including the office parks and retail areas near the highway corridors, not just the downtown core."
      }
    }
  ]
};

export default function MarlboroughCityPage() {
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
                Marlborough, MA &bull; I-495, I-290 &amp; Mass Pike Corridor
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400 mb-2 sm:mb-3">City Service Hub</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] font-black leading-[1.12] tracking-tight text-slate-900">
                  Commercial cleaning services in <span className="text-[#0090c8]">Marlborough, Massachusetts</span>
                </h1>
              </div>

              <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
                Expert commercial carpet cleaning, post-construction cleanup, and customized janitorial programs for corporate office parks, downtown storefronts, and technology centers across Marlborough.
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
                  src="/images/marlborough_cleaning_hero.png"
                  alt="Commercial cleaning in Marlborough MA technology park"
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
              { val: "I-495", unit: "& I-290", label: "Crossroads Specialists" },
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

      {/* ─── TOWN HISTORY & ROOTS ─── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Deep Colonial Heritage</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight max-w-3xl">
                Commercial cleaning grounded in Marlborough&apos;s rich historical framework
              </h2>
            </div>
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Text — wider column */}
              <div className="lg:col-span-3 space-y-4 text-slate-600 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  Marlborough has one of the older stories in this part of Massachusetts. Families from Sudbury, led by Edmund Rice, settled the land in 1656 at the crossing point of two old trails, the Nashua Trail and the Connecticut Path. The town was officially incorporated in 1660 and named after Marlborough, England, which makes it one of the older towns in the region, older even than Westborough, which split off from it decades later.
                </p>
                <p>
                  Walk through downtown Marlborough today and you can still trace that history along Main Street. The Old Common Cemetery dates back to 1706. The city put together a self-guided walking tour called the Museum in the Streets, with two dozen panels covering everything from the shoe industry that built the city to the story of William Dawes, who rode through here warning of the British army the same night as Paul Revere. Marlborough became a city in 1890, and its official seal still shows a shoe factory, a shoe box, and a pair of boots, a nod to the industry that put the city on the map.
                </p>
                <p>
                  That blend of deep colonial history and modern high-tech enterprise defines Marlborough today. Enterprise Cleaning Corporation brings owner-supervised{" "}
                  <Link href="/janitorial-services" className="text-[#0090c8] font-bold hover:underline">janitorial care</Link>{" "}
                  to this unique community, preserving the character of historic downtown facilities while upholding stringent sanitation benchmarks in modern technology parks.
                </p>
              </div>

              {/* Districts and Commercial Hubs — narrower column */}
              <div className="lg:col-span-2">
                <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#0090c8]/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4 text-[#0090c8]" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base leading-tight">Key Marlborough Districts</h3>
                  </div>
                  <p className="text-slate-500 text-xs font-medium mb-4">Enterprise Cleaning Corporation maintains commercial facilities across Marlborough:</p>
                  <div className="space-y-2.5">
                    {[
                      { area: "I-495 & I-290 Corporate Belt", detail: "Global tech campuses, medical device firms & office parks" },
                      { area: "Main Street & Downtown Village", detail: "Historic brick retail storefronts, law firms & cultural center" },
                      { area: "Solomon Pond Mall Corridor", detail: "Retail anchors, dining plazas & commercial service suites" },
                      { area: "Apex Center & Route 20", detail: "Hospitality complexes, corporate hubs & entertainment venues" },
                      { area: "Simarano Drive & Nickerson Rd", detail: "Life sciences, biotechnology labs & light manufacturing flex" },
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

      {/* ─── INDUSTRIAL HERITAGE TO BUSINESS HUB ─── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Industrial Evolution</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              A city built on manufacturing, now built on business
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Shoe manufacturing took hold in Marlborough starting in 1812 and defined the city for more than a century. Companies like Rice and Hutchins ran factories here, and the Frye boot company kept manufacturing in Marlborough well into the 1970s. The Rockport Company got its start in Marlborough in 1971. You can still see that heritage around town, from the shoe worker statues in Centennial Park to Lost Shoe Brewing and Roasting Company, a taproom that borrowed its name straight from the city&apos;s industrial past.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-6">
            <div className="max-w-4xl mx-auto space-y-4 text-slate-600 font-medium leading-relaxed text-[0.97rem]">
              <p>
                The construction of Interstate 495, Interstate 290, and the Massachusetts Turnpike changed Marlborough&apos;s economy again, turning the city into a hub for technology and corporate offices along the highway corridors. Between the historic downtown business district on Main Street, the retail area around Solomon Pond Mall, and the office parks near the highways, Marlborough&apos;s commercial footprint is spread across several very different kinds of buildings, which means it takes a cleaning company that can handle more than one type of space.
              </p>
              <p>
                Whether maintaining high-traffic retail floors near Solomon Pond, sterile cleanrooms in biotechnology facilities, or Class A executive suites on Forest Street, Enterprise Cleaning Corporation delivers versatile, accountable{" "}
                <Link href="/office-cleaning" className="text-[#0090c8] font-bold hover:underline">office cleaning services</Link>{" "}
                that protect the physical assets and prestige of your facility.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              {[
                { title: "Highway Hub Positioning", desc: "Immediate accessibility along I-495, I-290, and Route 20 for rapid crew mobilization." },
                { title: "Diverse Facility Competency", desc: "Expertise spanning historic brick spaces, multi-tenant offices, and high-tech campuses." },
                { title: "Consistent In-House Staff", desc: "Uniformed, insured cleaners dedicated to your building rather than revolving subcontractors." },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-left">
                  <div className="font-extrabold text-slate-900 text-sm mb-1">{item.title}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEAD SERVICE 1: CARPET CLEANING ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0090c8] text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> High-Traffic Fabric Care
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Carpet cleaning built for Marlborough&apos;s mix of old and new buildings
              </h2>

              <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  Marlborough&apos;s building stock ranges from brick storefronts built in the late 1800s to modern office parks that went up in the last twenty years. Carpet in an older Main Street building often needs different handling than the commercial grade carpet tile in a newer office suite near the highway.
                </p>
                <p>
                  Our{" "}
                  <Link href="/floor-care-services-central-ma" className="text-[#0090c8] font-bold hover:underline">
                    commercial carpet cleaning teams
                  </Link>{" "}
                  work with both. We run hot water extraction for deep cleaning and periodic maintenance, and low moisture cleaning when a space needs to reopen fast.
                </p>
                <p>
                  High traffic lobby carpet, stairwells, and conference rooms get the most wear in most buildings, and those are the areas we focus on first, along with full spot and stain treatment for whatever the day to day business throws at the carpet. Retail spaces near Solomon Pond Mall and offices downtown both get scheduled around business hours so cleaning never interrupts a workday or a shopping day.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Truck-Mounted Hot Water Extraction",
                  "Low-Moisture Encapsulation Cleans",
                  "Salt, Slush & Winter Mud Removal",
                  "Traffic-Lane Restoration Buffing",
                  "Conference & Boardroom Deep Staining",
                  "Weekend & Nightly Flexible Booking"
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
                  Explore Commercial Carpet &amp; Floor Care Programs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/images/floor_care_hero.png"
                  alt="Commercial Carpet Cleaning in Marlborough MA"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent text-white">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#FFE800]">Solomon Pond &amp; 495 Corridor</div>
                  <div className="text-lg font-extrabold mt-1">Specialized Carpet &amp; Hard Floor Extraction</div>
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
                  alt="Post Construction Cleaning for Marlborough MA Projects"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent text-white">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#00B8FF]">Rough · Detail · Final Occupancy Pass</div>
                  <div className="text-lg font-extrabold mt-1">General Contractor Handover Support</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#E31837] text-xs font-black uppercase tracking-wider">
                <HardHat className="w-3.5 h-3.5" /> Project Turnover Specialists
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Post construction cleaning for a city that is always building something
              </h2>

              <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  Marlborough has kept building and rebuilding for more than three centuries, and that has not stopped. Office renovations, retail build outs, and new construction near the highway corridors all generate the same problem: a finished space covered in dust, debris, and residue that a general contractor&apos;s crew is not equipped to remove.
                </p>
                <p>
                  We handle post construction cleaning in three stages. Rough clean takes out heavy debris, bulk dust, and packaging material. Detail clean gets into every corner, sill, vent, and fixture construction dust settles into. Final clean is the walk through ready pass, the one that makes a space look finished instead of just built.
                </p>
                <p>
                  We work directly with contractors and property managers on timing so the space is ready exactly when tenants or customers are expected.
                </p>
              </div>

              {/* 3-Stage Process Breakdown */}
              <div className="grid sm:grid-cols-3 gap-3 pt-2">
                {[
                  { stage: "Stage 1: Rough Clean", desc: "Removal of trash, packaging, dry wall debris, and initial air sweeping" },
                  { stage: "Stage 2: Detail Clean", desc: "Fixtures, glass scraping, ducts, sills, cabinetry, and floor scrubbing" },
                  { stage: "Stage 3: Final Clean", desc: "Meticulous walk-through pass ready for immediate handover and occupancy" }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
                    <div className="text-xs font-black text-[#E31837] uppercase">{item.stage}</div>
                    <div className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-4 text-sm">
                <Link
                  href="/post-construction-cleaning-massachusetts"
                  className="text-[#0090c8] font-bold hover:text-[#0078a8] inline-flex items-center gap-1.5"
                >
                  Explore Post-Construction Capabilities <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-slate-300">|</span>
                <Link
                  href="/blog/post-construction-cleaning-marlborough-495-corridor"
                  className="text-slate-600 font-semibold hover:text-[#0090c8]"
                >
                  Read Our Marlborough 495 Construction Guide
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── EVERYTHING ELSE MARLBOROUGH BUSINESSES NEED ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Comprehensive Facility Services</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Everything else Marlborough businesses need
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Carpet care and post construction cleanup are two of our most requested services in Marlborough, but our full lineup covers:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Nightly and Scheduled Janitorial Cleaning",
                desc: "Reliable nightly and recurring office cleaning programs built around your facility's operational hours and confidentiality needs.",
                href: "/janitorial-services"
              },
              {
                icon: Users,
                title: "Day Porter and Matron Staffing",
                desc: "Professional on-site daytime attendants who keep restrooms stocked, lobbies welcoming, and high-frequency touchpoints spotless throughout business hours.",
                href: "/office-cleaning"
              },
              {
                icon: Stethoscope,
                title: "Medical & Healthcare Office Cleaning",
                desc: "Terminal cleaning, clinical disinfection, and bio-burden reduction for healthcare clinics, dental suites, and specialized therapy centers.",
                href: "/medical-healthcare-cleaning-central-ma"
              },
              {
                icon: Sparkles,
                title: "Floor Care Beyond Carpet (Strip & Wax)",
                desc: "Hard-surface maintenance, vinyl composition tile (VCT) strip and refinish, high-speed burnishing, and machine scrubbing for resilient shine.",
                href: "/floor-care-services-central-ma"
              },
              {
                icon: Building2,
                title: "Window Cleaning (Interior & Exterior)",
                desc: "Crystal-clear window cleaning for multi-story office facades, street-level retail displays, and executive conference room glass partitions.",
                href: "/specialty-cleaning-services-central-ma"
              },
              {
                icon: Truck,
                title: "Pressure Washing for Entrances & Lots",
                desc: "Commercial pressure washing to remove grease, gum, winter grime, and dirt from sidewalks, dumpster pads, and parking areas.",
                href: "/specialty-cleaning-services-central-ma"
              },
              {
                icon: Layers,
                title: "Disinfection & Electrostatic Spraying",
                desc: "Advanced hospital-grade broad-spectrum antimicrobial misting and targeted touchpoint sanitization for healthy staff environments.",
                href: "/specialty-cleaning-services-central-ma"
              },
              {
                icon: HardHat,
                title: "Turnkey Post-Construction Cleanout",
                desc: "Phased cleanup coordination with construction managers, transforming newly renovated buildings into turnkey tenant spaces.",
                href: "/post-construction-cleaning-central-ma"
              },
              {
                icon: Briefcase,
                title: "Turnover Cleaning for Commercial Suites",
                desc: "Fast, comprehensive turnover cleaning between commercial leases to help property managers sign tenants without turnover lag.",
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
              A lot of our Marlborough clients run multi tenant buildings or manage several properties across the city, and having one vendor cover nightly cleaning, floor care, and the occasional deep clean or post construction job saves them from coordinating multiple contractors.
            </p>
          </div>
        </div>
      </section>

      {/* ─── LOCALLY OWNED & PROVEN CREDIBILITY ─── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-black tracking-widest uppercase text-[#0090c8] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
                Local Ownership Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Locally owned, more than two decades in Central Massachusetts
              </h2>
              <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  Enterprise Cleaning Corporation has served businesses across Central Massachusetts for more than two decades, based out of West Boylston and run directly by owners Steve Buchalter and Julio Biage.
                </p>
                <p>
                  The company has won the Worcester Business Journal Best of Business award four times and has carried Better Business Bureau accreditation since 2007. We maintain a 97% client retention rate, and clients including MacIntire Insurance and the Worcester Club have worked with us long enough to see that consistency firsthand.
                </p>
                <p>
                  Marlborough sits within our core Central Massachusetts service area, and our crews are already running regular routes through the city every single day.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-3">
                <Link
                  href="/about"
                  className="px-6 py-3 rounded-xl bg-[#003B7A] hover:bg-[#002f61] text-white font-extrabold text-sm shadow-md transition inline-flex items-center gap-2"
                >
                  About Enterprise Leadership <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/success-stories"
                  className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm border border-slate-200 transition inline-flex items-center gap-2"
                >
                  View Client Case Studies
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#0090c8]/20 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#FFE800]">
                    <Award className="w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-widest">Unmatched Retention</span>
                  </div>
                  <h3 className="text-2xl font-black text-white">97% Client Retention Rate</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Long-term client partnerships built on direct owner contact with Steve Buchalter and Julio Biage.
                  </p>
                </div>

                <div className="space-y-3.5 border-t border-white/10 pt-5 text-sm">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Four-Time WBJ Best of Business Winner</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>BBB Accredited with A+ Standing Since 2007</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Fully Insured and Bonded In-House Cleaning Teams</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Trusted by MacIntire Insurance &amp; The Worcester Club</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span>Home Base: West Boylston, MA</span>
                  <span className="text-[#FFE800] font-bold">Daily Marlborough Routes</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── WHERE WE WORK IN MARLBOROUGH + BANNER IMAGE ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/marlborough_cleaning_banner.png"
            alt="Commercial cleaning in Marlborough MA 495 corridor"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-900/75" />
        </div>

        <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#00B8FF]">Full Geographic Coverage</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Where we work in Marlborough
              </h2>
              <div className="space-y-4 text-slate-200 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  We clean buildings throughout Marlborough, from the historic Main Street business district and the Downtown Village cultural district to the office parks near Interstate 495 and Interstate 290 and the retail corridor around Solomon Pond Mall.
                </p>
                <p>
                  Property managers overseeing older downtown buildings and newer highway corridor offices both work with us, and we adjust our approach to whatever the building actually needs instead of running one standard playbook everywhere.
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
                { icon: ShieldCheck, stat: "20+ Yrs", label: "Central Mass Experience" },
                { icon: Trophy, stat: "4×", label: "WBJ Best of Business" },
                { icon: Users, stat: "97%", label: "Client Retention Rate" },
                { icon: MapPin, stat: "I-495", label: "Highway Hub Teams" },
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

      {/* ─── FAQS ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Common Questions</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                Common questions from Marlborough business owners
              </h2>
              <p className="text-slate-500 font-medium">
                Transparent answers regarding our commercial carpet, post-construction, and janitorial services in Marlborough.
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
                Ready to talk about cleaning for your Marlborough building?
              </h2>
              <p className="text-slate-600 font-medium mt-4 leading-relaxed text-base">
                To get a quote for your Marlborough building, call Enterprise Cleaning Corporation at <a href="tel:5088901000" className="text-[#0090c8] font-bold hover:underline">(508) 890-1000</a>, or contact <Link href="/alex-puchulu-business-card" className="text-[#0090c8] font-bold hover:underline">Alex Puchulu</Link>, our Director of Sales and Marketing, to set up a walkthrough.
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
                "I-495 & I-290 Crossway Coverage",
                "Steve & Julio Owner Oversight"
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
