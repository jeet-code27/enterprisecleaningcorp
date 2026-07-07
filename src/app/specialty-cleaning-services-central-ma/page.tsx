import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, PhoneCall, ShieldCheck, Clock, 
  Droplets, SprayCan, ArrowRight, CheckCircle2, 
  MapPin, Trophy, Users, Hammer, Wind, Sparkles, MoveRight, Snowflake, Handshake
} from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";

export const metadata: Metadata = {
  title: "Window Cleaning & Pressure Washing Worcester MA",
  description: "Commercial window cleaning, pressure washing, and specialty services for buildings across Worcester and Central Massachusetts. Request a free quote today.",
  alternates: {
    canonical: "https://enterprisecleaningcorp.com/specialty-cleaning-services-central-ma"
  }
};

const structuredDataService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Specialty Services (Window Cleaning & Pressure Washing) — Enterprise Cleaning Corporation",
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
  "url": "https://enterprisecleaningcorp.com/specialty-cleaning-services-central-ma"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you offer one-time specialty projects, or only recurring contracts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both. We handle one-time window cleaning, pressure washing, and deep-clean projects, and we can also build specialty work into a recurring maintenance schedule."
      }
    },
    {
      "@type": "Question",
      "name": "Can you pressure wash building exteriors and parking areas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We pressure wash sidewalks, entrances, loading docks, dumpster areas, parking structures, and building facades for commercial properties across Central Massachusetts."
      }
    },
    {
      "@type": "Question",
      "name": "Do you do commercial window cleaning for multi-story buildings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide interior and exterior window cleaning for commercial buildings, using safe, professional methods. Contact us with your building details for a tailored quote."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you cover for specialty cleaning services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide specialty cleaning throughout Worcester and Central Massachusetts, and across Rhode Island and New Hampshire."
      }
    },
    {
      "@type": "Question",
      "name": "How do I request a specialty cleaning quote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call (508) 890-1000 or request a free quote online, and we will scope the project and provide a no-obligation proposal."
      }
    }
  ]
};

export default function SpecialtyCleaningPage() {
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
            src="/images/specialty_cleaning_hero.png" 
            alt="Professional worker pressure washing the exterior entrance of a commercial building" 
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
                <span className="text-white font-bold tracking-wide">Specialty Services</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] drop-shadow-md">
                Specialty Cleaning Services<br/>
                <span className="text-[#FFE800]">in Worcester &<br/>Central Massachusetts</span>
              </h1>
              
              <div className="text-base md:text-lg text-white/95 font-medium max-w-2xl leading-relaxed mt-6 drop-shadow-sm space-y-4 text-justify">
                <p>
                  Beyond routine janitorial work, commercial buildings need periodic specialty attention — the projects that keep a property looking sharp and well-cared-for from the curb to the top floor. Enterprise Cleaning Corporation provides a full range of specialty services across Central Massachusetts, from streak-free window cleaning to high-pressure exterior washing.
                </p>
                <p>
                  One of our greatest strengths is doing more than traditional janitorial work. Many of our best clients began with a recurring cleaning contract and later expanded into specialty projects — because once you have a cleaning partner you trust, it makes sense to give them everything. Our specialty division means you do not have to source, vet, and schedule a separate vendor for every project.
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
                  <SprayCan className="w-7 h-7 text-[#00B8FF]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  From Recurring Contract to Full-Service Partner
                </h3>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Fewer vendors, consistent standards, and a single accountable point of contact for all your building's needs.
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0090c8] mb-6">Window Cleaning, Pressure Washing & More</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Our specialty services extend to the periodic and project-based work that keeps a facility in top condition:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Droplets className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Window Cleaning</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">Interior and exterior commercial window cleaning for offices, storefronts, medical buildings, and multi-tenant properties. Streak-free glass, clean frames and sills, and safe technique are standard.</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <SprayCan className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Pressure Washing</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">Restoring sidewalks, entrances, loading docks, parking structures, dumpster areas, and building exteriors by removing grime, gum, salt, and stains to improve curb appeal and safety.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Hammer className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Post-Construction</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">Post-construction and post-renovation cleaning to prepare your facility for occupancy or normal operations.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Wind className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">High Dusting</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">High dusting of vents, fixtures, and overhead structures that are typically out of reach.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Zone Deep Cleaning</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">Deep cleaning of breakrooms, kitchens, and high-touch zones that require extra attention.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <MoveRight className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Tenant Turnover</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">Move-in and move-out cleaning for tenant turnover to ensure a pristine start.</p>
            </div>

            {/* Card 7 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Seasonal Projects</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">Seasonal and one-time deep-clean projects designed around your specific facility needs.</p>
            </div>
            
            {/* Card 8 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Snowflake className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Snow & Ice</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">Snow and ice management for commercial entrances and walkways (seasonal) to maintain safety.</p>
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
                  From Recurring Contract <span className="text-[#0090c8]">to Full-Service Partner</span>
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    One of our greatest strengths is providing more than traditional janitorial work. Many of our best client relationships began with a single recurring contract and grew, over time, into a full-service partnership — floor care, window cleaning, pressure washing, post-construction projects, and emergency response, all handled by one team that already knows the building. That growth happens because trust, once earned, is worth consolidating.
                  </p>
                  <p>
                    Specialty work also tends to be periodic and project-based, which makes it easy to overlook until it is suddenly urgent — the windows that have not been cleaned in a year, the entrance that needs pressure washing before a big visit, the deep clean required after a renovation. As your dedicated cleaning partner, we can plan this work into a schedule so it happens proactively, on a cadence that keeps your property consistently sharp rather than reactively patched.
                  </p>
                  <p>
                    The practical benefit is simple: fewer vendors, consistent standards, and a single accountable point of contact. Instead of sourcing, vetting, and coordinating a different company for every project, you have one local partner who understands your facility and stands behind every job, from the nightly clean to the once-a-year specialty project.
                  </p>
                </div>
              </div>

              <div className="bg-[#003057] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00B8FF]/20 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Handshake className="w-6 h-6 text-[#FFE800]" />
                    </div>
                    <h3 className="text-xl font-bold">Fewer Vendors, Better Results</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed font-medium text-justify mb-6">
                    Instead of sourcing, vetting, and coordinating a different company for every project, you have one local partner who understands your facility and stands behind every job.
                  </p>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FFE800]" />
                      <span className="font-medium">Consistent Standards</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FFE800]" />
                      <span className="font-medium">Single Point of Contact</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FFE800]" />
                      <span className="font-medium">Proactive Scheduling</span>
                    </li>
                  </ul>
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
            <span className="inline-block text-[#FFE800] font-bold tracking-widest uppercase text-sm mb-4">One Trusted Partner for Every Project</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Specialty Cleaning You Can Trust
            </h2>
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-4xl mx-auto text-justify">
              Consolidating specialty work with the company that already cleans your building means consistent standards, one point of contact, and a partner who knows your property. We bring 97% client retention, four Worcester Business Journal “Best of Business” awards, and BBB accreditation since 2007 to every specialty project, and we serve Massachusetts, Rhode Island, and New Hampshire, with our core market across Worcester and Central MA.
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
              src="/images/worcester_skyline_banner.png"
              alt="Worcester Massachusetts — Enterprise Cleaning serves Central MA, RI & NH"
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
                <p className="text-white font-bold text-lg md:text-2xl leading-snug">Worcester &amp; Central MA · Rhode Island · New Hampshire</p>
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
              <p className="text-slate-600 font-medium">Common questions about our specialty cleaning services.</p>
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
        title="Ready to Transform Your Building's Appearance?"
        action={{
          text: "Request On-Site Assessment",
          href: "/contact",
          variant: "destructive",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed text-justify">
            Whether you need a one-time pressure washing project or recurring window cleaning, we provide a no-obligation proposal tailored to your property. Call (508) 890-1000 today.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 animate-appear delay-100">
            {[
              { icon: ShieldCheck, text: "Fully Insured & Bonded" },
              { icon: Sparkles, text: "Professional Equipment" },
              { icon: Trophy, text: "4× WBJ Best of Business" },
              { icon: Handshake, text: "Single Point of Contact" },
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
