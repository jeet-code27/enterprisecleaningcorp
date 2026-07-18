"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, Clock, Award, Star } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden" style={{ background: "#020c18" }}>

      {/* ── VIDEO BACKGROUND ─────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          autoPlay
          className="w-full h-full object-cover"
        >
          <source src="/videos/new-hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay — light enough to keep video vivid */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Subtle animated grain texture for premium feel */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "128px",
          }}
        />
      </div>

      {/* ── HERO CONTENT ─────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col justify-center flex-1 px-6 sm:px-10 lg:px-20 pt-28 pb-20 max-w-[1400px] mx-auto w-full">

        {/* Top badge */}
        <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-8">
          <div className="flex items-center gap-2.5 bg-white/10 border border-white/15 backdrop-blur-md rounded-lg px-4 py-2.5">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E31837] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E31837]" />
            </span>
            <span className="text-xs font-semibold text-white tracking-widest uppercase">24 / 7</span>
            <div className="w-px h-4 bg-white/20" />
            <span className="text-xs font-medium text-white/80">Emergency Response Available</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div {...fadeUp(0.25)} className="mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-[1.2] tracking-[-0.01em] max-w-2xl">
            Central Massachusetts&apos; Most Trusted<br />
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #00B8FF 0%, #0090c8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Commercial Cleaning,
            </span>
            <br />Day &amp; Night Cleaning Company
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p {...fadeUp(0.4)} className="max-w-2xl text-sm md:text-base text-white/75 mb-10 leading-relaxed">
          Trusted by{" "}
          <span className="text-white/90 font-medium">Hanover Insurance, Workers Credit Union, Shields Healthcare, Capital Group, Millbury Credit Union</span>{" "}
          &amp; 140+ Central MA businesses
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row items-center gap-4 mb-14">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2 bg-[#E31837] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:bg-[#c91530] hover:shadow-[0_8px_40px_rgba(227,24,55,0.45)] hover:-translate-y-0.5 overflow-hidden h-12"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            Get a Free On-Site Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>

          <a
            href="tel:5088901000"
            className="group inline-flex items-center justify-center gap-2.5 border border-white/25 bg-white/8 backdrop-blur-md text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:border-[#00B8FF]/60 hover:bg-white/15 hover:-translate-y-0.5 h-12"
          >
            <Phone className="w-4 h-4 text-[#00B8FF]" />
            (508) 890-1000
          </a>
        </motion.div>


        {/* Trust Bar */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 border-t border-white/10"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00B8FF]/15 border border-[#00B8FF]/30">
              <ShieldCheck className="w-5 h-5 text-[#00B8FF]" />
            </div>
            <div>
              <p className="text-xs text-white/50 leading-none mb-0.5">Fully</p>
              <p className="text-sm font-bold text-white leading-none">Insured & Bonded</p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-white/10" />

          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFE800]/10 border border-[#FFE800]/30">
              <Clock className="w-5 h-5 text-[#FFE800]" />
            </div>
            <div>
              <p className="text-xs text-white/50 leading-none mb-0.5">Always</p>
              <p className="text-sm font-bold text-white leading-none">24/7 Available</p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-white/10" />

          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E31837]/10 border border-[#E31837]/30">
              <Award className="w-5 h-5 text-[#E31837]" />
            </div>
            <div>
              <p className="text-xs text-white/50 leading-none mb-0.5">Since 2001</p>
              <p className="text-sm font-bold text-white leading-none">23+ Years Experience</p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-white/10" />

          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10">
              <span className="text-lg font-black text-white leading-none">140</span>
            </div>
            <div>
              <p className="text-xs text-white/50 leading-none mb-0.5">Happy</p>
              <p className="text-sm font-bold text-white leading-none">Clients Served</p>
            </div>
          </div>
        </motion.div> */}
      </div>

      {/* Bottom edge fade into white page */}
      {/* <div
        className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, #ffffff, transparent)" }}
      /> */}
    </section>
  );
};
