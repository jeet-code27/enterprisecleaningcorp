"use client";

import { motion } from "framer-motion";
import { Handshake, RefreshCw, HardHat, Siren, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Handshake,
    title: "Organizational accountability",
    description: "When something needs attention, you reach Alex or Julio directly — not a franchise ticket number or a call center.",
  },
  {
    icon: RefreshCw,
    title: "97% retention means consistency",
    description: "Our clients don't leave — so you're never retraining a new crew on your building every six months.",
  },
  {
    icon: HardHat,
    title: "One permanent, trained team",
    description: "Every cleaner is trained for your facility and fully vetted. We never subcontract your account out.",
  },
  {
    icon: Siren,
    title: "Full emergency capability",
    description: "One vendor for routine cleaning and 24/7 emergency cleanup — a single number when disaster strikes.",
  }
];

export function WhyEnterprise() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Features */}
          <div className="order-1">
            <h5 className="text-[#E31837] font-bold tracking-widest uppercase text-sm mb-4">Why Enterprise Cleaning Corporation</h5>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Enterprise <span className="text-[#00B8FF]">redefines</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-12 text-justify">
              what businesses expect from a commercial cleaning partner — proving that a company can operate at enterprise scale while still delivering the personal accountability, consistency, and results that make switching providers unthinkable.
            </p>
            
            <div className="space-y-10">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.15, duration: 0.6, type: "spring", bounce: 0.4 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-slate-100 text-[#00B8FF] group-hover:scale-110 group-hover:bg-[#00B8FF] group-hover:text-white transition-all duration-300">
                      <feature.icon size={28} strokeWidth={2.5} className="md:w-8 md:h-8" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-medium text-base md:text-lg">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Image & Quote */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 flex flex-col items-center lg:items-start"
          >
            {/* Image Wrapper */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white w-full">
              <img 
                src="/images/office_cleaning_hero.png" 
                alt="Enterprise Commercial Cleaning" 
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Quote Box */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative mt-6 sm:mt-8 mx-auto w-full max-w-xl bg-white rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 z-10"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10 text-[#00B8FF]/20 mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h4V8h-4zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h4V8h-4z" />
              </svg>
              <p className="text-base sm:text-lg md:text-xl font-medium text-slate-700 italic leading-relaxed mb-6 md:mb-8">
                We pioneered the managed model in Worcester. Four WBJ Awards and a 97% retention rate prove it works!
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Stephen Buchalter</h4>
                  <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider">Owner, Enterprise Cleaning Corporation</p>
                </div>
                <Link href="/about" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#E31837] text-white font-bold text-sm hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-700/30 shrink-0">
                  Meet the Team
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
