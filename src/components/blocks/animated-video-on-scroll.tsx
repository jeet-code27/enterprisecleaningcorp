"use client"
import React, { useRef, useContext, useState } from "react"
import { useScroll, useTransform, useSpring, motion, MotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

const ScrollContext = React.createContext<{ scrollYProgress: MotionValue<number> } | null>(null)

export const ContainerScroll = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.8
  })

  return (
    <ScrollContext.Provider value={{ scrollYProgress: springScroll }}>
      <div ref={containerRef} className={cn("relative w-full", className)}>
        {children}
      </div>
    </ScrollContext.Provider>
  )
}

export const ContainerSticky = ({ children, className, style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) => {
  return (
    <div 
      className={cn("w-full relative", className)} 
      style={style}
    >
      {/* Dynamic Grid Background Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />
      {children}
    </div>
  )
}

export const ContainerAnimated = ({ 
  children, 
  className,
  transition
}: any) => {
  const context = useContext(ScrollContext)
  if (!context) throw new Error("ContainerAnimated must be used within ContainerScroll")
  
  // Gentle parallax effect for text
  const y = useTransform(context.scrollYProgress, [0, 0.5], [0, -100])
  const opacity = useTransform(context.scrollYProgress, [0, 0.5], [1, 0.5])

  return (
    <motion.div style={{ y, opacity }} transition={transition} className={className}>
      {children}
    </motion.div>
  )
}

export const ContainerInset = ({ children, className }: any) => {
  const context = useContext(ScrollContext)
  if (!context) throw new Error("ContainerInset must be used within ContainerScroll")
  
  // 3D pop out effect as you scroll down
  const scale = useTransform(context.scrollYProgress, [0, 0.6], [0.85, 1])
  const rotateX = useTransform(context.scrollYProgress, [0, 0.6], [30, 0])
  const opacity = useTransform(context.scrollYProgress, [0, 0.4], [0.6, 1])

  return (
    <div className={cn("w-full flex items-center justify-center relative z-20", className)} style={{ perspective: "1500px" }}>
      <motion.div 
        style={{ scale, rotateX, opacity, transformStyle: "preserve-3d" }} 
        className="w-full max-w-7xl mx-auto rounded-[2rem] p-3 relative group"
      >
        {/* Glow behind the video */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-navy to-brand-blue opacity-40 blur-3xl -z-10 group-hover:opacity-70 transition-opacity duration-1000" />
        
        {/* Glassmorphic border container */}
        <div className="absolute inset-0 rounded-[2rem] border border-white/20 bg-white/5 backdrop-blur-md -z-10" />

        {/* Video wrapper */}
        <div className="w-full h-full rounded-[1.5rem] overflow-hidden shadow-2xl relative bg-[#020420]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#020420]/60 via-transparent to-[#020420]/20 pointer-events-none z-10" />
          {children}
        </div>
      </motion.div>
    </div>
  )
}

export const HeroVideo = ({ src, 'data-src': dataSrc, className }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        poster="/images/hero-new.jpeg"
        loop
        muted
        playsInline
        className={cn("w-full aspect-video object-contain scale-[1.03] transform group-hover:scale-100 transition-transform duration-1000 ease-out", className)}
        src={src}
        data-src={dataSrc}
      />
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white shadow-xl transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(227,24,55,0.6)]"
          aria-label="Play video"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-1">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </div>
  )
}

export const HeroButton = ({ children, className }: any) => {
  return (
    <button className={cn(
      "group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-brand-red px-10 font-bold text-white shadow-[0_0_30px_rgba(211,47,47,0.3)] transition-all hover:shadow-[0_0_60px_rgba(211,47,47,0.6)] hover:scale-[1.02]",
      className
    )}>
      {/* Shimmer effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] animate-shimmer" />
      <span className="relative text-lg tracking-wider uppercase">{children}</span>
    </button>
  )
}
