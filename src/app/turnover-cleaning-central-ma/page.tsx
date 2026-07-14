import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, PhoneCall, ShieldCheck, Clock, Building2, 
  Trash2, Droplets, Sparkles, SprayCan, Coffee, Wind, MapPin, Trophy, Users,
  Leaf, ArrowRight, CheckCircle2,
  CalendarCheck,
  Briefcase,
  Key
} from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";
import { RelatedIndustries } from "@/components/ui/related-industries";

export const metadata: Metadata = {
  title: "Turnover Cleaning Services | Central MA, RI & Southern NH",
  description: "Fast move-in, move-out & tenant turnover cleaning for apartments, commercial suites & managed properties across Central MA, Rhode Island & Southern NH.",
  alternates: {
    canonical: "https://enterprisecleaningcorp.com/turnover-cleaning-central-ma"
  }
};

const structuredDataService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Turnover Cleaning Services",
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
  "description": "Move-in, move-out, and tenant turnover cleaning for residential units, commercial suites, and managed properties across Central Massachusetts, Rhode Island, and Southern New Hampshire.",
  "url": "https://enterprisecleaningcorp.com/turnover-cleaning-central-ma"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How fast can you turn around a vacant unit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Same-day and next-day turnover cleaning is available for both residential units and commercial suites, depending on the size of the space and your leasing timeline."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle both apartment and commercial suite turnovers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide turnover cleaning for residential units, commercial suites, and mixed-use properties, adjusting the scope for each type of space."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in a standard turnover clean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard turnover includes full kitchen and bathroom cleaning, floor care, interior window and glass cleaning, dusting, trash removal, and disinfecting of high-touch surfaces, finished with a move-in-ready walk-through."
      }
    },
    {
      "@type": "Question",
      "name": "Can you coordinate turnover cleaning around a tight leasing schedule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We work directly with property managers and leasing teams to schedule the clean within whatever window the move-out and move-in dates allow."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide turnover cleaning in Rhode Island and Southern New Hampshire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We serve property managers and landlords throughout Rhode Island, including Providence and Cranston, and Southern New Hampshire, including Manchester and Nashua, in addition to Central Massachusetts."
      }
    },
    {
      "@type": "Question",
      "name": "Is carpet cleaning included in turnover service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spot and standard carpet cleaning can be included as part of the turnover scope; deeper carpet care is available as an add-on when a unit needs more extensive care."
      }
    },
    {
      "@type": "Question",
      "name": "Can you clean the same day a tenant moves out?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cases, yes. We prioritize fast turnaround on turnover requests and coordinate with property managers to clean as soon as the unit is vacated."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer recurring turnover contracts for property management companies with multiple units?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many property managers set up a standing turnover arrangement that activates automatically whenever a lease ends, so cleaning is never the reason a unit sits vacant."
      }
    },
    {
      "@type": "Question",
      "name": "What if a unit needs extra work beyond a standard clean, such as heavy soil or damage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We assess the unit and quote any additional work upfront — heavy soil, odor treatment, or move-out damage does not have to become a separate vendor problem."
      }
    },
    {
      "@type": "Question",
      "name": "How do I schedule a turnover cleaning quote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call (508) 890-1000 or request a free quote online with your move-out date, and we will confirm a cleaning window that fits your leasing schedule."
      }
    }
  ]
};

export default function TurnoverCleaningPage() {
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
            src="/images/turnover_cleaning_hero.png" 
            alt="Turnover cleaning for empty commercial suites and residential units" 
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
                <span className="text-white font-bold tracking-wide">Turnover Cleaning</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] drop-shadow-md">
                Turnover Cleaning Services<br/>
                <span className="text-[#FFE800] text-3xl md:text-4xl lg:text-5xl">in Central MA, RI & Southern NH</span>
              </h1>
              
              <div className="text-base md:text-lg text-white/95 font-medium max-w-2xl leading-relaxed mt-6 drop-shadow-sm space-y-4 text-justify">
                <p>
                  Every day a unit sits vacant between tenants is a day of lost rent. For property managers, landlords, and leasing teams across Central Massachusetts, Rhode Island, and Southern New Hampshire, turnover cleaning is not a routine chore — it is the last step standing between a move-out and a move-in, and speed matters as much as quality.
                </p>
                <p>
                  Enterprise Cleaning Corporation provides fast, thorough turnover cleaning for residential units, commercial suites, and managed properties, so vacant space gets back on the market and ready for a new tenant as quickly as possible.
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
                  <PhoneCall className="w-8 h-8 text-[#FFE800]" />
                  <div>
                    <div className="font-bold text-lg">24/7</div>
                    <div className="text-xs text-white/90">Emergency Response</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-[#FFE800]" />
                  <div>
                    <div className="font-bold text-lg">BBB</div>
                    <div className="text-xs text-white/90">Accredited Since 2007</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Floating Card */}
            <div className="w-full max-w-sm lg:mb-12">
              <div className="bg-white p-8 rounded-3xl shadow-2xl text-center space-y-4 border-b-4 border-[#00B8FF]">
                <div className="mx-auto w-14 h-14 rounded-full bg-[#00B8FF]/10 flex items-center justify-center mb-4">
                  <Key className="w-7 h-7 text-[#00B8FF]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  Move-In Ready Quality & Speed
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
                  <p className="text-xs text-slate-400 mt-3 font-medium text-justify">
                    We have spent more than two decades building the kind of managed, accountable service that property managers rely on for their toughest scheduling problems. We show up when we say we will.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Services Breakdown Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#0090c8] mb-6">What Turnover Cleaning Includes</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              A turnover clean goes well beyond a standard janitorial visit — it is a full reset of the space so it shows and smells like new to the next occupant. A standard scope typically includes:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              "Full kitchen cleaning, including inside and outside of appliances, cabinets, and countertops",
              "Complete bathroom cleaning and sanitizing, including tile, grout, and fixtures",
              "Floor cleaning appropriate to the surface — vacuuming, mopping, or spot carpet cleaning",
              "Interior window and glass cleaning, including sills and tracks",
              "Dusting and wipe-down of all surfaces, closets, shelving, and baseboards",
              "Removal of all trash, debris, and items left behind by the previous occupant",
              "Disinfecting of high-touch surfaces — light switches, door handles, and cabinet pulls",
              "A final move-in-ready walk-through before the space is turned back over"
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#00B8FF] shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
              </div>
            ))}
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
                  Fast Turnaround When the Calendar Is Tight
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    Leasing timelines rarely leave room for delay, and a turnover clean is frequently the last item standing between a signed lease and a new tenant's key handoff. We understand that a slow turnover costs you occupied days and revenue, so we prioritize speed without cutting corners.
                  </p>
                  <p>
                    Same-day and next-day turnover cleaning is available for both residential units and commercial suites, and we coordinate directly with property managers and leasing staff to fit the clean into whatever window the schedule allows.
                  </p>
                </div>
              </div>

              <div className="bg-[#003057] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00B8FF]/20 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <CalendarCheck className="w-6 h-6 text-[#FFE800]" />
                    </div>
                    <h3 className="text-xl font-bold">Built for Property Managers</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed font-medium text-justify">
                    Whether you manage a handful of rental units or a large multi-property portfolio, turnover cleaning is easiest when it is handled by a single, reliable partner rather than juggled between whoever is available. We work with property managers on one-off turnovers and standing contracts that activate automatically whenever a lease ends.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="order-2 lg:order-1 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0090c8]/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[#0090c8]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Residential & Commercial</h3>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium text-justify mb-4">
                  Turnover cleaning is not limited to apartments. We provide the same fast, thorough service for vacant commercial suites, office spaces between tenants, and mixed-use properties, adjusting the scope to fit the space. 
                </p>
                <p className="text-slate-600 leading-relaxed font-medium text-justify">
                  A vacated apartment and a vacated office suite need different attention — one is judged on kitchens and bathrooms, the other on carpets, glass, and a professional first impression for the next business moving in — and our crews are trained to handle both.
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  Coordinating With Leasing Timelines
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    Every property manager we work with has a slightly different process for handing units back and forth between tenants — some require a pre-move-out walkthrough, some need the clean completed before a maintenance inspection, and some are simply racing a hard move-in date on the calendar.
                  </p>
                  <p>
                    Rather than forcing every client into a single fixed process, we build turnover scheduling around whatever workflow your property already uses, communicating directly with the property manager, leasing agent, or maintenance team so nobody is left guessing when the unit will be ready. For portfolios with frequent turnover, we can also set up a standing notification process so a cleaning is automatically scheduled the moment a lease-end date is confirmed.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  A Final Quality Check Before Handoff
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    Every turnover clean ends with a walk-through against a standard checklist before we consider the unit ready to hand back. That final check catches the details that matter most to a new tenant on their first day — a streak on a mirror, a missed light fixture, a lingering odor from the previous occupant.
                  </p>
                  <p>
                    It is the same discipline that has helped us build a 97% client retention rate. Property managers do not have to re-inspect behind us; the unit is ready when we say it is ready, and if anything is flagged during a leasing walkthrough afterward, we return to correct it at no additional cost.
                  </p>
                </div>
              </div>

              <div className="bg-[#00B8FF]/10 text-slate-900 p-8 rounded-3xl border border-[#00B8FF]/30 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-[#0090c8]" />
                  </div>
                  <h3 className="text-xl font-bold">One Vendor for Everything</h3>
                </div>
                <p className="text-slate-700 leading-relaxed font-medium text-justify">
                  Because Enterprise Cleaning also provides nightly janitorial, floor care, and emergency cleanup, property managers who use us for turnover cleaning frequently consolidate their entire cleaning program under one vendor. That means one point of contact for the tenant space you are turning over today and the common areas, floors, and emergencies you will need handled tomorrow.
                </p>
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
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-4xl mx-auto text-justify">
              We provide turnover cleaning throughout Worcester, Shrewsbury, Auburn, Holden, Westborough, Marlborough, and the surrounding Central Massachusetts region, as well as across Rhode Island — including Providence, Cranston, and Pawtucket — and Southern New Hampshire, including Nashua, Manchester, and Salem. If your portfolio spans more than one of these markets, that regional reach means you can standardize on a single turnover cleaning partner instead of managing a different local vendor in every town — one call, one standard, and one invoice, no matter where the vacancy is.
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
              <p className="text-slate-600 font-medium">Common questions about our turnover cleaning services.</p>
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
      
      <RelatedIndustries industryIds={["property", "real-estate", "office"]} />
      <CTASection
        className="bg-white border-t border-slate-100"
        title="Need a Fast, Reliable Turnover?"
        action={{
          text: "Schedule a Turnover Clean",
          href: "/contact",
          variant: "destructive",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed text-center">
            Get your vacant units and commercial suites ready for the next tenant without delays.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 animate-appear delay-100">
            {[
              { icon: ShieldCheck, text: "Fully Insured & Bonded" },
              { icon: Users, text: "97% Client Retention" },
              { icon: Trophy, text: "4× WBJ Best of Business" },
              { icon: Clock, text: "Fast Turnaround" },
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
