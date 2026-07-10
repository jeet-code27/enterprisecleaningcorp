import { Metadata } from "next";
import { 
  MapPin, PhoneCall, Mail, Clock, ArrowRight, ShieldCheck, Trophy, Users 
} from "lucide-react";
import Link from "next/link";
import { CTASection } from "@/components/blocks/cta-with-glow";

export const metadata: Metadata = {
  title: "Contact Us | Enterprise Cleaning Corporation",
  description: "Get in touch with Enterprise Cleaning Corporation for a free on-site assessment and quote in Central Massachusetts.",
  alternates: {
    canonical: "https://enterprisecleaningcorp.com/contact"
  }
};

export default function ContactPage() {
  return (
    <>
      {/* Top Full-Width Image Banner */}
      <div className="w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/images/cover-new.jpeg" 
          alt="Enterprise Cleaning Cover" 
          className="w-full h-auto object-cover shadow-md"
        />
      </div>

      {/* Hero Text Section Below Image */}
      <section className="relative py-12 md:py-16 bg-white overflow-hidden border-b border-slate-100">
        <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0090c8]/10 border border-[#0090c8]/20">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#0090c8] animate-pulse"></span>
              <span className="text-sm font-bold text-[#0090c8] tracking-[0.1em] uppercase">We Are Here To Help</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
              Contact <span className="text-[#0090c8]">Enterprise Cleaning</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
              Ready for a cleaner, safer, and more professional facility? Reach out to our team today for a free, no-obligation on-site assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Information & Trust Signals */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold text-[#0090c8] mb-6">Get In Touch</h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                  Whether you need nightly janitorial services, daytime porters, or emergency cleanup, our Central Massachusetts team is ready to respond.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00B8FF]/10 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-6 h-6 text-[#00B8FF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us 24/7</h3>
                    <a href="tel:5088901000" className="text-slate-600 hover:text-[#00B8FF] font-medium transition-colors text-lg">
                      (508) 890-1000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00B8FF]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#00B8FF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Email Us</h3>
                    <a href="mailto:customerservice@enterprisecleaningcorp.com" className="text-slate-600 hover:text-[#00B8FF] font-medium transition-colors text-lg">
                      customerservice@enterprisecleaningcorp.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00B8FF]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#00B8FF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Headquarters</h3>
                    <p className="text-slate-600 font-medium text-lg">
                      99 Hartwell Street<br />
                      West Boylston, MA 01583
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00B8FF]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-[#00B8FF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-slate-600 font-medium text-lg">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      <span className="text-[#E31837] font-bold text-sm">24/7 Emergency Service Available</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 mt-8 border-t border-slate-200">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Why Choose Enterprise</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                    <Trophy className="w-4 h-4 text-[#FFE800]" />
                    <span className="text-sm font-bold text-slate-700">4× Best of Business</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-[#00B8FF]" />
                    <span className="text-sm font-bold text-slate-700">Fully Insured</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                    <Users className="w-4 h-4 text-[#0090c8]" />
                    <span className="text-sm font-bold text-slate-700">97% Retention Rate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Free Quote</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-bold text-slate-700">First Name *</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00B8FF]/50 focus:border-[#00B8FF] transition-all bg-slate-50 focus:bg-white" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-bold text-slate-700">Last Name *</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00B8FF]/50 focus:border-[#00B8FF] transition-all bg-slate-50 focus:bg-white" placeholder="Doe" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address *</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00B8FF]/50 focus:border-[#00B8FF] transition-all bg-slate-50 focus:bg-white" placeholder="john@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone Number *</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00B8FF]/50 focus:border-[#00B8FF] transition-all bg-slate-50 focus:bg-white" placeholder="(508) 555-0123" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-bold text-slate-700">Company Name</label>
                  <input type="text" id="company" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00B8FF]/50 focus:border-[#00B8FF] transition-all bg-slate-50 focus:bg-white" placeholder="Your Company LLC" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-bold text-slate-700">Service of Interest *</label>
                  <select id="service" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00B8FF]/50 focus:border-[#00B8FF] transition-all bg-slate-50 focus:bg-white text-slate-700" required>
                    <option value="">Select a service...</option>
                    <option value="nightly">Nightly Janitorial</option>
                    <option value="day-porter">Day Porter & Matron</option>
                    <option value="floor-care">Floor & Carpet Care</option>
                    <option value="emergency">Emergency Cleanup</option>
                    <option value="other">Other Service</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700">How can we help? *</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00B8FF]/50 focus:border-[#00B8FF] transition-all bg-slate-50 focus:bg-white resize-none" placeholder="Tell us about your facility and cleaning needs..." required></textarea>
                </div>

                <button type="submit" className="w-full bg-[#0090c8] hover:bg-[#00B8FF] text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-center text-slate-500 font-medium">
                  We usually respond within 24 business hours.
                </p>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Reach Out <span className="text-[#00B8FF]">Directly</span>
            </h2>
            <p className="mt-3 text-slate-500 font-medium">
              No call centers. No ticket numbers. Real people who know your account.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Stephen — Owner */}
            <div className="flex flex-col items-center text-center bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-[#E31837]/20 mb-5 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/stephon.png" alt="Stephen Buchalter" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Stephen Buchalter</h3>
              <span className="mt-1 mb-4 inline-block text-xs font-bold uppercase tracking-widest text-[#E31837] bg-red-50 px-3 py-1 rounded-full">Owner</span>
              <a
                href="mailto:customerservice@enterprisecleaningcorp.com"
                className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#00B8FF] transition-colors break-all"
              >
                <Mail className="w-4 h-4 shrink-0 text-[#00B8FF]" />
                customerservice@enterprisecleaningcorp.com
              </a>
            </div>

            {/* Alex — Team Member */}
            <div className="flex flex-col items-center text-center bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-[#00B8FF]/20 mb-5 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/alex-new.jpeg" alt="Alex" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Alex</h3>
              <span className="mt-1 mb-4 inline-block text-xs font-bold uppercase tracking-widest text-[#00B8FF] bg-blue-50 px-3 py-1 rounded-full">Team Member</span>
              <a
                href="mailto:alex@enterprisecleaningcorp.com"
                className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#00B8FF] transition-colors break-all"
              >
                <Mail className="w-4 h-4 shrink-0 text-[#00B8FF]" />
                alex@enterprisecleaningcorp.com
              </a>
            </div>

            {/* Julio — Team Member */}
            <div className="flex flex-col items-center text-center bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-[#00B8FF]/20 mb-5 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/julio.png" alt="Julio" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Julio</h3>
              <span className="mt-1 mb-4 inline-block text-xs font-bold uppercase tracking-widest text-[#00B8FF] bg-blue-50 px-3 py-1 rounded-full">Team Member</span>
              <a
                href="mailto:customerservice@enterprisecleaningcorp.com"
                className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#00B8FF] transition-colors break-all"
              >
                <Mail className="w-4 h-4 shrink-0 text-[#00B8FF]" />
                customerservice@enterprisecleaningcorp.com
              </a>
            </div>

          </div>
        </div>
      </section>

      <section className="h-[400px] w-full relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.241779976411!2d-71.77732379999999!3d42.3373683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3f9e82349f5d1%3A0x548a39c70a7955f9!2sEnterprise%20Cleaning%20Corporation!5e0!3m2!1sen!2sin!4v1783163312743!5m2!1sen!2sin" 
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="strict-origin-when-cross-origin"
          title="Enterprise Cleaning Corporation Location"
        ></iframe>
      </section>

      <CTASection
        className="bg-white border-t border-slate-100"
        title="Need Immediate Assistance?"
        action={{
          text: "Call (508) 890-1000",
          href: "tel:5088901000",
          variant: "destructive",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed">
            For emergency cleanup services, spills, or urgent cleaning needs, our team is available 24/7 across Central Massachusetts.
          </p>
        </div>
      </CTASection>
    </>
  );
}
