import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, PhoneCall, ShieldCheck, Clock, Layers, 
  Droplets, Sparkles, Wind, ArrowRight, CheckCircle2, 
  MapPin, Trophy, Users, ShieldAlert, Sparkle
} from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";

export const metadata: Metadata = {
  title: "Commercial Floor Care Central MA",
  description: "Strip and wax, VCT, carpet care, and hard-floor maintenance for commercial buildings across Central Massachusetts. Free assessment available.",
  alternates: {
    canonical: "https://enterprisecleaningcorp.com/floor-care-services-central-ma"
  }
};

const structuredDataService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Floor Care Services — Enterprise Cleaning Corporation",
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
    "Central Massachusetts",
    "Rhode Island",
    "New Hampshire"
  ],
  "url": "https://enterprisecleaningcorp.com/floor-care-services-central-ma"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often should commercial floors be stripped and waxed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on traffic, but most commercial VCT floors benefit from a full strip-and-wax once or twice a year, with regular buffing and scrubbing in between. We will recommend a cycle based on your building during a free assessment."
      }
    },
    {
      "@type": "Question",
      "name": "Do you clean carpets as well as hard floors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide carpet cleaning and hot-water extraction alongside hard-floor stripping, waxing, and restoration, so a single provider handles all your flooring."
      }
    },
    {
      "@type": "Question",
      "name": "Can floor care be scheduled outside business hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We perform strip-and-wax and other disruptive work after hours or on weekends so your operation is never interrupted."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve for commercial floor care?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide floor care throughout Central Massachusetts, and across Rhode Island and New Hampshire."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get a floor care quote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call (508) 890-1000 or request a free on-site assessment online. We will evaluate your flooring and provide a no-obligation proposal."
      }
    }
  ]
};

export default function FloorCarePage() {
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
            src="/images/floor_care_hero.png" 
            alt="Professional janitor polishing a commercial hard floor in Central MA" 
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
                <span className="text-white font-bold tracking-wide">Floor Care Services</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] drop-shadow-md">
                Commercial Floor Care<br/>
                <span className="text-[#FFE800]">in<br/>Central Massachusetts</span>
              </h1>
              
              <div className="text-base md:text-lg text-white/95 font-medium max-w-2xl leading-relaxed mt-6 drop-shadow-sm space-y-4 text-justify">
                <p>
                  Floors take more wear than any other surface in a commercial building — and they are the first thing a visitor notices. Dull, scuffed, or worn flooring quietly undermines an otherwise professional space. Bright, well-maintained floors do the opposite: they signal care, quality, and attention to detail.
                </p>
                <p>
                  Enterprise Cleaning Corporation provides complete commercial floor care across Central Massachusetts, from routine maintenance to full restoration. Whether you manage a corporate office, a medical facility, a school, a retail space, or a warehouse, we protect your flooring investment and keep it looking its best.
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
                  <Sparkles className="w-7 h-7 text-[#00B8FF]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  Protecting Your Flooring Investment
                </h3>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Commercial flooring is an expensive investment. Proper, consistent floor care dramatically extends its life and keeps it looking impeccable.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0090c8] mb-6">Our Floor Care Services</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              We service virtually every commercial flooring type, with programs tailored to the material and the traffic it carries:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Layers className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Strip & Wax</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">Strip and wax of VCT and resilient tile — removing old finish and rebuilding a deep, durable shine</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Sparkle className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Scrub & Buff</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">Floor scrubbing, buffing, and burnishing to maintain gloss between strip-and-wax cycles</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Droplets className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Carpet Care</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">Carpet cleaning, hot-water extraction, and spot treatment</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Hard-Surface Care</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">Hard-surface care for terrazzo, concrete, hardwood, and laminate</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Wind className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Tile & Grout</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">Tile and grout deep cleaning and restoration</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">High-Traffic Maintenance</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">High-traffic-area maintenance programs scheduled around your operations</p>
            </div>

            {/* Card 7 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <ShieldAlert className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Entryway Care</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">Entryway and walk-off matting care to protect floors from tracked-in soil</p>
            </div>
            
            {/* Card 8 (Placeholder to keep grid even) */}
            <div className="bg-gradient-to-br from-[#003057] to-[#0090c8] p-8 rounded-3xl shadow-sm text-center flex flex-col justify-center items-center">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#FFE800]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Comprehensive Programs</h3>
              <p className="text-sm text-white/80 leading-relaxed">We match the right process and finish to your unique environment.</p>
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
                  A Maintenance Program, <span className="text-[#0090c8]">Not Just a One-Time Clean</span>
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    The most cost-effective way to care for commercial flooring is a planned maintenance cycle rather than reactive cleaning. We build a schedule — daily, weekly, monthly, and periodic deep-restoration tasks — that keeps floors continuously protected and extends their useful life. That planning is part of our managed model: we track the cycle so you do not have to.
                  </p>
                  <p>
                    Floor care is also one of the most common ways our nightly janitorial clients expand their service. A building we already clean every night is a building we already know — which makes adding floor care seamless.
                  </p>
                </div>
              </div>

              <div className="bg-[#003057] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00B8FF]/20 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#FFE800]" />
                    </div>
                    <h3 className="text-xl font-bold">Planned Maintenance</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed font-medium text-justify">
                    We track the cycle so you do not have to. Building a proper schedule keeps floors protected and dramatically extends their useful life, saving you from expensive premature replacements.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="order-2 lg:order-1 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0090c8]/10 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-[#0090c8]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Right Process, Right Floor</h3>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium text-justify">
                  Different environments place different demands on floors. A medical facility needs sanitary, slip-resistant surfaces. A corporate lobby needs a deep, professional shine. A manufacturing plant or warehouse needs durable, degreased, safe floors. We match the right process and finish to your environment.
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  Protecting Your Flooring Investment
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    Commercial flooring is one of the largest and most visible investments in any building, and replacing it prematurely is expensive. Proper, consistent floor care dramatically extends the life of that investment. Regular maintenance removes the abrasive grit that wears finishes down, keeps protective coatings intact, and prevents the kind of deep, set-in soil and staining that eventually requires costly replacement rather than restoration.
                  </p>
                  <p>
                    Our crews are trained, equipped, and experienced with the full range of commercial flooring across Central Massachusetts. Whether your building has acres of VCT, polished concrete, terrazzo, hardwood, or carpet — or a mix of all of them — we have the equipment and the know-how to keep every square foot looking its best while protecting it for years to come.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Trust Banner — Brand Blue */}
      <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #0090c8 0%, #00A8E8 50%, #00B8FF 100%)" }}>
        {/* Decorative orbs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[#FFE800] font-bold tracking-widest uppercase text-sm mb-4">Trusted Across Central Massachusetts</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Proven Commercial Floor Care in Central MA
            </h2>
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-4xl mx-auto text-justify">
              We bring 97% client retention, four Worcester Business Journal “Best of Business” awards, and BBB accreditation since 2007 to every floor care contract, and we serve Massachusetts, Rhode Island, and New Hampshire. Our crews work throughout Shrewsbury, Auburn, Holden, Westborough, and the wider Central MA region, restoring and maintaining commercial floors for offices, healthcare facilities, schools, municipal buildings, and industrial sites.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
            {[
              { icon: Users, stat: "97%", label: "Client Retention Rate", sub: "Industry-leading" },
              { icon: Trophy, stat: "4×", label: "Best of Business", sub: "Worcester Business Journal" },
              { icon: ShieldCheck, stat: "2007", label: "BBB Accredited Since", sub: "Verified accountability" },
              { icon: Clock, stat: "23+", label: "Years in Business", sub: "Central Massachusetts" },
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
              src="/images/floor_care_banner.png"
              alt="Gleaming polished commercial floor in a modern office lobby"
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
              <p className="text-slate-600 font-medium">Common questions about our commercial floor care services in Central MA.</p>
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
        title="Ready to Protect Your Flooring Investment?"
        action={{
          text: "Request On-Site Assessment",
          href: "/contact",
          variant: "destructive",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed text-justify">
            Get a comprehensive floor care plan designed specifically for your facility's traffic and flooring type. Call (508) 890-1000 or request a free quote online.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 animate-appear delay-100">
            {[
              { icon: ShieldCheck, text: "Fully Insured & Bonded" },
              { icon: Sparkles, text: "Complete Restoration" },
              { icon: Trophy, text: "4× WBJ Best of Business" },
              { icon: Clock, text: "After-Hours Scheduling" },
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
