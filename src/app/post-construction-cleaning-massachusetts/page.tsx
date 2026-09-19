import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  HardHat,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Building2,
  ArrowRight,
  ArrowDown,
  PhoneCall,
  CalendarCheck,
  Sparkles,
  Layers,
  FileText,
  MapPin,
  Award,
  Users,
  Briefcase,
  CheckSquare,
  Wrench,
  ChevronRight,
  Check,
  ShieldAlert,
} from "lucide-react";
import { GcBidCenter } from "@/components/gc-bid-center";
import { GcFaqAccordion } from "@/components/gc-faq-accordion";
import { gcPostConstructionFaqs } from "@/lib/gc-faqs";

export const metadata: Metadata = {
  title: {
    absolute: "Post-Construction Cleaning Massachusetts | Enterprise Cleaning",
  },
  description:
    "Massachusetts post-construction cleaning for general contractors, builders and construction managers. Rough clean, final clean, punch-list touch-up and janitorial transition. Request a bid.",
  keywords: [
    "post-construction cleaning Massachusetts",
    "commercial post-construction cleaning Massachusetts",
    "construction cleaning Massachusetts",
    "post-construction cleanup Massachusetts",
    "construction cleanup company Massachusetts",
    "post-construction cleaning company",
    "commercial construction cleaning",
    "construction final cleaning",
    "final construction cleaning",
    "rough construction cleaning",
    "punch-list cleaning",
    "construction touch-up cleaning",
    "construction cleaning subcontractor",
    "cleaning subcontractor for general contractors",
  ].join(", "),
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/post-construction-cleaning-massachusetts",
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

// Structured Data Schemas
const structuredDataOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Enterprise Cleaning Corporation",
  "url": "https://www.enterprisecleaningcorp.com",
  "logo": "https://www.enterprisecleaningcorp.com/images/ecc-new-logo.png",
  "telephone": "508-890-1000",
  "sameAs": [
    "https://www.linkedin.com/company/enterprise-cleaning-corporation/",
    "https://www.facebook.com/people/Enterprise-Cleaning/61591593631296/",
    "https://www.instagram.com/enterprisecleaningcorporation",
    "https://www.bbb.org/us/ma/west-boylston/profile/commercial-cleaning/enterprise-cleaning-corporation-0101-90059"
  ]
};

const structuredDataLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Enterprise Cleaning Corporation - Massachusetts Post-Construction Cleaning",
  "image": "https://www.enterprisecleaningcorp.com/images/ecc-new-logo.png",
  "telephone": "508-890-1000",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "99 Hartwell Street",
    "addressLocality": "West Boylston",
    "addressRegion": "MA",
    "postalCode": "01583",
    "addressCountry": "US",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.3648,
    "longitude": -71.7854,
  },
  "url": "https://www.enterprisecleaningcorp.com/post-construction-cleaning-massachusetts",
  "areaServed": [
    { "@type": "State", "name": "Massachusetts" },
    { "@type": "City", "name": "Worcester" },
    { "@type": "City", "name": "Marlborough" },
    { "@type": "City", "name": "Framingham" },
    { "@type": "City", "name": "Waltham" },
    { "@type": "City", "name": "Boston" }
  ]
};

const structuredDataService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Commercial Post-Construction Cleaning Massachusetts",
  "serviceType": "Post-Construction Cleaning for General Contractors",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Enterprise Cleaning Corporation",
    "telephone": "508-890-1000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "99 Hartwell Street",
      "addressLocality": "West Boylston",
      "addressRegion": "MA",
      "postalCode": "01583",
      "addressCountry": "US",
    }
  },
  "description": "Massachusetts post-construction cleaning for general contractors, builders and construction managers. Rough clean, final clean, punch-list touch-up and janitorial transition.",
  "areaServed": {
    "@type": "State",
    "name": "Massachusetts"
  }
};

const structuredDataBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.enterprisecleaningcorp.com",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.enterprisecleaningcorp.com/#services",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Post-Construction Cleaning Massachusetts",
      "item": "https://www.enterprisecleaningcorp.com/post-construction-cleaning-massachusetts",
    },
  ],
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": gcPostConstructionFaqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

export default function PostConstructionCleaningMassachusettsPage() {
  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataOrganization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataLocalBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataFAQ) }}
      />

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 px-4 flex sm:hidden items-center justify-between shadow-2xl">
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-[#003057] uppercase tracking-wider">GC Bid Center</span>
          <span className="text-[10px] text-[#0090c8] font-bold">Fast 24-48h Estimating</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="tel:508-890-1000"
            className="p-2.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-800 hover:text-[#0090c8] transition-colors"
            aria-label="Call Enterprise"
          >
            <PhoneCall className="w-4 h-4" />
          </a>
          <a
            href="#gc-bid-center"
            className="px-4 py-2 rounded-xl bg-[#FFE800] text-slate-900 font-extrabold text-xs tracking-wide shadow-md hover:bg-yellow-300"
          >
            SUBMIT PROJECT
          </a>
        </div>
      </div>

      <main className="min-h-screen bg-white text-slate-800 selection:bg-[#0090c8] selection:text-white pb-20 sm:pb-0">
        
        {/* HERO SECTION (Authentic Enterprise Service Page Style) */}
        <section className="relative min-h-[640px] lg:min-h-[740px] flex items-center pt-24 pb-20 overflow-hidden" style={{ background: "#0090c8" }}>
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/post_construction_hero.png" 
              alt="Massachusetts post-construction cleaning for general contractors and builders" 
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-slate-950/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#003057]/95 via-[#0090c8]/75 to-transparent" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-end justify-between w-full h-full">
              
              {/* Left Content */}
              <div className="text-white space-y-6 max-w-3xl flex-1 mt-10">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/90 mb-4 font-medium">
                  <Link href="/" className="hover:text-white transition-colors whitespace-nowrap">Home</Link>
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFE800] shrink-0" />
                  <Link href="/#services" className="hover:text-white transition-colors whitespace-nowrap">Services</Link>
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFE800] shrink-0" />
                  <span className="text-[#FFE800] font-bold tracking-wide">Post-Construction Cleaning Massachusetts</span>
                </div>
                
                {/* H1 Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] drop-shadow-md text-white">
                  POST-CONSTRUCTION CLEANING <br className="hidden sm:inline" />
                  <span className="text-[#FFE800]">FOR GENERAL CONTRACTORS IN MASSACHUSETTS</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl font-bold text-white/95 leading-snug drop-shadow-sm">
                  From Rough Clean to Owner Turnover — Enterprise Helps You Finish the Project.
                </p>

                {/* Paragraphs verbatim */}
                <div className="text-sm sm:text-base text-white/90 font-medium leading-relaxed space-y-3 drop-shadow-sm text-left max-w-2xl">
                  <p>
                    A construction project isn't finished when the last trade packs up.
                  </p>
                  <p>
                    It's finished when the construction dust is removed, the glass is clean, the floors are detailed, the punch-list cleaning is complete and the building is ready for inspection, owner walkthrough and occupancy.
                  </p>
                  <p className="text-white font-bold">
                    Enterprise Cleaning Corporation provides commercial post-construction cleaning for general contractors, construction managers, builders and developers throughout Massachusetts.
                  </p>
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-xs sm:text-sm text-white/95 space-y-2 mt-2">
                    <p className="font-extrabold text-[#FFE800]">We understand construction schedules.</p>
                    <p>
                      Trades run late. Punch lists change. Inspectors arrive. Furniture gets delivered. Finish work creates new dust. Turnover dates don't always move just because the construction schedule did.
                    </p>
                    <p className="font-bold text-white">
                      That's why Enterprise doesn't treat post-construction cleaning like an oversized janitorial job.
                    </p>
                    <p className="text-[#FFE800] font-extrabold">
                      We Treat Cleaning as Part of Project Closeout.
                    </p>
                    <p>
                      Our team coordinates with your superintendent, project manager or construction team to execute the appropriate cleaning phase at the appropriate construction milestone.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a 
                    href="#gc-bid-center" 
                    className="inline-flex items-center gap-2 bg-[#FFE800] text-slate-900 font-extrabold px-7 py-3.5 rounded-full hover:bg-yellow-300 transition-all shadow-xl hover:scale-105 text-sm md:text-base"
                  >
                    SUBMIT A PROJECT FOR BID <ArrowRight className="w-4 h-4" />
                  </a>
                  <a 
                    href="#gc-bid-center" 
                    className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold px-6 py-3.5 rounded-full border border-white/30 transition-all text-sm md:text-base"
                  >
                    <CalendarCheck className="w-4 h-4 text-[#FFE800]" /> REQUEST A PROJECT WALKTHROUGH
                  </a>
                  <a 
                    href="#gc-bid-center" 
                    className="text-xs font-bold text-white/90 hover:text-white underline tracking-wide py-1"
                  >
                    ADD ENTERPRISE TO YOUR BID LIST
                  </a>
                </div>
                
                {/* Hero Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 mt-auto border-t border-white/25">
                  <div className="flex items-center gap-3">
                    <Clock className="w-7 h-7 text-[#FFE800] shrink-0" />
                    <div>
                      <div className="font-bold text-lg leading-tight text-white">23+ Years</div>
                      <div className="text-xs text-white/80">In Central MA</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-7 h-7 text-[#FFE800] shrink-0" />
                    <div>
                      <div className="font-bold text-lg leading-tight text-white">97%</div>
                      <div className="text-xs text-white/80">Client Retention</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building2 className="w-7 h-7 text-[#FFE800] shrink-0" />
                    <div>
                      <div className="font-bold text-lg leading-tight text-white">140+</div>
                      <div className="text-xs text-white/80">Commercial Clients</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-7 h-7 text-[#FFE800] shrink-0" />
                    <div>
                      <div className="font-bold text-lg leading-tight text-white">BBB A+</div>
                      <div className="text-xs text-white/80">In-House Teams</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Floating Card (Like other Enterprise service pages) */}
              <div className="w-full max-w-sm lg:mb-8">
                <div className="bg-white p-7 md:p-8 rounded-3xl shadow-2xl text-center space-y-4 border-b-4 border-[#00B8FF]">
                  <div className="mx-auto w-14 h-14 rounded-full bg-[#0090c8]/10 flex items-center justify-center mb-2">
                    <HardHat className="w-7 h-7 text-[#0090c8]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    THE ENTERPRISE 4-PHASE CONSTRUCTION CLEANING SYSTEM™
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    One Cleaning Partner. From Active Construction to Occupied Facility.
                  </p>
                  <div className="pt-3 border-t border-slate-100 space-y-2.5 text-left text-xs text-slate-700 font-semibold">
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="px-1.5 py-0.5 rounded bg-[#0090c8] text-white text-[10px] font-black">P1</span>
                      <div>
                        <div className="text-slate-900 font-bold">ROUGH CLEAN</div>
                        <div className="text-[11px] text-slate-500 font-normal">Prepare the Site for Finish Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="px-1.5 py-0.5 rounded bg-[#0090c8] text-white text-[10px] font-black">P2</span>
                      <div>
                        <div className="text-slate-900 font-bold">FINAL CONSTRUCTION CLEAN</div>
                        <div className="text-[11px] text-slate-500 font-normal">Prepare the Building for Inspection</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="px-1.5 py-0.5 rounded bg-[#0090c8] text-white text-[10px] font-black">P3</span>
                      <div>
                        <div className="text-slate-900 font-bold">FINAL TOUCH-UP / PUNCH LIST</div>
                        <div className="text-[11px] text-slate-500 font-normal">Prepare the Project for Owner Turnover</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-sky-50 border border-[#0090c8]/30">
                      <span className="px-1.5 py-0.5 rounded bg-[#003057] text-white text-[10px] font-black">P4</span>
                      <div>
                        <div className="text-[#003057] font-bold">JANITORIAL TRANSITION</div>
                        <div className="text-[11px] text-[#0090c8] font-medium">Protect the Facility After Occupancy</div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <a 
                      href="#gc-bid-center" 
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#003057] hover:bg-[#002240] text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors shadow-md"
                    >
                      Submit Project for Bid <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* SECTION 1: POST-CONSTRUCTION CLEANING BUILT FOR GENERAL CONTRACTORS */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto mb-14 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0090c8]/10 text-[#0090c8] text-xs font-extrabold uppercase tracking-wider mb-4">
                Subcontractor Closeout Partner
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#003057] tracking-tight mb-6">
                POST-CONSTRUCTION CLEANING BUILT FOR GENERAL CONTRACTORS
              </h2>
              <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed mb-4">
                Your cleaning subcontractor should make project closeout easier — not become another subcontractor your superintendent has to manage.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Enterprise Cleaning Corporation understands that commercial post-construction cleaning happens inside an active construction schedule.
              </p>
            </div>

            {/* Active Schedule Trade Callout Box with Visual Image */}
            <div className="max-w-5xl mx-auto mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider text-[#0090c8]">
                    We sequence cleaning around active trade progress:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Your painter may still be touching up walls.</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> The electrician may return.</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Ceiling tiles may still need adjustment.</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Millwork may be completed late.</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Furniture may arrive earlier than expected.</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> The owner's walkthrough date may already be locked in.</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  That's why communication and sequencing matter. Enterprise coordinates post-construction cleaning around the actual condition and progress of the project so your construction team can determine which areas are ready for rough cleaning, final cleaning or final touch-up.
                </p>
              </div>

              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3]">
                <Image
                  src="/images/post_construction_banner.png"
                  alt="Enterprise commercial post-construction cleaning crew in Massachusetts"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 3 Built Around Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0090c8] hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#0090c8]/10 flex items-center justify-center text-[#0090c8] mb-5">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Built Around Your Construction Schedule
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Cleaning can be phased by project milestone, floor, building section, work area or turnover requirement depending upon the project.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0090c8] hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#0090c8]/10 flex items-center justify-center text-[#0090c8] mb-5">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Built Around Your Superintendent
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Enterprise can coordinate with the designated superintendent, project manager or other authorized construction representative regarding access, cleaning readiness and project priorities.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0090c8] hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#0090c8]/10 flex items-center justify-center text-[#0090c8] mb-5">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Built Around Your Turnover Date
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The objective isn't simply to &ldquo;clean the building.&rdquo; The objective is to help deliver a clean, professional facility for inspection, walkthrough and owner or tenant turnover.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE ENTERPRISE 4-PHASE POST-CONSTRUCTION CLEANING PROCESS */}
        <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0090c8]/10 text-[#0090c8] text-xs font-extrabold uppercase tracking-wider mb-4">
                Full-Lifecycle Project Closeout
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#003057] tracking-tight">
                THE ENTERPRISE 4-PHASE POST-CONSTRUCTION CLEANING PROCESS
              </h2>
            </div>

            <div className="space-y-12 max-w-5xl mx-auto">
              
              {/* PHASE 1: ROUGH CONSTRUCTION CLEANING */}
              <div className="p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0090c8] text-white text-[11px] font-black uppercase tracking-wider mb-2">
                      PHASE 01
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                      PHASE 1 — ROUGH CONSTRUCTION CLEANING
                    </h2>
                    <h3 className="text-base font-bold text-[#0090c8] mt-0.5">
                      Prepare the Project for the Finish Trades
                    </h3>
                  </div>

                  <div className="p-3 px-5 rounded-xl bg-slate-50 border border-slate-200 text-center shrink-0">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">PROJECT MILESTONE</span>
                    <span className="text-xs font-black text-slate-900 block mt-0.5">ROUGH CLEAN</span>
                    <span className="text-[#0090c8] text-xs font-bold block">↓ READY FOR FINISH WORK</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-600 mb-6 leading-relaxed">
                  <p>
                    Rough construction cleaning is the first major cleaning stage of the Enterprise process.
                  </p>
                  <p>
                    The objective is not yet to make the project presentation-ready.
                  </p>
                  <p className="text-slate-900 font-semibold">
                    The objective is to remove accumulated construction dust, loose debris and jobsite soil from designated areas so the construction project can progress toward final finishes.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                    Depending upon the project's specifications and agreed scope, Rough Cleaning may include:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs text-slate-700">
                    {[
                      "Removal of loose construction debris to designated disposal areas",
                      "Removal of discarded packaging",
                      "Initial sweeping",
                      "HEPA vacuuming where appropriate",
                      "Removal of accumulated drywall and construction dust",
                      "Cleaning of corridors and common areas",
                      "Cleaning of stairways",
                      "Cleaning corners, edges and wall lines",
                      "Initial cleaning of window areas",
                      "Window tracks and sills",
                      "Removal of specified labels and protective materials",
                      "Initial surface cleaning",
                      "Cleaning designated project zones as they become ready",
                      "Preparation of areas for subsequent finish work and final cleaning",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-[#0090c8] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 mb-6">
                  <h3 className="text-sm font-bold text-[#003057] mb-1">Why the Rough Clean Matters</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    A well-executed rough clean creates a cleaner environment for the final stages of construction and reduces the amount of accumulated dust and soil that must be addressed during the detailed final cleaning.
                  </p>
                </div>

                <div>
                  <a
                    href="#gc-bid-center"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#003057] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#002240] transition-colors"
                  >
                    DISCUSS YOUR ROUGH-CLEAN REQUIREMENTS <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* PHASE 2: FINAL CONSTRUCTION CLEANING */}
              <div className="p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0090c8] text-white text-[11px] font-black uppercase tracking-wider mb-2">
                      PHASE 02
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                      PHASE 2 — FINAL CONSTRUCTION CLEANING
                    </h2>
                    <h3 className="text-base font-bold text-[#0090c8] mt-0.5">
                      From Construction Complete to Presentation Ready
                    </h3>
                  </div>

                  <div className="p-3 px-5 rounded-xl bg-slate-50 border border-slate-200 text-center shrink-0">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">PROJECT MILESTONE</span>
                    <span className="text-xs font-black text-slate-900 block mt-0.5">FINAL CONSTRUCTION CLEAN</span>
                    <span className="text-[#0090c8] text-xs font-bold block">↓ READY FOR INSPECTION / WALKTHROUGH</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-600 mb-6 leading-relaxed">
                  <p>
                    Final Construction Cleaning is the detailed cleaning stage.
                  </p>
                  <p>
                    Once major construction and finish work is substantially complete, Enterprise performs a systematic detailed clean designed to remove remaining construction dust, fingerprints, appropriate labels, residue and jobsite soil.
                  </p>
                  <p className="text-slate-900 font-semibold">
                    This is where the building begins looking less like a construction project and more like the finished facility the owner expects.
                  </p>
                </div>

                {/* 7 Scope Breakdown Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {/* High & Overhead */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-[#0090c8]" /> High & Overhead Areas
                    </h3>
                    <p className="text-[11px] text-slate-500 mb-2">Depending upon accessibility and project specifications:</p>
                    <ul className="space-y-1 text-xs text-slate-600">
                      <li>• High dusting</li>
                      <li>• Accessible ledges</li>
                      <li>• Tops of doors and frames</li>
                      <li>• Light fixtures</li>
                      <li>• Exterior surfaces of accessible vents/diffusers</li>
                      <li>• Accessible exposed surfaces</li>
                      <li>• High horizontal surfaces</li>
                      <li>• Accessible exterior ductwork</li>
                    </ul>
                  </div>

                  {/* Doors, Walls & Architectural */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-[#0090c8]" /> Doors, Walls & Architectural Surfaces
                    </h3>
                    <ul className="space-y-1 text-xs text-slate-600">
                      <li>• Doors & door frames</li>
                      <li>• Baseboards & trim</li>
                      <li>• Hardware & push plates</li>
                      <li>• Switch plates</li>
                      <li>• Partitions</li>
                      <li>• Architectural surfaces</li>
                      <li>• Appropriate residue removal</li>
                    </ul>
                  </div>

                  {/* Windows, Glass & Frames */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#0090c8]" /> Windows, Glass & Frames
                    </h3>
                    <ul className="space-y-1 text-xs text-slate-600">
                      <li>• Interior glass</li>
                      <li>• Exterior glass when in scope</li>
                      <li>• Entrance glass</li>
                      <li>• Interior glass partitions</li>
                      <li>• Mirrors</li>
                      <li>• Window frames & tracks</li>
                      <li>• Window sills</li>
                      <li>• Sticker, label & adhesive removal</li>
                    </ul>
                  </div>

                  {/* Millwork, Cabinets & Built-In */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-[#0090c8]" /> Millwork, Cabinets & Built-In
                    </h3>
                    <ul className="space-y-1 text-xs text-slate-600">
                      <li>• Cabinet exteriors</li>
                      <li>• Cabinet interiors where specified</li>
                      <li>• Drawers & shelving</li>
                      <li>• Casework & counters</li>
                      <li>• Closets</li>
                      <li>• Built-in surfaces & millwork</li>
                    </ul>
                  </div>

                  {/* Restrooms */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                      <CheckSquare className="w-4 h-4 text-[#0090c8]" /> Restrooms
                    </h3>
                    <ul className="space-y-1 text-xs text-slate-600">
                      <li>• Toilets & urinals</li>
                      <li>• Sinks & faucets</li>
                      <li>• Mirrors & counters</li>
                      <li>• Partitions & dispensers</li>
                      <li>• Fixtures & tile</li>
                      <li>• Grout detailing & floors</li>
                    </ul>
                  </div>

                  {/* Breakrooms & Kitchens */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0090c8]" /> Breakrooms & Kitchens
                    </h3>
                    <ul className="space-y-1 text-xs text-slate-600">
                      <li>• Counters & cabinetry</li>
                      <li>• Sinks & fixtures</li>
                      <li>• Exterior appliance surfaces</li>
                      <li>• Stainless steel polishing</li>
                      <li>• Floors & other surfaces</li>
                    </ul>
                  </div>

                  {/* Post-Construction Floor Cleaning */}
                  <div className="p-4 sm:p-5 rounded-xl bg-sky-50/50 border border-[#0090c8]/20 md:col-span-2 lg:col-span-3">
                    <h3 className="text-sm font-bold text-[#003057] mb-2 flex items-center gap-1.5">
                      <Wrench className="w-4 h-4 text-[#0090c8]" /> Post-Construction Floor Cleaning
                    </h3>
                    <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                      Different flooring requires different procedures. Enterprise's commercial floor-care capabilities can be incorporated into the construction cleaning scope as required:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs text-slate-700">
                      {[
                        "HEPA vacuuming",
                        "Commercial carpet cleaning",
                        "Carpet extraction",
                        "Hard-floor cleaning",
                        "Commercial floor scrubbing",
                        "VCT cleaning",
                        "VCT stripping & finishing",
                        "Tile and grout cleaning",
                        "Commercial steam cleaning",
                        "Edge & corner detailing",
                        "Specialty floor care per finish specs",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-[#0090c8]/20 shadow-2xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0090c8] shrink-0" />
                          <span className="font-medium text-slate-800 leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <a
                    href="#gc-bid-center"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#003057] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#002240] transition-colors"
                  >
                    REQUEST A FINAL-CLEAN PROPOSAL <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* PHASE 3: FINAL TOUCH-UP & PUNCH-LIST CLEANING */}
              <div className="p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0090c8] text-white text-[11px] font-black uppercase tracking-wider mb-2">
                      PHASE 03
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                      PHASE 3 — FINAL TOUCH-UP & PUNCH-LIST CLEANING
                    </h2>
                    <h3 className="text-base font-bold text-[#0090c8] mt-0.5">
                      Because Construction Doesn't Always Stop After the Final Clean.
                    </h3>
                  </div>

                  <div className="p-3 px-5 rounded-xl bg-slate-50 border border-slate-200 text-center shrink-0">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">PROJECT MILESTONE</span>
                    <span className="text-xs font-black text-slate-900 block mt-0.5">FINAL TOUCH-UP / PUNCH LIST</span>
                    <span className="text-[#0090c8] text-xs font-bold block">↓ READY FOR OWNER TURNOVER</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2 mb-6">
                  <p className="font-bold text-slate-900">The final clean is finished. Then somebody comes back:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-1 text-xs">
                    <div className="flex items-center gap-1.5">• Painters perform touch-ups.</div>
                    <div className="flex items-center gap-1.5">• Electricians complete punch-list items.</div>
                    <div className="flex items-center gap-1.5">• HVAC contractors make adjustments.</div>
                    <div className="flex items-center gap-1.5">• Furniture is installed.</div>
                    <div className="flex items-center gap-1.5">• Inspectors walk through the facility.</div>
                    <div className="flex items-center gap-1.5">• Doors get touched and floors walked on.</div>
                  </div>
                  <p className="text-[#0090c8] font-bold pt-1">
                    And fine construction dust settles again.
                  </p>
                  <p className="text-xs text-slate-600">
                    That's why Enterprise treats Final Touch-Up / Punch-List Cleaning as a separate construction phase. Scheduled close to the final walkthrough or owner turnover, Enterprise returns to address cleaning needs created after the primary final clean.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                    Depending upon scope, Touch-Up Cleaning may include:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs text-slate-700">
                    {[
                      "Re-dusting designated horizontal surfaces",
                      "Removing newly settled construction dust",
                      "Removing fingerprints",
                      "Cleaning entrance glass",
                      "Touching up interior glass",
                      "Cleaning mirrors",
                      "Removing footprints",
                      "Addressing floor marks",
                      "Re-cleaning affected fixtures",
                      "Polishing specified hardware",
                      "Polishing stainless steel",
                      "Re-cleaning affected restroom surfaces",
                      "Touching up flooring",
                      "Cleaning areas affected by returning trades",
                      "Addressing cleaning-related punch-list items",
                      "Final visual inspection",
                      "Supervisor quality-control walkthrough",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-[#0090c8] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 mb-6">
                  <h3 className="text-sm font-bold text-[#003057] mb-1">The Last 5% Can Determine How the Entire Project Is Perceived.</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The owner's first impression isn't based on what the building looked like during construction. It's based on what the building looks like when you hand over the keys.
                  </p>
                </div>

                <div>
                  <a
                    href="#gc-bid-center"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#003057] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#002240] transition-colors"
                  >
                    SCHEDULE PUNCH-LIST CLEANING <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* PHASE 4: TRANSITION TO ONGOING JANITORIAL SERVICE */}
              <div className="p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-[#0090c8]/30 shadow-lg relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#003057] text-white text-[11px] font-black uppercase tracking-wider mb-2">
                      PHASE 04
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                      PHASE 4 — TRANSITION TO ONGOING JANITORIAL SERVICE
                    </h2>
                    <h3 className="text-base font-bold text-[#0090c8] mt-0.5">
                      The Construction Project Ends. Protect What You Just Built.
                    </h3>
                  </div>

                  <div className="p-3 px-5 rounded-xl bg-sky-50 border border-[#0090c8]/20 text-center shrink-0">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">CONTINUITY</span>
                    <span className="text-xs font-black text-[#003057] block mt-0.5">OWNER TURNOVER</span>
                    <span className="text-[#0090c8] text-xs font-bold block">↓ ONGOING JANITORIAL</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-600 mb-6 leading-relaxed">
                  <p className="font-bold text-slate-900 text-base">
                    Why introduce another cleaning company immediately after turnover?
                  </p>
                  <p>
                    Enterprise Cleaning Corporation can transition the completed facility directly from post-construction cleaning into a customized ongoing commercial janitorial program.
                  </p>
                  
                  {/* Continuity Workflow Bar - Responsive Design */}
                  {/* Desktop view: Clean horizontal connected sequence */}
                  <div className="my-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hidden lg:flex items-center justify-between gap-1 text-xs font-bold text-slate-800">
                    <span className="px-2.5 py-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs">CONSTRUCTION</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0090c8] shrink-0" />
                    <span className="px-2.5 py-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs">ROUGH CLEAN</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0090c8] shrink-0" />
                    <span className="px-2.5 py-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs">FINAL CLEAN</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0090c8] shrink-0" />
                    <span className="px-2.5 py-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs">PUNCH-LIST CLEAN</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0090c8] shrink-0" />
                    <span className="px-2.5 py-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs">OWNER TURNOVER</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0090c8] shrink-0" />
                    <span className="px-3 py-1.5 bg-[#003057] text-[#FFE800] rounded-lg shadow-2xs font-extrabold">ONGOING JANITORIAL</span>
                  </div>

                  {/* Mobile & Tablet view: Clean connected vertical timeline */}
                  <div className="my-4 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 lg:hidden">
                    <div className="text-[11px] font-extrabold text-[#003057] uppercase tracking-wider text-center mb-4 pb-2 border-b border-slate-200">
                      Seamless Project Continuity Flow
                    </div>
                    <div className="relative pl-7 space-y-3 before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#0090c8]/30">
                      {[
                        { step: "1", name: "Construction Phase", desc: "Active trades & structural build progress" },
                        { step: "2", name: "Rough Clean", desc: "Heavy debris removal & MEP rough-in" },
                        { step: "3", name: "Final Construction Clean", desc: "Inspection & turnover readiness detailing" },
                        { step: "4", name: "Touch-Up / Punch-List", desc: "Post-sub trade touch-ups & detailing" },
                        { step: "5", name: "Owner Turnover", desc: "Key handoff & sign-off walkthrough" },
                        { step: "6", name: "Ongoing Janitorial", desc: "Seamless Day-1 facility maintenance", highlight: true },
                      ].map((phase, idx) => (
                        <div key={idx} className="relative flex items-start gap-3">
                          <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 z-10 shadow-xs ring-4 ${
                            phase.highlight
                              ? "bg-[#FFE800] text-slate-900 ring-[#003057]"
                              : "bg-white text-[#003057] border-2 border-[#0090c8] ring-slate-50"
                          }`}>
                            {phase.step}
                          </span>
                          <div className={`flex-1 p-3 rounded-xl border ${
                            phase.highlight
                              ? "bg-[#003057] text-white border-[#003057] shadow-sm"
                              : "bg-white text-slate-800 border-slate-200 shadow-2xs"
                          }`}>
                            <div className={`text-xs font-bold ${phase.highlight ? "text-[#FFE800]" : "text-slate-900"}`}>
                              {phase.name}
                            </div>
                            <div className={`text-[11px] mt-0.5 leading-snug ${phase.highlight ? "text-slate-200" : "text-slate-500"}`}>
                              {phase.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {/* Card 1 */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-[#003057] uppercase tracking-wider mb-3">
                        Enterprise already understands the facility's:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {[
                          "Layout & floor plans",
                          "Flooring finishes",
                          "Restroom specifications",
                          "Glass & partitions",
                          "Architectural millwork",
                          "Entrances & lobbies",
                          "High-traffic corridors",
                          "Specialty surfaces",
                          "Access security protocols",
                          "Unique facility needs",
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200/80 shadow-2xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0090c8] shrink-0" />
                            <span className="font-medium text-slate-800 leading-tight">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-3 italic pt-2 border-t border-slate-200/60">
                      That knowledge forms the foundation of the ongoing janitorial scope without a learning curve.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <h4 className="text-xs sm:text-sm font-extrabold text-[#003057] uppercase tracking-wider mb-3">
                      Recurring services can include:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {[
                        "Nightly janitorial",
                        "Daytime cleaning",
                        "Office cleaning",
                        "Restroom sanitizing",
                        "Breakroom care",
                        "Trash & recycling",
                        "High-touch disinfection",
                        "Day porter services",
                        "Carpet maintenance",
                        "Commercial floor scrubbing",
                        "VCT stripping / refinishing",
                        "Periodic deep cleans",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200/80 shadow-2xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0090c8] shrink-0" />
                          <span className="font-medium text-slate-800 leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-sky-50 to-white border border-[#0090c8]/30 mb-6">
                  <h3 className="text-sm font-black text-[#003057]">One Facility. One Cleaning Partner.</h3>
                  <p className="text-xs font-bold text-[#0090c8] uppercase tracking-wider mt-0.5">
                    FROM CONSTRUCTION CLOSEOUT TO LONG-TERM FACILITY CARE.
                  </p>
                </div>

                <div>
                  <a
                    href="#gc-bid-center"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#003057] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#002240] transition-colors"
                  >
                    DISCUSS JANITORIAL TRANSITION <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: WHY GENERAL CONTRACTORS CHOOSE ENTERPRISE */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto mb-14 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0090c8]/10 text-[#0090c8] text-xs font-extrabold uppercase tracking-wider mb-4">
                Contractor-Grade Standards
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#003057] tracking-tight mb-3">
                WHY GENERAL CONTRACTORS CHOOSE ENTERPRISE
              </h2>
              <h3 className="text-base sm:text-lg font-bold text-[#0090c8]">
                Construction Experience Requires More Than Cleaning Experience.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Construction Schedule Coordination",
                  desc: "Cleaning is coordinated around construction milestones and project readiness.",
                  icon: CalendarCheck,
                },
                {
                  title: "Multi-Phase Cleaning",
                  desc: "Rough Clean, Final Clean and Final Touch-Up can be scheduled separately.",
                  icon: Layers,
                },
                {
                  title: "Commercial Equipment",
                  desc: "Equipment and procedures are selected according to the project's surfaces and cleaning requirements.",
                  icon: Wrench,
                },
                {
                  title: "Detailed Scope of Work",
                  desc: "The proposal defines responsibilities and cleaning expectations before mobilization.",
                  icon: FileText,
                },
                {
                  title: "Project Walkthroughs",
                  desc: "Enterprise can review the project with the appropriate construction representative.",
                  icon: CheckSquare,
                },
                {
                  title: "Commercial Floor-Care Capability",
                  desc: "Carpet, VCT, tile, grout and other commercial floor-care requirements can be incorporated when appropriate.",
                  icon: Sparkles,
                },
                {
                  title: "Quality Control",
                  desc: "Supervisory inspection helps identify cleaning-related items requiring attention.",
                  icon: ShieldCheck,
                },
                {
                  title: "In-House Teams",
                  desc: "Enterprise's core service model uses its own teams rather than outsourcing customer accounts.",
                  icon: Users,
                },
                {
                  title: "Established Massachusetts Company",
                  desc: "Enterprise has served commercial customers in Central Massachusetts for more than two decades.",
                  icon: MapPin,
                },
                {
                  title: "Long-Term Facility Cleaning",
                  desc: "When the construction work is over, Enterprise can remain as the building's janitorial provider.",
                  icon: Building2,
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0090c8] hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#0090c8]/10 flex items-center justify-center text-[#0090c8] mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: A CLEANING SUBCONTRACTOR THAT UNDERSTANDS PROJECT CLOSEOUT (Comparison Table) */}
        <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0090c8]/10 text-[#0090c8] text-xs font-extrabold uppercase tracking-wider mb-4">
                Comparison Matrix
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#003057] tracking-tight">
                A CLEANING SUBCONTRACTOR THAT UNDERSTANDS PROJECT CLOSEOUT
              </h2>
            </div>

            <div className="max-w-4xl mx-auto overflow-x-auto rounded-2xl border border-slate-200 shadow-md bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#003057] text-white">
                    <th className="py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider w-1/2">
                      Your Construction Team Needs
                    </th>
                    <th className="py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider w-1/2 bg-[#0090c8] text-white">
                      Enterprise Approach
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {[
                    ["Schedule coordination", "Cleaning aligned with project milestones"],
                    ["Rough cleaning", "Separate Phase 1 scope"],
                    ["Detailed final cleaning", "Separate Phase 2 scope"],
                    ["Returning trades", "Phase 3 touch-up"],
                    ["Punch-list response", "Cleaning-related punch-list completion"],
                    ["Fine construction dust", "Commercial equipment and appropriate filtration"],
                    ["Floor requirements", "Multiple commercial floor-care capabilities"],
                    ["Glass requirements", "Glass/window scope available"],
                    ["Clear expectations", "Written scope of work"],
                    ["Superintendent communication", "Designated project coordination"],
                    ["Final walkthrough", "Quality-control inspection"],
                    ["Occupancy", "Optional janitorial transition"],
                  ].map(([need, approach], idx) => (
                    <tr key={idx} className="even:bg-slate-50 hover:bg-sky-50/50 transition-colors">
                      <td className="py-3.5 px-6 font-semibold text-slate-800">
                        {need}
                      </td>
                      <td className="py-3.5 px-6 font-bold text-[#003057]">
                        {approach}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 5: TYPES OF COMMERCIAL CONSTRUCTION PROJECTS WE CLEAN */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0090c8]/10 text-[#0090c8] text-xs font-extrabold uppercase tracking-wider mb-4">
                Sector Experience
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#003057] tracking-tight mb-3">
                TYPES OF COMMERCIAL CONSTRUCTION PROJECTS WE CLEAN
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Enterprise can develop post-construction cleaning programs for:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[
                "New Commercial Construction",
                "Commercial Renovations",
                "Tenant Fit-Outs & Tenant Improvements",
                "Office Construction & Renovation",
                "Medical & Healthcare Build-Outs",
                "Manufacturing & Industrial Projects",
                "Warehouse & Distribution Construction",
                "Educational Facilities",
                "Municipal & Government Facilities",
                "Retail Construction",
                "Restaurant Construction & Renovation",
                "Financial & Banking Facilities",
                "Multi-Tenant Commercial Buildings",
                "Corporate Facilities",
              ].map((projectType, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0090c8] hover:shadow-sm transition-all flex items-center gap-3"
                >
                  <Building2 className="w-5 h-5 text-[#0090c8] shrink-0" />
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">{projectType}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: THE ENTERPRISE GC PROJECT PROCESS */}
        <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto mb-14 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0090c8]/10 text-[#0090c8] text-xs font-extrabold uppercase tracking-wider mb-4">
                Step-by-Step Delivery
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#003057] tracking-tight mb-3">
                THE ENTERPRISE GC PROJECT PROCESS
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                A structured 11-step execution workflow from preliminary takeoff through final owner turnover.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Send Us the Project",
                  desc: "Send Enterprise the project information, plans, cleaning specifications or scope of work.",
                },
                {
                  step: "2",
                  title: "Project Walkthrough",
                  desc: "When appropriate, Enterprise walks the project with the GC, estimator, superintendent, project manager or designated representative.",
                },
                {
                  step: "3",
                  title: "Scope Review",
                  desc: "We identify applicable requirements for Rough Cleaning, Final Cleaning, Touch-Up/Punch-List Cleaning and specialty services.",
                },
                {
                  step: "4",
                  title: "Proposal",
                  desc: "Enterprise develops a written proposal based upon the agreed scope and project requirements.",
                },
                {
                  step: "5",
                  title: "Schedule Coordination",
                  desc: "Cleaning is coordinated with the construction schedule and anticipated project milestones.",
                },
                {
                  step: "6",
                  title: "Mobilization",
                  desc: "Enterprise schedules the appropriate personnel, equipment and supplies.",
                },
                {
                  step: "7",
                  title: "Rough Clean",
                  desc: "Phase 1 is performed when required.",
                },
                {
                  step: "8",
                  title: "Final Construction Clean",
                  desc: "Detailed Phase 2 cleaning is completed at the appropriate construction milestone.",
                },
                {
                  step: "9",
                  title: "Touch-Up / Punch List",
                  desc: "Enterprise returns for the agreed final touch-up scope.",
                },
                {
                  step: "10",
                  title: "Owner Turnover",
                  desc: "Cleaning-related final items are addressed according to scope.",
                },
                {
                  step: "11",
                  title: "Optional Janitorial Transition",
                  desc: "Enterprise can provide an ongoing janitorial proposal for the occupied facility.",
                },
              ].map((st, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0090c8] hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-full bg-[#0090c8] text-white text-xs font-black flex items-center justify-center mb-3">
                      {st.step}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5">
                      {st.step}. {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: GC POST-CONSTRUCTION BID CENTER (Interactive Form) */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 md:px-6">
            <GcBidCenter />
          </div>
        </section>

        {/* SECTION 8: MASSACHUSETTS POST-CONSTRUCTION CLEANING SERVICE AREA */}
        <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto mb-8 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0090c8]/10 text-[#0090c8] text-xs font-extrabold uppercase tracking-wider mb-4">
                Regional Subcontractor Coverage
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#003057] tracking-tight mb-3">
                MASSACHUSETTS POST-CONSTRUCTION CLEANING SERVICE AREA
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Enterprise Cleaning Corporation is headquartered in West Boylston and provides commercial construction cleaning throughout its Massachusetts service territory.
              </p>
            </div>

            <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-white border border-slate-200 shadow-sm mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                Key Markets Include:
              </h3>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-semibold">
                {[
                  "Worcester", "Shrewsbury", "Auburn", "Holden", "West Boylston", 
                  "Westborough", "Northborough", "Southborough", "Marlborough", 
                  "Hudson", "Framingham", "Natick", "Waltham", "Leominster", 
                  "Fitchburg", "Lowell", "MetroWest", "Central Massachusetts", 
                  "Greater Boston", "and additional Massachusetts markets"
                ].map((town, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#003057] hover:border-[#0090c8] transition-colors"
                  >
                    {town}
                  </span>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-sky-50 border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-[#003057] font-medium">
                For larger commercial construction projects outside these areas, contact Enterprise regarding project availability.
              </p>
              <a
                href="#gc-bid-center"
                className="px-6 py-3 rounded-full bg-[#003057] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#002240] shrink-0 transition-colors"
              >
                ASK ABOUT YOUR PROJECT LOCATION
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 9: MASSACHUSETTS POST-CONSTRUCTION CLEANING FAQ */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0090c8]/10 text-[#0090c8] text-xs font-extrabold uppercase tracking-wider mb-4">
                Contractor Inquiries
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#003057] tracking-tight mb-3">
                MASSACHUSETTS POST-CONSTRUCTION CLEANING FAQ
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Straightforward answers to the operational and bidding questions general contractors, project managers, and superintendents ask most frequently.
              </p>
            </div>

            <GcFaqAccordion />

            {/* Featured GC Contractor Resource Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Guide 1 */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-[#0090c8] transition-all">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0090c8]/10 text-[#0090c8] text-xs font-bold uppercase tracking-wider mb-2.5">
                    <FileText className="w-3.5 h-3.5" /> GC Closeout Guide
                  </div>
                  <h3 className="text-base font-extrabold text-[#003057]">
                    17 Post-Construction Cleaning Mistakes That Delay Project Turnover
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Prevent re-cleaning, schedule disruptions, scope gaps, and last-minute turnover problems before the crew mobilizes.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/70">
                  <Link
                    href="/blog/post-construction-cleaning-mistakes-general-contractors"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#003057] hover:text-[#0090c8] transition-colors"
                  >
                    Read 17 Mistakes Guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Guide 2 */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-[#0090c8] transition-all">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0090c8]/10 text-[#0090c8] text-xs font-bold uppercase tracking-wider mb-2.5">
                    <FileText className="w-3.5 h-3.5" /> Scope & Trade Guide
                  </div>
                  <h3 className="text-base font-extrabold text-[#003057]">
                    Who Is Responsible for Cleaning What on a Construction Project?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    A General Contractor's guide to trade debris, drywall dust, window stickers, adhesive, floor protection, and closeout sequencing.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/70">
                  <Link
                    href="/blog/who-is-responsible-for-cleaning-construction-project"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#003057] hover:text-[#0090c8] transition-colors"
                  >
                    Read Responsibility Guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Guide 3 */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-[#0090c8] transition-all">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0090c8]/10 text-[#0090c8] text-xs font-bold uppercase tracking-wider mb-2.5">
                    <FileText className="w-3.5 h-3.5" /> Bid Comparison Guide
                  </div>
                  <h3 className="text-base font-extrabold text-[#003057]">
                    How General Contractors Should Compare Post-Construction Cleaning Bids
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    20 Questions to ask before awarding a commercial construction cleaning contract to eliminate scope gaps and change orders.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/70">
                  <Link
                    href="/blog/compare-post-construction-cleaning-bids-general-contractors"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#003057] hover:text-[#0090c8] transition-colors"
                  >
                    Read Bid Comparison Guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: CLOSING CTA (Signature Enterprise Navy & Yellow Style) */}
        <section className="py-20 md:py-28 bg-[#003057] text-white relative overflow-hidden text-center">
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FFE800] text-xs font-black uppercase tracking-wider mb-6 border border-white/20">
              Project Closeout Guaranteed
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              YOUR PROJECT ISN'T FINISHED UNTIL IT'S ENTERPRISE CLEAN.
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm sm:text-base font-bold text-slate-200 mb-6">
              <span>Rough Clean.</span>
              <span className="text-[#FFE800]">•</span>
              <span>Final Construction Clean.</span>
              <span className="text-[#FFE800]">•</span>
              <span>Final Touch-Up.</span>
              <span className="text-[#FFE800]">•</span>
              <span>Ongoing Janitorial.</span>
            </div>

            <p className="text-base sm:text-lg font-semibold text-white/95 mb-8">
              One Commercial Cleaning Partner From Construction Closeout Through Occupancy.
            </p>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 max-w-xl mx-auto mb-10 text-xs sm:text-sm text-slate-200 space-y-1.5">
              <div className="font-extrabold text-white text-base">Enterprise Cleaning Corporation</div>
              <div>
                <a
                  href="https://www.google.com/maps/search/99+Hartwell+Street+%0D%0AWest+Boylston,+MA+01583"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFE800] transition-colors"
                >
                  99 Hartwell Street, West Boylston, MA 01583
                </a>
              </div>
              <div className="text-white font-bold pt-1">
                <a href="tel:508-890-1000" className="hover:text-[#FFE800] transition-colors">
                  508-890-1000
                </a>
              </div>
              <div className="text-white/80 pt-2 text-xs">
                Serving commercial construction projects throughout Massachusetts and Enterprise's broader New England service territory.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-10">
              <a
                href="#gc-bid-center"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFE800] text-slate-900 font-extrabold text-sm uppercase tracking-wider hover:bg-yellow-300 shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                SUBMIT A PROJECT FOR BID <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#gc-bid-center"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4 text-[#FFE800]" /> REQUEST A PROJECT WALKTHROUGH
              </a>

              <a
                href="#gc-bid-center"
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <HardHat className="w-3.5 h-3.5 text-[#FFE800]" /> ADD ENTERPRISE TO YOUR BID LIST
              </a>
            </div>

            <div className="text-sm font-bold text-[#FFE800] italic tracking-wide">
              &ldquo;There's clean, and then there's ENTERPRISE clean.&rdquo;
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
