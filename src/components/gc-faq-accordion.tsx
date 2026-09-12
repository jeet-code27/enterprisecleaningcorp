"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { gcPostConstructionFaqs } from "@/lib/gc-faqs";

export function GcFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {gcPostConstructionFaqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden bg-white dark:bg-[#0a192f]/60 backdrop-blur-sm transition-all duration-200 hover:border-[#0090c8]/40 shadow-sm"
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-slate-900 dark:text-white"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-[#0090c8] shrink-0" />
                <span>{faq.question}</span>
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-180 text-[#0090c8]" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 animate-fade-in">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
