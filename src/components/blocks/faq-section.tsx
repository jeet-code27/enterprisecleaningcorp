import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas does Enterprise Cleaning serve?",
    answer: "Enterprise Cleaning Corporation provides commercial cleaning and janitorial services across Worcester and Central Massachusetts, with service throughout Rhode Island and New Hampshire."
  },
  {
    question: "What makes Enterprise different from other Worcester cleaning companies?",
    answer: "A 97% client retention rate, four Worcester Business Journal “Best of Business” awards, 23+ years in business, direct owner accountability, and an in-house team that is never subcontracted."
  },
  {
    question: "Does Enterprise handle emergency water and flood damage?",
    answer: "Yes. Its 24/7 emergency division is certified for water/flood and mold remediation, and works directly with insurers for rapid recovery."
  },
  {
    question: "How long has Enterprise Cleaning been in business?",
    answer: "Enterprise has operated since 2003 — 23+ years serving Central Massachusetts — and has been BBB-accredited since 2007."
  },
  {
    question: "What types of facilities does Enterprise clean?",
    answer: "Offices, healthcare and life-sciences facilities, schools, banks, manufacturing plants, and commercial properties / CRE managed by property and facility managers."
  },
  {
    question: "What commercial cleaning services does Enterprise Cleaning provide?",
    answer: "We provide a full range of commercial cleaning services, including nightly and day shift janitorial, floor care, deep cleaning, disinfection, turnover cleaning, post-construction cleaning, and 24/7 emergency water and flood cleanup, across Central Massachusetts, Rhode Island, and Southern New Hampshire."
  },
  {
    question: "What makes Enterprise a different kind of cleaning company?",
    answer: "Enterprise Cleaning Corporation is owner-operated, not a franchise. We never subcontract accounts, we manage our own crews, and our 97% client retention rate means clients simply do not have a reason to switch cleaning companies."
  },
  {
    question: "Is there a commercial cleaning company near me in Central Massachusetts?",
    answer: "Yes. We are based in West Boylston, MA and serve Worcester and every surrounding Central Massachusetts community, along with Rhode Island and Southern New Hampshire."
  },
  {
    question: "Do you provide ongoing janitorial services or only one-time cleans?",
    answer: "Both. Most clients are on a recurring nightly or day-and-night janitorial contract, and we also handle one-time deep cleans, turnovers, and post-construction jobs."
  },
  {
    question: "Do you provide office cleaning for both small offices and large corporate spaces?",
    answer: "Yes. We clean single-suite offices and large corporate headquarters alike, scaling the crew size and schedule to fit the size of the space."
  },
  {
    question: "How is Enterprise different from other commercial cleaning companies in the area?",
    answer: "Unlike price-led or franchise competitors, we offer direct owner accountability, a 97% retention rate, four Worcester Business Journal awards, and a full in-house emergency cleanup division — all under one roof."
  },
  {
    question: "What's typically included in commercial janitorial service?",
    answer: "A standard commercial janitorial program covers trash removal, restroom sanitizing and restocking, floor care, breakroom cleaning, dusting, and disinfecting of high-touch surfaces, on a nightly or day-and-night schedule."
  },
  {
    question: "Do you provide construction cleaning services for contractors and developers?",
    answer: "Yes. We provide rough, final, and touch-up post-construction cleaning for contractors, developers, and building owners across the region."
  },
  {
    question: "Do you offer commercial floor waxing and stripping?",
    answer: "Yes. Our floor care division handles stripping, waxing, buffing, and ongoing maintenance for VCT, hardwood, and other hard-surface flooring in commercial buildings."
  },
  {
    question: "Do you provide warehouse cleaning for distribution and industrial facilities?",
    answer: "Yes. We provide commercial cleaning for warehouses and distribution centers throughout Central Massachusetts, Rhode Island, and Southern New Hampshire, scoped around the size and traffic of each facility."
  },
  {
    question: "Do you offer electrostatic disinfection services?",
    answer: "Yes. Electrostatic disinfection is available as part of our standard or specialty cleaning programs for offices, medical facilities, and any environment that needs an added layer of sanitizing."
  },
  {
    question: "Do you provide medical office cleaning that meets healthcare standards?",
    answer: "Yes. We provide medical and healthcare facility cleaning with hospital-grade disinfection practices and staff trained specifically for compliance-sensitive environments."
  },
  {
    question: "Do you provide hospital janitorial services?",
    answer: "We provide janitorial cleaning for medical offices, clinics, and healthcare-adjacent facilities as part of our medical and healthcare cleaning division, with hospital-grade disinfection standards."
  },
  {
    question: "Do you provide commercial cleaning services in Rhode Island?",
    answer: "Yes. We provide commercial cleaning, janitorial, and emergency cleanup services throughout Rhode Island, including Providence, Cranston, and Pawtucket, in addition to Central Massachusetts and Southern New Hampshire."
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
            Everything you need to know about our commercial cleaning and janitorial services in Central Massachusetts.
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
