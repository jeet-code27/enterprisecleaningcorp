import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BadgeCheck, BookOpen, CalendarClock, CheckCircle2, ChevronDown, ChevronRight,
  Clock, ExternalLink, Factory, Lightbulb, ListChecks, PhoneCall, Quote, Share2, Sparkles,
} from "lucide-react";
import { cleaningTypesGuide as guide, CLEANING_TYPE_SERVICE_LINKS } from "@/data/types-of-commercial-cleaning";

const SITE_URL = "https://www.enterprisecleaningcorp.com";
const PAGE_PATH = "/types-of-commercial-cleaning";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const HERO_IMAGE = {
  src: "/images/commercial-cleaning-pro.png",
  alt: "Commercial cleaning crew working in a professional building",
};
const AUTHOR = {
  name: "Alex Puchulu",
  jobTitle: "Director of Sales & Marketing",
  image: "/images/alex-new.jpeg",
  href: "/alex-puchulu-business-card",
};
// Client confirmed ECC delivers all twenty types.
const SERVICE_AREA_TEXT = "Massachusetts, Rhode Island, Connecticut, and Southern New Hampshire";
const PROVIDED_BADGE = "Enterprise Cleaning provides this service";

const PUBLISHED_LABEL = formatDate(guide.datePublished);
const UPDATED_LABEL = formatDate(guide.dateModified);

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

function slugify(s: string) {
  return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const typeId = (n: number, name: string) => `type-${n}-${slugify(name)}`;

export const metadata: Metadata = {
  title: { absolute: guide.metaTitle },
  description: guide.metaDescription,
  keywords: "types of commercial cleaning, commercial cleaning services, janitorial services, office cleaning, commercial janitorial services, post construction cleaning services, commercial floor waxing, medical office cleaning, day porter services near me, custodial services near me",
  authors: [{ name: AUTHOR.name, url: `${SITE_URL}${AUTHOR.href}` }],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: guide.metaTitle,
    description: guide.metaDescription,
    url: PAGE_URL,
    siteName: "Enterprise Cleaning Corporation",
    locale: "en_US",
    type: "article",
    publishedTime: guide.datePublished,
    modifiedTime: guide.dateModified,
    authors: [AUTHOR.name],
    section: guide.category,
    images: [{ url: HERO_IMAGE.src, alt: HERO_IMAGE.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: guide.metaTitle,
    description: guide.metaDescription,
    images: [HERO_IMAGE.src],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      "headline": guide.h1,
      "description": guide.metaDescription,
      "image": `${SITE_URL}${HERO_IMAGE.src}`,
      "datePublished": guide.datePublished,
      "dateModified": guide.dateModified,
      "author": { "@id": `${PAGE_URL}#author` },
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL, "url": PAGE_URL, "breadcrumb": { "@id": `${PAGE_URL}#breadcrumb` } },
      "articleSection": guide.category,
      "wordCount": guide.wordCount,
      "timeRequired": `PT${guide.readingMinutes}M`,
      "about": { "@id": `${PAGE_URL}#termset` },
      "citation": guide.sources.map(s => s.url),
      "inLanguage": "en-US",
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${PAGE_URL}#termset`,
      "name": "Types of commercial cleaning",
      "description": "Definitions of the twenty recognised types of commercial cleaning service, with scope, industries served, and typical frequency.",
      "hasDefinedTerm": guide.types.map(t => ({ "@id": `${PAGE_URL}#${typeId(t.n, t.name)}` })),
    },
    ...guide.types.map(t => ({
      "@type": "DefinedTerm",
      "@id": `${PAGE_URL}#${typeId(t.n, t.name)}`,
      "name": t.name,
      "description": t.definition,
      "url": `${PAGE_URL}#${typeId(t.n, t.name)}`,
      "inDefinedTermSet": { "@id": `${PAGE_URL}#termset` },
    })),
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#list`,
      "name": "Types of commercial cleaning",
      "numberOfItems": guide.types.length,
      "itemListOrder": "https://schema.org/ItemListUnordered",
      "itemListElement": guide.types.map(t => ({
        "@type": "ListItem",
        "position": t.n,
        "name": t.name,
        "description": t.definition,
        "url": `${PAGE_URL}#${typeId(t.n, t.name)}`,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      "mainEntity": guide.faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
    {
      "@type": "OfferCatalog",
      "@id": `${PAGE_URL}#services`,
      "name": "Commercial cleaning services from Enterprise Cleaning Corporation",
      "numberOfItems": guide.types.length,
      "itemListElement": guide.types.map(t => {
        const service = CLEANING_TYPE_SERVICE_LINKS[t.n];
        return {
          "@type": "Offer",
          "offeredBy": { "@id": `${SITE_URL}/#organization` },
          "itemOffered": {
            "@type": "Service",
            "name": t.name,
            "description": t.definition,
            "url": service ? `${SITE_URL}${service.href}` : `${PAGE_URL}#${typeId(t.n, t.name)}`,
            "provider": { "@id": `${SITE_URL}/#organization` },
            "areaServed": SERVICE_AREA_TEXT,
          },
        };
      }),
    },
    {
      "@type": "Person",
      "@id": `${PAGE_URL}#author`,
      "name": AUTHOR.name,
      "jobTitle": AUTHOR.jobTitle,
      "url": `${SITE_URL}${AUTHOR.href}`,
      "image": `${SITE_URL}${AUTHOR.image}`,
      "worksFor": { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
        { "@type": "ListItem", "position": 2, "name": "Types of Commercial Cleaning", "item": PAGE_URL },
      ],
    },
  ],
};

const encodedPrompt = encodeURIComponent(`Summarize this article for me: ${PAGE_URL}`);
const AI_SUMMARY_LINKS = [
  { label: "ChatGPT", href: `https://chatgpt.com/?q=${encodedPrompt}` },
  { label: "Perplexity", href: `https://www.perplexity.ai/search?q=${encodedPrompt}` },
  { label: "Claude", href: `https://claude.ai/new?q=${encodedPrompt}` },
];
const SHARE_LINKS = [
  { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(PAGE_URL)}` },
  { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PAGE_URL)}` },
  { label: "X", href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(PAGE_URL)}` },
  { label: "WhatsApp", href: `https://api.whatsapp.com/send?text=${encodeURIComponent(PAGE_URL)}` },
];

const TOC = [
  { id: "quick-reference", label: "Quick reference table" },
  { id: "the-twenty-types", label: "The twenty types" },
  { id: "terms", label: "Terms that get confused" },
  { id: "how-to-choose", label: "How to choose the right types" },
  { id: "about", label: "About Enterprise Cleaning" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "sources", label: "Sources" },
];

const RELATED_SERVICES = [
  { label: "Janitorial Services", href: "/janitorial-services", text: "Recurring nightly and weekly janitorial programs for commercial buildings." },
  { label: "Office Cleaning", href: "/office-cleaning", text: "After-hours office cleaning with day porter coverage when you need it." },
  { label: "Medical Office Cleaning", href: "/medical-office-cleaning", text: "Infection-control cleaning built around patient hours and clinical protocols." },
];

const pill = "inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border transition-colors";

export default function TypesOfCommercialCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* ─── HEADER ─── */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(to right, #0090c8, #E31837, #FFE800)" }} />
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <nav aria-label="Breadcrumb" className="pt-6">
            <ol className="flex flex-wrap items-center gap-1 text-xs font-semibold text-slate-500">
              <li><Link href="/" className="hover:text-[#0090c8]">Home</Link></li>
              <li aria-hidden="true"><ChevronRight className="w-3 h-3" /></li>
              <li aria-current="page" className="text-slate-800">Types of Commercial Cleaning</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-center py-8 lg:py-12">
            <div className="lg:col-span-3 space-y-6">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0090c8] bg-[#0090c8]/8 border border-[#0090c8]/20 px-4 py-1.5 rounded-full">
                <BookOpen className="w-3.5 h-3.5 text-[#E31837]" />
                {guide.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-slate-900">
                Types of commercial cleaning:{" "}
                <span className="text-[#0090c8]">definitions, uses, and the industries that need them</span>
              </h1>

              {/* Byline */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                <Link href={AUTHOR.href} className="flex items-center gap-3 group">
                  <Image src={AUTHOR.image} alt={AUTHOR.name} width={44} height={44} className="w-11 h-11 rounded-full object-cover border-2 border-white shadow" />
                  <span className="leading-tight">
                    <span className="block font-extrabold text-slate-900 group-hover:text-[#0090c8]">By {AUTHOR.name}</span>
                    <span className="block text-xs text-slate-500 font-medium">{AUTHOR.jobTitle}</span>
                  </span>
                </Link>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold text-slate-500">
                  <span className="inline-flex items-center gap-1"><CalendarClock className="w-3.5 h-3.5 text-[#0090c8]" />Published <time dateTime={guide.datePublished}>{PUBLISHED_LABEL}</time></span>
                  <span className="inline-flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-[#0090c8]" />Last reviewed <time dateTime={guide.dateModified}>{UPDATED_LABEL}</time></span>
                  <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#0090c8]" />{guide.readingMinutes} min read</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200">
                <Image src={HERO_IMAGE.src} alt={HERO_IMAGE.alt} fill priority sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BODY ─── */}
      <section className="bg-slate-50 border-t border-slate-200 py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-10">
            <article className="min-w-0 space-y-12">

              {/* Cut to the chase + At a glance */}
              <div className="grid gap-5">
                <div className="rounded-2xl bg-[#00103A] text-white p-6 sm:p-7 shadow-lg">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#FFE800] mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> Cut to the chase
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed font-medium text-white/90">{guide.cutToTheChase}</p>
                </div>
                <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0090c8] mb-4 flex items-center gap-2">
                    <ListChecks className="w-4 h-4" /> At a glance
                  </p>
                  <ul className="space-y-3">
                    {guide.atAGlance.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-700 text-sm sm:text-[0.95rem] font-medium leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-[#0090c8] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Summarize with AI + share */}
              <div className="rounded-2xl bg-white border border-slate-200 p-5 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mr-1">Summarize with AI</span>
                  {AI_SUMMARY_LINKS.map(l => (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener nofollow" className={`${pill} border-slate-200 text-slate-700 hover:border-[#0090c8] hover:text-[#0090c8]`}>
                      {l.label} <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mr-1 inline-flex items-center gap-1"><Share2 className="w-3.5 h-3.5" />Share</span>
                  {SHARE_LINKS.map(l => (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener nofollow" className={`${pill} border-slate-200 text-slate-700 hover:border-[#0090c8] hover:text-[#0090c8]`}>
                      {l.label}
                    </a>
                  ))}
                  <a
                    href="https://www.google.com/preferences/source?q=enterprisecleaningcorp.com"
                    target="_blank"
                    rel="noopener nofollow"
                    className={`${pill} border-[#0090c8]/30 bg-[#0090c8]/8 text-[#0090c8] hover:bg-[#0090c8]/15`}
                  >
                    Add as a preferred source on Google <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Mobile table of contents */}
              <details className="lg:hidden group rounded-2xl bg-white border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between gap-3 p-5 cursor-pointer list-none font-extrabold text-slate-900 [&::-webkit-details-marker]:hidden">
                  <span className="inline-flex items-center gap-2"><BookOpen className="w-4 h-4 text-[#0090c8]" />Table of contents</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <ol className="px-5 pb-5 space-y-2 text-sm border-t border-slate-100 pt-4">
                  {TOC.map(t => (
                    <li key={t.id}><a href={`#${t.id}`} className="font-semibold text-slate-700 hover:text-[#0090c8]">{t.label}</a></li>
                  ))}
                </ol>
              </details>

              {/* Quick reference */}
              <section id="quick-reference" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5">Quick reference table</h2>
                {/* Table on tablet and up */}
                <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-extrabold w-[26%]">Type</th>
                        <th scope="col" className="px-4 py-3 font-extrabold w-[28%]">Typical frequency</th>
                        <th scope="col" className="px-4 py-3 font-extrabold">Primary industries</th>
                        <th scope="col" className="px-4 py-3 font-extrabold w-16 text-center">ECC</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {guide.quickReference.map((row, i) => (
                        <tr key={row.type} className="even:bg-slate-50/70 align-top">
                          <th scope="row" className="px-4 py-3 font-bold text-slate-900">
                            <a href={`#${typeId(i + 1, row.type)}`} className="hover:text-[#0090c8]">{row.type}</a>
                          </th>
                          <td className="px-4 py-3 text-slate-600 font-medium">{row.frequency}</td>
                          <td className="px-4 py-3 text-slate-600 font-medium">{row.industries}</td>
                          <td className="px-4 py-3 text-center">
                            <BadgeCheck className="w-5 h-5 text-emerald-600 inline-block" aria-hidden="true" />
                            <span className="sr-only">{PROVIDED_BADGE}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Stacked cards on phones */}
                <ul className="md:hidden space-y-3">
                  {guide.quickReference.map((row, i) => (
                    <li key={row.type} className="rounded-xl bg-white border border-slate-200 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <a href={`#${typeId(i + 1, row.type)}`} className="font-extrabold text-slate-900 hover:text-[#0090c8]">{i + 1}. {row.type}</a>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 shrink-0">
                          <BadgeCheck className="w-3.5 h-3.5" /> ECC
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 font-medium mt-2"><span className="font-bold text-slate-800">Frequency:</span> {row.frequency}</p>
                      <p className="text-xs text-slate-600 font-medium mt-1"><span className="font-bold text-slate-800">Industries:</span> {row.industries}</p>
                    </li>
                  ))}
                </ul>
              </section>

              {/* The twenty types */}
              <section id="the-twenty-types" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">The twenty types of commercial cleaning</h2>
                <p className="text-slate-600 font-medium mb-6">{guide.typesIntro}</p>

                <div className="mb-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                  <div className="flex gap-3">
                    <BadgeCheck className="w-7 h-7 text-emerald-600 shrink-0" />
                    <p className="text-slate-800 font-semibold leading-relaxed">
                      Enterprise Cleaning Corporation provides all twenty types of commercial cleaning on this list across {SERVICE_AREA_TEXT}.
                    </p>
                  </div>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#0090c8] text-white font-extrabold px-5 py-3 rounded-xl hover:bg-[#0078a8] transition-colors text-sm shrink-0">
                    Get a free quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <ol className="space-y-6">
                  {guide.types.map(t => {
                    const service = CLEANING_TYPE_SERVICE_LINKS[t.n];
                    return (
                      <React.Fragment key={t.n}>
                        <li id={typeId(t.n, t.name)} className="scroll-mt-28 rounded-2xl bg-white border border-slate-200 p-5 sm:p-7 shadow-sm">
                          <div className="flex items-start gap-4 mb-4">
                            <span className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-[#0090c8] text-white font-black text-lg flex items-center justify-center">{t.n}</span>
                            <div className="pt-1 space-y-2">
                              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">{t.name}</h3>
                              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                                <BadgeCheck className="w-3.5 h-3.5" /> {PROVIDED_BADGE}
                              </span>
                            </div>
                          </div>
                          <p className="text-slate-700 leading-relaxed font-medium mb-5">
                            <strong className="text-slate-900">Definition.</strong> {t.definition}
                          </p>
                          <div className="grid md:grid-cols-5 gap-5">
                            <div className="md:col-span-3">
                              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0090c8] mb-3">What it covers</h4>
                              <ul className="space-y-2">
                                {t.covers.map(c => (
                                  <li key={c} className="flex gap-2.5 text-sm text-slate-700 font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-[#0090c8] shrink-0 mt-0.5" />{c}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <dl className="md:col-span-2 space-y-3 rounded-xl bg-slate-50 border border-slate-100 p-4 text-sm">
                              <div>
                                <dt className="font-extrabold text-slate-900 flex items-center gap-1.5"><Factory className="w-4 h-4 text-[#E31837]" />Industries that use it</dt>
                                <dd className="text-slate-600 font-medium mt-1">{t.industries}</dd>
                              </div>
                              <div>
                                <dt className="font-extrabold text-slate-900 flex items-center gap-1.5"><CalendarClock className="w-4 h-4 text-[#E31837]" />Typical frequency</dt>
                                <dd className="text-slate-600 font-medium mt-1">{t.frequency}</dd>
                              </div>
                            </dl>
                          </div>
                          {service ? (
                            <Link href={service.href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#0090c8] hover:underline">
                              Enterprise Cleaning service: {service.label} <ArrowRight className="w-4 h-4" />
                            </Link>
                          ) : (
                            <Link href="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#E31837] hover:underline">
                              Request a quote for {t.name.toLowerCase()} <ArrowRight className="w-4 h-4" />
                            </Link>
                          )}
                        </li>

                        {t.n === 10 && (
                          <li className="list-none rounded-2xl bg-gradient-to-br from-[#00103A] to-[#0a2558] text-white p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
                            <div>
                              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#FFE800] mb-2">Get a quote</p>
                              <p className="font-semibold text-white/90 leading-relaxed">Not sure which of these your building needs? Call (508) 304-2369 or request a free quote.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#E31837] text-white font-extrabold px-5 py-3 rounded-xl hover:bg-[#c1122c] transition-colors text-sm">
                                Request a free quote <ArrowRight className="w-4 h-4" />
                              </Link>
                              <a href="tel:5083042369" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-bold px-5 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm">
                                <PhoneCall className="w-4 h-4" />(508) 304-2369
                              </a>
                            </div>
                          </li>
                        )}
                      </React.Fragment>
                    );
                  })}
                </ol>
              </section>

              {/* Terms */}
              <section id="terms" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">Terms that get used interchangeably and should not be</h2>
                <p className="text-slate-600 font-medium mb-6">{guide.termsIntro}</p>
                <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-extrabold w-[20%]">Term</th>
                        <th scope="col" className="px-4 py-3 font-extrabold w-[42%]">What it means</th>
                        <th scope="col" className="px-4 py-3 font-extrabold">Where it applies</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {guide.terms.map(row => (
                        <tr key={row.term} className="even:bg-slate-50/70 align-top">
                          <th scope="row" className="px-4 py-3 font-bold text-slate-900">{row.term}</th>
                          <td className="px-4 py-3 text-slate-600 font-medium">{row.means}</td>
                          <td className="px-4 py-3 text-slate-600 font-medium">{row.applies}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <dl className="md:hidden space-y-3">
                  {guide.terms.map(row => (
                    <div key={row.term} className="rounded-xl bg-white border border-slate-200 p-4">
                      <dt className="font-extrabold text-slate-900">{row.term}</dt>
                      <dd className="text-sm text-slate-600 font-medium mt-1.5">{row.means}</dd>
                      <dd className="text-xs text-slate-500 font-semibold mt-1.5">Applies: {row.applies}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              {/* How to choose */}
              <section id="how-to-choose" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">How to choose the right types for your building</h2>
                <ol className="grid sm:grid-cols-2 gap-4">
                  {guide.steps.map((s, i) => (
                    <li key={s.title} className="rounded-2xl bg-white border border-slate-200 p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-lg bg-[#0090c8]/10 text-[#0090c8] font-black flex items-center justify-center shrink-0">{i + 1}</span>
                        <h3 className="font-extrabold text-slate-900 leading-tight">{s.title}</h3>
                      </div>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed">{s.text}</p>
                    </li>
                  ))}
                </ol>
              </section>

              {/* About */}
              <section id="about" className="scroll-mt-28 rounded-2xl bg-white border border-slate-200 p-6 sm:p-7">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">About Enterprise Cleaning Corporation</h2>
                <p className="text-slate-600 font-medium leading-relaxed">{guide.about}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm">
                  <Link href="/about" className="font-bold text-[#0090c8] hover:underline inline-flex items-center gap-1">About our team <ArrowRight className="w-3.5 h-3.5" /></Link>
                  <Link href="/success-stories" className="font-bold text-[#0090c8] hover:underline inline-flex items-center gap-1">Client success stories <ArrowRight className="w-3.5 h-3.5" /></Link>
                </div>
              </section>

              {/* FAQs */}
              <section id="faq" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Frequently asked questions</h2>
                <div className="space-y-3">
                  {guide.faqs.map((f, i) => (
                    <details key={f.q} className="group rounded-2xl bg-white border border-slate-200 hover:border-[#0090c8]/30 transition-colors overflow-hidden" open={i === 0}>
                      <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-extrabold text-slate-900 hover:text-[#0090c8] transition-colors text-sm sm:text-base [&::-webkit-details-marker]:hidden">
                        <h3>{f.q}</h3>
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="px-5 pb-5 pt-4 border-t border-slate-100 text-sm text-slate-600 font-medium leading-relaxed">{f.a}</div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Ready to talk */}
              <div className="rounded-2xl bg-[#E31837] text-white p-6 sm:p-8 shadow-lg">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/80 mb-2">Ready to talk</p>
                <p className="text-base sm:text-lg font-semibold leading-relaxed">{guide.readyToTalk}</p>
                <div className="flex flex-col sm:flex-row gap-3 mt-5">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-extrabold px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors">
                    Request a free quote <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:5083042369" className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
                    <PhoneCall className="w-4 h-4" />(508) 304-2369
                  </a>
                </div>
              </div>

              {/* Author bio */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col sm:flex-row gap-5 items-start">
                <Image src={AUTHOR.image} alt={AUTHOR.name} width={72} height={72} className="w-18 h-18 rounded-full object-cover shrink-0 border border-slate-200" />
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">About the author</p>
                  <p className="font-extrabold text-slate-900 text-lg mt-1">{AUTHOR.name}</p>
                  <p className="text-sm text-[#0090c8] font-bold">{AUTHOR.jobTitle}, Enterprise Cleaning Corporation</p>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed mt-2">
                    {AUTHOR.name} is {AUTHOR.jobTitle} at Enterprise Cleaning Corporation and a direct point of contact for facility managers who want a walkthrough or quote.
                  </p>
                  <Link href={AUTHOR.href} className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#0090c8] hover:underline">
                    Contact {AUTHOR.name.split(" ")[0]} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* How to cite */}
              <div className="rounded-2xl border-l-4 border-[#0090c8] bg-white border border-slate-200 p-5">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5"><Quote className="w-3.5 h-3.5" />How to cite this page</p>
                <p className="text-sm text-slate-700 font-medium leading-relaxed break-words">
                  {guide.citation} <span className="text-[#0090c8]">{PAGE_URL}</span>
                </p>
              </div>

              {/* Sources */}
              <section id="sources" className="scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">Sources</h2>
                <ul className="space-y-2 text-sm">
                  {guide.sources.map(s => (
                    <li key={s.url} className="flex gap-2">
                      <ExternalLink className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <a href={s.url} target="_blank" rel="noopener" className="font-semibold text-slate-700 hover:text-[#0090c8] break-words">{s.label}</a>
                    </li>
                  ))}
                </ul>
              </section>
            </article>

            {/* Desktop sticky table of contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-5">
                <nav aria-label="Table of contents" className="rounded-2xl bg-white border border-slate-200 p-5">
                  <p className="font-extrabold text-slate-900 mb-3 flex items-center gap-2"><BookOpen className="w-4 h-4 text-[#0090c8]" />Contents</p>
                  <ol className="space-y-2 text-sm">
                    {TOC.map(t => (
                      <li key={t.id}><a href={`#${t.id}`} className="font-semibold text-slate-600 hover:text-[#0090c8]">{t.label}</a></li>
                    ))}
                  </ol>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mt-5 mb-2">Jump to a type</p>
                  <ol className="space-y-1 text-xs max-h-64 overflow-y-auto pr-1">
                    {guide.types.map(t => (
                      <li key={t.n}><a href={`#${typeId(t.n, t.name)}`} className="text-slate-500 hover:text-[#0090c8] font-medium">{t.n}. {t.name}</a></li>
                    ))}
                  </ol>
                </nav>
                <div className="rounded-2xl bg-[#00103A] text-white p-5">
                  <Lightbulb className="w-5 h-5 text-[#FFE800] mb-2" />
                  <p className="font-extrabold leading-snug">Not sure what your building needs?</p>
                  <p className="text-sm text-white/75 mt-1.5 mb-4">We walk your building and write the scope for free.</p>
                  <Link href="/contact" className="inline-flex w-full items-center justify-center gap-2 bg-[#E31837] text-white font-extrabold px-4 py-2.5 rounded-xl hover:bg-[#c1122c] transition-colors text-sm">
                    Free walkthrough <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ─── RELATED SERVICES ─── */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Related services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {RELATED_SERVICES.map(s => (
              <Link key={s.href} href={s.href} className="group rounded-2xl border-2 border-slate-100 hover:border-[#0090c8]/40 hover:shadow-lg transition-all p-6">
                <h3 className="font-extrabold text-slate-900 group-hover:text-[#0090c8] transition-colors">{s.label}</h3>
                <p className="text-sm text-slate-500 font-medium mt-2 leading-relaxed">{s.text}</p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0090c8] mt-4">Learn more <ArrowRight className="w-3 h-3" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
