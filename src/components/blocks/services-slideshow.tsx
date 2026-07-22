"use client";

import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
  useHoverSliderContext,
} from "@/components/ui/animated-slideshow"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const SLIDES = [
  {
    id: "slide-1",
    title: "Night & Day Cleaning",
    imageUrl: "/images/nightly_janitorial_hero.png",
    href: "/day-and-night-shift-commercial-cleaning-services-central-ma",
  },
  {
    id: "slide-2",
    title: "Floor Care Services",
    imageUrl: "/images/service_commercial.png",
    href: "/floor-care-services-central-ma",
  },
  {
    id: "slide-3",
    title: "Deep Cleaning",
    imageUrl: "/images/service_porter.png",
    href: "/specialty-cleaning-services-central-ma",
  },
  {
    id: "slide-4",
    title: "Flood Cleanup",
    imageUrl: "/images/service_mold.png",
    href: "/emergency-restoration-services-central-ma",
  },
  {
    id: "slide-5",
    title: "Turnover Cleaning",
    imageUrl: "/images/service_turnover.png",
    href: "/turnover-cleaning-central-ma",
  },
  {
    id: "slide-6",
    title: "Post Construction",
    imageUrl: "/images/service_commercial.png",
    href: "/post-construction-cleaning-central-ma",
  },
]

function ServiceItem({ slide, index }: { slide: { title: string, href: string }, index: number }) {
  const { activeSlide, changeSlide } = useHoverSliderContext()
  const isActive = activeSlide === index

  return (
    <Link
      href={slide.href}
      className="flex items-center gap-4 cursor-pointer group"
      onMouseEnter={() => changeSlide(index)}
    >
      <div className={cn(
        "flex items-center justify-center size-8 md:size-10 rounded-full transition-all duration-500 shrink-0",
        isActive 
          ? "bg-[#00B8FF] text-white shadow-[0_0_15px_rgba(0,184,255,0.4)] scale-110" 
          : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600"
      )}>
        <ChevronRight className={cn("size-5 md:size-6 transition-transform duration-500", isActive ? "translate-x-0.5" : "")} />
      </div>
      <TextStaggerHover
        index={index}
        className="text-xl md:text-2xl lg:text-3xl leading-tight font-extrabold tracking-tight text-slate-800 hover:text-[#00B8FF] transition-colors"
        text={slide.title}
      />
    </Link>
  )
}

export function ServicesSlideshow() {
  return (
    <HoverSlider className="place-content-center py-20 px-6 md:px-12 bg-slate-50 text-brand-navy border-t border-slate-100">
      <div className="container mx-auto">
        <h3 className="mb-12 text-primary text-sm font-semibold uppercase tracking-widest flex items-center gap-2">
          <span className="w-8 h-px bg-primary"></span>
          Our Services
        </h3>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          <div className="flex flex-col space-y-6 md:space-y-8 w-full lg:w-[55%]">
            {SLIDES.map((slide, index) => (
              <ServiceItem key={slide.id} slide={slide} index={index} />
            ))}
          </div>
          <HoverSliderImageWrap className="w-full lg:w-[40%] max-w-xl rounded-2xl aspect-[4/3] bg-muted/20 shadow-xl border border-slate-100">
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
