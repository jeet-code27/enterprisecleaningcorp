import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="text-white pt-16 pb-8" style={{ background: "#00B8FF", borderTop: "4px solid #E31837" }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col space-y-4">
            <Image
              src="/images/logo.png"
              alt="Enterprise Cleaning and Restoration Corporation"
              width={240}
              height={80}
              className="h-20 w-auto object-contain"
            />
            <p className="text-white/80 text-sm leading-relaxed mt-4">
              There's clean, and then there's ENTERPRISE clean. Specializing in Commercial and Residential Emergency Cleaning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-4 h-1 rounded-full bg-white"></span>
              Cleaning Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>
                <Link href="#" className="hover:text-white/60 transition-colors">Commercial Cleaning</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white/60 transition-colors">Post Construction Cleaning</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white/60 transition-colors">Floor Work</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white/60 transition-colors">Disaster &amp; Storm Damage</Link>
              </li>
            </ul>
          </div>

          {/* Emergency Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-4 h-1 rounded-full bg-[#E31837]"></span>
              Emergency Services
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link href="#" className="hover:text-white/60 transition-colors">Fire Damage</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white/60 transition-colors">Mold Remediation</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white/60 transition-colors">Crime Scene Clean-up</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-4 h-1 rounded-full bg-[#FFE800]"></span>
              Contact Information
            </h4>
            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 shrink-0 mt-0.5 text-white" />
                <span>99 Hartwell Street,<br/>West Boylston, MA 01583</span>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Phone className="size-5 shrink-0 text-white" />
                  <span>Serving New England: <strong className="text-[#FFE800]">508-890-1000</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="size-5 shrink-0 text-[#E31837]" />
                  <span>Emergency: <strong className="text-[#E31837]">888-76-FLOOD</strong></span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 shrink-0 text-white" />
                <a href="mailto:customerservice@enterprisecleaningcorp.com" className="hover:underline transition-colors break-all">
                  customerservice@enterprisecleaningcorp.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-5 shrink-0 text-white" />
                <span>24 hrs / 7 Days</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/30 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/70">
          <p>© {new Date().getFullYear()} Enterprise Cleaning Corporation. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
