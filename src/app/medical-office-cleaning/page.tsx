import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, PhoneCall, ShieldCheck, Clock, Building2, 
  Trash2, Droplets, Sparkles, SprayCan, CheckCircle2,
  CalendarCheck, FileText, Check, ArrowRight, XCircle,
  MapPin, Trophy, Users, Sparkle, Stethoscope, Activity, ShieldAlert, Zap
} from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";
import { RelatedIndustries } from "@/components/ui/related-industries";
import { RelatedServices } from "@/components/ui/related-services";

export const metadata: Metadata = {
  title: { absolute: "Medical Office Cleaning | Clinics & Practices in MA, RI, NH" },
  description: "Medical office cleaning for clinics, practices, and healthcare facilities across Central Massachusetts, Rhode Island, and Southern NH. Request a walkthrough.",
  keywords: "medical office cleaning, commercial disinfection services, janitorial cleaning services, electrostatic disinfection services, hospital janitorial services, medical cleaning near me, medical cleaning services near me, medical office cleaning near me, medical office cleaning services near me, medical cleaning services in rhode island, medical office cleaning worcester ma",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/medical-office-cleaning",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Medical Office Cleaning | Clinics & Practices in MA, RI, NH",
    description: "Medical office cleaning for clinics, practices, and healthcare facilities across Central Massachusetts, Rhode Island, and Southern NH. Request a walkthrough.",
    url: "https://www.enterprisecleaningcorp.com/medical-office-cleaning",
    siteName: "Enterprise Cleaning Corporation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.enterprisecleaningcorp.com/images/medical_office_cleaning_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Enterprise Cleaning Corporation Medical Office Cleaning",
      },
    ],
  },
};

const structuredDataService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Medical Office Cleaning & Clinical Disinfection",
  "serviceType": "Medical Office Cleaning",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Enterprise Cleaning Corporation",
    "image": "https://www.enterprisecleaningcorp.com/images/ecc-new-logo.png",
    "telephone": "508-890-1000",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "99 Hartwell Street",
      "addressLocality": "West Boylston",
      "addressRegion": "MA",
      "postalCode": "01583",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.3648,
      "longitude": -71.7854
    },
    "url": "https://www.enterprisecleaningcorp.com"
  },
  "areaServed": [
    "Central Massachusetts",
    "Worcester",
    "Shrewsbury",
    "West Boylston",
    "Westborough",
    "Northborough",
    "Holden",
    "Auburn",
    "Leominster",
    "Fitchburg",
    "Rhode Island",
    "Providence",
    "Southern New Hampshire",
    "Nashua",
    "Manchester",
    "Salem"
  ],
  "description": "Professional medical office cleaning and commercial disinfection services for outpatient clinics, private practices, dental offices, and healthcare facilities across Central Massachusetts, Rhode Island, and Southern New Hampshire.",
  "url": "https://www.enterprisecleaningcorp.com/medical-office-cleaning"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is included in medical office cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medical office cleaning covers waiting rooms, reception areas, exam rooms, restrooms, corridors, break rooms, and administrative offices. Work includes high touch point disinfection with EPA registered products, floor care, glass cleaning, and general waste removal. Regulated medical waste, sterile processing, and surgical suite terminal cleaning stay with your licensed clinical vendors."
      }
    },
    {
      "@type": "Question",
      "name": "Do medical office cleaners need special certification?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For general clinical and administrative spaces such as waiting rooms, exam rooms, restrooms, and corridors, no separate certification is required. What matters is training in cross contamination control, correct product selection, and disinfectant dwell time. Certification requirements apply to regulated medical waste handling, sterile processing, and biohazard remediation, which are handled by specialty vendors."
      }
    },
    {
      "@type": "Question",
      "name": "How often should a medical office be cleaned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most practices need cleaning every day they see patients, after the last appointment. Waiting rooms and restrooms in busy clinics often need midday attention as well, which is what a day porter provides. Frequency follows patient volume rather than square footage."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between medical office cleaning and regular office cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The task list looks similar, but medical office cleaning adds strict cleaning order, color coded microfiber to prevent cross contamination, EPA registered disinfectants used at their full labeled dwell time, and a documented touch point map. Regular office cleaning does not require that level of discipline."
      }
    },
    {
      "@type": "Question",
      "name": "Do you clean exam rooms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We clean exam room floors, sinks, counters, cabinet fronts, chairs, stools, switches, and the exteriors of non clinical equipment. Clinical instruments, sterile fields, and anything requiring reprocessing remain the responsibility of your clinical staff."
      }
    },
    {
      "@type": "Question",
      "name": "Can you clean our clinic after hours so we do not disrupt patients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Most medical office cleaning happens after the last patient leaves. Practices with long patient hours or multi tenant medical buildings often pair after hours cleaning with a day porter who handles restrooms, spills, and waiting room resets during the day."
      }
    },
    {
      "@type": "Question",
      "name": "What disinfectants do you use in medical facilities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use EPA registered disinfectants appropriate for healthcare settings, applied at labeled dilution and given the full contact time on the label. Product selection is confirmed with your office manager so nothing conflicts with your existing infection control policy or your equipment manufacturer guidance."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle medical waste or sharps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Regulated medical waste, red bag waste, sharps containers, and pathological waste require a licensed medical waste contractor. We remove general and recyclable waste from non regulated areas only, and we work alongside whichever medical waste vendor your practice already uses."
      }
    },
    {
      "@type": "Question",
      "name": "Who provides medical office cleaning in Worcester MA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enterprise Cleaning Corporation provides medical office cleaning in Worcester, MA and throughout Worcester County, along with Rhode Island and Southern New Hampshire. If you are searching for medical cleaning near me or medical cleaning services near me, call (508) 890-1000 or request a walkthrough at enterprisecleaningcorp.com."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide medical cleaning services in Rhode Island and New Hampshire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Enterprise Cleaning provides medical cleaning services in Rhode Island, including Providence and surrounding communities, and across Southern New Hampshire in the Nashua, Manchester, and Salem corridor, in addition to Central Massachusetts. We are the trusted choice for practices seeking medical office cleaning services near me."
      }
    }
  ]
};

const structuredDataBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.enterprisecleaningcorp.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.enterprisecleaningcorp.com/#services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Medical Office Cleaning",
      "item": "https://www.enterprisecleaningcorp.com/medical-office-cleaning"
    }
  ]
};

export default function MedicalOfficeCleaningPage() {
  return (
    <>
      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataBreadcrumb) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[640px] lg:min-h-[740px] flex items-center pt-24 pb-20 overflow-hidden" style={{ background: "#0090c8" }}>
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/medical_office_cleaning_hero.jpg" 
            alt="Medical office cleaning for clinics and practices in Central MA, RI, NH" 
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003057]/95 via-[#0090c8]/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-end justify-between w-full h-full">
            
            {/* Left Content */}
            <div className="text-white space-y-6 max-w-3xl flex-1 mt-10">
              {/* Breadcrumbs */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/90 mb-4 font-medium">
                <Link href="/" className="hover:text-white transition-colors whitespace-nowrap">Home</Link>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFE800] shrink-0" />
                <Link href="/#services" className="hover:text-white transition-colors whitespace-nowrap">Services</Link>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFE800] shrink-0" />
                <span className="text-[#FFE800] font-bold tracking-wide">Medical Office Cleaning</span>
              </div>
              
              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] drop-shadow-md">
                Medical Office Cleaning for Clinics, Practices, and Healthcare Facilities
              </h1>
              
              {/* Intro Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-white/95 font-medium leading-relaxed drop-shadow-sm text-left">
                Specialized medical office cleaning and hospital-grade sanitization for clinical and administrative spaces. Dwell-time verified disinfection, strict cross-contamination controls, and accountable local crews across Central Massachusetts, Rhode Island, and Southern New Hampshire.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-[#FFE800] text-slate-900 font-extrabold px-7 py-3.5 rounded-full hover:bg-yellow-300 transition-all shadow-xl hover:scale-105 text-sm md:text-base"
                >
                  Request a Walkthrough <ArrowRight className="w-4 h-4" />
                </Link>
                <a 
                  href="tel:5088901000" 
                  className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold px-6 py-3.5 rounded-full border border-white/30 transition-all text-sm md:text-base"
                >
                  <PhoneCall className="w-4 h-4 text-[#FFE800]" /> (508) 890-1000
                </a>
              </div>
              
              {/* Trust Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-auto border-t border-white/25">
                <div className="flex items-center gap-3">
                  <Clock className="w-7 h-7 text-[#FFE800] shrink-0" />
                  <div>
                    <div className="font-bold text-lg leading-tight">23+ Years</div>
                    <div className="text-xs text-white/80">In Business</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-7 h-7 text-[#FFE800] shrink-0" />
                  <div>
                    <div className="font-bold text-lg leading-tight">97%</div>
                    <div className="text-xs text-white/80">Client Retention</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="w-7 h-7 text-[#FFE800] shrink-0" />
                  <div>
                    <div className="font-bold text-lg leading-tight">4× WBJ</div>
                    <div className="text-xs text-white/80">Best of Business</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-7 h-7 text-[#FFE800] shrink-0" />
                  <div>
                    <div className="font-bold text-lg leading-tight">BBB A+</div>
                    <div className="text-xs text-white/80">Accredited 2007</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Floating Card */}
            <div className="w-full max-w-sm lg:mb-8">
              <div className="bg-white p-7 md:p-8 rounded-3xl shadow-2xl text-center space-y-4 border-b-4 border-[#00B8FF]">
                <div className="mx-auto w-14 h-14 rounded-full bg-[#0090c8]/10 flex items-center justify-center mb-3">
                  <Stethoscope className="w-7 h-7 text-[#0090c8]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  Clinical Standards, Zero Compromise
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  Designed for patient trust, infection control, and administrative peace of mind.
                </p>
                <div className="pt-4 border-t border-slate-100 space-y-3 text-left">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>EPA-registered healthcare disinfectants</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Strict color-coded microfiber protocols</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Custom high-touch point mapping</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Background-checked, consistent crews</span>
                  </div>
                </div>
                <div className="pt-3">
                  <Link 
                    href="/contact" 
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#003057] hover:bg-[#002240] text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors shadow-md"
                  >
                    Book Practice Walkthrough
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Featured Snippet & Patient Perception Section */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Featured Snippet Answer Box */}
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-sky-50/50 border-2 border-[#0090c8]/20 shadow-sm relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0090c8] text-white text-xs font-bold tracking-wide uppercase mb-4">
                <Sparkle className="w-3.5 h-3.5" /> Featured Snippet Answer
              </div>
              <p className="text-lg md:text-xl text-slate-900 font-semibold leading-relaxed">
                Medical office cleaning is the scheduled cleaning and disinfection of clinical and administrative spaces in a healthcare setting, including waiting rooms, exam rooms, reception areas, restrooms, and corridors. Enterprise Cleaning Corporation provides medical office cleaning for clinics, private practices, dental offices, urgent care centers, therapy practices, and medical office buildings across Central Massachusetts, Rhode Island, and Southern New Hampshire.
              </p>
            </div>

            {/* Patient Anxiety & Perception Reality */}
            <div className="space-y-5 text-slate-700 text-base md:text-lg leading-relaxed">
              <p>
                A medical office is judged differently than any other building. Patients arrive already anxious. A smudged waiting room chair or a restroom that smells wrong does not read as untidy. It reads as unsafe.
              </p>
              <p className="font-semibold text-slate-900">
                That is the standard medical office cleaning has to meet, and it is a standard most general janitorial cleaning services routes were never built for.
              </p>
            </div>

            {/* Scope Note Callout */}
            <div className="p-4 md:p-5 rounded-2xl bg-[#003057]/5 border border-[#003057]/15 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-[#0090c8] shrink-0 mt-0.5" />
              <p className="text-sm md:text-base text-slate-700 font-medium leading-relaxed">
                <strong>Scope Note:</strong> Content is written for non-regulated clinical and administrative spaces only. It does not claim regulated medical waste handling, sterile processing, operating room terminal cleaning, or biohazard remediation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* What we clean, and what we do not (Scope Clarity) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#0090c8] uppercase mb-2 inline-block">Transparent Boundary Definitions</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003057]">
              What we clean, and what we do not
            </h2>
            <p className="mt-4 text-lg text-slate-600 font-medium">
              Being clear about scope up front saves everyone time, so here it is plainly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* What our medical office cleaning covers */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">What our medical office cleaning covers</h3>
                  <p className="text-xs text-slate-500 font-medium">Included in our recurring healthcare routes</p>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "Waiting rooms and reception: chairs, arms, check in counters, kiosks, magazine racks, door handles, and pens",
                  "Exam rooms: floors, sinks, counters, cabinet fronts, chairs, stools, light switches, and non clinical equipment exteriors between patient days",
                  "Restrooms: full disinfection, descaling, floor scrubbing, and consumable restocking",
                  "Corridors, stairwells, elevators, and shared common areas",
                  "Break rooms, staff kitchens, and administrative offices",
                  "High touch point disinfection with EPA registered products used at their labeled dwell time",
                  "Floor care: vacuuming, damp mopping, machine scrubbing, and periodic stripping and waxing of vinyl and tile",
                  "Interior glass, window cleaning, and entryway matting",
                  "General waste and recycling removal from non regulated areas",
                  "Day porter coverage during patient hours for restroom restocking, spill response, and waiting room resets"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What we do not handle */}
            <div className="bg-slate-100/80 p-8 md:p-10 rounded-3xl border border-slate-300/80 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">What we do not handle</h3>
                  <p className="text-xs text-slate-500 font-medium">Retained by licensed specialty clinical staff</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Enterprise Cleaning is a commercial cleaning company, not a regulated medical waste contractor or a specialty remediation firm. The following stay with your existing licensed vendors and your clinical staff:
              </p>

              <ul className="space-y-4">
                {[
                  "Regulated medical waste: red bag waste, sharps containers, and pathological waste collection or transport",
                  "Sterile processing, instrument reprocessing, and central supply",
                  "Operating room and surgical suite terminal cleaning",
                  "Biohazard, bloodborne pathogen, and infectious spill remediation",
                  "Pharmacy compounding areas and cleanrooms with USP 797 or 800 requirements"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-slate-700 font-medium">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-sm text-slate-600 font-medium leading-relaxed mt-4">
                Most outpatient practices, clinics, dental offices, and medical office buildings do not need a specialty vendor for their day to day cleaning. They need a dependable commercial crew that understands healthcare expectations, follows a written scope, and shows up. That is the work described on this page.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Visual: Waiting Room & Reception */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#0090c8] uppercase mb-2 inline-block">The Reception First Impression</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003057]">
              Pristine Clinical Reception & Waiting Environments
            </h2>
            <p className="mt-4 text-lg text-slate-600 font-medium">
              A spotless reception area reassures patients before their appointment begins.
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 mb-16">
            <div className="relative h-[300px] sm:h-[420px] md:h-[480px] w-full">
              <Image 
                src="/images/medical_clinic_reception.jpg" 
                alt="Spotless medical office waiting room and reception desk"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 text-white">
                <div className="inline-flex items-center gap-2 bg-[#FFE800] text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full mb-2 uppercase tracking-wide">
                  Sanitized Daily
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Infection Control From Entry to Checkout</h3>
                <p className="text-xs md:text-sm text-white/90 max-w-2xl mt-1">
                  Check-in counters, pen cups, kiosk screens, chair arms, and entrance vestibules are disinfected nightly using EPA-registered broad-spectrum solutions.
                </p>
              </div>
            </div>
          </div>

          {/* How medical office cleaning differs from standard office cleaning */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#003057]">
                How medical office cleaning differs from standard office cleaning
              </h2>
              <p className="text-lg text-slate-600 font-medium mt-2">
                The tasks look similar on paper. The discipline behind them is not.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Cleaning order and cross contamination control */}
              <div className="bg-slate-50 p-7 rounded-3xl border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#003057] text-[#FFE800] flex items-center justify-center">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Cleaning order and cross contamination control</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                  Crews work clean areas before dirty areas and never move a cloth backward through that sequence. Color coded microfiber keeps restroom cloths out of exam rooms and exam room cloths out of break rooms. Mop solution is changed by area rather than dragged through the building.
                </p>
              </div>

              {/* Dwell time on every disinfected surface */}
              <div className="bg-slate-50 p-7 rounded-3xl border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0090c8] text-white flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Dwell time on every disinfected surface</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                  Disinfectants only work if the surface stays visibly wet for the contact time printed on the label, often one to ten minutes. Spray and immediately wipe and you have cleaned a surface without disinfecting it. Our routes build the wait into the sequence so the product finishes its job.
                </p>
              </div>

              {/* Touch point mapping */}
              <div className="bg-slate-50 p-7 rounded-3xl border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Touch point mapping</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                  Every practice has its own set of surfaces that get touched hundreds of times a day: the check in counter edge, the pen cup, the door push plate, the blood pressure cuff hook, the waiting room chair arms. We map those with your office manager and build them into the nightly checklist instead of leaving them to judgment.
                </p>
              </div>

              {/* Scheduling around patients */}
              <div className="bg-slate-50 p-7 rounded-3xl border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Scheduling around patients</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                  Most practices need cleaning after the last patient leaves. Some need a day porter through peak hours instead. Multi tenant medical office buildings often need both. The schedule follows your appointment book.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Disinfection services for medical facilities & Electrostatic */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0090c8]/10 text-[#0090c8] flex items-center justify-center shrink-0">
                  <SprayCan className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#0090c8] uppercase tracking-widest">Infection Control Protocols</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#003057]">
                    Disinfection services for medical facilities
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed">
                <p>
                  <strong>Commercial disinfection services</strong> are part of medical office cleaning rather than an upcharge. Products used are EPA registered for healthcare settings, applied at labeled dilution, and given full contact time.
                </p>
                <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-sky-950 font-bold">
                    <Zap className="w-5 h-5 text-[#0090c8]" />
                    <span>Electrostatic Disinfection Options</span>
                  </div>
                  <p className="text-sm md:text-base text-slate-700 font-medium leading-relaxed">
                    <strong>Electrostatic disinfection services</strong> are available for larger waiting areas, therapy gyms, and shared clinical corridors where blanket coverage of an entire room is faster and more even than wiping every surface. It is a supplement to manual cleaning, not a replacement for it, because a disinfectant applied over visible soil will not work.
                  </p>
                </div>
                <p className="text-sm text-slate-500 font-medium pt-2 border-t border-slate-100">
                  Whether serving outpatient clinics or specialized suites requiring <strong>hospital janitorial services</strong> discipline, our protocols safeguard both staff and visitors.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Facilities we clean */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#0090c8] uppercase mb-2 inline-block">Healthcare Environments</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003057]">
              Facilities we clean
            </h2>
            <p className="mt-3 text-lg text-slate-600 font-medium">
              Tailored medical cleaning programs across clinical specialties and healthcare campuses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Primary care and family practices",
              "Dental and orthodontic offices",
              "Urgent care and walk in clinics",
              "Physical therapy, chiropractic, and rehabilitation practices",
              "Behavioral health and counseling offices",
              "Dermatology, ophthalmology, and other specialty practices",
              "Diagnostic imaging and outpatient lab collection sites",
              "Multi tenant medical office buildings and healthcare campuses",
              "Home health, hospice, and clinical administrative offices"
            ].map((facility, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#00B8FF]/40 transition-all flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-bold text-slate-800 text-sm md:text-base leading-snug">{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area: Central MA, Rhode Island, and Southern NH */}
      <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #003057 0%, #004b80 50%, #0090c8 100%)" }}>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          <div className="text-center max-w-4xl mx-auto mb-16 text-white">
            <span className="inline-block text-[#FFE800] font-bold tracking-widest uppercase text-sm mb-3">Regional Coverage</span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Medical office cleaning across Central MA, Rhode Island, and Southern NH
            </h2>
            <div className="space-y-4 text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
              <p>
                Enterprise Cleaning provides <strong>medical office cleaning in Worcester, MA</strong> and across Worcester County, including Shrewsbury, West Boylston, Westborough, Northborough, Holden, Auburn, Leominster, and Fitchburg.
              </p>
              <p>
                <strong>Medical cleaning services in Rhode Island</strong> cover Providence and the surrounding communities, where outpatient practices and multi tenant medical buildings make up a large share of the market. In Southern New Hampshire, service reaches the Nashua, Manchester, and Salem corridor.
              </p>
              <p>
                Practices searching for <strong>medical office cleaning near me</strong> or <strong>medical office cleaning services near me</strong> usually find national franchises that subcontract the actual work. Enterprise Cleaning Corporation is locally owned, headquartered at 99 Hartwell Street in West Boylston, and has served the region for more than two decades.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a 
                href="tel:5088901000" 
                className="inline-flex items-center gap-2 bg-[#FFE800] text-slate-900 font-extrabold px-8 py-4 rounded-full hover:bg-yellow-300 transition-all shadow-xl text-base"
              >
                <PhoneCall className="w-5 h-5" /> Call (508) 890-1000
              </a>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-slate-100 transition-all shadow-lg text-base"
              >
                Request a Walkthrough <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Regional Cities Chip Matrix */}
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-white">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-[#FFE800]" />
              <h3 className="text-xl font-bold">Regional Service Locations</h3>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-bold text-[#FFE800] mb-2 uppercase tracking-wide text-xs">Central Massachusetts</h4>
                <p className="text-white/80 leading-relaxed font-medium">
                  Worcester · Shrewsbury · West Boylston · Westborough · Northborough · Holden · Auburn · Leominster · Fitchburg
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#FFE800] mb-2 uppercase tracking-wide text-xs">Rhode Island</h4>
                <p className="text-white/80 leading-relaxed font-medium">
                  Providence · Cranston · Pawtucket · Warwick · Surrounding Communities
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#FFE800] mb-2 uppercase tracking-wide text-xs">Southern New Hampshire</h4>
                <p className="text-white/80 leading-relaxed font-medium">
                  Nashua · Manchester · Salem Corridor
                </p>
              </div>
            </div>

            <p className="text-xs text-white/70 mt-6 pt-4 border-t border-white/15">
              Serving outpatient facilities seeking dedicated <strong>medical cleaning services near me</strong> and trusted healthcare janitorial partnerships throughout New England.
            </p>
          </div>

        </div>
      </section>

      {/* Why healthcare clients stay */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#003057] text-[#FFE800] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#0090c8] uppercase tracking-widest">Accountability & Retention</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                    Why healthcare clients stay
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed">
                <p>
                  Enterprise Cleaning holds a <strong>97 percent client retention rate</strong>, four Worcester Business Journal Best of Business awards, and BBB accreditation since 2007. Clients include MacIntire Insurance and the Worcester Club.
                </p>
                <p>
                  Owners <strong>Steve Buchalter and Julio Biage</strong> stay involved in accounts personally. For a medical practice, that matters more than it sounds: you are letting a crew into rooms where patient privacy applies, and you want to know who those people are and who is accountable for them. Crews are consistent, background checked, and trained on your specific scope before the first shift.
                </p>
              </div>

              {/* Request a walkthrough callout */}
              <div className="mt-8 p-6 md:p-8 rounded-2xl bg-[#003057] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Request a medical office cleaning walkthrough</h3>
                  <p className="text-sm text-white/85 leading-relaxed max-w-xl">
                    Every scope starts on site. We walk your practice with your office manager, map the touch points, confirm what stays with your clinical staff, and put the whole thing in writing before anyone quotes a number.
                  </p>
                </div>
                <Link 
                  href="/contact" 
                  className="shrink-0 inline-flex items-center gap-2 bg-[#FFE800] text-slate-950 font-extrabold px-6 py-3.5 rounded-full hover:bg-yellow-300 transition-all text-sm shadow-md"
                >
                  Book Walkthrough <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Voice Search Frequently Asked Questions */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-bold tracking-widest text-[#0090c8] uppercase mb-2 inline-block">Voice Search & Practice Manager Inquiries</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#003057]">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-slate-600 font-medium text-base">
                Ten voice search FAQs. Several deliberately answer scope and certification questions, which is what practice managers search before they call anyone. Each answer leads with the direct response.
              </p>
            </div>
            
            <div className="space-y-6">
              {structuredDataFAQ.mainEntity.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-[#00B8FF]/40 transition-colors"
                >
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                    <span className="text-[#0090c8] shrink-0 font-extrabold text-lg md:text-xl">Q{index + 1}.</span>
                    <span>{faq.name}</span>
                  </h3>
                  <div className="text-slate-600 pl-8 leading-relaxed font-medium text-sm md:text-base border-l-2 border-[#0090c8]/20 ml-2">
                    {faq.acceptedAnswer.text}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      
      {/* Related Services */}
      <RelatedServices serviceIds={["janitorial", "nightly", "floor", "specialty"]} />

      {/* Related Industries Navigation */}
      <RelatedIndustries industryIds={["medical", "office", "education", "industrial"]} />
      
      {/* Global Glow CTA Section */}
      <CTASection
        className="bg-white border-t border-slate-200"
        title="Ready for Clinical-Grade Facility Care?"
        action={{
          text: "Request Practice Walkthrough",
          href: "/contact",
          variant: "destructive",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed text-center">
            Protect your patient reputation with a commercial cleaning team that understands healthcare infection control. Contact Enterprise Cleaning Corporation today.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {[
              { icon: ShieldCheck, text: "Fully Insured & Bonded" },
              { icon: Users, text: "97% Client Retention" },
              { icon: Trophy, text: "4× WBJ Best of Business" },
              { icon: Clock, text: "23+ Years Experience" },
            ].map((chip, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold"
              >
                <chip.icon className="w-4 h-4 text-[#0090c8]" />
                {chip.text}
              </div>
            ))}
          </div>
        </div>
      </CTASection>
    </>
  );
}
