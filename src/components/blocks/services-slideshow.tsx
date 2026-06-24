import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow"

const SLIDES = [
  {
    id: "slide-1",
    title: "Commercial & Night Cleaning",
    imageUrl: "/images/service_commercial.png",
  },
  {
    id: "slide-2",
    title: "Post Construction",
    imageUrl: "/images/service_post_construction.png",
  },
  {
    id: "slide-3",
    title: "Commercial Turnover Cleaning",
    imageUrl: "/images/service_turnover.png",
  },
  {
    id: "slide-4",
    title: "Mold Cleanup & Removal",
    imageUrl: "/images/service_mold.png",
  },
  {
    id: "slide-5",
    title: "Porter Services & Day Cleaning",
    imageUrl: "/images/service_porter.png",
  },
]

export function ServicesSlideshow() {
  return (
    <HoverSlider className="place-content-center py-20 px-6 md:px-12 bg-white text-brand-navy border-t border-slate-100">
      <div className="container mx-auto">
        <h3 className="mb-12 text-primary text-sm font-semibold uppercase tracking-widest flex items-center gap-2">
          <span className="w-8 h-px bg-primary"></span>
          Our Services
        </h3>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
          <div className="flex flex-col space-y-6 md:space-y-8 w-full lg:w-1/2">
            {SLIDES.map((slide, index) => (
              <TextStaggerHover
                key={slide.title}
                index={index}
                className="cursor-pointer text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter"
                text={slide.title}
              />
            ))}
          </div>
          <HoverSliderImageWrap className="w-full lg:w-1/2 rounded-2xl aspect-[4/3] bg-muted/20">
            {SLIDES.map((slide, index) => (
              <div key={slide.id} className="size-full">
                <HoverSliderImage
                  index={index}
                  imageUrl={slide.imageUrl}
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="size-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </HoverSliderImageWrap>
        </div>
      </div>
    </HoverSlider>
  )
}
