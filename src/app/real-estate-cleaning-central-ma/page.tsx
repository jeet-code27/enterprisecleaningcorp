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
  Sparkles
} from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";
import { RelatedServices } from "@/components/ui/related-services";

export const metadata: Metadata = {
  title: { absolute: "Real Estate Cleaning Services | Central MA, RI & Southern NH" },
  description: "Listing-ready cleaning for real estate agents, brokers & developers — vacant properties, staging prep, open houses & closings across Central MA, RI & NH.",
  keywords: "commercial real estate cleaning Central MA, property showing cleaning services, real estate agency cleaners Worcester, commercial open house cleaning",
  alternates: {
    canonical: "https://enterprisecleaningcorp.com/real-estate-cleaning-central-ma"
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
  "url": "https://enterprisecleaningcorp.com/real-estate-cleaning-central-ma"
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

      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center pt-24 pb-20 overflow-hidden" style={{ background: "#0090c8" }}>
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/real_estate_hero.png" 
            alt="Pristine interior real estate cleaning" 
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
                <Link href="/services" className="hover:text-white transition-colors">Industries We Serve</Link>
                <ChevronRight className="w-4 h-4 text-[#FFE800]" />
                <span className="text-white font-bold tracking-wide">Real Estate</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] drop-shadow-md">
                Real Estate Cleaning Services<br/>
                <span className="text-[#FFE800] text-3xl md:text-4xl lg:text-5xl">in Central MA, RI & Southern NH</span>
              </h1>
              
              <div className="text-base md:text-lg text-white/95 font-medium max-w-2xl leading-relaxed mt-6 drop-shadow-sm space-y-4 text-left">
                <p>
                  In real estate, a listing is judged in the first thirty seconds a buyer walks through the door — and a dusty vacant property or a lobby that looks tired ahead of an open house can cost an agent the sale before a single word is said.
                </p>
                <p>
                  Enterprise Cleaning Corporation partners with real estate agents, brokers, developers, and property owners across Central Massachusetts, Rhode Island, and Southern New Hampshire to make sure every listing, showing, and closing is backed by a space that shows as well as it photographs.
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
                  <Trophy className="w-8 h-8 text-[#FFE800]" />
                  <div>
                    <div className="font-bold text-lg">4×</div>
                    <div className="text-xs text-white/90">Best of Business</div>
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
                  <Home className="w-7 h-7 text-[#00B8FF]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  Listing-Ready Accountability
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
                  <p className="text-xs text-slate-400 mt-3 font-medium text-left">
                    Real estate moves on tight, often unpredictable timelines. We built our real estate cleaning program around that reality, with the same accountability that has earned us BBB accreditation since 2007.
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
            <h2 className="text-3xl font-bold text-[#0090c8] mb-6">Full-Service Cleaning for Every Stage of a Listing</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Real estate cleaning is not one task — it is a series of moments across the life of a listing, and each one calls for something different. Our program covers:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-[#00B8FF] shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block mb-1">Vacant property cleaning</strong>
                <span className="text-slate-700 font-medium leading-relaxed">A full top-to-bottom clean before a property is photographed or listed, so it shows well from the very first online search.</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-[#00B8FF] shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block mb-1">Staging-prep cleaning</strong>
                <span className="text-slate-700 font-medium leading-relaxed">Detailed cleaning ahead of a home stager or furniture delivery, so the finished staging sits in a spotless space.</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-[#00B8FF] shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block mb-1">Pre-showing and open house touch-ups</strong>
                <span className="text-slate-700 font-medium leading-relaxed">A quick, thorough reset before buyers walk through, addressing dust, fingerprints, and anything left behind by the last showing.</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-[#00B8FF] shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block mb-1">Post-closing move-out cleaning</strong>
                <span className="text-slate-700 font-medium leading-relaxed">A full clean once the previous owner or tenant has moved out, so the new buyer or renter takes possession of a genuinely clean space.</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 lg:col-span-2 max-w-2xl mx-auto w-full">
              <CheckCircle2 className="w-6 h-6 text-[#00B8FF] shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block mb-1">New construction and model unit cleaning</strong>
                <span className="text-slate-700 font-medium leading-relaxed">Post-construction and ongoing cleaning for builders and developers marketing new homes, condos, and model units.</span>
              </div>
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
                  One Partner for Agents, Brokers & Developers
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

              <div className="bg-[#003057] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00B8FF]/20 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <CalendarCheck className="w-6 h-6 text-[#FFE800]" />
                    </div>
                    <h3 className="text-xl font-bold">Fast Turnaround for Tight Deadlines</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed font-medium text-left">
                    Real estate rarely gives much notice. A property can go under agreement and need a move-out clean within days, or a broker can add a home to the market with a showing scheduled for the following morning. We prioritize fast turnaround for real estate requests specifically because we understand that a delayed clean can mean a delayed listing, a rescheduled showing, or a buyer walking through a space that is not ready to sell itself.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="order-2 lg:order-1 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0090c8]/10 flex items-center justify-center">
                    <Camera className="w-6 h-6 text-[#0090c8]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Coordinating Around Photography</h3>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium text-left mb-4">
                  Professional listing photos and virtual tours are usually scheduled within a narrow window of a property being cleaned, staged, and ready — and a cleaning that runs late can push back the photographer, the marketing launch, and the first weekend of showings.
                </p>
                <p className="text-slate-600 leading-relaxed font-medium text-left">
                  We coordinate directly with agents and photographers to make sure the property is fully cleaned before the camera ever comes out, so the listing photos that will drive buyer interest for the life of the listing show the space at its absolute best.
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  Listing-Ready Standards, Every Time
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-left">
                  <p>
                    A property that is merely clean is not the same as a property that is listing-ready. Our teams are trained to catch the details that matter specifically for real estate — streak-free windows and mirrors for photography, spotless kitchens and bathrooms since buyers judge a home on both.
                  </p>
                  <p>
                    We ensure dust-free surfaces throughout since vacant homes collect it quickly, and a neutral, fresh feel that lets a buyer picture themselves in the space rather than noticing the space itself.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  Working Alongside Home Stagers
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-left">
                  <p>
                    When a listing is being professionally staged, cleaning has to happen on a precise schedule relative to the stager's arrival — the space needs to be spotless before furniture and decor go in, and it needs to stay that way through the first open house.
                  </p>
                  <p>
                    We work directly with staging companies and agents to sequence our cleaning around the staging timeline, so the finished result is a home that is both beautifully staged and genuinely clean underneath, not just clean where the furniture happens to be placed. That coordination extends through the life of the listing, with touch-up cleans available between showings.
                  </p>
                </div>
              </div>

              <div className="bg-[#00B8FF]/10 text-slate-900 p-8 rounded-3xl border border-[#00B8FF]/30 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <Sparkles className="w-6 h-6 text-[#0090c8]" />
                  </div>
                  <h3 className="text-xl font-bold">Backed by a Full-Service Company</h3>
                </div>
                <p className="text-slate-700 leading-relaxed font-medium text-left">
                  Because Enterprise Cleaning also operates a full emergency response division, agents and property owners who discover water damage or mold during a listing preparation have a single partner who can handle both the cleaning and the cleanup, rather than scrambling to find a second vendor mid-transaction.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Custom Service Area Banner - Real Estate Edition */}
      <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #0090c8 0%, #00A8E8 50%, #00B8FF 100%)" }}>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[#FFE800] font-bold tracking-widest uppercase text-sm mb-4">Our Service Area</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Serving Central Massachusetts, Rhode Island & Southern New Hampshire
            </h2>
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-4xl mx-auto text-left">
              We provide real estate cleaning services throughout Worcester, Shrewsbury, Auburn, Holden, Westborough, Marlborough, and the surrounding Central Massachusetts region, as well as across Rhode Island — including Providence, Cranston, and Pawtucket — and Southern New Hampshire, including Nashua, Manchester, and Salem. For brokerages and development firms operating across all three states, that means one trusted cleaning partner can support every listing in the portfolio, regardless of which market it happens to be in.
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0090c8]/80 via-transparent to-transparent z-10" />
            <Image
              src="/images/real_estate_banner.png"
              alt="Real estate properties in Central MA, RI & NH"
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
              <p className="text-slate-600 font-medium">Common questions about our real estate cleaning services.</p>
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
