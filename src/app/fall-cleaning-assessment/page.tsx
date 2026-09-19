"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  Stethoscope, 
  Factory, 
  Warehouse, 
  Building, 
  CheckCircle2, 
  PhoneCall, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Loader2, 
  AlertCircle,
  FileCheck,
  Calendar,
  Layers,
  ChevronDown,
  Wind
} from "lucide-react";

export default function FallCleaningAssessmentPage() {
  const formRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    facilityType: "Office Cleaning",
    facilitySize: "10,000 - 25,000 sq ft",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.companyName,
        serviceType: `Fall Cleaning Assessment - ${formData.facilityType}`,
        facilitySize: formData.facilitySize,
        message: formData.message || "Requested Fall Facility Cleaning Assessment via Google My Business special offer.",
        source: "Google Business Profile - Fall Cleaning Assessment Offer",
      };

      const res = await fetch("/api/ad-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || "Unable to submit your request. Please call us at (508) 890-1000.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error occurred. Please call our team at (508) 890-1000.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Top Notification Announcement Banner */}
      <div className="bg-gradient-to-r from-[#003057] via-[#003B7A] to-[#0090c8] text-white py-2.5 px-4 text-center text-xs sm:text-sm font-semibold tracking-wide border-b border-white/10 flex items-center justify-center gap-2">
        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-[#E31837] text-[11px] font-black uppercase text-white shadow">
          Special Offer
        </span>
        <span>Google Business Profile Exclusive: Complimentary On-Site Facility Assessment</span>
      </div>

      {/* Hero Section */}
      <section className="relative bg-white pt-8 sm:pt-12 pb-16 border-b border-slate-200 overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Visual & Offer Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#E31837] text-xs sm:text-sm font-black tracking-wide uppercase">
                <span className="text-base">🍁</span> Limited-Time Seasonal Offer
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  GET YOUR <span className="text-[#E31837]">FALL CLEANING</span> DONE.
                </h1>
                <p className="text-lg sm:text-xl font-bold text-slate-700">
                  Comprehensive Facility Cleaning Assessment for a cleaner, safer season.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Prepare your corporate office, medical clinic, industrial facility, or warehouse for the autumn and upcoming winter months. Our 100% in-house teams evaluate floor care, entryway defense, air ducts, and clinical sanitization — completely free with zero obligation.
                </p>
              </div>

              {/* Campaign Image Display Box with High-End Frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-2xl bg-slate-900 group">
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-[#E31837] text-white shadow-md uppercase tracking-wider">
                    Official Campaign
                  </span>
                </div>
                <Image
                  src="/images/fall-cleaning-assessment-offer.jpg"
                  alt="Enterprise Cleaning Corporation Fall Cleaning Done - Facility Cleaning Assessment"
                  width={1200}
                  height={900}
                  priority
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Value Stats Highlight Bar from Poster */}
              <div className="grid grid-cols-3 gap-3 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#003057] to-[#004f8c] text-white shadow-xl text-center">
                <div className="border-r border-white/15 pr-2">
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#FFE800]">23+</div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 mt-0.5">Years Experience</div>
                </div>
                <div className="border-r border-white/15 px-2">
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#00B8FF]">97%</div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 mt-0.5">Client Retention</div>
                </div>
                <div className="pl-2">
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#FFE800]">100%</div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 mt-0.5">In-House Staff</div>
                </div>
              </div>

              {/* Target Industries Covered in this Offer */}
              <div className="bg-slate-100/90 rounded-2xl p-5 border border-slate-200 space-y-3">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">
                  Industries Eligible for This Free Assessment
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Office Cleaning", icon: Building2 },
                    { label: "Medical Facilities", icon: Stethoscope },
                    { label: "Industrial & Manufacturing", icon: Factory },
                    { label: "Warehouses & Logistics", icon: Warehouse },
                    { label: "Property Management", icon: Building },
                  ].map((item, idx) => (
                    <span 
                      key={idx} 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold shadow-sm"
                    >
                      <item.icon className="w-4 h-4 text-[#0090c8]" />
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-5" ref={formRef}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-slate-200/90 sticky top-24 relative overflow-hidden">
                {/* Decorative Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#003B7A] via-[#0090c8] to-[#E31837]" />

                <div className="mb-6 space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#E31837] text-xs font-extrabold uppercase tracking-wide">
                    Claim Offer
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Claim Your Free Assessment
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Fill out this form or call <a href="tel:5088901000" className="text-[#0090c8] font-bold underline">(508) 890-1000</a>. We respond within 2 business hours.
                  </p>
                </div>

                {submitStatus === "success" ? (
                  <div className="py-8 px-4 text-center space-y-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-xl font-extrabold text-emerald-900">
                      Assessment Request Received!
                    </h3>
                    <p className="text-sm text-emerald-800 leading-relaxed max-w-sm mx-auto">
                      Thank you! Our operations director will reach out shortly to schedule your on-site Fall Facility Assessment.
                    </p>
                    <div className="pt-2">
                      <a
                        href="tel:5088901000"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-sm shadow hover:bg-emerald-800 transition"
                      >
                        <PhoneCall className="w-4 h-4" /> Need Immediate Info? Call Now
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    {submitStatus === "error" && (
                      <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2.5 text-red-700 text-xs">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. John Miller"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0090c8] focus:bg-white transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0090c8] focus:bg-white transition"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(508) 000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0090c8] focus:bg-white transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company or Facility Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Biotech / Central MA Medical"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0090c8] focus:bg-white transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="facilityType" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Facility Type
                        </label>
                        <div className="relative">
                          <select
                            id="facilityType"
                            value={formData.facilityType}
                            onChange={handleChange}
                            className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0090c8] focus:bg-white transition"
                          >
                            <option value="Office Cleaning">Corporate Office</option>
                            <option value="Medical Facilities">Medical & Healthcare</option>
                            <option value="Industrial & Manufacturing">Industrial & Manufacturing</option>
                            <option value="Warehouses">Warehouse & Logistics</option>
                            <option value="Property Management">Commercial Real Estate</option>
                            <option value="School / Municipal">School / Municipal</option>
                            <option value="Other Commercial Facility">Other Commercial Facility</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="facilitySize" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Approx. Size (Sq Ft)
                        </label>
                        <div className="relative">
                          <select
                            id="facilitySize"
                            value={formData.facilitySize}
                            onChange={handleChange}
                            className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0090c8] focus:bg-white transition"
                          >
                            <option value="Under 5,000 sq ft">Under 5,000 sq ft</option>
                            <option value="5,000 - 10,000 sq ft">5,000 - 10,000 sq ft</option>
                            <option value="10,000 - 25,000 sq ft">10,000 - 25,000 sq ft</option>
                            <option value="25,000 - 50,000 sq ft">25,000 - 50,000 sq ft</option>
                            <option value="50,000+ sq ft">50,000+ sq ft</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Specific Goals or Current Cleaning Challenges
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about floor care needs, current provider issues, or target assessment date..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0090c8] focus:bg-white transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-2xl bg-[#E31837] hover:bg-red-700 active:scale-[0.99] text-white font-extrabold text-base shadow-xl shadow-red-600/30 transition flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Submitting Assessment...</span>
                        </>
                      ) : (
                        <>
                          <span>CLAIM YOUR FREE ASSESSMENT</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <div className="pt-2 text-center text-xs text-slate-500 flex items-center justify-center gap-4">
                      <span className="inline-flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" /> Fully Insured
                      </span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-[#0090c8]" /> Zero Obligation
                      </span>
                      <span>·</span>
                      <span>100% Free</span>
                    </div>
                  </form>
                )}

                {/* Direct Call Quick Link */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-500 font-medium">Prefer speaking now?</span>
                  <a
                    href="tel:5088901000"
                    className="font-bold text-[#003B7A] hover:text-[#0090c8] flex items-center gap-1.5 transition"
                  >
                    <PhoneCall className="w-4 h-4 text-[#E31837]" /> (508) 890-1000
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Your Assessment Covers */}
      <section className="py-16 bg-slate-100 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-black tracking-widest uppercase text-[#0090c8] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Complete Facility Audit
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What Is Included In Your Free Fall Assessment?
            </h2>
            <p className="text-base text-slate-600">
              A comprehensive on-site walk-through led by an experienced facility specialist to uncover hidden sanitation vulnerabilities and prepare your facility for the colder months.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Layers,
                color: "text-amber-600 bg-amber-50 border-amber-200",
                title: "Floor & Entryway Defense",
                description: "Evaluation of high-traffic walkways, matting systems, and hard-floor sealant resilience to protect against autumn moisture and winter ice-melt salt damage."
              },
              {
                icon: Wind,
                color: "text-sky-600 bg-sky-50 border-sky-200",
                title: "Indoor Air & High Dusting",
                description: "Inspection of vents, ceiling fixtures, and return air registers as commercial HVAC systems switch to heating and windows stay sealed."
              },
              {
                icon: Stethoscope,
                color: "text-red-600 bg-red-50 border-red-200",
                title: "Touchpoint Sanitization Audit",
                description: "Review of high-frequency transmission vectors (handles, elevator buttons, breakrooms, restrooms) to minimize seasonal illness absenteeism."
              },
              {
                icon: FileCheck,
                color: "text-emerald-600 bg-emerald-50 border-emerald-200",
                title: "Tailored Scope & Budget Plan",
                description: "Itemized frequency recommendations, shift scheduling (day porter vs. nightly), and clear transparent pricing with no hidden fees."
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${step.color}`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Enterprise Cleaning */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="text-xs font-black tracking-widest uppercase text-[#E31837] bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
                The Enterprise Difference
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Safer. Cleaner. Healthier. Happier Workplaces.
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                With over two decades serving Central Massachusetts, Rhode Island, and Southern New Hampshire, Enterprise Cleaning Corporation delivers dependable commercial cleaning that gives facility directors total peace of mind.
              </p>

              <div className="space-y-3.5">
                {[
                  "100% In-House Uniformed Employees — Never Subcontracted",
                  "Dedicated Quality Supervisors Conducting Regular Audits",
                  "Hospital-Grade EPA Disinfectants & Commercial Extraction Systems",
                  "24/7 Live Incident & Emergency Response Support",
                  "Consistent 97% Client Retention Rate Year-Over-Year"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={scrollToForm}
                  className="px-6 py-3.5 rounded-xl bg-[#003B7A] hover:bg-[#002f61] text-white font-extrabold text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
                >
                  Schedule Your Walkthrough <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:5088901000"
                  className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm transition flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#0090c8]" /> (508) 890-1000
                </a>
              </div>
            </div>

            {/* Right Trust Column */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-[#0090c8]/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#FFE800]">
                  <Award className="w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest">Recognized Excellence</span>
                </div>
                <h3 className="text-2xl font-black text-white">4× Best of Business Winner</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Honored four consecutive years by the Worcester Business Journal as Central Massachusetts&apos; trusted commercial cleaning leader.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00B8FF] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Headquarters & Service Depot</div>
                    <div>99 Hartwell Street, West Boylston, MA 01583</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#FFE800] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Operational Coverage</div>
                    <div>Day porters, evening crews & 24/7 emergency dispatch</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/10 text-xs text-slate-200">
                <span className="font-bold text-[#FFE800]">Google Offer Terms:</span> This complimentary assessment is available for qualified commercial, industrial, healthcare, and educational properties across Massachusetts, Rhode Island & Southern NH.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Sticky Action Bar on Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 px-4 flex sm:hidden items-center justify-between shadow-2xl">
        <div>
          <div className="text-[10px] font-black uppercase tracking-wider text-[#E31837]">Limited Time Offer</div>
          <div className="text-xs font-extrabold text-slate-900">Fall Facility Assessment</div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="tel:5088901000"
            className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-900 font-bold text-xs flex items-center gap-1"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#0090c8]" /> Call
          </a>
          <button
            onClick={scrollToForm}
            className="px-4 py-2 rounded-xl bg-[#E31837] text-white font-extrabold text-xs tracking-wide shadow-md"
          >
            Claim Assessment
          </button>
        </div>
      </div>
    </main>
  );
}
