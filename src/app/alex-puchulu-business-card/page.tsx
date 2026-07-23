import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone, Mail, MapPin, Download, UserPlus, Globe,
  Building2, Sparkles, ShieldCheck, ArrowRight,
  Clock, CheckCircle2, MessageSquare, ExternalLink
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Alex Puchulu | Director of Sales & Marketing | Enterprise Cleaning Corp" },
  description: "Official digital business card for Alex Puchulu, Director of Sales & Marketing at Enterprise Cleaning Corporation. Contact directly or download vCard / PDF.",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/alex-puchulu-business-card"
  },
  robots: {
    index: true,
    follow: true,
  },
};

const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Alex Puchulu
N:Puchulu;Alex;;;
ORG:Enterprise Cleaning Corporation
TITLE:Director of Sales & Marketing
TEL;TYPE=CELL,VOICE:508-304-2369
TEL;TYPE=WORK,VOICE:508-890-1000
EMAIL;TYPE=WORK:alex@enterprisecleaningcorp.com
URL:https://www.enterprisecleaningcorp.com
ADR;TYPE=WORK:;;99 Hartwell Street, Suite B;West Boylston;MA;01583;USA
END:VCARD`;

export default function AlexPuchuluBusinessCardPage() {
  const vCardDataUri = `data:text/vcard;charset=utf-8,${encodeURIComponent(vCardData)}`;

  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 pt-20 pb-16">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#0090c8]/20 via-[#0090c8]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10 space-y-10">

        {/* Header Badge */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0090c8] bg-[#0090c8]/10 border border-[#0090c8]/30 px-4 py-1.5 rounded-full">
            <Building2 className="w-3.5 h-3.5" />
            Enterprise Cleaning Corporation &bull; Executive Contact Card
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Alex Puchulu
          </h1>
          <p className="text-[#0090c8] font-bold text-lg tracking-wide uppercase">
            Director of Sales &amp; Marketing
          </p>
        </div>

        {/* Quick Action Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <a
            href="tel:5083042369"
            className="flex flex-col items-center justify-center gap-2 bg-[#0090c8] hover:bg-[#0078a8] text-white p-4 rounded-2xl font-bold shadow-lg shadow-[#0090c8]/25 transition-all group active:scale-95"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-sm">Call Direct</span>
            <span className="text-[11px] text-white/80 font-normal">508-304-2369</span>
          </a>

          <a
            href="mailto:alex@enterprisecleaningcorp.com"
            className="flex flex-col items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-2xl font-bold border border-slate-700 transition-all group active:scale-95"
          >
            <div className="w-10 h-10 rounded-full bg-[#0090c8]/20 text-[#0090c8] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-sm">Send Email</span>
            <span className="text-[11px] text-slate-400 font-normal truncate max-w-[120px]">alex@...</span>
          </a>

          <a
            href={vCardDataUri}
            download="Alex_Puchulu_Enterprise_Cleaning.vcf"
            className="flex flex-col items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-2xl font-bold border border-slate-700 transition-all group active:scale-95"
          >
            <div className="w-10 h-10 rounded-full bg-[#E31837]/20 text-[#E31837] flex items-center justify-center group-hover:scale-110 transition-transform">
              <UserPlus className="w-5 h-5" />
            </div>
            <span className="text-sm">Save Contact</span>
            <span className="text-[11px] text-slate-400 font-normal">Add to Phone</span>
          </a>

          <a
            href="/alex-buisness-card/alex-business-card.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Alex-Puchulu-Business-Card.pdf"
            className="flex flex-col items-center justify-center gap-2 bg-[#E31837] hover:bg-[#c1122c] text-white p-4 rounded-2xl font-bold shadow-lg shadow-[#E31837]/25 transition-all group active:scale-95"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Download className="w-5 h-5" />
            </div>
            <span className="text-sm">Download PDF</span>
            <span className="text-[11px] text-white/80 font-normal">Business Card</span>
          </a>
        </div>

        {/* Business Card Display Section */}
        <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-6 md:p-8 space-y-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-700 pb-6">
            <div>
              <h2 className="text-xl font-black text-white">Digital Business Card</h2>
              <p className="text-slate-400 text-xs mt-1">Official credentials &amp; contact card</p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/alex-buisness-card/alex-business-card.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-[#0090c8]" />
                Download Original PDF
              </a>
            </div>
          </div>

          {/* Business Card Images (Front & Back) */}
          <div className="space-y-6">
            {/* Front Card */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-3 px-1">
                <span>FRONT SIDE</span>
                <span className="text-[#0090c8]">Contact Details</span>
              </div>
              <div className="relative aspect-[1.75/1] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-600">
                <Image
                  src="/alex-buisness-card/front.jpeg"
                  alt="Alex Puchulu Business Card Front"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Back Card */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-3 px-1">
                <span>BACK SIDE</span>
                <span className="text-[#0090c8]">Services &amp; Quote QR</span>
              </div>
              <div className="relative aspect-[1.75/1] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-600">
                <Image
                  src="/alex-buisness-card/back.jpeg"
                  alt="Alex Puchulu Business Card Back"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Direct Contact Info Card */}
        <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
          <h2 className="text-xl font-black text-white border-b border-slate-700 pb-4">
            Contact Information
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="tel:5083042369"
              className="flex items-center gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-700/60 hover:border-[#0090c8]/50 transition-colors group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0090c8]/10 text-[#0090c8] flex items-center justify-center shrink-0 group-hover:bg-[#0090c8] group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Direct Mobile</div>
                <div className="text-white font-bold text-base group-hover:text-[#0090c8] transition-colors">508-304-2369</div>
              </div>
            </a>

            <a
              href="tel:5088901000"
              className="flex items-center gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-700/60 hover:border-[#0090c8]/50 transition-colors group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0090c8]/10 text-[#0090c8] flex items-center justify-center shrink-0 group-hover:bg-[#0090c8] group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Office Phone</div>
                <div className="text-white font-bold text-base group-hover:text-[#0090c8] transition-colors">508-890-1000</div>
              </div>
            </a>

            <a
              href="mailto:alex@enterprisecleaningcorp.com"
              className="flex items-center gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-700/60 hover:border-[#0090c8]/50 transition-colors group sm:col-span-2"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0090c8]/10 text-[#0090c8] flex items-center justify-center shrink-0 group-hover:bg-[#0090c8] group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-slate-400 font-medium">Email Address</div>
                <div className="text-white font-bold text-base truncate group-hover:text-[#0090c8] transition-colors">alex@enterprisecleaningcorp.com</div>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-700/60 sm:col-span-2">
              <div className="w-11 h-11 rounded-xl bg-[#E31837]/10 text-[#E31837] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Corporate Headquarters</div>
                <div className="text-white font-bold text-sm">99 Hartwell Street, West Boylston, MA 01583</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Services Section */}
        <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0090c8]">What We Offer</span>
            <h2 className="text-2xl font-black text-white">Commercial Cleaning Services</h2>
            <p className="text-xs text-slate-400 italic font-semibold">
              &quot;It is NOT CLEAN until it is ENTERPRISE CLEAN&quot;
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Night & Day Cleaning", href: "/day-and-night-shift-commercial-cleaning-services-central-ma" },
              { title: "Floor Care Services", href: "/floor-care-services-central-ma" },
              { title: "Deep Cleaning", href: "/specialty-cleaning-services-central-ma" },
              { title: "Flood Cleanup", href: "/emergency-restoration-services-central-ma" },
              { title: "Turnover Cleaning", href: "/turnover-cleaning-central-ma" },
              { title: "Post Construction", href: "/post-construction-cleaning-central-ma" },
            ].map((svc, i) => (
              <Link
                key={i}
                href={svc.href}
                className="bg-slate-900/60 p-4 rounded-2xl border border-slate-700/60 hover:border-[#0090c8]/50 hover:bg-slate-900 transition-all text-center group block"
              >
                <Sparkles className="w-5 h-5 text-[#0090c8] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-bold text-white group-hover:text-[#0090c8] transition-colors">{svc.title}</div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 mt-2 group-hover:text-slate-200">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Quote Banner */}
        <div className="bg-gradient-to-r from-[#0090c8] to-[#006088] rounded-3xl p-8 text-center text-white shadow-2xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-black">Ready for a Free Cleaning Quote?</h2>
          <p className="text-white/90 text-sm max-w-xl mx-auto font-medium">
            Contact Alex Puchulu directly or request an on-site walkthrough for your facility in Central MA, Rhode Island, or Southern NH.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E31837] hover:bg-[#c1122c] text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition-all text-sm"
            >
              Request a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:5083042369"
              className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition-all text-sm"
            >
              <Phone className="w-4 h-4 text-[#0090c8]" />
              Call Alex (508-304-2369)
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
