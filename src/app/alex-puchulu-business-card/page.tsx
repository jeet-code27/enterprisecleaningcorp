import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone, Mail, MapPin, Download, UserPlus, Globe,
  Building2, Sparkles, ArrowRight,

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
    <div className="bg-slate-900 min-h-screen text-slate-100 pt-6 sm:pt-12 pb-16 px-3 sm:px-6 overflow-x-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#0090c8]/20 via-[#0090c8]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10 space-y-6 sm:space-y-10">

        {/* Header Badge */}
        <div className="text-center space-y-3 pt-4 sm:pt-0">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-[#0090c8] bg-[#0090c8]/10 border border-[#0090c8]/30 px-3 py-1.5 rounded-full max-w-full truncate">
            <Building2 className="w-3.5 h-3.5 shrink-0" />
            <span>Enterprise Cleaning Corp &bull; Executive Contact Card</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Alex Puchulu
          </h1>
          <p className="text-[#0090c8] font-bold text-sm sm:text-base md:text-lg tracking-wide uppercase">
            Director of Sales &amp; Marketing
          </p>
        </div>

        {/* Business Card Display Section (Moved to top) */}
        <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 rounded-2xl sm:rounded-3xl p-4 sm:p-8 space-y-6 sm:space-y-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-700 pb-4 sm:pb-6">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white">Digital Business Card</h2>
              <p className="text-slate-400 text-xs mt-0.5">Official credentials &amp; contact card</p>
            </div>
            <a
              href="/alex-buisness-card/alex-business-card.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-colors w-full sm:w-auto justify-center"
            >
              <Download className="w-3.5 h-3.5 text-[#0090c8]" />
              Download Original PDF
            </a>
          </div>

          {/* Business Card Images (Front & Back) */}
          <div className="space-y-6">
            {/* Front Card */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2 px-1">
                <span>FRONT SIDE</span>
                <span className="text-[#0090c8]">Contact Details</span>
              </div>
              <div className="relative aspect-[1.75/1] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-slate-600">
                <Image
                  src="/alex-buisness-card/front.jpeg"
                  alt="Alex Puchulu Business Card Front"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-contain sm:object-cover bg-slate-950"
                  priority
                />
              </div>
            </div>

            {/* Back Card */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2 px-1">
                <span>BACK SIDE</span>
                <span className="text-[#0090c8]">Services &amp; Quote QR</span>
              </div>
              <div className="relative aspect-[1.75/1] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-slate-600">
                <Image
                  src="/alex-buisness-card/back.jpeg"
                  alt="Alex Puchulu Business Card Back"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-contain sm:object-cover bg-slate-950"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <a
            href="tel:5083042369"
            className="flex sm:flex-col items-center justify-start sm:justify-center gap-3 sm:gap-2 bg-[#0090c8] hover:bg-[#0078a8] text-white p-3.5 sm:p-4 rounded-2xl font-bold shadow-lg shadow-[#0090c8]/25 transition-all group active:scale-95 text-left sm:text-center"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm">Call Direct</span>
              <span className="text-xs text-white/80 font-normal">508-304-2369</span>
            </div>
          </a>

          <a
            href="mailto:alex@enterprisecleaningcorp.com"
            className="flex sm:flex-col items-center justify-start sm:justify-center gap-3 sm:gap-2 bg-slate-800 hover:bg-slate-700 text-white p-3.5 sm:p-4 rounded-2xl font-bold border border-slate-700 transition-all group active:scale-95 text-left sm:text-center min-w-0"
          >
            <div className="w-10 h-10 rounded-full bg-[#0090c8]/20 text-[#0090c8] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm">Send Email</span>
              <span className="text-[11px] text-slate-400 font-normal truncate max-w-full">alex@enterprisecleaningcorp.com</span>
            </div>
          </a>

          <a
            href={vCardDataUri}
            download="Alex_Puchulu_Enterprise_Cleaning.vcf"
            className="flex sm:flex-col items-center justify-start sm:justify-center gap-3 sm:gap-2 bg-slate-800 hover:bg-slate-700 text-white p-3.5 sm:p-4 rounded-2xl font-bold border border-slate-700 transition-all group active:scale-95 text-left sm:text-center"
          >
            <div className="w-10 h-10 rounded-full bg-[#E31837]/20 text-[#E31837] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <UserPlus className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm">Save Contact</span>
              <span className="text-xs text-slate-400 font-normal">Add to Phone</span>
            </div>
          </a>

          <a
            href="/alex-buisness-card/alex-business-card.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Alex-Puchulu-Business-Card.pdf"
            className="flex sm:flex-col items-center justify-start sm:justify-center gap-3 sm:gap-2 bg-[#E31837] hover:bg-[#c1122c] text-white p-3.5 sm:p-4 rounded-2xl font-bold shadow-lg shadow-[#E31837]/25 transition-all group active:scale-95 text-left sm:text-center"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Download className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm">Download PDF</span>
              <span className="text-xs text-white/80 font-normal">Business Card</span>
            </div>
          </a>
        </div>

        {/* Direct Contact Info Card */}
        <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 rounded-2xl sm:rounded-3xl p-4 sm:p-8 space-y-4 sm:space-y-6 shadow-2xl">
          <h2 className="text-lg sm:text-xl font-black text-white border-b border-slate-700 pb-3 sm:pb-4">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <a
              href="tel:5083042369"
              className="flex items-center gap-3.5 bg-slate-900/60 p-3.5 sm:p-4 rounded-2xl border border-slate-700/60 hover:border-[#0090c8]/50 transition-colors group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0090c8]/10 text-[#0090c8] flex items-center justify-center shrink-0 group-hover:bg-[#0090c8] group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-slate-400 font-medium">Direct Mobile</div>
                <div className="text-white font-bold text-sm sm:text-base group-hover:text-[#0090c8] transition-colors">508-304-2369</div>
              </div>
            </a>

            <a
              href="tel:5088901000"
              className="flex items-center gap-3.5 bg-slate-900/60 p-3.5 sm:p-4 rounded-2xl border border-slate-700/60 hover:border-[#0090c8]/50 transition-colors group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0090c8]/10 text-[#0090c8] flex items-center justify-center shrink-0 group-hover:bg-[#0090c8] group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-slate-400 font-medium">Office Phone</div>
                <div className="text-white font-bold text-sm sm:text-base group-hover:text-[#0090c8] transition-colors">508-890-1000</div>
              </div>
            </a>

            <a
              href="mailto:alex@enterprisecleaningcorp.com"
              className="flex items-center gap-3.5 bg-slate-900/60 p-3.5 sm:p-4 rounded-2xl border border-slate-700/60 hover:border-[#0090c8]/50 transition-colors group sm:col-span-2 min-w-0"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0090c8]/10 text-[#0090c8] flex items-center justify-center shrink-0 group-hover:bg-[#0090c8] group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs text-slate-400 font-medium">Email Address</div>
                <div className="text-white font-bold text-xs sm:text-base truncate group-hover:text-[#0090c8] transition-colors">alex@enterprisecleaningcorp.com</div>
              </div>
            </a>

            <div className="flex items-center gap-3.5 bg-slate-900/60 p-3.5 sm:p-4 rounded-2xl border border-slate-700/60 sm:col-span-2">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#E31837]/10 text-[#E31837] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-slate-400 font-medium">Corporate Headquarters</div>
                <div className="text-white font-bold text-xs sm:text-sm">99 Hartwell Street, West Boylston, MA 01583</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Services Section */}
        <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 rounded-2xl sm:rounded-3xl p-4 sm:p-8 space-y-4 sm:space-y-6 shadow-2xl">
          <div className="text-center max-w-xl mx-auto space-y-1.5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0090c8]">What We Offer</span>
            <h2 className="text-xl sm:text-2xl font-black text-white">Commercial Cleaning Services</h2>
            <p className="text-xs text-slate-400 italic font-semibold">
              &quot;It is NOT CLEAN until it is ENTERPRISE CLEAN&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
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
                className="bg-slate-900/60 p-3.5 sm:p-4 rounded-2xl border border-slate-700/60 hover:border-[#0090c8]/50 hover:bg-slate-900 transition-all text-center group block"
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
        <div className="bg-gradient-to-r from-[#0090c8] to-[#006088] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center text-white shadow-2xl space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black">Ready for a Free Cleaning Quote?</h2>
          <p className="text-white/90 text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            Contact Alex Puchulu directly or request an on-site walkthrough for your facility in Central MA, Rhode Island, or Southern NH.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#E31837] hover:bg-[#c1122c] text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm w-full sm:w-auto"
            >
              Request a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:5083042369"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm w-full sm:w-auto"
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
