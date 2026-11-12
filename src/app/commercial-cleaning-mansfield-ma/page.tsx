import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneCall, ShieldCheck, Clock, Building2,
  MapPin, Trophy, Users, ArrowRight, CheckCircle2,
  CalendarCheck, Briefcase, Sparkles, Factory,
  Stethoscope, GraduationCap, Truck, Award, ChevronDown
} from "lucide-react";

const PAGE_URL = "https://www.enterprisecleaningcorp.com/commercial-cleaning-mansfield-ma";
const TITLE = "Commercial Cleaning Company in Mansfield, MA | Enterprise Cleaning";
const DESCRIPTION = "Commercial cleaning company in Mansfield, MA for offices, Cabot Business Park, warehouses, medical and retail sites. Same crew every visit. Free walkthrough.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Enterprise Cleaning Corporation",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
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

const FAQS = [
  {
    q: "Is Enterprise Cleaning Corporation a commercial cleaning company in Mansfield, MA?",
    a: "Yes. Enterprise Cleaning Corporation provides commercial cleaning and janitorial services to businesses in Mansfield, MA, including offices, Cabot Business Park tenants, warehouses, medical practices, schools and retail properties.",
  },
  {
    q: "What commercial cleaning services do you offer in Mansfield?",
    a: "Nightly janitorial and office cleaning, day porter coverage, floor care, carpet cleaning, warehouse and distribution center cleaning, medical office cleaning, post-construction cleaning, turnover cleaning, and 24/7 emergency water damage cleanup.",
  },
  {
    q: "Do you clean warehouses and industrial buildings in Cabot Business Park?",
    a: "Yes. We clean warehouses, light-industrial buildings and their offices in and around Cabot Business Park, with night-shift and weekend crews that follow your site safety rules.",
  },
  {
    q: "How much does commercial cleaning cost in Mansfield, MA?",
    a: "Pricing depends on square footage, building type, floor surfaces, restroom count and cleaning frequency. We provide a free on-site walkthrough and a written quote for every Mansfield property before any contract is signed.",
  },
  {
    q: "How do I get a cleaning quote for my Mansfield property?",
    a: "Call (508) 304-2369 or request a quote online to schedule a free walkthrough and receive a written proposal for your Mansfield, MA building.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      "name": "Commercial Cleaning in Mansfield, MA",
      "serviceType": "Commercial Cleaning Services",
      "provider": { "@id": "https://www.enterprisecleaningcorp.com/#organization" },
      "areaServed": {
        "@type": "City",
        "name": "Mansfield",
        "containedInPlace": { "@type": "State", "name": "Massachusetts" },
      },
      "url": PAGE_URL,
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      "mainEntity": FAQS.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.enterprisecleaningcorp.com/" },
        { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.enterprisecleaningcorp.com/#service-areas" },
        { "@type": "ListItem", "position": 3, "name": "Mansfield, MA", "item": PAGE_URL },
      ],
    },
  ],
};

const linkCls = "text-[#0090c8] font-semibold hover:underline";

export default function MansfieldCityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(to right, #0090c8, #E31837, #FFE800)" }} />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[520px]">
            <div className="py-12 lg:py-16 pr-0 lg:pr-8 space-y-7">
              <div className="inline-flex items-center gap-2 text-sm font-bold text-[#0090c8] bg-[#0090c8]/8 border border-[#0090c8]/20 px-4 py-1.5 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#E31837]" />
                Mansfield, MA &bull; I-95 &amp; I-495 Corridor
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400 mb-2 sm:mb-3">City Service Hub</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black leading-[1.1] tracking-tight text-slate-900">
                  Commercial Cleaning Company<br />
                  <span className="text-[#0090c8]">in Mansfield, MA</span>
                </h1>
              </div>

              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                Enterprise Cleaning Corporation is the commercial cleaning company Mansfield businesses call for nightly janitorial, floor care, warehouse cleaning and day porter service, from Cabot Business Park to the Route 140 and School Street corridors.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#0090c8] text-[#ffffff] font-extrabold px-7 py-3.5 rounded-xl hover:bg-[#0078a8] transition-colors shadow-md shadow-[#0090c8]/25 text-base w-full sm:w-auto"
                >
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:5083042369"
                  className="inline-flex items-center justify-center gap-2 text-slate-800 font-bold px-7 py-3.5 rounded-xl hover:bg-slate-50 transition-colors border border-slate-200 text-base w-full sm:w-auto"
                >
                  <PhoneCall className="w-4 h-4 text-[#0090c8]" />
                  (508) 304-2369
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                {["97% Client Retention", "4× WBJ Award Winner", "BBB Accredited Since 2007", "23+ Years Regional"].map(chip => (
                  <span key={chip} className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0090c8]" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative block pb-8 lg:py-10">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200">
                <Image
                  src="/images/office_cleaning_hero.png"
                  alt="Commercial cleaning company in Mansfield MA cleaning an office"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl flex items-center gap-2.5 sm:gap-3 border border-slate-100">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#E31837] flex items-center justify-center shrink-0">
                    <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-extrabold text-slate-900 text-xs sm:text-sm">4× Best of Business</div>
                    <div className="text-slate-500 text-[10px] sm:text-xs">Worcester Business Journal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-slate-900 text-white py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { val: "23+", unit: "Years", label: "Regional Experience" },
              { val: "97%", unit: "", label: "Client Retention Rate" },
              { val: "4×", unit: "", label: "WBJ Best of Business" },
              { val: "24/7", unit: "", label: "Emergency Response" },
            ].map((s, i) => (
              <div key={i} className="px-4 md:px-8 py-2 text-center">
                <div className="text-2xl md:text-3xl font-black text-white">
                  {s.val}<span className="text-[#0090c8]">{s.unit}</span>
                </div>
                <div className="text-xs text-slate-400 font-semibold mt-0.5 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT MANSFIELD ─── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Built for Mansfield</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight max-w-3xl">
                A Commercial Cleaning Company Built for Mansfield&apos;s Business Community
              </h2>
            </div>
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-3 space-y-4 text-slate-600 font-medium leading-relaxed text-[0.97rem]">
                <p>
                  Mansfield sits where I-95 meets I-495, roughly halfway between Boston and Providence, and that location has turned the town into a busy hub for distribution, light manufacturing, professional offices and retail. Cabot Business Park brings warehouses, logistics operations and corporate offices together on one campus, while the Route 140, School Street and Chauncy Street corridors carry medical practices, retail centers and service businesses. Commuters on the MBTA Providence line and concert traffic heading to the Xfinity Center keep the town moving year round.
                </p>
                <p>
                  That mix means a Mansfield facility manager might need overnight floor scrubbing in a distribution building, after-hours janitorial in a professional office and daytime restroom checks in a busy retail site, sometimes all within the same portfolio. Enterprise Cleaning Corporation builds one cleaning program around each building instead of forcing every property into the same checklist.
                </p>
                <p>
                  We bring the same{" "}
                  <Link href="/office-cleaning" className={linkCls}>office cleaning</Link>,{" "}
                  <Link href="/janitorial-services" className={linkCls}>commercial janitorial services</Link> and{" "}
                  <Link href="/floor-care-services-central-ma" className={linkCls}>floor care</Link> that earned a 97% client retention rate across Massachusetts, Rhode Island and Southern New Hampshire. Every Mansfield account gets a dedicated crew, a written scope and a direct line to ownership, not a franchise call center.
                </p>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#0090c8]/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4 text-[#0090c8]" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base leading-tight">Business Areas We Serve</h3>
                  </div>
                  <p className="text-slate-500 text-xs font-medium mb-4">Commercial properties throughout Mansfield, including:</p>
                  <div className="space-y-2">
                    {[
                      { area: "Cabot Business Park", detail: "Warehouses, distribution, light industrial and corporate offices" },
                      { area: "Route 140 / Commercial Street", detail: "Offices, medical practices and service businesses" },
                      { area: "School Street & Mansfield Crossing", detail: "Retail centers, restaurants and customer-facing sites" },
                      { area: "Downtown Mansfield / North Main Street", detail: "Professional offices, municipal and small businesses" },
                    ].map((d, i) => (
                      <div key={i} className="flex gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                        <MapPin className="w-3.5 h-3.5 text-[#E31837] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-bold text-slate-800 text-xs">{d.area}</div>
                          <div className="text-slate-400 text-xs font-medium mt-0.5">{d.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Commercial Cleaning Services in Mansfield, MA
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              One accountable vendor for everything from a single office suite to a multi-building portfolio:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {(([
              { icon: Clock, title: "Office & Janitorial Cleaning", desc: "Nightly or after-hours cleaning of offices, restrooms, break rooms and common areas, scheduled around your business hours.", href: "/office-cleaning" },
              { icon: Users, title: "Day Porter Services", desc: "Daytime staff for restocking, restroom checks, spill response and lobby upkeep while your building is open.", href: "/office-cleaning" },
              { icon: Sparkles, title: "Floor & Carpet Care", desc: "Stripping, waxing, burnishing, auto-scrubbing and carpet extraction to protect flooring and keep a professional appearance.", href: "/floor-care-services-central-ma" },
              { icon: Truck, title: "Warehouse & Distribution Cleaning", desc: "Dock cleaning, aisle scrubbing and high-reach dust control for Cabot Business Park and I-495 logistics buildings.", href: "/warehouse-distribution-cleaning-central-ma" },
              { icon: CalendarCheck, title: "Post-Construction Cleaning", desc: "Rough, final and touch-up cleaning for contractors and owners bringing new or renovated space online.", href: "/post-construction-cleaning-massachusetts" },
              { icon: ShieldCheck, title: "24/7 Emergency Cleanup", desc: "Rapid response for water, flood and storm damage so your Mansfield facility can reopen quickly.", href: "/emergency-restoration-services-central-ma" },
            ]) as { icon: React.ElementType; title: string; desc: string; href: string }[]).map((svc, idx) => (
              <Link key={idx} href={svc.href} className="bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-[#0090c8]/40 hover:shadow-lg transition-all group text-left block">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-[#0090c8]/8 flex items-center justify-center mb-5 transition-colors">
                  <svc.icon className="w-6 h-6 text-[#0090c8]" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-2 group-hover:text-[#0090c8] transition-colors">{svc.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{svc.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0090c8] mt-3">
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Sectors Served</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Industries We Serve in Mansfield
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {(([
              { icon: Truck, name: "Warehouses & Distribution", desc: "Large-footprint logistics space cleaned between shifts without slowing receiving and shipping.", href: "/warehouse-distribution-cleaning-central-ma" },
              { icon: Factory, name: "Manufacturing & Light Industrial", desc: "Production floors and industrial offices cleaned around shift schedules and safety rules.", href: "/manufacturing-industrial-cleaning-central-ma" },
              { icon: Briefcase, name: "Corporate & Professional Offices", desc: "Class A and B office space where first impressions matter to clients and employees.", href: "/office-financial-cleaning-central-ma" },
              { icon: Stethoscope, name: "Medical & Dental Practices", desc: "Patient-area disinfection and after-hours cleaning for clinics and medical offices.", href: "/medical-office-cleaning" },
              { icon: GraduationCap, name: "Schools & Municipal Buildings", desc: "Occupied-building cleaning planned around school days and public use.", href: "/school-municipal-cleaning-central-ma" },
              { icon: Building2, name: "Retail & Property Management", desc: "Retail centers and multi-tenant buildings that need one vendor across the portfolio.", href: "/property-management-cleaning-central-ma" },
            ]) as { icon: React.ElementType; name: string; desc: string; href: string }[]).map((ind, idx) => (
              <Link key={idx} href={ind.href} className="flex gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-[#0090c8]/40 hover:shadow-md transition-all group text-left">
                <div className="w-11 h-11 rounded-xl bg-[#0090c8]/8 flex items-center justify-center shrink-0 group-hover:bg-[#0090c8]/15 transition-colors">
                  <ind.icon className="w-5 h-5 text-[#0090c8]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm mb-1 group-hover:text-[#0090c8] transition-colors">{ind.name}</h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">{ind.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">The Enterprise Advantage</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Why Mansfield Businesses Choose Enterprise Cleaning
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              Every Mansfield account starts with a free walkthrough and a written scope. Once service begins, the same crew learns your building, your alarm codes and your tenants, and ownership stays directly reachable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Clock, title: "23+ Years Regional Experience", text: "More than two decades serving Massachusetts, Rhode Island, and Southern New Hampshire." },
              { icon: Users, title: "97% Client Retention Rate", text: "Consistent crews and clear scopes keep clients with us year after year." },
              { icon: Trophy, title: "4× WBJ Award Winner", text: "Four-time Worcester Business Journal 'Best of Business' award winner." },
              { icon: Award, title: "BBB Accredited Since 2007", text: "Nearly two decades of ethical business practices and responsive service." },
              { icon: ShieldCheck, title: "Insured, Bonded, Background-Checked", text: "Crews are trained on your equipment, chemicals and site access rules before the first shift." },
              { icon: MapPin, title: "Between Boston & Providence", text: "Mansfield sits between our Greater Boston and Rhode Island service areas, so supervisors are close by." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#0090c8]/30 hover:shadow-md transition-all text-left group">
                <div className="w-11 h-11 rounded-xl bg-[#0090c8]/8 flex items-center justify-center mb-4 group-hover:bg-[#0090c8]/15 transition-colors">
                  <item.icon className="w-5 h-5 text-[#0090c8]" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREA + BANNER ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/office_cleaning_banner.png"
            alt="Commercial cleaning crew serving Mansfield MA businesses"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-900/75" />
        </div>

        <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto space-y-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8]">Regional Coverage</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Serving Mansfield and Surrounding Towns
            </h2>
            <div className="space-y-4 text-slate-200 font-medium leading-relaxed text-[0.97rem]">
              <p>
                Along with Mansfield, our crews serve Foxborough, Norton, Easton, Sharon, Attleboro, North Attleborough, Plainville and Wrentham. To the north we cover{" "}
                <Link href="/best-commercial-cleaning-company-norwood-ma" className="text-[#FFE800] font-bold hover:underline">Norwood</Link> and Greater Boston, and to the south{" "}
                <Link href="/commercial-cleaning-providence-ri" className="text-[#FFE800] font-bold hover:underline">Providence</Link> and the rest of Rhode Island, so multi-site companies can keep every location under one cleaning contract.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-slate-900 font-extrabold px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors shadow-lg text-sm">
                Request a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:5083042369" className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition-colors text-sm backdrop-blur-md">
                <PhoneCall className="w-4 h-4 text-[#0090c8]" />
                (508) 304-2369
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQs ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-2">Common Questions</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                Frequently Asked Questions — Mansfield, MA
              </h2>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, index) => (
                <details key={index} className="group bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#0090c8]/30 transition-colors overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-extrabold text-slate-900 hover:text-[#0090c8] transition-colors text-base">
                    <span>{faq.q}</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed text-sm border-t border-slate-200 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-3">Get Started</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Get a Free Cleaning Quote for Your Mansfield Property
              </h2>
              <p className="text-slate-500 font-medium mt-4 leading-relaxed">
                Schedule a free, no-obligation walkthrough with the commercial cleaning company Mansfield businesses trust. Call (508) 304-2369 or request a quote online to receive a written proposal built around your building, schedule and budget.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E31837] text-white font-extrabold px-8 py-4 rounded-xl hover:bg-[#c1122c] transition-colors shadow-lg shadow-[#E31837]/25 text-base"
              >
                Get a Free Mansfield Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:5083042369"
                className="inline-flex items-center gap-2 text-slate-800 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200 text-base"
              >
                <PhoneCall className="w-4 h-4 text-[#0090c8]" />
                (508) 304-2369
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
