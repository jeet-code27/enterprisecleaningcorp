import Link from "next/link";
import Image from "next/image";
import { AlertTriangle, Phone, Clock, ArrowRight, ShieldCheck, Droplets, FileCheck } from "lucide-react";

export function EmergencyCTA() {
  // Set to true once the client approves the creative poster
  const SHOW_PROMO_CREATIVE = false;

  if (SHOW_PROMO_CREATIVE) {
    return (
      <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-br from-[#c8102e] via-[#E31837] to-[#9b0b1f] text-white shadow-2xl">
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
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/25 border border-white/20 backdrop-blur-md mb-4 shadow-sm">
              <AlertTriangle className="size-4 text-[#FFE800] animate-pulse" />
              <span className="text-xs md:text-sm font-black text-white tracking-wider uppercase">
                24/7 Rapid Emergency Response &amp; Restoration
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight mb-3">
              Water, Flood &amp; Urgent Facility Cleanup —{" "}
              <span className="text-[#FFE800]">We Respond When It Matters</span>
            </h2>
            <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed max-w-2xl mx-auto">
              Certified technicians for flood, water damage, and urgent mold cleanup. We work directly with your insurance to start facility recovery immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-md flex flex-col justify-between space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-[#FFE800]">
                    <Droplets className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white">Rapid Water Extraction</h3>
                    <p className="text-xs text-white/85 leading-relaxed font-medium mt-1">
                      Commercial-grade pumps, wet vacuums, and high-velocity air movers for fast structural drying.
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-md flex flex-col justify-between space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-[#FFE800]">
                    <ShieldCheck className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white">Certified Mold Remediation</h3>
                    <p className="text-xs text-white/85 leading-relaxed font-medium mt-1">
                      EPA-approved antimicrobial treatments, HEPA air filtration, and containment to protect air quality.
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-md flex flex-col justify-between space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-[#FFE800]">
                    <FileCheck className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white">Direct Insurance Billing</h3>
                    <p className="text-xs text-white/85 leading-relaxed font-medium mt-1">
                      We coordinate directly with your commercial property insurance carrier to expedite your claim.
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-md flex flex-col justify-between space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-[#FFE800]">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white">24/7 Rapid Crew Dispatch</h3>
                    <p className="text-xs text-white/85 leading-relaxed font-medium mt-1">
                      Equipped mobile vans with on-call technicians ready for weekday, evening, and weekend emergencies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/20 border border-white/15 flex items-start gap-2.5">
                <span className="text-[#FFE800] font-black text-sm leading-none mt-0.5">*</span>
                <p className="text-xs sm:text-sm text-white/95 font-semibold leading-relaxed">
                  <strong className="text-[#FFE800]">Call for details or sign up for emergency services.</strong> Custom rates may vary based upon facility requirements and crew availability.
                </p>
              </div>

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

  // Active Live Version: Clean Emergency CTA Banner
  return (
    <section className="relative py-8 md:py-10 overflow-hidden shadow-inner" style={{ background: "#E31837" }}>
      {/* Decorative background elements */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-white/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center justify-center gap-2 mb-2">
              <AlertTriangle className="size-5 text-[#FFE800] animate-pulse" />
              <span className="text-sm font-bold text-white tracking-widest uppercase drop-shadow-sm">
                24/7 Emergency Response Based Upon Availability
              </span>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-2 leading-tight">
              Water, Mold &amp; Emergency Cleanup —{" "}
              <span className="text-[#FFE800]">We Respond When It Matters</span>
            </h2>
            <p className="text-sm md:text-base text-white/90 max-w-3xl font-medium leading-relaxed">
              Technicians for flood, water damage, and mold cleanup. We work directly with your insurance, so recovery starts immediately.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
            <a
              href="tel:5083042369"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-black/10 border border-white/20 backdrop-blur-md text-xl md:text-2xl font-black text-white hover:bg-black/20 hover:text-[#FFE800] transition-colors w-full sm:w-auto"
            >
              <Phone className="size-5 md:size-6 shrink-0" />
              (508) 304-2369
            </a>

            <Link
              href="/contact?service=Emergency+Restoration+Services"
              className="inline-flex items-center justify-center px-6 py-3.5 text-base md:text-lg font-bold text-[#E31837] bg-white rounded-xl shadow-lg hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto whitespace-nowrap"
            >
              Get Emergency Help →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

