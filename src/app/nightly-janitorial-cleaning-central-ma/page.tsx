import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, PhoneCall, ShieldCheck, Clock, Building2, 
  Trash2, Droplets, Sparkles, SprayCan, Coffee, Wind, MapPin, Trophy, Users,
  Leaf, ArrowRight, CheckCircle2
} from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";

export const metadata: Metadata = {
  title: "Nightly Janitorial Services Worcester & Central MA",
  description: "Reliable nightly janitorial cleaning for offices, medical buildings, and facilities across Worcester and Central Massachusetts. 97% client retention. Get a free quote.",
  alternates: {
    canonical: "https://enterprisecleaningcorp.com/nightly-janitorial-cleaning-central-ma"
  }
};

const structuredDataService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Nightly Janitorial Cleaning — Enterprise Cleaning Corporation",
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
  "url": "https://enterprisecleaningcorp.com/nightly-janitorial-cleaning-central-ma"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often do you provide nightly janitorial cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients are serviced five nights a week, but we build the schedule around your operation — nightly, several nights a week, or weekends only. We work after hours so cleaning never disrupts your business day."
      }
    },
    {
      "@type": "Question",
      "name": "Do you serve buildings in Worcester and the surrounding towns?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide nightly janitorial cleaning throughout Worcester and Central Massachusetts, including Shrewsbury, Auburn, Holden, Westborough, Marlborough, and Leominster, and we also serve Rhode Island and New Hampshire."
      }
    },
    {
      "@type": "Question",
      "name": "Will I have the same cleaning crew every night?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Crew continuity is central to how we work. The same trained team services your building, which is a major reason behind our 97% client retention rate."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get a quote for nightly janitorial service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call us at (508) 890-1000 or request a free on-site assessment through our website. We will walk your facility, learn your standards, and put together a no-obligation proposal."
      }
    },
    {
      "@type": "Question",
      "name": "Are you insured and bonded?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Enterprise Cleaning Corporation is fully insured and bonded, and we have been BBB accredited since 2007."
      }
    }
  ]
};

export default function NightlyJanitorialPage() {
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
            src="/images/nightly_janitorial_hero.png" 
            alt="Professional nightly janitorial services in a pristine modern office in Worcester MA" 
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
                <span className="text-white font-bold tracking-wide">Nightly Janitorial Services</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] drop-shadow-md">
                Nightly Janitorial Services<br/>
                <span className="text-[#FFE800]">in Worcester &<br/>Central Massachusetts</span>
              </h1>
              
              <div className="text-base md:text-lg text-white/95 font-medium max-w-2xl leading-relaxed mt-6 drop-shadow-sm space-y-4 text-justify">
                <p>
                  When your team arrives in the morning, the building should already be clean, restocked, and ready for the day — with no sign of who did the work or when. That is what nightly janitorial service from Enterprise Cleaning Corporation delivers. For more than two decades, facility managers, property managers, and business owners across Central Massachusetts have trusted us to keep their buildings clean every single night, on a schedule that works around their operations rather than interrupting them.
                </p>
                <p>
                  Our nightly janitorial program is the backbone of what we do. It is recurring, dependable, and built on a simple promise: the same trained crew, the same standards, every night. That consistency is why we hold a 97% client retention rate — our clients simply never have a reason to switch.
                </p>
              </div>
              
              {/* Bottom Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-auto border-t border-white/30">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-[#FFE800]" />
                  <div>
                    <div className="font-bold text-lg">22+</div>
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
                  <ShieldCheck className="w-7 h-7 text-[#00B8FF]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  Trusted by Facility Managers & Property Owners Across Central Massachusetts
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
                  <p className="text-xs text-slate-400 mt-3 font-medium">Based on client retention rate</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0090c8] mb-6">What Our Nightly Janitorial Service Includes</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Every nightly cleaning program is customized to your building, but a standard scope typically covers all the high-touch and high-traffic areas that keep a workplace healthy and professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Trash2 className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Trash & Recycling</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Trash and recycling collection and removal from all offices, common areas, and breakrooms</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Droplets className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Restroom Care</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Restroom cleaning, sanitizing, and restocking of paper products and soap</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Floor Cleaning</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Vacuuming of carpets and dust-mopping and damp-mopping of hard floors</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <SprayCan className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Disinfecting</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Disinfecting of high-touch surfaces — door handles, light switches, shared equipment, and reception areas</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Coffee className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Breakroom & Kitchen</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Breakroom and kitchen cleaning, including counters, sinks, and appliance exteriors</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Wind className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Dusting</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Dusting of desks, sills, partitions, and horizontal surfaces</p>
            </div>

            {/* Card 7 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Spot-Cleaning</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Spot-cleaning of glass, entry doors, and interior partitions</p>
            </div>
            
            {/* Card 8 (Placeholder to keep grid even) */}
            <div className="bg-gradient-to-br from-[#003057] to-[#0090c8] p-8 rounded-3xl shadow-sm text-center flex flex-col justify-center items-center">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#FFE800]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">And Much More</h3>
              <p className="text-sm text-white/80 leading-relaxed">Every nightly cleaning program is fully customized to your building.</p>
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
                  A Managed Model — So You Do Not Have to Manage the Cleaners
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    Many cleaning companies hand you a crew and walk away. We manage our cleaners so you do not have to. Each account has supervision, quality checks, and a direct line to the people who own the company. When something needs attention, you are not filing a ticket with a national call center — you are talking to a local team that knows your building, your schedule, and your tenants by name.
                  </p>
                  <p>
                    This managed approach is the difference between a vendor and a partner. It is also why so many of our clients start with a nightly janitorial contract and later expand into floor care, day porter coverage, and specialty projects. Once a building is in good hands, owners want to keep it that way.
                  </p>
                </div>
              </div>

              <div className="bg-[#003057] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00B8FF]/20 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#FFE800]" />
                    </div>
                    <h3 className="text-xl font-bold">A True Partner</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed font-medium text-justify">
                    You are not filing a ticket with a national call center — you are talking to a local team that knows your building, your schedule, and your tenants by name.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="order-2 lg:order-1 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0090c8]/10 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-[#0090c8]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Healthier & More Productive</h3>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium text-justify">
                  Just as important, a clean building is a healthier and more productive one. Regular disinfection of high-touch surfaces helps reduce the spread of illness and absenteeism, while a consistently maintained workspace protects your facilities, your image, and the comfort of everyone who works there. Nightly janitorial service is the foundation that makes all of that possible.
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  Built Around Your Building — and Your Industry
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    No two facilities are the same, so no two nightly programs should be either. A law office, a medical practice, a manufacturing plant, and a multi-tenant property each have different priorities, traffic patterns, and standards. Before we ever quote a contract, we walk your building, learn how it is used, identify the areas that matter most, and design a scope that fits. From there, we lock in a consistent routine so nothing is missed and nothing is overdone.
                  </p>
                  <p>
                    Our experience spans the full range of commercial environments across Central Massachusetts — corporate offices and financial institutions, medical and healthcare facilities, schools and municipal buildings, manufacturing and industrial sites, warehouses and distribution centers, and managed properties of every kind. That breadth means we already understand the specific demands of your industry, and we bring proven routines rather than guesswork to your account.
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
            <span className="inline-block text-[#FFE800] font-bold tracking-widest uppercase text-sm mb-4">Proven Track Record</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Why Central Massachusetts Businesses Choose Enterprise Cleaning
            </h2>
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-4xl mx-auto text-justify">
              We are a Central Massachusetts company serving Massachusetts, Rhode Island, and New Hampshire. We bring 97% client retention, four Worcester Business Journal “Best of Business” awards, and BBB accreditation since 2007 to every nightly contract. For facility managers comparing vendors, those are the proof points that matter: a cleaning partner whose clients stay, whose work has been recognized by the region’s leading business publication, and whose accountability is verified by long-standing BBB accreditation. From Worcester and Shrewsbury to Auburn, Holden, Westborough, Marlborough, Leominster, and across Central MA, we keep commercial buildings consistently clean night after night.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
            {[
              { icon: Users, stat: "97%", label: "Client Retention Rate", sub: "Industry-leading" },
              { icon: Trophy, stat: "4×", label: "Best of Business", sub: "Worcester Business Journal" },
              { icon: ShieldCheck, stat: "2007", label: "BBB Accredited Since", sub: "Verified accountability" },
              { icon: Clock, stat: "22+", label: "Years in Business", sub: "Central Massachusetts" },
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
              <p className="text-slate-600 font-medium">Common questions about our nightly janitorial services in Central MA.</p>
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
      <CTASection
        className="bg-white border-t border-slate-100"
        title="Ready for a Dependable Cleaning Partner?"
        action={{
          text: "Request On-Site Assessment",
          href: "/contact",
          variant: "destructive",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed">
            Get a customized nightly janitorial service plan designed specifically for your facility's needs and schedule. No obligations — just results.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 animate-appear delay-100">
            {[
              { icon: ShieldCheck, text: "Fully Insured & Bonded" },
              { icon: Users, text: "97% Client Retention" },
              { icon: Trophy, text: "4× WBJ Best of Business" },
              { icon: Clock, text: "22+ Years Experience" },
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
