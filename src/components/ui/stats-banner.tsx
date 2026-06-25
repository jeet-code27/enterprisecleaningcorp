import React from "react"

const STATS = [
  { value: "97%", label: "Client retention", description: "your cleaning team stays consistent, year after year" },
  { value: "22 yrs", label: "Serving Central MA since 2003", description: "owner-accountable, never outsourced" },
  { value: "24/7", label: "Emergency Response", description: "water, fire, mold & biohazard restoration division" },
  { value: "BBB", label: "Accredited since 2007", description: "18+ years of verified trust" },
  { value: "In-house", label: "Dedicated Teams", description: "No subcontractors used" },
]

export function StatsBanner() {
  return (
    <div className="w-full py-16 md:py-20 relative overflow-hidden bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: "#00B8FF" }}>
            Why Facility Managers Choose Us
          </h2>
          <div className="w-16 h-1 bg-[#E31837] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-start text-center space-y-2">
              <span className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: "#00B8FF" }}>
                {stat.value}
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-xs md:text-sm font-extrabold uppercase tracking-wide text-slate-800">
                  {stat.label}
                </span>
                {stat.description && (
                  <span className="text-[11px] md:text-xs font-medium text-slate-500 max-w-[180px] leading-snug">
                    {stat.description}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
