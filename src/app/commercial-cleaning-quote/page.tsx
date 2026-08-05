"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { 
  CheckCircle2, 
  PhoneCall, 
  ShieldCheck, 
  Star, 
  Quote, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Building2, 
  Stethoscope, 
  HardHat, 
  Home, 
  Award, 
  Clock, 
  Users, 
  ArrowRight,
  Send,
  Loader2,
  Lock,
  Droplets,
  SprayCan,
  Wind,
  Briefcase,
  GraduationCap,
  Package
} from "lucide-react";
import { 
  MetaPixel, 
  trackPhoneCallClick, 
  trackCTAButtonClick 
} from "@/components/analytics/MetaPixel";

// Core Services Data directly matching website
const CORE_SERVICES = [
  {
    id: "night-day-cleaning",
    title: "Night & Day Shift Commercial Cleaning",
    icon: Building2,
    image: "/images/day_night_cleaning_hero.png",
    description: "Consistent nightly janitorial routines, high-touch disinfection, and dedicated day & night porters tailored to your facility's operational hours.",
    badge: "Day & Night Shifts"
  },
  {
    id: "floor-care",
    title: "Commercial Floor Care Services",
    icon: Sparkles,
    image: "/images/floor_care_hero.png",
    description: "Specialized care for commercial carpets, VCT stripping & waxing, high-shine buffing, tile & grout restoration, and hard surface maintenance.",
    badge: "Stripping, Waxing & Carpet Care"
  },
  {
    id: "specialty-deep-cleaning",
    title: "Specialty & Deep Cleaning Services",
    icon: Sparkles,
    image: "/images/specialty_cleaning_hero.png",
    description: "Thorough, restorative deep cleaning, high-surface dust removal, window care, and periodic sanitation resets to revitalize your building.",
    badge: "Restorative Deep Reset"
  },
  {
    id: "emergency-restoration",
    title: "Emergency Flood Cleanup & Restoration",
    icon: Wind,
    image: "/images/emergency_restoration_hero.png",
    description: "24/7 rapid response for water extraction, flood damage, moisture control, and emergency incident cleanup to minimize facility downtime.",
    badge: "24/7 Rapid Incident Response"
  },
  {
    id: "turnover-cleaning",
    title: "Turnover Cleaning Services",
    icon: Droplets,
    image: "/images/turnover_cleaning_hero.png",
    description: "Complete turnover janitorial services for commercial real estate, multi-family communities, and corporate property transitions.",
    badge: "Turnkey Property Reset"
  },
  {
    id: "post-construction",
    title: "Post-Construction Cleaning",
    icon: SprayCan,
    image: "/images/post_construction_hero.png",
    description: "Detailed cleanup after renovation or new construction—eliminating drywall dust, debris, and residue before white-glove occupancy.",
    badge: "Occupancy-Ready Sanitation"
  }
];

// Industries We Serve Data directly matching website
const INDUSTRIES_SERVED = [
  {
    title: "Offices & Financial Institutions",
    icon: Briefcase,
    image: "/images/office_cleaning_hero.png",
    desc: "Pristine branch and office environments, bank teller space disinfection, and executive suite care across 7+ financial locations."
  },
  {
    title: "Medical & Healthcare Networks",
    icon: Stethoscope,
    image: "/images/medical_cleaning_hero.png",
    desc: "Specialized terminal cleaning, operating room protocols, and HIPAA-compliant sanitation across 30+ medical clinics."
  },
  {
    title: "Manufacturing & Industrial Facilities",
    icon: HardHat,
    image: "/images/industrial_cleaning_hero.png",
    desc: "Heavy industrial floor maintenance, clean room cleaning, and dedicated porters across 5+ manufacturing plants."
  },
  {
    title: "Condominium & Community Living",
    icon: Home,
    image: "/images/property_management_hero.png",
    desc: "4x weekly cleaning, trash management, gym, storage rooms, and club room maintenance for 97-unit residential communities."
  },
  {
    title: "Educational & Municipal Buildings",
    icon: GraduationCap,
    image: "/images/school_cleaning_hero.png",
    desc: "Dependable janitorial routines, emergency incident response, and annual deep resets for schools, town halls, and light departments."
  },
  {
    title: "Warehouses & Distribution Centers",
    icon: Package,
    image: "/images/warehouse_cleaning_hero.png",
    desc: "High-capacity floor scrubbing, dispatch office cleaning, and breakroom sanitation for fast-paced logistics hubs."
  }
];

// Success Stories Slider Data
const LP_SUCCESS_STORIES = [
  {
    id: "fremont-lofts",
    company: "Fremont Lofts Condominium",
    industry: "Condominium & Community Living",
    logo: "/logos/fremont-condo-association.png",
    logoBg: "bg-white border border-slate-200",
    tagline: "Keeping a 97-Unit Community Clean, Safe, and Welcoming",
    quote: "Enterprise provides service 4x per week for trash management, cleaning, and disinfection throughout our shared living spaces, gym, storage rooms, and club room—plus an annual carpet reset.",
    result: "A consistent, year-round cleaning program combining frequent service, trash management, amenity disinfection, and annual carpet care.",
    badgeText: "97 Units • 4x Weekly Service",
    rating: 5
  },
  {
    id: "wcu-bank",
    company: "WCU Bank",
    industry: "Banking & Financial Services",
    logo: "/logos/wcu-logo.svg",
    logoBg: "bg-white border border-slate-200",
    tagline: "Maintaining Pristine Branch Environments Across 7+ Locations",
    quote: "In banking, cleanliness is essential to customer experience. Enterprise keeps our 7+ branches disinfected, spotless, and ready for customers every day with rapid support when needed.",
    result: "Dependable multi-location cleaning with 100% disinfection coverage and flexible emergency response.",
    badgeText: "7+ Branches • Daily Disinfection",
    rating: 5
  },
  {
    id: "apderm",
    company: "APDerm",
    industry: "Healthcare & Dermatology Network",
    logo: "/logos/apderm-logo.svg",
    logoBg: "bg-[#001a33] border border-white/20",
    tagline: "Specialized Medical & Operating Room Sanitation Across 30+ Clinics",
    quote: "Maintaining consistent disinfection across 30+ medical locations in MA, RI, and NH requires extreme detail. Enterprise delivers clinical-grade cleaning plus versatile facility support.",
    result: "Long-term healthcare cleaning partnership covering 30+ locations and specialized operating rooms.",
    badgeText: "30+ Medical Clinics • MA, RI, NH",
    rating: 5
  },
  {
    id: "coghlin-companies",
    company: "Coghlin Companies",
    industry: "Manufacturing & Industrial",
    logo: "/logos/coghlin-companies.webp",
    logoBg: "bg-[#001a33] border border-white/20",
    tagline: "Customized Cleaning Program Across 5+ Industrial Plants",
    quote: "Manufacturing environments require organized, high-standard maintenance. Enterprise provides dedicated day & night porters and industrial floor equipment across 5+ facilities.",
    result: "A tailored industrial cleaning program with dedicated porters and clean room procedures.",
    badgeText: "5+ Plants • Day & Night Porters",
    rating: 5
  },
  {
    id: "capital-group",
    company: "Capital Group Properties",
    industry: "Property Management & Real Estate",
    logo: "/logos/capital-group.png",
    logoBg: "bg-[#001a33] border border-white/20",
    logoClass: "brightness-0 invert",
    tagline: "Reliable Support Across 10+ Property Facilities",
    quote: "Enterprise manages 10+ of our property facilities with ~12 dedicated staff and answered 11 last-minute emergency calls in 2025 alone with rapid mobilization.",
    result: "Trusted property management partnership built on fast response and dependable service.",
    badgeText: "10+ Properties • ~12 Staff",
    rating: 5
  },
  {
    id: "west-boylston",
    company: "West Boylston Light Department",
    industry: "Municipal & Public Facilities",
    logo: "/logos/west-boylston-light-department.png",
    logoBg: "bg-white border border-slate-200",
    tagline: "A Local Partnership Built on Accountability and Referrals",
    quote: "Enterprise provides cleaning services for West Boylston Light Department, Town Hall, and regional municipal facilities, building long-term trust through consistent results.",
    result: "Organically expanded municipal cleaning partnership built on community trust and client referrals.",
    badgeText: "Municipal & Town Hall Care",
    rating: 5
  },
  {
    id: "st-benedict",
    company: "St. Benedict School",
    industry: "Education & School Facilities",
    logo: "/logos/StBenedictsWordmark.png",
    logoBg: "bg-[#001a33] border border-white/20",
    tagline: "Responsive Incident Care and Annual Facility Reset Services",
    quote: "Schools need a partner that responds fast when unexpected incidents occur. Enterprise supports St. Benedict with carpet extractors, rapid incident response, and annual deep resets.",
    result: "Dependable school janitorial partnership combining daily care, carpet extraction, and annual term resets.",
    badgeText: "Incident Response & Annual Reset",
    rating: 5
  }
];

export default function CommercialCleaningLandingPage() {
  const router = useRouter();

  // Slider State
  const [currentSlide, setCurrentSlide] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    serviceType: "Night & Day Shift Commercial Cleaning",
    facilitySize: "2,500 - 10,000 sq ft",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Slider Auto-Advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % LP_SUCCESS_STORIES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % LP_SUCCESS_STORIES.length);
    trackCTAButtonClick("Next_Testimonial_Slide");
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + LP_SUCCESS_STORIES.length) % LP_SUCCESS_STORIES.length);
    trackCTAButtonClick("Prev_Testimonial_Slide");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/ad-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "Meta/Google Commercial Cleaning Ad" }),
      });

      const result = await res.json();

      if (res.ok || result.success) {
        // Redirect to Thank You Page for Meta Lead conversion tracking
        router.push(result.redirectUrl || "/commercial-cleaning-quote/thank-you");
      } else {
        throw new Error(result.error || "Failed to submit request.");
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "Something went wrong. Please call us directly at 508-890-1000.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <MetaPixel />

      {/* 1. STREAMLINED HEADER WITH ORIGINAL OFFICIAL BRAND LOGO */}
      <header className="bg-white border-b border-slate-200 text-slate-900 sticky top-0 z-50 shadow-xs">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Logo with Original Colors (NO INVERT FILTER) */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/enterprise-logo.png"
              alt="Enterprise Cleaning Corporation"
              width={210}
              height={58}
              className="h-10 sm:h-12 w-auto object-contain"
              priority
            />
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:508-890-1000"
              onClick={trackPhoneCallClick}
              className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 font-bold text-xs sm:text-sm transition-all"
            >
              <PhoneCall className="w-4 h-4 text-[#E31837]" />
              <span className="hidden sm:inline">Call Us:</span>
              <span className="text-[#003057] font-extrabold">508-890-1000</span>
            </a>

            <a
              href="#quote-form"
              onClick={() => trackCTAButtonClick("Header_Get_Quote")}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#E31837] hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm transition-all shadow-md"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </header>

      {/* 2. HERO BANNER & HIGH-CONVERTING FORM ABOVE THE FOLD */}
      <section className="relative bg-gradient-to-br from-[#001a33] via-[#003057] to-[#004b87] text-white pt-10 pb-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-[#ffffff08]_1px,transparent_1px] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00B8FF]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FFE800] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Award className="w-4 h-4 text-[#FFE800]" />
                <span>New England’s Premier Commercial Cleaning Partner</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Commercial Cleaning & Janitorial Services <span className="text-[#00B8FF]">Built Around Your Business</span>
              </h1>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-light max-w-2xl">
                Get a customized cleaning schedule, dedicated local account manager, healthcare-grade disinfection, and 24/7 rapid response for your commercial facility.
              </p>

              {/* Trust Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white/10 border border-white/15 p-3 rounded-xl backdrop-blur-xs flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#00B8FF] shrink-0" />
                  <span className="text-xs font-semibold text-slate-100">100% Insured & Bonded</span>
                </div>
                <div className="bg-white/10 border border-white/15 p-3 rounded-xl backdrop-blur-xs flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#00B8FF] shrink-0" />
                  <span className="text-xs font-semibold text-slate-100">4x Weekly / Daily Care</span>
                </div>
                <div className="bg-white/10 border border-white/15 p-3 rounded-xl backdrop-blur-xs flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#00B8FF] shrink-0" />
                  <span className="text-xs font-semibold text-slate-100">Background Checked Staff</span>
                </div>
                <div className="bg-white/10 border border-white/15 p-3 rounded-xl backdrop-blur-xs flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#00B8FF] shrink-0" />
                  <span className="text-xs font-semibold text-slate-100">Local Account Manager</span>
                </div>
              </div>

              {/* Social Proof Excerpt */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center gap-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-200 font-medium italic">
                  "Enterprise keeps our 30+ medical clinics, 7+ bank branches, and 97-unit communities immaculate."
                </p>
              </div>
            </div>

            {/* Hero Right Form (High-Converting Lead Box) */}
            <div className="lg:col-span-5" id="quote-form">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-800 relative">
                
                <div className="text-center mb-6">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#E31837] block mb-1">
                    Free Fast Response Quote
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Request On-Site Estimate
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">
                    Takes under 60 seconds • Zero obligation
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold mb-4 text-center">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#003057] focus:outline-hidden"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#003057] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(508) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#003057] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Company / Facility Name</label>
                      <input
                        type="text"
                        placeholder="Company Ltd"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#003057] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Facility Size (Approx)</label>
                      <select
                        value={formData.facilitySize}
                        onChange={(e) => setFormData({ ...formData, facilitySize: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#003057] focus:outline-hidden bg-white font-medium"
                      >
                        <option value="Under 2,500 sq ft">Under 2,500 sq ft</option>
                        <option value="2,500 - 10,000 sq ft">2,500 - 10,000 sq ft</option>
                        <option value="10,000 - 30,000 sq ft">10,000 - 30,000 sq ft</option>
                        <option value="30,000+ sq ft">30,000+ sq ft / Multi-Building</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Service Needed *</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#003057] focus:outline-hidden bg-white font-medium"
                    >
                      <option value="Night & Day Shift Commercial Cleaning">Night & Day Shift Commercial Cleaning</option>
                      <option value="Floor Care Services (Carpet/VCT)">Floor Care Services (Carpet/VCT/Waxing)</option>
                      <option value="Specialty Deep Cleaning">Specialty & Deep Cleaning Services</option>
                      <option value="Emergency Flood & Water Cleanup">Emergency Flood Cleanup & Restoration</option>
                      <option value="Turnover Cleaning Services">Turnover Cleaning (Commercial/Residential)</option>
                      <option value="Post-Construction Cleaning">Post-Construction Cleaning</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Notes / Cleaning Schedule Needs</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. 4x weekly cleaning for common areas, gym, storage, or office space..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#003057] focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    onClick={() => trackCTAButtonClick("Submit_Hero_Lead_Form")}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#E31837] hover:bg-red-700 text-white font-extrabold text-base shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        <span>Get My Free Commercial Estimate</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-medium pt-1">
                    <Lock className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Your privacy is 100% protected. No spam.</span>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR CORE COMMERCIAL SERVICES (EXACT WEBSITE SERVICES & IMAGES) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#00B8FF] block mb-2">
              Our Core Services
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Commercial Janitorial & Special Cleaning Solutions
            </h2>
            <p className="text-slate-600 text-base md:text-lg mt-3 font-light">
              From nightly office maintenance to emergency flood extraction, Enterprise delivers consistent, high-standard commercial cleaning tailored to your building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Image Header using Website Images */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-800">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                    <div className="absolute top-4 left-4 bg-[#003057]/90 backdrop-blur-md text-[#00B8FF] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border border-white/10">
                      <service.icon className="w-3.5 h-3.5" />
                      <span>{service.title}</span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#E31837] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm">
                      {service.badge}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#003057] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 pt-0">
                  <a
                    href="#quote-form"
                    onClick={() => trackCTAButtonClick(`Core_Service_${service.id}`)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-[#003057] font-bold text-xs hover:bg-[#003057] hover:text-white transition-all shadow-xs"
                  >
                    <span>Request Estimate for This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. INDUSTRIES WE SERVE (EXACT WEBSITE INDUSTRIES & IMAGES) */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#E31837] block mb-2">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Specialized Care For Every Commercial Sector
            </h2>
            <p className="text-slate-600 text-base md:text-lg mt-3 font-light">
              We build specialized cleaning plans around the exact regulatory, safety, and operational standards of your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_SERVED.map((ind, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-40 w-full rounded-2xl overflow-hidden mb-5 bg-slate-800">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                    <div className="absolute bottom-3 left-3 bg-[#003057]/90 text-[#00B8FF] p-2 rounded-xl border border-white/10">
                      <ind.icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">{ind.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-light">{ind.desc}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[#003057] font-bold">Custom Industry Schedule</span>
                  <a
                    href="#quote-form"
                    onClick={() => trackCTAButtonClick(`Industry_${ind.title}`)}
                    className="text-[#E31837] font-extrabold hover:underline inline-flex items-center gap-1"
                  >
                    Get Quote <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE SUCCESS STORIES & TESTIMONIALS SLIDER */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B8FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FFE800] text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-4 h-4 text-[#FFE800]" />
              <span>Real Client Results & Verified Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Trusted By Leading Businesses & Communities
            </h2>
            <p className="text-slate-300 text-base md:text-lg mt-2 font-light">
              See what our client partners say about Enterprise’s consistency, 4x/week schedules, and fast response.
            </p>
          </div>

          {/* Slider Container */}
          <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-10 md:p-12 border border-white/15 shadow-2xl relative">
            
            {/* Current Slide */}
            {(() => {
              const story = LP_SUCCESS_STORIES[currentSlide];
              return (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Client Info & Logo */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className={`${story.logoBg || "bg-[#001a33] border border-white/20"} p-4 px-6 rounded-2xl shadow-md w-fit flex items-center justify-center`}>
                      <Image
                        src={story.logo}
                        alt={story.company}
                        width={200}
                        height={60}
                        className={`h-12 w-auto object-contain ${story.logoClass || ""}`}
                      />
                    </div>

                    <div className="inline-block px-3 py-1 rounded-full bg-[#00B8FF]/20 text-[#00B8FF] text-xs font-bold uppercase tracking-wider border border-[#00B8FF]/30">
                      {story.industry}
                    </div>

                    <h3 className="text-xl font-bold text-white leading-snug">
                      {story.company}
                    </h3>

                    <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-xs font-extrabold text-[#FFE800]">
                      {story.badgeText}
                    </div>
                  </div>

                  {/* Right Column: Quote & Result */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-slate-300 text-xs font-semibold ml-2">Verified Client Endorsement</span>
                    </div>

                    <div className="relative pl-6 border-l-4 border-[#00B8FF]">
                      <Quote className="w-10 h-10 text-[#00B8FF]/20 absolute -top-3 -left-4 pointer-events-none" />
                      <p className="text-slate-200 text-base md:text-lg italic leading-relaxed font-serif">
                        "{story.quote}"
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                      <div className="flex items-center gap-2 text-xs font-black uppercase text-[#E31837] mb-1">
                        <Sparkles className="w-4 h-4 text-[#E31837]" />
                        <span>The Operational Result</span>
                      </div>
                      <p className="text-slate-100 text-xs sm:text-sm font-medium">
                        {story.result}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })()}

            {/* Slider Navigation Controls */}
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-white/10">
              <div className="flex items-center gap-2">
                {LP_SUCCESS_STORIES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentSlide(idx);
                      trackCTAButtonClick(`Slide_Dot_${idx}`);
                    }}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      currentSlide === idx ? "w-8 bg-[#00B8FF]" : "w-2.5 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrevSlide}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/15 cursor-pointer"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/15 cursor-pointer"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE ENTERPRISE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#003057] block mb-2">
              The Enterprise Standard
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why New England Businesses Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/90 shadow-xs text-center">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 text-[#003057] flex items-center justify-center mx-auto mb-6">
                <Users className="w-7 h-7 text-[#00B8FF]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Dedicated Local Supervision</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Direct single point of contact with an experienced account manager who conducts regular quality audits on-site.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/90 shadow-xs text-center">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 text-[#003057] flex items-center justify-center mx-auto mb-6">
                <Clock className="w-7 h-7 text-[#00B8FF]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Flexible 4x / Daily Schedules</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Custom program timing designed around your operational hours, including day porters, night shifts, or weekend resets.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/90 shadow-xs text-center">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 text-[#003057] flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-7 h-7 text-[#00B8FF]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">24/7 Rapid Emergency Response</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                When unexpected incidents happen, our fast-response team mobilizes specialized carpet extractors and sanitation crews immediately.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. BOTTOM CTA & SECONDARY QUOTE BANNER */}
      <section className="py-16 bg-gradient-to-r from-[#003057] to-[#00B8FF] text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-xs font-black uppercase tracking-widest text-[#FFE800] block mb-2">
            Ready to Upgrade Your Commercial Cleaning?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Get Your Free On-Site Quote Today
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-xl mx-auto mb-8 font-light">
            Contact Enterprise Cleaning Corporation now to schedule a quick 15-minute walkthrough for your facility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="#quote-form"
              onClick={() => trackCTAButtonClick("Bottom_Banner_Form_Jump")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#E31837] hover:bg-red-700 text-white font-extrabold text-base transition-all shadow-xl"
            >
              <span>Fill Out Quote Form Above</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="tel:508-890-1000"
              onClick={trackPhoneCallClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-extrabold text-base transition-all border border-white/20"
            >
              <PhoneCall className="w-5 h-5 text-[#FFE800]" />
              <span>Call 508-890-1000</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. STREAMLINED FOOTER WITH OFFICIAL ORIGINAL BRAND LOGO */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-8 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* Logo in Clean Container */}
              <div className="bg-white p-2 rounded-xl">
                <Image
                  src="/images/enterprise-logo.png"
                  alt="Enterprise Cleaning Corporation"
                  width={150}
                  height={42}
                  className="h-7 w-auto object-contain"
                />
              </div>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400 text-xs font-medium">Commercial Cleaning & Facility Services</span>
            </div>

            <div className="flex items-center gap-6">
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-800 text-center text-slate-500">
            <p>© {new Date().getFullYear()} Enterprise Cleaning Corporation. All Rights Reserved. Serving Central MA, Rhode Island, and New England.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
