"use client"

import { Button } from "@/components/ui/button"
import { Glow } from "@/components/ui/glow"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface CTAProps {
  title: string
  action: {
    text: string
    href: string
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
  }
  className?: string
  children?: React.ReactNode
}

export function CTASection({ title, action, className, children }: CTAProps) {
  return (
    <section className={cn("group relative overflow-hidden py-24 sm:py-32", className)}>
      <div className="relative z-10 mx-auto flex max-w-container flex-col items-center gap-6 text-center sm:gap-8">
        <h2 className="text-3xl font-semibold sm:text-5xl animate-appear">
          {title}
        </h2>
        {children}
        <Button 
          variant={action.variant || "default"} 
          size="lg" 
          className="animate-appear delay-100 mt-4 rounded-full px-5 sm:px-8 py-3.5 sm:py-6 h-auto text-sm sm:text-base md:text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group/btn max-w-[calc(100vw-2rem)] whitespace-normal sm:whitespace-nowrap"
          asChild
        >
          <a href={action.href} className="inline-flex items-center justify-center gap-2">
            <span>{action.text}</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </a>
        </Button>
      </div>
      <div className="absolute left-0 top-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100 pointer-events-none">
        <Glow variant="bottom" className="animate-appear-zoom delay-300" />
      </div>
    </section>
  )
}
