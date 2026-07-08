import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas does Enterprise Cleaning serve?",
    answer: "Enterprise Cleaning Corporation provides commercial cleaning and restoration across Worcester and Central Massachusetts, with service throughout Rhode Island and New Hampshire."
  },
  {
    question: "What makes Enterprise different from other Worcester cleaning companies?",
    answer: "A 97% client retention rate, four Worcester Business Journal “Best of Business” awards, 23+ years in business, direct owner accountability, and an in-house team that is never subcontracted."
  },
  {
    question: "Does Enterprise handle emergency water and flood damage?",
    answer: "Yes. Its 24/7 restoration division is certified for water/flood and mold remediation, and works directly with insurers for rapid recovery."
  },
  {
    question: "How long has Enterprise Cleaning been in business?",
    answer: "Enterprise has operated since 2003 — 23+ years serving Central Massachusetts — and has been BBB-accredited since 2007."
  },
  {
    question: "What types of facilities does Enterprise clean?",
    answer: "Offices, healthcare and life-sciences facilities, schools, banks, manufacturing plants, and commercial properties / CRE managed by property and facility managers."
  }
];

export function FAQSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-200/40 blur-[120px]" />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-[#0090c8] text-sm font-bold uppercase tracking-wider mb-6">
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#00103A] mb-6 tracking-tight">
            Frequently Asked <span className="text-[#0090c8]">Questions</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Everything you need to know about our commercial cleaning and restoration services in Central Massachusetts.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-xl shadow-blue-900/5 border border-slate-100">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-slate-100 last:border-0"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-bold text-[#00103A] hover:text-[#0090c8] hover:no-underline transition-colors [&[data-state=open]]:text-[#0090c8] py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base md:text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Additional CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 font-medium mb-4 text-lg">Have another question?</p>
          <a href="tel:5088901000" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#0090c8] text-white font-bold text-lg hover:bg-[#007aa8] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
            Call Us Now: (508) 890-1000
          </a>
        </div>
      </div>
    </section>
  );
}
