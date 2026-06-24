import React from "react"

const STATS = [
  { value: "1500+", label: "Happy Customers" },
  { value: "100%", label: "Service Guarantee" },
  { value: "25", label: "Cleaners" },
  { value: "1500+", label: "Cleans Completed" },
]

export function StatsBanner() {
  return (
    <div className="w-full py-12 md:py-16 relative overflow-hidden">
      {/* Subtle decorative accents */}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#0B1E36" }}>
            Happy Customers, Happy Homes
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center space-y-2">
              <span className="text-4xl md:text-5xl font-black" style={{ color: "#00B8FF" }}>
                {stat.value}
              </span>
              <span className="text-sm md:text-base font-semibold uppercase tracking-wider" style={{ color: "#4a6178" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
