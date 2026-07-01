import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, PhoneCall, ShieldCheck, Clock, 
  ArrowRight, HardHat, Factory, Users, 
  Trophy, Settings, AlertTriangle, BadgeCheck, 
  MapPin, CheckCircle2
} from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";

export const metadata: Metadata = {
  title: "Manufacturing & Industrial Cleaning Worcester MA",
  description: "Specialized commercial cleaning for manufacturing plants and industrial facilities across Worcester and Central Massachusetts. Safety-focused, 97% retention.",
  alternates: {
    canonical: "https://enterprisecleaningcorp.com/manufacturing-industrial-cleaning-central-ma"
  }
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
        "text": "Call (508) 890-1000 or request a free on-site assessment. We will tour your facility, learn your requirements, and provide a customized proposal."
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

      {/* Industry Page Hero - Split Layout Design */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="text-white space-y-8 max-w-2xl">
              <div className="flex items-center gap-2 text-sm text-[#00B8FF] mb-6 font-bold uppercase tracking-wider">
                <Link href="/services" className="hover:text-white transition-colors">Industries Served</Link>
                <ChevronRight className="w-4 h-4 text-[#FFE800]" />
                <span className="text-[#FFE800]">Manufacturing & Industrial</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                Manufacturing & Industrial Cleaning<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B8FF] to-[#0090c8]">in Central Massachusetts</span>
              </h1>
              
              <p className="text-lg text-slate-300 font-medium leading-relaxed text-justify">
                Manufacturing and industrial facilities are unlike any other commercial environment. Production floors, machinery, warehousing, breakrooms, offices, and restrooms all sit under one roof, each with its own cleaning demands and safety considerations. Enterprise Cleaning Corporation has spent more than two decades cleaning complex commercial environments across Central Massachusetts — and industrial facilities are exactly the kind of demanding, high-standards work we do best.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#FFE800] text-slate-900 font-extrabold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-[#FFE800]/20 text-lg">
                  Get a Free Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:5088901000" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-lg">
                  <PhoneCall className="w-5 h-5" />
                  (508) 890-1000
                </a>
              </div>
            </div>

            {/* Right Image Feature */}
            <div className="relative w-full h-[500px] lg:h-[650px] rounded-3xl overflow-hidden border-8 border-slate-800 shadow-2xl">
              <Image 
                src="/images/industrial_cleaning_hero.png" 
                alt="Professional industrial cleaning in a modern manufacturing plant in Central MA" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#00B8FF] flex items-center justify-center shrink-0">
                  <HardHat className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Safety-Focused</div>
                  <div className="text-slate-300 text-sm font-medium">OSHA-compliant cleaning programs</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Industrial Capabilities (Alternative to grid) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sticky Sidebar Intro */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-6">
                <div className="w-16 h-1 bg-[#0090c8] mb-6"></div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  Cleaning Built for Industrial Environments
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed text-justify">
                  A manufacturing facility needs a partner who can move between very different spaces without missing a standard. We approach industrial cleaning as a program, not a task list, understanding your production flow, shift patterns, and specific challenges.
                </p>
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl mt-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Factory className="w-6 h-6 text-[#0090c8]" />
                    <h3 className="font-bold text-slate-900 text-lg">Shift-Friendly</h3>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">
                    We build our program around your operation, your shifts, and your safety requirements so we never slow down output.
                  </p>
                </div>
              </div>
            </div>

            {/* Content List */}
            <div className="lg:w-2/3">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Settings, title: "Production Floors", desc: "Production and plant-floor cleaning around equipment and workflow." },
                  { icon: Factory, title: "Warehouses", desc: "Warehouse and storage-area cleaning and dust control." },
                  { icon: Users, title: "Office Areas", desc: "Office, administrative, and conference-area janitorial." },
                  { icon: ShieldCheck, title: "Breakrooms", desc: "Breakroom, cafeteria, and locker-room cleaning and sanitizing." },
                  { icon: BadgeCheck, title: "Restrooms", desc: "Restroom cleaning, sanitizing, and restocking." },
                  { icon: MapPin, title: "Hard-Floor Care", desc: "Hard-floor care — scrubbing, sweeping, and degreasing." },
                  { icon: ArrowRight, title: "High Dusting", desc: "High dusting of rafters, vents, and overhead structures." },
                  { icon: Clock, title: "Day Porter", desc: "Day porter coverage for high-traffic shift environments." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#00B8FF] hover:shadow-lg transition-all duration-300 group flex flex-col">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 group-hover:bg-[#00B8FF]/10 flex items-center justify-center mb-4 transition-colors">
                      <item.icon className="w-6 h-6 text-slate-700 group-hover:text-[#00B8FF] transition-colors" />
                    </div>
                    <h4 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed text-justify">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Deep Dive Content - Dark Industrial Theme */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#003057]/40 clip-diagonal pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Safety and Reliability <span className="text-[#00B8FF]">You Can Count On</span>
              </h2>
              <div className="prose prose-lg prose-invert text-slate-300 prose-p:leading-relaxed text-justify">
                <p>
                  Industrial clients need a cleaning partner who respects the safety culture of a plant — crews who follow site protocols, stay clear of active production, and work cleanly and predictably. Our managed model means real supervision and accountability on every account, so standards hold shift after shift.
                </p>
                <p>
                  Reliability is non-negotiable in manufacturing, and it is our strongest trait. Our 97% client retention rate reflects exactly that: when an industrial client brings us in, they keep us. Many start with nightly cleaning and expand into floor degreasing, high dusting, and specialty projects over time.
                </p>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-6 rounded-2xl border border-white/10">
                <AlertTriangle className="w-10 h-10 text-[#FFE800] shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Safety First Protocols</h4>
                  <p className="text-sm text-slate-400">Strict adherence to your facility's safety culture and guidelines.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Cleaning That Supports <span className="text-[#00B8FF]">Productivity and Compliance</span>
              </h2>
              <div className="prose prose-lg prose-invert text-slate-300 prose-p:leading-relaxed text-justify">
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
      </section>

      {/* Trust Banner — Brand Blue */}
      <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #0090c8 0%, #00A8E8 50%, #00B8FF 100%)" }}>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[#FFE800] font-bold tracking-widest uppercase text-sm mb-4">Serving Industrial Facilities Across Central MA</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Proven Industrial Cleaners
            </h2>
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-4xl mx-auto text-justify">
              Central Massachusetts has a deep manufacturing and industrial base, and we serve it. From Worcester to Shrewsbury, Auburn, Holden, Westborough, Marlborough, Leominster, and Fitchburg, we keep plants and industrial buildings clean, safe, and audit-ready. We bring 97% client retention, four Worcester Business Journal “Best of Business” awards, and BBB accreditation since 2007 to every industrial contract and serve Massachusetts, Rhode Island, and New Hampshire.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
            {[
              { icon: Users, stat: "97%", label: "Client Retention Rate", sub: "Industry-leading" },
              { icon: Trophy, stat: "4×", label: "Best of Business", sub: "Worcester Business Journal" },
              { icon: ShieldCheck, stat: "2007", label: "BBB Accredited Since", sub: "Verified accountability" },
              { icon: HardHat, stat: "22+", label: "Years in Business", sub: "Central Massachusetts" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 text-center hover:bg-white/10 hover:border-[#FFE800]/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <item.icon className="w-8 h-8 text-[#FFE800] mx-auto mb-4" />
                <div className="text-4xl font-black text-white mb-1">{item.stat}</div>
                <div className="text-sm font-bold text-white/90 mb-1">{item.label}</div>
                <div className="text-xs text-white/50 font-medium">{item.sub}</div>
              </div>
            ))}
          </div>

          {/* Image + Caption Row */}
          <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0090c8]/80 via-transparent to-transparent z-10" />
            <Image
              src="/images/worcester_skyline_banner.png"
              alt="Central Massachusetts — Enterprise Cleaning serves Industrial Facilities"
              width={1200}
              height={500}
              className="object-cover w-full h-[280px] md:h-[380px]"
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-[#FFE800]" />
                  <span className="text-[#FFE800] font-bold text-sm uppercase tracking-widest">Service Area</span>
                </div>
                <p className="text-white font-bold text-lg md:text-2xl leading-snug">Central MA · Rhode Island · New Hampshire</p>
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
              <p className="text-slate-600 font-medium">Common questions about our industrial and manufacturing cleaning services.</p>
            </div>
            
            <div className="space-y-6">
              {structuredDataFAQ.mainEntity.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-[#00B8FF]/30 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                    <span className="text-[#00B8FF] shrink-0 mt-0.5 text-xl">Q:</span>
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
      
      <CTASection
        className="bg-white border-t border-slate-100"
        title="Ready for a Safety-Focused Cleaning Partner?"
        action={{
          text: "Request On-Site Assessment",
          href: "/contact",
          variant: "destructive",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed text-justify">
            We will tour your facility, learn your requirements, and provide a customized proposal designed around your shifts and safety protocols. Call (508) 890-1000 today.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 animate-appear delay-100">
            {[
              { icon: ShieldCheck, text: "OSHA Compliant" },
              { icon: Factory, text: "Shift-Friendly Scheduling" },
              { icon: Trophy, text: "4× WBJ Best of Business" },
              { icon: CheckCircle2, text: "Fully Managed Crews" },
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
