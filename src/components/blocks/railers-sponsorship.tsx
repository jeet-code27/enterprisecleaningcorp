"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, ShieldCheck, MapPin, Sparkles, ArrowRight, PhoneCall, ExternalLink } from "lucide-react";

interface RailersSponsorshipProps {
  className?: string;
}

export function RailersSponsorship({ className = "" }: RailersSponsorshipProps) {
  return (
    <section
      className={`relative pt-4 pb-16 md:pb-24 bg-slate-900 text-white overflow-hidden ${className}`}
      aria-label="Worcester Railers Premier Partnership and Sponsorship"
    >
      {/* Subtle matching ambient glows consistent with Awards section */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-[#0090c8]/10 rounded-full blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-[450px] h-[300px] bg-[#E31837]/10 rounded-full blur-[130px]" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Elegant gradient divider linking the sections */}
        <div className="w-full mb-10 md:mb-14">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Official Worcester Railers Premier Partner Poster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <a
              href="https://railershc.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Official Worcester Railers Website"
              className="relative w-full max-w-md rounded-3xl p-1 bg-gradient-to-b from-[#00B8FF]/50 via-white/20 to-[#E31837]/50 shadow-2xl shadow-black/80 group block cursor-pointer"
            >
              <div className="relative bg-slate-950 rounded-[22px] overflow-hidden border border-white/15">
                {/* Glow & Lighting Accent */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#00B8FF]/30 rounded-full blur-3xl pointer-events-none z-10" />
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#E31837]/30 rounded-full blur-3xl pointer-events-none z-10" />

                {/* Poster Image */}
                <div className="relative aspect-[818/1024] w-full overflow-hidden">
                  <Image
                    src="/images/worcester-railers-poster.jpg"
                    alt="Enterprise Cleaning Corporation - Official Premier Partner of Worcester Railers HC"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 440px"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                    priority
                  />
                  {/* Subtle inner shadow / border highlight */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[22px] pointer-events-none" />
                </div>
              </div>
            </a>
            <a
              href="https://railershc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#00B8FF] mt-3 font-medium transition-colors group"
            >
              <span>Visit Official Site: railershc.com</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform text-[#00B8FF]" />
            </a>
          </motion.div>

          {/* RIGHT: Content & Community Story */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Tag / Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0090c8]/20 border border-[#0090c8]/40 text-[#00B8FF] text-xs font-extrabold uppercase tracking-wider mb-4">
              <Trophy className="w-3.5 h-3.5 text-[#FFE800]" />
              <span>Community & Sports Sponsorship</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5">
              Premier Sponsors of the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B8FF] to-[#38bdf8]">
                Worcester Railers
              </span>
            </h2>

            {/* Narrative text */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
              At <strong className="text-white font-bold">Enterprise Cleaning Corporation</strong>, our commitment to Central Massachusetts goes far beyond janitorial excellence. We are proud to stand as a <span className="text-[#FFE800] font-semibold">Premier Partner and Sponsor</span> of the{" "}
              <a
                href="https://railershc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00B8FF] font-bold underline underline-offset-4 decoration-[#00B8FF]/60 hover:decoration-[#00B8FF] transition-colors inline-flex items-center gap-1"
              >
                <span>Worcester Railers HC (ECHL)</span>
                <ExternalLink className="w-3.5 h-3.5 inline text-[#00B8FF]" />
              </a>
              —the heartbeat of hockey at the DCU Center.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Whether cheering on the professional team on game nights or championing local youth hockey tournaments and athletic events across Worcester County, we believe in uplifting the sports and civic spirit that bring our local families and businesses together.
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0090c8]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Trophy className="w-4 h-4 text-[#00B8FF]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">ECHL Professional Hockey</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Premier partner supporting Worcester's premier hockey club.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E31837]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#E31837]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Tournaments & Youth Sports</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Promoting grassroots athletic development & community tournaments.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FFE800]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#FFE800]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">23+ Years Central MA Roots</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Locally owned in West Boylston, serving Worcester and beyond.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">97% Client Retention</h4>
                  <p className="text-xs text-slate-400 mt-0.5">The same reliability on the ice as on your commercial facility.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full">
              <Link
                href="/commercial-cleaning-quote"
                className="inline-flex items-center justify-center gap-2 bg-[#E31837] hover:bg-[#c9142f] text-white px-6 py-3.5 rounded-xl font-extrabold text-sm transition-all duration-200 shadow-lg shadow-[#E31837]/25 hover:shadow-xl hover:scale-[1.02]"
              >
                <span>Request a Free Facility Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://railershc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-5 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:border-[#00B8FF]/50"
              >
                <span>Visit RailersHC.com</span>
                <ExternalLink className="w-4 h-4 text-[#00B8FF]" />
              </a>

              <a
                href="tel:508-890-1000"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border border-white/10 px-4 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
              >
                <PhoneCall className="w-4 h-4 text-[#00B8FF]" />
                <span>508-890-1000</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
