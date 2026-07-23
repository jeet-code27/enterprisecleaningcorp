import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  PhoneCall, ShieldCheck, Clock, 
  ArrowRight, GraduationCap, Building2, Users, 
  Trophy, MapPin, CheckCircle2, ShieldAlert,
  Coffee, Sparkles, SprayCan, HeartPulse
} from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";
import { RelatedServices } from "@/components/ui/related-services";

export const metadata: Metadata = {
  title: { absolute: "School & Municipal Cleaning Worcester MA" },
  description: "Cleaning for schools, universities, and municipal buildings across Worcester and Central Massachusetts. Healthy environments, reliable service, 97% retention.",
  keywords: "commercial school cleaning Central MA, municipal building janitorial services, university cleaners Worcester, educational facility commercial cleaning",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/school-municipal-cleaning-central-ma"
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
  "name": "Educational & Municipal Buildings — Enterprise Cleaning Corporation",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Enterprise Cleaning Corporation",
    "telephone": "(508) 890-1000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "99 Hartwell Street",
      "addressLocality": "West Boylston",
      "addressRegion": "MA",
      "postalCode": "01583",
      "addressCountry": "US"
    },
    "url": "https://www.enterprisecleaningcorp.com"
  },
  "areaServed": [
    "Worcester MA",
    "Central Massachusetts",
    "Rhode Island",
    "New Hampshire"
  ],
  "url": "https://www.enterprisecleaningcorp.com/school-municipal-cleaning-central-ma"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you clean schools and universities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We clean classrooms, lecture halls, corridors, restrooms, cafeterias, gymnasiums, and common areas for educational facilities across Central Massachusetts."
      }
    },
    {
      "@type": "Question",
      "name": "Can you maintain restrooms and common areas during school or office hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide day porter coverage to keep restrooms and common areas clean during operating hours, with deeper cleaning scheduled after hours."
      }
    },
    {
      "@type": "Question",
      "name": "Do you serve municipal and government buildings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We clean town halls, libraries, and other municipal and public buildings, maintaining the standards these high-visibility facilities require."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas do you serve for educational and municipal cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve schools, universities, and municipal buildings throughout Worcester and Central Massachusetts, and across Rhode Island and New Hampshire."
      }
    },
    {
      "@type": "Question",
      "name": "How do I request a quote for school or municipal cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call (508) 890-1000 or request a free on-site assessment, and we will design a program for your facility and budget."
      }
    }
  ]
};

export default function SchoolCleaningPage() {
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

      {/* Hero Section - Soft UI Style matching other industry pages */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50">
        {/* Abstract shapes for a soft feel */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0090c8]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00B8FF]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content */}
            <div className="flex-1 space-y-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#0090c8]/20 text-sm font-bold tracking-wide text-[#0090c8]">
                <GraduationCap className="w-4 h-4 text-[#E31837]" />
                INDUSTRIES WE SERVE
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900">
                Educational & Municipal<br/>
                <span className="text-[#0090c8]">Building Cleaning</span>
              </h1>
              
              <p className="text-lg text-slate-600 font-medium leading-relaxed text-left">
                Schools, universities, libraries, town halls, and other public buildings serve their communities every day — and they need to be clean, healthy, and welcoming for the students, staff, and residents who depend on them. Enterprise Cleaning Corporation provides cleaning for educational and municipal facilities across Central Massachusetts, maintaining the high standards these high-traffic, high-visibility buildings require.
              </p>

              <p className="text-lg text-slate-600 font-medium leading-relaxed text-left">
                Public and educational buildings carry heavy foot traffic and host vulnerable populations, which makes consistent sanitation essential. We build programs that keep classrooms, corridors, restrooms, and common areas clean and healthy throughout the year.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#0090c8] text-white font-extrabold px-8 py-4 rounded-xl hover:bg-[#007aa8] transition-colors shadow-lg shadow-[#0090c8]/30 text-lg">
                  Get a Free Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:5088901000" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm text-lg">
                  <PhoneCall className="w-5 h-5 text-[#0090c8]" />
                  (508) 890-1000
                </a>
              </div>
            </div>

            {/* Right Image Feature - Soft clinical/modern style */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0090c8] to-[#00B8FF] rounded-[3rem] rotate-3 opacity-20 scale-105" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white aspect-[4/5] lg:aspect-square">
                <Image 
                  src="/images/school_cleaning_hero.png" 
                  alt="Professional cleaning of a modern school corridor or university lecture hall in Central MA" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
              
              {/* Floating Status Badge */}
              <div className="absolute -left-6 bottom-12 bg-white rounded-2xl p-5 shadow-xl border border-slate-100 flex items-center gap-4 animate-float">
                <div className="w-12 h-12 rounded-full bg-[#E31837]/10 flex items-center justify-center shrink-0">
                  <HeartPulse className="w-6 h-6 text-[#E31837]" />
                </div>
                <div>
                  <div className="text-slate-900 font-extrabold">Healthy Spaces</div>
                  <div className="text-slate-500 text-xs font-medium">Safe for students & public</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Cleaning for High-Traffic Public Spaces (Services List - Soft Style) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0090c8] mb-6">Cleaning for High-Traffic Public Spaces</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Educational and municipal facilities need a partner who can maintain large, busy buildings to a consistent standard. Our programs typically include:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-6xl mx-auto">
            {[
              { icon: Users, text: "Classroom, lecture-hall, and office cleaning and dusting." },
              { icon: ShieldCheck, text: "Restroom cleaning, sanitizing, and restocking — throughout the day and after hours." },
              { icon: Building2, text: "Corridor, lobby, and common-area maintenance." },
              { icon: Coffee, text: "Cafeteria, breakroom, and kitchen cleaning." },
              { icon: Trophy, text: "Gymnasium, auditorium, and event-space cleaning." },
              { icon: SprayCan, text: "Disinfecting of high-touch surfaces to limit the spread of illness." },
              { icon: Sparkles, text: "Floor care for classrooms, hallways, and high-traffic areas." },
              { icon: Clock, text: "Day porter coverage for restrooms and common areas during operating hours." },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-[#0090c8]/5 transition-colors border border-slate-100 hover:border-[#0090c8]/30 group">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-[#0090c8]" />
                </div>
                <p className="text-slate-700 font-medium leading-relaxed pt-3 text-left">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content - Side-by-Side Soft Blocks */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24 max-w-7xl mx-auto">
            
            {/* Block 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  Health, Consistency, and <span className="text-[#0090c8]">Accountability</span>
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-left">
                  <p>
                    In a school or public building, cleaning directly affects the health of the people inside. Proper disinfection of high-touch surfaces helps reduce the spread of illness among students, staff, and visitors. Our managed model ensures these standards are met consistently, with real supervision and a local team that answers when administrators call.
                  </p>
                  <p>
                    Reliability matters enormously to schools and municipalities operating on tight schedules and budgets. Our 97% client retention rate reflects the trust that institutional clients place in us. Many begin with core janitorial service and add floor care, specialty work, and seasonal projects over time.
                  </p>
                </div>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -z-10" />
                <div className="flex items-center gap-5 mb-8 pb-8 border-b border-slate-100">
                  <div className="w-16 h-16 rounded-2xl bg-[#0090c8] flex items-center justify-center text-white font-black text-2xl">
                    97%
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Client Retention</h3>
                    <p className="text-slate-500 font-medium">Built on trust and consistency</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#E31837] flex items-center justify-center text-white">
                    <ShieldAlert className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Accountability</h3>
                    <p className="text-slate-500 font-medium">Real supervision & local teams</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-[#0090c8] text-white p-10 rounded-3xl shadow-xl border-l-8 border-[#E31837]">
                <div className="flex items-center gap-4 mb-6">
                  <GraduationCap className="w-10 h-10 text-[#FFE800]" />
                  <h3 className="text-2xl font-bold">Healthy Buildings</h3>
                </div>
                <p className="text-white/90 leading-relaxed text-lg font-medium text-left">
                  Educational and municipal buildings carry some of the heaviest and most diverse foot traffic of any facilities, and they serve populations that depend on them every day — students, teachers, staff, and the public. That combination makes consistent, thorough cleaning essential. Proper sanitation of restrooms, classrooms, corridors, and shared surfaces directly affects the health of everyone inside and helps limit the spread of illness through these high-contact environments.
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  Cleaning for the People <span className="text-[#E31837]">They Serve</span>
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-left">
                  <p>
                    These facilities also operate under real constraints — tight schedules, fixed budgets, and public accountability. We build programs that respect those realities, delivering a high, consistent standard within budget and on a schedule that works around classes, events, and public hours. Our managed model ensures the work is supervised and accountable, with a local team that responds when administrators and facilities staff need them.
                  </p>
                  <p>
                    A clean, well-kept public building also reflects the pride a community takes in its institutions. Whether it is a school where students learn, a library where residents gather, or a town hall that serves the public, the condition of the building matters. We help schools and municipalities across Central Massachusetts maintain spaces that are healthy, welcoming, and worthy of the people who use them.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Trust Banner — Full Image Style */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/school_cleaning_banner.png"
            alt="High-end modern town hall or university library interior in Central Massachusetts"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003057]/60 via-[#0090c8]/40 to-[#001220]/60" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FFE800] font-bold tracking-widest uppercase text-sm mb-6 backdrop-blur-md">
              Serving Schools & Municipal Buildings Across Central MA
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
              Reliable Care for Public Institutions
            </h2>
            <p className="text-lg text-white/90 font-medium leading-relaxed max-w-4xl mx-auto text-left drop-shadow-md">
              We serve educational and municipal facilities throughout Central Massachusetts, from Worcester to Shrewsbury, Auburn, Holden, Westborough, Marlborough, Leominster, and beyond. We bring 97% client retention, four Worcester Business Journal “Best of Business” awards, and BBB accreditation since 2007 to every contract and serve Massachusetts, Rhode Island, and New Hampshire. We are also proud of our history serving public institutions in the region.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: ShieldCheck, stat: "Healthy", label: "Safe Environments", sub: "For students & public" },
              { icon: Trophy, stat: "4×", label: "Best of Business", sub: "Worcester Business Journal" },
              { icon: Users, stat: "97%", label: "Client Retention Rate", sub: "Industry-leading" },
              { icon: MapPin, stat: "Central MA", label: "Local Partner", sub: "Rapid response" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-center hover:bg-white/20 hover:border-[#FFE800]/40 transition-all duration-300 overflow-hidden shadow-2xl"
              >
                <item.icon className="w-8 h-8 text-[#FFE800] mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{item.stat}</div>
                <div className="text-sm font-bold text-white/90 mb-1">{item.label}</div>
                <div className="text-xs text-white/70 font-medium">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0090c8] mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600 font-medium">Common questions about our school and municipal building cleaning services.</p>
            </div>
            
            <div className="space-y-6">
              {structuredDataFAQ.mainEntity.map((faq, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-[#0090c8]/30 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                    <span className="text-[#0090c8] shrink-0 mt-0.5 text-xl">Q:</span>
                    {faq.name}
                  </h3>
                  <p className="text-slate-600 pl-8 leading-relaxed font-medium text-left">
                    <span className="font-bold text-slate-400 mr-2">A:</span>
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <RelatedServices serviceIds={["nightly", "floor", "specialty"]} />
      <CTASection
        className="bg-slate-50 border-t border-slate-200"
        title="Ready to Elevate Your Facility's Standard?"
        action={{
          text: "Request On-Site Assessment",
          href: "/contact",
          variant: "default",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed text-left">
            Call (508) 890-1000 today, and we will design a program that works for your facility and your budget.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 animate-appear delay-100">
            {[
              { icon: ShieldCheck, text: "Healthy Environments" },
              { icon: Clock, text: "Flexible Scheduling" },
              { icon: CheckCircle2, text: "Fully Managed Crews" },
            ].map((chip, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-bold shadow-sm"
              >
                <chip.icon className="w-4 h-4 text-[#E31837]" />
                {chip.text}
              </div>
            ))}
          </div>
        </div>
      </CTASection>
    </>
  );
}
