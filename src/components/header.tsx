"use client";

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Sparkles, Building2, HardHat, Droplets, SprayCan, Briefcase, ChevronRight, ChevronDown, Wind, MapPin, Clock, Phone, MenuIcon, XIcon, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { GridCard } from "@/components/ui/grid-card"
import { NavigationMenuLink, NavItemMobile } from "@/components/ui/navigation-menu"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const servicesLinks = [
  {
    title: "Commercial & Night Cleaning",
    description: "Schools, Healthcare, Warehouses, Technology, etc.",
    href: "#",
    icon: Building2,
  },
  {
    title: "Post Construction",
    description: "Thorough cleaning after construction or renovation projects.",
    href: "#",
    icon: HardHat,
  },
  {
    title: "Commercial Turnover Cleaning",
    description: "Fast and efficient turnover cleaning for commercial properties.",
    href: "#",
    icon: Briefcase,
  },
  {
    title: "Mold Cleanup & Removal",
    description: "Professional mold remediation and cleanup services.",
    href: "#",
    icon: Wind,
  },
  {
    title: "Porter Services & Day Cleaning",
    description: "Ongoing day porter services to keep your facility pristine.",
    href: "#",
    icon: Droplets,
  },
]

const specialProjects = [
  { title: "Carpet Cleaning", href: "#", icon: Sparkles },
  { title: "Floor Refinishing", href: "#", icon: Sparkles },
  { title: "Real Estate Deep Cleaning", href: "#", icon: Sparkles },
  { title: "Window Cleaning", href: "#", icon: Sparkles },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex flex-col">
      {/* Top Contact Bar - Brand Navy */}
      <div className="text-white py-2 text-xs font-medium overflow-hidden" style={{ background: "#00B8FF" }}>
        <div className="container mx-auto flex sm:flex-row items-center justify-between px-4">
          {/* Mobile Marquee */}
          <div className="flex sm:hidden w-full whitespace-nowrap overflow-hidden">
            <div className="flex items-center gap-6 animate-marquee">
              <span className="flex items-center gap-1.5 shrink-0"><MapPin className="size-3.5 text-white" />99 Hartwell Street, West Boylston, MA 01583</span>
              <span className="flex items-center gap-1.5 shrink-0"><Clock className="size-3.5 text-white" />24 hrs / 7 Days</span>
              <span className="flex items-center gap-1.5 font-bold shrink-0"><Phone className="size-3.5 text-[#FFE800]" />Serving New England: 508-890-1000</span>
              <span className="flex items-center gap-1.5 font-bold text-[#E31837] shrink-0"><Phone className="size-3.5 text-[#E31837]" />Emergency: 888-76-FLOOD</span>
              <span className="flex items-center gap-1.5 shrink-0"><Mail className="size-3.5 text-white" />customerservice@enterprisecleaningcorp.com</span>
              <span className="flex items-center gap-1.5 shrink-0"><MapPin className="size-3.5 text-white" />99 Hartwell Street, West Boylston, MA 01583</span>
              <span className="flex items-center gap-1.5 shrink-0"><Clock className="size-3.5 text-white" />24 hrs / 7 Days</span>
              <span className="flex items-center gap-1.5 font-bold shrink-0"><Phone className="size-3.5 text-[#FFE800]" />Serving New England: 508-890-1000</span>
              <span className="flex items-center gap-1.5 font-bold text-[#E31837] shrink-0"><Phone className="size-3.5 text-[#E31837]" />Emergency: 888-76-FLOOD</span>
              <span className="flex items-center gap-1.5 shrink-0"><Mail className="size-3.5 text-white" />customerservice@enterprisecleaningcorp.com</span>
            </div>
          </div>
          {/* Desktop Static Bar */}
          <div className="hidden sm:flex items-center w-full justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><MapPin className="size-3.5 text-white" />99 Hartwell Street, West Boylston, MA 01583</span>
              <span className="text-white/50">|</span>
              <span className="flex items-center gap-1.5"><Clock className="size-3.5 text-white" />24 hrs / 7 Days</span>
              <span className="text-white/50">|</span>
              <span className="flex items-center gap-1.5"><Mail className="size-3.5 text-white" />customerservice@enterprisecleaningcorp.com</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 font-bold"><Phone className="size-3.5 text-[#FFE800]" />Serving New England: 508-890-1000</div>
              <div className="flex items-center gap-1.5 font-bold text-[#E31837]"><Phone className="size-3.5 text-[#E31837]" />Emergency: 888-76-FLOOD</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Enterprise Cleaning and Restoration Corporation"
            width={180}
            height={56}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        <DesktopMenu />

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex shadow transition-colors text-white font-semibold" style={{ background: "#E31837" }}>
            <Link href="/quote">Get a Free Quote</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}


const navLinkClass = "inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none"

function DesktopMenu() {
  const [open, setOpen] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)

  // Close on outside click
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    // Close on Escape
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    document.addEventListener("keydown", handleKey)
    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("keydown", handleKey)
    }
  }, [])


  return (
    <nav className="hidden md:flex items-center gap-1" ref={menuRef}>
      <Link href="/" className={navLinkClass}>Home</Link>

      {/* Services Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className={cn(navLinkClass, "gap-1", open && "bg-accent text-accent-foreground")}
          aria-expanded={open}
        >
          Our Services
          <ChevronDown className={cn("size-3.5 transition-transform duration-200", open && "rotate-180")} />
        </button>

        {/* Dropdown Panel */}
        {open && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 w-[600px] rounded-xl border bg-background/95 backdrop-blur-xl shadow-lg p-4"
            onClick={() => setOpen(false)}
          >
            <div className="grid grid-cols-2 gap-3">
              {servicesLinks.map((link) => (
                <Link key={link.title} href={link.href}>
                  <GridCard className="cursor-pointer">
                    <link.icon className="text-foreground/80 relative size-5 mb-2" />
                    <div>
                      <span className="text-foreground/80 text-sm font-medium block">{link.title}</span>
                      <p className="text-muted-foreground mt-1 text-xs">{link.description}</p>
                    </div>
                  </GridCard>
                </Link>
              ))}
              {/* Special Projects card */}
              <div className="flex flex-col rounded-xl border bg-muted/50 p-4">
                <div className="flex items-center gap-2 font-medium text-sm text-foreground/80 mb-3">
                  <SprayCan className="size-4 shrink-0" />
                  Special Projects
                </div>
                <ul className="flex flex-col gap-0.5">
                  {specialProjects.map((project) => (
                    <li key={project.title}>
                      <Link
                        href={project.href}
                        className="flex flex-row items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors py-1.5"
                      >
                        <ChevronRight className="size-3 shrink-0" />
                        <span>{project.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <Link href="/about" className={navLinkClass}>About Us</Link>
      <Link href="/contact" className={navLinkClass}>Contact</Link>
    </nav>
  )
}

function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-md md:hidden">
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="bg-background/95 supports-[backdrop-filter]:bg-background/80 w-full gap-0 backdrop-blur-lg border-l-0 sm:max-w-md p-0"
        showClose={false}
      >
        <div className="flex h-16 items-center justify-between border-b px-6">
          <span className="font-bold">Enterprise Cleaning</span>
          <Button size="icon" variant="ghost" className="rounded-full" onClick={() => setOpen(false)}>
            <XIcon className="size-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <div className="container grid gap-y-2 overflow-y-auto px-6 pt-5 pb-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="home" className="border-b-0">
              <Link href="/" onClick={() => setOpen(false)} className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline">
                Home
              </Link>
            </AccordionItem>

            <AccordionItem value="services" className="border-b-0">
              <AccordionTrigger className="capitalize hover:no-underline">
                Our Services
              </AccordionTrigger>
              <AccordionContent className="space-y-1">
                <ul className="grid gap-1">
                  {servicesLinks.map((link) => (
                    <li key={link.href} onClick={() => setOpen(false)}>
                      <NavItemMobile item={link} href={link.href} />
                    </li>
                  ))}
                  <div className="px-2 py-2 mt-2 border-t">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">Special Projects</span>
                    {specialProjects.map((link) => (
                      <li key={link.href} className="mb-1 list-none" onClick={() => setOpen(false)}>
                        <NavItemMobile item={link} href={link.href} />
                      </li>
                    ))}
                  </div>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="about" className="border-b-0">
              <Link href="/about" onClick={() => setOpen(false)} className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline">
                About Us
              </Link>
            </AccordionItem>

            <AccordionItem value="contact" className="border-b-0">
              <Link href="/contact" onClick={() => setOpen(false)} className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline">
                Contact
              </Link>
            </AccordionItem>
          </Accordion>

          <div className="mt-8" onClick={() => setOpen(false)}>
            <Button asChild className="w-full">
              <Link href="/quote">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
