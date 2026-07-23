"use client";

import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error || "Failed to submit the form.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-5 sm:p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
      {submitStatus === "success" ? (
        <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
          <p className="text-slate-600 max-w-sm">
            Thank you for reaching out. We have received your message and will respond within 24 business hours.
          </p>
          <button
            onClick={() => setSubmitStatus("idle")}
            className="mt-6 px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Free Quote</h3>
          
          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-bold text-slate-700">First Name *</label>
                <input 
                  type="text" 
                  id="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00B8FF]/50 focus:border-[#00B8FF] transition-all bg-slate-50 focus:bg-white" 
                  placeholder="John" 
                  required 
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-bold text-slate-700">Last Name *</label>
                <input 
                  type="text" 
                  id="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00B8FF]/50 focus:border-[#00B8FF] transition-all bg-slate-50 focus:bg-white" 
                  placeholder="Doe" 
                  required 
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00B8FF]/50 focus:border-[#00B8FF] transition-all bg-slate-50 focus:bg-white" 
                  placeholder="john@company.com" 
                  required 
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00B8FF]/50 focus:border-[#00B8FF] transition-all bg-slate-50 focus:bg-white" 
                  placeholder="(508) 555-0123" 
                  required 
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-bold text-slate-700">Company Name</label>
              <input 
                type="text" 
                id="company" 
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00B8FF]/50 focus:border-[#00B8FF] transition-all bg-slate-50 focus:bg-white" 
                placeholder="Your Company LLC" 
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-bold text-slate-700">Service of Interest *</label>
              <select 
                id="service" 
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00B8FF]/50 focus:border-[#00B8FF] transition-all bg-slate-50 focus:bg-white text-slate-700" 
                required
                disabled={isSubmitting}
              >
                <option value="">Select a service...</option>
                <option value="Night & Day Cleaning">Night & Day Cleaning</option>
                <option value="Floor Care Services">Floor Care Services</option>
                <option value="Deep Cleaning">Deep Cleaning</option>
                <option value="Flood Cleanup">Flood Cleanup</option>
                <option value="Turnover Cleaning">Turnover Cleaning</option>
                <option value="Post Construction">Post Construction</option>
                <option value="Other Service">Other Service</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-slate-700">How can we help? *</label>
              <textarea 
                id="message" 
                value={formData.message}
                onChange={handleChange}
                rows={4} 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00B8FF]/50 focus:border-[#00B8FF] transition-all bg-slate-50 focus:bg-white resize-none" 
                placeholder="Tell us about your facility and cleaning needs..." 
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#0090c8] hover:bg-[#00B8FF] text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
            <p className="text-xs text-center text-slate-500 font-medium">
              We usually respond within 24 business hours.
            </p>
          </form>
        </>
      )}
    </div>
  );
}
