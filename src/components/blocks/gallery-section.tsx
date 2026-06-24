import React from 'react';
import { ImageSwiper } from "@/components/ui/image-swiper";

export function GallerySection() {
  const imageUrls = "/images/1.jpeg,/images/2.jpeg,/images/3.jpeg,/images/4.jpeg,/images/5.jpeg,/images/6.jpeg,/images/7.jpeg,/images/8.jpeg,/images/9.jpeg";

  return (
    <section className="py-24 px-6 md:px-12 w-full overflow-hidden relative" style={{ background: "#00B8FF" }}>
      {/* Subtle decorative accents */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-white/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-white/10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center gap-16">
        {/* Text Content - Centered on Top */}
        <div className="space-y-6 max-w-3xl">
          <h5 className="text-sm uppercase tracking-widest font-bold text-[#FFE800]">Our Commercial Fleet</h5>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
             Equipped & <span className="text-[#FFE800]">Ready to Deploy</span>
          </h2>
          <p className="text-lg text-white/90 leading-relaxed mx-auto">
             Our fully equipped commercial vans are on the move daily across New England. From standard janitorial contracts to rapid-response emergency flood cleanups, our professional teams arrive with state-of-the-art equipment to get the job done right.
          </p>
          <div className="pt-4 flex items-center justify-center gap-4 text-white/80 text-sm font-medium">
             <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                Swipe to view fleet
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
             </span>
          </div>
        </div>

        {/* Large Swiper Gallery - Centered Below */}
        <div className="w-full flex justify-center items-center">
          <div className="relative scale-75 sm:scale-100">
             <ImageSwiper 
                images={imageUrls} 
                cardWidth={640} 
                cardHeight={480} 
             />
          </div>
        </div>
      </div>
    </section>
  );
}
