import { MapPin } from "lucide-react";

const locations = [
  "Worcester", "Shrewsbury", "Auburn", "Holden", "Westborough",
  "West Boylston", "Northborough", "Southborough", "Marlborough", "Millbury",
  "Leicester", "Spencer", "Paxton", "Sterling", "Clinton",
  "Lancaster", "Leominster", "Fitchburg", "Gardner", "Grafton",
  "Upton", "Uxbridge", "Whitinsville", "Oxford", "Charlton",
  "Sturbridge", "Webster", "Dudley", "Boylston", "Berlin",
  "Hudson", "Framingham", "Natick", "Providence, RI", "Lowell", "Waltham",
];

export function ServiceAreas() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(to right, #00B8FF, #E31837, #FFE800)" }} />

      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(#00B8FF 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }} />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-red-50 border border-red-100">
            <MapPin className="size-4 text-[#E31837]" />
            <span className="text-[#E31837] font-bold tracking-widest uppercase text-xs">Where We Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Proudly Serving <span className="text-[#00B8FF]">Central MA & Beyond</span>
          </h2>
          <p className="mt-4 text-slate-500 font-medium max-w-xl mx-auto text-sm md:text-base">
            From Worcester to Rhode Island — trusted by 140+ businesses across the region.
          </p>
        </div>

        {/* Grid — 2 cols mobile, 3 cols tablet, 5 cols desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl hover:border-[#00B8FF]/40 hover:bg-[#00B8FF]/5 transition-all duration-200 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B8FF] shrink-0 group-hover:bg-[#E31837] transition-colors" />
              <span className="text-slate-700 font-semibold text-xs md:text-sm leading-tight truncate">
                {loc}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-400 text-xs mt-8 font-medium">
          Don't see your city? <a href="/contact" className="text-[#00B8FF] font-bold hover:underline">Contact us</a> — we likely service your area.
        </p>

      </div>
    </section>
  );
}
