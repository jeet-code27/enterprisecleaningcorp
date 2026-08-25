"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Medal, Trophy } from "lucide-react";

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
            Worcester Business Journal Accolades
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

      {/* Awards Grid */}
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
                    src="/logos/wbj-logo.png"
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
                    src="/logos/wbj-logo.png"
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
    </div>
  );

  if (embedded) {
    return <div className={`relative w-full ${className}`}>{content}</div>;
  }

  return (
    <section className={`py-12 md:py-16 bg-slate-900 text-white relative overflow-hidden ${className}`}>
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#0090c8]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-[#E31837]/10 rounded-full blur-[120px] pointer-events-none" />
      {content}
    </section>
  );
}
