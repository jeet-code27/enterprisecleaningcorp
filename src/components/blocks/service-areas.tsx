import { MapPin } from "lucide-react";

const locations = [
  "Worcester, MA",
  "Shrewsbury",
  "Auburn",
  "Holden",
  "Westborough",
  "West Boylston",
  "Central Massachusetts",
  "Springfield, MA",
  "Providence, RI",
  "Manchester, NH"
];

export function ServiceAreas() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Subtle Dot Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#00B8FF 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
      
      {/* Soft glowing orb in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00B8FF]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        
        <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-red-50 border border-red-100">
          <MapPin className="size-4 text-[#E31837]" />
          <h5 className="text-[#E31837] font-bold tracking-widest uppercase text-xs md:text-sm">Where We Work</h5>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-12 tracking-tight">
          Proudly Serving <span className="text-[#00B8FF]">Worcester & Beyond</span>
        </h2>
        
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {locations.map((loc, idx) => (
            <div 
              key={idx} 
              className="px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-700 font-bold text-sm md:text-base shadow-sm hover:border-[#00B8FF] hover:text-[#00B8FF] hover:shadow-[0_8px_30px_rgba(0,184,255,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-default flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFE800]"></span>
              {loc}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
