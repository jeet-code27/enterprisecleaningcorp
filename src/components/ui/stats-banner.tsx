import React from "react"

const STATS = [
  { value: "165+", label: "Recurring Customers", description: "165+ active janitorial recurring clients" },
  { value: "500+", label: "Yearly Projects", description: "over 500 specialized facility projects completed annually" },
  { value: "10,000s", label: "Satisfied Customers", description: "proud history of tens of thousands served" },
  { value: "97%", label: "Client Retention", description: "your cleaning team stays consistent, year after year" },
  { value: "23+ yrs", label: "Serving Central MA", description: "owner-accountable & in-house since 2003" },
];

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
              <span 
                className={`font-black tracking-tight whitespace-nowrap ${
                  stat.value.length > 8 
                    ? "text-xl sm:text-2xl lg:text-3xl" 
                    : "text-3xl md:text-4xl"
                }`} 
                style={{ color: "#00B8FF" }}
              >
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
