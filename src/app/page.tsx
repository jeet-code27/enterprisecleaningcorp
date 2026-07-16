import { Hero } from "@/components/blocks/hero";
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
        <Hero />

        <TrustedByMarquee />
        <StatsBanner />
        <ServicesSlideshow />
        <GallerySection />
        <EmergencyCTA />
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
