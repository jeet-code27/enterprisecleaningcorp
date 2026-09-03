import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, PhoneCall, ShieldCheck, Clock, Building2, 
  Trash2, Droplets, Sparkles, SprayCan, CheckCircle2,
  CalendarCheck, FileText, Check, ArrowRight,
  MapPin, Trophy, Users, Sparkle, SunMedium, Moon
} from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";
import { RelatedIndustries } from "@/components/ui/related-industries";
import { RelatedServices } from "@/components/ui/related-services";

export const metadata: Metadata = {
  title: { absolute: "Office Cleaning Services | Central MA, RI & Southern NH" },
  description: "Office cleaning for businesses across Central Massachusetts, Rhode Island, and Southern New Hampshire. Day porter and nightly crews. Get a free walkthrough.",
  keywords: "office cleaning, office cleaning services, commercial office cleaning, commercial office cleaning services near me, office cleaning service near me, office cleaning company near me, clean offices near me, office cleaning services in massachusetts, office cleaning services Worcester MA, office cleaner near me, day porter services near me, daily office cleaning service Worcester, commercial cleaning services Rhode island",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/office-cleaning",
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
  openGraph: {
    title: "Office Cleaning Services | Central MA, RI & Southern NH",
    description: "Office cleaning for businesses across Central Massachusetts, Rhode Island, and Southern New Hampshire. Day porter and nightly crews. Get a free walkthrough.",
    url: "https://www.enterprisecleaningcorp.com/office-cleaning",
    siteName: "Enterprise Cleaning Corporation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.enterprisecleaningcorp.com/images/office_cleaning_services_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Enterprise Cleaning Corporation Office Cleaning Services",
      },
    ],
  },
};

const structuredDataService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Office Cleaning Services",
  "serviceType": "Commercial Office Cleaning",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Enterprise Cleaning Corporation",
    "image": "https://www.enterprisecleaningcorp.com/images/ecc-new-logo.png",
    "telephone": "508-890-1000",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "99 Hartwell Street",
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
  "areaServed": [
    "Central Massachusetts",
    "Worcester",
    "Shrewsbury",
    "West Boylston",
    "Westborough",
    "Northborough",
    "Holden",
    "Auburn",
    "Leominster",
    "Fitchburg",
    "Rhode Island",
    "Providence",
    "Southern New Hampshire",
    "Nashua",
    "Manchester",
    "Salem"
  ],
  "description": "Professional office cleaning services, day porter coverage, and nightly commercial cleaning for corporate offices, multi-tenant properties, and commercial facilities across Central Massachusetts, Rhode Island, and Southern New Hampshire.",
  "url": "https://www.enterprisecleaningcorp.com/office-cleaning"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does office cleaning cost in Massachusetts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing is based on square footage, floor types, service frequency, and whether daytime coverage is included. Most offices in Central Massachusetts fall into a monthly contract rather than an hourly rate. A walkthrough gives a far more accurate number than a phone estimate because floor type and traffic change the labor hours significantly."
      }
    },
    {
      "@type": "Question",
      "name": "How often should an office be cleaned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most offices need cleaning three to five nights per week. Buildings with public lobbies, multiple tenants, or heavy visitor traffic usually need five nights plus a day porter. Restrooms and break rooms should be serviced daily regardless of how often the rest of the office is cleaned."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a day porter and a nightly cleaning crew?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A day porter works during business hours to restock restrooms, handle spills, reset conference rooms, and keep common areas presentable. A nightly crew does the full reset after hours, including vacuuming, mopping, disinfecting, and trash removal. Busy buildings typically need both."
      }
    },
    {
      "@type": "Question",
      "name": "Who provides office cleaning services in Worcester MA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enterprise Cleaning Corporation provides office cleaning services in Worcester, MA and throughout Worcester County from its West Boylston headquarters. Service also covers Rhode Island and Southern New Hampshire. Call (508) 890-1000 or request a walkthrough at enterprisecleaningcorp.com."
      }
    },
    {
      "@type": "Question",
      "name": "Can you clean our office during business hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Day porter coverage is designed for exactly that. A porter works your building while your team is there, handling restrooms, break rooms, spills, and common areas. Many clients pair daytime coverage with a smaller nightly crew."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to supply cleaning products and paper goods?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Enterprise Cleaning supplies equipment and cleaning products as standard. Consumables such as soap, paper towels, and tissue can be included in your contract or supplied by your building, whichever you prefer. Most clients include them so nothing runs out unexpectedly."
      }
    }
  ]
};

const structuredDataBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.enterprisecleaningcorp.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.enterprisecleaningcorp.com/#services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Office Cleaning",
      "item": "https://www.enterprisecleaningcorp.com/office-cleaning"
    }
  ]
};

export default function OfficeCleaningPage() {
  return (
    <>
      {/* Schema Markup for Enhanced SEO & AI Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataBreadcrumb) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[640px] lg:min-h-[740px] flex items-center pt-24 pb-20 overflow-hidden" style={{ background: "#0090c8" }}>
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/office_cleaning_services_hero.jpg" 
            alt="Office cleaning services for businesses across Central MA, RI, and Southern NH" 
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003057]/90 via-[#0090c8]/75 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-end justify-between w-full h-full">
            
            {/* Left Content */}
            <div className="text-white space-y-6 max-w-3xl flex-1 mt-10">
              {/* Breadcrumb Navigation */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/90 mb-4 font-medium">
                <Link href="/" className="hover:text-white transition-colors whitespace-nowrap">Home</Link>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFE800] shrink-0" />
                <Link href="/#services" className="hover:text-white transition-colors whitespace-nowrap">Services</Link>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFE800] shrink-0" />
                <span className="text-[#FFE800] font-bold tracking-wide">Office Cleaning</span>
              </div>
              
              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] drop-shadow-md">
                Office Cleaning Services for Central Massachusetts, Rhode Island, and Southern New Hampshire
              </h1>
              
              {/* Intro Snippet */}
              <p className="text-base sm:text-lg md:text-xl text-white/95 font-medium leading-relaxed drop-shadow-sm text-left">
                Commercial office cleaning tailored to the rhythm of your workplace. Day porter coverage during business hours, nightly crews for the full after-hours reset, or both working together seamlessly.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-[#FFE800] text-slate-900 font-extrabold px-7 py-3.5 rounded-full hover:bg-yellow-300 transition-all shadow-xl hover:scale-105 text-sm md:text-base"
                >
                  Get a Free Walkthrough <ArrowRight className="w-4 h-4" />
                </Link>
                <a 
                  href="tel:5088901000" 
                  className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold px-6 py-3.5 rounded-full border border-white/30 transition-all text-sm md:text-base"
                >
                  <PhoneCall className="w-4 h-4 text-[#FFE800]" /> (508) 890-1000
                </a>
              </div>
              
              {/* Trust Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-auto border-t border-white/25">
                <div className="flex items-center gap-3">
                  <Clock className="w-7 h-7 text-[#FFE800] shrink-0" />
                  <div>
                    <div className="font-bold text-lg leading-tight">23+ Years</div>
                    <div className="text-xs text-white/80">In Business</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-7 h-7 text-[#FFE800] shrink-0" />
                  <div>
                    <div className="font-bold text-lg leading-tight">97%</div>
                    <div className="text-xs text-white/80">Client Retention</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="w-7 h-7 text-[#FFE800] shrink-0" />
                  <div>
                    <div className="font-bold text-lg leading-tight">4× WBJ</div>
                    <div className="text-xs text-white/80">Best of Business</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-7 h-7 text-[#FFE800] shrink-0" />
                  <div>
                    <div className="font-bold text-lg leading-tight">BBB A+</div>
                    <div className="text-xs text-white/80">Accredited 2007</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Floating Card */}
            <div className="w-full max-w-sm lg:mb-8">
              <div className="bg-white p-7 md:p-8 rounded-3xl shadow-2xl text-center space-y-4 border-b-4 border-[#00B8FF]">
                <div className="mx-auto w-14 h-14 rounded-full bg-[#0090c8]/10 flex items-center justify-center mb-3">
                  <Building2 className="w-7 h-7 text-[#0090c8]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  Built Around Your Workplace Rhythm
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  We build the program around your schedule instead of forcing your building into a generic route.
                </p>
                <div className="pt-4 border-t border-slate-100 space-y-3 text-left">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Day porter & nightly crew under one roof</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Clear written scope with zero surprises</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Color-coded microfiber & fresh mop water</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Owners Steve & Julio directly accountable</span>
                  </div>
                </div>
                <div className="pt-3">
                  <Link 
                    href="/contact" 
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#003057] hover:bg-[#002240] text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors shadow-md"
                  >
                    Request Free Walkthrough
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Featured Snippet & Intro Context */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Featured Snippet Answer Box */}
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-sky-50/50 border-2 border-[#0090c8]/20 shadow-sm relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0090c8] text-white text-xs font-bold tracking-wide uppercase mb-4">
                <Sparkle className="w-3.5 h-3.5" /> Featured Snippet Answer
              </div>
              <p className="text-lg md:text-xl text-slate-900 font-semibold leading-relaxed">
                Office cleaning is the scheduled cleaning, disinfecting, and restocking of a workplace so it stays presentable and healthy for the people who use it every day. Enterprise Cleaning Corporation provides office cleaning during business hours with day porter coverage, after hours with nightly crews, or both, for businesses across Central Massachusetts, Rhode Island, and Southern New Hampshire.
              </p>
            </div>

            {/* Office Rhythm Reality */}
            <div className="space-y-5 text-slate-700 text-base md:text-lg leading-relaxed">
              <p>
                Every office runs on a rhythm. Some buildings need a crew moving through while people are still at their desks. Others need the lights to go off before the work starts. Most need a bit of both.
              </p>
              <p className="font-semibold text-slate-900">
                Enterprise Cleaning Corporation builds the program around that rhythm instead of forcing a building into a fixed route. That has been the approach for more than two decades across Worcester County, Rhode Island, and Southern New Hampshire.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Scope: What our office cleaning service covers */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#0090c8] uppercase mb-2 inline-block">Transparent Standard Scope</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003057]">
              What our office cleaning service covers
            </h2>
            <p className="mt-4 text-lg text-slate-600 font-medium">
              A commercial office cleaning program should be specific enough that anyone on your staff can look at it and know what happens on a given night. Here is the standard scope.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: Trash2,
                title: "Workstation Trash & Recycling",
                desc: "Trash and recycling collection from every workstation, kitchen, and common area."
              },
              {
                icon: SprayCan,
                title: "High Touch Point Disinfection",
                desc: "Disinfecting high touch points: door handles, light switches, elevator buttons, shared keyboards, and conference room tables."
              },
              {
                icon: Droplets,
                title: "Restroom Detailing",
                desc: "Restroom cleaning, disinfecting, and restocking with full dwell-time sanitization."
              },
              {
                icon: Building2,
                title: "Break Rooms & Kitchens",
                desc: "Break room and kitchen cleaning, including counters, sinks, appliance exteriors, and tables."
              },
              {
                icon: Sparkles,
                title: "Floor Maintenance",
                desc: "Vacuuming carpet and damp mopping hard floors with fresh solution every shift."
              },
              {
                icon: FileText,
                title: "Surface Dusting",
                desc: "Dusting desks, sills, ledges, vents, and open surfaces throughout the workplace."
              },
              {
                icon: ShieldCheck,
                title: "Glass & Partition Detailing",
                desc: "Glass cleaning on interior partitions, entry doors, and reception glass."
              },
              {
                icon: MapPin,
                title: "Lobby & Entryway Care",
                desc: "Lobby and entryway care, which matters more here than almost anywhere else because of what New England winters drag through the front door."
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-[#00B8FF]/40 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#0090c8]/10 flex items-center justify-center mb-4 text-[#0090c8]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{service.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 max-w-4xl mx-auto p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Periodic Services Scheduled Without Surprise Invoices</h3>
            <p className="text-base text-slate-600 font-medium leading-relaxed">
              Periodic work sits on top of that. Carpet extraction, floor stripping and waxing, high dusting, and interior window washing run on a quarterly or annual schedule so your budget stays predictable instead of arriving as a surprise invoice.
            </p>
          </div>
        </div>
      </section>

      {/* Day Cleaning vs Night Cleaning Deep Dive */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#0090c8] uppercase mb-2 inline-block">Scheduling Flexibility</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003057]">
              Day cleaning and night cleaning, explained plainly
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed font-medium text-center">
              The old question was day or night. The better question is which parts of your office cleaning need to happen while people are present and which parts do not.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Day Porter Services */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFE800] text-slate-900 flex items-center justify-center font-bold">
                  <SunMedium className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#003057]">Day porter services</h3>
                  <p className="text-xs text-slate-500 font-medium">On-site coverage during active business hours</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed font-medium">
                <p>
                  A day porter works your building during business hours. They keep restrooms stocked, wipe down the break room after the lunch rush, handle spills before someone slips, reset conference rooms between meetings, and keep the lobby looking the way it looked at eight in the morning.
                </p>
                <p>
                  Buildings that benefit most from daytime coverage are the ones with foot traffic they do not control: multi tenant office parks, buildings with a public lobby, medical suites, and any site where clients walk in unannounced. If you have ever had a soap dispenser run dry at two in the afternoon, you already know why this matters.
                </p>
              </div>

              <div className="pt-2">
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block mb-1">Looking for day coverage?</span>
                <p className="text-sm text-slate-600 font-medium">
                  We provide dedicated <strong>day porter services near me</strong> throughout Massachusetts, Rhode Island, and Southern New Hampshire.
                </p>
              </div>
            </div>

            {/* Nightly Office Cleaning */}
            <div className="bg-[#003057] text-white p-8 md:p-10 rounded-3xl shadow-lg space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00B8FF]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 border-b border-white/20 pb-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#FFE800] flex items-center justify-center font-bold">
                  <Moon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Nightly office cleaning</h3>
                  <p className="text-xs text-white/70 font-medium">Full after-hours building reset</p>
                </div>
              </div>

              <div className="space-y-4 text-white/90 text-sm md:text-base leading-relaxed font-medium relative z-10">
                <p>
                  Nightly crews handle the full reset. Vacuuming, mopping, disinfecting, trash, restrooms, and the detail work that is hard to do around occupied desks. Your team leaves, the building gets cleaned, and the next morning it looks like nobody was there.
                </p>
                <p>
                  For most single tenant offices in Central Massachusetts, a nightly program covers everything. For busier buildings, pairing a day porter with a nightly crew is the combination that actually holds up.
                </p>
              </div>

              <div className="pt-4 border-t border-white/15 relative z-10">
                <p className="text-sm text-white/80 font-medium">
                  When you need reliably <strong>clean offices near me</strong>, our nightly crews deliver consistent results shift after shift.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Frequency: How often does an office need cleaning */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-12">
              <span className="text-xs md:text-sm font-bold tracking-widest text-[#0090c8] uppercase mb-2 inline-block">Headcount & Traffic Calculations</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#003057]">
                How often does an office need cleaning
              </h2>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-base md:text-lg leading-relaxed">
              <p>
                Headcount and foot traffic decide this, not square footage. A quiet 20 person office in Holden is usually fine with three nights a week. A 120 person office in Worcester with a client facing lobby needs five nights plus daytime coverage.
              </p>
              <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-[#0090c8]">
                <p className="font-semibold text-slate-900">
                  A simple way to check: count how many people walk through your main entrance in a day, including visitors and delivery drivers. If that number is well above your headcount, your schedule needs to reflect the traffic, not the payroll.
                </p>
              </div>
              <p>
                Restrooms and break rooms are the two areas where cutting frequency shows up fastest. They are also the two areas your employees will comment on first.
              </p>
              <p className="text-sm text-slate-500 font-medium pt-2 border-t border-slate-100">
                Whether you need twice-weekly upkeep or a comprehensive <strong>daily office cleaning service Worcester</strong> program, we customize the schedule to your operational reality.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Service Area: Office cleaning across our service area */}
      <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #003057 0%, #004b80 50%, #0090c8 100%)" }}>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          <div className="text-center max-w-4xl mx-auto mb-16 text-white">
            <span className="inline-block text-[#FFE800] font-bold tracking-widest uppercase text-sm mb-3">Service Area & Regional Footprint</span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Office cleaning across our service area
            </h2>
            <div className="space-y-4 text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
              <p>
                Enterprise Cleaning provides <strong>office cleaning services in Massachusetts</strong> across Worcester, Shrewsbury, West Boylston, Westborough, Northborough, Holden, Auburn, Leominster, and Fitchburg, along with the surrounding Worcester County towns.
              </p>
              <p>
                In Rhode Island, crews cover Providence and the surrounding communities for <strong>commercial office cleaning</strong> and janitorial contracts, delivering full <strong>commercial cleaning services Rhode Island</strong> businesses rely on. In Southern New Hampshire, service extends to the Nashua, Manchester, and Salem corridor.
              </p>
              <p>
                Working with a regional company instead of a national franchise means the person who quotes your building is the person accountable for it. Searching for an <strong>office cleaning company near me</strong> or <strong>commercial office cleaning services near me</strong> usually returns franchise call centers. Enterprise Cleaning is locally owned and answers its own phone.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a 
                href="tel:5088901000" 
                className="inline-flex items-center gap-2 bg-[#FFE800] text-slate-900 font-extrabold px-8 py-4 rounded-full hover:bg-yellow-300 transition-all shadow-xl text-base"
              >
                <PhoneCall className="w-5 h-5" /> Call (508) 890-1000
              </a>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-slate-100 transition-all shadow-lg text-base"
              >
                Request a Walkthrough <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Regional Cities Chip Matrix */}
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-white">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-[#FFE800]" />
              <h3 className="text-xl font-bold">Local Service Locations</h3>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-bold text-[#FFE800] mb-2 uppercase tracking-wide text-xs">Central Massachusetts</h4>
                <p className="text-white/80 leading-relaxed font-medium">
                  Worcester · Shrewsbury · West Boylston · Westborough · Northborough · Holden · Auburn · Leominster · Fitchburg
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#FFE800] mb-2 uppercase tracking-wide text-xs">Rhode Island</h4>
                <p className="text-white/80 leading-relaxed font-medium">
                  Providence · Cranston · Pawtucket · Warwick · Surrounding Communities
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#FFE800] mb-2 uppercase tracking-wide text-xs">Southern New Hampshire</h4>
                <p className="text-white/80 leading-relaxed font-medium">
                  Nashua · Manchester · Salem Corridor
                </p>
              </div>
            </div>

            <p className="text-xs text-white/70 mt-6 pt-4 border-t border-white/15">
              Looking for trusted <strong>office cleaning services Worcester MA</strong> or an experienced <strong>office cleaning service near me</strong>? Enterprise Cleaning Corporation provides fully licensed, insured, and bonded crews directly from West Boylston.
            </p>
          </div>

        </div>
      </section>

      {/* Why businesses stay with Enterprise Cleaning */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#003057] text-[#FFE800] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#0090c8] uppercase tracking-widest">Accountability & Experience</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                    Why businesses stay with Enterprise Cleaning
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed">
                <p>
                  Enterprise Cleaning Corporation is a locally owned commercial cleaning company headquartered at 99 Hartwell Street in West Boylston, Massachusetts. Owners <strong>Steve Buchalter and Julio Biage</strong> are directly involved in accounts, which is why clients get consistent crews rather than a rotating ticket queue.
                </p>
                <p>
                  The company maintains a <strong>97 percent client retention rate</strong>, has won the Worcester Business Journal Best of Business award four times, and has held BBB accreditation since 2007. Clients include MacIntire Insurance and the Worcester Club.
                </p>
                <p>
                  This service is one part of a broader program that also covers <Link href="/janitorial-services" className="text-[#0090c8] font-bold hover:underline">janitorial services</Link>, <Link href="/floor-care-services-central-ma" className="text-[#0090c8] font-bold hover:underline">floor care</Link>, window cleaning, pressure washing, <Link href="/post-construction-cleaning-central-ma" className="text-[#0090c8] font-bold hover:underline">post construction cleaning</Link>, and <Link href="/turnover-cleaning-central-ma" className="text-[#0090c8] font-bold hover:underline">turnover cleaning</Link>, so a single vendor can handle the whole building.
                </p>
              </div>

              {/* Get an office cleaning quote callout */}
              <div className="mt-8 p-6 md:p-8 rounded-2xl bg-[#003057] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Get an office cleaning quote</h3>
                  <p className="text-sm text-white/85 leading-relaxed max-w-xl">
                    Every quote starts with a walkthrough. We look at your square footage, your traffic, your floor types, and your schedule, then build a scope you can actually read. No franchise pricing tiers and no per desk math that ignores how your building works.
                  </p>
                </div>
                <Link 
                  href="/contact" 
                  className="shrink-0 inline-flex items-center gap-2 bg-[#FFE800] text-slate-950 font-extrabold px-6 py-3.5 rounded-full hover:bg-yellow-300 transition-all text-sm shadow-md"
                >
                  Book Walkthrough <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-bold tracking-widest text-[#0090c8] uppercase mb-2 inline-block">Voice Search & Direct Answers</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#003057]">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-slate-600 font-medium text-base">
                Six voice search FAQs. Each answer leads with the direct response so it can be lifted as a featured snippet or an AI assistant answer.
              </p>
            </div>
            
            <div className="space-y-6">
              {structuredDataFAQ.mainEntity.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-[#00B8FF]/40 transition-colors"
                >
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                    <span className="text-[#0090c8] shrink-0 font-extrabold text-lg md:text-xl">Q{index + 1}.</span>
                    <span>{faq.name}</span>
                  </h3>
                  <div className="text-slate-600 pl-8 leading-relaxed font-medium text-sm md:text-base border-l-2 border-[#0090c8]/20 ml-2">
                    {faq.acceptedAnswer.text}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      
      {/* Related Services */}
      <RelatedServices serviceIds={["janitorial", "medical", "floor", "specialty"]} />

      {/* Related Industries Navigation */}
      <RelatedIndustries industryIds={["office", "medical", "education", "industrial"]} />
      
      {/* Global Glow CTA Section */}
      <CTASection
        className="bg-white border-t border-slate-200"
        title="Ready for Dependable Office Cleaning?"
        action={{
          text: "Request On-Site Walkthrough",
          href: "/contact",
          variant: "destructive",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed text-center">
            Experience the difference of an office cleaning program built around your workplace rhythm. Contact Enterprise Cleaning Corporation today.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {[
              { icon: ShieldCheck, text: "Fully Insured & Bonded" },
              { icon: Users, text: "97% Client Retention" },
              { icon: Trophy, text: "4× WBJ Best of Business" },
              { icon: Clock, text: "23+ Years Experience" },
            ].map((chip, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold"
              >
                <chip.icon className="w-4 h-4 text-[#0090c8]" />
                {chip.text}
              </div>
            ))}
          </div>
        </div>
      </CTASection>
    </>
  );
}
