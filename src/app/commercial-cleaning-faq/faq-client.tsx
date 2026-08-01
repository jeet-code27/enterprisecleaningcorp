"use client";

import React, { useState, useMemo } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Search, HelpCircle, Layers, CheckCircle2, ChevronDown, Sparkles } from "lucide-react";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "item-1",
    category: "Vetting & Licensing",
    question: "Is Enterprise Cleaning Corporation licensed and insured?",
    answer:
      "Yes. Enterprise Cleaning Corporation carries general liability insurance and can provide a current certificate of insurance before your service starts. If your building or property management company requires specific coverage limits or additional insured status, just let us know when we quote your account.",
  },
  {
    id: "item-2",
    category: "Vetting & Licensing",
    question: "Do you run background checks on your cleaning staff?",
    answer:
      "Yes. Every member of our cleaning staff goes through a screening process before being placed on an account. Because our crews are in your building after hours, often without anyone else on site, we treat staff vetting as a basic requirement, not an extra.",
  },
  {
    id: "item-3",
    category: "Vetting & Licensing",
    question: "Is our cleaning crew made up of your direct employees, or do you use subcontractors?",
    answer:
      "Your account is staffed and managed directly by Enterprise Cleaning. Steve and Julio, the company's owners, are personally involved in staffing and account oversight, so you're not routed through a rotating subcontractor network or a call center.",
  },
  {
    id: "item-4",
    category: "Vetting & Licensing",
    question: "How do you keep the same crew on our account instead of rotating staff?",
    answer:
      "Consistent staffing comes from direct owner involvement. Because Steve and Julio are hands-on with account management, they can address staffing issues quickly instead of letting a crew turn over quietly, which is part of why Enterprise Cleaning maintains a 97% client retention rate.",
  },
  {
    id: "item-5",
    category: "Vetting & Licensing",
    question: "Can you provide references from businesses similar to ours?",
    answer:
      "Yes. Enterprise Cleaning has worked with regional organizations such as MacIntire Insurance and the Worcester Club, and we're glad to connect you with clients in your industry or of similar size so you can ask about their experience directly.",
  },
  {
    id: "item-6",
    category: "Services & Scope",
    question: "What's included in your nightly commercial cleaning service?",
    answer:
      "Nightly service typically covers trash and recycling removal, restroom cleaning and restocking, breakroom cleaning, vacuuming and floor care, dusting, and cleaning of common areas and entryways. We build the exact scope around your building's layout and hours during your walkthrough.",
  },
  {
    id: "item-7",
    category: "Services & Scope",
    question: "Can you build a custom cleaning program, or is it a standard checklist for every building?",
    answer:
      "Every facility gets a program built around its own traffic patterns, industry, and schedule. A medical office, a manufacturing floor, and a corporate headquarters all have different needs, and we scope your service accordingly rather than applying one generic checklist.",
  },
  {
    id: "item-8",
    category: "Services & Scope",
    question: "Do you offer daytime coverage in addition to nightly cleaning?",
    answer:
      "Yes. In addition to nightly janitorial service, we offer day porter coverage for lobbies, restrooms, conference rooms, and other high-traffic common areas that need attention during business hours.",
  },
  {
    id: "item-9",
    category: "Operations & Management",
    question: "How do you handle communication if something comes up outside our regular schedule?",
    answer:
      "You get a direct line to the people who run the company. With Enterprise Cleaning, you have Steve and Julio's direct contact information, not a ticket number in a franchise system, so issues get addressed by someone who can actually make a decision.",
  },
  {
    id: "item-10",
    category: "Services & Scope",
    question: "Can you coordinate cleaning across multiple buildings or a full office park?",
    answer:
      "Yes. We serve corporate campuses and multi-building office parks across Central Massachusetts, Rhode Island, and Southern New Hampshire, and we can coordinate scheduling and staffing across all your locations so standards stay consistent building to building.",
  },
  {
    id: "item-11",
    category: "Services & Scope",
    question: "Do you have experience cleaning facilities like ours?",
    answer:
      "Enterprise Cleaning serves manufacturing and industrial facilities, medical and healthcare offices, corporate and financial offices, schools and municipal buildings, property management portfolios, and warehouses and distribution centers, so we've likely worked with a facility similar to yours already.",
  },
  {
    id: "item-12",
    category: "Services & Scope",
    question: "Do you use environmentally friendly cleaning products?",
    answer:
      "We can build your program around environmentally friendly products and practices on request. If a specific certification or standard matters to your organization's sustainability goals, tell us during the walkthrough and we'll confirm what we can accommodate.",
  },
  {
    id: "item-13",
    category: "Operations & Management",
    question: "What happens if we're not satisfied with the service after we sign a contract?",
    answer:
      "You raise it directly with ownership and it gets fixed. Enterprise Cleaning's 97% client retention rate reflects accounts that stay long term specifically because problems get resolved quickly rather than passed along a chain of managers.",
  },
  {
    id: "item-14",
    category: "Operations & Management",
    question: "How is Enterprise Cleaning different from a national franchise cleaning company?",
    answer:
      "With a franchise, you're often one account among many routed through a central system. With Enterprise Cleaning, you work directly with owners Steve Buchalter and Julio Biage. The company has more than two decades of experience, has won the Worcester Business Journal Best of Business award four times, and has been BBB accredited since 2007.",
  },
];

const categories = [
  "All Questions",
  "Vetting & Licensing",
  "Services & Scope",
  "Operations & Management",
];

export default function FAQAccordionList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Questions");

  const filteredFaqs = useMemo(() => {
    return faqData.filter((faq) => {
      const matchesCategory =
        selectedCategory === "All Questions" || faq.category === selectedCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Search and Category Control Bar */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 md:p-6 space-y-4 shadow-sm">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., insurance, background check, day porter, green products)..."
            className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00B8FF] focus:border-transparent transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold bg-slate-200 hover:bg-slate-300 px-2 py-1 rounded-md transition-colors"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5" /> Category:
          </span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold px-3.5 py-2 rounded-lg transition-all ${
                  isActive
                    ? "bg-[#00B8FF] text-white shadow-md shadow-[#00B8FF]/20"
                    : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between px-1">
        <p className="text-sm font-bold text-slate-600">
          Showing <span className="text-[#00B8FF] font-extrabold">{filteredFaqs.length}</span> of {faqData.length} FAQs
        </p>
        {(searchQuery || selectedCategory !== "All Questions") && (
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Questions");
            }}
            className="text-xs text-[#00B8FF] hover:underline font-bold"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* FAQ Accordions */}
      {filteredFaqs.length > 0 ? (
        <Accordion type="single" collapsible className="space-y-4">
          {filteredFaqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-white border border-slate-200 rounded-2xl px-6 py-2 shadow-sm hover:shadow-md transition-all group border-b-slate-200"
            >
              <AccordionTrigger className="hover:no-underline py-4 text-left font-bold text-slate-900 text-base md:text-lg group-data-[state=open]:text-[#00B8FF] transition-colors">
                <span className="flex items-start gap-3 pr-4">
                  <HelpCircle className="w-5 h-5 text-[#E31837] shrink-0 mt-1" />
                  <span>{faq.question}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-sm md:text-base leading-relaxed pl-8 pt-1 pb-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 font-medium">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="text-center py-12 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
          <HelpCircle className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-700">No matching questions found</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Try adjusting your search query or category filter, or call our team directly at (508) 890-1000 for immediate answers.
          </p>
        </div>
      )}
    </div>
  );
}
