import { Metadata } from "next";
import Link from "next/link";
import { LayoutGroup } from "framer-motion";
import * as motion from "motion/react-client";
import { TextRotate } from "@/components/ui/text-rotate";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { ShieldCheck, Trophy, Users, Clock, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/blocks/cta-with-glow";

export const metadata: Metadata = {
  title: "About Us | Enterprise Cleaning Corporation",
  description: "Learn about Enterprise Cleaning Corporation, the most trusted commercial cleaning company in Central Massachusetts since 2002.",
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
      <section className="w-full h-[90vh] min-h-[600px] overflow-hidden md:overflow-visible flex flex-col items-center justify-center relative bg-slate-50 pt-16">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,144,200,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,144,200,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

        <Floating sensitivity={-0.5} className="h-full z-0">
          <FloatingElement
            depth={0.5}
            className="top-[5%] left-[2%] md:top-[25%] md:left-[5%]"
          >
            <motion.img
              src={aboutImages[0].url}
              alt={aboutImages[0].title}
              className="w-16 h-12 sm:w-24 sm:h-16 md:w-32 md:h-24 lg:w-40 lg:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl md:rounded-2xl border-2 md:border-4 border-white opacity-60 md:opacity-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </FloatingElement>

          <FloatingElement
            depth={1}
            className="top-[10%] left-[60%] md:top-[10%] md:left-[15%]"
          >
            <motion.img
              src={aboutImages[1].url}
              alt={aboutImages[1].title}
              className="w-20 h-20 sm:w-48 sm:h-36 md:w-64 md:h-48 lg:w-72 lg:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rotate-12 md:-rotate-12 shadow-2xl rounded-xl md:rounded-2xl border-2 md:border-4 border-white opacity-60 md:opacity-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            />
          </FloatingElement>

          <FloatingElement
            depth={4}
            className="hidden md:block top-[60%] left-[4%] md:top-[60%] md:left-[8%]"
          >
            <motion.img
              src={aboutImages[2].url}
              alt={aboutImages[2].title}
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-2xl border-4 border-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            />
          </FloatingElement>

          <FloatingElement
            depth={2}
            className="top-[70%] left-[5%] md:top-[8%] md:left-[75%]"
          >
            <motion.img
              src={aboutImages[3].url}
              alt={aboutImages[3].title}
              className="w-24 h-24 sm:w-48 sm:h-44 md:w-64 md:h-52 lg:w-72 lg:h-60 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl -rotate-[12deg] md:rotate-[6deg] rounded-xl md:rounded-2xl border-2 md:border-4 border-white opacity-60 md:opacity-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            />
          </FloatingElement>

          <FloatingElement
            depth={1}
            className="hidden md:block top-[55%] left-[75%] md:top-[55%] md:left-[78%]"
          >
            <motion.img
              src={aboutImages[4].url}
              alt={aboutImages[4].title}
              className="w-44 h-44 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[15deg] rounded-2xl border-4 border-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            />
          </FloatingElement>
        </Floating>

        <div className="flex flex-col justify-center items-center w-[90%] sm:w-[80%] md:w-[700px] lg:w-[900px] relative z-10 pointer-events-auto bg-white/70 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none p-8 md:p-0 md:pt-8 rounded-[2rem] md:rounded-none shadow-[0_20px_60px_rgba(0,144,200,0.1)] md:shadow-none border border-white md:border-none">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-[1.1] font-extrabold tracking-tight space-y-2 md:space-y-4 text-slate-900"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
          >
            <span>Make your facility</span>
            <LayoutGroup>
              <motion.span layout className="flex whitespace-pre mt-2">
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
            For over 22 years, we've set the standard for commercial cleaning in Central Massachusetts, delivering uncompromising quality and reliability to businesses that demand the best.
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
              <Link href="/services">
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
      <section className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0090c8]/10 border border-[#0090c8]/20">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#0090c8] animate-pulse"></span>
                <span className="text-sm font-bold text-[#0090c8] tracking-[0.1em] uppercase">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Built on Trust, <span className="text-[#0090c8]">Driven by Excellence</span>
              </h2>
              <div className="prose prose-lg text-slate-600 font-medium leading-relaxed text-justify">
                <p>
                  Enterprise Cleaning Corporation was founded in 2002 with a simple but powerful mission: to provide a level of cleaning and facility maintenance that property managers and business owners could completely trust. We saw an industry plagued by high turnover, poor communication, and inconsistent results, and we decided to build a company that did the exact opposite.
                </p>
                <p>
                  Today, we are proud to be Central Massachusetts' premier commercial cleaning provider. We didn't get here by cutting corners. We got here by investing in our people, utilizing the latest in cleaning technology, and maintaining an uncompromising standard of quality control. When you hire Enterprise, you aren't just getting a cleaning crew—you're getting a dedicated facility partner.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#0090c8] rounded-[2rem] transform translate-x-4 translate-y-4 opacity-10"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="/images/6.jpeg" 
                  alt="Enterprise Cleaning Team meeting"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-extrabold text-3xl">22+ Years</p>
                  <p className="font-medium text-white/90">of service excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Stats */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0090c8]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFE800]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">The Enterprise Difference</h2>
            <p className="text-lg text-white/80 font-medium leading-relaxed">
              We believe that how you do anything is how you do everything. These core pillars guide every account we service and every floor we shine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center hover:bg-white/10 transition-colors">
              <Users className="w-12 h-12 text-[#FFE800] mx-auto mb-6" />
              <div className="text-4xl font-black mb-2">97%</div>
              <h3 className="text-lg font-bold mb-3 text-white">Client Retention</h3>
              <p className="text-sm text-white/70 font-medium leading-relaxed">Our clients stay with us because we deliver consistent results year after year.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center hover:bg-white/10 transition-colors">
              <Trophy className="w-12 h-12 text-[#FFE800] mx-auto mb-6" />
              <div className="text-4xl font-black mb-2">4×</div>
              <h3 className="text-lg font-bold mb-3 text-white">Best of Business</h3>
              <p className="text-sm text-white/70 font-medium leading-relaxed">Consistently recognized by the Worcester Business Journal as top in our field.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center hover:bg-white/10 transition-colors">
              <ShieldCheck className="w-12 h-12 text-[#FFE800] mx-auto mb-6" />
              <div className="text-4xl font-black mb-2">100%</div>
              <h3 className="text-lg font-bold mb-3 text-white">Fully Insured</h3>
              <p className="text-sm text-white/70 font-medium leading-relaxed">Complete liability coverage and workers' comp for total peace of mind.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center hover:bg-white/10 transition-colors">
              <Clock className="w-12 h-12 text-[#FFE800] mx-auto mb-6" />
              <div className="text-4xl font-black mb-2">24/7</div>
              <h3 className="text-lg font-bold mb-3 text-white">Availability</h3>
              <p className="text-sm text-white/70 font-medium leading-relaxed">Always on call for emergencies, floods, or urgent cleaning requests.</p>
            </div>
          </div>
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
