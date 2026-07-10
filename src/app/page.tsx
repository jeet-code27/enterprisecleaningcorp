import {
  ContainerAnimated,
  ContainerInset,
  ContainerScroll,
  ContainerSticky,
  HeroButton,
  HeroVideo,
} from "@/components/blocks/animated-video-on-scroll";
import { HowItWorks } from "@/components/ui/how-it-works";
import { WhyChooseUs } from "@/components/ui/why-choose-us";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { ServicesSlideshow } from "@/components/blocks/services-slideshow";
import { EmergencyCTA } from "@/components/blocks/emergency-cta";
import { StatsBanner } from "@/components/ui/stats-banner";
import { GallerySection } from "@/components/blocks/gallery-section";
// import { ElfsightReviews } from "@/components/blocks/elfsight-reviews";
import { WhyEnterprise } from "@/components/blocks/why-enterprise";
import { ServiceAreas } from "@/components/blocks/service-areas";
import { GoogleMapSection } from "@/components/blocks/google-map";
import { FAQSection } from "@/components/blocks/faq-section";
import { TrustedByMarquee } from "@/components/ui/trusted-by-marquee";

export default function Home() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans">
      <main className="relative z-10 w-full bg-background border-b border-border shadow-xl rounded-b-[3rem] pb-12">
        <section className="relative" style={{ background: "#0090c8" }}>
          {/* Brand blue gradient — shades around #00B8FF */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, #0085ba 0%, #00B8FF 50%, #009ad8 100%)" }} />
          
          <ContainerScroll className="relative z-10 w-full pb-32">
            <ContainerSticky className="text-white relative flex flex-col items-center pt-6 md:pt-10">
              {/* Ambient glow orb — white on blue for soft depth */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] max-w-[800px] h-[400px] bg-white/10 blur-[120px] rounded-full pointer-events-none" />

              {/* Standard Flex-Col Layout: Text above, Video below */}
              <ContainerAnimated className="w-full px-4 space-y-6 text-center z-20 mt-4 md:mt-8">
                <div className="mx-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/40 backdrop-blur-sm mb-4">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-[#E31837] animate-pulse shadow-[0_0_10px_rgba(227,24,55,0.8)]"></span>
                  <span className="text-sm font-semibold text-white tracking-[0.2em] uppercase">24/7 Emergency Response</span>
                </div>
                
                <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl drop-shadow-2xl leading-[1.15] text-white">
                  Central Massachusetts’ Most Trusted<br />
                  <span style={{ color: "#FFE800" }} className="drop-shadow-[0_0_20px_rgba(255,232,0,0.5)]">Commercial Cleaning &</span><br />
                  <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">Janitorial Company</span>
                </h1>
                
                <p className="mx-auto max-w-[65ch] text-base md:text-lg text-white/90 font-medium leading-relaxed mb-8">
                  For 23+ years, facility and property managers across Central Massachusetts have trusted Enterprise to keep their buildings spotless, compliant, and worry-free — backed by a 97% client retention rate no competitor can match.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 md:mt-8">
                  <HeroButton>Get a Free On-Site Quote →</HeroButton>
                  <a href="tel:5088901000" className="inline-flex items-center justify-center rounded-full bg-white text-[#0090c8] font-extrabold px-8 py-3.5 sm:py-4 text-sm sm:text-base shadow-xl hover:bg-slate-50 transition-colors border-2 border-white">
                    Call (508) 890-1000
                  </a>
                </div>
                
                <p className="mt-6 text-sm text-white/80 font-medium tracking-wide">
                  Trusted by Hanover Insurance, Workers Credit Union, Shields Healthcare, Capital Group, Millbury Credit Union & 140+ Central MA businesses
                </p>
              </ContainerAnimated>

              {/* Video sits below the text naturally */}
              <ContainerInset className="w-full px-4 mt-16 md:mt-24">
                <HeroVideo
                  src="/videos/hero.mp4"
                  data-src="/videos/hero.mp4"
                />
              </ContainerInset>
              
            </ContainerSticky>
          </ContainerScroll>
        </section>

        <TrustedByMarquee />
        <StatsBanner />
        <ServicesSlideshow />
        <EmergencyCTA />
        <GallerySection />
        <HowItWorks />
        <WhyEnterprise />
        {/* <WhyChooseUs /> */}
        <StaggerTestimonials />
        {/* <ElfsightReviews /> */}
        <GoogleMapSection />
        <FAQSection />
        <ServiceAreas />
      </main>
    </div>
  );
}
