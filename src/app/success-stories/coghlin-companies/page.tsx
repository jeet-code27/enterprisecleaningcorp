import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  CheckCircle2, 
  Quote, 
  ArrowLeft, 
  Sparkles, 
  ShieldCheck, 
  Calendar,
  Award,
  HardHat
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Coghlin Companies Success Story | Enterprise Cleaning Corp" },
  description: "Enterprise Cleaning Corp delivers manufacturing cleaning, day & night porters, and clean room sanitation across 5+ Coghlin Companies facilities.",
  keywords: ["Coghlin Companies cleaning case study", "manufacturing plant janitorial services", "clean room sanitation MA", "industrial day porter services", "commercial floor cleaning equipment"],
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/success-stories/coghlin-companies",
  },
  openGraph: {
    title: "Coghlin Companies Success Story | Enterprise Cleaning Corp",
    description: "Enterprise Cleaning Corp delivers manufacturing cleaning, day & night porters, and clean room sanitation across 5+ Coghlin Companies facilities.",
    url: "https://www.enterprisecleaningcorp.com/success-stories/coghlin-companies",
    type: "article",
  },
};

export default function CoghlinCompaniesSuccessStoryPage() {
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
                  src="/images/enterprise-logo.png"
                  alt="Enterprise Cleaning Corp"
                  width={210}
                  height={65}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block text-xs text-slate-400 border-l border-slate-200 pl-4 py-1">
                <p className="font-bold text-slate-700 uppercase tracking-wider">Customer Success Story</p>
                <p>Manufacturing & Industrial Cleaning</p>
              </div>
            </div>

            <div className="bg-[#003057] border border-[#002244] p-3 px-5 rounded-2xl flex items-center justify-center self-end sm:self-center shadow-xs">
              <Image
                src="/logos/coghlin-companies.webp"
                alt="Coghlin Companies Logo"
                width={160}
                height={55}
                className="h-10 w-auto object-contain"
              />
            </div>
          </header>

          {/* Title & Industry Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#003057] text-[#00B8FF] text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                <HardHat className="w-3.5 h-3.5" />
                Manufacturing & Industrial
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200/80 text-xs font-semibold flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                Verified Testimonial
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              Building a Cleaning Program Around Manufacturing Operations
            </h1>

            <p className="text-slate-600 text-sm md:text-base font-medium">
              Customized multi-facility program combining day porters, nighttime cleaning, specialized clean room procedures, and on-site equipment across 5+ facilities.
            </p>
          </div>

          {/* Testimonial Quote Box */}
          <div className="bg-gradient-to-br from-slate-50 to-sky-50/40 p-6 sm:p-8 rounded-2xl border border-sky-100 mb-8 relative">
            <Quote className="w-10 h-10 text-[#00B8FF]/25 absolute top-4 left-4 pointer-events-none" />
            
            <div className="relative z-10 space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed font-serif">
              <p>
                Manufacturing facilities have unique cleaning requirements. The environment must remain clean and organized while supporting employees, production, and daily operations.
              </p>
              <p>
                Enterprise Cleaning Corp. provides cleaning services across more than five Coghlin Companies facilities, with dedicated day porters and night porters helping maintain the buildings throughout the day and after operations are complete.
              </p>
              <p>
                Working closely with the Coghlin Companies team, Enterprise helped develop a dedicated cleaning plan for specialized clean room areas, focusing on the standards required to support their operations and production environment.
              </p>
              <p>
                For large manufacturing spaces, Enterprise also maintains floor-cleaning equipment on site, allowing our team to efficiently care for expansive flooring areas and maintain a consistent standard of cleanliness.
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
                  <span>Dedicated Day Porter & Nighttime Janitorial Services</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Specialized Clean Room Sanitation Standards & Protocol</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>On-Site Heavy Industrial Floor Cleaning Equipment</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Multi-Facility Management across 5+ Production Plants</span>
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
                    <div className="text-lg sm:text-xl font-black text-white">5+</div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">Manufacturing Plants</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl font-black text-white">Day & Night</div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">Porter Coverage</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl font-black text-white">Clean Room</div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">Specialized Sanitation</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl font-black text-white">On-Site</div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">Industrial Equipment</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/15 text-[11px] text-slate-300 italic">
                Coverage: Production Floors, Clean Rooms, Warehouses, Staff Lounges & Operations
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
              A customized, multi-facility cleaning program designed around the specific needs of a manufacturing environment, combining day porter services, nighttime cleaning, specialized cleaning procedures, and on-site equipment.
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
                <div className="font-extrabold text-slate-900 text-base">Coghlin Companies Operations</div>
                <div className="text-xs font-semibold text-[#003057]">Plant Facilities & Manufacturing Operations</div>
                <div className="text-xs text-slate-500 font-medium">Coghlin Companies • 5+ Manufacturing Facilities</div>
                <div className="text-[11px] text-slate-400 mt-2 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span>Date: July 2026</span>
                </div>
              </div>
            </div>
          </footer>

        </article>
      </div>
    </div>
  );
}
