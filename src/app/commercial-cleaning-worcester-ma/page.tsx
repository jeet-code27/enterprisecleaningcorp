import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  PhoneCall, ShieldCheck, Clock, Building2, 
  MapPin, Trophy, Users,
  ArrowRight, CheckCircle2,
  CalendarCheck,
  Briefcase,
  Sparkles,
  Factory,
  Stethoscope,
  GraduationCap,
  Truck,
  Award
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

      {/* DISTINCT CITY PAGE HERO HEADER (Signature Dark Slate & Cyan Theme) */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#001e38] text-white overflow-hidden border-b-4 border-[#00B8FF]">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00B8FF]/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E31837]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="flex-1 space-y-8 max-w-2xl text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#00B8FF]/10 border border-[#00B8FF]/30 text-xs font-extrabold tracking-widest text-[#00B8FF] uppercase">
                <MapPin className="w-4 h-4 text-[#FFE800]" />
                WORCESTER, MA CITY HUB • CENTRAL MA ANCHOR
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white drop-shadow-md">
                Commercial Cleaning Services<br/>
                <span className="text-[#00B8FF]">in Worcester, MA</span>
              </h1>
              
              <div className="text-base md:text-lg text-slate-200 font-medium leading-relaxed space-y-4">
                <p>
                  Worcester is the commercial and institutional anchor of Central Massachusetts and the second-largest city in New England, with a downtown that has been rebuilding around Polar Park, CitySquare, and a growing biotech and medical corridor built on UMass Chan Medical School, UMass Memorial Health, and Saint Vincent Hospital. Add Worcester Polytechnic Institute, Clark University, and a dense ring of manufacturing and industrial parks along I-290 and I-190, and the result is a city with an unusually wide range of commercial cleaning needs in one ZIP code radius — hospital administrative wings, biotech office suites, downtown Class A towers, and industrial floor space, often within a few miles of each other.
                </p>
                <p>
                  Enterprise Cleaning Corporation is headquartered a few miles north of Worcester in West Boylston, which means Worcester is not a satellite market for us — it is the market we know best. We have served office buildings, medical facilities, and industrial accounts throughout Worcester and Worcester County for more than two decades, and our crews are on Worcester properties every night of the week.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#00B8FF] text-slate-950 font-black px-8 py-4 rounded-xl hover:bg-[#FFE800] transition-colors shadow-lg shadow-[#00B8FF]/30 text-lg">
                  Get a Free Worcester Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:5088901000" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-lg backdrop-blur-md">
                  <PhoneCall className="w-5 h-5 text-[#FFE800]" />
                  (508) 890-1000
                </a>
              </div>
            </div>

            {/* Right Featured Image Frame */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00B8FF] to-[#E31837] rounded-[3rem] rotate-2 opacity-30 scale-105 blur-lg" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/5] lg:aspect-square">
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
              <div className="absolute -left-6 bottom-10 bg-slate-900/90 text-white rounded-2xl p-5 shadow-2xl border border-white/20 flex items-center gap-4 backdrop-blur-xl animate-float">
                <div className="w-12 h-12 rounded-full bg-[#E31837] flex items-center justify-center shrink-0 shadow-lg">
                  <Trophy className="w-6 h-6 text-[#FFE800]" />
                </div>
                <div>
                  <div className="text-white font-extrabold text-base">4× Best of Business</div>
                  <div className="text-slate-300 text-xs font-medium">Worcester Business Journal Winner</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* CITY KEY HIGHLIGHTS BAR */}
      <section className="bg-[#002f54] text-white border-b border-white/10 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl lg:text-4xl font-black text-[#FFE800] mb-1">20+ Years</div>
              <div className="text-xs uppercase tracking-wider font-bold text-slate-300">Local Experience</div>
            </div>
            <div className="p-4 border-l border-white/10">
              <div className="text-3xl lg:text-4xl font-black text-[#00B8FF] mb-1">97%</div>
              <div className="text-xs uppercase tracking-wider font-bold text-slate-300">Client Retention</div>
            </div>
            <div className="p-4 border-l border-white/10">
              <div className="text-3xl lg:text-4xl font-black text-[#FFE800] mb-1">4× Winner</div>
              <div className="text-xs uppercase tracking-wider font-bold text-slate-300">WBJ Best of Business</div>
            </div>
            <div className="p-4 border-l border-white/10">
              <div className="text-3xl lg:text-4xl font-black text-white mb-1">Minutes Away</div>
              <div className="text-xs uppercase tracking-wider font-bold text-slate-300">HQ in West Boylston</div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION: Worcester's Business Community & Neighborhoods */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-16">
            
            <div className="text-left space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                Commercial Cleaning Built for <span className="text-[#0090c8]">Worcester's Business Community</span>
              </h2>
              <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed space-y-6">
                <p>
                  Facility and property managers in Worcester are typically balancing several buildings, several vendors, and a limited amount of time to manage any of it closely. What they need from a cleaning company is not a sales pitch — it's a crew that shows up on schedule, a point of contact who answers the phone, and a level of consistency that means they stop thinking about cleaning altogether. That consistency is reflected in our 97% client retention rate: once a Worcester account signs with us, they tend to stay.
                </p>
                <p>
                  Because Worcester is where our own crews spend the most time, we've built scheduling experience across nearly every type of building the city has to offer — a downtown financial office that needs quiet, after-hours service; a hospital administrative wing that needs discretion around active clinical space; and an industrial building on Route 20 that needs a crew comfortable working around forklifts and shift changes. That range of experience is part of why Worcester clients rarely feel the need to shop around once they've signed with us.
                </p>
              </div>
            </div>

            {/* Neighborhoods & Business Districts Feature Cards */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
              <div className="max-w-3xl mb-8 text-left">
                <span className="text-[#0090c8] font-extrabold uppercase tracking-widest text-xs mb-2 block">LOCAL COVERAGE</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
                  <Building2 className="w-8 h-8 text-[#0090c8]" />
                  Neighborhoods & Business Districts We Serve in Worcester
                </h3>
                <p className="text-slate-600 font-medium mt-2">
                  Enterprise Cleaning Corporation serves commercial properties throughout Worcester, including:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: "Downtown Worcester & CitySquare", desc: "Class A office towers, financial and legal offices, and street-level retail" },
                  { name: "Worcester's Medical Corridor", desc: "UMass Chan Medical School and UMass Memorial Health administrative and clinical office space" },
                  { name: "Green Island & Route 20 Industrial Area", desc: "Manufacturing, warehousing, and light-industrial tenants" },
                  { name: "Route 9 Corridor", desc: "Retail centers, professional offices, and medical suites" },
                  { name: "Worcester Regional Airport Business Park", desc: "Corporate and logistics tenants" }
                ].map((dist, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:border-[#0090c8]/40 transition-colors flex items-start gap-4 text-left">
                    <div className="w-10 h-10 rounded-xl bg-[#0090c8]/10 flex items-center justify-center shrink-0 mt-1">
                      <MapPin className="w-5 h-5 text-[#0090c8]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">{dist.name}</h4>
                      <p className="text-slate-600 text-sm font-medium mt-1 leading-relaxed">{dist.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY LOCAL BUSINESSES CHOOSE ENTERPRISE CLEANING CORP */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-16">
            
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[#0090c8] font-extrabold uppercase tracking-widest text-xs mb-3 block">THE LOCAL ADVANTAGE</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Why Local Businesses Choose Enterprise Cleaning Corporation
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed text-left md:text-center">
                Because our headquarters sits just north of the city, Worcester accounts get faster response times, a crew that already knows the building stock in the area — from downtown high-rises to Route 20 and Route 9 industrial parks — and direct access to ownership rather than a call center.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "20+ Years Local", text: "More than two decades serving Central Massachusetts, Rhode Island, and Southern New Hampshire", icon: Clock },
                { title: "97% Client Retention", text: "Reflecting unmatched consistency and long-term client trust", icon: Users },
                { title: "4× WBJ Award Winner", text: "4x Worcester Business Journal 'Best of Business' award winner", icon: Trophy },
                { title: "BBB Accredited", text: "BBB accredited since 2007 with a proven track record", icon: Award },
                { title: "Owner-Accessible Service", text: "You get direct access to leadership, not a franchise ticket number", icon: ShieldCheck }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80 hover:border-[#0090c8]/40 transition-colors text-left flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#0090c8]/10 flex items-center justify-center mb-6">
                      <item.icon className="w-6 h-6 text-[#0090c8]" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CORE CLEANING SERVICES IN WORCESTER */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[#0090c8] font-extrabold uppercase tracking-widest text-xs mb-3 block">OUR SERVICES</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Core Cleaning Services in Worcester, MA
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Enterprise Cleaning Corporation provides a full range of commercial cleaning services to Worcester businesses, scaled to fit everything from a single office suite to a multi-building portfolio:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 hover:border-[#0090c8]/40 transition-all hover:shadow-lg text-left group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-[#0090c8]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE IN WORCESTER */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[#0090c8] font-extrabold uppercase tracking-widest text-xs mb-3 block">SECTORS SERVED</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Industries We Serve in Worcester
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Our Worcester accounts span a range of industries, each with its own cleaning standards and scheduling requirements:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 text-left">
                  <div className="w-12 h-12 rounded-xl bg-[#0090c8]/10 flex items-center justify-center mb-4">
                    <ind.icon className="w-6 h-6 text-[#0090c8]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{ind.name}</h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* HOW WE BUILD YOUR CLEANING PLAN */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-left space-y-6">
              <span className="text-[#0090c8] font-extrabold uppercase tracking-widest text-xs block">OUR PROCESS</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                How We Build Your Cleaning Plan
              </h2>
              <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed space-y-6">
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
        </div>
      </section>

      {/* SERVING WORCESTER AND SURROUNDING AREA */}
      <section className="py-20 bg-[#002f54] text-white border-y border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-6 text-left">
            <span className="text-[#00B8FF] font-extrabold uppercase tracking-widest text-xs block">REGIONAL REGION</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Serving Worcester and the Surrounding Area
            </h2>
            <div className="prose prose-lg text-slate-200 prose-p:leading-relaxed space-y-6">
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

      {/* CITY TRUST BANNER */}
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

      {/* FREQUENTLY ASKED QUESTIONS SECTION (Clean Interactive Cards) */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#0090c8] font-extrabold uppercase tracking-widest text-xs mb-3 block">HELP & FAQ</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Frequently Asked Questions — Worcester, MA
              </h2>
              <p className="text-slate-600 font-medium">
                Common questions about our commercial cleaning services in Worcester.
              </p>
            </div>
            
            <div className="space-y-6">
              {structuredDataFAQ.mainEntity.map((faq, index) => (
                <div key={index} className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:border-[#0090c8]/40 transition-colors text-left">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                    <span className="text-[#0090c8] shrink-0 font-extrabold text-xl">Q:</span>
                    {faq.name}
                  </h3>
                  <p className="text-slate-600 pl-8 leading-relaxed font-medium">
                    <span className="font-bold text-slate-400 mr-2">A:</span>
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
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
