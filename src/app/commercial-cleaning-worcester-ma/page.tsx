import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, PhoneCall, ShieldCheck, Clock, Building2, 
  MapPin, Trophy, Users,
  ArrowRight, CheckCircle2,
  CalendarCheck,
  Briefcase,
  Sparkles,
  Factory,
  Stethoscope,
  GraduationCap,
  Truck,
  HelpCircle
} from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";

export const metadata: Metadata = {
  title: { absolute: "Commercial Cleaning Worcester, MA | Enterprise Cleaning Corp" },
  description: "Commercial cleaning and janitorial services in Worcester, MA. 97% client retention, 4x WBJ award winner. Get a free quote from Enterprise Cleaning Corporation.",
  keywords: "Commercial cleaning services, commercial cleaning, janitorial services, office cleaning, commercial office cleaning, commercial cleaning services worcester, worcester commercial cleaning services, medical office cleaning worcester ma, post construction cleaning massachusetts",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-worcester-ma"
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
};

const structuredDataService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Commercial Cleaning Services",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Enterprise Cleaning Corporation",
    "telephone": "+1-508-890-1000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "99 Hartwell Street, Suite B",
      "addressLocality": "West Boylston",
      "addressRegion": "MA",
      "postalCode": "01583",
      "addressCountry": "US"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Worcester, MA"
  },
  "url": "https://www.enterprisecleaningcorp.com/commercial-cleaning-worcester-ma"
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What commercial cleaning services does Enterprise Cleaning Corporation offer in Worcester, MA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide nightly janitorial, day porter services, floor care, window cleaning and pressure washing, post-construction cleaning, and turnover cleaning for offices, medical facilities, industrial buildings, and property management portfolios throughout Worcester."
      }
    },
    {
      "@type": "Question",
      "name": "How much does commercial cleaning cost in Worcester?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing depends on square footage, cleaning frequency, and the services required. We provide a free on-site walkthrough and a written quote for every Worcester property before any contract is signed."
      }
    },
    {
      "@type": "Question",
      "name": "Does Enterprise Cleaning Corporation clean medical offices in Worcester?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We clean medical and healthcare administrative offices throughout Worcester, including outpatient clinics and healthcare-adjacent office space, using cleaning protocols built for facilities that serve patients."
      }
    },
    {
      "@type": "Question",
      "name": "How often should a Worcester office be professionally cleaned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Worcester offices are cleaned five nights a week, but the right frequency depends on foot traffic, square footage, and industry. We recommend a frequency during your free walkthrough."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer day porter services in Worcester?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our day porters work on-site during business hours to handle restocking, spot cleaning, and restroom checks for Worcester offices and commercial buildings that need daytime coverage in addition to nightly cleaning."
      }
    },
    {
      "@type": "Question",
      "name": "Can Enterprise Cleaning Corporation handle post-construction cleanup in Worcester?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We handle rough, final, and touch-up post-construction cleaning for contractors and developers completing projects in Worcester and the surrounding area."
      }
    },
    {
      "@type": "Question",
      "name": "Is Enterprise Cleaning Corporation local to Worcester?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our headquarters is in West Boylston, just north of Worcester, and Worcester has been one of our primary service areas for more than two decades."
      }
    },
    {
      "@type": "Question",
      "name": "What industries does Enterprise Cleaning Corporation serve in Worcester?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve manufacturing and industrial facilities, medical and healthcare offices, corporate and financial offices, educational and municipal facilities, property management portfolios, and warehouses throughout Worcester."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get a free cleaning quote for my Worcester property?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call (508) 890-1000 or submit a quote request. We schedule a free on-site walkthrough of your Worcester property and provide a written proposal."
      }
    },
    {
      "@type": "Question",
      "name": "Why do Worcester businesses choose Enterprise Cleaning Corporation over other cleaning companies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 97% client retention rate, four Worcester Business Journal 'Best of Business' awards, BBB accreditation since 2007, and direct access to the owners rather than a franchise call center."
      }
    }
  ]
};

export default function WorcesterCityPage() {
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

      {/* Hero Section - Soft UI Style matching primary pages */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50">
        {/* Abstract shapes for a soft feel */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0090c8]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00B8FF]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content */}
            <div className="flex-1 space-y-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#0090c8]/20 text-sm font-bold tracking-wide text-[#0090c8]">
                <MapPin className="w-4 h-4 text-[#E31837]" />
                WORCESTER, MA LOCATION
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900">
                Commercial Cleaning Services<br/>
                <span className="text-[#0090c8]">in Worcester, MA</span>
              </h1>
              
              <div className="text-lg text-slate-600 font-medium leading-relaxed text-left space-y-4">
                <p>
                  Worcester is the commercial and institutional anchor of Central Massachusetts and the second-largest city in New England, with a downtown that has been rebuilding around Polar Park, CitySquare, and a growing biotech and medical corridor built on UMass Chan Medical School, UMass Memorial Health, and Saint Vincent Hospital. Add Worcester Polytechnic Institute, Clark University, and a dense ring of manufacturing and industrial parks along I-290 and I-190, and the result is a city with an unusually wide range of commercial cleaning needs in one ZIP code radius — hospital administrative wings, biotech office suites, downtown Class A towers, and industrial floor space, often within a few miles of each other.
                </p>
                <p>
                  Enterprise Cleaning Corporation is headquartered a few miles north of Worcester in West Boylston, which means Worcester is not a satellite market for us — it is the market we know best. We have served office buildings, medical facilities, and industrial accounts throughout Worcester and Worcester County for more than two decades, and our crews are on Worcester properties every night of the week.
                </p>
              </div>
              
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

            {/* Right Image Feature - Soft clinical/modern style */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0090c8] to-[#00B8FF] rounded-[3rem] rotate-3 opacity-20 scale-105" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white aspect-[4/5] lg:aspect-square">
                <Image 
                  src="/images/worcester_cleaning_hero.png" 
                  alt="Commercial Cleaning Services in Worcester, MA" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
              
              {/* Floating Status Badge */}
              <div className="absolute -left-6 bottom-12 bg-white rounded-2xl p-5 shadow-xl border border-slate-100 flex items-center gap-4 animate-float">
                <div className="w-12 h-12 rounded-full bg-[#E31837]/10 flex items-center justify-center shrink-0">
                  <Trophy className="w-6 h-6 text-[#E31837]" />
                </div>
                <div>
                  <div className="text-slate-900 font-extrabold">4× Best of Business</div>
                  <div className="text-slate-500 text-xs font-medium">Worcester Business Journal Winner</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Main Section: Commercial Cleaning Built for Worcester's Business Community */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0090c8] mb-6">
                Commercial Cleaning Built for Worcester's Business Community
              </h2>
              <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-left space-y-6">
                <p>
                  Facility and property managers in Worcester are typically balancing several buildings, several vendors, and a limited amount of time to manage any of it closely. What they need from a cleaning company is not a sales pitch — it's a crew that shows up on schedule, a point of contact who answers the phone, and a level of consistency that means they stop thinking about cleaning altogether. That consistency is reflected in our 97% client retention rate: once a Worcester account signs with us, they tend to stay.
                </p>
                <p>
                  Because Worcester is where our own crews spend the most time, we've built scheduling experience across nearly every type of building the city has to offer — a downtown financial office that needs quiet, after-hours service; a hospital administrative wing that needs discretion around active clinical space; and an industrial building on Route 20 that needs a crew comfortable working around forklifts and shift changes. That range of experience is part of why Worcester clients rarely feel the need to shop around once they've signed with us.
                </p>
              </div>
            </div>

            {/* Neighborhoods & Business Districts */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Building2 className="w-7 h-7 text-[#0090c8]" />
                Neighborhoods & Business Districts We Serve in Worcester
              </h3>
              <p className="text-slate-600 font-medium mb-6 text-left">
                Enterprise Cleaning Corporation serves commercial properties throughout Worcester, including:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Downtown Worcester & CitySquare — Class A office towers, financial and legal offices, and street-level retail",
                  "Worcester's medical corridor — UMass Chan Medical School and UMass Memorial Health administrative and clinical office space",
                  "Green Island & Route 20 industrial area — manufacturing, warehousing, and light-industrial tenants",
                  "Route 9 corridor — retail centers, professional offices, and medical suites",
                  "Worcester Regional Airport business park — corporate and logistics tenants"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-[#0090c8] shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium text-sm text-left">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Businesses Choose Enterprise Cleaning Corporation */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0090c8] mb-6">
                Why Local Businesses Choose Enterprise Cleaning Corporation
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Because our headquarters sits just north of the city, Worcester accounts get faster response times, a crew that already knows the building stock in the area — from downtown high-rises to Route 20 and Route 9 industrial parks — and direct access to ownership rather than a call center.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "20+ Years Experience", text: "More than two decades serving Central Massachusetts, Rhode Island, and Southern New Hampshire" },
                { title: "97% Client Retention Rate", text: "Reflecting unmatched consistency and long-term client trust" },
                { title: "4× WBJ Winner", text: "4x Worcester Business Journal 'Best of Business' award winner" },
                { title: "BBB Accredited", text: "BBB accredited since 2007 with a proven track record" },
                { title: "Owner-Accessible Service", text: "You get direct access to leadership, not a franchise ticket number" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0090c8]/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-[#0090c8]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm font-medium text-left">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Cleaning Services in Worcester, MA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0090c8] mb-6">
              Core Cleaning Services in Worcester, MA
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Enterprise Cleaning Corporation provides a full range of commercial cleaning services to Worcester businesses, scaled to fit everything from a single office suite to a multi-building portfolio:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Nightly Janitorial & Office Cleaning",
                desc: "Recurring after-hours cleaning for offices, common areas, restrooms, and break rooms, scheduled around your business hours so cleaning never disrupts operations."
              },
              {
                icon: Users,
                title: "Day Porter Services",
                desc: "On-site daytime staff who handle restocking, spot-cleaning, restroom checks, and light maintenance while your facility is open and in use."
              },
              {
                icon: Sparkles,
                title: "Floor Care",
                desc: "Stripping, waxing, buffing, and polishing for VCT and hard-surface floors, plus scheduled carpet cleaning to protect flooring investments and maintain a professional appearance."
              },
              {
                icon: Building2,
                title: "Specialty Exterior Cleaning",
                desc: "Window cleaning and pressure washing for building exteriors, walkways, loading docks, and parking areas."
              },
              {
                icon: CalendarCheck,
                title: "Post-Construction Cleaning",
                desc: "Rough, final, and touch-up cleaning phases for contractors, developers, and property owners bringing a newly built or renovated space online."
              },
              {
                icon: ArrowRight,
                title: "Turnover Cleaning",
                desc: "Fast, thorough cleaning between tenants for commercial suites, apartment units, and multi-tenant properties, built around the tight timelines property managers work with."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-[#0090c8]/30 transition-all hover:shadow-lg group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-[#0090c8]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed text-left">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve in Worcester */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0090c8] mb-6">
              Industries We Serve in Worcester
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Our Worcester accounts span a range of industries, each with its own cleaning standards and scheduling requirements:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Factory,
                name: "Manufacturing & Industrial Facilities",
                desc: "Production floors, warehouses, and industrial office space that need cleaning built around shift schedules and safety requirements."
              },
              {
                icon: Stethoscope,
                name: "Medical & Healthcare Facilities",
                desc: "Medical offices, outpatient clinics, and healthcare administrative space cleaned to the standards patients and staff expect."
              },
              {
                icon: Briefcase,
                name: "Corporate Offices & Financial Services",
                desc: "Class A and Class B office space, financial and professional service offices where first impressions matter to clients and employees alike."
              },
              {
                icon: GraduationCap,
                name: "Educational & Municipal Facilities",
                desc: "Schools, municipal buildings, and public facilities cleaned around occupied schedules and public-use requirements."
              },
              {
                icon: Building2,
                name: "Property Management & Commercial Real Estate",
                desc: "Multi-tenant office buildings, retail centers, and mixed-use properties where property and facility managers need one accountable vendor across an entire portfolio."
              },
              {
                icon: Truck,
                name: "Warehouses & Distribution Centers",
                desc: "Large-footprint logistics and distribution space that needs efficient, scheduled cleaning without interrupting receiving and shipping operations."
              }
            ].map((ind, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-[#0090c8]/10 flex items-center justify-center mb-4">
                  <ind.icon className="w-6 h-6 text-[#0090c8]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{ind.name}</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed text-left">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Build Your Cleaning Plan */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0090c8] text-center mb-6">
              How We Build Your Cleaning Plan
            </h2>
            <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-left space-y-6">
              <p>
                Every Worcester account starts the same way: a free, no-obligation walkthrough of your property with a member of our team, not a subcontractor or a franchise sales rep. We look at square footage, floor types, restroom count, tenant mix, and current pain points, then put together a written scope and price before any contract is signed.
              </p>
              <p>
                Once a schedule is set, your account gets a dedicated crew rather than a rotating pool of subcontracted labor, so the same people learn your building, your supply closets, and your particular quirks — a security system that needs a specific arm-and-disarm sequence, a floor that scuffs easily, a tenant who works late. Consistency in staffing is one of the most requested — and least delivered — things facility managers ask for from a cleaning vendor, and it's built into how we staff every Worcester account from day one.
              </p>
              <p>
                We check in regularly rather than waiting for a complaint, and because our ownership is directly reachable — not buried behind a franchise call center — issues get resolved in a conversation, not a ticket queue. That combination of a stable crew, a direct point of contact, and a willingness to actually show up when something needs attention is reflected in a 97% client retention rate across our full service area.
              </p>
              <p>
                Every Worcester crew is fully insured and bonded, trained on the equipment and cleaning chemicals used on your property, and briefed on any building-specific access, security, or safety requirements before their first shift. If your Worcester property has a facility handbook, badge-in procedure, or vendor compliance requirement, we build our onboarding around it rather than asking you to work around us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Worcester and the Surrounding Area */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0090c8] text-center mb-6">
              Serving Worcester and the Surrounding Area
            </h2>
            <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed text-left space-y-6">
              <p>
                In addition to Worcester, Enterprise Cleaning Corporation regularly services commercial properties in the surrounding communities of Shrewsbury, West Boylston, Auburn, Holden, Millbury, and throughout the broader Central Massachusetts, Rhode Island, and Southern New Hampshire region.
              </p>
              <p>
                For a Worcester facility or property manager, that translates into fewer emergencies, fewer complaints from tenants or staff about a dirty restroom or a streaky lobby floor, and one less vendor relationship to manage closely. You get a crew that already knows Worcester's building stock, a schedule that fits your hours, and a company that has been answering the phone in this market for more than two decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner — Full Image Style */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/worcester_cleaning_banner.png"
            alt="Commercial cleaning and biotech facility in Worcester MA"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003057]/60 via-[#0090c8]/40 to-[#001220]/60" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FFE800] font-bold tracking-widest uppercase text-sm mb-6 backdrop-blur-md">
              Serving Worcester & Central MA Businesses
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
              Get a Free Cleaning Quote
            </h2>
            <p className="text-lg text-white/90 font-medium leading-relaxed max-w-4xl mx-auto text-left drop-shadow-md">
              Enterprise Cleaning Corporation offers a free, no-obligation on-site walkthrough for every Worcester property. Call (508) 890-1000 or request a quote online to schedule yours and receive a written proposal built around your building, your schedule, and your budget.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: ShieldCheck, stat: "20+ Yrs", label: "Local Expertise", sub: "Serving Central MA" },
              { icon: Trophy, stat: "4×", label: "Best of Business", sub: "Worcester Business Journal" },
              { icon: Users, stat: "97%", label: "Client Retention Rate", sub: "Industry-leading" },
              { icon: MapPin, stat: "Worcester", label: "Headquartered Nearby", sub: "West Boylston, MA" },
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0090c8] mb-4">
                Frequently Asked Questions — Worcester, MA
              </h2>
              <p className="text-slate-600 font-medium">
                Common questions about our commercial cleaning services in Worcester.
              </p>
            </div>
            
            <div className="space-y-6">
              {structuredDataFAQ.mainEntity.map((faq, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-[#0090c8]/30 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                    <span className="text-[#0090c8] shrink-0 mt-0.5 text-xl">Q:</span>
                    {faq.name}
                  </h3>
                  <p className="text-slate-600 pl-8 leading-relaxed font-medium text-left">
                    <span className="font-bold text-slate-400 mr-2">A:</span>
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Keywords / Voice Search Section for SEO & Voice Query Context */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-start gap-2">
              <HelpCircle className="w-6 h-6 text-[#0090c8] shrink-0 mt-0.5" />
              Frequently Searched Worcester Commercial Cleaning Topics
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600 font-medium">
              {[
                "Who is the best commercial cleaning company in Worcester MA?",
                "How much does commercial office cleaning cost in Worcester?",
                "What does a commercial cleaning company do for offices?",
                "Who cleans medical offices in Worcester MA?",
                "Is there a janitorial service near downtown Worcester?",
                "How often should a Worcester office be professionally cleaned?",
                "Who does post construction cleanup in Worcester MA?",
                "What is included in a commercial cleaning contract?",
                "Who provides day porter services in Worcester?",
                "How do I get a free commercial cleaning quote in Worcester?"
              ].map((query, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0090c8] shrink-0" />
                  <span>{query}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        className="bg-white border-t border-slate-100"
        title="Ready to Upgrade Your Worcester Cleaning Service?"
        action={{
          text: "Get a Free Worcester Quote",
          href: "/contact",
          variant: "destructive",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed text-center">
            Schedule a free, no-obligation walkthrough of your Worcester property. Receive a written proposal tailored to your building, schedule, and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 animate-appear delay-100">
            {[
              { icon: ShieldCheck, text: "Fully Insured & Bonded" },
              { icon: Users, text: "97% Client Retention" },
              { icon: Trophy, text: "4× WBJ Best of Business" },
              { icon: Clock, text: "Headquartered Minutes Away" },
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
