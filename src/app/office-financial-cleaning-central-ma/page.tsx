import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  PhoneCall, ShieldCheck, Clock, 
  ArrowRight, Briefcase, Building2, Users, 
  Trophy, MapPin, CheckCircle2, ShieldAlert,
  Coffee, Sparkles, SprayCan, Laptop
} from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";
import { RelatedServices } from "@/components/ui/related-services";

export const metadata: Metadata = {
  title: { absolute: "Office & Bank Cleaning Worcester & Central MA" },
  description: "Professional cleaning for corporate offices, banks, and financial institutions across Worcester and Central Massachusetts. Discreet, reliable, 97% retention.",
  keywords: "commercial office cleaning Central MA, financial institution janitorial services, bank cleaning Worcester, corporate office cleaners, commercial cleaning services",
  alternates: {
    canonical: "https://enterprisecleaningcorp.com/office-financial-cleaning-central-ma"
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
  "name": "Corporate Offices & Financial Institutions — Enterprise Cleaning Corporation",
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
  "url": "https://enterprisecleaningcorp.com/office-financial-cleaning-central-ma"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you clean offices after business hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Most office and financial clients are serviced after hours so cleaning never disrupts the workday, with optional day porter coverage during business hours for client-facing areas."
      }
    },
    {
      "@type": "Question",
      "name": "Can you clean bank branches and secure financial facilities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We staff financial accounts with reliable, vetted crews and provide the discretion and consistency that secure environments require."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide the same crew each visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Crew continuity is part of how we work, which matters especially in secure financial environments and is a key driver of our 97% retention rate."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas do you serve for office and financial cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve corporate offices and financial institutions throughout Worcester and Central Massachusetts, and across Rhode Island and New Hampshire."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get an office cleaning quote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call (508) 890-1000 or request a free on-site assessment, and we will tailor a program to your workplace."
      }
    }
  ]
};

export default function OfficeCleaningPage() {
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

      {/* Hero Section - Soft UI Style matching Medical/Industrial */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50">
        {/* Abstract shapes for a soft feel */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0090c8]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00B8FF]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content */}
            <div className="flex-1 space-y-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#0090c8]/20 text-sm font-bold tracking-wide text-[#0090c8]">
                <Briefcase className="w-4 h-4 text-[#E31837]" />
                INDUSTRIES WE SERVE
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900">
                Corporate Office &<br/>
                <span className="text-[#0090c8]">Financial Institution Cleaning</span>
              </h1>
              
              <p className="text-lg text-slate-600 font-medium leading-relaxed text-left">
                A clean, well-maintained office says everything about a company before a single word is spoken. For corporate offices, banks, credit unions, and financial institutions, the cleanliness of your space reflects directly on your professionalism, your attention to detail, and the trust clients place in you. Enterprise Cleaning Corporation keeps office and financial environments across Central Massachusetts looking sharp, professional, and welcoming.
              </p>

              <p className="text-lg text-slate-600 font-medium leading-relaxed text-left">
                We already serve respected institutions in the region — our client history includes financial and professional organizations that demand discretion and consistency. We bring that same standard to every office we clean.
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
                  src="/images/office_cleaning_hero.png" 
                  alt="Professional corporate office cleaning in a clean, bright, modern corporate boardroom in Central MA" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
              
              {/* Floating Status Badge */}
              <div className="absolute -left-6 bottom-12 bg-white rounded-2xl p-5 shadow-xl border border-slate-100 flex items-center gap-4 animate-float">
                <div className="w-12 h-12 rounded-full bg-[#E31837]/10 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-6 h-6 text-[#E31837]" />
                </div>
                <div>
                  <div className="text-slate-900 font-extrabold">Discreet & Secure</div>
                  <div className="text-slate-500 text-xs font-medium">Vetted professional crews</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Cleaning Tailored to Professional Workplaces (Services List - Soft Style) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0090c8] mb-6">Cleaning Tailored to Professional Workplaces</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Corporate and financial environments need cleaning that is thorough, discreet, and dependable. Our programs typically include:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-6xl mx-auto">
            {[
              { icon: Laptop, text: "Workstation, office, and cubicle cleaning and dusting." },
              { icon: Users, text: "Conference and meeting room cleaning and reset." },
              { icon: Building2, text: "Reception, lobby, and client-facing area detailing." },
              { icon: ShieldCheck, text: "Restroom cleaning, sanitizing, and restocking." },
              { icon: Coffee, text: "Breakroom and kitchen cleaning." },
              { icon: SprayCan, text: "Disinfecting of high-touch surfaces and shared equipment." },
              { icon: Sparkles, text: "Carpet and hard-floor care." },
              { icon: Clock, text: "Day porter coverage for client-facing financial branches." },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-[#0090c8]/5 transition-colors border border-slate-100 hover:border-[#0090c8]/30 group">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-[#0090c8]" />
                </div>
                <p className="text-slate-700 font-medium leading-relaxed pt-3 text-left">
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
                  Discretion and Security <span className="text-[#0090c8]">Built In</span>
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-left">
                  <p>
                    Banks and financial institutions handle sensitive information and secure areas. We staff these accounts with reliable, vetted crews and back them with supervision and accountability. Because we manage our own people, you get a consistent, trusted team — not a rotating cast of unfamiliar faces moving through your secure space.
                  </p>
                  <p>
                    That trust is the foundation of our business. Our 97% client retention rate tells professional buyers what they need to know: our clients do not leave, because they do not have a reason to. Many office and financial clients start with nightly janitorial service and expand into floor care, window cleaning, and day porter coverage.
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
                    <ShieldAlert className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Secure Environments</h3>
                    <p className="text-slate-500 font-medium">Reliable, vetted crews you can trust</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-[#0090c8] text-white p-10 rounded-3xl shadow-xl border-l-8 border-[#E31837]">
                <div className="flex items-center gap-4 mb-6">
                  <Briefcase className="w-10 h-10 text-[#FFE800]" />
                  <h3 className="text-2xl font-bold">Healthier Workspaces</h3>
                </div>
                <p className="text-white/90 leading-relaxed text-lg font-medium text-left">
                  A clean office is also a more productive and healthier one. Employees do their best work in a clean, organized environment, and regular disinfection of shared surfaces helps reduce the illness and absenteeism that quietly cost businesses time and money. The investment in professional cleaning pays back not only in appearance, but in the wellbeing and output of the people who work there every day.
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  Cleanliness That Reflects <span className="text-[#E31837]">Your Brand</span>
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-left">
                  <p>
                    For professional service firms, banks, and corporate offices, the workplace is part of the brand. Clients, partners, and recruits form impressions the moment they walk through the door, and a spotless, well-maintained environment communicates the same competence and attention to detail you bring to your work. A neglected one quietly undermines it. We help professional organizations across Central Massachusetts make sure their space always tells the right story.
                  </p>
                  <p>
                    What sets us apart for office and financial clients is consistency and discretion. The same trusted, supervised crew services your space, respects your security and confidentiality, and holds to a consistent standard you never have to chase. That dependability is exactly what professional buyers value most — and it is the reason our clients stay with us year after year.
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
            src="/images/office_cleaning_banner.png"
            alt="High-end modern bank branch or corporate lobby in Central Massachusetts"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#003057]/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0090c8]/90 via-[#003057]/80 to-[#001220]/90" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FFE800] font-bold tracking-widest uppercase text-sm mb-6 backdrop-blur-md">
              Serving Offices & Financial Institutions Across Central MA
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
              Professional Cleaning That Tells The Right Story
            </h2>
            <p className="text-lg text-white/90 font-medium leading-relaxed max-w-4xl mx-auto text-left drop-shadow-md">
              From downtown Worcester office towers to suburban business parks and bank branches across Central MA, we keep professional workplaces immaculate. We serve Worcester, Shrewsbury, Auburn, Holden, Westborough, Marlborough, and the wider region. We bring 97% client retention, four Worcester Business Journal “Best of Business” awards, and BBB accreditation since 2007 to every contract and serve Massachusetts, Rhode Island, and New Hampshire.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: ShieldCheck, stat: "Discreet", label: "Secure Environments", sub: "Vetted professionals" },
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
              <p className="text-slate-600 font-medium">Common questions about our corporate office and financial institution cleaning services.</p>
            </div>
            
            <div className="space-y-6">
              {structuredDataFAQ.mainEntity.map((faq, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-[#0090c8]/30 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                    <span className="text-[#0090c8] shrink-0 mt-0.5 text-xl">Q:</span>
                    {faq.name}
                  </h3>
                  <p className="text-slate-600 pl-8 leading-relaxed font-medium text-left">
                    <span className="font-bold text-slate-400 mr-2">A:</span>
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <RelatedServices serviceIds={["nightly", "floor", "turnover"]} />
      <CTASection
        className="bg-slate-50 border-t border-slate-200"
        title="Ready to Elevate Your Workplace Environment?"
        action={{
          text: "Request On-Site Assessment",
          href: "/contact",
          variant: "default",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed text-left">
            Call (508) 890-1000 today, and we will design a comprehensive cleaning program that reflects the professionalism of your brand.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 animate-appear delay-100">
            {[
              { icon: ShieldCheck, text: "Vetted Professionals" },
              { icon: Briefcase, text: "Discreet Service" },
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
