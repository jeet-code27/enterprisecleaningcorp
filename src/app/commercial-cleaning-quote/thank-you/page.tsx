"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, PhoneCall, ArrowRight, ShieldCheck, Clock, Award, Calendar } from "lucide-react";
import { MetaPixel, trackLeadSubmission } from "@/components/analytics/MetaPixel";

export default function CommercialCleaningThankYouPage() {
  useEffect(() => {
    // Fire Meta Pixel Lead Conversion Event on Mount
    trackLeadSubmission("Commercial Cleaning Quote Request");
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans">
      <MetaPixel />

      {/* Streamlined Header - Logo & Direct Phone Call Only */}
      <header className="bg-white border-b border-slate-200 text-slate-900 sticky top-0 z-50 shadow-xs">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/ecc-new-logo.png"
              alt="Enterprise Cleaning Corp"
              width={200}
              height={55}
              className="h-10 sm:h-12 w-auto object-contain"
              priority
            />
          </div>

          <a
            href="tel:508-890-1000"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E31837] text-white font-bold text-xs sm:text-sm hover:bg-red-700 transition-all shadow-md"
          >
            <PhoneCall className="w-4 h-4 text-[#FFE800]" />
            <span>508-890-1000</span>
          </a>
        </div>
      </header>

      {/* Main Thank You Conversion Content */}
      <main className="py-12 md:py-20 flex-1">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden p-8 sm:p-12 relative text-center">
            
            {/* Top Color Bar Accent */}
            <div className="h-3 w-full bg-gradient-to-r from-[#003057] via-[#00B8FF] to-[#E31837] absolute top-0 left-0 right-0" />

            {/* Checkmark Icon */}
            <div className="w-20 h-20 rounded-full bg-emerald-100 border-4 border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-inner animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Quote Request Successfully Submitted</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Thank You! Your Request Has Been Received.
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8 font-light">
              We have dispatched your facility details to our commercial operations team. Director Alex Puchulu or a senior account manager will reach out to you shortly.
            </p>

            {/* Next Steps Card */}
            <div className="bg-gradient-to-br from-slate-50 to-sky-50/50 p-6 sm:p-8 rounded-2xl border border-slate-200 text-left mb-8">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#003057] mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#00B8FF]" />
                What Happens Next?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#003057] text-[#00B8FF] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Immediate Review</div>
                    <div className="text-xs text-slate-600 font-medium">Our team is reviewing your facility specs and cleaning needs.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#003057] text-[#00B8FF] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Direct Phone / Email Contact</div>
                    <div className="text-xs text-slate-600 font-medium">We will call or email you within 15–30 minutes during business hours.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#003057] text-[#00B8FF] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Free On-Site Walkthrough & Proposal</div>
                    <div className="text-xs text-slate-600 font-medium">We’ll conduct a brief walkthrough and deliver a customized cleaning schedule & pricing proposal.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Call Box */}
            <div className="bg-[#003057] text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <div className="text-xs text-[#FFE800] font-bold uppercase tracking-wider">Need Urgent Support?</div>
                <div className="text-lg font-bold">Call Our Operations Hotline Directly</div>
              </div>
              <a
                href="tel:508-890-1000"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E31837] text-white font-bold text-sm hover:bg-red-700 transition-all shadow-md shrink-0"
              >
                <PhoneCall className="w-4 h-4 text-[#FFE800]" />
                <span>508-890-1000</span>
              </a>
            </div>

          </div>
        </div>
      </main>

      {/* Streamlined Footer - Zero Navigation Links */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-xl">
              <Image
                src="/images/ecc-new-logo.png"
                alt="Enterprise Cleaning Corporation"
                width={150}
                height={42}
                className="h-7 w-auto object-contain"
              />
            </div>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 text-xs font-medium">Commercial Cleaning & Facility Services</span>
          </div>
          <div className="text-slate-500 text-center md:text-right">
            <p>© {new Date().getFullYear()} Enterprise Cleaning Corporation. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
