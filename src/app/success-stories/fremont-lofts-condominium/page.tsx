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
  Home
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Fremont Lofts Condominium Success Story | Enterprise Cleaning Corp" },
  description: "Learn how Enterprise Cleaning Corp keeps Fremont Lofts Condominium clean, safe, and welcoming with 4x/week cleaning, trash management, amenity disinfection, and annual carpet resets across 97 units.",
  keywords: [
    "Fremont Lofts Condominium cleaning",
    "condo association cleaning Central MA",
    "residential community cleaning service",
    "97 unit condo cleaning New England",
    "annual carpet reset cleaning condo"
  ],
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/success-stories/fremont-lofts-condominium",
  },
  openGraph: {
    title: "Fremont Lofts Condominium Success Story | Enterprise Cleaning Corp",
    description: "Learn how Enterprise Cleaning Corp keeps Fremont Lofts Condominium clean, safe, and welcoming with 4x/week cleaning, trash management, amenity disinfection, and annual carpet resets across 97 units.",
    url: "https://www.enterprisecleaningcorp.com/success-stories/fremont-lofts-condominium",
    type: "article",
  },
};

export default function FremontLoftsCondominiumSuccessStoryPage() {
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
                <p>Condominium & Community Living</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-4 px-6 rounded-2xl flex items-center justify-center self-end sm:self-center shadow-sm">
              <Image
                src="/logos/fremont-condo-association.png"
                alt="Fremont Lofts Condominium Logo"
                width={280}
                height={90}
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
          </header>

          {/* Title & Industry Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#003057] text-[#00B8FF] text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5" />
                Condominium & Community Living
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200/80 text-xs font-semibold flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                Verified Testimonial
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              Keeping a Large Community Clean, Safe, and Welcoming
            </h1>

            <p className="text-slate-600 text-sm md:text-base font-medium">
              Maintaining shared living spaces, gym, storage rooms, and club room across a 97-unit residential community with 4x/week cleaning and annual carpet resets.
            </p>
          </div>

          {/* Testimonial Quote Box */}
          <div className="bg-gradient-to-br from-slate-50 to-sky-50/40 p-6 sm:p-8 rounded-2xl border border-sky-100 mb-8 relative">
            <Quote className="w-10 h-10 text-[#00B8FF]/25 absolute top-4 left-4 pointer-events-none" />
            
            <div className="relative z-10 space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed font-serif">
              <p>
                Large residential communities require consistent attention to common areas, trash management, and high-traffic spaces. Fremont Lofts Condominium partnered with Enterprise Cleaning Corp. to help maintain a clean and welcoming environment for its 97-unit community.
              </p>
              <p>
                Enterprise is proud to provide service four times per week, with our team responsible for trash management, cleaning, and disinfection throughout the community’s shared living spaces, including the resident gym, storage rooms, and club room.
              </p>
              <p>
                To complement the regular cleaning program, Enterprise also provides a major carpet cleaning reset once a year. This additional service helps refresh the community’s carpeted areas and maintain a higher standard of appearance throughout the property.
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
                  <span>Consistent 4x weekly cleaning & trash management</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Dedicated cleaning of resident gym, storage rooms & club room</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Disinfection throughout high-traffic shared living spaces</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Major annual carpet cleaning reset for common area carpets</span>
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
                    <div className="text-lg sm:text-xl font-black text-white">97 Units</div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">Community Size</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl font-black text-white">4x / Wk</div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">Service Frequency</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl font-black text-white">3+</div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">Key Amenities Cleaned</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl font-black text-white">Annual</div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">Carpet Deep Reset</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/15 text-[11px] text-slate-300 italic">
                Coverage: Shared Living Spaces, Gym, Storage Rooms, Club Room & Common Carpeting
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
              A consistent, year-round cleaning program that combines frequent service, trash management, disinfection, and annual carpet cleaning to help keep a large 97-unit residential community clean and comfortable for its residents.
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
                <div className="font-extrabold text-slate-900 text-base">Fremont Lofts Condominium Management</div>
                <div className="text-xs font-semibold text-[#003057]">Condo Association & Resident Operations</div>
                <div className="text-xs text-slate-500 font-medium">Fremont Lofts Condominium • 97 Units</div>
              </div>
            </div>
          </footer>

        </article>
      </div>
    </div>
  );
}
