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
  Landmark
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "West Boylston Light Department Success Story | Enterprise Cleaning Corp" },
  description: "Learn how Enterprise Cleaning Corp built a trusted municipal cleaning partnership with West Boylston Light Department, Town Hall, and local public facilities.",
  keywords: [
    "West Boylston Light Department cleaning",
    "municipal janitorial services MA",
    "town hall cleaning Central MA",
    "public facility cleaning services",
    "local government building cleaning"
  ],
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/success-stories/west-boylston-light-department",
  },
  openGraph: {
    title: "West Boylston Light Department Success Story | Enterprise Cleaning Corp",
    description: "Learn how Enterprise Cleaning Corp built a trusted municipal cleaning partnership with West Boylston Light Department, Town Hall, and local public facilities.",
    url: "https://www.enterprisecleaningcorp.com/success-stories/west-boylston-light-department",
    type: "article",
  },
};

export default function WestBoylstonSuccessStoryPage() {
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
                <p>Municipal & Public Facility Cleaning</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200/80 p-3 px-5 rounded-2xl flex items-center justify-center self-end sm:self-center shadow-xs">
              <Image
                src="/logos/west-boylston-light-department.png"
                alt="West Boylston Light Department Logo"
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
                <Landmark className="w-3.5 h-3.5" />
                Municipal & Public Facilities
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200/80 text-xs font-semibold flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                Verified Testimonial
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              A Local Partnership That Grew Through Results and Referrals
            </h1>

            <p className="text-slate-600 text-sm md:text-base font-medium">
              Enterprise Cleaning Corp.’s relationship with the West Boylston Light Department is an example of how strong service can create long-term growth through trust and referrals.
            </p>
          </div>

          {/* Testimonial Quote Box */}
          <div className="bg-gradient-to-br from-slate-50 to-sky-50/40 p-6 sm:p-8 rounded-2xl border border-sky-100 mb-8 relative">
            <Quote className="w-10 h-10 text-[#00B8FF]/25 absolute top-4 left-4 pointer-events-none" />
            
            <div className="relative z-10 space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed font-serif">
              <p>
                Enterprise Cleaning Corp.’s relationship with the West Boylston Light Department is an example of how strong service can create long-term growth through trust and referrals.
              </p>
              <p>
                After beginning our partnership with the West Boylston Light Department, Enterprise focused on delivering dependable, professional cleaning services and building a strong working relationship with the organization.
              </p>
              <p>
                Our success with the initial account helped lead to referrals and additional opportunities to serve public and municipal facilities in the surrounding area. Today, Enterprise provides cleaning services for the West Boylston Light Department, Town Hall, and other municipal buildings in the region.
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
                  <span>Dependable cleaning for West Boylston Light Department</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Comprehensive janitorial services for Town Hall & public buildings</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Long-term partnership built on accountability & community trust</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Organic growth through client referrals in Central MA</span>
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
                    <div className="text-lg sm:text-xl font-black text-white">Municipal</div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">Facilities Portfolio</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl font-black text-white">Town Hall</div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">& Light Dept</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl font-black text-white">100%</div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">Community Commitment</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl font-black text-white">Referral</div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">Driven Growth</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/15 text-[11px] text-slate-300 italic">
                Coverage: Light Department, Town Hall, Administrative Offices & Public Buildings
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
              One successful local partnership grew into additional opportunities through referrals, demonstrating the value of consistent service, accountability, and a commitment to the local community.
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
                <div className="font-extrabold text-slate-900 text-base">West Boylston Municipal Operations</div>
                <div className="text-xs font-semibold text-[#003057]">Municipal & Public Facilities</div>
                <div className="text-xs text-slate-500 font-medium">West Boylston Light Dept & Town Hall • Central MA</div>
              </div>
            </div>
          </footer>

        </article>
      </div>
    </div>
  );
}
