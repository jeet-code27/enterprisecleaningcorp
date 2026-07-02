import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, PhoneCall, ShieldCheck, Clock, 
  ArrowRight, Stethoscope, Activity, HeartPulse,
  Syringe, Users, Trophy, Trash2, Droplets, SprayCan, CheckCircle2, FileText,
  MapPin, ShieldAlert, Sparkles
} from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";

export const metadata: Metadata = {
  title: "Medical & Healthcare Cleaning Worcester MA",
  description: "Healthcare-grade cleaning and disinfection for medical offices, clinics, and labs across Worcester and Central Massachusetts. Compliance-focused, 97% retention.",
  alternates: {
    canonical: "https://enterprisecleaningcorp.com/medical-healthcare-cleaning-central-ma"
  }
};

const structuredDataService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Medical & Healthcare Facilities — Enterprise Cleaning Corporation",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Enterprise Cleaning Corporation",
    "telephone": "(508) 890-1000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "99 Hartwell Street",
      "addressLocality": "West Boylston",
      "addressRegion": "MA",
      "postalCode": "01583",
      "addressCountry": "US"
    },
    "url": "https://enterprisecleaningcorp.com"
  },
  "areaServed": [
    "Worcester MA",
    "Central Massachusetts",
    "Rhode Island",
    "New Hampshire"
  ],
  "url": "https://enterprisecleaningcorp.com/medical-healthcare-cleaning-central-ma"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you provide disinfection for medical and healthcare facilities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Disinfection of high-touch surfaces, exam rooms, and patient areas is central to our healthcare cleaning programs, using procedures designed to reduce cross-contamination."
      }
    },
    {
      "@type": "Question",
      "name": "Can you clean during and after patient hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide day porter coverage to maintain waiting rooms and restrooms during patient hours, and after-hours deep cleaning so the facility is ready each morning."
      }
    },
    {
      "@type": "Question",
      "name": "Do you serve dental offices, clinics, and labs as well as medical offices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We clean a full range of healthcare environments, including medical offices, dental practices, outpatient clinics, and laboratories across Central Massachusetts."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas do you cover for healthcare cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve medical and healthcare facilities throughout Worcester and Central Massachusetts, and across Rhode Island and New Hampshire."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get a quote for medical facility cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call (508) 890-1000 or request a free on-site assessment, and we will design a healthcare cleaning program for your facility."
      }
    }
  ]
};

export default function MedicalCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataFAQ) }}
      />

      {/* Hero Section - Medical/Clean Style with Brand Blue */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50">
        {/* Abstract shapes for a soft, sterile feel */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0090c8]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00B8FF]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content */}
            <div className="flex-1 space-y-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#0090c8]/20 text-sm font-bold tracking-wide text-[#0090c8]">
                <Stethoscope className="w-4 h-4 text-[#E31837]" />
                INDUSTRIES WE SERVE
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900">
                Medical & Healthcare<br/>
                <span className="text-[#0090c8]">Facility Cleaning</span>
              </h1>
              
              <p className="text-lg text-slate-600 font-medium leading-relaxed text-justify">
                In a healthcare environment, cleaning is a matter of patient safety. Medical offices, clinics, dental practices, outpatient centers, and laboratories require disinfection standards and attention to detail that go far beyond ordinary commercial cleaning. Enterprise Cleaning Corporation provides healthcare-focused cleaning across Central Massachusetts, helping medical facilities maintain the sanitary, compliant, and welcoming environment their patients deserve.
              </p>

              <p className="text-lg text-slate-600 font-medium leading-relaxed text-justify">
                We understand the stakes. A waiting room must look immaculate and feel safe. Exam rooms and high-touch surfaces must be properly disinfected. Restrooms must be maintained throughout patient hours. We build programs that meet these demands consistently, every day.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#0090c8] text-white font-extrabold px-8 py-4 rounded-xl hover:bg-[#007aa8] transition-colors shadow-lg shadow-[#0090c8]/30 text-lg">
                  Get a Free Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:5088901000" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm text-lg">
                  <PhoneCall className="w-5 h-5 text-[#0090c8]" />
                  (508) 890-1000
                </a>
              </div>
            </div>

            {/* Right Image Feature - Soft clinical style */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0090c8] to-[#00B8FF] rounded-[3rem] rotate-3 opacity-20 scale-105" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white aspect-[4/5] lg:aspect-square">
                <Image 
                  src="/images/medical_cleaning_hero.png" 
                  alt="Professional medical cleaning in a bright, modern healthcare waiting room in Central MA" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
              
              {/* Floating Status Badge */}
              <div className="absolute -left-6 bottom-12 bg-white rounded-2xl p-5 shadow-xl border border-slate-100 flex items-center gap-4 animate-float">
                <div className="w-12 h-12 rounded-full bg-[#E31837]/10 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-6 h-6 text-[#E31837]" />
                </div>
                <div>
                  <div className="text-slate-900 font-extrabold">Infection Control</div>
                  <div className="text-slate-500 text-xs font-medium">Compliance-focused</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Healthcare Cleaning Done Right (Services List - Clinical Style) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0090c8] mb-6">Healthcare Cleaning Done Right</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Our medical and healthcare cleaning programs are designed around infection control and the realities of a patient-facing facility:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-6xl mx-auto">
            {[
              { icon: ShieldCheck, text: "Disinfection of high-touch surfaces — door handles, light switches, counters, and shared equipment." },
              { icon: Activity, text: "Exam room, treatment room, and waiting room cleaning and sanitizing." },
              { icon: Droplets, text: "Restroom cleaning, sanitizing, and restocking throughout the day." },
              { icon: Trash2, text: "Proper handling and disposal of general waste streams per facility protocol." },
              { icon: Sparkles, text: "Floor care suited to medical environments." },
              { icon: Users, text: "Reception and administrative area janitorial." },
              { icon: Clock, text: "Day porter coverage to maintain waiting rooms and restrooms during patient hours." },
              { icon: SprayCan, text: "Color-coded tools and procedures to reduce cross-contamination." },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-[#0090c8]/5 transition-colors border border-slate-100 hover:border-[#0090c8]/30 group">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-[#0090c8]" />
                </div>
                <p className="text-slate-700 font-medium leading-relaxed pt-3 text-justify">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content - Side-by-Side Clinical Blocks */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24 max-w-7xl mx-auto">
            
            {/* Block 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  Consistency and Accountability <span className="text-[#0090c8]">Patients Can Feel</span>
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    Healthcare facilities cannot afford an unreliable cleaning vendor. Standards must hold every single day, with no exceptions. Our managed model delivers exactly that: trained crews, real supervision, and direct owner-level accountability. When a practice manager needs something addressed, they reach a local team that responds — not a distant call center.
                  </p>
                  <p>
                    That dependability is why our clients stay. A 97% client retention rate is a powerful signal in healthcare, where trust and consistency matter more than anything. Many medical clients expand from nightly cleaning into floor care and specialty disinfection projects as their relationship with us grows.
                  </p>
                </div>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -z-10" />
                <div className="flex items-center gap-5 mb-8 pb-8 border-b border-slate-100">
                  <div className="w-16 h-16 rounded-2xl bg-[#0090c8] flex items-center justify-center text-white font-black text-2xl">
                    97%
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Client Retention</h3>
                    <p className="text-slate-500 font-medium">Built on trust and consistency</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#E31837] flex items-center justify-center text-white">
                    <HeartPulse className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Direct Accountability</h3>
                    <p className="text-slate-500 font-medium">Owner-level supervision on every account</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-[#0090c8] text-white p-10 rounded-3xl shadow-xl border-l-8 border-[#E31837]">
                <div className="flex items-center gap-4 mb-6">
                  <ShieldCheck className="w-10 h-10 text-[#FFE800]" />
                  <h3 className="text-2xl font-bold">Standard, Not Exception</h3>
                </div>
                <p className="text-white/90 leading-relaxed text-lg font-medium text-justify">
                  We use procedures designed for healthcare settings — including measures to reduce cross-contamination between areas — and we hold to them consistently. Consistency is the entire point: a facility that is properly disinfected most days but not all days has not solved the problem. Our managed model, with trained crews and real supervision, exists precisely to deliver the day-in, day-out reliability that infection control requires.
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                  Infection Control Is the <span className="text-[#E31837]">Standard</span>
                </h2>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-justify">
                  <p>
                    Healthcare cleaning is fundamentally different from ordinary commercial cleaning because the consequences of getting it wrong are so much higher. Patients, many of them already vulnerable, pass through your facility every day. Proper disinfection of exam rooms, waiting areas, restrooms, and high-touch surfaces is essential to reducing the spread of infection and maintaining the safe, sanitary environment that patients and regulators expect.
                  </p>
                  <p>
                    We also recognize that a medical facility is a place of care, and its cleanliness shapes how patients feel the moment they walk in. A spotless, well-maintained waiting room signals competence and safety before a patient ever sees a provider. We help medical practices across Central Massachusetts present that standard every day, protecting both patient health and the reputation of the practice.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Trust Banner — Custom Medical Image */}
      <section className="relative py-24 overflow-hidden">
        {/* Full Image Background instead of Skyline */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/medical_cleaning_banner.png"
            alt="High-end modern medical laboratory or exam room in Central Massachusetts"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#003057]/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0090c8]/90 via-[#003057]/80 to-[#001220]/90" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FFE800] font-bold tracking-widest uppercase text-sm mb-6 backdrop-blur-md">
              Serving Medical Facilities Across Central MA
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
              Healthcare-Grade Cleaning You Can Trust
            </h2>
            <p className="text-lg text-white/90 font-medium leading-relaxed max-w-4xl mx-auto text-justify drop-shadow-md">
              Worcester is a growing healthcare and life-sciences hub, and we are proud to serve medical practices throughout the region. From Worcester and Shrewsbury to Auburn, Holden, Westborough, and across Central MA, we keep medical and healthcare facilities clean, sanitary, and compliant. We bring 97% client retention, four Worcester Business Journal “Best of Business” awards, and BBB accreditation since 2007 to every healthcare contract and serve Massachusetts, Rhode Island, and New Hampshire.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: ShieldCheck, stat: "Compliance", label: "Infection Control", sub: "Healthcare focus" },
              { icon: Trophy, stat: "4×", label: "Best of Business", sub: "Worcester Business Journal" },
              { icon: Users, stat: "97%", label: "Client Retention Rate", sub: "Industry-leading" },
              { icon: MapPin, stat: "Central MA", label: "Local Partner", sub: "Rapid response" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-center hover:bg-white/20 hover:border-[#FFE800]/40 transition-all duration-300 overflow-hidden shadow-2xl"
              >
                <item.icon className="w-8 h-8 text-[#FFE800] mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{item.stat}</div>
                <div className="text-sm font-bold text-white/90 mb-1">{item.label}</div>
                <div className="text-xs text-white/70 font-medium">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0090c8] mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600 font-medium">Common questions about our medical and healthcare cleaning services.</p>
            </div>
            
            <div className="space-y-6">
              {structuredDataFAQ.mainEntity.map((faq, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-[#0090c8]/30 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                    <span className="text-[#0090c8] shrink-0 mt-0.5 text-xl">Q:</span>
                    {faq.name}
                  </h3>
                  <p className="text-slate-600 pl-8 leading-relaxed font-medium text-justify">
                    <span className="font-bold text-slate-400 mr-2">A:</span>
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        className="bg-slate-50 border-t border-slate-200"
        title="Ready to Elevate Your Facility's Standard of Care?"
        action={{
          text: "Request On-Site Assessment",
          href: "/contact",
          variant: "default",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed text-justify">
            Call (508) 890-1000 today, and we will design a healthcare cleaning program specifically for your medical office, clinic, or laboratory.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 animate-appear delay-100">
            {[
              { icon: ShieldCheck, text: "Infection Control" },
              { icon: Activity, text: "Cross-Contamination Prevention" },
              { icon: CheckCircle2, text: "Fully Managed Crews" },
            ].map((chip, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-bold shadow-sm"
              >
                <chip.icon className="w-4 h-4 text-[#E31837]" />
                {chip.text}
              </div>
            ))}
          </div>
        </div>
      </CTASection>
    </>
  );
}
