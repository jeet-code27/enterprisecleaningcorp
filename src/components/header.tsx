"use client";

import * as React from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import Link from "next/link"
import { Sparkles, Building2, HardHat, Droplets, SprayCan, Briefcase, ChevronRight, ChevronDown, Wind, MapPin, Clock, Phone, MenuIcon, XIcon, Mail, ArrowRight, Stethoscope, GraduationCap, Package } from "lucide-react"
import { cn } from "@/lib/utils"
import { GridCard } from "@/components/ui/grid-card"
import { NavigationMenuLink, NavItemMobile } from "@/components/ui/navigation-menu"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const coreServices = [
  {
    title: "Nightly Cleaning",
    description: "Consistent nightly cleaning for professional environments.",
    href: "/nightly-janitorial-cleaning-central-ma",
    icon: Building2,
  },
  {
    title: "Day Porter Services",
    description: "Ongoing daily maintenance to keep your facility pristine.",
    href: "/day-porter-services-central-ma",
    icon: Droplets,
  },
  {
    title: "Floor Care Services",
    description: "Specialized care for carpets, hard floors, and more.",
    href: "/floor-care-services-central-ma",
    icon: Sparkles,
  },
  {
    title: "Specialty Cleaning",
    description: "Window cleaning, pressure washing, water and mold.",
    href: "/specialty-cleaning-services-central-ma",
    icon: SprayCan,
  },
  {
    title: "Emergency & Restoration",
    description: "24/7 response for water, fire, and storm damage.",
    href: "/emergency-restoration-services-central-ma",
    icon: Wind,
  },
  {
    title: "Deep Cleaning Services",
    description: "Thorough, restorative cleaning to revitalize your facility.",
    href: "/deep-cleaning-services-central-ma",
    icon: Sparkles,
  },
]

const industryPages = [
  { title: "Manufacturing & Industrial", href: "/manufacturing-industrial-cleaning-central-ma", icon: HardHat },
  { title: "Medical & Healthcare", href: "/medical-healthcare-cleaning-central-ma", icon: Stethoscope },
  { title: "Offices & Financial", href: "/office-financial-cleaning-central-ma", icon: Briefcase },
  { title: "Educational & Municipal", href: "/school-municipal-cleaning-central-ma", icon: GraduationCap },
  { title: "Property Management", href: "/property-management-cleaning-central-ma", icon: Building2 },
  { title: "Warehouses & Distribution", href: "/warehouse-distribution-cleaning-central-ma", icon: Package },
  { title: "Real Estate", href: "/real-estate-cleaning-central-ma", icon: Building2 },
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

              <span className="flex items-center gap-1.5 shrink-0"><Mail className="size-3.5 text-white" />customerservice@enterprisecleaningcorp.com</span>
              <span className="flex items-center gap-1.5 shrink-0"><MapPin className="size-3.5 text-white" />99 Hartwell Street, West Boylston, MA 01583</span>
              <span className="flex items-center gap-1.5 shrink-0"><Clock className="size-3.5 text-white" />24 hrs / 7 Days</span>
              <span className="flex items-center gap-1.5 font-bold shrink-0"><Phone className="size-3.5 text-[#FFE800]" />Serving New England: 508-890-1000</span>

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
            style={{ width: "auto", height: "auto" }}
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
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
  const menuRef = React.useRef<HTMLDivElement>(null)

  // Close on outside click
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    // Close on Escape
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenDropdown(null)
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
          onClick={() => setOpenDropdown((v) => v === "services" ? null : "services")}
          className={cn(navLinkClass, "gap-1", openDropdown === "services" && "bg-accent text-accent-foreground")}
          aria-expanded={openDropdown === "services"}
        >
          Our Services
          <ChevronDown className={cn("size-3.5 transition-transform duration-200", openDropdown === "services" && "rotate-180")} />
        </button>

        {openDropdown === "services" && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 w-[700px] rounded-2xl border bg-background/95 backdrop-blur-xl shadow-2xl p-6"
            onClick={() => setOpenDropdown(null)}
          >
            <h3 className="text-xs font-black uppercase tracking-widest text-[#00B8FF] mb-4 flex items-center gap-2">
              Our Core Services
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {coreServices.map((link) => (
                <Link key={link.title} href={link.href}>
                  <GridCard className="cursor-pointer hover:border-[#00B8FF]/40 hover:shadow-md transition-all h-full">
                    <link.icon className="text-foreground/80 relative size-5 mb-2 text-[#0090c8]" />
                    <div>
                      <span className="text-foreground/90 text-sm font-bold block">{link.title}</span>
                      <p className="text-muted-foreground mt-1 text-[11px] leading-relaxed">{link.description}</p>
                    </div>
                  </GridCard>
                </Link>
              ))}
              

            </div>
          </div>
        )}
      </div>

      {/* Industries Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpenDropdown((v) => v === "industries" ? null : "industries")}
          className={cn(navLinkClass, "gap-1", openDropdown === "industries" && "bg-accent text-accent-foreground")}
          aria-expanded={openDropdown === "industries"}
        >
          Industries We Serve
          <ChevronDown className={cn("size-3.5 transition-transform duration-200", openDropdown === "industries" && "rotate-180")} />
        </button>

        {openDropdown === "industries" && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 w-[700px] rounded-2xl border bg-background/95 backdrop-blur-xl shadow-2xl p-6"
            onClick={() => setOpenDropdown(null)}
          >
            <h3 className="text-xs font-black uppercase tracking-widest text-[#E31837] mb-4 flex items-center gap-2">
              Industries We Serve
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {industryPages.map((project) => (
                <Link key={project.title} href={project.href}>
                  <GridCard className="cursor-pointer hover:border-[#E31837]/40 hover:shadow-md transition-all h-full py-4 px-4 flex flex-row items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
                      <project.icon className="text-[#E31837] relative size-5" />
                    </div>
                    <span className="text-foreground/90 text-sm font-bold leading-tight">{project.title}</span>
                  </GridCard>
                </Link>
              ))}
            </div>
            
            {/* Promo Card at bottom of industries */}
            <div className="mt-6 rounded-xl bg-gradient-to-r from-slate-900 to-[#003057] p-4 text-white flex justify-between items-center shadow-lg">
              <p className="text-sm font-medium text-white/90">Need a tailored cleaning plan for your facility?</p>
              <Link href="/contact" className="text-sm font-bold bg-[#FFE800] text-slate-900 px-5 py-2.5 rounded-lg hover:bg-yellow-400 transition-colors flex items-center gap-2">
                Request Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>

      <Link href="/about" className={navLinkClass}>About Us</Link>
      <Link href="/blog" className={navLinkClass}>Blog</Link>
      <Link href="/contact" className={navLinkClass}>Contact</Link>
    </nav>
  )
}

function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => { setMounted(true); }, []);

  const close = () => setOpen(false);

  const drawerContent = (
    <>
      {/* Backdrop — fades in/out */}
      <div
        onClick={close}
        className={cn(
          "fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />
      {/* Drawer — slides in from right */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[9999] w-full sm:max-w-md bg-background flex flex-col shadow-2xl transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer header */}
        <div className="flex h-16 items-center justify-between border-b px-6 shrink-0">
          <span className="font-bold">Enterprise Cleaning</span>
          <button
            type="button"
            onClick={close}
            className="rounded-full p-2 hover:bg-accent transition-colors inline-flex items-center justify-center"
          >
            <XIcon className="size-5" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        {/* Nav links */}
        <div className="overflow-y-auto px-6 pt-5 pb-12 flex-1">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="home" className="border-b-0">
              <Link href="/" onClick={close} className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline">
                Home
              </Link>
            </AccordionItem>
            
            <AccordionItem value="services" className="border-b-0">
              <AccordionTrigger className="capitalize hover:no-underline">Our Services</AccordionTrigger>
              <AccordionContent className="space-y-1">
                <ul className="grid gap-1">
                  {coreServices.map((link) => (
                    <li key={link.title} onClick={close}>
                      <NavItemMobile item={link} href={link.href} />
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="industries" className="border-b-0">
              <AccordionTrigger className="capitalize hover:no-underline">Industries We Serve</AccordionTrigger>
              <AccordionContent className="space-y-1">
                <ul className="grid gap-1">
                  {industryPages.map((link) => (
                    <li key={link.title} onClick={close}>
                      <NavItemMobile item={link} href={link.href} />
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="about" className="border-b-0">
              <Link href="/about" onClick={close} className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline">
                About Us
              </Link>
            </AccordionItem>
            <AccordionItem value="blog" className="border-b-0">
              <Link href="/blog" onClick={close} className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline">
                Blog
              </Link>
            </AccordionItem>
            <AccordionItem value="contact" className="border-b-0">
              <Link href="/contact" onClick={close} className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline">
                Contact
              </Link>
            </AccordionItem>
          </Accordion>
          <div className="mt-8">
            <Button asChild className="w-full" onClick={close}>
              <Link href="/quote">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Hamburger button */}
      <Button size="icon" variant="ghost" className="rounded-md md:hidden" onClick={() => setOpen(true)}>
        <MenuIcon className="size-5" />
      </Button>
      {/* Always mounted in portal — CSS handles show/hide via transition */}
      {mounted && createPortal(drawerContent, document.body)}
    </>
  );
}
