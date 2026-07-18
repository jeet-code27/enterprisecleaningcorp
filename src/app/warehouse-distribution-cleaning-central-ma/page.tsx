import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  PhoneCall, ShieldCheck, Clock, 
  ArrowRight, Package, Truck, Users, 
  Trophy, MapPin, CheckCircle2, ShieldAlert,
  Droplets, Sparkles, ArrowUp, Coffee, Factory
} from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";
import { RelatedServices } from "@/components/ui/related-services";

export const metadata: Metadata = {
  title: { absolute: "Warehouse & Distribution Cleaning Worcester MA" },
  description: "Commercial cleaning for warehouses and distribution centers across Worcester and Central Massachusetts. Safety-focused, large-scale, 97% retention.",
  keywords: "commercial warehouse cleaning Central MA, distribution center janitorial services, industrial logistics cleaning Worcester, large scale commercial cleaners",
  alternates: {
    canonical: "https://enterprisecleaningcorp.com/warehouse-distribution-cleaning-central-ma"
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
  "name": "Warehouses & Distribution Centers — Enterprise Cleaning Corporation",
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
  "url": "https://enterprisecleaningcorp.com/warehouse-distribution-cleaning-central-ma"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you clean large warehouse and distribution facilities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide large-scale warehouse floor cleaning, dust control, dock cleaning, and full janitorial for distribution centers across Central Massachusetts."
      }
    },
    {
      "@type": "Question",
      "name": "Can you work around our shipping and logistics schedule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We schedule cleaning around your operation — between shifts, overnight, or on weekends — so it never interferes with shipping and receiving."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle warehouse floor scrubbing and high dusting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide floor scrubbing, sweeping, and degreasing, plus high dusting of racking, rafters, and overhead structures for warehouse environments."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas do you serve for warehouse cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve warehouses and distribution centers throughout Worcester and Central Massachusetts, and across Rhode Island and New Hampshire."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get a warehouse cleaning quote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call (508) 890-1000 or request a free on-site assessment, and we will scope your facility and provide a comprehensive proposal."
      }
    }
  ]
};

export default function WarehouseCleaningPage() {
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
                <Package className="w-4 h-4 text-[#E31837]" />
                INDUSTRIES WE SERVE
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900">
                Warehouse & Distribution<br/>
                <span className="text-[#0090c8]">Center Cleaning</span>
              </h1>
              
              <p className="text-lg text-slate-600 font-medium leading-relaxed text-justify">
                Warehouses and distribution centers are demanding environments — large footprints, constant movement, dust, debris, and heavy floor wear, all operating on tight logistics schedules. A clean, well-maintained facility is not just about appearance; it supports safety, protects inventory, and keeps operations running smoothly. Enterprise Cleaning Corporation provides large-scale cleaning for warehouses and distribution centers across Central Massachusetts, built around the realities of a working logistics operation.
              </p>

              <p className="text-lg text-slate-600 font-medium leading-relaxed text-justify">
                Central MA sits at the crossroads of New England’s distribution network, and the region’s warehouses run around the clock. We build cleaning programs that fit those schedules and keep these big, busy buildings clean, safe, and efficient.
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
                  src="/images/warehouse_cleaning_hero.png" 
                  alt="Professional cleaning of a massive, modern warehouse and distribution center interior in Central MA" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
              
              {/* Floating Status Badge */}
              <div className="absolute -left-6 bottom-12 bg-white rounded-2xl p-5 shadow-xl border border-slate-100 flex items-center gap-4 animate-float">
                <div className="w-12 h-12 rounded-full bg-[#E31837]/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#E31837]" />
                </div>
                <div>
                  <div className="text-slate-900 font-extrabold">Safety-Focused</div>
                  <div className="text-slate-500 text-xs font-medium">Large-scale capacity</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Cleaning Built for Large-Scale Logistics Facilities (Services List - Soft Style) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0090c8] mb-6">Cleaning Built for Large-Scale Logistics Facilities</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Warehouse and distribution cleaning has to cover enormous spaces and the support areas that keep workers comfortable and safe. Our programs typically include:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-6xl mx-auto">
            {[
              { icon: Sparkles, text: "Warehouse floor sweeping, scrubbing, and dust control." },
              { icon: Truck, text: "Loading dock and shipping/receiving area cleaning." },
              { icon: Users, text: "Office, administrative, and dispatch-area janitorial." },
              { icon: Coffee, text: "Breakroom, cafeteria, and locker-room cleaning and sanitizing." },
              { icon: Droplets, text: "Restroom cleaning, sanitizing, and restocking." },
              { icon: ArrowUp, text: "High dusting of racking, rafters, and overhead structures." },
              { icon: Factory, text: "Hard-floor care and degreasing for high-traffic areas." },
              { icon: Clock, text: "Day porter coverage for multi-shift operations." },
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
                  Safety, Scale, and <span className="text-[#0090c8]">Reliability</span>
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    Cleanliness in a warehouse is directly tied to safety. Dust control, clean floors, and clear, well-maintained walkways reduce hazards in a fast-moving environment. Our crews work around your equipment and logistics flow, follow site safety protocols, and keep the facility clean without slowing the operation.
                  </p>
                  <p>
                    Large facilities need a partner with the capacity and reliability to deliver consistently across a big footprint. That is our strength. Our 97% client retention rate shows that once a distribution operation brings us in, we stay. Many warehouse clients start with floor care and core janitorial and expand into high dusting and specialty projects.
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
                    <p className="text-slate-500 font-medium">Built on capacity and trust</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#E31837] flex items-center justify-center text-white">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Shift Flexible</h3>
                    <p className="text-slate-500 font-medium">Cleaning timed around logistics</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-[#0090c8] text-white p-10 rounded-3xl shadow-xl border-l-8 border-[#E31837]">
                <div className="flex items-center gap-4 mb-6">
                  <ShieldCheck className="w-10 h-10 text-[#FFE800]" />
                  <h3 className="text-2xl font-bold">Genuine Capacity</h3>
                </div>
                <p className="text-white/90 leading-relaxed text-lg font-medium text-justify">
                  Large facilities also demand a partner with genuine capacity. Cleaning an enormous footprint to a consistent standard, across multiple shifts, around active logistics, is not something every cleaning company can deliver. We have the equipment, the crews, and the operational discipline to maintain big, busy buildings reliably — and our managed model ensures the standard holds across every shift and every square foot.
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  Cleanliness That Supports <span className="text-[#E31837]">Safety & Throughput</span>
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    In a warehouse or distribution center, cleanliness is a safety and efficiency issue first and an appearance issue second. Dust accumulation, debris, and poorly maintained floors create real hazards in an environment full of forklifts, pallet jacks, and constant movement. Clean, clear floors and well-maintained walkways reduce the risk of slips, trips, and equipment incidents — protecting both your workforce and your operation’s throughput.
                  </p>
                  <p>
                    We also work the way a logistics operation needs us to: around your schedule, not against it. Cleaning is timed between shifts, overnight, or on weekends so it never interferes with shipping and receiving. That flexibility, combined with our reliability and capacity, is why distribution operations across Central Massachusetts trust us to keep their facilities clean, safe, and running without interruption.
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
            src="/images/warehouse_cleaning_banner.png"
            alt="High-end modern logistics facility or large warehouse floor in Central Massachusetts"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#003057]/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0090c8]/90 via-[#003057]/80 to-[#001220]/90" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FFE800] font-bold tracking-widest uppercase text-sm mb-6 backdrop-blur-md">
              Serving Warehouses & Distribution Centers Across Central MA
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
              Cleaning Built For Large-Scale Logistics
            </h2>
            <p className="text-lg text-white/90 font-medium leading-relaxed max-w-4xl mx-auto text-justify drop-shadow-md">
              From the distribution corridors around Worcester to facilities in Shrewsbury, Auburn, Westborough, Marlborough, and across Central MA, we keep warehouses and distribution centers clean, safe, and running. We bring 97% client retention, four Worcester Business Journal “Best of Business” awards, and BBB accreditation since 2007 to every facility and serve Massachusetts, Rhode Island, and New Hampshire.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: ShieldCheck, stat: "Safe", label: "Hazard Reduction", sub: "Dust & floor control" },
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
              <p className="text-slate-600 font-medium">Common questions about our warehouse and distribution center cleaning services.</p>
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
      
      <RelatedServices serviceIds={["floor", "specialty", "post-construction"]} />
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
            Call (508) 890-1000 today, and we will scope your facility and provide a comprehensive proposal designed around your logistics operations.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 animate-appear delay-100">
            {[
              { icon: ShieldCheck, text: "Safety Focused" },
              { icon: Package, text: "Large-Scale Capacity" },
              { icon: CheckCircle2, text: "Shift Flexible" },
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
