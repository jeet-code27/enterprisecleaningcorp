import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, PhoneCall, ShieldCheck, Clock, 
  ArrowRight, HardHat, Factory, Users, 
  Trophy, Settings, AlertTriangle, BadgeCheck, 
  MapPin, CheckCircle2, ShieldAlert
} from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";
import { RelatedServices } from "@/components/ui/related-services";

export const metadata: Metadata = {
  title: { absolute: "Manufacturing & Industrial Cleaning Worcester MA" },
  description: "Specialized commercial cleaning for manufacturing plants and industrial facilities across Worcester and Central Massachusetts. Safety-focused, 97% retention.",
  keywords: "commercial industrial cleaning Central MA, manufacturing facility janitorial, factory cleaners Worcester, industrial plant cleaning services, commercial warehouse cleaning",
  alternates: {
    canonical: "https://enterprisecleaningcorp.com/manufacturing-industrial-cleaning-central-ma"
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
  "name": "Manufacturing & Industrial Facilities — Enterprise Cleaning Corporation",
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
    "url": "https://enterprisecleaningcorp.com"
  },
  "areaServed": [
    "Worcester MA",
    "Central Massachusetts",
    "Rhode Island",
    "New Hampshire"
  ],
  "url": "https://enterprisecleaningcorp.com/manufacturing-industrial-cleaning-central-ma"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you clean active manufacturing and production floors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We build cleaning programs around your production schedule and safety protocols, working around active areas and on the shifts that work best for your operation."
      }
    },
    {
      "@type": "Question",
      "name": "Can you work around our shift schedule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We schedule industrial cleaning around your shifts — nights, weekends, or between production runs — so cleaning never slows your output."
      }
    },
    {
      "@type": "Question",
      "name": "Do you follow site-specific safety requirements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our crews follow your facility’s safety protocols and site rules, and our managed model ensures consistent supervision and accountability on every visit."
      }
    },
    {
      "@type": "Question",
      "name": "Which Central Massachusetts areas do you serve for industrial cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve manufacturing and industrial facilities throughout Worcester County and Central Massachusetts, including Shrewsbury, Auburn, Holden, Westborough, Marlborough, Leominster, and Fitchburg, plus Rhode Island and New Hampshire."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get an industrial cleaning quote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call (508) 890-1000 or request a free on-site assessment. We will tour your facility, learn your requirements, and provide a comprehensive proposal."
      }
    }
  ]
};

export default function IndustrialCleaningPage() {
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

      {/* Hero Section - Soft UI Style matching Medical */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50">
        {/* Abstract shapes for a soft feel */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0090c8]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00B8FF]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content */}
            <div className="flex-1 space-y-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#0090c8]/20 text-sm font-bold tracking-wide text-[#0090c8]">
                <HardHat className="w-4 h-4 text-[#E31837]" />
                INDUSTRIES WE SERVE
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900">
                Manufacturing & Industrial<br/>
                <span className="text-[#0090c8]">Facility Cleaning</span>
              </h1>
              
              <p className="text-lg text-slate-600 font-medium leading-relaxed text-justify">
                Manufacturing and industrial facilities are unlike any other commercial environment. Production floors, machinery, warehousing, breakrooms, offices, and restrooms all sit under one roof, each with its own cleaning demands and safety considerations. Enterprise Cleaning Corporation has spent more than two decades cleaning complex commercial environments across Central Massachusetts — and industrial facilities are exactly the kind of demanding, high-standards work we do best.
              </p>

              <p className="text-lg text-slate-600 font-medium leading-relaxed text-justify">
                We understand that in a plant, cleanliness is not cosmetic — it is tied to safety, compliance, productivity, and the impression you make on the customers and auditors who walk your floor. We build a cleaning program around your operation, your shifts, and your safety requirements.
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
                  src="/images/industrial_cleaning_hero.png" 
                  alt="Professional industrial cleaning in a modern manufacturing plant in Central MA" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
              
              {/* Floating Status Badge */}
              <div className="absolute -left-6 bottom-12 bg-white rounded-2xl p-5 shadow-xl border border-slate-100 flex items-center gap-4 animate-float">
                <div className="w-12 h-12 rounded-full bg-[#E31837]/10 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-6 h-6 text-[#E31837]" />
                </div>
                <div>
                  <div className="text-slate-900 font-extrabold">Safety-Focused</div>
                  <div className="text-slate-500 text-xs font-medium">OSHA-compliant programs</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Cleaning Built for Industrial Environments (Services List - Soft Style) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0090c8] mb-6">Cleaning Built for Industrial Environments</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              A manufacturing facility needs a partner who can move between very different spaces without missing a standard. Our industrial cleaning programs typically cover:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-6xl mx-auto">
            {[
              { icon: Settings, text: "Production and plant-floor cleaning around equipment and workflow." },
              { icon: Factory, text: "Warehouse and storage-area cleaning and dust control." },
              { icon: Users, text: "Office, administrative, and conference-area janitorial." },
              { icon: ShieldCheck, text: "Breakroom, cafeteria, and locker-room cleaning and sanitizing." },
              { icon: BadgeCheck, text: "Restroom cleaning, sanitizing, and restocking." },
              { icon: MapPin, text: "Hard-floor care — scrubbing, sweeping, and degreasing." },
              { icon: ArrowRight, text: "High dusting of rafters, vents, and overhead structures." },
              { icon: Clock, text: "Day porter coverage for high-traffic shift environments." },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-[#0090c8]/5 transition-colors border border-slate-100 hover:border-[#0090c8]/30 group">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-[#0090c8]" />
                </div>
                <p className="text-slate-700 font-medium leading-relaxed pt-3 text-justify">
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
                  Safety and Reliability <span className="text-[#0090c8]">You Can Count On</span>
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    Industrial clients need a cleaning partner who respects the safety culture of a plant — crews who follow site protocols, stay clear of active production, and work cleanly and predictably. Our managed model means real supervision and accountability on every account, so standards hold shift after shift.
                  </p>
                  <p>
                    Reliability is non-negotiable in manufacturing, and it is our strongest trait. Our 97% client retention rate reflects exactly that: when an industrial client brings us in, they keep us. Many start with nightly cleaning and expand into floor degreasing, high dusting, and specialty projects over time.
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
                    <p className="text-slate-500 font-medium">Built on safety and reliability</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#E31837] flex items-center justify-center text-white">
                    <Factory className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Shift-Friendly</h3>
                    <p className="text-slate-500 font-medium">We work around your production schedules</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-[#0090c8] text-white p-10 rounded-3xl shadow-xl border-l-8 border-[#E31837]">
                <div className="flex items-center gap-4 mb-6">
                  <AlertTriangle className="w-10 h-10 text-[#FFE800]" />
                  <h3 className="text-2xl font-bold">Productivity & Compliance</h3>
                </div>
                <p className="text-white/90 leading-relaxed text-lg font-medium text-justify">
                  We approach industrial cleaning as a program, not a task list. That means understanding your production flow, your shift patterns, your safety culture, and the specific challenges of your facility, then building a routine that holds to a consistent standard without ever interfering with output. Our managed model provides the supervision and accountability that large, complex facilities require.
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  Cleaning That Supports <span className="text-[#E31837]">Productivity</span>
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    In a manufacturing environment, cleanliness is connected to far more than appearance. Clean floors and controlled dust reduce slip-and-fall hazards and protect equipment. Well-maintained breakrooms and restrooms support employee morale and health. And a clean, organized facility makes a strong impression on the customers, auditors, and regulators who tour your plant — an impression that can directly affect contracts and certifications.
                  </p>
                  <p>
                    Manufacturing and industrial work is precisely the kind of demanding, high-standards cleaning that has anchored our business for more than two decades. We are comfortable in complex environments, we respect the realities of a working plant, and we deliver the reliability that operations managers cannot compromise on.
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
            src="/images/worcester_skyline_banner.png"
            alt="Central Massachusetts manufacturing and industrial facilities"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#003057]/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0090c8]/90 via-[#003057]/80 to-[#001220]/90" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FFE800] font-bold tracking-widest uppercase text-sm mb-6 backdrop-blur-md">
              Serving Industrial Facilities Across Central MA
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
              Proven Industrial Cleaners
            </h2>
            <p className="text-lg text-white/90 font-medium leading-relaxed max-w-4xl mx-auto text-justify drop-shadow-md">
              Central Massachusetts has a deep manufacturing and industrial base, and we serve it. From Worcester to Shrewsbury, Auburn, Holden, Westborough, Marlborough, Leominster, and Fitchburg, we keep plants and industrial buildings clean, safe, and audit-ready. We bring 97% client retention, four Worcester Business Journal “Best of Business” awards, and BBB accreditation since 2007 to every industrial contract and serve Massachusetts, Rhode Island, and New Hampshire.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: ShieldCheck, stat: "Compliance", label: "OSHA Focused", sub: "Safety-first cleaning" },
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
              <p className="text-slate-600 font-medium">Common questions about our industrial and manufacturing cleaning services.</p>
            </div>
            
            <div className="space-y-6">
              {structuredDataFAQ.mainEntity.map((faq, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-[#0090c8]/30 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                    <span className="text-[#0090c8] shrink-0 mt-0.5 text-xl">Q:</span>
                    {faq.name}
                  </h3>
                  <p className="text-slate-600 pl-8 leading-relaxed font-medium text-justify">
                    <span className="font-bold text-slate-400 mr-2">A:</span>
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <RelatedServices serviceIds={["specialty", "emergency", "post-construction"]} />
      <CTASection
        className="bg-slate-50 border-t border-slate-200"
        title="Ready for a Safety-Focused Cleaning Partner?"
        action={{
          text: "Request On-Site Assessment",
          href: "/contact",
          variant: "default",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed text-justify">
            We will tour your facility, learn your requirements, and provide a comprehensive proposal designed around your shifts and safety protocols. Call (508) 890-1000 today.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 animate-appear delay-100">
            {[
              { icon: ShieldCheck, text: "OSHA Compliant" },
              { icon: Factory, text: "Shift-Friendly Scheduling" },
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
