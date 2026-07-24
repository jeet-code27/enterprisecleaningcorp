import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Mail, Clock } from "lucide-react"

const FacebookIcon = ({ className = "size-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
)

const InstagramIcon = ({ className = "size-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

export function Footer() {
  return (
    <footer className="text-white pt-16 pb-8" style={{ background: "#00B8FF", borderTop: "4px solid #E31837" }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col space-y-4">
            <Image
              src="/images/logo.png"
              alt="Enterprise Cleaning Corporation"
              width={240}
              height={80}
              className="h-20 w-auto object-contain"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="text-white/80 text-sm leading-relaxed mt-4">
              There's clean, and then there's ENTERPRISE clean. Specializing in Commercial Cleaning and Emergency Cleanup.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/people/Enterprise-Cleaning/61591593631296/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E31837] flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href="https://www.instagram.com/enterprise_.cleaning"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E31837] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-4 h-1 rounded-full bg-white"></span>
              Core Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>
                <Link href="/day-and-night-shift-commercial-cleaning-services-central-ma" className="hover:text-white/60 transition-colors">Night & Day Cleaning</Link>
              </li>
              <li>
                <Link href="/floor-care-services-central-ma" className="hover:text-white/60 transition-colors">Floor Care Services</Link>
              </li>
              <li>
                <Link href="/specialty-cleaning-services-central-ma" className="hover:text-white/60 transition-colors">Deep Cleaning</Link>
              </li>
              <li>
                <Link href="/emergency-restoration-services-central-ma" className="hover:text-white/60 transition-colors">Flood Cleanup</Link>
              </li>
              <li>
                <Link href="/turnover-cleaning-central-ma" className="hover:text-white/60 transition-colors">Turnover Cleaning</Link>
              </li>
              <li>
                <Link href="/post-construction-cleaning-central-ma" className="hover:text-white/60 transition-colors">Post Construction</Link>
              </li>
            </ul>
          </div>

          {/* Industries We Serve */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-4 h-1 rounded-full bg-[#E31837]"></span>
              Industries
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link href="/manufacturing-industrial-cleaning-central-ma" className="hover:text-white/60 transition-colors">Manufacturing & Industrial</Link>
              </li>
              <li>
                <Link href="/medical-healthcare-cleaning-central-ma" className="hover:text-white/60 transition-colors">Medical & Healthcare</Link>
              </li>
              <li>
                <Link href="/office-financial-cleaning-central-ma" className="hover:text-white/60 transition-colors">Offices & Financial</Link>
              </li>
              <li>
                <Link href="/school-municipal-cleaning-central-ma" className="hover:text-white/60 transition-colors">Education & Municipal</Link>
              </li>
              <li>
                <Link href="/property-management-cleaning-central-ma" className="hover:text-white/60 transition-colors">Property Management</Link>
              </li>
              <li>
                <Link href="/warehouse-distribution-cleaning-central-ma" className="hover:text-white/60 transition-colors">Warehouses & Distribution</Link>
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

        <div className="border-t border-white/30 pt-8 flex flex-col md:flex-row items-center md:justify-start gap-4 md:gap-8 text-xs text-white/70">
          <p>© {new Date().getFullYear()} Enterprise Cleaning Corporation. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
