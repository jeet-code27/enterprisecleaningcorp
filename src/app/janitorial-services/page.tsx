import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, PhoneCall, ShieldCheck, Clock, Building2, 
  Trash2, Droplets, Sparkles, SprayCan, CheckCircle2,
  CalendarCheck, FileText, Check, ArrowRight,
  MapPin, Trophy, Users, Sparkle, SunMedium, CloudSnow, CloudRain
} from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";
import { RelatedIndustries } from "@/components/ui/related-industries";
import { RelatedServices } from "@/components/ui/related-services";

export const metadata: Metadata = {
  title: { absolute: "Janitorial Services | Restroom Cleaning MA, RI & NH" },
  description: "Janitorial services with restroom cleaning done right, for businesses in Central Massachusetts, Rhode Island, and Southern New Hampshire. Book a walkthrough.",
  keywords: "janitorial services, janitorial cleaning services, commercial janitorial services, cleaning and janitorial services, office janitorial services near me, janitorial cleaning services near me, janitorial services near me, janitorial company near me, commercial janitorial services in massachusetts, janitor near me, day porter services near me, janitorial staffing agencies near me, commercial disinfection services",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/janitorial-services",
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
    title: "Janitorial Services | Restroom Cleaning MA, RI & NH",
    description: "Janitorial services with restroom cleaning done right, for businesses in Central Massachusetts, Rhode Island, and Southern New Hampshire. Book a walkthrough.",
    url: "https://www.enterprisecleaningcorp.com/janitorial-services",
    siteName: "Enterprise Cleaning Corporation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.enterprisecleaningcorp.com/images/janitorial_services_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Enterprise Cleaning Corporation Janitorial Services",
      },
    ],
  },
};

const structuredDataService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Janitorial Services & Commercial Restroom Cleaning",
  "serviceType": "Janitorial Services",
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
  "description": "Commercial janitorial services and specialized commercial restroom cleaning built into every route for facilities across Central Massachusetts, Rhode Island, and Southern New Hampshire.",
  "url": "https://www.enterprisecleaningcorp.com/janitorial-services"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is included in commercial janitorial services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Janitorial services cover recurring cleaning of the whole building: restroom cleaning and restocking, trash and recycling removal, high touch point disinfection, vacuuming and mopping, break room sanitation, and entryway care. Periodic work such as floor stripping, waxing, and carpet extraction is scheduled on top of the recurring route."
      }
    },
    {
      "@type": "Question",
      "name": "How often should commercial restrooms be cleaned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Commercial restroom cleaning should include a full clean and disinfect at least once every 24 hours. Buildings with public access, multiple shifts, or heavy foot traffic need midday service on top of that. Traffic volume determines the schedule, not the size of the room."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between janitorial services and commercial cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Janitorial services usually mean the recurring day to day work: trash, restrooms, floors, and touch points on a fixed schedule. Commercial cleaning is the broader category that also covers periodic and project work such as floor stripping, window cleaning, pressure washing, and post construction cleanup."
      }
    },
    {
      "@type": "Question",
      "name": "Why does my office bathroom smell bad even after cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The two usual causes are urine soaked grout and a dry floor drain. Mopping the surface will not pull residue out of grout lines, so the floor needs machine scrubbing. A drain that sits unused loses its water seal and lets sewer gas rise, which a quart of water once a week prevents."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between cleaning, sanitizing, and disinfecting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cleaning removes visible soil. Sanitizing reduces germs to a level considered safe. Disinfecting kills a specified list of pathogens and requires the surface to stay wet for the dwell time printed on the product label. Restrooms need cleaning first, then disinfecting, because disinfectant cannot work through a layer of dirt."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a day porter or is a nightly janitorial crew enough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A nightly janitorial crew resets the building. A day porter keeps it from falling apart between resets. If the public uses your restrooms, if you run more than one shift, or if consumables run out before the night crew arrives, you need both."
      }
    },
    {
      "@type": "Question",
      "name": "How much do janitorial services cost in Massachusetts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing depends on square footage, fixture count, daily traffic, floor types, and service frequency. Most providers price restroom care inside a full janitorial contract rather than as a separate line item, so an on site walkthrough gives a far more accurate number than a phone estimate."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide janitorial staffing for our own building team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enterprise Cleaning provides fully managed janitorial crews rather than temporary staffing placements. That means we supply the people, the training, the supervision, the equipment, and the accountability, so you are not managing another set of employees."
      }
    },
    {
      "@type": "Question",
      "name": "Who provides janitorial services near me in Worcester County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enterprise Cleaning Corporation provides janitorial services throughout Worcester County from its West Boylston headquarters, including Worcester, Shrewsbury, Westborough, Northborough, Holden, Auburn, Leominster, and Fitchburg, plus Rhode Island and Southern New Hampshire. Call (508) 890-1000 or request a walkthrough at enterprisecleaningcorp.com."
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
      "name": "Janitorial Services",
      "item": "https://www.enterprisecleaningcorp.com/janitorial-services"
    }
  ]
};

export default function JanitorialServicesPage() {
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
            src="/images/janitorial_services_hero.jpg" 
            alt="Janitorial services and commercial restroom cleaning in Central MA, RI and NH" 
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
                <span className="text-[#FFE800] font-bold tracking-wide">Janitorial Services</span>
              </div>
              
              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] drop-shadow-md">
                Janitorial Services and Commercial Restroom Cleaning for Central Massachusetts, Rhode Island, and Southern New Hampshire
              </h1>
              
              {/* Intro Snippet */}
              <p className="text-base sm:text-lg md:text-xl text-white/95 font-medium leading-relaxed drop-shadow-sm text-left">
                Janitorial services with restroom cleaning done right. Built directly into every recurring route rather than sold as an afterthought, backed by 23+ years of commercial facility excellence.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-[#FFE800] text-slate-900 font-extrabold px-7 py-3.5 rounded-full hover:bg-yellow-300 transition-all shadow-xl hover:scale-105 text-sm md:text-base"
                >
                  Book a Walkthrough <ArrowRight className="w-4 h-4" />
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
                  <ShieldCheck className="w-7 h-7 text-[#0090c8]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  Restroom Care Built Into Every Route
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  Never an add-on or rushed checklist. Every route has its own standard of proof.
                </p>
                <div className="pt-4 border-t border-slate-100 space-y-3 text-left">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Dwell time verified disinfection</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Color-coded microfiber & fresh mop water</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Signed service logs on every scheduled visit</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Owners Julio & Steve personally accountable</span>
                  </div>
                </div>
                <div className="pt-3">
                  <Link 
                    href="/contact" 
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#003057] hover:bg-[#002240] text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors shadow-md"
                  >
                    Request Free Assessment
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Featured Snippet Section */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Featured Snippet Box */}
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-sky-50/50 border-2 border-[#0090c8]/20 shadow-sm relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0090c8] text-white text-xs font-bold tracking-wide uppercase mb-4">
                <Sparkle className="w-3.5 h-3.5" /> Featured Snippet Answer
              </div>
              <p className="text-lg md:text-xl text-slate-900 font-semibold leading-relaxed">
                Janitorial services are the recurring cleaning, disinfecting, and restocking that keep a commercial building sanitary and presentable. At Enterprise Cleaning Corporation, restroom cleaning is built into every janitorial route rather than sold as an add on, because the restroom is the space your employees, clients, and inspectors judge first.
              </p>
            </div>

            {/* Practical Facility Observation */}
            <div className="space-y-5 text-slate-700 text-base md:text-lg leading-relaxed">
              <p>
                Ask a facility manager in Worcester which part of the building generates the most complaints. It is almost never the lobby. It is the restroom.
              </p>
              <p>
                A conference room can sit dusty for a week and nobody says a word. A restroom can be off by one detail and you will hear about it before lunch.
              </p>
              <p className="font-semibold text-slate-900">
                That is why our janitorial services give restrooms their own checklist, their own schedule, and their own standard of proof. Everything below is how our janitorial services actually run.
              </p>
            </div>

            {/* Contextual link to blog guide */}
            <div className="p-4 md:p-5 rounded-2xl bg-[#003057]/5 border border-[#003057]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-[#0090c8] shrink-0" />
                <span className="text-sm md:text-base text-slate-800 font-medium">
                  Adapted from the ECC facility guide: <strong className="text-slate-900">Commercial Restroom Cleaning Guide for Massachusetts Businesses</strong>.
                </span>
              </div>
              <Link 
                href="/blog/commercial-restroom-cleaning-massachusetts-businesses" 
                className="shrink-0 text-sm font-bold text-[#0090c8] hover:text-[#003057] hover:underline inline-flex items-center gap-1"
              >
                Read Full Restroom Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Scope Section: What our commercial janitorial services include */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#0090c8] uppercase mb-2 inline-block">Comprehensive Building Coverage</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003057]">
              What our commercial janitorial services include
            </h2>
            <p className="mt-4 text-lg text-slate-600 font-medium">
              Our commercial janitorial services cover the whole building, not just the visible parts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: Droplets,
                title: "Restroom Care",
                desc: "Restroom cleaning, disinfecting, and consumable restocking built into every route."
              },
              {
                icon: Trash2,
                title: "Trash & Recycling",
                desc: "Trash and recycling removal from offices, break rooms, and common areas."
              },
              {
                icon: SprayCan,
                title: "High-Touch Disinfection",
                desc: "High touch point disinfection on handles, switches, rails, and shared surfaces."
              },
              {
                icon: Sparkles,
                title: "Floor Maintenance",
                desc: "Vacuuming, sweeping, and damp mopping with fresh solution every time."
              },
              {
                icon: Building2,
                title: "Break Rooms & Kitchens",
                desc: "Break room and kitchen sanitation, sanitizing counters, sinks, and appliance exteriors."
              },
              {
                icon: ShieldCheck,
                title: "Entryway & Lobby Care",
                desc: "Entryway and lobby care, including matting, glass detailing, and first-impression zones."
              },
              {
                icon: Users,
                title: "Day Porter Coverage",
                desc: "Day porter coverage during business hours where the building needs it for high-traffic daytime support."
              },
              {
                icon: CalendarCheck,
                title: "Periodic Floor Care",
                desc: "Periodic floor care: stripping, waxing, buffing, and carpet extraction on an established schedule."
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

          <div className="mt-10 text-center max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-slate-600 font-medium">
              Need dedicated daytime upkeep alongside nightly cleans? Explore our integrated{" "}
              <Link href="/office-cleaning" className="text-[#0090c8] font-bold hover:underline">
                office cleaning services
              </Link>{" "}
              or inquire about <strong>day porter services near me</strong> for real-time facility support.
            </p>
          </div>
        </div>
      </section>

      {/* Restroom Cleaning Deep Dive & Detail Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#0090c8] uppercase mb-2 inline-block">The Foundation of Tenant Satisfaction</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003057]">
              Restroom cleaning: the part of janitorial services people notice most
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed font-medium text-center">
              Plenty of buildings believe restrooms are handled because someone wipes the sink and empties the trash. That is tidying up. Real restroom care runs in layers, and each layer moves on its own clock.
            </p>
          </div>

          {/* Feature Image Showcase */}
          <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 mb-16">
            <div className="relative h-[300px] sm:h-[420px] md:h-[480px] w-full">
              <Image 
                src="/images/restroom_cleaning_detail.jpg" 
                alt="Spotless commercial restroom maintained by Enterprise Cleaning Corporation"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 text-white">
                <div className="inline-flex items-center gap-2 bg-[#FFE800] text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full mb-2 uppercase tracking-wide">
                  Standard of Proof
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Every Fixture, Every Grout Line, Every Day</h3>
                <p className="text-xs md:text-sm text-white/90 max-w-2xl mt-1">
                  From dwell-time fixture sanitization to weekly drain flush protocols, our commercial janitorial services eliminate hidden bacteria and lingering odors at the source.
                </p>
              </div>
            </div>
          </div>

          {/* Daily vs Weekly/Monthly Tasks Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Daily Tasks */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="w-10 h-10 rounded-xl bg-[#003057] text-[#FFE800] flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#003057]">Daily restroom tasks</h3>
                  <p className="text-xs text-slate-500 font-medium">Completed on every scheduled visit</p>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "Disinfect toilets, urinals, seats, and flush handles using the full dwell time on the label",
                  "Clean and sanitize sinks, faucets, and counters",
                  "Wipe high touch points: door handles, push plates, dispensers, light switches, and stall latches",
                  "Restock soap, paper towels, tissue, and seat covers",
                  "Empty and reline waste bins and sanitary napkin receptacles",
                  "Sweep and damp mop the floor with fresh solution and a clean pad",
                  "Spot clean mirrors, partitions, and the wall areas around fixtures"
                ].map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Weekly & Monthly Tasks */}
            <div className="bg-[#003057] text-white p-8 rounded-3xl shadow-lg space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00B8FF]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 border-b border-white/20 pb-4 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-[#FFE800] flex items-center justify-center font-bold">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Weekly and monthly restroom tasks</h3>
                  <p className="text-xs text-white/70 font-medium">Systematic deep maintenance</p>
                </div>
              </div>

              <ul className="space-y-4 relative z-10">
                {[
                  "Machine scrub or deck brush the tile and grout",
                  "Descale toilet bowls, urinals, and faucet aerators to strip hard water buildup",
                  "Pour water down floor drains that rarely get used",
                  "Wash partitions from top to bottom, including the hardware",
                  "Clean vent covers and confirm the exhaust fan is actually pulling air",
                  "Inspect caulking and seals where fixtures meet the floor and wall"
                ].map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-white/90 font-medium">
                    <Check className="w-5 h-5 text-[#FFE800] shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Dwell Time & Disinfection Science */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0090c8]/10 text-[#0090c8] flex items-center justify-center shrink-0">
                  <SprayCan className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#0090c8] uppercase tracking-widest">The Science of Disinfection</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#003057]">
                    Why dwell time separates real disinfection from wiping
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed">
                <p>
                  The detail most crews skip is dwell time. Disinfectants have to stay wet on a surface for the period printed on the label, often one to ten minutes, before they kill anything. Spray and wipe immediately and you have cleaned the surface without disinfecting it.
                </p>
                <p>
                  Our janitorial services build that wait into the route. The technician moves to another fixture while the product does its job, then comes back. It costs nothing extra and it is the difference between disinfection and theater.
                </p>
                <p className="text-sm text-slate-500 font-medium pt-2 border-t border-slate-100">
                  Looking for specialized pathogen protocols? Learn more about our comprehensive{" "}
                  <Link href="/specialty-cleaning-services-central-ma" className="text-[#0090c8] font-bold hover:underline">
                    commercial disinfection services
                  </Link>{" "}
                  and healthcare-grade sanitization programs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Odor Diagnostics Section: Why your restroom still smells after it is cleaned */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-bold tracking-widest text-[#0090c8] uppercase mb-2 inline-block">Problem Solving & Root Cause Removal</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#003057]">
                Why your restroom still smells after it is cleaned
              </h2>
              <p className="mt-3 text-lg text-slate-600 font-medium">
                Most of the time the smell is not coming from the toilet. It is coming from the floor.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Culprit 1: Grout */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-base">
                  1
                </div>
                <h3 className="text-lg font-bold text-slate-900">Urine Soaked in Grout</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Urine works into grout lines and into the seam where the floor meets the wall. Mopping the surface pushes diluted residue around instead of removing it. That is a scrubbing problem, not a fragrance problem, and no amount of air freshener will fix it.
                </p>
              </div>

              {/* Culprit 2: Dry Drain */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-base">
                  2
                </div>
                <h3 className="text-lg font-bold text-slate-900">Dry Floor Drains</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  The second common culprit is a dry floor drain. The trap underneath evaporates when the drain sits unused, and sewer gas comes straight up. A quart of water down each drain once a week solves it.
                </p>
              </div>

              {/* Culprit 3: Shared Bucket */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-base">
                  3
                </div>
                <h3 className="text-lg font-bold text-slate-900">Shared Mop Buckets</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  The third is a shared mop bucket. Dragging one bucket of gray water through a building is the fastest way to make every restroom smell an hour after the crew leaves. Fresh solution per restroom and color coded microfiber are standard on our routes.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Frequency & Traffic Section + Comparison Table */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#0090c8] uppercase mb-2 inline-block">Scheduling Based on Facility Reality</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003057]">
              How often restrooms need janitorial service
            </h2>
            <div className="mt-4 space-y-4 text-base md:text-lg text-slate-600 font-medium text-left leading-relaxed">
              <p>
                Traffic decides this, not square footage. A 40 person insurance office in Shrewsbury is usually fine with a nightly clean. A plant in Auburn running two shifts is not, because that restroom takes sixteen hours of use before the night crew ever walks in.
              </p>
              <p>
                Buildings with public lobbies, multiple tenants, or medical suites almost always need a day porter alongside nightly janitorial services. A single tenant warehouse in Holden with 20 employees usually does not. The tell is whether anyone outside your payroll walks through that door.
              </p>
            </div>
          </div>

          {/* Responsive Frequency Table */}
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 md:p-8 bg-[#003057] text-white">
              <h3 className="text-xl md:text-2xl font-bold">Restroom Janitorial Cleaning Frequency Matrix</h3>
              <p className="text-sm text-white/80 mt-1">Exact tasks, cadences, and why each step is critical for building hygiene.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-xs md:text-sm font-extrabold text-slate-700 uppercase tracking-wider">
                    <th className="py-4 px-6 w-1/5">Frequency</th>
                    <th className="py-4 px-6 w-2/5">Task</th>
                    <th className="py-4 px-6 w-2/5">Why it matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm md:text-base text-slate-700 font-medium">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#003057] whitespace-nowrap">Every shift</td>
                    <td className="py-4 px-6">Restock consumables and spot check every fixture</td>
                    <td className="py-4 px-6 text-slate-600">An empty soap dispenser cancels out the entire program</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                    <td className="py-4 px-6 font-bold text-[#003057] whitespace-nowrap">Daily</td>
                    <td className="py-4 px-6">Disinfect fixtures and touch points with full dwell time</td>
                    <td className="py-4 px-6 text-slate-600">This is the step that actually interrupts illness transmission</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#003057] whitespace-nowrap">Daily</td>
                    <td className="py-4 px-6">Damp mop with fresh solution and a clean pad</td>
                    <td className="py-4 px-6 text-slate-600">Reused dirty water is the top cause of lingering odor</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                    <td className="py-4 px-6 font-bold text-[#003057] whitespace-nowrap">Weekly</td>
                    <td className="py-4 px-6">Machine scrub floors and grout lines</td>
                    <td className="py-4 px-6 text-slate-600">Surface mopping never reaches the grout where odor lives</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#003057] whitespace-nowrap">Weekly</td>
                    <td className="py-4 px-6">Flush unused floor drains with water</td>
                    <td className="py-4 px-6 text-slate-600">Keeps the trap sealed and blocks sewer gas</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                    <td className="py-4 px-6 font-bold text-[#003057] whitespace-nowrap">Monthly</td>
                    <td className="py-4 px-6">Descale bowls, urinals, and faucet aerators</td>
                    <td className="py-4 px-6 text-slate-600">Hard water scale traps odor and permanently stains fixtures</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#003057] whitespace-nowrap">Quarterly</td>
                    <td className="py-4 px-6">Deep clean partitions, vents, and ceiling areas</td>
                    <td className="py-4 px-6 text-slate-600">Catches mildew and dust before occupants notice it</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                    <td className="py-4 px-6 font-bold text-[#003057] whitespace-nowrap">Ongoing</td>
                    <td className="py-4 px-6">Log every service visit with a signature</td>
                    <td className="py-4 px-6 text-slate-600">Gives you a verified service record for insurers, facility audits, and tenants</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* New England Weather Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#0090c8] uppercase mb-2 inline-block">Four-Season Route Customization</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003057]">
              How New England weather changes janitorial services
            </h2>
            <p className="mt-4 text-lg text-slate-600 font-medium max-w-3xl mx-auto">
              Janitorial services in this region have to handle a beating that buildings in milder climates never see.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* Winter */}
            <div className="bg-slate-50 p-7 rounded-3xl shadow-sm border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#0090c8] flex items-center justify-center">
                <CloudSnow className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Winter: Ice Melt & Sand</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                From December through March, ice melt and sand ride in on every boot. Chloride residue leaves a white haze on tile, drives into grout, and dulls finished floors. Restrooms near an entrance in West Boylston or Northborough collect the worst of it, because that is the first stop after the parking lot.
              </p>
            </div>

            {/* Spring */}
            <div className="bg-slate-50 p-7 rounded-3xl shadow-sm border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <CloudRain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Spring: Mud & Floor Wear</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Spring brings mud and a spike in floor damage. Foot traffic grinds grit directly into high-gloss floor coatings and entryway runners, requiring immediate adjustment of mopping solutions and mat rotations to protect floor integrity.
              </p>
            </div>

            {/* Summer */}
            <div className="bg-slate-50 p-7 rounded-3xl shadow-sm border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <SunMedium className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Summer: Humidity & Mildew</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Summer humidity plus a weak exhaust fan grows mildew along ceiling grids and in the corners behind toilets, which is where most people never look until the smell arrives. A janitorial schedule should flex with those seasons instead of running the identical route 365 days a year.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Service Area Section & Regional Leadership */}
      <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #003057 0%, #004b80 50%, #0090c8 100%)" }}>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          <div className="text-center max-w-4xl mx-auto mb-16 text-white">
            <span className="inline-block text-[#FFE800] font-bold tracking-widest uppercase text-sm mb-3">Service Area & Leadership</span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Janitorial services across Central MA, Rhode Island, and Southern NH
            </h2>
            <div className="space-y-4 text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-3xl mx-auto">
              <p>
                Enterprise Cleaning provides commercial janitorial services in Massachusetts across Worcester, Shrewsbury, West Boylston, Westborough, Northborough, Holden, Auburn, Leominster, and Fitchburg. Rhode Island coverage includes Providence and surrounding communities. Southern New Hampshire coverage includes the Nashua, Manchester, and Salem corridor.
              </p>
              <p>
                Enterprise Cleaning Corporation has provided janitorial services across the region for more than two decades from 99 Hartwell Street in West Boylston. The company holds a 97 percent client retention rate, four Worcester Business Journal Best of Business awards, and BBB accreditation since 2007, and works with organizations including MacIntire Insurance and the Worcester Club.
              </p>
              <p className="text-[#FFE800] font-bold pt-2">
                Owners Steve Buchalter and Julio Biage stay involved in accounts, so you get one accountable point of contact instead of a franchise ticket system.
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
              Searching for <strong>office janitorial services near me</strong> or reliable <strong>janitorial services near me</strong>? Enterprise Cleaning Corporation provides fully licensed, insured, and bonded crews directly from West Boylston.
            </p>
          </div>

        </div>
      </section>

      {/* Voice Search Frequently Asked Questions */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-bold tracking-widest text-[#0090c8] uppercase mb-2 inline-block">Voice Search & Direct Answers</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#003057]">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-slate-600 font-medium text-base">
                Voice search FAQs phrased the way facility managers actually ask them out loud and the way they type them into an AI assistant. Each answer leads with the direct response.
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
      <RelatedServices serviceIds={["nightly", "floor", "specialty"]} />

      {/* Related Industries Navigation */}
      <RelatedIndustries industryIds={["office", "medical", "education", "industrial"]} />
      
      {/* Global Glow CTA Section */}
      <CTASection
        className="bg-white border-t border-slate-200"
        title="Ready for Janitorial Services Done Right?"
        action={{
          text: "Request On-Site Walkthrough",
          href: "/contact",
          variant: "destructive",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed text-center">
            Experience the difference of a janitorial program that gives restrooms, common areas, and floors their own standard of proof. Contact Enterprise Cleaning Corporation today.
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
