import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, PhoneCall, ShieldCheck, Clock, Building2, 
  Trash2, Droplets, Sparkles, SprayCan, Coffee, Wind, MapPin, Trophy, Users,
  Leaf, ArrowRight, CheckCircle2,
  CalendarCheck,
  Briefcase
} from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";
import { RelatedIndustries } from "@/components/ui/related-industries";

export const metadata: Metadata = {
  title: { absolute: "Day & Night Shift Cleaning | Central MA, RI & Southern NH" },
  description: "Day porter and nightly janitorial cleaning under one contract, one crew, one point of contact — for offices and facilities across Central MA, Rhode Island & Southern NH.",
  keywords: "commercial day porter services, night shift janitorial Central MA, 24 hour commercial cleaning Worcester, office day porter, day and night commercial cleaners",
  alternates: {
    canonical: "https://enterprisecleaningcorp.com/day-and-night-shift-commercial-cleaning-services-central-ma"
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
  "serviceType": "Day & Night Shift Commercial Cleaning",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Enterprise Cleaning Corporation",
    "telephone": "+1-508-890-1000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "99 Hartwell Street",
      "addressLocality": "West Boylston",
      "addressRegion": "MA",
      "postalCode": "01583",
      "addressCountry": "US"
    }
  },
  "areaServed": ["Central Massachusetts", "Rhode Island", "Southern New Hampshire"],
  "description": "Combined day porter and nightly janitorial cleaning for offices, medical facilities, and commercial buildings across Central Massachusetts, Rhode Island, and Southern New Hampshire.",
  "url": "https://enterprisecleaningcorp.com/day-and-night-shift-commercial-cleaning-services-central-ma"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you provide both day shift and night shift cleaning under one contract?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We build combined programs that pair a nightly janitorial visit with day porter coverage during business hours, all under a single contract, a single crew structure, and one point of contact."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in day porter or day shift coverage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Day shift coverage typically includes restroom checks and restocking, lobby and common-area upkeep, spill and mess response, conference room resets, and high-traffic trash monitoring while your building is occupied."
      }
    },
    {
      "@type": "Question",
      "name": "Can I add day shift coverage to an existing nightly janitorial contract?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many of our clients start with nightly janitorial cleaning and add day porter coverage once they see how much a daytime presence improves how the building looks and feels during business hours."
      }
    },
    {
      "@type": "Question",
      "name": "Do you serve businesses in Rhode Island and Southern New Hampshire, or only Massachusetts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide day and night shift cleaning throughout Central Massachusetts, all of Rhode Island, and Southern New Hampshire, including Providence, Manchester, and Nashua."
      }
    },
    {
      "@type": "Question",
      "name": "How many nights per week is night shift cleaning typically provided?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients are serviced five nights a week, but we build the schedule around your operation — nightly, several nights a week, or weekends only — always after hours so cleaning never disrupts your business day."
      }
    },
    {
      "@type": "Question",
      "name": "Will the same crew service my building for both shifts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Crew continuity across both shifts is central to how we work, and it is a major reason behind our 97% client retention rate."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide day shift cleaning for medical or retail facilities specifically?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medical offices and retail locations are two of the environments that benefit most from day shift coverage, since restrooms and common areas see heavy use throughout business hours."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can day shift staff respond to a spill or mess during business hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because your day porter is already on-site, response is typically immediate — there is no need to wait for the next scheduled visit."
      }
    },
    {
      "@type": "Question",
      "name": "Is combined day and night shift cleaning available in Providence, RI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide day and night shift programs throughout Rhode Island, including Providence, and Southern New Hampshire, including Manchester and Nashua, in addition to Central Massachusetts."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get a quote for a combined day and night cleaning program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call (508) 890-1000 or request a free on-site assessment. We will walk your facility, learn your traffic patterns, and design a day-and-night program specific to your building."
      }
    }
  ]
};

export default function NightAndDayCleaningPage() {
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

      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center pt-24 pb-20 overflow-hidden" style={{ background: "#0090c8" }}>
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/day_night_cleaning_hero.png" 
            alt="Day and Night Shift Cleaning for professional offices" 
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#0090c8]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0090c8]/95 via-[#00B8FF]/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-end justify-between w-full h-full">
            
            {/* Left Content */}
            <div className="text-white space-y-6 max-w-2xl flex-1 mt-12">
              <div className="flex items-center gap-2 text-sm text-white/90 mb-6 font-medium">
                <Link href="/services" className="hover:text-white transition-colors">Our Services</Link>
                <ChevronRight className="w-4 h-4 text-[#FFE800]" />
                <span className="text-white font-bold tracking-wide">Day & Night Shift Cleaning</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] drop-shadow-md">
                Day & Night Shift Commercial Cleaning <br/>
                <span className="text-[#FFE800] text-3xl md:text-4xl lg:text-5xl">in Central Massachusetts, Rhode Island & Southern New Hampshire</span>
              </h1>
              
              <div className="text-base md:text-lg text-white/95 font-medium max-w-2xl leading-relaxed mt-6 drop-shadow-sm space-y-4 text-left">
                <p>
                  Some buildings need to be spotless before the first employee badges in. Others need a visible presence throughout the business day — restocking restrooms, resetting conference rooms, and handling the small messes that happen when a facility is full of people. Most buildings need both.
                </p>
                <p>
                  Enterprise Cleaning Corporation is one of the few commercial cleaning companies in the region that delivers day shift and night shift cleaning under a single contract, a single management structure, and a single point of contact.
                </p>
              </div>
              
              {/* Bottom Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-auto border-t border-white/30">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-[#FFE800]" />
                  <div>
                    <div className="font-bold text-lg">23+</div>
                    <div className="text-xs text-white/90">Years in Business</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-[#FFE800]" />
                  <div>
                    <div className="font-bold text-lg">97%</div>
                    <div className="text-xs text-white/90">Client Retention</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-[#FFE800]" />
                  <div>
                    <div className="font-bold text-lg">BBB</div>
                    <div className="text-xs text-white/90">Accredited Since 2007</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneCall className="w-8 h-8 text-[#FFE800]" />
                  <div>
                    <div className="font-bold text-lg">24/7</div>
                    <div className="text-xs text-white/90">Emergency Response</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Floating Card */}
            <div className="w-full max-w-sm lg:mb-12">
              <div className="bg-white p-8 rounded-3xl shadow-2xl text-center space-y-4 border-b-4 border-[#00B8FF]">
                <div className="mx-auto w-14 h-14 rounded-full bg-[#00B8FF]/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-7 h-7 text-[#00B8FF]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  Consistency & Accountability Shift After Shift
                </h3>
                <div className="pt-4 border-t border-slate-100">
                  <div className="text-5xl font-extrabold text-[#0090c8]">97%</div>
                  <div className="text-xs font-bold text-slate-500 tracking-widest uppercase mt-2 mb-3">Client Retention</div>
                  <div className="flex items-center justify-center gap-1 text-[#FFE800]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 mt-3 font-medium text-left">
                    Whether you need a thorough nightly clean, a day porter on-site during business hours, or both working together, the program is built around your building, not a generic template.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Intro Context Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-[#003057] mb-6">Two Shifts, One Program</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-left">
              Night shift and day shift cleaning solve different problems, and treating them as one combined program — rather than two separate line items — is what keeps a facility consistently presentable instead of clean only right after the crew leaves. Our night shift team handles the deep, disruptive work that is best done after hours: full restroom sanitizing, floor care, trash removal, and disinfecting of high-touch surfaces throughout the building. Our day shift team, sometimes called day porter coverage, is on-site during business hours to maintain what the night crew already set up — checking restrooms between visits, keeping lobbies and common areas presentable, resetting conference rooms between meetings, and responding immediately to spills, weather tracked in from the parking lot, or anything else that would otherwise sit until the next night's visit.
            </p>
          </div>
        </div>
      </section>

      {/* Services Breakdown Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            
            {/* Night Shift Column */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#003057] flex items-center justify-center shrink-0">
                  <Sparkles className="w-7 h-7 text-[#FFE800]" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">What Night Shift Cleaning Covers</h3>
              </div>
              <ul className="space-y-5">
                {[
                  "Trash and recycling collection and removal from offices, common areas, and breakrooms",
                  "Restroom cleaning, sanitizing, and restocking of paper products and soap",
                  "Vacuuming of carpets and dust-mopping and damp-mopping of hard floors",
                  "Disinfecting of high-touch surfaces — door handles, light switches, shared equipment",
                  "Breakroom and kitchen cleaning, including counters, sinks, and appliance exteriors",
                  "Dusting of desks, sills, partitions, and horizontal surfaces",
                  "Spot-cleaning of glass, entry doors, and interior partitions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#00B8FF] shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Day Shift Column */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#00B8FF]/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-7 h-7 text-[#00B8FF]" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">What Day Shift & Day Porter Covers</h3>
              </div>
              <ul className="space-y-5">
                {[
                  "Restroom checks and restocking multiple times throughout the business day",
                  "Lobby, entryway, and common-area upkeep while the building is occupied",
                  "Immediate response to spills, tracked-in weather, and unexpected messes",
                  "Conference room and meeting space resets between uses",
                  "Monitoring high-traffic trash and recycling so bins never overflow midday",
                  "Touch-up cleaning of glass doors, elevator interiors, and reception areas",
                  "A visible, on-site point of contact for facility staff and tenants during business hours"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#E31837] shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20 max-w-7xl mx-auto">
            
            {/* Row 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  Why Some Buildings Need Both Shifts
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-left">
                  <p>
                    A single overnight visit works well for a small office with light daytime traffic. It works far less well for a corporate headquarters, a medical building, a busy retail location, or a manufacturing facility running multiple shifts, where hundreds of people move through the same restrooms, lobbies, and common areas over the course of a single day.
                  </p>
                  <p>
                    In those environments, a building that was spotless at 7 a.m. can look neglected by 2 p.m. without a day presence to maintain it. Pairing night shift deep cleaning with day shift upkeep closes that gap, so the building looks the way you want it to look at every hour, not just first thing in the morning.
                  </p>
                </div>
              </div>

              <div className="bg-[#003057] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00B8FF]/20 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#FFE800]" />
                    </div>
                    <h3 className="text-xl font-bold">A Managed Model</h3>
                  </div>
                  <h4 className="font-bold text-lg mb-2">So You Do Not Have to Manage the Cleaners</h4>
                  <p className="text-white/80 leading-relaxed font-medium text-left">
                    Many cleaning companies hand a facility a crew and walk away. We manage our own cleaners, across both shifts, so you never have to. Every account has supervision, quality checks, and a direct line to the people who own the company — not a franchise ticket number or a national call center.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="order-2 lg:order-1 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0090c8]/10 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-[#0090c8]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Built Around Your Industry</h3>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium text-left mb-4">
                  No two facilities run on the same schedule, so no two day-and-night programs should look identical. A corporate office, a medical practice, a manufacturing plant, and a multi-tenant property each have different traffic patterns and priorities. Before we quote a combined program, we walk the building, learn how it is actually used throughout the day, and design shift coverage that matches.
                </p>
                <p className="text-slate-600 leading-relaxed font-medium text-left">
                  Our experience spans corporate offices, financial institutions, healthcare facilities, schools, manufacturing sites, warehouses, and managed properties throughout the region. We understand the rhythm of your building type before we ever start.
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  Quality Control Across Both Shifts
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-left">
                  <p>
                    A combined day-and-night program is only as good as the oversight behind it, which is why every account gets regular quality inspections that cover both shifts, not just the overnight visit.
                  </p>
                  <p>
                    Supervisors walk buildings on a rotating schedule to confirm restrooms, common areas, and high-traffic zones meet the standard we set at the start of the contract, and we adjust staffing or scope the moment a building's needs change — a new tenant moves in, foot traffic increases, or a department expands into unused space.
                  </p>
                  <p>
                    That ongoing attention is a large part of why clients who start with either shift alone frequently add the other once they see how the two work together.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Service Area Banner */}
      <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #0090c8 0%, #00A8E8 50%, #00B8FF 100%)" }}>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[#FFE800] font-bold tracking-widest uppercase text-sm mb-4">Our Service Area</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Serving Central Massachusetts, Rhode Island & Southern New Hampshire
            </h2>
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-4xl mx-auto text-left">
              We provide combined day and night shift cleaning throughout Worcester, Shrewsbury, Auburn, Holden, Westborough, Marlborough, and the rest of Central Massachusetts, as well as across Rhode Island — including Providence, Cranston, Pawtucket, and Woonsocket — and Southern New Hampshire, including Nashua, Manchester, and Salem. Wherever your building sits, the program is built around the same 97% retention rate, four Worcester Business Journal awards, and BBB accreditation since 2007 that our clients have relied on for more than two decades.
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0090c8]/80 via-transparent to-transparent z-10" />
            <Image
              src="/images/worcester_skyline_banner.png"
              alt="Central Massachusetts — Enterprise Cleaning serves Central MA, RI & NH"
              width={1200}
              height={500}
              className="object-cover w-full h-[280px] md:h-[380px]"
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-[#FFE800]" />
                  <span className="text-[#FFE800] font-bold text-sm uppercase tracking-widest">Regions Covered</span>
                </div>
                <p className="text-white font-bold text-lg md:text-2xl leading-snug">Central MA · Rhode Island · Southern NH</p>
              </div>
              <Link href="/contact" className="shrink-0 inline-flex items-center gap-2 bg-[#FFE800] text-slate-900 font-extrabold px-6 py-3 rounded-full hover:bg-yellow-300 transition-colors shadow-lg text-sm">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0090c8] mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600 font-medium">Common questions about our day and night shift cleaning programs.</p>
            </div>
            
            <div className="space-y-6">
              {structuredDataFAQ.mainEntity.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-[#00B8FF]/30 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                    <span className="text-[#00B8FF] shrink-0 mt-0.5 text-xl">Q:</span>
                    {faq.name}
                  </h3>
                  <p className="text-slate-600 pl-8 leading-relaxed font-medium">
                    <span className="font-bold text-slate-400 mr-2">A:</span>
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <RelatedIndustries industryIds={["office", "medical", "education"]} />
      
      <CTASection
        className="bg-white border-t border-slate-100"
        title="Ready for a Dependable Cleaning Partner?"
        action={{
          text: "Request On-Site Assessment",
          href: "/contact",
          variant: "destructive",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed text-center">
            Get a comprehensive day and night shift cleaning program designed specifically for your facility's needs and schedule.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 animate-appear delay-100">
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
                <chip.icon className="w-4 h-4 text-[#00B8FF]" />
                {chip.text}
              </div>
            ))}
          </div>
        </div>
      </CTASection>
    </>
  );
}
