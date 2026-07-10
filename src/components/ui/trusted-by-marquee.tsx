import Image from "next/image";

const logos = [
  {
    name: "APDerm",
    src: "/logos/apderm-logo.svg",
    width: 130,
    height: 48,
    darkBg: true,
  },
  {
    name: "The Hanover Insurance Group",
    src: "/logos/the-hanover-insurance-group.svg",
    width: 150,
    height: 48,
  },
  {
    name: "Workers Credit Union",
    src: "/logos/wcu-logo.svg",
    width: 120,
    height: 48,
  },
  {
    name: "Shields Health",
    src: "/logos/shields-health.svg",
    width: 140,
    height: 48,
  },
  {
    name: "Capital Group",
    src: "/logos/capital-group.png",
    width: 130,
    height: 48,
  },
  {
    name: "Millbury Credit Union",
    src: "/logos/millbury.webp",
    width: 130,
    height: 48,
  },
];

export function TrustedByMarquee() {
  // Duplicate logos for seamless infinite scroll
  const doubled = [...logos, ...logos];

  return (
    <div className="w-full bg-white border-b border-gray-100 py-6 overflow-hidden">
      {/* Header */}
      <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-[0.25em] mb-5">
        Trusted by 140+ Central MA Businesses
      </p>

      {/* Marquee wrapper */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
          style={{ background: "linear-gradient(to right, white, transparent)" }} />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
          style={{ background: "linear-gradient(to left, white, transparent)" }} />

        {/* Scrolling track */}
        <div className="flex marquee-track gap-12 items-center">
          {doubled.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center px-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              style={{ minWidth: "120px" }}
            >
              <div className={logo.darkBg ? "bg-slate-800 rounded-lg px-3 py-2" : ""}>
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
