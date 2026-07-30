import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Building2, 
  Stethoscope, 
  HardHat,
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Quote, 
  FileText, 
  PhoneCall, 
  Award,
  ChevronRight
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Customer Success Stories & Case Studies | Enterprise Cleaning Corp" },
  description: "Discover how Enterprise Cleaning Corp delivers top-tier commercial, medical, and manufacturing cleaning services across New England.",
  keywords: ["commercial cleaning success stories", "janitorial case studies New England", "enterprise cleaning testimonials", "bank cleaning case study", "medical cleaning case study", "manufacturing cleaning case study"],
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/success-stories",
  },
  openGraph: {
    title: "Customer Success Stories & Case Studies | Enterprise Cleaning Corp",
    description: "Discover how Enterprise Cleaning Corp delivers top-tier commercial, medical, and manufacturing cleaning services across New England.",
    url: "https://www.enterprisecleaningcorp.com/success-stories",
    type: "website",
  },
};

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#002244] via-[#003057] to-[#004b87] text-white pt-16 pb-20 md:py-24">
        <div className="absolute inset-0 bg-[linear-[#ffffff08]_1px,transparent_1px] bg-[size:24px_24px] opacity-30 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00B8FF]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#E31837]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#FFE800] text-xs md:text-sm font-semibold mb-6 backdrop-blur-md">
              <Award className="w-4 h-4 text-[#FFE800]" />
              <span>Real Client Results & Testimonials</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Customer Success Stories
            </h1>

            <p className="text-slate-200 text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 font-light">
              See how New England’s leading banks, healthcare networks, and manufacturing facilities trust Enterprise Cleaning Corp to keep their operations clean, safe, and welcoming.
            </p>

            {/* Quick Stat Counter Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 max-w-3xl mx-auto text-center">
              <div>
                <div className="text-2xl md:text-3xl font-black text-[#FFE800]">30+</div>
                <div className="text-xs md:text-sm text-slate-200 font-medium mt-1">APDerm Clinics</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-[#00B8FF]">7+</div>
                <div className="text-xs md:text-sm text-slate-200 font-medium mt-1">WCU Bank Branches</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-emerald-400">5+</div>
                <div className="text-xs md:text-sm text-slate-200 font-medium mt-1">Manufacturing Plants</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-white">3 States</div>
                <div className="text-xs md:text-sm text-slate-200 font-medium mt-1">MA, RI, & NH Network</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-200 pb-6 gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#00B8FF] block mb-2">
                Enterprise Cleaning Corp
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900">
                Client Success Stories
              </h2>
            </div>
            <p className="text-slate-600 text-sm md:text-base max-w-md">
              Verified testimonials and operational success stories directly from our client partners.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* 1. WCU BANK STORY CARD */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden transition-all hover:shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Side */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#001a33] via-[#003057] to-[#002244] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#00B8FF]/10 rounded-full blur-3xl pointer-events-none" />
                  
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sky-300 text-xs font-bold uppercase tracking-wider mb-6">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>Banking & Financial Services</span>
                    </div>

                    <div className="bg-white p-5 rounded-2xl shadow-md w-fit mb-8 flex items-center justify-center">
                      <Image
                        src="/logos/wcu-logo.svg"
                        alt="WCU Bank Logo"
                        width={200}
                        height={70}
                        className="h-12 w-auto object-contain"
                      />
                    </div>

                    <h3 className="text-xl md:text-2xl font-extrabold text-white mb-4 leading-snug">
                      Keeping Banking Environments Clean, Disinfected, and Ready for Customers
                    </h3>

                    <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light mb-8">
                      WCU Bank trusts Enterprise Cleaning Corp. to help maintain a clean, professional, and welcoming environment across more than seven locations.
                    </p>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-white/15">
                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <span className="text-slate-300 font-medium">Locations Managed:</span>
                      <span className="text-[#FFE800] font-bold">7+ Branches</span>
                    </div>
                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <span className="text-slate-300 font-medium">Service Type:</span>
                      <span className="text-[#FFE800] font-bold">Janitorial & Disinfection</span>
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center gap-2 text-amber-500 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-slate-600 text-xs font-semibold ml-2">WCU Bank Testimonial</span>
                    </div>

                    <div className="relative mb-8 pl-6 border-l-4 border-[#00B8FF]">
                      <Quote className="w-8 h-8 text-[#00B8FF]/20 absolute -top-3 -left-3 pointer-events-none" />
                      <p className="text-slate-700 text-base md:text-lg italic leading-relaxed font-serif">
                        "In the banking industry, cleanliness is an important part of the customer experience. Every day, employees and customers interact in high-touch areas, offices, waiting areas, and common spaces. Enterprise’s team works consistently to keep these facilities clean and disinfected..."
                      </p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                        Key Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-xs md:text-sm font-medium">Consistent cleaning across 7+ locations</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-xs md:text-sm font-medium">High-touch area disinfection</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-xs md:text-sm font-medium">Flexible special project support</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-xs md:text-sm font-medium">Rapid response for unexpected needs</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
                      <div className="flex items-center gap-2 text-xs font-black uppercase text-[#E31837] mb-2">
                        <Sparkles className="w-4 h-4 text-[#E31837]" />
                        <span>The Result</span>
                      </div>
                      <p className="text-slate-800 text-sm font-semibold leading-relaxed">
                        A dependable cleaning partnership across multiple locations, with the flexibility to provide both consistent janitorial services and additional project support whenever needed.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-6 border-t border-slate-100">
                    <Link
                      href="/success-stories/wcu-bank"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#003057] text-white font-bold text-sm hover:bg-[#002244] transition-all shadow-md hover:shadow-lg group"
                    >
                      <FileText className="w-4 h-4 text-[#00B8FF]" />
                      <span>Read Full Success Story</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

            {/* 2. APDERM STORY CARD */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden transition-all hover:shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Side */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#001a33] via-[#003057] to-[#002244] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#00B8FF]/10 rounded-full blur-3xl pointer-events-none" />
                  
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sky-300 text-xs font-bold uppercase tracking-wider mb-6">
                      <Stethoscope className="w-3.5 h-3.5" />
                      <span>Healthcare & Dermatology</span>
                    </div>

                    <div className="bg-[#001a33] border border-white/20 p-5 px-6 rounded-2xl shadow-md w-fit mb-8 flex items-center justify-center">
                      <Image
                        src="/logos/apderm-logo.svg"
                        alt="APDerm Logo"
                        width={200}
                        height={70}
                        className="h-12 w-auto object-contain"
                      />
                    </div>

                    <h3 className="text-xl md:text-2xl font-extrabold text-white mb-4 leading-snug">
                      Specialized Cleaning for a Growing Multi-Location Medical Network
                    </h3>

                    <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light mb-8">
                      APDerm operates more than 30 dermatology locations across Massachusetts, Rhode Island, and New Hampshire.
                    </p>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-white/15">
                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <span className="text-slate-300 font-medium">Locations Managed:</span>
                      <span className="text-[#FFE800] font-bold">30+ Medical Clinics</span>
                    </div>
                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <span className="text-slate-300 font-medium">Coverage Area:</span>
                      <span className="text-[#FFE800] font-bold">MA, RI, & NH</span>
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center gap-2 text-amber-500 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-slate-600 text-xs font-semibold ml-2">APDerm Testimonial</span>
                    </div>

                    <div className="relative mb-8 pl-6 border-l-4 border-[#00B8FF]">
                      <Quote className="w-8 h-8 text-[#00B8FF]/20 absolute -top-3 -left-3 pointer-events-none" />
                      <p className="text-slate-700 text-base md:text-lg italic leading-relaxed font-serif">
                        "Maintaining consistent cleaning and disinfection standards across a large medical network requires reliability, attention to detail, and the ability to adapt to specialized environments. Enterprise Cleaning Corp. works with APDerm to help keep their facilities clean, disinfected, and ready for patients and staff..."
                      </p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                        Key Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-xs md:text-sm font-medium">Consistent cleaning across 30+ clinics</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-xs md:text-sm font-medium">Specialized operating room cleaning</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-xs md:text-sm font-medium">Flexible handyman & facility support</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-xs md:text-sm font-medium">Furniture assembly & heavy disposal</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
                      <div className="flex items-center gap-2 text-xs font-black uppercase text-[#E31837] mb-2">
                        <Sparkles className="w-4 h-4 text-[#E31837]" />
                        <span>The Result</span>
                      </div>
                      <p className="text-slate-800 text-sm font-semibold leading-relaxed">
                        A long-term partnership that combines reliable medical facility cleaning with the flexibility to support the changing needs of a growing healthcare organization.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-6 border-t border-slate-100">
                    <Link
                      href="/success-stories/apderm"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#003057] text-white font-bold text-sm hover:bg-[#002244] transition-all shadow-md hover:shadow-lg group"
                    >
                      <FileText className="w-4 h-4 text-[#00B8FF]" />
                      <span>Read Full Success Story</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

            {/* 3. COUGHLIN COMPANIES STORY CARD */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden transition-all hover:shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Side */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#001a33] via-[#003057] to-[#002244] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#00B8FF]/10 rounded-full blur-3xl pointer-events-none" />
                  
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sky-300 text-xs font-bold uppercase tracking-wider mb-6">
                      <HardHat className="w-3.5 h-3.5" />
                      <span>Manufacturing & Industrial</span>
                    </div>

                    <div className="bg-[#001a33] border border-white/20 p-5 px-6 rounded-2xl shadow-md w-fit mb-8 flex items-center justify-center">
                      <Image
                        src="/logos/coghlin-companies.webp"
                        alt="Coughlin Companies Logo"
                        width={200}
                        height={70}
                        className="h-12 w-auto object-contain"
                      />
                    </div>

                    <h3 className="text-xl md:text-2xl font-extrabold text-white mb-4 leading-snug">
                      Building a Cleaning Program Around Manufacturing Operations
                    </h3>

                    <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light mb-8">
                      Enterprise Cleaning Corp. provides cleaning services across more than five Coughlin Companies facilities with dedicated day and night porters.
                    </p>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-white/15">
                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <span className="text-slate-300 font-medium">Facilities Managed:</span>
                      <span className="text-[#FFE800] font-bold">5+ Manufacturing Plants</span>
                    </div>
                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <span className="text-slate-300 font-medium">Staffing:</span>
                      <span className="text-[#FFE800] font-bold">Day & Night Porters</span>
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center gap-2 text-amber-500 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-slate-600 text-xs font-semibold ml-2">Coughlin Companies Testimonial</span>
                    </div>

                    <div className="relative mb-8 pl-6 border-l-4 border-[#00B8FF]">
                      <Quote className="w-8 h-8 text-[#00B8FF]/20 absolute -top-3 -left-3 pointer-events-none" />
                      <p className="text-slate-700 text-base md:text-lg italic leading-relaxed font-serif">
                        "Manufacturing facilities have unique cleaning requirements. The environment must remain clean and organized while supporting employees, production, and daily operations. Enterprise Cleaning Corp. provides cleaning services across more than five Coughlin Companies facilities..."
                      </p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                        Key Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-xs md:text-sm font-medium">Dedicated day & night porter coverage</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-xs md:text-sm font-medium">Specialized clean room cleaning plan</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-xs md:text-sm font-medium">On-site industrial floor cleaning equipment</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-xs md:text-sm font-medium">Multi-facility program across 5+ plants</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
                      <div className="flex items-center gap-2 text-xs font-black uppercase text-[#E31837] mb-2">
                        <Sparkles className="w-4 h-4 text-[#E31837]" />
                        <span>The Result</span>
                      </div>
                      <p className="text-slate-800 text-sm font-semibold leading-relaxed">
                        A customized, multi-facility cleaning program designed around the specific needs of a manufacturing environment, combining day porter services, nighttime cleaning, specialized cleaning procedures, and on-site equipment.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-6 border-t border-slate-100">
                    <Link
                      href="/success-stories/coghlin-companies"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#003057] text-white font-bold text-sm hover:bg-[#002244] transition-all shadow-md hover:shadow-lg group"
                    >
                      <FileText className="w-4 h-4 text-[#00B8FF]" />
                      <span>Read Full Success Story</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Client Logos Wall */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 via-[#002244] to-slate-900 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-xl md:text-3xl font-extrabold mb-4">
              Trusted by Top Commercial, Medical & Manufacturing Brands Across New England
            </h3>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-10 font-light">
              From multi-branch financial institutions to medical networks and manufacturing facilities, Enterprise Cleaning Corp is the premier choice for commercial cleaning.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/10 flex items-center justify-center h-20">
                <Image src="/logos/wcu-logo.svg" alt="WCU Bank" width={130} height={45} className="max-h-10 w-auto object-contain brightness-0 invert" />
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/10 flex items-center justify-center h-20">
                <Image src="/logos/apderm-logo.svg" alt="APDerm" width={130} height={45} className="max-h-10 w-auto object-contain brightness-0 invert" />
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/10 flex items-center justify-center h-20">
                <Image src="/logos/coghlin-companies.webp" alt="Coughlin Companies" width={130} height={45} className="max-h-10 w-auto object-contain" />
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/10 flex items-center justify-center h-20">
                <Image src="/logos/avidia-bank.svg" alt="Avidia Bank" width={130} height={45} className="max-h-10 w-auto object-contain brightness-0 invert" />
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/10 flex items-center justify-center h-20">
                <Image src="/logos/capital-group.png" alt="Capital Group" width={130} height={45} className="max-h-10 w-auto object-contain brightness-0 invert" />
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/10 flex items-center justify-center h-20">
                <Image src="/logos/shields-health.svg" alt="Shields Health" width={130} height={45} className="max-h-10 w-auto object-contain brightness-0 invert" />
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-16 bg-gradient-to-r from-[#003057] to-[#00B8FF] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div>
              <span className="inline-block text-xs font-black uppercase tracking-widest text-[#FFE800] mb-2">
                Custom Commercial, Healthcare & Industrial Solutions
              </span>
              <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
                Want Reliable Cleaning Results For Your Facility?
              </h3>
              <p className="text-white/90 text-sm md:text-base max-w-xl font-light">
                Get a customized cleaning schedule, dedicated account manager, and rapid-response support tailored to your business needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#E31837] text-white font-bold text-base hover:bg-red-700 transition-all shadow-lg hover:shadow-xl text-center"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:508-890-1000"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/15 text-white font-bold text-base hover:bg-white/25 transition-all text-center border border-white/20"
              >
                <PhoneCall className="w-5 h-5 text-[#FFE800]" />
                <span>508-890-1000</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
