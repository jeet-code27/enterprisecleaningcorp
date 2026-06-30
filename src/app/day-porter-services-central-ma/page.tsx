import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, PhoneCall, ShieldCheck, Clock, Building2, 
  Trash2, Droplets, Sparkles, Coffee, MapPin, Trophy, Users,
  ArrowRight, CheckCircle2, ClipboardCheck
} from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";

export const metadata: Metadata = {
  title: "Day Porter Services Worcester & Central MA",
  description: "Professional daytime porter and matron services keeping lobbies, restrooms, and common areas spotless all day across Worcester and Central Massachusetts.",
  alternates: {
    canonical: "https://enterprisecleaningcorp.com/day-porter-services-central-ma"
  }
};

const structuredDataService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Day Porter Services — Enterprise Cleaning Corporation",
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
  "url": "https://enterprisecleaningcorp.com/day-porter-services-central-ma"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between a day porter and nightly janitorial service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A day porter works during business hours to keep your building clean while it is occupied — restrooms, lobbies, and common areas. Nightly janitorial happens after hours and covers the full deep clean. Many clients use both."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get a part-time or full-time day porter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We staff porters for a few hours a day, a full shift, or multiple shifts, depending on your building’s traffic and needs. We will recommend the right coverage during a free on-site assessment."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer matron services for ladies’ restrooms and event spaces?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Matron services are part of our day porter offering and are popular with hospitality venues, event spaces, and premium office buildings in the Worcester area."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas do you cover for day porter service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide day porter and matron services throughout Worcester and Central Massachusetts, and across Rhode Island and New Hampshire."
      }
    },
    {
      "@type": "Question",
      "name": "How do I arrange day porter coverage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call (508) 890-1000 or request a free quote online. We will assess your building’s daytime needs and propose the right level of porter coverage."
      }
    }
  ]
};

export default function DayPorterPage() {
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
            src="/images/day_porter_hero.png" 
            alt="Professional day porter keeping lobby pristine in Worcester MA" 
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
                <span className="text-white font-bold tracking-wide">Day Porter & Matron Services</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] drop-shadow-md">
                Day Porter & Matron Services<br/>
                <span className="text-[#FFE800]">in Worcester &<br/>Central Massachusetts</span>
              </h1>
              
              <div className="text-base md:text-lg text-white/95 font-medium max-w-2xl leading-relaxed mt-6 drop-shadow-sm space-y-4 text-justify">
                <p>
                  Some buildings cannot wait until nightfall to be clean. Busy lobbies, high-traffic restrooms, corporate reception areas, medical waiting rooms, and shared common spaces need attention throughout the business day. That is exactly what a day porter delivers — a dedicated, professional presence keeping your facility pristine while it is in full use.
                </p>
                <p>
                  Enterprise Cleaning Corporation provides day porter and matron services across Central Massachusetts, giving facility managers a clean, well-maintained building from open to close. Our porters are an extension of your team: uniformed, courteous, and trained to keep your space looking its best at the exact moments your clients, tenants, and visitors are watching.
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
                  An Extension of Your Team, Not Just a Vendor
                </h3>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Uniformed, courteous, and trained to keep your space looking its best at the exact moments your clients, tenants, and visitors are watching.
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0090c8] mb-6">What a Day Porter Does</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              A day porter handles the steady stream of cleaning and upkeep tasks that accumulate while a building is occupied. Typical daytime responsibilities include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Droplets className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Restroom Care</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Continuous restroom checks, cleaning, and restocking throughout the day</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Lobby & Entrance</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Lobby, entrance, and reception-area cleaning and tidying</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Trash2 className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Trash & Recycling</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Trash and recycling removal from common areas as it accumulates</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Spot Cleaning</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Spot-cleaning of spills, smudges, and high-touch surfaces</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Coffee className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Breakroom & Kitchen</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Breakroom and kitchen upkeep between scheduled cleanings</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <ClipboardCheck className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Meeting Rooms</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Conference and meeting room reset between uses</p>
            </div>

            {/* Card 7 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Supply Maintenance</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Monitoring and maintaining supplies so nothing runs out mid-day</p>
            </div>

            {/* Card 8 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-[#00B8FF]/30 transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#00B8FF]/10 transition-colors flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-[#00B8FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Exterior Entrance</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Light exterior entrance care — keeping the first impression spotless</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  Where Day Porter Service <span className="text-[#0090c8]">Makes the Biggest Difference</span>
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    Day porter coverage is especially valuable for buildings where appearance is part of the brand and traffic is heavy. Corporate offices and financial institutions use porters to keep client-facing areas immaculate. Medical and healthcare facilities rely on them to maintain sanitary waiting rooms and restrooms throughout patient hours. Property managers add porters to multi-tenant and Class A buildings to protect the tenant experience. Educational and municipal buildings use them to keep restrooms and corridors clean during peak use.
                  </p>
                  <p>
                    Many of our clients pair a day porter with our nightly janitorial program — the porter handles the day, the nightly crew handles the deep work after hours. Together they keep a building immaculate around the clock.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0090c8]/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#0090c8]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">The Perfect Pair: Day & Night</h3>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium text-justify">
                  For many of our clients, the day porter is the difference between a building that looks acceptable and one that looks impeccable at every hour. Paired with our nightly janitorial program, day porter coverage gives you a facility that is maintained around the clock — spotless when the doors open, spotless at midday, and deep-cleaned again every night.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  An Extension of Your Team, <span className="text-[#0090c8]">Not Just a Vendor</span>
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    A day porter is the most visible cleaning role in any building, because they work in plain sight while your clients, tenants, and visitors are present. That is why we staff porter positions with people who are professional, courteous, and presentable — individuals who represent your organization well and blend seamlessly into your environment. They are uniformed, trained on your building’s specific standards, and supervised to ensure consistency.
                  </p>
                  <p>
                    Because a porter is on site throughout the day, they also become a valuable set of eyes. They notice the spill before it becomes a slip hazard, the supply that is about to run out, the maintenance issue that needs reporting. This proactive presence prevents small problems from becoming visible ones, and it keeps your facility consistently presentable rather than clean only at the start and end of the day.
                  </p>
                </div>
              </div>

              <div className="bg-[#003057] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00B8FF]/20 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-[#FFE800]" />
                    </div>
                    <h3 className="text-xl font-bold">Proactive Presence</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed font-medium text-justify">
                    They notice the spill before it becomes a slip hazard, the supply that is about to run out, the maintenance issue that needs reporting. This proactive presence prevents small problems from becoming visible ones.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Trust Banner — Brand Blue */}
      <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #0090c8 0%, #00A8E8 50%, #00B8FF 100%)" }}>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[#FFE800] font-bold tracking-widest uppercase text-sm mb-4">Local, Accountable, and Proven</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Proven Day Porter Services in Central MA
            </h2>
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-4xl mx-auto text-justify">
              As a Central Massachusetts company, we staff our day porter positions with trained, reliable people and back them with real supervision. We bring 97% client retention, four Worcester Business Journal “Best of Business” awards, and BBB accreditation since 2007 to every account — and the same owner-level accountability that has kept our clients with us year after year. We serve Massachusetts, Rhode Island, and New Hampshire, with our core market in Worcester and the surrounding Central MA communities.
            </p>
          </div>

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

          <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0090c8]/80 via-transparent to-transparent z-10" />
            <Image
              src="/images/day_porter_trust_banner.png"
              alt="Immaculate corporate lobby maintained by Enterprise Cleaning in Central MA"
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
              <p className="text-slate-600 font-medium">Common questions about our day porter and matron services in Central MA.</p>
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
        title="Ready for a Clean Facility from Open to Close?"
        action={{
          text: "Request On-Site Assessment",
          href: "/contact",
          variant: "destructive",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed">
            Get a customized day porter or matron service plan designed specifically for your building's traffic and schedule. Call (508) 890-1000 or request a free quote online.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 animate-appear delay-100">
            {[
              { icon: ShieldCheck, text: "Fully Insured & Bonded" },
              { icon: Users, text: "Professional & Uniformed" },
              { icon: Trophy, text: "4× WBJ Best of Business" },
              { icon: Clock, text: "Flexible Coverage" },
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
