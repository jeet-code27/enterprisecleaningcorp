import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  PhoneCall, ShieldCheck, Clock, 
  ArrowRight, Building2, Users, 
  Trophy, MapPin, CheckCircle2, ShieldAlert,
  Droplets, Sparkles, SprayCan, HeartPulse, HardHat,
  DoorOpen, Activity
} from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";

export const metadata: Metadata = {
  title: "Property Management Cleaning Worcester MA",
  description: "Janitorial, common-area, and turnover cleaning for property managers across Worcester and Central Massachusetts. One reliable partner, 97% retention.",
  alternates: {
    canonical: "https://enterprisecleaningcorp.com/property-management-cleaning-central-ma"
  }
};

const structuredDataService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Property Management — Enterprise Cleaning Corporation",
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
  "url": "https://enterprisecleaningcorp.com/property-management-cleaning-central-ma"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you handle all the cleaning needs across a property portfolio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide janitorial, common-area cleaning, floor care, window cleaning, tenant turnover, and emergency restoration under one point of contact — so you manage one vendor instead of many."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide tenant turnover and move-out cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We handle move-in and move-out cleaning to get spaces ready for new tenants quickly, which keeps your units leasable and your turnover smooth."
      }
    },
    {
      "@type": "Question",
      "name": "What if there is an after-hours emergency at one of my buildings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We have a full restoration division and a 24/7 emergency line (888-76-FLOOD) for water, fire, and storm damage, so you have one trusted partner for both routine cleaning and emergencies."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas do you serve for property management cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve property managers throughout Worcester and Central Massachusetts, and across Rhode Island and New Hampshire."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get a property management cleaning quote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call (508) 890-1000 or request a free on-site assessment, and we will build a program around your property or portfolio."
      }
    }
  ]
};

export default function PropertyManagementPage() {
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
                <Building2 className="w-4 h-4 text-[#E31837]" />
                INDUSTRIES WE SERVE
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900">
                Property Management<br/>
                <span className="text-[#0090c8]">Cleaning</span>
              </h1>
              
              <p className="text-lg text-slate-600 font-medium leading-relaxed text-justify">
                For property managers, a clean building is a competitive advantage. Spotless common areas, well-maintained restrooms, and pristine lobbies keep tenants happy, protect property value, and make leasing easier. Enterprise Cleaning Corporation partners with property managers across Central Massachusetts to keep commercial, multi-tenant, and mixed-use properties looking their best — and to take cleaning off the property manager’s plate entirely.
              </p>

              <p className="text-lg text-slate-600 font-medium leading-relaxed text-justify">
                We know property managers juggle dozens of responsibilities and vendors. Our goal is to be the one cleaning partner you never have to think about: reliable, accountable, and able to handle everything from nightly janitorial to floor care, window cleaning, tenant turnover, and emergency restoration under a single point of contact.
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
                  src="/images/property_management_hero.png" 
                  alt="Professional cleaning of a modern luxury apartment lobby in Central MA" 
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
                  <div className="text-slate-900 font-extrabold">One Partner</div>
                  <div className="text-slate-500 text-xs font-medium">Single point of contact</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* A Complete Solution for Managed Properties (Services List - Soft Style) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0090c8] mb-6">A Complete Solution for Managed Properties</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Property management cleaning has to cover the full building — the spaces tenants use and the spaces that make the first impression. Our programs typically include:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-6xl mx-auto">
            {[
              { icon: Building2, text: "Common-area cleaning — lobbies, corridors, elevators, and stairwells." },
              { icon: Droplets, text: "Shared restroom cleaning, sanitizing, and restocking." },
              { icon: Sparkles, text: "Nightly janitorial for tenant spaces (where contracted)." },
              { icon: Clock, text: "Day porter coverage for Class A and high-traffic buildings." },
              { icon: CheckCircle2, text: "Floor care — carpet, hard-surface, and entryway maintenance." },
              { icon: SprayCan, text: "Window cleaning and pressure washing for curb appeal." },
              { icon: DoorOpen, text: "Move-in and move-out / tenant turnover cleaning." },
              { icon: ShieldAlert, text: "Emergency water, fire, and restoration response." },
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
                  One Partner, <span className="text-[#0090c8]">One Point of Contact</span>
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    The biggest advantage we offer property managers is consolidation. Instead of coordinating separate vendors for janitorial, floors, windows, turnovers, and emergencies, you have one accountable partner who knows your portfolio. That simplifies your life, ensures consistent standards across the property, and gives you a single number to call when something needs attention.
                  </p>
                  <p>
                    Property managers are some of our longest-tenured clients precisely because of this. Our 97% client retention rate reflects how much value managers place on a partner who simply handles it. And because we have a full restoration division, we are also the partner you call when a pipe bursts at 2 a.m.
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
                    <Activity className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Full Service</h3>
                    <p className="text-slate-500 font-medium">Janitorial, floors, windows & emergencies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-[#0090c8] text-white p-10 rounded-3xl shadow-xl border-l-8 border-[#E31837]">
                <div className="flex items-center gap-4 mb-6">
                  <HeartPulse className="w-10 h-10 text-[#FFE800]" />
                  <h3 className="text-2xl font-bold">Tenant Satisfaction</h3>
                </div>
                <p className="text-white/90 leading-relaxed text-lg font-medium text-justify">
                  We understand the property manager’s world: many buildings, many vendors, many fires to put out, and limited time. Our entire approach is designed to take cleaning off your plate completely. We hold a consistent standard across every common area, communicate proactively, and resolve issues quickly through a single point of contact — so a clean building is one less thing you ever have to manage or worry about.
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  Cleanliness That Protects <span className="text-[#E31837]">Tenants & Asset Value</span>
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    For a property manager, cleanliness is directly tied to two things that matter most: tenant satisfaction and asset value. Tenants judge a building by its common areas — the lobby they walk through, the restroom they use, the elevator they ride. A consistently clean, well-maintained property keeps existing tenants happy and renewing, and it makes vacant space far easier to lease. A neglected one does the opposite, quietly eroding both occupancy and value.
                  </p>
                  <p>
                    Because we offer the full range of services — janitorial, floor care, window cleaning, pressure washing, tenant turnover, and emergency restoration — we can scale with your portfolio and handle whatever a property throws at you. That breadth, combined with our reliability, is why property managers are among our longest-tenured clients across Central Massachusetts.
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
            src="/images/property_management_banner.png"
            alt="High-end modern multi-tenant commercial building interior in Central Massachusetts"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#003057]/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0090c8]/90 via-[#003057]/80 to-[#001220]/90" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FFE800] font-bold tracking-widest uppercase text-sm mb-6 backdrop-blur-md">
              Serving Property Managers Across Central MA
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
              One Partner For Your Entire Portfolio
            </h2>
            <p className="text-lg text-white/90 font-medium leading-relaxed max-w-4xl mx-auto text-justify drop-shadow-md">
              We work with property managers throughout Worcester and Central Massachusetts — Shrewsbury, Auburn, Holden, Westborough, Marlborough, and the surrounding region — keeping commercial and multi-tenant properties immaculate. We bring 97% client retention, four Worcester Business Journal “Best of Business” awards, and BBB accreditation since 2007 to every property and serve Massachusetts, Rhode Island, and New Hampshire.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: ShieldCheck, stat: "Complete", label: "Full Service", sub: "One vendor solution" },
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
              <p className="text-slate-600 font-medium">Common questions about our property management cleaning services.</p>
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
      
      <CTASection
        className="bg-slate-50 border-t border-slate-200"
        title="Ready to Simplify Your Property Management?"
        action={{
          text: "Request On-Site Assessment",
          href: "/contact",
          variant: "default",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed text-justify">
            Call (508) 890-1000 today, and we will build a cleaning and maintenance program around your property or portfolio.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 animate-appear delay-100">
            {[
              { icon: ShieldCheck, text: "Consolidated Services" },
              { icon: DoorOpen, text: "Turnover Support" },
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
