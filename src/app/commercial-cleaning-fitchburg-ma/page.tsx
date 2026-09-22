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
  title: { absolute: "Commercial Cleaning Fitchburg, MA | Enterprise Cleaning Corp" },
  description: "Carpet cleaning, post-construction cleanup and full commercial cleaning for Fitchburg, MA businesses. Locally owned, serving Worcester County. Get a free quote.",
  keywords: "commercial cleaning Fitchburg MA, carpet cleaning Fitchburg MA, post-construction cleaning Fitchburg MA, office cleaning Fitchburg MA, janitorial services Fitchburg MA, converted mill cleaning Fitchburg, commercial cleaners Fitchburg",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-fitchburg-ma"
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
  "url": "https://www.enterprisecleaningcorp.com/commercial-cleaning-fitchburg-ma",
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
    "name": "Fitchburg, Massachusetts"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.5834,
    "longitude": -71.8023
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
      "name": "Do you clean older, historic commercial buildings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A lot of our Fitchburg work is in older downtown buildings and converted mill space. We adjust our methods for older flooring, plaster, and fixtures instead of using a one size fits all approach."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle post construction cleaning in a renovation project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work directly with the contractor or property owner on timing, then run a rough clean, detail clean, and final clean so the space is ready for occupancy by the handover date."
      }
    },
    {
      "@type": "Question",
      "name": "Is carpet cleaning included in a standard janitorial contract, or is it separate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Carpet cleaning is usually scheduled separately from nightly janitorial service, since it needs different equipment and timing. Many Fitchburg clients bundle both into one ongoing contract for simplicity."
      }
    },
    {
      "@type": "Question",
      "name": "Do you serve buildings near the commuter rail station and downtown?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Downtown Fitchburg, the area near City Hall, and the commercial buildings along Main Street and Route 2 are all part of our regular service area."
      }
    }
  ]
};

export default function FitchburgCityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataFAQ) }}
      />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(to right, #0090c8, #E31837, #FFE800)" }} />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[540px]">

            {/* Left: Copy */}
            <div className="py-12 lg:py-16 pr-0 lg:pr-8 space-y-6">
              <div className="inline-flex items-center gap-2 text-sm font-bold text-[#0090c8] bg-[#0090c8]/8 border border-[#0090c8]/20 px-4 py-1.5 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#E31837]" />
                Fitchburg, MA &bull; Nashua River &amp; Route 2 Commercial Hub
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400 mb-2 sm:mb-3">City Service Hub</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] font-black leading-[1.12] tracking-tight text-slate-900">
                  Commercial cleaning services in <span className="text-[#0090c8]">Fitchburg, Massachusetts</span>
                </h1>
              </div>

              <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
                Specializing in commercial carpet cleaning, post-construction cleanup, and customized janitorial programs for converted mill complexes, downtown storefronts, and Route 2 healthcare and corporate offices across Fitchburg.
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
                  src="/images/fitchburg_cleaning_hero.png"
                  alt="Commercial cleaning in Fitchburg MA converted mill office"
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
              { val: "Route 2", unit: "& Nashua River", label: "Regional Specialists" },
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
                Commercial cleaning grounded in Fitchburg&apos;s rich historical framework
              </h2>
            </div>
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Text — wider column */}
              <div className="lg:col-span-3 space-y-4 text-slate-600 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  Fitchburg&apos;s whole story runs along the Nashua River. The area was first settled in 1730 as part of Lunenburg, back when the land was known as Turkey Hills for the wild turkeys that lived there. It took three years of petitioning by settlers including Amos Kimball and Samuel Hunt before the town was incorporated on its own in 1764, named for John Fitch, one of the men who pushed the petition through.
                </p>
                <p>
                  The river is what turned Fitchburg into something bigger than a farming town. Water power drew textile mills, paper mills, and machine shops to the banks of the Nashua starting in the early 1800s, and when the railroad reached Fitchburg in 1845, thanks largely to paper manufacturer Alvah Crocker&apos;s push to get the tracks built, the city took off. Fitchburg became a city in 1872, and the Victorian era buildings downtown, including City Hall and the homes along Highland Avenue, still reflect how much money moved through the city during its industrial peak.
                </p>
                <p>
                  That blend of rich industrial architecture and vibrant commercial enterprise defines Fitchburg today. Enterprise Cleaning Corporation brings owner-supervised{" "}
                  <Link href="/janitorial-services" className="text-[#0090c8] font-bold hover:underline">janitorial care</Link>{" "}
                  to this community, preserving the distinct character of historic downtown and converted mill spaces while maintaining clinical sanitation benchmarks in modern professional facilities.
                </p>
              </div>

              {/* Districts and Commercial Hubs — narrower column */}
              <div className="lg:col-span-2">
                <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#0090c8]/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4 text-[#0090c8]" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base leading-tight">Key Fitchburg Districts</h3>
                  </div>
                  <p className="text-slate-500 text-xs font-medium mb-4">Enterprise Cleaning Corporation maintains commercial facilities across Fitchburg:</p>
                  <div className="space-y-2.5">
                    {[
                      { area: "Downtown Core & City Hall", detail: "Municipal facilities, historic Main Street storefronts & offices" },
                      { area: "Route 2 Commercial Corridor", detail: "Corporate offices, medical centers & retail plazas" },
                      { area: "MBTA Commuter Rail District", detail: "Transit-oriented professional practices & commercial suites" },
                      { area: "Converted Mill Complexes", detail: "Historic brick & timber factories repurposed as creative office space" },
                      { area: "Rollstone Boulder & Upper Common", detail: "Civic center, legal practices & financial institutions" },
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
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Industrial Resilience</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              An industrial city with a lot still standing
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Unlike a lot of New England mill towns that specialized in one product, Fitchburg never depended on just one industry. Paper mills, machine and tool works, textile factories, and eventually plastics and medical manufacturing have all had a home here at different points. That range is part of why Fitchburg has held onto more of its commercial base than some of its neighbors, even after the original mill economy faded.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-6">
            <div className="max-w-4xl mx-auto space-y-4 text-slate-600 font-medium leading-relaxed text-[0.97rem]">
              <p>
                Downtown still carries the marks of that history. The Rollstone Boulder, a 110 ton glacial rock that was moved into the city common in 1929 to save it from being quarried, sits right in the middle of town as one of the most recognizable landmarks in the city. The Fitchburg Art Museum, founded in 1925, is a genuinely well regarded museum for a city this size, a legacy of the wealth the paper and textile industries generated a century ago. Coggshall Park, more than 250 wooded acres around Mirror Lake, gives the city green space that a lot of small industrial cities never got around to preserving.
              </p>
              <p>
                Whether managing older timber-framed mill conversions, medical facilities along Route 2, or busy downtown offices near City Hall, Enterprise Cleaning Corporation delivers versatile, accountable{" "}
                <Link href="/office-cleaning" className="text-[#0090c8] font-bold hover:underline">office cleaning services</Link>{" "}
                that protect the physical assets and prestige of your facility.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              {[
                { title: "The Rollstone Boulder", desc: "110-ton glacial monument preserved in 1929 on the common, symbolizing Fitchburg's enduring strength." },
                { title: "Fitchburg Art Museum", desc: "Founded in 1925, representing the lasting cultural legacy and civic wealth created by early industry." },
                { title: "Coggshall Park Preservation", desc: "Over 250 scenic acres surrounding Mirror Lake, maintaining exceptional quality of life for the community." },
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
                Carpet cleaning for Fitchburg&apos;s offices, mills, and storefronts
              </h2>

              <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  Fitchburg&apos;s commercial buildings run the gamut, from converted mill space and historic downtown storefronts to newer office and medical buildings along Route 2. Carpet in an old mill conversion behaves differently than carpet in a modern medical office, and our crews adjust the method accordingly.
                </p>
                <p>
                  We use hot water extraction for a deep, thorough clean and low moisture methods when a space needs to be back in service fast. Whether it is a professional office near City Hall, a retail space downtown, or a converted industrial building repurposed for offices, we handle spot treatment, high traffic lane cleaning, and scheduled maintenance programs that keep carpet looking presentable between deep cleans.
                </p>
                <p>
                  Buildings near the MBTA commuter rail station and along Main Street get scheduled around business hours so cleaning does not interrupt foot traffic or tenant access.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Truck-Mounted Hot Water Extraction",
                  "Low-Moisture Encapsulation Cleans",
                  "Salt, Slush & Winter Soil Extraction",
                  "High-Traffic Commercial Lane Revitalization",
                  "Dedicated Spot & Beverage Treatment",
                  "Flexible Night & Weekend Dispatch"
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
                  src="/images/fitchburg_cleaning_hero.png"
                  alt="Commercial Carpet Cleaning in Fitchburg MA"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent text-white">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#FFE800]">Historic Mills &amp; Route 2 Offices</div>
                  <div className="text-lg font-extrabold mt-1">Specialized Carpet &amp; Deep Fiber Cleaning</div>
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
                  src="/images/fitchburg_cleaning_banner.png"
                  alt="Post Construction Cleaning for Fitchburg MA Renovation Projects"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent text-white">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#00B8FF]">Rough · Detail · Final Occupancy Pass</div>
                  <div className="text-lg font-extrabold mt-1">Renovation &amp; Mill Turnover Specialists</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#E31837] text-xs font-black uppercase tracking-wider">
                <HardHat className="w-3.5 h-3.5" /> Project Turnover Specialists
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Post construction cleanup for Fitchburg&apos;s renovated spaces
              </h2>

              <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  A lot of Fitchburg&apos;s commercial growth in recent years has come from renovating older buildings rather than building new ones from scratch, and renovation work leaves behind just as much mess as new construction, sometimes more, since older buildings often have decades of accumulated dust and debris disturbed during the work.
                </p>
                <p>
                  Our post construction crews handle the rough clean to clear out debris and heavy dust, a detail clean that covers every surface, sill, vent, and light fixture construction dust reaches, and a final clean that gets the space ready to open.
                </p>
                <p>
                  We coordinate directly with contractors and property owners so the timeline lines up with move in day or opening day, whether the project is a single office suite or a full building renovation.
                </p>
              </div>

              {/* 3-Stage Process Breakdown */}
              <div className="grid sm:grid-cols-3 gap-3 pt-2">
                {[
                  { stage: "Stage 1: Rough Clean", desc: "Clearing bulk debris, heavy dust, packaging, and protective floor covers" },
                  { stage: "Stage 2: Detail Clean", desc: "Deep wipe of vents, fixtures, sills, glass scraping, and machine floor scrub" },
                  { stage: "Stage 3: Final Clean", desc: "Meticulous walk-through pass ready for immediate occupancy and opening day" }
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
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── EVERYTHING ELSE FITCHBURG BUSINESSES NEED ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Comprehensive Facility Services</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              The complete lineup for Fitchburg businesses
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Carpet cleaning and post construction work are two of the services we handle most often in Fitchburg, but our full service list covers:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Nightly and Scheduled Janitorial Cleaning",
                desc: "Thorough nighttime office cleaning, trash removal, surface sanitization, and restroom restocking customized to your building schedule.",
                href: "/janitorial-services"
              },
              {
                icon: Users,
                title: "Day Porter and Matron Staffing",
                desc: "Continuous daytime maintenance for high-traffic lobbies, conference rooms, touchpoints, and cafeterias during business hours.",
                href: "/office-cleaning"
              },
              {
                icon: Stethoscope,
                title: "Medical & Healthcare Office Cleaning",
                desc: "Compliant healthcare facility cleaning with medical-grade hospital disinfectants, terminal cleaning, and cross-contamination control.",
                href: "/medical-healthcare-cleaning-central-ma"
              },
              {
                icon: Sparkles,
                title: "Floor Care Beyond Carpet (Strip & Wax)",
                desc: "High-solid strip and wax, machine scrubbing, VCT maintenance, ceramic tile and grout restoration, and warehouse concrete sealing.",
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
                title: "Pressure Washing for Entrances & Parking Areas",
                desc: "High-PSI commercial washing to remove grime, salt residue, gum, and oil marks from concrete walkways, sidewalks, and parking areas.",
                href: "/specialty-cleaning-services-central-ma"
              },
              {
                icon: Layers,
                title: "Disinfection & Electrostatic Spraying",
                desc: "Complete wrap-around surface pathogen reduction with electrostatic spray systems for high-touch points, desks, and shared spaces.",
                href: "/specialty-cleaning-services-central-ma"
              },
              {
                icon: HardHat,
                title: "Turnkey Post-Construction Cleanout",
                desc: "Phased cleanup coordination with general contractors, transforming newly renovated buildings into turnkey tenant spaces.",
                href: "/post-construction-cleaning-central-ma"
              },
              {
                icon: Briefcase,
                title: "Turnover Cleaning for Commercial Suites",
                desc: "Fast, comprehensive turnover cleaning between commercial leases to help property managers prepare for incoming tenants.",
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
              Property managers with older downtown buildings often start with a single deep clean or post construction job and move into a standing janitorial contract once they see how the crew handles the building.
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
                  Enterprise Cleaning Corporation has been serving commercial clients across Central Massachusetts for more than two decades, run day to day by owners Steve Buchalter and Julio Biage out of our base in West Boylston.
                </p>
                <p>
                  The company has been named a Worcester Business Journal Best of Business winner four times and has held Better Business Bureau accreditation since 2007. We hold a 97% client retention rate, and long term relationships with regional clients like MacIntire Insurance and the Worcester Club reflect that consistency.
                </p>
                <p>
                  Fitchburg falls within our regular Worcester County service territory, and our crews run scheduled routes through North Central Mass every week.
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
                    Long-term commercial partnerships built on direct owner accountability with Steve Buchalter and Julio Biage.
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
                  <span className="text-[#FFE800] font-bold">Worcester County Coverage</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── WHERE WE WORK IN FITCHBURG + BANNER IMAGE ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/fitchburg_cleaning_banner.png"
            alt="Commercial cleaning in Fitchburg MA Route 2 corridor"
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
                Where we work in Fitchburg
              </h2>
              <div className="space-y-4 text-slate-200 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  We serve businesses throughout Fitchburg, from the downtown core near City Hall and the Rollstone Boulder to office and medical buildings along Route 2 and the commercial space near the commuter rail station.
                </p>
                <p>
                  Property managers handling converted mill buildings and historic downtown storefronts both rely on us, since we adjust the cleaning approach to what an older building actually needs rather than treating every space the same way.
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
                { icon: MapPin, stat: "Route 2", label: "Highway Corridor Coverage" },
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
                Common questions from Fitchburg business owners
              </h2>
              <p className="text-slate-500 font-medium">
                Transparent answers regarding our commercial carpet, post-construction, and janitorial services in Fitchburg.
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
                Ready to talk about cleaning for your Fitchburg building?
              </h2>
              <p className="text-slate-600 font-medium mt-4 leading-relaxed text-base">
                For a quote on cleaning your Fitchburg building, call Enterprise Cleaning Corporation at <a href="tel:5088901000" className="text-[#0090c8] font-bold hover:underline">(508) 890-1000</a>, or reach out to <Link href="/alex-puchulu-business-card" className="text-[#0090c8] font-bold hover:underline">Alex Puchulu</Link>, our Director of Sales and Marketing, to schedule a walkthrough.
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
                "Route 2 & Downtown Coverage",
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
