import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, PhoneCall, ShieldCheck, Clock, 
  Droplets, Flame, ArrowRight, CheckCircle2, 
  MapPin, Trophy, Users, Wind, AlertTriangle, FileText, Activity
} from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";

export const metadata: Metadata = {
  title: "24/7 Water & Fire Restoration Worcester MA",
  description: "24/7 emergency water, flood, fire, and mold restoration across Worcester and Central Massachusetts. Call (508) 890-1000 for rapid response.",
  alternates: {
    canonical: "https://enterprisecleaningcorp.com/emergency-restoration-services-central-ma"
  }
};

const structuredDataService = {
  "@context": "https://schema.org",
  "@type": "EmergencyService",
  "name": "Emergency & Restoration Services — Enterprise Cleaning Corporation",
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
  "url": "https://enterprisecleaningcorp.com/emergency-restoration-services-central-ma"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What number do I call for a cleaning or restoration emergency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For 24/7 emergency water, flood, fire, and restoration response, call (508) 890-1000."
      }
    },
    {
      "@type": "Question",
      "name": "How fast can you respond to a water or flood emergency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because we are a local Central Massachusetts company, we are built for rapid response. Call our emergency line and we will mobilize as quickly as possible to begin extraction and drying."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle insurance claims for restoration work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We document the damage and our work and coordinate with your insurance carrier and adjuster to help make the claims process as smooth as possible."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide mold remediation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide mold remediation and moisture control as part of our restoration services across Worcester and Central Massachusetts."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you cover for emergency restoration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide 24/7 emergency restoration throughout Worcester and Central Massachusetts, and across Rhode Island and New Hampshire."
      }
    }
  ]
};

export default function EmergencyRestorationPage() {
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
            src="/images/emergency_restoration_hero.png" 
            alt="Professional water extraction and commercial restoration services in Worcester MA" 
            fill
            className="object-cover object-center opacity-70"
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
                <span className="text-white font-bold tracking-wide">Emergency & Restoration</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] drop-shadow-md">
                24/7 Emergency & Restoration<br/>
                <span className="text-[#FFE800]">in Worcester &<br/>Central Massachusetts</span>
              </h1>
              
              <div className="text-base md:text-lg text-white/95 font-medium max-w-2xl leading-relaxed mt-6 drop-shadow-sm space-y-4 text-justify">
                <p>
                  Water, fire, and mold do not wait for business hours — and neither do we. When disaster strikes your facility, every hour counts. Standing water spreads. Smoke residue sets. Mold takes hold. Enterprise Cleaning Corporation provides 24/7 emergency restoration across Central Massachusetts, with rapid response that limits damage, protects your property, and gets your building back to normal as fast as possible.
                </p>
                <p>
                  Having a restoration division sets us apart from most cleaning companies. The same trusted, local team that keeps your building clean can also be the team you call when something goes wrong.
                </p>
              </div>
              
              {/* Bottom Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-auto border-t border-white/30">
                <div className="flex items-center gap-3">
                  <Activity className="w-8 h-8 text-[#E31837]" />
                  <div>
                    <div className="font-bold text-lg">24/7</div>
                    <div className="text-xs text-white/90">Rapid Response</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-[#FFE800]" />
                  <div>
                    <div className="font-bold text-lg">Fully</div>
                    <div className="text-xs text-white/90">Insured & Bonded</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-[#FFE800]" />
                  <div>
                    <div className="font-bold text-lg">Local</div>
                    <div className="text-xs text-white/90">Central MA Team</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-[#FFE800]" />
                  <div>
                    <div className="font-bold text-lg">Direct</div>
                    <div className="text-xs text-white/90">Insurance Billing</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Floating Card */}
            <div className="w-full max-w-sm lg:mb-12">
              <div className="bg-white p-8 rounded-3xl shadow-2xl text-center space-y-4 border-t-8 border-[#E31837]">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#E31837]/10 flex items-center justify-center mb-2">
                  <AlertTriangle className="w-8 h-8 text-[#E31837]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  Have an Emergency?
                </h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  Call our dedicated emergency line for immediate assistance.
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <a href="tel:5088901000" className="inline-flex items-center justify-center w-full bg-[#E31837] text-white font-extrabold text-xl py-4 rounded-xl hover:bg-red-700 transition-colors shadow-lg">
                    <PhoneCall className="w-5 h-5 mr-3" />
                    508-890-1000
                  </a>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0090c8] mb-6">Emergency Services We Provide</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Our restoration capabilities cover the full range of facility emergencies:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Droplets className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Water & Flood</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">Water and flood damage cleanup, extraction, and structural drying to stop damage in its tracks.</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#E31837]/10 transition-colors flex items-center justify-center mb-6">
                <Flame className="w-8 h-8 text-[#E31837]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Fire & Smoke</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">Fire and smoke damage cleanup and odor removal to restore a healthy environment.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Mold Remediation</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">Mold remediation and moisture control to eliminate hazards and prevent recurrence.</p>
            </div>


            {/* Card 5 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Wind className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Storm Response</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">Disaster and storm-damage response for properties hit by severe New England weather.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Post-Emergency Cleanup</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">Post-emergency deep cleaning and reconstruction support to fully normalize your operations.</p>
            </div>

            {/* Card 7 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Insurance Claims</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">We coordinate directly with insurance carriers and adjusters to make the claims process smoother.</p>
            </div>
            
            {/* Card 8 */}
            <div className="bg-gradient-to-br from-[#E31837] to-[#990000] p-8 rounded-3xl shadow-sm text-center flex flex-col justify-center items-center">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <Activity className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">24/7 Availability</h3>
              <p className="text-sm text-white/90 leading-relaxed">Fast response any time of day or night across Central Massachusetts.</p>
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
                  Why Rapid Response <span className="text-[#0090c8]">Matters</span>
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    In a water emergency, the first hours determine how much of your property can be saved. Fast extraction and professional drying can be the difference between a manageable cleanup and a full reconstruction. Because we are a local Central Massachusetts company — not a distant franchise dispatching from out of state — we can respond quickly when our clients need us most.
                  </p>
                  <p>
                    We also coordinate with insurance carriers and adjusters to make the claims process smoother, documenting the damage and the work so you are not navigating a stressful situation alone.
                  </p>
                </div>
              </div>

              <div className="bg-[#003057] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden border-l-8 border-[#E31837]">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00B8FF]/20 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#FFE800]" />
                    </div>
                    <h3 className="text-xl font-bold">Speed is Everything</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed font-medium text-justify">
                    Water migrates into walls, flooring, and structure within hours, and the longer it sits, the more damage it causes and the more expensive the recovery becomes. Mold can begin to develop quickly in damp conditions. Smoke and soot become harder to remove the longer they set. Our 24/7 availability and local presence mean we can begin extraction, drying, and stabilization quickly — limiting damage and lowering your total cost of recovery.
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
                  <h3 className="text-xl font-bold text-slate-900">Reducing Risk & Worry</h3>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium text-justify">
                  We also understand that an emergency is stressful and disruptive to your operation. Beyond the technical work, we help document the damage for your insurance carrier, coordinate with adjusters, and keep you informed throughout. For property managers and facility managers especially, having one partner for both routine cleaning and emergency restoration removes a major source of risk and worry.
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  The Advantage of a Cleaning Partner With a Restoration Division
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    Most commercial cleaning companies cannot help you when disaster strikes — they clean, and that is all. Having a full restoration division alongside our cleaning operation is a genuine differentiator, and it matters most at the worst possible moment. When a pipe bursts, a roof leaks, or a fire leaves smoke damage, you already have a trusted, local partner on call — one who knows your building and can respond fast.
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
            <span className="inline-block text-[#FFE800] font-bold tracking-widest uppercase text-sm mb-4">Local, Around the Clock, and Accountable</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Proven Restoration Experts in Central MA
            </h2>
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-4xl mx-auto text-justify">
              We serve Massachusetts, Rhode Island, and New Hampshire, with our core emergency-response market across Worcester and Central MA. We bring 97% client retention, four Worcester Business Journal “Best of Business” awards, and BBB accreditation since 2007 to every job, and the same owner-level accountability that defines everything we do. When you call our emergency line, you reach a company that knows the area and answers the phone.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
            {[
              { icon: Users, stat: "97%", label: "Client Retention Rate", sub: "Industry-leading" },
              { icon: Trophy, stat: "4×", label: "Best of Business", sub: "Worcester Business Journal" },
              { icon: ShieldCheck, stat: "2007", label: "BBB Accredited Since", sub: "Verified accountability" },
              { icon: Clock, stat: "24/7", label: "Emergency Response", sub: "Always available" },
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
              <a href="tel:5088901000" className="shrink-0 inline-flex items-center gap-2 bg-[#E31837] text-white font-extrabold px-6 py-3 rounded-full hover:bg-red-700 transition-colors shadow-lg text-sm">
                <PhoneCall className="w-4 h-4" />
                508-890-1000
              </a>
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
              <p className="text-slate-600 font-medium">Common questions about our 24/7 restoration capabilities.</p>
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
        title="Experiencing an Emergency?"
        action={{
          text: "Call (508) 890-1000",
          href: "tel:5088901000",
          variant: "destructive",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed text-justify">
            For non-emergency restoration inquiries, you can also request a free on-site assessment online or call (508) 890-1000 during business hours.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 animate-appear delay-100">
            {[
              { icon: Clock, text: "24/7 Rapid Response" },
              { icon: ShieldCheck, text: "Direct Insurance Billing" },
              { icon: Droplets, text: "Water Extraction" },
              { icon: Flame, text: "Fire Cleanup" },
            ].map((chip, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold"
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
