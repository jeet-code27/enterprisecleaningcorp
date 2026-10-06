"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Medal, Trophy, Award, ArrowRight, CheckCircle2 } from "lucide-react";

const bobYears = ["2014", "2015", "2016", "2021"];

interface AwardsSectionProps {
  embedded?: boolean;
  className?: string;
}

export function AwardsSection({ embedded = false, className = "" }: AwardsSectionProps) {
  const content = (
    <div className={embedded ? "w-full" : "container mx-auto px-4 lg:px-8 max-w-7xl relative z-10"}>
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-3"
        >
          <Trophy className="w-4 h-4 text-[#FFE800]" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#FFE800]">
            Regional &amp; Industry Accolades
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight"
        >
          Recognized for <span className="text-[#00B8FF]">Excellence</span> & Leadership
        </motion.h2>
      </div>

      {/* WBJ Subsection Label */}
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="w-4 h-4 text-[#FFE800]" />
        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
          Worcester Business Journal Accolades
        </span>
        <div className="h-px bg-white/10 flex-1 ml-2" />
      </div>

      {/* Awards Grid (WBJ) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Award Card 1: WBJ BOB Award */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:bg-white/[0.08] hover:border-[#00B8FF]/50 transition-all duration-300 group shadow-lg"
          >
            <div>
              {/* Perfectly Bounded Logo Container */}
              <div className="relative w-full h-32 bg-white rounded-xl mb-4 shadow-md group-hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
                <Image
                  src="/logos/BOB_logo.png"
                  alt="Worcester Business Journal Best of Business Award"
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-white">Best of Business</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E31837] text-white shrink-0">
                  4-Time Winner
                </span>
              </div>

              <p className="text-xs text-slate-300 font-medium leading-relaxed mb-4">
                Voted top commercial cleaning company by WBJ readers across Central MA.
              </p>
            </div>

            <div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Winning Years
              </div>
              <div className="flex flex-wrap gap-1.5">
                {bobYears.map((year) => (
                  <span
                    key={year}
                    className="px-2 py-0.5 rounded text-[11px] font-extrabold bg-[#0090c8]/20 border border-[#0090c8]/40 text-[#00B8FF]"
                  >
                    {year}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Award Card 2: 40 Under 40 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:bg-white/[0.08] hover:border-[#FFE800]/50 transition-all duration-300 group shadow-lg"
          >
            <div>
              {/* Perfectly Bounded Logo Container */}
              <div className="relative w-full h-32 bg-white rounded-xl mb-4 shadow-md group-hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
                <Image
                  src="/logos/40_forty.png"
                  alt="WBJ 40 Under Forty"
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-white">40 Under 40 Alum</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#FFE800] text-slate-900 shrink-0">
                  Class of 2006
                </span>
              </div>

              <p className="text-xs text-slate-300 font-medium leading-relaxed mb-4">
                Honoring Stephen Buchalter (President) among Central MA's top leaders.
              </p>
            </div>

            <div className="text-[11px] text-slate-400 font-medium border-t border-white/10 pt-2">
              Worcester Business Journal
            </div>
          </motion.div>

          {/* Award Card 3: Top Growth Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:bg-white/[0.08] hover:border-[#00B8FF]/50 transition-all duration-300 group shadow-lg"
          >
            <div>
              <div className="relative w-full h-32 bg-[#0b1d33] border border-white/10 rounded-xl mb-4 shadow-md group-hover:scale-[1.02] transition-transform duration-300 overflow-hidden flex flex-col items-center justify-center p-3">
                <div className="relative w-full h-14 mb-1">
                  <Image
                    src="/logos/worcester-business-journal-logo.png"
                    alt="Worcester Business Journal"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center gap-1.5 text-[#00B8FF] text-[11px] font-bold bg-[#0090c8]/20 px-2.5 py-0.5 rounded border border-[#0090c8]/40">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Cover Feature</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-white">Top Growth Co.</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                  2006
                </span>
              </div>

              <p className="text-xs text-slate-300 font-medium leading-relaxed mb-4">
                Featured on the cover of WBJ for rapid commercial expansion.
              </p>
            </div>

            <a
              href="https://wbjournal.com/article/cover-top-growth-all-sectors-on-deck/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full px-3 py-2 rounded-lg bg-white/10 hover:bg-[#0090c8] text-white text-xs font-bold transition-all duration-200"
            >
              <span>Read Cover Story</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </motion.div>

          {/* Award Card 4: Fittest CEO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:bg-white/[0.08] hover:border-[#FFE800]/50 transition-all duration-300 group shadow-lg"
          >
            <div>
              <div className="relative w-full h-32 bg-[#0b1d33] border border-white/10 rounded-xl mb-4 shadow-md group-hover:scale-[1.02] transition-transform duration-300 overflow-hidden flex flex-col items-center justify-center p-3">
                <div className="relative w-full h-14 mb-1">
                  <Image
                    src="/logos/worcester-business-journal-logo.png"
                    alt="Worcester Business Journal"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center gap-1.5 text-[#FFE800] text-[11px] font-bold bg-[#FFE800]/15 px-2.5 py-0.5 rounded border border-[#FFE800]/30">
                  <Medal className="w-3.5 h-3.5" />
                  <span>Leadership Spotlight</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-white">Fittest CEO</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
                  2007
                </span>
              </div>

              <p className="text-xs text-slate-300 font-medium leading-relaxed mb-4">
                Honoring Stephen Buchalter for discipline, health & leadership.
              </p>
            </div>

            <a
              href="https://wbjournal.com/article/meet-the-wbjs-fittest-ceos/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full px-3 py-2 rounded-lg bg-white/10 hover:bg-[#FFE800] hover:text-slate-900 text-white text-xs font-bold transition-all duration-200"
            >
              <span>Read Spotlight</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </motion.div>
        </div>

        {/* ─── OFFICIAL COMMUNITY'S CHOICE AWARDS (BELOW WBJ AWARDS) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 md:mt-16 pt-10 md:pt-12 border-t border-white/10"
        >
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-3">
              <Medal className="w-4 h-4 text-[#FFE800]" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FFE800]">
                The Official Community's Choice Awards
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              4-Year Consecutive Finalist &amp; <span className="text-[#00B8FF]">MetroWest Winner</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-2.5 max-w-2xl mx-auto leading-relaxed">
              Presented by LocaliQ and the USA TODAY Network. Ever since the Cleaning Service Company category was introduced in 2022, Enterprise Cleaning Corporation has been recognized every single year—earning 4 consecutive years of honors, back-to-back MetroWest Winner titles, and active finalist standing.
            </p>
          </div>

          {/* 3 Awards Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Card 1: 2025 MetroWest Winner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:bg-white/[0.08] hover:border-[#00B8FF]/50 transition-all duration-300 group shadow-lg"
            >
              <div>
                <div className="relative w-full h-40 bg-white rounded-xl mb-4 shadow-md group-hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
                  <Image
                    src="/logos/2025.png"
                    alt="2025 The Official Community's Choice Awards MetroWest Winner - Enterprise Cleaning Corp"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-3"
                  />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-white">2025 MetroWest Winner</h4>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#00B8FF]/20 border border-[#00B8FF]/40 text-[#00B8FF] shrink-0">
                    WINNER
                  </span>
                </div>

                <p className="text-xs text-slate-300 font-medium leading-relaxed mb-3">
                  Voted #1 Commercial Cleaning Company by readers and facilities throughout MetroWest.
                </p>
              </div>

              <div className="text-[11px] font-semibold text-slate-400 border-t border-white/10 pt-2 flex items-center justify-between">
                <span>Community's Choice</span>
                <span className="text-emerald-400 font-bold">Latest Edition</span>
              </div>
            </motion.div>

            {/* Card 2: 2024 MetroWest Winner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:bg-white/[0.08] hover:border-[#00B8FF]/50 transition-all duration-300 group shadow-lg"
            >
              <div>
                <div className="relative w-full h-40 bg-white rounded-xl mb-4 shadow-md group-hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
                  <Image
                    src="/logos/2024.webp"
                    alt="2024 The Official Community's Choice Awards MetroWest Winner - Enterprise Cleaning Corp"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-3"
                  />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-white">2024 MetroWest Winner</h4>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#00B8FF]/20 border border-[#00B8FF]/40 text-[#00B8FF] shrink-0">
                    WINNER
                  </span>
                </div>

                <p className="text-xs text-slate-300 font-medium leading-relaxed mb-3">
                  Consecutive regional winner recognizing superior janitorial and commercial facility care.
                </p>
              </div>

              <div className="text-[11px] font-semibold text-slate-400 border-t border-white/10 pt-2 flex items-center justify-between">
                <span>Community's Choice</span>
                <span className="text-[#00B8FF] font-bold">MetroWest</span>
              </div>
            </motion.div>

            {/* Card 3: 2022 Best of the Best Finalist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:bg-white/[0.08] hover:border-[#FFE800]/50 transition-all duration-300 group shadow-lg"
            >
              <div>
                <div className="relative w-full h-40 bg-white rounded-xl mb-4 shadow-md group-hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
                  <Image
                    src="/logos/2022.png"
                    alt="2022 Best of the Best Finalist - The Enterprise & Taunton Daily Gazette"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-3"
                  />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-white">2022 Best of the Best</h4>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#FFE800]/20 border border-[#FFE800]/40 text-[#FFE800] shrink-0">
                    FINALIST
                  </span>
                </div>

                <p className="text-xs text-slate-300 font-medium leading-relaxed mb-3">
                  Selected as an elite finalist in The Enterprise &amp; Taunton Daily Gazette Community Choice Awards.
                </p>
              </div>

              <div className="text-[11px] font-semibold text-slate-400 border-t border-white/10 pt-2 flex items-center justify-between">
                <span>The Enterprise / Gazette</span>
                <span className="text-amber-300 font-bold">Top Finalist</span>
              </div>
            </motion.div>
          </div>

          {/* Trust Badges Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Recognized Every Year Since Category Inception (2022 – 2025)</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
              <Trophy className="w-4 h-4 text-[#FFE800]" />
              <span>Back-to-Back 2024 &amp; 2025 MetroWest Winner</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
              <Medal className="w-4 h-4 text-[#00B8FF]" />
              <span>Current Year Finalist (4+ Consecutive Years)</span>
            </div>
          </div>
        </motion.div>

        {/* ─── DUAL REGIONAL CHAMBERS OF COMMERCE TRUST BANNER ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 md:mt-10 rounded-2xl bg-gradient-to-r from-blue-950/85 via-slate-900/95 to-blue-950/85 border border-blue-500/30 p-5 sm:p-6 shadow-2xl backdrop-blur-md"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-5 text-center sm:text-left">
              {/* Dual Chamber Badges */}
              <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 shrink-0">
                <div className="relative w-36 h-20 sm:w-44 sm:h-24 rounded-xl overflow-hidden bg-white p-2 border border-white/20 shadow-lg shrink-0 hover:scale-105 transition-transform">
                  <Image
                    src="/logos/worcester-chamber-member.png"
                    alt="Member of Worcester Regional Chamber of Commerce"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="relative w-32 h-20 sm:w-36 sm:h-24 rounded-xl overflow-hidden bg-white p-2 border border-white/20 shadow-lg shrink-0 hover:scale-105 transition-transform">
                  <Image
                    src="/logos/corridor-9495-chamber.png"
                    alt="Member of Corridor 9/495 Regional Chamber of MetroWest"
                    fill
                    className="object-contain p-1"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#FFE800]">
                  <Award className="w-3.5 h-3.5" /> Regional Authority &amp; Chamber Partnerships
                </div>
                <h3 className="text-base sm:text-lg font-black text-white leading-snug">
                  Proud Member of Worcester Regional &amp; Corridor 9/495 Chambers of Commerce
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-2xl leading-relaxed">
                  Enterprise Cleaning Corporation is an active member in good standing with both the Worcester Regional Chamber of Commerce and the Corridor 9/495 Regional Chamber. Serving 20+ communities throughout Central Massachusetts and MetroWest, we are committed to the highest regional business and facility standards.
                </p>
              </div>
            </div>
            <div className="shrink-0 w-full lg:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FFE800] text-slate-950 font-black text-xs uppercase tracking-wider hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 w-full lg:w-auto"
              >
                <span>Connect With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
    </div>
  );

  if (embedded) {
    return <div className={`relative w-full ${className}`}>{content}</div>;
  }

  return (
    <section className={`pt-12 md:pt-16 pb-6 md:pb-8 bg-slate-900 text-white relative overflow-hidden ${className}`}>
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#0090c8]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-[#E31837]/10 rounded-full blur-[120px] pointer-events-none" />
      {content}
    </section>
  );
}
