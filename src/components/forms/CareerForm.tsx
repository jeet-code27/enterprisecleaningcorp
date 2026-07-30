"use client";

import { useState } from "react";
import { Send, CheckCircle2, User, Mail, Phone, MapPin, Briefcase, Calendar, Clock, Award, ShieldCheck, FileText, AlertCircle } from "lucide-react";

export function CareerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cityStateZip: "",
    position: "Commercial Cleaning Technician",
    employmentType: "Full-Time",
    shiftPreference: "Night Shift",
    startDate: "",
    yearsExperience: "1-3 years",
    hasDriversLicense: "Yes",
    hasReliableTransport: "Yes",
    authorizedToWork: "Yes",
    workExperience: "",
    additionalNotes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const [res, web3Res] = await Promise.all([
        fetch("/api/careers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }),
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "9cd6a347-e4cf-4537-ba7d-58bd4298fb51",
            subject: `New Job Application: ${formData.fullName} - ${formData.position}`,
            from_name: formData.fullName,
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            city_state_zip: formData.cityStateZip,
            position: formData.position,
            employment_type: formData.employmentType,
            shift_preference: formData.shiftPreference,
            start_date: formData.startDate || "Not specified",
            years_experience: formData.yearsExperience,
            authorized_to_work: formData.authorizedToWork,
            has_drivers_license: formData.hasDriversLicense,
            has_reliable_transport: formData.hasReliableTransport,
            work_experience: formData.workExperience || "Not provided",
            additional_notes: formData.additionalNotes || "Not provided",
          }),
        }),
      ]);

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit application");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-emerald-100 text-center max-w-2xl mx-auto my-8">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
          Application Received!
        </h3>
        <p className="text-slate-600 text-base sm:text-lg mb-6 leading-relaxed">
          Thank you for applying to join the Enterprise Cleaning team, <strong className="text-slate-900">{formData.fullName}</strong>. Our hiring managers review applications daily and will reach out to you if your qualifications match our current openings.
        </p>
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-left text-sm text-slate-700 space-y-2 mb-8">
          <p><strong>Position:</strong> {formData.position}</p>
          <p><strong>Employment Type:</strong> {formData.employmentType} ({formData.shiftPreference})</p>
          <p><strong>Contact Email:</strong> {formData.email}</p>
          <p><strong>Phone Number:</strong> {formData.phone}</p>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              cityStateZip: "",
              position: "Commercial Cleaning Technician",
              employmentType: "Full-Time",
              shiftPreference: "Night Shift",
              startDate: "",
              yearsExperience: "1-3 years",
              hasDriversLicense: "Yes",
              hasReliableTransport: "Yes",
              authorizedToWork: "Yes",
              workExperience: "",
              additionalNotes: "",
            });
          }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#003B7A] text-white rounded-full font-bold hover:bg-[#002855] transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100 max-w-4xl mx-auto">
      <div className="border-b border-slate-100 pb-6 mb-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Employment Application
        </h3>
        <p className="text-slate-500 mt-2 font-medium">
          Please fill out the form below completely. Our hiring team reviews all applications promptly.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 text-sm font-medium">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Section 1: Personal Details */}
      <div className="mb-8">
        <h4 className="text-sm font-bold uppercase tracking-wider text-[#00B8FF] mb-4 flex items-center gap-2">
          <User className="w-4 h-4" /> 1. Personal Information
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. John Smith"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#00B8FF] focus:bg-white outline-none transition-all text-slate-900 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#00B8FF] focus:bg-white outline-none transition-all text-slate-900 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="(508) 000-0000"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#00B8FF] focus:bg-white outline-none transition-all text-slate-900 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              City, State & Zip Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="cityStateZip"
              required
              value={formData.cityStateZip}
              onChange={handleChange}
              placeholder="e.g. Worcester, MA 01608"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#00B8FF] focus:bg-white outline-none transition-all text-slate-900 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Position & Availability */}
      <div className="mb-8 border-t border-slate-100 pt-8">
        <h4 className="text-sm font-bold uppercase tracking-wider text-[#00B8FF] mb-4 flex items-center gap-2">
          <Briefcase className="w-4 h-4" /> 2. Position & Availability
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Position Desired <span className="text-red-500">*</span>
            </label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#00B8FF] focus:bg-white outline-none transition-all text-slate-900 text-sm font-medium"
            >
              <option value="Commercial Cleaning Technician">Commercial Cleaning Technician</option>
              <option value="Day Porter">Day Porter</option>
              <option value="Floor Care Specialist (Stripping & Waxing)">Floor Care Specialist (Stripping & Waxing)</option>
              <option value="Night Shift Supervisor">Night Shift Supervisor</option>
              <option value="General Facility Cleaner">General Facility Cleaner</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Employment Type <span className="text-red-500">*</span>
            </label>
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#00B8FF] focus:bg-white outline-none transition-all text-slate-900 text-sm font-medium"
            >
              <option value="Full-Time">Full-Time (30+ hours/week)</option>
              <option value="Part-Time">Part-Time (15-29 hours/week)</option>
              <option value="Flexible / Open">Flexible / Open to Either</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Shift Preference <span className="text-red-500">*</span>
            </label>
            <select
              name="shiftPreference"
              value={formData.shiftPreference}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#00B8FF] focus:bg-white outline-none transition-all text-slate-900 text-sm font-medium"
            >
              <option value="Night Shift">Night Shift (Evening / Overnight)</option>
              <option value="Day Shift">Day Shift (Morning / Afternoon)</option>
              <option value="Weekend Shift">Weekend Shift</option>
              <option value="Any Shift">Any Shift Available</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Earliest Available Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#00B8FF] focus:bg-white outline-none transition-all text-slate-900 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Qualifications & Legal */}
      <div className="mb-8 border-t border-slate-100 pt-8">
        <h4 className="text-sm font-bold uppercase tracking-wider text-[#00B8FF] mb-4 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" /> 3. Qualifications & Requirements
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Commercial Cleaning Experience
            </label>
            <select
              name="yearsExperience"
              value={formData.yearsExperience}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#00B8FF] focus:bg-white outline-none transition-all text-slate-900 text-sm font-medium"
            >
              <option value="No experience (Entry Level)">No experience (We will train you!)</option>
              <option value="Less than 1 year">Less than 1 year</option>
              <option value="1-3 years">1-3 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="5+ years">5+ years</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Authorized to work in the U.S.? <span className="text-red-500">*</span>
            </label>
            <select
              name="authorizedToWork"
              value={formData.authorizedToWork}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#00B8FF] focus:bg-white outline-none transition-all text-slate-900 text-sm font-medium"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Valid Driver's License? <span className="text-red-500">*</span>
            </label>
            <select
              name="hasDriversLicense"
              value={formData.hasDriversLicense}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#00B8FF] focus:bg-white outline-none transition-all text-slate-900 text-sm font-medium"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Reliable Personal Transportation? <span className="text-red-500">*</span>
            </label>
            <select
              name="hasReliableTransport"
              value={formData.hasReliableTransport}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#00B8FF] focus:bg-white outline-none transition-all text-slate-900 text-sm font-medium"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
      </div>

      {/* Section 4: Work History & Notes */}
      <div className="mb-8 border-t border-slate-100 pt-8">
        <h4 className="text-sm font-bold uppercase tracking-wider text-[#00B8FF] mb-4 flex items-center gap-2">
          <FileText className="w-4 h-4" /> 4. Previous Work Experience & Comments
        </h4>
        <div className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Brief Cleaning or Work History (Previous employers, duties, etc.)
            </label>
            <textarea
              name="workExperience"
              rows={3}
              value={formData.workExperience}
              onChange={handleChange}
              placeholder="Tell us briefly about your past job roles, cleaning experience, or relevant skills..."
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#00B8FF] focus:bg-white outline-none transition-all text-slate-900 text-sm leading-relaxed"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Additional Comments / Why do you want to join Enterprise Cleaning?
            </label>
            <textarea
              name="additionalNotes"
              rows={2}
              value={formData.additionalNotes}
              onChange={handleChange}
              placeholder="Any additional information you would like us to know..."
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#00B8FF] focus:bg-white outline-none transition-all text-slate-900 text-sm leading-relaxed"
            />
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-400 font-medium">
          Enterprise Cleaning Corporation is an equal opportunity employer. Background checks and references may be required.
        </p>
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-8 py-4 bg-[#E31837] hover:bg-red-700 text-white font-extrabold text-sm rounded-xl shadow-lg hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
        >
          {loading ? (
            <span>Submitting Application...</span>
          ) : (
            <>
              <span>Submit Application</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
