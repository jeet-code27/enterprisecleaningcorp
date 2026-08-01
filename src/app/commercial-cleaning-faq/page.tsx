import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  HelpCircle,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Users,
  Award,
  ChevronRight,
  FileCheck
} from "lucide-react";
import FAQAccordionList from "@/app/commercial-cleaning-faq/faq-client";

export const metadata: Metadata = {
  title: { absolute: "Commercial Cleaning FAQs | Enterprise Cleaning Corporation" },
  description: "Answers to the questions facility managers and office decision-makers ask before hiring a commercial cleaning company. Serving Central MA, RI, and Southern NH.",
  keywords: "Commercial cleaning FAQ, office cleaning questions, facility manager FAQ, commercial janitorial FAQ, Enterprise Cleaning Corporation questions, Worcester commercial cleaning FAQ",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-faq",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Enterprise Cleaning Corporation licensed and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Enterprise Cleaning Corporation carries general liability insurance and can provide a current certificate of insurance before your service starts. If your building or property management company requires specific coverage limits or additional insured status, just let us know when we quote your account."
      }
    },
    {
      "@type": "Question",
      "name": "Do you run background checks on your cleaning staff?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every member of our cleaning staff goes through a screening process before being placed on an account. Because our crews are in your building after hours, often without anyone else on site, we treat staff vetting as a basic requirement, not an extra."
      }
    },
    {
      "@type": "Question",
      "name": "Is our cleaning crew made up of your direct employees, or do you use subcontractors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your account is staffed and managed directly by Enterprise Cleaning. Steve and Julio, the company's owners, are personally involved in staffing and account oversight, so you're not routed through a rotating subcontractor network or a call center."
      }
    },
    {
      "@type": "Question",
      "name": "How do you keep the same crew on our account instead of rotating staff?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Consistent staffing comes from direct owner involvement. Because Steve and Julio are hands-on with account management, they can address staffing issues quickly instead of letting a crew turn over quietly, which is part of why Enterprise Cleaning maintains a 97% client retention rate."
      }
    },
    {
      "@type": "Question",
      "name": "Can you provide references from businesses similar to ours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Enterprise Cleaning has worked with regional organizations such as MacIntire Insurance and the Worcester Club, and we're glad to connect you with clients in your industry or of similar size so you can ask about their experience directly."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in your nightly commercial cleaning service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nightly service typically covers trash and recycling removal, restroom cleaning and restocking, breakroom cleaning, vacuuming and floor care, dusting, and cleaning of common areas and entryways. We build the exact scope around your building's layout and hours during your walkthrough."
      }
    },
    {
      "@type": "Question",
      "name": "Can you build a custom cleaning program, or is it a standard checklist for every building?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every facility gets a program built around its own traffic patterns, industry, and schedule. A medical office, a manufacturing floor, and a corporate headquarters all have different needs, and we scope your service accordingly rather than applying one generic checklist."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer daytime coverage in addition to nightly cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. In addition to nightly janitorial service, we offer day porter coverage for lobbies, restrooms, conference rooms, and other high-traffic common areas that need attention during business hours."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle communication if something comes up outside our regular schedule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You get a direct line to the people who run the company. With Enterprise Cleaning, you have Steve and Julio's direct contact information, not a ticket number in a franchise system, so issues get addressed by someone who can actually make a decision."
      }
    },
    {
      "@type": "Question",
      "name": "Can you coordinate cleaning across multiple buildings or a full office park?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We serve corporate campuses and multi-building office parks across Central Massachusetts, Rhode Island, and Southern New Hampshire, and we can coordinate scheduling and staffing across all your locations so standards stay consistent building to building."
      }
    },
    {
      "@type": "Question",
      "name": "Do you have experience cleaning facilities like ours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enterprise Cleaning serves manufacturing and industrial facilities, medical and healthcare offices, corporate and financial offices, schools and municipal buildings, property management portfolios, and warehouses and distribution centers, so we've likely worked with a facility similar to yours already."
      }
    },
    {
      "@type": "Question",
      "name": "Do you use environmentally friendly cleaning products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We can build your program around environmentally friendly products and practices on request. If a specific certification or standard matters to your organization's sustainability goals, tell us during the walkthrough and we'll confirm what we can accommodate."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if we're not satisfied with the service after we sign a contract?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You raise it directly with ownership and it gets fixed. Enterprise Cleaning's 97% client retention rate reflects accounts that stay long term specifically because problems get resolved quickly rather than passed along a chain of managers."
      }
    },
    {
      "@type": "Question",
      "name": "How is Enterprise Cleaning different from a national franchise cleaning company?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With a franchise, you're often one account among many routed through a central system. With Enterprise Cleaning, you work directly with owners Steve Buchalter and Julio Biage. The company has more than two decades of experience, has won the Worcester Business Journal Best of Business award four times, and has been BBB accredited since 2007."
      }
    }
  ]
};

export default function CommercialCleaningFAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-slate-900 text-white overflow-hidden border-b-4 border-[#E31837]">
        <div className="absolute inset-0 bg-[radial-gradient(#00B8FF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#00B8FF]">Commercial Cleaning FAQs</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-[#00B8FF] text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
              <HelpCircle className="w-4 h-4 text-[#FFE800]" />
              Facility & Office Decision-Maker Resource
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Frequently Asked Questions for Commercial and Office Clients
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8">
              Hiring a commercial cleaning company is a bigger decision than it looks. Your cleaning crew has access to your building after hours, represents your company to every employee and visitor who walks in, and directly affects how your facility runs day to day. Below are the questions facility managers, office managers, and property management teams ask most often before signing a cleaning contract, answered directly by Enterprise Cleaning Corporation.
            </p>

            {/* Target Audience Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Target Audience:</span>
              {[
                "Facility Managers",
                "Office Managers",
                "Property Managers",
                "Corporate Campus Decision-Makers"
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/10 text-white border border-white/15 px-3 py-1 rounded-full"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00B8FF]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Highlights Section */}
      <section className="py-6 sm:py-8 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 min-w-0">
              <div className="p-2.5 rounded-lg bg-[#00B8FF]/10 text-[#00B8FF] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">Licensed & Insured</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight mt-0.5 break-words">COI Provided Prior to Service</p>
              </div>
            </div>

            <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 min-w-0">
              <div className="p-2.5 rounded-lg bg-[#E31837]/10 text-[#E31837] shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">Owner Managed</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight mt-0.5 break-words">No Subcontractors or Rotations</p>
              </div>
            </div>

            <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 min-w-0">
              <div className="p-2.5 rounded-lg bg-[#FFE800]/20 text-slate-900 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">97% Client Retention</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight mt-0.5 break-words">23+ Years in Central MA</p>
              </div>
            </div>

            <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 min-w-0">
              <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">BBB Accredited</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight mt-0.5 break-words">4× WBJ Best of Business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive FAQ Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FAQAccordionList />
          </div>
        </div>
      </section>

      {/* Direct Contact / CTA Section */}
      <section className="py-16 md:py-20 bg-slate-900 text-white border-t-4 border-[#00B8FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00B8FF_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E31837] text-white text-xs font-extrabold uppercase tracking-wider">
              Have More Questions?
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Speak Directly with Owners Steve & Julio
            </h2>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We provide free, detailed on-site walkthroughs for facilities across Central Massachusetts, Rhode Island, and Southern New Hampshire. Get a custom proposal built around your exact layout, schedule, and security requirements.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E31837] text-white font-extrabold px-8 py-4 rounded-xl hover:bg-[#c1122c] transition-colors shadow-lg shadow-[#E31837]/30 text-base"
              >
                Schedule a Free Walkthrough <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:5088901000"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-colors border border-white/20 text-base"
              >
                <PhoneCall className="w-5 h-5 text-[#FFE800]" />
                Call (508) 890-1000
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-6 text-xs text-slate-400">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00B8FF]" /> Free Written Proposal</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00B8FF]" /> No Obligation</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00B8FF]" /> Direct Owner Contact</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
