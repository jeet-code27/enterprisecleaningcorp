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
  Award
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "WCU Bank Testimonial & Case Study | Enterprise Cleaning Corp" },
  description: "WCU Bank trusts Enterprise Cleaning Corp for daily commercial janitorial and high-touch disinfection across 7+ banking locations.",
  keywords: ["WCU Bank cleaning testimonial", "bank janitorial services New England", "financial institution cleaning MA", "commercial bank disinfection", "multi-location bank cleaning"],
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/success-stories/wcu-bank",
  },
  openGraph: {
    title: "WCU Bank Testimonial & Case Study | Enterprise Cleaning Corp",
    description: "WCU Bank trusts Enterprise Cleaning Corp for daily commercial janitorial and high-touch disinfection across 7+ banking locations.",
    url: "https://www.enterprisecleaningcorp.com/success-stories/wcu-bank",
    type: "article",
  },
};

export default function WcuBankSuccessStoryPage() {
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
                  src="/images/logo.png"
                  alt="Enterprise Cleaning Corp"
                  width={210}
                  height={65}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block text-xs text-slate-400 border-l border-slate-200 pl-4 py-1">
                <p className="font-bold text-slate-700 uppercase tracking-wider">Customer Success Story</p>
                <p>Commercial Cleaning & Disinfection</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-2xl flex items-center justify-center self-end sm:self-center">
              <Image
                src="/logos/wcu-logo.svg"
                alt="WCU Bank Logo"
                width={160}
                height={55}
                className="h-10 w-auto object-contain"
              />
            </div>
          </header>

          {/* Title & Industry Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#003057] text-[#00B8FF] text-xs font-extrabold uppercase tracking-wider">
                Banking & Financial Services
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200/80 text-xs font-semibold flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                Verified Testimonial
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              Keeping Banking Environments Clean, Disinfected, and Ready for Customers
            </h1>

            <p className="text-slate-600 text-sm md:text-base font-medium">
              Maintaining a pristine, professional, and welcoming atmosphere across 7+ bank branches.
            </p>
          </div>

          {/* Testimonial Quote Box */}
          <div className="bg-gradient-to-br from-slate-50 to-sky-50/40 p-6 sm:p-8 rounded-2xl border border-sky-100 mb-8 relative">
            <Quote className="w-10 h-10 text-[#00B8FF]/25 absolute top-4 left-4 pointer-events-none" />
            
            <div className="relative z-10 space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed font-serif">
              <p>
                WCU Bank trusts Enterprise Cleaning Corp. to help maintain a clean, professional, and welcoming environment across more than seven locations.
              </p>
              <p>
                In the banking industry, cleanliness is an important part of the customer experience. Every day, employees and customers interact in high-touch areas, offices, waiting areas, and common spaces. Enterprise’s team works consistently to keep these facilities clean and disinfected, helping create a comfortable environment for the bank’s valued customers and employees.
              </p>
              <p>
                Our partnership goes beyond routine cleaning. When WCU Bank needs additional support for special cleaning projects or unexpected cleaning needs, Enterprise is there to respond and help keep their operations running smoothly.
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
                  <span>Consistent multi-location janitorial & floor maintenance</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Rigorous high-touch area disinfection protocols</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Flexible, rapid-response team for unexpected cleaning needs</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Seamless support for special commercial cleaning projects</span>
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
                    <div className="text-lg sm:text-xl font-black text-white">7+</div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">Branch Locations</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl font-black text-white">100%</div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">Disinfection Coverage</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl font-black text-white">24/7</div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">Special Project Support</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl font-black text-white">Long-Term</div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">Partnership</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/15 text-[11px] text-slate-300 italic">
                Coverage: Branch Teller Areas, Offices, Waiting Rooms & High-Touch Disinfection
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
              A dependable cleaning partnership across multiple locations, with the flexibility to provide both consistent janitorial services and additional project support whenever needed.
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
                <div className="font-extrabold text-slate-900 text-base">WCU Bank Operations Team</div>
                <div className="text-xs font-semibold text-[#003057]">Branch Facilities & Management</div>
                <div className="text-xs text-slate-500 font-medium">WCU Bank • New England Branches</div>
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
