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
import { StatsBanner } from "@/components/ui/stats-banner";
import { GallerySection } from "@/components/blocks/gallery-section";

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
                
                <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl drop-shadow-2xl leading-tight text-white">
                  There's clean, and then there's<br />
                  <span style={{ color: "#FFE800" }} className="drop-shadow-[0_0_20px_rgba(255,232,0,0.5)]">ENTERPRISE</span>{" "}
                  <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">clean.</span>
                </h1>
                
                <p className="mx-auto max-w-[65ch] text-base md:text-lg text-white/80 font-light leading-relaxed mb-8">
                  Specializing in Commercial and Residential Emergency Cleaning.
                  Other services include: Post Construction Cleaning, Floor Work, Fire Damage, Mold Remediation, Disaster Clean-up, Crime Scene Clean-up, Storm Damage!
                </p>
                
                <HeroButton className="mt-4 md:mt-8">Request Immediate Dispatch</HeroButton>
              </ContainerAnimated>

              {/* Video sits below the text naturally */}
              <ContainerInset className="w-full px-4 mt-16 md:mt-24">
                <HeroVideo
                  src="https://videos.pexels.com/video-files/8566672/8566672-uhd_2560_1440_30fps.mp4"
                  data-src="https://videos.pexels.com/video-files/8566672/8566672-uhd_2560_1440_30fps.mp4"
                />
              </ContainerInset>
              
            </ContainerSticky>
          </ContainerScroll>
        </section>

        <StatsBanner />
        <ServicesSlideshow />
        <GallerySection />
        <HowItWorks />
        <WhyChooseUs />
        <StaggerTestimonials />
      </main>
    </div>
  );
}
