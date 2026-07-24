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

const FacebookIcon = ({ className = "size-3.5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
)

const InstagramIcon = ({ className = "size-3.5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const coreServices = [
  {
    title: "Night & Day Cleaning",
    description: "Consistent cleaning for professional environments.",
    href: "/day-and-night-shift-commercial-cleaning-services-central-ma",
    icon: Building2,
  },
  {
    title: "Floor Care Services",
    description: "Specialized care for carpets, hard floors, and more.",
    href: "/floor-care-services-central-ma",
    icon: Sparkles,
  },
  {
    title: "Deep Cleaning",
    description: "Thorough, restorative cleaning to revitalize your facility.",
    href: "/specialty-cleaning-services-central-ma",
    icon: Sparkles,
  },
  {
    title: "Flood Cleanup",
    description: "24/7 response for water, flood, and storm damage.",
    href: "/emergency-restoration-services-central-ma",
    icon: Wind,
  },
  {
    title: "Turnover Cleaning",
    description: "Complete turnover cleaning for properties.",
    href: "/turnover-cleaning-central-ma",
    icon: Droplets,
  },
  {
    title: "Post Construction",
    description: "Detailed cleaning after construction projects.",
    href: "/post-construction-cleaning-central-ma",
    icon: SprayCan,
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
              <span className="text-white/50">|</span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.facebook.com/people/Enterprise-Cleaning/61591593631296/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFE800] transition-colors p-0.5"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="size-4" />
                </a>
                <a
                  href="https://www.instagram.com/enterprise_.cleaning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFE800] transition-colors p-0.5"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Enterprise Cleaning Corporation"
            width={180}
            height={56}
            className="h-12 w-auto object-contain"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </Link>

        <DesktopMenu />

        <div className="flex items-center gap-2">
          {/* Desktop CTA */}
          <Button asChild className="hidden md:inline-flex shadow transition-colors text-white font-semibold" style={{ background: "#E31837" }}>
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
          {/* Mobile CTA — compact, stays in sticky header */}
          <Link
            href="/contact"
            className="inline-flex md:hidden items-center gap-1.5 px-3 py-2 rounded-lg text-white text-xs font-bold shadow-md active:scale-95 transition-transform"
            style={{ background: "#E31837" }}
          >
            Free Quote
          </Link>
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
          <div className="mt-8 space-y-4">
            <Button asChild className="w-full" onClick={close}>
              <Link href="/quote">Get a Quote</Link>
            </Button>
            <div className="flex items-center justify-center gap-4 pt-2 border-t border-slate-100">
              <a
                href="https://www.facebook.com/people/Enterprise-Cleaning/61591593631296/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-[#0090c8] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="size-5" />
              </a>
              <a
                href="https://www.instagram.com/enterprise_.cleaning"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-[#0090c8] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="size-5" />
              </a>
            </div>
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
