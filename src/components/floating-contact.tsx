"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    department: "Sales & New Quotes",
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          department: formData.department,
          service: `Quick Support (${formData.department})`,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          department: "Sales & New Quotes",
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setErrorMessage(result.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Floating contact submission error:", err);
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 bg-white rounded-2xl shadow-2xl p-3.5 sm:p-4 w-[calc(100vw-1.75rem)] max-w-[330px] sm:w-[340px] border border-blue-100 overflow-hidden relative max-h-[82vh] overflow-y-auto"
          >
            {/* Top Gradient Accent Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#003B7A] via-[#00B8FF] to-[#E31837]" />
            
            <button 
              onClick={() => {
                setIsOpen(false);
                setSubmitSuccess(false);
              }}
              className="absolute top-2.5 right-2.5 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-100 z-10"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            {/* Header Avatar Section */}
            <div className="flex items-center gap-2.5 mb-2.5 pt-0.5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-visible shrink-0 bg-blue-50 border-2 border-blue-100 flex items-center justify-center relative">
                <Image 
                  src="/images/superman.png" 
                  alt="Enterprise Support" 
                  width={56} 
                  height={70}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[48px] sm:h-[52px] w-auto max-w-none object-contain pointer-events-none drop-shadow-sm"
                />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">Enterprise Quick Support</h3>
                <p className="text-[10px] sm:text-xs text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" /> 
                  Online &bull; Ready to help
                </p>
              </div>
            </div>

            {submitSuccess ? (
              <div className="py-4 px-1 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={26} />
                </div>
                <h4 className="text-base font-bold text-slate-900">Message Delivered! 🦸‍♂️</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Thank you! Your message has been routed to our team. We will connect with you shortly.
                </p>
                <div className="pt-1 flex flex-col gap-1.5">
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="w-full py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                  <a href="tel:5088901000" className="w-full">
                    <button className="w-full bg-[#003B7A] hover:bg-[#002855] text-white text-[11px] font-semibold py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1.5">
                      <Phone size={12} /> Call Us: (508) 890-1000
                    </button>
                  </a>
                </div>
              </div>
            ) : (
              <>
                <div className="bg-blue-50/80 border border-blue-100 rounded-lg p-2 sm:p-2.5 mb-2.5 text-[11px] text-slate-700 font-medium leading-snug">
                  Select a department to reach our team directly! 🦸‍♂️
                </div>

                {errorMessage && (
                  <div className="mb-2 p-2 rounded-lg bg-red-50 border border-red-200 flex items-center gap-1.5 text-red-700 text-[11px] font-medium">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-500" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-2">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                      Department <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="w-full px-2.5 py-1.5 text-[11px] sm:text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8FF] focus:bg-white text-slate-900 font-medium"
                    >
                      <option value="Sales & New Quotes">Sales & New Quotes (Director Alex)</option>
                      <option value="Operations & Facility Cleaning">Operations & Cleaning (Director Julio)</option>
                      <option value="Customer Service & Support">Customer Service & Support</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Jane Doe"
                      className="w-full px-2.5 py-1.5 text-[11px] sm:text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8FF] focus:bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-2.5 py-1.5 text-[11px] sm:text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8FF] focus:bg-white text-slate-900"
                    />
                    <p className="text-[9.5px] text-slate-500 mt-0.5 font-medium leading-tight">
                      * Please ensure your email is correct so we can reply.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(508) 555-0123"
                      className="w-full px-2.5 py-1.5 text-[11px] sm:text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8FF] focus:bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you need help with..."
                      className="w-full px-2.5 py-1.5 text-[11px] sm:text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8FF] focus:bg-white text-slate-900 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#003B7A] hover:bg-[#002855] text-white font-bold text-[11px] sm:text-xs py-2 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1.5 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        Routing Message...
                      </>
                    ) : (
                      <>
                        <Send size={12} />
                        Send Quick Request
                      </>
                    )}
                  </button>
                </form>

                <div className="pt-2 mt-2 border-t border-slate-100 text-center">
                  <a href="tel:5088901000" className="text-[10px] sm:text-[11px] font-semibold text-slate-600 hover:text-[#00B8FF] transition-colors flex items-center justify-center gap-1">
                    <Phone size={11} className="text-[#00B8FF]" /> Or Call Us 24/7: (508) 890-1000
                  </a>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2.5">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ delay: 0.3, duration: 0.2 }}
              className="bg-white px-3 py-2 rounded-xl shadow-lg border border-gray-100 hidden sm:flex items-center relative cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <span className="text-xs font-semibold text-gray-700">How can we save your day? 🦸‍♂️</span>
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[5px] border-y-transparent border-l-[7px] border-l-white drop-shadow-sm" />
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative group w-[54px] h-[54px] sm:w-[60px] sm:h-[60px] rounded-full bg-white shadow-xl hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center border-2 border-blue-100 hover:border-[#003B7A] overflow-visible z-10 p-1"
          aria-label="Toggle Contact Menu"
        >
          <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-[#003B7A]" />
          <motion.div
            animate={isOpen ? { scale: 0.9, rotate: -10 } : { scale: 1, rotate: 0 }}
            className="relative z-10 w-full h-full flex items-center justify-center rounded-full bg-white overflow-visible"
          >
            {isOpen ? (
              <X size={24} className="text-gray-600" />
            ) : (
              <div className="relative w-full h-full overflow-visible flex items-center justify-center">
                <Image 
                  src="/images/superman.png" 
                  alt="Enterprise Support" 
                  width={75} 
                  height={95}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[70px] sm:h-[76px] w-auto max-w-none object-contain pointer-events-none transition-transform group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
            )}
          </motion.div>
          
          {!isOpen && (
             <span className="absolute top-0 right-0 z-20 flex h-4 w-4">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
             </span>
          )}
        </button>
      </div>
    </div>
  );
}
