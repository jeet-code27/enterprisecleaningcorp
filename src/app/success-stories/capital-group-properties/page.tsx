import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  CheckCircle2, 
  Quote, 
  ArrowLeft, 
  Sparkles, 
  ShieldCheck, 
  Award,
  Building2
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Capital Group Properties Success Story | Enterprise Cleaning Corp" },
  description: "Learn how Enterprise Cleaning Corp provides reliable property management cleaning services across 10+ Capital Group Properties facilities with a dedicated team.",
  keywords: [
    "Capital Group Properties cleaning",
    "property management janitorial services MA",
    "commercial facility cleaning New England",
    "last minute emergency cleaning MA",
    "multi-facility property cleaning"
  ],
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/success-stories/capital-group-properties",
  },
  openGraph: {
    title: "Capital Group Properties Success Story | Enterprise Cleaning Corp",
    description: "Learn how Enterprise Cleaning Corp provides reliable property management cleaning services across 10+ Capital Group Properties facilities with a dedicated team.",
    url: "https://www.enterprisecleaningcorp.com/success-stories/capital-group-properties",
    type: "article",
  },
};

export default function CapitalGroupPropertiesSuccessStoryPage() {
  return (
    <div className="min-h-screen bg-slate-100 py-8 md:py-12">
      {/* Top Controls Bar */}
      <div className="container mx-auto px-4 max-w-4xl mb-6">
        <Link
          href="/success-stories"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-[#003057] font-semibold text-sm transition-colors bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Success Stories</span>
        </Link>
      </div>

      {/* Main Document Card */}
      <div className="container mx-auto px-4 max-w-4xl">
        <article className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden p-6 sm:p-10 md:p-12 relative">
          
          {/* Top Border Accent */}
          <div className="h-3 w-full bg-gradient-to-r from-[#003057] via-[#00B8FF] to-[#E31837] absolute top-0 left-0 right-0" />

          {/* Header Section */}
          <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 mb-8 border-b-2 border-slate-100">
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-xs">
                <Image
                  src="/images/ecc-new-logo.png"
                  alt="Enterprise Cleaning Corp"
                  width={210}
                  height={65}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block text-xs text-slate-400 border-l border-slate-200 pl-4 py-1">
                <p className="font-bold text-slate-700 uppercase tracking-wider">Customer Success Story</p>
                <p>Property Management & Commercial Cleaning</p>
              </div>
            </div>

            <div className="bg-[#002244] border border-[#001a33] p-3 px-5 rounded-2xl flex items-center justify-center self-end sm:self-center shadow-xs">
              <Image
                src="/logos/capital-group.png"
                alt="Capital Group Properties Logo"
                width={160}
                height={55}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
          </header>

          {/* Title & Industry Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#003057] text-[#00B8FF] text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                Property Management
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200/80 text-xs font-semibold flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                Verified Testimonial
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              Reliable Support Across More Than 10 Facilities
            </h1>

            <p className="text-slate-600 text-sm md:text-base font-medium">
              Providing dependable janitorial services, rapid emergency response, and dedicated cleaning staff for Capital Group Properties.
            </p>
          </div>

          {/* Testimonial Quote Box */}
          <div className="bg-gradient-to-br from-slate-50 to-sky-50/40 p-6 sm:p-8 rounded-2xl border border-sky-100 mb-8 relative">
            <Quote className="w-10 h-10 text-[#00B8FF]/25 absolute top-4 left-4 pointer-events-none" />
            
            <div className="relative z-10 space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed font-serif">
              <p>
                Managing multiple properties requires a cleaning partner that can respond quickly when unexpected needs arise.
              </p>
              <p>
                Enterprise Cleaning Corp. provides cleaning services across more than 10 Capital Group Properties facilities, supported by a dedicated team of approximately 12 employees.
              </p>
              <p>
                Our partnership goes beyond scheduled cleaning. In 2025 alone, Enterprise responded to 11 last-minute calls involving special cleaning requests. Our ability to mobilize quickly and respond in a timely manner helped Capital Group Properties address unexpected needs while maintaining the appearance and condition of their properties.
              </p>
              <p>
                Whether the request is part of the regular cleaning schedule or an unexpected situation that requires immediate attention, Enterprise works to provide dependable service and a fast response.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#003057] mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00B8FF]" />
                Key Operational Highlights
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Reliable cleaning services across 10+ property facilities</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Dedicated team of ~12 specialized cleaning professionals</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>11 last-minute special cleaning calls answered in 2025 alone</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Rapid mobilization and timely response for unexpected needs</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-[#FFE800] mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FFE800]" />
                  Partnership Metrics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl font-black text-white">10+</div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">Facilities Managed</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl font-black text-white">~12</div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">Dedicated Employees</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl font-black text-white">11</div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">2025 Urgent Calls</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl font-black text-white">Fast</div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">Emergency Mobilization</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/15 text-[11px] text-slate-300 italic">
                Coverage: Commercial Real Estate, Multi-Property Facilities & Rapid Special Requests
              </div>
            </div>
          </div>

          {/* Result Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 mb-10">
            <div className="flex items-center gap-2 text-xs font-black uppercase text-[#E31837] mb-2">
              <Sparkles className="w-4 h-4 text-[#E31837]" />
              <span>The Result</span>
            </div>
            <p className="text-slate-900 text-sm sm:text-base font-bold leading-relaxed">
              A trusted partnership built on consistency, responsiveness, and the ability to provide reliable cleaning support across a large portfolio of properties.
            </p>
          </div>

          {/* Footer Sign-off Section */}
          <footer className="pt-8 border-t-2 border-slate-200">
            <div className="max-w-md space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Client Testimonial Endorsement</span>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="font-extrabold text-slate-900 text-base">Capital Group Properties Management</div>
                <div className="text-xs font-semibold text-[#003057]">Property & Facility Operations</div>
                <div className="text-xs text-slate-500 font-medium">Capital Group Properties • New England Facilities</div>
              </div>
            </div>
          </footer>

        </article>
      </div>
    </div>
  );
}
