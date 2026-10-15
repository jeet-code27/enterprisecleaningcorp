import React, { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, PhoneCall, Clock, CheckCircle2, ChevronRight } from "lucide-react";
import { EmergencyAuthorizationForm } from "./emergency-authorization-form";

export const metadata: Metadata = {
  title: { absolute: "Emergency Services Contract & Dispatch Authorization | Enterprise Cleaning Corp" },
  description: "Official Emergency Services Contract and Dispatch Authorization portal for Enterprise Cleaning Corporation. Sign and authorize rapid crew dispatch 24/7.",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/emergency-authorization",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EmergencyAuthorizationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100 text-slate-900 py-6 sm:py-12 px-3 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Soft Ambient Brand Accents */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-blue-200/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-4xl mx-auto relative z-10 space-y-6 sm:space-y-8">
        {/* Top Trust Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm text-xs font-semibold text-slate-600">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
            <Link href="/" className="text-slate-500 hover:text-slate-900 transition-colors">
              Enterprise Cleaning
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/emergency-restoration-services-central-ma" className="text-slate-500 hover:text-slate-900 transition-colors">
              Emergency Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-[#003B7A] font-bold">Dispatch Authorization</span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-700 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" /> Fully Insured &amp; Bonded
            </span>
            <div className="flex flex-col items-center sm:items-end">
              <a
                href="tel:5088901000"
                className="inline-flex items-center gap-1.5 font-bold text-[#E31837] hover:underline"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>(508) 890-1000</span>
              </a>
              <span className="text-[10px] text-slate-500 font-medium">
                Calls 10 PM – 8 AM returned by 8 AM
              </span>
            </div>
          </div>
        </div>

        {/* Suspense Form Container */}
        <Suspense
          fallback={
            <div className="bg-white text-slate-900 rounded-3xl p-12 text-center space-y-4 shadow-xl border border-slate-200">
              <div className="w-10 h-10 border-4 border-[#003B7A] border-t-transparent rounded-full animate-spin mx-auto" />
              <h2 className="text-xl font-black">Loading Emergency Dispatch Portal...</h2>
              <p className="text-xs text-slate-500">Preparing secure Stripe gateway connection...</p>
            </div>
          }
        >
          <EmergencyAuthorizationForm />
        </Suspense>

        {/* Bottom Trust & Compliance Footer */}
        <div className="pt-6 pb-2 text-center space-y-2 border-t border-slate-200/60">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> We Work 24/7 (On-Site Mitigation)
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#003B7A]" /> OSHA 30-Hour Certified Field Operations
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-600" /> Calls 10 PM – 8 AM Returned by 8 AM
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            Enterprise Cleaning Corporation • 99 Hartwell Street, West Boylston, MA 01583 • Licensed &amp; Insured
          </p>
        </div>
      </div>
    </div>
  );
}
