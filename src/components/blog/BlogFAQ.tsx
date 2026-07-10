"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

export function BlogFAQ({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-border">
      <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center lg:text-left">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border rounded-xl transition-colors duration-200 overflow-hidden ${
              openIndex === index ? "border-brand-blue bg-brand-blue/5" : "border-border bg-card hover:bg-muted/50"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <span className={`font-semibold text-lg pr-8 ${openIndex === index ? "text-brand-blue" : "text-brand-navy"}`}>
                {faq.question}
              </span>
              <ChevronDown 
                className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "text-brand-blue rotate-180" : "text-muted-foreground"
                }`} 
              />
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
