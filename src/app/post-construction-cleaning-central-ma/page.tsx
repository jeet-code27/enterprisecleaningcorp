import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, PhoneCall, ShieldCheck, Clock, Building2, 
  Trash2, Droplets, Sparkles, SprayCan, Coffee, Wind, MapPin, Trophy, Users,
  HardHat, ArrowRight, CheckCircle2,
  CalendarCheck,
  Briefcase,
  Key,
  ShieldAlert,
  Hammer
} from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";
import { RelatedIndustries } from "@/components/ui/related-industries";

export const metadata: Metadata = {
  title: "Post-Construction Cleaning Services | Central MA, RI & Southern NH",
  description: "Rough, final & touch-up post-construction cleaning for contractors, developers & building owners across Central MA, Rhode Island & Southern NH. Get a free quote.",
  alternates: {
    canonical: "https://enterprisecleaningcorp.com/post-construction-cleaning-central-ma"
  }
};

const structuredDataService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Post-Construction Cleaning Services",
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
  "description": "Rough, final, and touch-up post-construction cleaning for contractors, developers, and building owners across Central Massachusetts, Rhode Island, and Southern New Hampshire.",
  "url": "https://enterprisecleaningcorp.com/post-construction-cleaning-central-ma"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's the difference between rough clean, final clean, and touch-up clean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rough clean removes bulk debris and dust right after major construction so trades can finish their work; final clean is the detailed top-to-bottom clean once finishing trades are done; touch-up clean is a last pass right before move-in to catch anything introduced afterward."
      }
    },
    {
      "@type": "Question",
      "name": "How soon after construction ends can you start cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We can typically begin a rough clean the same day demolition and major construction work wrap up, and we coordinate the final clean directly with your project timeline."
      }
    },
    {
      "@type": "Question",
      "name": "Do you remove construction debris and leftover packaging materials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Rough clean includes removal of construction debris, packaging, labels, and adhesive residue left behind by trades."
      }
    },
    {
      "@type": "Question",
      "name": "Can you work around our general contractor's schedule and deadlines?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We coordinate directly with contractors, project managers, and developers so cleaning fits your construction timeline rather than forcing a delay."
      }
    },
    {
      "@type": "Question",
      "name": "Do you clean new construction and renovation projects in Rhode Island and Southern New Hampshire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide post-construction cleaning throughout Rhode Island, including Providence and Cranston, and Southern New Hampshire, including Manchester and Nashua, in addition to Central Massachusetts."
      }
    },
    {
      "@type": "Question",
      "name": "Will your team clean windows and remove construction dust from glass and tracks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Interior window, glass, and track cleaning to remove construction film and debris is included in our final clean scope."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide post-construction cleaning for both commercial and residential builds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our post-construction division focuses primarily on commercial construction, tenant build-outs, and renovation projects, and we can scope residential builds on request."
      }
    },
    {
      "@type": "Question",
      "name": "Is post-construction cleaning available on short notice for tight occupancy deadlines?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We regularly compress final and touch-up cleans into 24-to-48-hour turnarounds ahead of a hard occupancy or opening date."
      }
    },
    {
      "@type": "Question",
      "name": "What safety precautions do your crews follow on active job sites?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our crews are trained to work around active trade work and follow whatever site-specific safety protocols the general contractor requires."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get a quote for a post-construction cleaning project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call (508) 890-1000 or request a free quote online with your project timeline, and we will scope the rough, final, or touch-up clean your project needs."
      }
    }
  ]
};

export default function PostConstructionCleaningPage() {
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
            src="/images/post_construction_hero.png" 
            alt="Commercial post-construction cleaning" 
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
                <span className="text-white font-bold tracking-wide">Post-Construction Cleaning</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] drop-shadow-md">
                Post-Construction Cleaning<br/>
                <span className="text-[#FFE800] text-3xl md:text-4xl lg:text-5xl">in Central MA, RI & Southern NH</span>
              </h1>
              
              <div className="text-base md:text-lg text-white/95 font-medium max-w-2xl leading-relaxed mt-6 drop-shadow-sm space-y-4 text-justify">
                <p>
                  A finished construction project is not truly finished until the dust, debris, and residue left behind by the build are gone. Contractors, developers, and building owners across Central Massachusetts, Rhode Island, and Southern New Hampshire rely on Enterprise Cleaning Corporation to turn a job site into a move-in ready space — on the timeline the project actually needs, not a generic schedule that ignores construction realities.
                </p>
                <p>
                  Post-construction cleaning is different from routine janitorial work. It requires crews who understand construction dust, know how to protect newly installed finishes, and can work around contractors, inspectors, and tight occupancy deadlines without becoming the reason a project runs late.
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
                  <HardHat className="w-8 h-8 text-[#FFE800]" />
                  <div>
                    <div className="font-bold text-lg">3</div>
                    <div className="text-xs text-white/90">Cleaning Phases</div>
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
                  Accountability on the Job Site
                </h3>
                <div className="pt-4 border-t border-slate-100">
                  <div className="text-5xl font-extrabold text-[#0090c8]">4x</div>
                  <div className="text-xs font-bold text-slate-500 tracking-widest uppercase mt-2 mb-3">Best of Business Awards</div>
                  <div className="flex items-center justify-center gap-1 text-[#FFE800]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 mt-3 font-medium text-justify">
                    With more than two decades of experience, a 97% client retention rate, and four Worcester Business Journal "Best of Business" awards, we bring the same accountability to a construction site that we bring to every other account we service.
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
            <h2 className="text-3xl font-extrabold text-[#003057] mb-6">The Three Phases of Post-Construction Cleaning</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-justify mb-8">
              Most post-construction projects move through three distinct cleaning phases, and we can be brought in for any single phase or all three as part of one continuous scope:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#0090c8]/10 flex items-center justify-center text-[#0090c8] font-bold">1</div>
                  <h3 className="font-bold text-slate-900">Rough Clean</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">Performed once major construction work is complete, removing bulk debris, packaging materials, stickers, and construction dust so trades can complete finishing work in a manageable space.</p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#00B8FF]/10 flex items-center justify-center text-[#00B8FF] font-bold">2</div>
                  <h3 className="font-bold text-slate-900">Final Clean</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">A detailed, top-to-bottom clean performed after finishing trades are done, covering every surface, fixture, and finish so the space is ready for a walk-through or occupancy.</p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#E31837]/10 flex items-center justify-center text-[#E31837] font-bold">3</div>
                  <h3 className="font-bold text-slate-900">Touch-Up / Punch Clean</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">A final pass performed just before move-in or opening, addressing any dust or marks introduced by furniture delivery, punch-list work, or foot traffic since the final clean.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#0090c8] mb-6">What's Included in Each Phase</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              We adjust the scope depending on the phase of your project, but a comprehensive post-construction clean includes:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              "Removal of construction debris, packaging, labels, and adhesive residue",
              "Detailed dust removal from all surfaces, ledges, vents, and light fixtures",
              "Interior window, glass, and track cleaning to remove construction film and debris",
              "Floor cleaning appropriate to the finish — carpet, tile, hardwood, or polished concrete",
              "Cabinet, closet, and shelving interior and exterior wipe-down",
              "Restroom and kitchen detailing, including fixtures and appliances",
              "Disinfecting of high-touch surfaces before occupancy"
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
                  Built to Work Around Your Construction Timeline
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    Construction schedules shift, and a cleaning partner who cannot adapt becomes a bottleneck on move-in day. We coordinate directly with general contractors, project managers, and developers so cleaning slots into whatever window the schedule allows.
                  </p>
                  <p>
                    Whether that means starting a rough clean the same day trades finish demolition or compressing a final clean into a 24-to-48-hour turnaround ahead of a hard occupancy date. Our crews are trained to work safely around active job sites, respect ongoing trade work, and follow whatever safety protocols a general contractor requires on-site.
                  </p>
                </div>
              </div>

              <div className="bg-[#003057] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00B8FF]/20 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Key className="w-6 h-6 text-[#FFE800]" />
                    </div>
                    <h3 className="text-xl font-bold">Move-In Ready, Every Time</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed font-medium text-justify">
                    The standard we hold ourselves to is simple: when the last cleaning pass is done, the space should look and feel finished, not merely swept. That standard matters most for developers and building owners handing a space over to a tenant, a buyer, or the public for the first time, where a lingering layer of construction dust or a missed detail undermines the impression the entire project was built to create.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="order-2 lg:order-1 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0090c8]/10 flex items-center justify-center">
                    <ShieldAlert className="w-6 h-6 text-[#0090c8]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Safety & Site Protocols</h3>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium text-justify mb-4">
                  A construction site is not a typical cleaning environment, and our crews are trained accordingly. That means understanding which areas are cleared for cleaning versus still under active trade work, using the correct equipment and technique for surfaces that have not yet been sealed or fully cured.
                </p>
                <p className="text-slate-600 leading-relaxed font-medium text-justify">
                  We follow whatever site-specific safety requirements a general contractor has in place — from personal protective equipment to sign-in procedures. Treating a job site with that level of care protects the finishes your project just paid for and keeps our crews working safely.
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  Coordinating With GCs & Project Managers
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    Post-construction cleaning rarely happens in isolation — it is one step in a sequence of inspections, punch-list work, furniture deliveries, and handoffs that a general contractor or project manager is juggling all at once.
                  </p>
                  <p>
                    We treat every job as part of that larger sequence rather than a standalone task, communicating directly with the GC or project manager about exactly when trades will clear out, when the space needs to be presentable for a walk-through, and when the final touch-up needs to happen relative to move-in day.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  Commercial Builds, Renovations & Tenant Build-Outs
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    We provide post-construction cleaning for new commercial construction, ground-up developments, tenant build-outs, and renovation projects of every size across the region.
                  </p>
                  <p>
                    That includes offices, medical and healthcare facilities, retail spaces, schools and municipal buildings, warehouses, and manufacturing facilities — the same range of industries we serve through our ongoing janitorial and emergency divisions. This means the crew cleaning your finished space already understands how that type of facility needs to look and function on day one.
                  </p>
                </div>
              </div>

              <div className="bg-[#00B8FF]/10 text-slate-900 p-8 rounded-3xl border border-[#00B8FF]/30 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <Building2 className="w-6 h-6 text-[#0090c8]" />
                  </div>
                  <h3 className="text-xl font-bold">A Seamless Handoff</h3>
                </div>
                <p className="text-slate-700 leading-relaxed font-medium text-justify">
                  We treat every post-construction clean as the final quality checkpoint before a space goes live. We ensure that the final result reflects the hard work of all the trades that came before us, leaving a spotless environment for the new occupants.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Custom Service Area Banner - Post Construction Edition */}
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
              We provide post-construction cleaning throughout Worcester, Shrewsbury, Auburn, Holden, Westborough, Marlborough, and the surrounding Central Massachusetts region, as well as across Rhode Island — including Providence, Cranston, and Pawtucket — and Southern New Hampshire, including Nashua, Manchester, and Salem. For contractors and developers who work across all three states, that regional coverage means one crew and one point of contact can follow the project wherever it is built, rather than sourcing a new cleaning vendor for every new site.
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0090c8]/80 via-transparent to-transparent z-10" />
            <Image
              src="/images/post_construction_banner.png"
              alt="Post-construction site in Central MA, RI & NH"
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
              <p className="text-slate-600 font-medium">Common questions about our post-construction cleaning services.</p>
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
      
      <RelatedIndustries industryIds={["real-estate", "property", "manufacturing"]} />
      <CTASection
        className="bg-white border-t border-slate-100"
        title="Ready to Finalize Your Project?"
        action={{
          text: "Request a Cleaning Quote",
          href: "/contact",
          variant: "destructive",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed text-center">
            Ensure your newly constructed space is spotless and move-in ready before handing over the keys.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 animate-appear delay-100">
            {[
              { icon: ShieldCheck, text: "Fully Insured & Bonded" },
              { icon: Users, text: "97% Client Retention" },
              { icon: Trophy, text: "4× WBJ Best of Business" },
              { icon: Clock, text: "Flexible Scheduling" },
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
