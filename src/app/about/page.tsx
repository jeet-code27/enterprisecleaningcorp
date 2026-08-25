import { Metadata } from "next";
import Link from "next/link";
import { LayoutGroup } from "framer-motion";
import * as motion from "motion/react-client";
import { TextRotate } from "@/components/ui/text-rotate";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { ShieldCheck, Trophy, Users, Clock, ArrowRight, Sparkles, HeartHandshake, Award, CheckCircle2, PartyPopper } from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";
import { AwardsSection } from "@/components/blocks/awards-section";

export const metadata: Metadata = {
  title: { absolute: "About Enterprise Cleaning │ 23+ Years Serving Central MA" },
  description: "Meet the team behind Enterprise Cleaning Corporation — 23+ years serving Central MA, RI & Southern NH. 4x WBJ award winner, BBB accredited, 97% retention.",
  keywords: "About Enterprise Cleaning Corporation, commercial cleaning Central MA, Stephen Buchalter, commercial cleaning team, BBB accredited cleaning company, 23 years experience, Worcester Business Journal award",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/about",
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

const aboutImages = [
  {
    url: "/images/office_cleaning_hero.png",
    title: "Spotless Corporate Office",
  },
  {
    url: "/images/1.jpeg",
    title: "Enterprise Cleaning Fleet",
  },
  {
    url: "/images/service_porter.png",
    title: "Detailed Sanitization",
  },
  {
    url: "/images/4.jpeg",
    title: "Clean Facility Hallway",
  },
  {
    url: "/images/service_commercial.png",
    title: "Healthy Work Environment",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Interactive Hero Section */}
      <section className="w-full min-h-[620px] md:h-[90vh] md:min-h-[660px] max-h-[880px] overflow-hidden flex flex-col items-center justify-center relative bg-slate-50 pt-20 pb-12 md:py-0">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,144,200,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,144,200,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

        <Floating sensitivity={-0.35} className="h-full z-0 pointer-events-none overflow-hidden">
          {/* Top-Left Floating Image */}
          <FloatingElement
            depth={0.5}
            className="top-[4%] left-[2%] sm:top-[8%] sm:left-[3%] md:top-[12%] md:left-[2%] lg:left-[4%] xl:left-[6%]"
          >
            <motion.img
              src={aboutImages[0].url}
              alt={aboutImages[0].title}
              className="w-20 h-14 sm:w-28 sm:h-20 md:w-36 md:h-26 lg:w-44 lg:h-32 xl:w-56 xl:h-40 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-xl rounded-xl md:rounded-2xl border-2 md:border-4 border-white opacity-40 md:opacity-90 xl:opacity-100 pointer-events-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </FloatingElement>

          {/* Bottom-Left Floating Image */}
          <FloatingElement
            depth={3}
            className="hidden md:block md:top-[60%] md:left-[2%] lg:left-[3%] xl:left-[5%]"
          >
            <motion.img
              src={aboutImages[2].url}
              alt={aboutImages[2].title}
              className="md:w-36 md:h-36 lg:w-48 lg:h-48 xl:w-60 xl:h-60 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-xl rounded-2xl border-4 border-white opacity-90 xl:opacity-100 pointer-events-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            />
          </FloatingElement>

          {/* Top-Right Floating Image */}
          <FloatingElement
            depth={2}
            className="top-[4%] right-[2%] sm:top-[8%] sm:right-[3%] md:top-[10%] md:right-[2%] lg:right-[4%] xl:right-[6%]"
          >
            <motion.img
              src={aboutImages[3].url}
              alt={aboutImages[3].title}
              className="w-20 h-16 sm:w-28 sm:h-22 md:w-36 md:h-30 lg:w-48 lg:h-38 xl:w-60 xl:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-xl rotate-[6deg] rounded-xl md:rounded-2xl border-2 md:border-4 border-white opacity-40 md:opacity-90 xl:opacity-100 pointer-events-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            />
          </FloatingElement>

          {/* Bottom-Right Floating Image */}
          <FloatingElement
            depth={1}
            className="hidden md:block md:top-[58%] md:right-[2%] lg:right-[3%] xl:right-[5%]"
          >
            <motion.img
              src={aboutImages[4].url}
              alt={aboutImages[4].title}
              className="md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-68 xl:h-68 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-xl rotate-[12deg] rounded-2xl border-4 border-white opacity-90 xl:opacity-100 pointer-events-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            />
          </FloatingElement>
        </Floating>

        <div className="flex flex-col justify-center items-center w-[92%] sm:w-[85%] md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 pointer-events-auto bg-white/80 md:bg-white/40 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-6 sm:p-8 md:p-6 rounded-3xl lg:rounded-none shadow-xl lg:shadow-none border border-white/80 lg:border-none">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center w-full justify-center items-center flex-col flex whitespace-normal md:whitespace-pre leading-[1.1] font-extrabold tracking-tight space-y-2 md:space-y-4 text-slate-900"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
          >
            <span>Make your facility</span>
            <LayoutGroup>
              <motion.span layout className="flex flex-wrap justify-center items-center mt-2">
                <TextRotate
                  texts={[
                    "spotless ✨",
                    "pristine 💎",
                    "professional 🏢",
                    "safe 🛡️",
                    "welcoming 🤝",
                    "impeccable 🌟",
                    "healthy 🌱"
                  ]}
                  mainClassName="overflow-hidden pr-3 text-[#0090c8] py-0 pb-2 md:pb-4"
                  staggerDuration={0.03}
                  staggerFrom="last"
                  rotationInterval={3000}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                />
              </motion.span>
            </LayoutGroup>
          </motion.h1>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl text-center text-slate-600 font-medium pt-6 sm:pt-8 md:pt-10 max-w-2xl leading-relaxed"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
          >
            For over 23+ years, we've set the standard for commercial cleaning in Central Massachusetts, delivering uncompromising quality and reliability to businesses that demand the best.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 items-center mt-8 sm:mt-12 w-full sm:w-auto">
            <motion.button
              className="w-full sm:w-auto text-base md:text-lg font-extrabold tracking-tight text-slate-900 bg-[#FFE800] px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-yellow-300 transition-colors"
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
                delay: 0.7,
                scale: { duration: 0.2 },
              }}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", damping: 30, stiffness: 400 },
              }}
            >
              <Link href="/#services">
                Explore Services
              </Link>
            </motion.button>
            <motion.button
              className="w-full sm:w-auto text-base md:text-lg font-bold tracking-tight text-white bg-[#0090c8] px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-[#00B8FF] transition-colors"
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
                delay: 0.7,
                scale: { duration: 0.2 },
              }}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", damping: 30, stiffness: 400 },
              }}
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get a Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-start">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0090c8]/10 border border-[#0090c8]/20">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#0090c8] animate-pulse"></span>
                <span className="text-sm font-bold text-[#0090c8] tracking-[0.1em] uppercase">History of Enterprise Cleaning</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                More than 23+ years of <span className="text-[#0090c8]">cleaning experience</span>
              </h2>
              <div className="space-y-6 text-slate-600 font-medium leading-relaxed text-left">
                <p>
                  Locally owned, Enterprise Cleaning Corporation has over 23+ years of experience to tackle any commercial cleaning need you have. Every employee is trained specifically for the job they'll perform.
                </p>

                <p>
                  There are always nuances that need to be taken into account for different spaces. For example, those assigned to clean a manufacturing site will be educated in the appropriate methods and products for that facility that may differ from those needed to clean offices or residences. We take into account details such as traffic flow, building occupancy, and work schedules when designing a cleaning program that minimizes disruption and meets your operational needs. Once cleaners are on the job, they receive periodic evaluations to make sure their work meets the high standards set by us and that you expect. We manage our cleaners so that you won't have to.
                </p>
                <p>
                  Cleaners are often in a facility after the office staff has gone home. Part of our hiring process involves background checks and references. We are usually the only service that will visit every square foot of your facility on a nightly basis. If any of our cleaning technicians notice something unusual, it is reported to our management. Our entire staff wears uniforms and badges that make it easy for your staff to identify they are ours.
                </p>
                <p className="font-bold text-slate-900">
                  We are proud members of the BBB. Contact us today for a FREE estimate and get the cleaning service you require.
                </p>
              </div>
            </div>
            <div className="relative sticky top-32">
              <div className="absolute inset-0 bg-[#0090c8] rounded-[2rem] transform translate-x-4 translate-y-4 opacity-10"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-slate-100">
                <img 
                  src="/images/steve-head-shot.jpeg" 
                  alt="Stephen Buchalter - Founder of Enterprise Cleaning"
                  className="w-full h-auto object-cover aspect-square md:aspect-auto"
                />
                <div className="w-full p-8 bg-white">
                  <h3 className="font-extrabold text-slate-900 text-2xl mb-2">Stephen Buchalter</h3>
                  <p className="font-medium text-slate-600 text-sm leading-relaxed">
                    Stephen founded Enterprise Cleaning Corporation over 23+ years ago. From starting with just one employee, he has grown the company to over 150 team members, becoming one of the well respected companies in Massachusetts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Culture Section */}
      <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0090c8]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFE800]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0090c8]/20 border border-[#0090c8]/40 mb-5">
              <Sparkles className="w-4 h-4 text-[#FFE800]" />
              <span className="text-xs font-extrabold text-[#00B8FF] tracking-[0.15em] uppercase">Our Team & Culture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              The Dedicated People Behind <span className="text-[#00B8FF]">Every Clean</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              Behind every sanitized office, spotless warehouse, and gleaming floor is our 150+ member family. We believe that exceptional service begins with how we value, support, and celebrate the real people who make it happen every single day.
            </p>
          </div>

          {/* Team Photo Showcase Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/15 rounded-3xl p-4 sm:p-8 md:p-10 shadow-2xl mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
              <img
                src="/images/team-bi-annual-party.jpeg"
                alt="Enterprise Cleaning Corporation Bi-Annual Team Party & Celebration"
                className="w-full h-auto object-cover max-h-[580px] w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/20 pointer-events-none" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE800] text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
                    <PartyPopper className="w-3.5 h-3.5" /> Bi-Annual Team Celebration
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                    United by Excellence, Powered by Family Culture
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium max-w-2xl hidden sm:block">
                    Bringing our entire regional staff together to celebrate milestones, recognize top-performing technicians, and strengthen our team bond.
                  </p>
                </div>
                <div className="bg-slate-900/90 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-2xl text-center shrink-0">
                  <div className="text-2xl font-black text-[#00B8FF]">150+</div>
                  <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Team Members</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Core Pillars of Our People */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0090c8]/20 text-[#0090c8] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Trained & Screened</h4>
                <p className="text-sm text-slate-300 font-medium leading-relaxed">
                  Every technician undergoes background checks and specialized training tailored to specific facility requirements.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FFE800]/20 text-[#FFE800] flex items-center justify-center shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Valued & Rewarded</h4>
                <p className="text-sm text-slate-300 font-medium leading-relaxed">
                  Regular company parties, competitive pay, and performance bonuses ensure industry-leading team retention and dedication.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00B8FF]/20 text-[#00B8FF] flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Local & Accessible</h4>
                <p className="text-sm text-slate-300 font-medium leading-relaxed">
                  Active field supervisors and regional managers are on-site daily, ensuring accountability and direct communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Satisfaction <span className="text-[#FFE800] bg-slate-900 px-4 py-1 rounded-lg inline-block rotate-2">Guaranteed!</span>
            </h2>
            <div className="relative">
              <span className="absolute -top-8 -left-2 md:-top-10 md:-left-10 text-6xl md:text-8xl text-[#0090c8]/20 font-serif">"</span>
              <p className="text-lg md:text-xl lg:text-2xl text-slate-700 font-medium leading-relaxed italic relative z-10 px-4 md:px-0">
                I have been the Facilities Manager at Millbury Federal Credit Union for nearly a decade. I take care of the main office in Millbury plus 4 branches... anytime I can get some help is greatly appreciated. One of the first things I learned at MCU was that you're only as good as your vendors. I had gone through a few cleaning companies before Steve Buchalter of Enterprise Cleaning Corporation showed up at my office one day... The aspect of his business that caught my attention was the regional managers that would visit the branches on a regular basis, get to know our employees, and assure that the cleaners were doing everything that was expected of them. This was the personal touch the other companies weren't giving... I am very pleased with Enterprise operation from top to bottom.
              </p>
              <span className="absolute -bottom-8 -right-2 md:-bottom-10 md:-right-10 text-6xl md:text-8xl text-[#0090c8]/20 font-serif rotate-180">"</span>
            </div>
            <div className="pt-8">
              <p className="font-extrabold text-slate-900 text-lg">Wayne Cormier</p>
              <p className="text-[#0090c8] font-bold">Facilities Manager, Millbury Federal Credit Union</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Stats & Awards Unified Showcase Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-900 via-[#091526] to-slate-950 text-white relative overflow-hidden">
        {/* Harmonious Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0090c8]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-[#FFE800]/08 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-[#00B8FF]/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          
          {/* Part 1: The Enterprise Difference Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FFE800]" />
              <span className="text-xs font-extrabold text-[#00B8FF] tracking-[0.15em] uppercase">Core Strengths</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">The Enterprise Difference</h2>
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              We believe that how you do anything is how you do everything. These core pillars guide every account we service and every floor we shine.
            </p>
          </div>

          {/* Part 1: Stat Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16 md:mb-20">
            <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl text-center hover:bg-white/[0.08] hover:border-[#00B8FF]/40 transition-all duration-300 shadow-xl group">
              <Users className="w-10 h-10 text-[#FFE800] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-black mb-2 text-white">97%</div>
              <h3 className="text-base font-bold mb-2 text-[#00B8FF]">Client Retention</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">Our clients stay with us because we deliver consistent results year after year.</p>
            </div>
            
            <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl text-center hover:bg-white/[0.08] hover:border-[#00B8FF]/40 transition-all duration-300 shadow-xl group">
              <Trophy className="w-10 h-10 text-[#FFE800] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-black mb-2 text-white">4×</div>
              <h3 className="text-base font-bold mb-2 text-[#00B8FF]">Best of Business</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">Consistently recognized by the Worcester Business Journal as top in our field.</p>
            </div>

            <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl text-center hover:bg-white/[0.08] hover:border-[#00B8FF]/40 transition-all duration-300 shadow-xl group">
              <ShieldCheck className="w-10 h-10 text-[#FFE800] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-black mb-2 text-white">100%</div>
              <h3 className="text-base font-bold mb-2 text-[#00B8FF]">Fully Insured</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">Complete liability coverage and workers' comp for total peace of mind.</p>
            </div>

            <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl text-center hover:bg-white/[0.08] hover:border-[#00B8FF]/40 transition-all duration-300 shadow-xl group">
              <Clock className="w-10 h-10 text-[#FFE800] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-black mb-2 text-white">24/7</div>
              <h3 className="text-base font-bold mb-2 text-[#00B8FF]">Availability</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">Always on call for emergencies, floods, or urgent cleaning requests.</p>
            </div>
          </div>

          {/* Seamless Glowing Divider */}
          <div className="relative flex items-center justify-center my-12 md:my-16 max-w-4xl mx-auto">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00B8FF]/30 to-transparent" />
            <div className="absolute px-5 py-1.5 rounded-full bg-[#091526] border border-white/15 text-[11px] font-extrabold uppercase tracking-widest text-[#00B8FF] flex items-center gap-2 shadow-xl backdrop-blur-md">
              <Trophy className="w-3.5 h-3.5 text-[#FFE800]" />
              <span>Proven Industry Recognition</span>
            </div>
          </div>

          {/* Part 2: WBJ Awards & Accolades (Seamlessly Blended) */}
          <AwardsSection embedded={true} />

        </div>
      </section>

      <CTASection
        className="bg-white"
        title="Experience the Enterprise Standard"
        action={{
          text: "Get Your Free Quote Today",
          href: "/contact",
          variant: "destructive",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed">
            Stop settling for average cleaning. Partner with Central Massachusetts' most reliable commercial cleaning company and see the difference for yourself.
          </p>
        </div>
      </CTASection>
    </>
  );
}
