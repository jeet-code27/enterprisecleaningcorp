import Script from "next/script";

export function ElfsightReviews() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12">
          <h3 className="mb-4 text-[#00B8FF] text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#00B8FF]"></span>
            Customer Feedback
            <span className="w-8 h-px bg-[#00B8FF]"></span>
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800">
            Trusted by Businesses <span className="text-[#00B8FF]">Across New England</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. See what our satisfied clients have to say about our premium cleaning and janitorial services.
          </p>
        </div>
        
        {/* Elfsight Google Reviews Widget */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="elfsight-app-4c75f82c-f751-4a68-aba6-93e227f2bd72" data-elfsight-app-lazy></div>
        </div>
        
        {/* Load the Elfsight script asynchronously */}
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      </div>
    </section>
  );
}
