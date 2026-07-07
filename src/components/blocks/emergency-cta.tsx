import Link from "next/link";
import { AlertTriangle, Phone } from "lucide-react";

export function EmergencyCTA() {
  return (
    <section className="relative py-8 md:py-10 overflow-hidden shadow-inner" style={{ background: "#E31837" }}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-white/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center justify-center gap-2 mb-2">
              <AlertTriangle className="size-5 text-[#FFE800] animate-pulse" />
              <span className="text-sm font-bold text-white tracking-widest uppercase drop-shadow-sm">
                24/7 Emergency Restoration Division
              </span>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-2 leading-tight">
              Water, Mold & Emergency Cleanup — <span className="text-[#FFE800]">We Respond When It Matters</span>
            </h2>
            <p className="text-sm md:text-base text-white/90 max-w-3xl font-medium leading-relaxed">
              Certified technicians for flood, fire, mold, and disaster cleanup. We work directly with your insurance, so recovery starts immediately.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
            <a href="tel:5088901000" className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-black/10 border border-white/20 backdrop-blur-md text-xl md:text-2xl font-black text-white hover:bg-black/20 hover:text-[#FFE800] transition-colors w-full sm:w-auto">
              <Phone className="size-5 md:size-6 shrink-0" />
              508-890-1000
            </a>

            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3.5 text-base md:text-lg font-bold text-[#E31837] bg-white rounded-xl shadow-lg hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto whitespace-nowrap">
              Get Emergency Help →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
