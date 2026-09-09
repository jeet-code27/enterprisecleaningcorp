"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Building2, 
  Stethoscope, 
  HardHat, 
  Briefcase, 
  Star, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  ExternalLink 
} from "lucide-react";

interface FeaturedStory {
  slug: string;
  clientName: string;
  industry: string;
  industryIcon: any;
  logo: string;
  logoBg: string;
  logoInvert?: boolean;
  statBadge: string;
  headline: string;
  testimonialSnippet: string;
  keyDeliverable: string;
}

const featuredStories: FeaturedStory[] = [
  {
    slug: "wcu-bank",
    clientName: "WCU Bank",
    industry: "Banking & Financial Services",
    industryIcon: Building2,
    logo: "/logos/wcu-logo.svg",
    logoBg: "bg-slate-50 border border-slate-200",
    statBadge: "7+ Branches Cleaned",
    headline: "Consistent Banking Sanitation & Security Across 7+ Locations",
    testimonialSnippet: "In banking, cleanliness is vital for customer trust. Enterprise's team works consistently to keep our facilities immaculate and disinfected.",
    keyDeliverable: "Nightly bank disinfection & teller/vault security compliance",
  },
  {
    slug: "apderm",
    clientName: "APDerm",
    industry: "Medical & Healthcare",
    industryIcon: Stethoscope,
    logo: "/logos/apderm-logo.svg",
    logoBg: "bg-[#002244] border border-[#001a33]",
    statBadge: "30+ Clinical Locations",
    headline: "Specialized Medical Disinfection for New England's Largest Network",
    testimonialSnippet: "Managing 30+ locations requires a responsive and dependable partner. Enterprise understands the strict compliance healthcare demands.",
    keyDeliverable: "Clinical pathogen control & multi-state coordination (MA, RI, NH)",
  },
  {
    slug: "coghlin-companies",
    clientName: "Coghlin Companies",
    industry: "Manufacturing & High-Tech",
    industryIcon: HardHat,
    logo: "/logos/coghlin-companies.webp",
    logoBg: "bg-[#002244] border border-[#001a33]",
    statBadge: "High-Tech Facilities",
    headline: "High-Specification Industrial & Cleanroom Environment Care",
    testimonialSnippet: "Their responsiveness and adaptability to our high-tech assembly and engineering facilities has made them a true long-term partner.",
    keyDeliverable: "ESD floor maintenance, lab sanitization, and flexible shift schedules",
  },
  {
    slug: "capital-group-properties",
    clientName: "Capital Group Properties",
    industry: "Property Management",
    industryIcon: Briefcase,
    logo: "/logos/capital-group.png",
    logoBg: "bg-[#002244] border border-[#001a33]",
    logoInvert: true,
    statBadge: "10+ Commercial Properties",
    headline: "Class-A Office Presentation & High Tenant Satisfaction",
    testimonialSnippet: "Enterprise ensures our Class-A office buildings leave an exceptional first impression on tenants and visitors every single morning.",
    keyDeliverable: "Multi-tenant common area care, day porter service & emergency response",
  },
];

const highlights = [
  { label: "Client Retention Rate", value: "97%", sub: "Industry leading stability" },
  { label: "Years in Business", value: "23+", sub: "Serving Central MA since 2003" },
  { label: "W2 Team Members", value: "100%", sub: "Zero subcontracting policy" },
  { label: "Customer Satisfaction", value: "5.0 ★", sub: "Verified New England clients" },
];

export function SuccessStoriesSection() {
  return (
    <section className="relative py-20 md:py-24 bg-white text-slate-900 border-t border-slate-200/80 overflow-hidden">
      {/* Subtle background ambient decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-50 rounded-full blur-3xl pointer-events-none opacity-70" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50 rounded-full blur-3xl pointer-events-none opacity-70" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-4 shadow-xs"
          >
            <Award className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#003057]">
              Verified Client Results &amp; Case Studies
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4"
          >
            Trusted by New England’s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003057] via-[#0090c8] to-[#003057]">
              Leading Organizations
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal"
          >
            From multi-branch banking networks and healthcare clinics to high-tech manufacturing campuses, explore how Enterprise Cleaning Corp delivers unmatched consistency and peace of mind.
          </motion.p>
        </div>

        {/* 4 Featured Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {featuredStories.map((story, index) => {
            const IconComponent = story.industryIcon;
            return (
              <motion.div
                key={story.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-white border border-slate-200/90 hover:border-[#0090c8]/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                <div>
                  {/* Top Bar: Industry & Stat Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
                      <IconComponent className="w-3.5 h-3.5 text-[#0090c8]" />
                      <span>{story.industry}</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-bold">
                      <span>{story.statBadge}</span>
                    </div>
                  </div>

                  {/* Client Logo & Rating */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className={`p-3 px-4 rounded-xl flex items-center justify-center h-14 w-36 sm:w-44 ${story.logoBg} shadow-xs`}>
                      <Image
                        src={story.logo}
                        alt={`${story.clientName} logo`}
                        width={140}
                        height={45}
                        className={`max-h-9 w-auto object-contain ${story.logoInvert ? "brightness-0 invert" : ""}`}
                      />
                    </div>

                    <div className="flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0090c8] transition-colors leading-snug">
                    {story.headline}
                  </h3>

                  {/* Testimonial Quote */}
                  <div className="relative pl-4 border-l-2 border-[#0090c8] mb-5">
                    <p className="text-slate-600 text-sm italic leading-relaxed">
                      "{story.testimonialSnippet}"
                    </p>
                  </div>

                  {/* Key Deliverable */}
                  <div className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 rounded-xl p-3.5 mb-6 border border-slate-200/70">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Key Result:</strong> {story.keyDeliverable}</span>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Enterprise Partnership</span>
                  <Link
                    href={`/success-stories/${story.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0090c8] hover:text-[#003057] transition-colors group/link"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlights / Performance Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm"
        >
          {highlights.map((item, idx) => (
            <div key={idx} className="text-center sm:text-left border-b sm:border-b-0 sm:border-r border-slate-200 last:border-0 pb-4 sm:pb-0 px-2 sm:px-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#003057] tracking-tight mb-1">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800">{item.label}</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-normal mt-0.5">{item.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Link
            href="/success-stories"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#003057] hover:bg-[#002244] text-white px-8 py-4 rounded-xl font-extrabold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02]"
          >
            <span>Explore All 7 Customer Success Stories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/commercial-cleaning-quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-7 py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 hover:border-[#0090c8]"
          >
            <span>Request a Free Walkthrough</span>
            <ExternalLink className="w-4 h-4 text-[#0090c8]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
