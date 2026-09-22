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
  "@type": "Service",
  "serviceType": "Commercial Cleaning Services",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Enterprise Cleaning Corporation",
    "image": "https://www.enterprisecleaningcorp.com/images/ecc-new-logo.png",
    "telephone": "508-890-1000",
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
      "latitude": 42.5834,
      "longitude": -71.8023
    },
    "url": "https://www.enterprisecleaningcorp.com"
  },
  "areaServed": { "@type": "City", "name": "Fitchburg, MA" },
  "url": "https://www.enterprisecleaningcorp.com/commercial-cleaning-fitchburg-ma"
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

      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-16 md:py-24">
        {/* Brand Accent Bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0090c8] via-[#E31837] to-[#FFE800]" />
        
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#0090c8_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headings & Intro */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B8FF] bg-[#0090c8]/15 border border-[#0090c8]/30 px-3.5 py-1.5 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#E31837]" />
                Fitchburg, Massachusetts &bull; Worcester County
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Commercial cleaning services in Fitchburg, Massachusetts
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed">
                Expert carpet cleaning, post-construction cleanup, and customized commercial janitorial programs for Fitchburg&apos;s converted mills, historic downtown buildings, Route 2 commercial corridors, and modern facilities.
              </p>

              {/* Trust Badges Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 flex items-center gap-2.5">
                  <Trophy className="w-5 h-5 text-[#FFE800] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">4x WBJ Winner</div>
                    <div className="text-[11px] text-slate-400">Best of Business</div>
                  </div>
                </div>
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#00B8FF] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">BBB Accredited</div>
                    <div className="text-[11px] text-slate-400">Since 2007 A+</div>
                  </div>
                </div>
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <Users className="w-5 h-5 text-[#E31837] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">97% Retention</div>
                    <div className="text-[11px] text-slate-400">Client Loyalty</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/commercial-cleaning-quote"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-[#E31837] hover:bg-[#c9142e] shadow-lg shadow-[#E31837]/30 transition-all text-sm md:text-base group"
                >
                  <span>Request a walkthrough</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:5088901000"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-slate-600 transition-all text-sm md:text-base"
                >
                  <PhoneCall className="w-4 h-4 text-[#00B8FF]" />
                  <span>(508) 890-1000</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Image with Stats Overlay */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 group">
                <Image
                  src="/images/fitchburg_cleaning_hero.png"
                  alt="Enterprise Cleaning Corp commercial cleaning team operating hot water extraction carpet care and post construction cleanup in a converted Fitchburg mill space"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">Local Leadership</p>
                      <p className="text-xs text-slate-300">Steve Buchalter &amp; Julio Biage</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#0090c8]/20 text-[#00B8FF] border border-[#0090c8]/40">
                      More than two decades
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 1: TOWN HISTORY & RIVER HERITAGE ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0090c8] bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100">
              <Building2 className="w-3.5 h-3.5 text-[#0090c8]" />
              Fitchburg Heritage &bull; Established 1764
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A city shaped by the Nashua River and industrial ambition
            </h2>

            <div className="prose prose-slate max-w-none text-base md:text-lg text-slate-600 leading-relaxed space-y-5">
              <p>
                Fitchburg&apos;s whole story runs along the Nashua River. The area was first settled in 1730 as part of Lunenburg, back when the land was known as Turkey Hills for the wild turkeys that lived there. It took three years of petitioning by settlers including Amos Kimball and Samuel Hunt before the town was incorporated on its own in 1764, named for John Fitch, one of the men who pushed the petition through.
              </p>
              <p>
                The river is what turned Fitchburg into something bigger than a farming town. Water power drew textile mills, paper mills, and machine shops to the banks of the Nashua starting in the early 1800s, and when the railroad reached Fitchburg in 1845, thanks largely to paper manufacturer Alvah Crocker&apos;s push to get the tracks built, the city took off. Fitchburg became a city in 1872, and the Victorian era buildings downtown, including City Hall and the homes along Highland Avenue, still reflect how much money moved through the city during its industrial peak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: LANDMARKS & DIVERSE COMMERCIAL BASE ─── */}
      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E31837] bg-red-50 px-3 py-1.5 rounded-full border border-red-100 mb-3">
                <Trophy className="w-3.5 h-3.5 text-[#E31837]" />
                Commercial Continuity
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                An industrial city with a lot still standing
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-base md:text-lg text-slate-600 leading-relaxed space-y-5">
              <p>
                Unlike a lot of New England mill towns that specialized in one product, Fitchburg never depended on just one industry. Paper mills, machine and tool works, textile factories, and eventually plastics and medical manufacturing have all had a home here at different points. That range is part of why Fitchburg has held onto more of its commercial base than some of its neighbors, even after the original mill economy faded.
              </p>
              <p>
                Downtown still carries the marks of that history. The Rollstone Boulder, a 110 ton glacial rock that was moved into the city common in 1929 to save it from being quarried, sits right in the middle of town as one of the most recognizable landmarks in the city. The Fitchburg Art Museum, founded in 1925, is a genuinely well regarded museum for a city this size, a legacy of the wealth the paper and textile industries generated a century ago. Coggshall Park, more than 250 wooded acres around Mirror Lake, gives the city green space that a lot of small industrial cities never got around to preserving.
              </p>
            </div>

            {/* Visual Highlight Cards */}
            <div className="grid sm:grid-cols-3 gap-5 pt-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#0090c8] flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">The Rollstone Boulder</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Saved from quarrying in 1929 and relocated to the upper common, this 110-ton landmark symbolizes the lasting endurance of the city.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-[#E31837] flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Fitchburg Art Museum</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Founded in 1925, housing world-class galleries and showcasing the cultural heritage that supported Central Mass industry.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Coggshall Park</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Over 250 pristine acres surrounding Mirror Lake, representing the civic preservation that distinguishes North Central Mass.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEAD SERVICE #1: CARPET CLEANING ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0090c8] bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100">
                <Sparkles className="w-3.5 h-3.5 text-[#0090c8]" />
                Lead Specialty Service
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Carpet cleaning for Fitchburg&apos;s offices, mills, and storefronts
              </h2>

              <div className="prose prose-slate max-w-none text-base md:text-lg text-slate-600 leading-relaxed space-y-4">
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

              <div className="pt-2">
                <Link
                  href="/floor-care-services-central-ma"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0090c8] hover:text-[#007ba8] transition-colors"
                >
                  <span>Explore full floor care and carpet cleaning programs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-8 rounded-2xl text-white shadow-xl space-y-5 border border-slate-700">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#00B8FF]" />
                Carpet Care Protocols
              </h3>
              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00B8FF] shrink-0 mt-0.5" />
                  <span><strong>Truck-mount hot water extraction:</strong> Deep fiber flush removing soil, road salt, and ground-in residues from high-traffic corridors.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00B8FF] shrink-0 mt-0.5" />
                  <span><strong>Encapsulation low-moisture cleaning:</strong> Fast-drying procedure for fast turnarounds in busy 24/7 or daytime offices.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00B8FF] shrink-0 mt-0.5" />
                  <span><strong>Stain and high-traffic spot management:</strong> Immediate treatment of tough spills, beverage marks, and entrance track-in.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00B8FF] shrink-0 mt-0.5" />
                  <span><strong>Adaptive care for converted mills:</strong> Safe handling of legacy subflooring, heavy timber environments, and mixed surfaces.</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-slate-700">
                <Link
                  href="/commercial-cleaning-quote"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white bg-[#0090c8] hover:bg-[#007ba8] transition-all text-sm"
                >
                  Schedule carpet walkthrough
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── LEAD SERVICE #2: POST-CONSTRUCTION CLEANUP ─── */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Image Banner */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                <Image
                  src="/images/fitchburg_cleaning_banner.png"
                  alt="Enterprise Cleaning Corp post construction cleanup and floor care in a newly renovated commercial office facility in Fitchburg MA"
                  width={550}
                  height={380}
                  className="w-full h-auto object-cover"
                />
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#E31837] uppercase tracking-wider">
                    <HardHat className="w-4 h-4" />
                    Turnkey Handover Standard
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Three-stage post-construction detailing removing fine silica dust, drywall powder, and mechanical residues so renovations are move-in ready.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Copy */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E31837] bg-red-50 px-3 py-1.5 rounded-full border border-red-100">
                <HardHat className="w-3.5 h-3.5 text-[#E31837]" />
                Renovations &amp; New Buildouts
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Post construction cleanup for Fitchburg&apos;s renovated spaces
              </h2>

              <div className="prose prose-slate max-w-none text-base md:text-lg text-slate-600 leading-relaxed space-y-4">
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

              {/* 3-Stage Process Grid */}
              <div className="grid sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <div className="text-xs font-black text-[#E31837] uppercase tracking-wider mb-1">Phase 1: Rough</div>
                  <div className="text-xs text-slate-600">Heavy debris, protective wraps, and bulk drywall dust extraction.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <div className="text-xs font-black text-[#0090c8] uppercase tracking-wider mb-1">Phase 2: Detail</div>
                  <div className="text-xs text-slate-600">Microfiber wiping of ducts, frames, vents, fixtures, and corners.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <div className="text-xs font-black text-emerald-600 uppercase tracking-wider mb-1">Phase 3: Final</div>
                  <div className="text-xs text-slate-600">Polished floors, spotless glass, and full tenant walk-through polish.</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/post-construction-cleaning-massachusetts"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#E31837] hover:text-[#c9142e] transition-colors"
                >
                  <span>Learn more about our post-construction services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 4: FULL SERVICE LINEUP ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="space-y-6 mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0090c8] bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100">
              <Briefcase className="w-3.5 h-3.5 text-[#0090c8]" />
              Comprehensive Commercial Care
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              The complete lineup for Fitchburg businesses
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Carpet cleaning and post construction work are two of the services we handle most often in Fitchburg, but our full service list covers:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Service 1 */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-[#0090c8] transition-colors group">
              <div className="w-9 h-9 rounded-lg bg-[#0090c8]/10 text-[#0090c8] flex items-center justify-center mb-3 group-hover:bg-[#0090c8] group-hover:text-white transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">Nightly and scheduled janitorial</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Thorough nighttime office cleaning, trash removal, surface sanitization, and restroom restocking customized to your building schedule.
              </p>
              <Link href="/janitorial-services" className="text-xs font-bold text-[#0090c8] inline-flex items-center gap-1 hover:underline">
                Janitorial services <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-[#0090c8] transition-colors group">
              <div className="w-9 h-9 rounded-lg bg-[#0090c8]/10 text-[#0090c8] flex items-center justify-center mb-3 group-hover:bg-[#0090c8] group-hover:text-white transition-colors">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">Day porter and matron staffing</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Continuous daytime maintenance for high-traffic lobbies, conference rooms, touchpoints, and cafeterias during business hours.
              </p>
              <Link href="/office-cleaning" className="text-xs font-bold text-[#0090c8] inline-flex items-center gap-1 hover:underline">
                Office cleaning <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-[#0090c8] transition-colors group">
              <div className="w-9 h-9 rounded-lg bg-[#0090c8]/10 text-[#0090c8] flex items-center justify-center mb-3 group-hover:bg-[#0090c8] group-hover:text-white transition-colors">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">Medical and healthcare cleaning</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Compliant healthcare facility cleaning with medical-grade hospital disinfectants, terminal cleaning, and cross-contamination control.
              </p>
              <Link href="/medical-office-cleaning" className="text-xs font-bold text-[#0090c8] inline-flex items-center gap-1 hover:underline">
                Healthcare cleaning <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-[#0090c8] transition-colors group">
              <div className="w-9 h-9 rounded-lg bg-[#0090c8]/10 text-[#0090c8] flex items-center justify-center mb-3 group-hover:bg-[#0090c8] group-hover:text-white transition-colors">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">Floor care beyond carpet</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                High-solid strip and wax, machine scrubbing, VCT maintenance, ceramic tile and grout restoration, and warehouse concrete sealing.
              </p>
              <Link href="/floor-care-services-central-ma" className="text-xs font-bold text-[#0090c8] inline-flex items-center gap-1 hover:underline">
                Floor care services <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Service 5 */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-[#0090c8] transition-colors group">
              <div className="w-9 h-9 rounded-lg bg-[#0090c8]/10 text-[#0090c8] flex items-center justify-center mb-3 group-hover:bg-[#0090c8] group-hover:text-white transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">Window and exterior pressure washing</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Streak-free interior and exterior architectural glass cleaning, combined with high-PSI washing for walkways, entrances, and parking lots.
              </p>
              <Link href="/specialty-cleaning-services-central-ma" className="text-xs font-bold text-[#0090c8] inline-flex items-center gap-1 hover:underline">
                Specialty cleaning <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Service 6 */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-[#0090c8] transition-colors group">
              <div className="w-9 h-9 rounded-lg bg-[#0090c8]/10 text-[#0090c8] flex items-center justify-center mb-3 group-hover:bg-[#0090c8] group-hover:text-white transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">Disinfection &amp; electrostatic spraying</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Complete wrap-around surface pathogen reduction with electrostatic spray systems for high-touch points, desks, and shared spaces.
              </p>
              <Link href="/turnover-cleaning-central-ma" className="text-xs font-bold text-[#0090c8] inline-flex items-center gap-1 hover:underline">
                Turnover cleaning <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-xl bg-sky-50 border border-sky-100 text-slate-700 text-sm md:text-base leading-relaxed text-center">
            Property managers with older downtown buildings often start with a single deep clean or post construction job and move into a standing janitorial contract once they see how the crew handles the building.
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: LOCAL CREDENTIALS & TRUST ─── */}
      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B8FF] bg-[#0090c8]/15 border border-[#0090c8]/30 px-3.5 py-1.5 rounded-full">
                <Trophy className="w-3.5 h-3.5 text-[#FFE800]" />
                Local Experience &bull; Central MA Base
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Locally owned, more than two decades in Central Massachusetts
              </h2>

              <div className="text-slate-300 text-base md:text-lg leading-relaxed space-y-4">
                <p>
                  Enterprise Cleaning Corporation has been serving commercial clients across Central Massachusetts for more than two decades, run day to day by owners Steve Buchalter and Julio Biage out of our base in West Boylston.
                </p>
                <p>
                  The company has been named a Worcester Business Journal Best of Business winner four times and has held Better Business Bureau accreditation since 2007.
                </p>
                <p>
                  We hold a 97% client retention rate, and long term relationships with regional clients like MacIntire Insurance and the Worcester Club reflect that consistency. Fitchburg falls within our regular Worcester County service territory.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#00B8FF] hover:text-white transition-colors"
                >
                  <span>Learn more about our ownership and 97% retention story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Card: Credential Counters */}
            <div className="lg:col-span-5 bg-slate-800/90 border border-slate-700 rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-slate-700 pb-3">
                Why Worcester County relies on ECC
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/60">
                  <span className="text-sm text-slate-300">Client retention rate</span>
                  <span className="text-lg font-black text-[#00B8FF]">97%</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/60">
                  <span className="text-sm text-slate-300">WBJ Best of Business awards</span>
                  <span className="text-lg font-black text-[#FFE800]">4-Time Winner</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/60">
                  <span className="text-sm text-slate-300">BBB accreditation</span>
                  <span className="text-lg font-black text-white">Since 2007 (A+)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Regional experience</span>
                  <span className="text-lg font-black text-[#E31837]">20+ Years</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs text-slate-400">
                Direct owner oversight on every contract with customized quality inspection logs.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 6: WHERE WE WORK IN FITCHBURG ─── */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="space-y-6 mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0090c8] bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100">
              <MapPin className="w-3.5 h-3.5 text-[#E31837]" />
              Local Service Footprint
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Where we work in Fitchburg
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              We serve businesses throughout Fitchburg, from the downtown core near City Hall and the Rollstone Boulder to office and medical buildings along Route 2 and the commercial space near the commuter rail station. Property managers handling converted mill buildings and historic downtown storefronts both rely on us, since we adjust the cleaning approach to what an older building actually needs rather than treating every space the same way.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Downtown &amp; City Hall</h3>
              <p className="text-xs text-slate-500">Main Street businesses, municipal facilities, and offices around Rollstone Boulder.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Route 2 Corridor</h3>
              <p className="text-xs text-slate-500">Corporate offices, medical centers, and highway-accessible commercial suites.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm mb-1">MBTA Commuter Rail Station</h3>
              <p className="text-xs text-slate-500">Transit-adjacent mixed-use buildings, retail spaces, and professional practices.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Converted Mill Properties</h3>
              <p className="text-xs text-slate-500">Repurposed historic textile and paper mill complexes now housing modern offices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: FAQS ─── */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-200/80">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0090c8] bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100">
              <ChevronDown className="w-3.5 h-3.5 text-[#0090c8]" />
              Frequently Asked Questions
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Common questions from Fitchburg business owners
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Clear answers regarding our commercial cleaning, carpet care, and post-construction processes in Fitchburg.
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group border border-slate-200 rounded-xl bg-white p-5 transition-colors open:bg-slate-50/60 open:border-[#0090c8]/40">
              <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-base md:text-lg list-none select-none">
                <span>Do you clean older, historic commercial buildings?</span>
                <span className="transition-transform group-open:rotate-180 text-slate-400 group-open:text-[#0090c8] shrink-0 ml-4">
                  <ChevronDown className="w-5 h-5" />
                </span>
              </summary>
              <div className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed pt-2 border-t border-slate-100">
                Yes. A lot of our Fitchburg work is in older downtown buildings and converted mill space. We adjust our methods for older flooring, plaster, and fixtures instead of using a one size fits all approach.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group border border-slate-200 rounded-xl bg-white p-5 transition-colors open:bg-slate-50/60 open:border-[#0090c8]/40">
              <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-base md:text-lg list-none select-none">
                <span>How do you handle post construction cleaning in a renovation project?</span>
                <span className="transition-transform group-open:rotate-180 text-slate-400 group-open:text-[#0090c8] shrink-0 ml-4">
                  <ChevronDown className="w-5 h-5" />
                </span>
              </summary>
              <div className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed pt-2 border-t border-slate-100">
                We work directly with the contractor or property owner on timing, then run a rough clean, detail clean, and final clean so the space is ready for occupancy by the handover date.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group border border-slate-200 rounded-xl bg-white p-5 transition-colors open:bg-slate-50/60 open:border-[#0090c8]/40">
              <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-base md:text-lg list-none select-none">
                <span>Is carpet cleaning included in a standard janitorial contract, or is it separate?</span>
                <span className="transition-transform group-open:rotate-180 text-slate-400 group-open:text-[#0090c8] shrink-0 ml-4">
                  <ChevronDown className="w-5 h-5" />
                </span>
              </summary>
              <div className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed pt-2 border-t border-slate-100">
                Carpet cleaning is usually scheduled separately from nightly janitorial service, since it needs different equipment and timing. Many Fitchburg clients bundle both into one ongoing contract for simplicity.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group border border-slate-200 rounded-xl bg-white p-5 transition-colors open:bg-slate-50/60 open:border-[#0090c8]/40">
              <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-base md:text-lg list-none select-none">
                <span>Do you serve buildings near the commuter rail station and downtown?</span>
                <span className="transition-transform group-open:rotate-180 text-slate-400 group-open:text-[#0090c8] shrink-0 ml-4">
                  <ChevronDown className="w-5 h-5" />
                </span>
              </summary>
              <div className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed pt-2 border-t border-slate-100">
                Yes. Downtown Fitchburg, the area near City Hall, and the commercial buildings along Main Street and Route 2 are all part of our regular service area.
              </div>
            </details>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/commercial-cleaning-faq"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0090c8] hover:underline"
            >
              <span>View our complete commercial cleaning FAQ repository</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: FINAL CALL TO ACTION ─── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0090c8_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B8FF] bg-[#0090c8]/20 border border-[#0090c8]/40 px-3.5 py-1.5 rounded-full">
            <CalendarCheck className="w-3.5 h-3.5 text-[#00B8FF]" />
            Schedule an on-site walkthrough
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to improve your Fitchburg facility&apos;s clean?
          </h2>

          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            For a quote on cleaning your Fitchburg building, call Enterprise Cleaning Corporation at (508) 890-1000, or reach out to Alex, our Director of Sales and Marketing, to schedule a walkthrough.
          </p>

          {/* Contact Direct Cards */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left pt-2">
            <a
              href="tel:5083042369"
              className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-[#00B8FF] transition-all group"
            >
              <div className="text-xs text-slate-400 mb-1">Director of Sales &amp; Marketing</div>
              <div className="font-bold text-white text-base group-hover:text-[#00B8FF] transition-colors">Alex Puchulu</div>
              <div className="text-sm font-semibold text-[#00B8FF] mt-1 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                (508) 304-2369
              </div>
            </a>

            <a
              href="tel:5088901000"
              className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-[#E31837] transition-all group"
            >
              <div className="text-xs text-slate-400 mb-1">West Boylston Main Office</div>
              <div className="font-bold text-white text-base group-hover:text-red-400 transition-colors">Enterprise Cleaning Corp</div>
              <div className="text-sm font-semibold text-red-400 mt-1 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                (508) 890-1000
              </div>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/commercial-cleaning-quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-[#E31837] hover:bg-[#c9142e] shadow-xl shadow-[#E31837]/30 transition-all text-base group"
            >
              <span>Get a customized quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all text-base"
            >
              <span>Contact our team</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
