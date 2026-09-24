import Link from "next/link";
import Image from "next/image";
import { AlertTriangle, Phone, Clock, Users, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function EmergencyCTA() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-br from-[#c8102e] via-[#E31837] to-[#9b0b1f] text-white shadow-2xl">
      {/* Decorative background grid and ambient glow */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FFE800]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/25 border border-white/20 backdrop-blur-md mb-4 shadow-sm">
            <AlertTriangle className="size-4 text-[#FFE800] animate-pulse" />
            <span className="text-xs md:text-sm font-black text-white tracking-wider uppercase">
              24/7 Rapid Emergency Response & Restoration
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight mb-3">
            Water, Flood & Urgent Facility Cleanup —{" "}
            <span className="text-[#FFE800]">We Respond When It Matters</span>
          </h2>
          <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed max-w-2xl mx-auto">
            Certified technicians for flood, water damage, and urgent mold cleanup. We work directly with your insurance to start facility recovery immediately.
          </p>
        </div>

        {/* Main Content Grid: Pricing Cards & Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Big Number Pricing Cards & CTA Links (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* 2 Big Number Pricing Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              
              {/* Package 1: $475 */}
              <div className="relative group bg-white/10 hover:bg-white/15 border-2 border-white/20 hover:border-white/40 rounded-2xl p-5 sm:p-6 backdrop-blur-md transition-all duration-300 shadow-xl flex flex-col justify-between">
                <div className="absolute -top-3 left-4 px-2.5 py-0.5 rounded-md bg-white text-[#c8102e] text-[10px] font-black uppercase tracking-wider shadow-sm">
                  1. Weekday Services
                </div>
                
                <div className="pt-2">
                  <div className="text-xs font-bold text-white/80 uppercase tracking-wide">
                    Starting At
                  </div>
                  {/* Nice Big Number */}
                  <div className="flex items-baseline gap-1 my-2">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-md">
                      $475
                    </span>
                  </div>
                  
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/20 text-[#FFE800] text-xs font-bold mb-3 border border-white/10">
                    <Users className="size-3.5" />
                    <span>2 Technicians • 4 Hours</span>
                  </div>

                  <p className="text-xs text-white/90 leading-relaxed font-medium">
                    (2 technicians 4 hours; Weekday services)
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/15 space-y-1.5 text-xs text-white/85">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-[#FFE800] shrink-0" />
                    <span>Standard Weekday Hours</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-[#FFE800] shrink-0" />
                    <span>Rapid Dispatch & Setup</span>
                  </div>
                </div>
              </div>

              {/* Package 2: $575 */}
              <div className="relative group bg-white/10 hover:bg-white/15 border-2 border-[#FFE800]/50 hover:border-[#FFE800] rounded-2xl p-5 sm:p-6 backdrop-blur-md transition-all duration-300 shadow-xl flex flex-col justify-between">
                <div className="absolute -top-3 left-4 px-2.5 py-0.5 rounded-md bg-[#FFE800] text-black text-[10px] font-black uppercase tracking-wider shadow-sm">
                  2. Weekend & Night Shift
                </div>
                
                <div className="pt-2">
                  <div className="text-xs font-bold text-[#FFE800] uppercase tracking-wide flex items-center gap-1">
                    <Sparkles className="size-3" /> Starting At
                  </div>
                  {/* Nice Big Number */}
                  <div className="flex items-baseline gap-1 my-2">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#FFE800] tracking-tight drop-shadow-md">
                      $575
                    </span>
                  </div>
                  
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/20 text-white text-xs font-bold mb-3 border border-white/10">
                    <Clock className="size-3.5 text-[#FFE800]" />
                    <span>Weekends & Starting at 8pm</span>
                  </div>

                  <p className="text-xs text-white/90 leading-relaxed font-medium">
                    (Weekend or Weekly starting at 8pm services)
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/15 space-y-1.5 text-xs text-white/85">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-[#FFE800] shrink-0" />
                    <span>After-Hours & Overnight Crew</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-[#FFE800] shrink-0" />
                    <span>Immediate Weekend Readiness</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Footnote requested by client */}
            <div className="p-3.5 rounded-xl bg-black/20 border border-white/15 flex items-start gap-2.5">
              <span className="text-[#FFE800] font-black text-sm leading-none mt-0.5">*</span>
              <p className="text-xs sm:text-sm text-white/95 font-semibold leading-relaxed">
                <strong className="text-[#FFE800]">Call for details or sign up for emergency services.</strong> Custom rates may vary based upon facility requirements and crew availability.
              </p>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="tel:5083042369"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-[#c8102e] hover:bg-slate-100 font-black text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
              >
                <Phone className="size-5 text-[#c8102e] group-hover:rotate-12 transition-transform" />
                <span>Call (508) 304-2369</span>
              </a>

              <Link
                href="/contact?service=Emergency+Restoration+Services"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-black/30 hover:bg-black/45 border-2 border-white/30 hover:border-white/60 text-white font-bold text-base shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Sign Up for Emergency Services</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>

          </div>

          {/* Right Column: Visual Poster Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-slate-900 group">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/emergency-cleaning-services-offer.jpg"
                  alt="Enterprise Cleaning Corporation Emergency Services - Starting at $475 weekday and $575 weekend"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 450px"
                  priority
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-center">
                <span className="text-xs font-black text-[#FFE800] tracking-wider uppercase drop-shadow">
                  Enterprise Cleaning Corp • Rapid Response Fleet
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

