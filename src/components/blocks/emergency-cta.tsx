import Link from "next/link";
import Image from "next/image";
import {
  AlertTriangle,
  Phone,
  ArrowRight,
  ShieldCheck,
  Droplets,
  FileCheck,
  Sparkles,
} from "lucide-react";

const EMERGENCY_SERVICES = [
  {
    num: "1",
    title: "Water extraction and drying",
    desc: "Commercial wet vacuums, extraction units, and rapid structural drying.",
    icon: Droplets,
  },
  {
    num: "2",
    title: "Urgent bathroom cleanup",
    desc: "Immediate bio-sanitation and disinfection for unexpected overflows and backups.",
    icon: Sparkles,
  },
  {
    num: "3",
    title: "Unexpected spills",
    desc: "Fast chemical, liquid, and hazard containment to safeguard your facility.",
    icon: AlertTriangle,
  },
  {
    num: "4",
    title: "Emergency commercial deep cleaning & floor care",
    desc: "High-power machine scrubbing, heavy disinfection, and floor restoration.",
    icon: ShieldCheck,
  },
  {
    num: "5",
    title: "We coordinate with insurance companies",
    desc: "Direct communication, photo documentation, and reporting with your property insurance carrier.",
    icon: FileCheck,
  },
];

export function EmergencyCTA() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-br from-[#ba0c25] via-[#E31837] to-[#8d0718] text-white shadow-2xl">
      {/* Decorative background grid and ambient lighting */}
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
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/25 border border-white/20 backdrop-blur-md mb-4 shadow-sm">
            <AlertTriangle className="size-4 text-[#FFE800] animate-pulse" />
            <span className="text-xs md:text-sm font-black text-white tracking-wider uppercase">
              24/7 Rapid Emergency Response &amp; Restoration
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight mb-3">
            Commercial Emergency Cleanup —{" "}
            <span className="text-[#FFE800]">We Respond When It Matters</span>
          </h2>
          <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed max-w-2xl mx-auto">
            Equipped mobile response units ready for urgent commercial cleanup, deep restoration, and rapid deployment across Central Massachusetts.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column: 5 Emergency Services + Action CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {EMERGENCY_SERVICES.slice(0, 4).map((svc) => (
                <div
                  key={svc.num}
                  className="p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-md flex items-start gap-3 hover:bg-white/15 transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center font-black text-[#FFE800] text-sm shrink-0 border border-white/30 shadow-sm">
                    {svc.num}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-white leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-white/85 leading-relaxed font-medium mt-1">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              ))}

              {/* Service #5: Insurance Coordination (Full Width) */}
              <div className="sm:col-span-2 p-4 rounded-2xl bg-white/15 border-2 border-[#FFE800]/50 backdrop-blur-md shadow-md flex items-start gap-3 hover:bg-white/20 transition-all">
                <div className="w-8 h-8 rounded-xl bg-[#FFE800] text-slate-950 flex items-center justify-center font-black text-sm shrink-0 shadow-md">
                  5
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-black text-white leading-snug">
                      We coordinate with insurance companies
                    </h3>
                    <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-[#FFE800]/25 text-[#FFE800] text-[10px] font-black uppercase tracking-wider">
                      Direct Support
                    </span>
                  </div>
                  <p className="text-xs text-white/90 leading-relaxed font-medium mt-1">
                    Direct communication, photo documentation, and itemized reporting with your property insurance carrier to expedite your recovery.
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="tel:5088901000"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-[#c8102e] hover:bg-slate-100 font-black text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
              >
                <Phone className="size-5 text-[#c8102e] group-hover:rotate-12 transition-transform" />
                <span>Call (508) 890-1000</span>
              </a>

              <Link
                href="/emergency-restoration-services-central-ma#emergency-form"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-black/30 hover:bg-black/45 border-2 border-white/30 hover:border-white/60 text-white font-bold text-base shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Emergency Callback Form →</span>
              </Link>
            </div>

            <div className="pt-1 text-center sm:text-left">
              <Link
                href="/blog/emergency-cleaning-services-worcester-central-ma"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/80 hover:text-white underline decoration-white/40 hover:decoration-white transition-colors"
              >
                <span>Learn how our 4-step emergency dispatch works (1-2-3-4)</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Poster Card Featuring the Van and Workers */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-slate-900 group">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/emergency-cleaning-services-offer.jpg"
                  alt="Enterprise Cleaning Corporation Emergency Response Fleet & Dedicated Technicians"
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

