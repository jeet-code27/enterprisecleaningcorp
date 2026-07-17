"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Droplets, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

const BRAND_BLUE = "#00B8FF";
const BRAND_NAVY = "#0B1E36";
const BRAND_RED = "#E31837";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Satisfaction Guarantee",
    description: "We oversee and manage our employees throughout the duration of your job to guarantee your peace of mind and satisfaction.",
    colSpan: "md:col-span-2",
    style: { background: "#e6f8ff", border: `1.5px solid ${BRAND_BLUE}30` },
    iconStyle: { color: BRAND_BLUE, background: `${BRAND_BLUE}18` },
    titleColor: BRAND_NAVY,
    textColor: "#4a6178",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "One-off, weekly or fortnightly visits. Whether you require daily, weekly, monthly, or semiannual cleaning, we accommodate any schedule and budget.",
    colSpan: "md:col-span-1",
    style: { background: "#f0faff", border: "1.5px solid #cceeff" },
    iconStyle: { color: BRAND_NAVY, background: "#fff", border: "1px solid #cceeff" },
    titleColor: BRAND_NAVY,
    textColor: "#4a6178",
  },
  {
    icon: Briefcase,
    title: "Vetted Cleaners",
    description: "Vetted & background-checked cleaners. Every employee is trained specifically for the job they'll perform, and you can keep the same cleaner for every visit.",
    colSpan: "md:col-span-1",
    style: { background: "#f0faff", border: "1.5px solid #cceeff" },
    iconStyle: { color: BRAND_NAVY, background: "#fff", border: "1px solid #cceeff" },
    titleColor: BRAND_NAVY,
    textColor: "#4a6178",
  },
  {
    icon: Droplets,
    title: "Flood & Emergency Response",
    description: "We recognize the importance of Flood emergencies. As of 2018, we opened our Flood Clean-up & Emergency Services Division.",
    colSpan: "md:col-span-2",
    style: { background: BRAND_BLUE, border: `1.5px solid ${BRAND_BLUE}` },
    iconStyle: { color: BRAND_BLUE, background: "#fff" },
    titleColor: "#fff",
    textColor: "rgba(255,255,255,0.85)",
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 px-6 md:px-12 w-full bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full blur-[100px] pointer-events-none" style={{ background: `${BRAND_BLUE}18` }} />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full blur-[100px] pointer-events-none" style={{ background: `${BRAND_BLUE}10` }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h5 className="text-sm uppercase tracking-widest font-bold mb-3" style={{ color: BRAND_BLUE }}>About Our Company</h5>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6" style={{ color: BRAND_NAVY }}>
                   What We <span style={{ color: BRAND_BLUE }}>Provide</span>
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "#4a6178" }}>
                   Locally owned, Enterprise Cleaning Corporation has over 23+ years of experience to tackle any commercial cleaning need you have. Every employee is trained specifically for the job they'll perform. Our team of technicians have certifications in Flood, Mold Remediation, Crime Scene Clean-up, Disaster Clean-up and Lead Paint Removal.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                        className={cn(
                            "rounded-[2rem] p-8 sm:p-10 flex flex-col items-start gap-4 transition-transform hover:scale-[1.02] duration-300",
                            feature.colSpan,
                        )}
                        style={feature.style}
                    >
                        <div className="p-4 rounded-2xl" style={feature.iconStyle}>
                            <feature.icon className="w-8 h-8" strokeWidth={2} />
                        </div>
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: feature.titleColor }}>
                                {feature.title}
                            </h3>
                            <p className="text-lg leading-relaxed" style={{ color: feature.textColor }}>
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}
