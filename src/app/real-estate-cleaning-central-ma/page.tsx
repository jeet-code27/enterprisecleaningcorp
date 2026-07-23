import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, PhoneCall, ShieldCheck, Clock, Building2, 
  MapPin, Trophy, Users,
  ArrowRight, CheckCircle2,
  CalendarCheck,
  Briefcase,
  Key,
  Home,
  Camera,
  Sparkles,
  ShieldAlert,
  SprayCan
} from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";
import { RelatedServices } from "@/components/ui/related-services";

export const metadata: Metadata = {
  title: { absolute: "Real Estate Cleaning Services | Central MA, RI & Southern NH" },
  description: "Listing-ready cleaning for real estate agents, brokers & developers — vacant properties, staging prep, open houses & closings across Central MA, RI & NH.",
  keywords: "commercial real estate cleaning Central MA, property showing cleaning services, real estate agency cleaners Worcester, commercial open house cleaning",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/real-estate-cleaning-central-ma"
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
  "serviceType": "Real Estate Cleaning Services",
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
  "description": "Listing, staging, showing, and closing-ready cleaning for real estate agents, brokers, developers, and property owners across Central Massachusetts, Rhode Island, and Southern New Hampshire.",
  "url": "https://www.enterprisecleaningcorp.com/real-estate-cleaning-central-ma"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you clean vacant properties before they go on the market?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide full top-to-bottom vacant property cleaning so a listing shows well from its very first photos and showing."
      }
    },
    {
      "@type": "Question",
      "name": "Can you turn around a listing quickly before a showing or open house?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We prioritize fast turnaround for real estate requests, including quick pre-showing and open house touch-ups on short notice."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide cleaning for new construction and model homes for builders and developers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We clean new construction, condo developments, and model units for builders and developers marketing new properties across the region."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work directly with real estate agents and brokerages, not just property owners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many of our real estate clients are individual agents and brokerages who keep us on call for every listing, not just individual homeowners."
      }
    },
    {
      "@type": "Question",
      "name": "Can you handle move-out cleaning after a closing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide post-closing move-out cleaning so a new buyer or tenant takes possession of a genuinely clean space."
      }
    },
    {
      "@type": "Question",
      "name": "Do you serve real estate professionals in Rhode Island and Southern New Hampshire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide real estate cleaning services throughout Rhode Island, including Providence and Cranston, and Southern New Hampshire, including Manchester and Nashua, in addition to Central Massachusetts."
      }
    },
    {
      "@type": "Question",
      "name": "Can you coordinate cleaning around a specific listing or closing date?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We work directly with agents, brokers, and developers to schedule cleaning around listing dates, showings, and closing timelines."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer staging-prep cleaning to make a vacant home show-ready?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide detailed staging-prep cleaning ahead of furniture delivery so a staged home sits in a genuinely spotless space."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in a pre-listing deep clean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A pre-listing clean covers kitchens, bathrooms, floors, windows, dusting throughout, and removal of any items or debris left behind, so the property is fully photo- and showing-ready."
      }
    },
    {
      "@type": "Question",
      "name": "How do I schedule cleaning for a listing or closing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call (508) 890-1000 or request a free quote online with your listing or closing date, and we will confirm a cleaning window that fits your timeline."
      }
    }
  ]
};

export default function RealEstateCleaningPage() {
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

      {/* Hero Section - Soft UI Style matching other Industry pages */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50">
        {/* Abstract shapes for a soft feel */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0090c8]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00B8FF]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content */}
            <div className="flex-1 space-y-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#0090c8]/20 text-sm font-bold tracking-wide text-[#0090c8]">
                <Home className="w-4 h-4 text-[#E31837]" />
                INDUSTRIES WE SERVE
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900">
                Real Estate & Commercial<br/>
                <span className="text-[#0090c8]">Property Cleaning Services</span>
              </h1>
              
              <p className="text-lg text-slate-600 font-medium leading-relaxed text-left">
                In real estate, a listing is judged in the first thirty seconds a buyer walks through the door — and a dusty vacant property or a lobby that looks tired ahead of an open house can cost an agent the sale before a single word is spoken.
              </p>

              <p className="text-lg text-slate-600 font-medium leading-relaxed text-left">
                Enterprise Cleaning Corporation partners with real estate agents, brokers, developers, and property owners across Central Massachusetts, Rhode Island, and Southern New Hampshire to make sure every listing, showing, and closing is backed by a space that shows as well as it photographs.
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
                  src="/images/real_estate_hero.png" 
                  alt="Pristine interior real estate cleaning for listings and commercial properties in Central MA" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
              
              {/* Floating Status Badge */}
              <div className="absolute -left-6 bottom-12 bg-white rounded-2xl p-5 shadow-xl border border-slate-100 flex items-center gap-4 animate-float">
                <div className="w-12 h-12 rounded-full bg-[#E31837]/10 flex items-center justify-center shrink-0">
                  <Key className="w-6 h-6 text-[#E31837]" />
                </div>
                <div>
                  <div className="text-slate-900 font-extrabold">Listing-Ready</div>
                  <div className="text-slate-500 text-xs font-medium">Fast turnarounds for agents</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Full-Service Cleaning for Every Stage of a Listing */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0090c8] mb-6">Full-Service Cleaning for Every Stage of a Listing</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Real estate cleaning is not one task — it is a series of moments across the life of a listing, and each one calls for something different. Our programs typically include:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-6xl mx-auto">
            {[
              { icon: Home, text: "Vacant property top-to-bottom cleaning before photo shoot or listing." },
              { icon: Sparkles, text: "Detailed staging-prep cleaning ahead of home stager & furniture delivery." },
              { icon: Clock, text: "Pre-showing and open house quick-reset touch-ups on short notice." },
              { icon: Key, text: "Post-closing move-out cleaning for incoming buyers or tenants." },
              { icon: Building2, text: "New construction, condo development, and model unit cleaning." },
              { icon: Camera, text: "Photography-prep detailing: streak-free windows, mirrors & fixtures." },
              { icon: Briefcase, text: "Commercial real estate suite turnover and lobby detailing." },
              { icon: SprayCan, text: "Deep sanitization of kitchens, bathrooms, and high-touch points." },
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
                  One Partner for Agents, <span className="text-[#0090c8]">Brokers & Developers</span>
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-left">
                  <p>
                    Whether you are an individual agent preparing a single listing or a brokerage or development firm managing dozens of properties at once, coordinating cleaning across every listing can quietly eat into time that should go toward selling.
                  </p>
                  <p>
                    We work directly with agents, brokerages, and developers as a standing cleaning partner, so a listing is never delayed or shown in a compromised state because cleaning fell through the cracks. Many of our real estate clients start with a single vacant-property clean and keep us on call for every listing that follows.
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
                    <p className="text-slate-500 font-medium">Built on speed and dependability</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#E31837] flex items-center justify-center text-white">
                    <CalendarCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Fast Turnaround</h3>
                    <p className="text-slate-500 font-medium">Flexible scheduling around tight listing dates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-[#0090c8] text-white p-10 rounded-3xl shadow-xl border-l-8 border-[#E31837]">
                <div className="flex items-center gap-4 mb-6">
                  <ShieldCheck className="w-10 h-10 text-[#FFE800]" />
                  <h3 className="text-2xl font-bold">Listing-Ready Standards</h3>
                </div>
                <p className="text-white/90 leading-relaxed text-lg font-medium text-left">
                  A property that is merely clean is not the same as a property that is listing-ready. Our teams are trained to catch the details that matter specifically for real estate — streak-free windows and mirrors for photography, spotless kitchens and bathrooms, dust-free surfaces throughout, and a neutral, fresh feel that lets a buyer picture themselves in the space.
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  Coordinating Around Staging & <span className="text-[#E31837]">Photography</span>
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-left">
                  <p>
                    Professional listing photos and virtual tours are usually scheduled within a narrow window of a property being cleaned, staged, and ready. A cleaning that runs late can push back the photographer, the marketing launch, and the first weekend of showings.
                  </p>
                  <p>
                    We work directly with staging companies, agents, and photographers to sequence our cleaning around the staging timeline, so the finished result is a home that is both beautifully staged and genuinely clean underneath, showing the space at its absolute best.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Trust Banner — Full Image Style matching other Industry pages */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/real_estate_banner.png"
            alt="Real estate properties and commercial listings in Central MA, RI & NH"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003057]/60 via-[#0090c8]/40 to-[#001220]/60" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FFE800] font-bold tracking-widest uppercase text-sm mb-6 backdrop-blur-md">
              Serving Real Estate Professionals Across Central MA, RI & NH
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
              Listing-Ready Cleaning Built For Real Estate Success
            </h2>
            <p className="text-lg text-white/90 font-medium leading-relaxed max-w-4xl mx-auto text-left drop-shadow-md">
              From Worcester, Shrewsbury, Auburn, Holden, Westborough, and Marlborough to Providence RI and Southern NH, we keep real estate properties pristine. We bring 97% client retention, four Worcester Business Journal “Best of Business” awards, and BBB accreditation since 2007 to every listing and serve Massachusetts, Rhode Island, and New Hampshire.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Key, stat: "Fast", label: "Turnaround Time", sub: "Flexible & responsive" },
              { icon: Trophy, stat: "4×", label: "Best of Business", sub: "Worcester Business Journal" },
              { icon: Users, stat: "97%", label: "Client Retention Rate", sub: "Industry-leading" },
              { icon: MapPin, stat: "Central MA", label: "Local Partner", sub: "Serving MA, RI & NH" },
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
              <p className="text-slate-600 font-medium">Common questions about our real estate cleaning services.</p>
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
      
      <RelatedServices serviceIds={["turnover", "post-construction", "emergency"]} />
      <CTASection
        className="bg-white border-t border-slate-100"
        title="Ready to List?"
        action={{
          text: "Schedule Real Estate Cleaning",
          href: "/contact",
          variant: "destructive",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed text-center">
            Make sure your listing shows as well as it photographs. We prioritize fast turnaround for real estate requests.
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
                <chip.icon className="w-4 h-4 text-[#0090c8]" />
                {chip.text}
              </div>
            ))}
          </div>
        </div>
      </CTASection>
    </>
  );
}
