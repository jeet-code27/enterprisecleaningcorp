import { Metadata } from "next";
import { CareerForm } from "@/components/forms/CareerForm";
import { CheckCircle2, ShieldCheck, Award, Users, Clock, DollarSign, TrendingUp, Sparkles, HeartHandshake, ArrowRight, MapPin, Calendar, Phone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers & Job Opportunities | Enterprise Cleaning Corporation",
  description: "Join the team at Enterprise Cleaning Corporation. We offer commercial cleaning jobs with competitive pay, steady hours, paid training, and growth opportunities across Central MA.",
  keywords: ["Commercial cleaning jobs", "Enterprise Cleaning careers", "Janitorial jobs Worcester MA", "Day porter jobs", "Cleaning employment Central MA"],
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/careers",
  },
};

const BENEFITS = [
  {
    icon: DollarSign,
    title: "Competitive & Timely Pay",
    description: "We offer fair, competitive wage rates with reliable bi-weekly pay schedules and opportunities for performance bonuses.",
  },
  {
    icon: Clock,
    title: "Flexible Shift Schedules",
    description: "Choose from evening shifts, day porter roles, or weekend assignments that fit around your personal life and schedule.",
  },
  {
    icon: ShieldCheck,
    title: "Paid Training & Uniforms",
    description: "No previous cleaning experience? No problem. We provide paid hands-on training, company uniforms, and full safety gear.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth & Promotion",
    description: "We promote from within! Many of our supervisors and regional managers started out as cleaning technicians.",
  },
];

const POSITIONS = [
  {
    title: "Commercial Cleaning Technician",
    type: "Full-Time & Part-Time",
    shift: "Evening / Night Shift",
    description: "Perform nightly janitorial duties in commercial office buildings, industrial facilities, and medical sites across Central MA.",
    reqs: ["Must be detail-oriented", "Valid transportation", "Pass background check"],
  },
  {
    title: "Day Porter",
    type: "Full-Time",
    shift: "Day Shift (Mon - Fri)",
    description: "Provide continuous daytime facility maintenance, restroom restocking, trash removal, and high-touch surface sanitization for corporate offices.",
    reqs: ["Friendly customer service", "Punctual & reliable", "Physical stamina"],
  },
  {
    title: "Floor Care Specialist",
    type: "Full-Time & Part-Time",
    shift: "Night & Weekend Shift",
    description: "Operate heavy-duty commercial equipment for hard floor stripping, waxing, buffing, and carpet extraction.",
    reqs: ["Floor care experience preferred", "Equipment operation skills", "Team player"],
  },
  {
    title: "Night Operations Supervisor",
    type: "Full-Time",
    shift: "Evening Shift",
    description: "Manage regional cleaning crews, perform quality control walkthroughs, ensure safety compliance, and maintain client satisfaction.",
    reqs: ["2+ years supervisory experience", "Valid Driver's License", "Strong communication"],
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-[#003B7A] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-[#00B8FF]/10_1px,transparent_1px] [background-size:24px_24px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-extrabold text-[#00B8FF] bg-[#00B8FF]/10 px-4 py-1.5 rounded-full border border-[#00B8FF]/20 mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Join Our Growing Team
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Build Your Career With <br className="hidden sm:inline" />
              <span className="text-[#00B8FF]">Enterprise Cleaning</span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl font-medium leading-relaxed mb-10">
              Over 23+ years of commercial cleaning excellence across Central Massachusetts & New England. We offer fair pay, reliable hours, hands-on training, and a supportive team culture.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#apply-form"
                className="px-8 py-4 bg-[#E31837] hover:bg-red-700 text-white font-extrabold text-sm sm:text-base rounded-full shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2"
              >
                Apply Online Now <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#open-positions"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base rounded-full transition-colors border border-white/20"
              >
                View Open Positions
              </a>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-white/10 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00B8FF]">150+</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider mt-1">Dedicated Employees</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00B8FF]">23+</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider mt-1">Years in Business</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00B8FF]">97%</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider mt-1">Retention Rate</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00B8FF]">24/7</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider mt-1">Flexible Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Why People Love Working at Enterprise
            </h2>
            <p className="text-slate-600 font-medium">
              We treat our cleaning technicians and staff like family. Your hard work is valued, recognized, and rewarded.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#00B8FF]/10 text-[#00B8FF] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#E31837] bg-red-50 px-3 py-1 rounded-full inline-block mb-3">
              Now Hiring
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Current Job Openings
            </h2>
            <p className="text-slate-600 font-medium">
              We have immediate openings for motivated individuals in Central Massachusetts, New Hampshire, and surrounding areas.
            </p>
          </div>

          {/* Highlighted Top Job Card */}
          <div className="mb-12 bg-gradient-to-br from-slate-900 via-slate-900 to-[#003B7A] rounded-3xl p-6 sm:p-10 text-white shadow-2xl border-2 border-[#00B8FF]/40 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#E31837]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#00B8FF]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-extrabold text-white bg-[#E31837] px-3.5 py-1.5 rounded-full shadow-lg shadow-red-900/30">
                    <Sparkles className="w-3.5 h-3.5" /> Featured Opening — Immediate Hiring
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#00B8FF] bg-[#00B8FF]/10 px-3 py-1 rounded-full border border-[#00B8FF]/30">
                    <MapPin className="w-3.5 h-3.5" /> Concord, NH
                  </span>
                </div>
                <span className="text-sm font-extrabold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-inner">
                  <DollarSign className="w-4 h-4 text-emerald-400" /> $17.00 / Hour
                </span>
              </div>

              {/* Title & Main Overview */}
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight flex items-center gap-2 flex-wrap">
                  📢 CLEANING JOB OPENING – Derm Clinic 🫧🧹
                </h3>
                <p className="text-slate-200 text-base sm:text-lg font-medium leading-relaxed max-w-3xl">
                  We are hiring for a cleaning position at a Derm Clinic in Concord, New Hampshire! ✨ Great opportunity for anyone looking for extra income with an evening schedule!
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00B8FF]/20 text-[#00B8FF] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Location</div>
                    <div className="text-sm font-extrabold text-white">CONCORD, NH</div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00B8FF]/20 text-[#00B8FF] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Schedule</div>
                    <div className="text-sm font-extrabold text-white">After 6:00 PM</div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00B8FF]/20 text-[#00B8FF] flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Days</div>
                    <div className="text-sm font-extrabold text-white">Monday – Friday</div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Hours & Pay</div>
                    <div className="text-sm font-extrabold text-white">3 hrs/day (15 hrs/wk) • $17/hr</div>
                  </div>
                </div>
              </div>

              {/* Direct Phone & Action Buttons */}
              <div className="pt-6 border-t border-white/10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm font-semibold">
                  <span className="text-slate-300 font-bold flex items-center gap-1.5 shrink-0">
                    <Phone className="w-4 h-4 text-[#00B8FF]" /> Interested? Contact Us:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="tel:5083044094"
                      className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/20 transition-colors flex items-center gap-1.5 font-extrabold text-sm"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-400" /> 508-304-4094
                    </a>
                    <a
                      href="tel:5088014129"
                      className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/20 transition-colors flex items-center gap-1.5 font-extrabold text-sm"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-400" /> 508-801-4129
                    </a>
                  </div>
                </div>

                <a
                  href="#apply-form"
                  className="px-8 py-3.5 bg-[#E31837] hover:bg-red-600 text-white font-extrabold text-sm rounded-xl shadow-lg hover:shadow-red-600/40 transition-all text-center flex items-center justify-center gap-2 shrink-0 uppercase tracking-wider"
                >
                  Apply For Derm Clinic Job <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {POSITIONS.map((pos, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#003B7A] bg-blue-50 px-3 py-1 rounded-full">
                      {pos.type}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {pos.shift}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">{pos.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{pos.description}</p>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Key Requirements:</h4>
                    <ul className="space-y-1.5">
                      {pos.reqs.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="#apply-form"
                  className="w-full py-3 bg-slate-900 hover:bg-[#003B7A] text-white font-bold text-xs uppercase tracking-wider rounded-xl text-center transition-colors"
                >
                  Apply For This Position
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply-form" className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Apply Today
            </h2>
            <p className="text-slate-600 font-medium">
              Fill out our online application in less than 3 minutes. No complex resume required to start!
            </p>
          </div>

          <CareerForm />
        </div>
      </section>

      {/* Questions Footer Callout */}
      <section className="py-12 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-2">Have Questions About Working With Us?</h3>
          <p className="text-slate-400 text-sm mb-6">
            Contact our office directly at <strong className="text-white">(508) 890-1000</strong> or email <a href="mailto:customerservice@enterprisecleaningcorp.com" className="text-[#00B8FF] hover:underline">customerservice@enterprisecleaningcorp.com</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
