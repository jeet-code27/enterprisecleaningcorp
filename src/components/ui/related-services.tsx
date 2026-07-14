import Link from "next/link";
import { Sparkles, Building2, Droplets, SprayCan, Wind, ArrowRight } from "lucide-react";

export const ALL_SERVICES = [
  { id: "nightly", title: "Night & Day Cleaning", href: "/nightly-janitorial-cleaning-central-ma", icon: Building2 },
  { id: "floor", title: "Floor Care Services", href: "/floor-care-services-central-ma", icon: Sparkles },
  { id: "specialty", title: "Deep Cleaning", href: "/specialty-cleaning-services-central-ma", icon: Sparkles },
  { id: "emergency", title: "Flood Cleanup", href: "/emergency-restoration-services-central-ma", icon: Wind },
  { id: "turnover", title: "Turnover Cleaning", href: "/turnover-cleaning-central-ma", icon: Droplets },
  { id: "post-construction", title: "Post Construction", href: "/post-construction-cleaning-central-ma", icon: SprayCan },
];

export function RelatedServices({ serviceIds, title = "Related Cleaning Services" }: { serviceIds: string[], title?: string }) {
  const displayServices = ALL_SERVICES.filter(srv => serviceIds.includes(srv.id));

  if (displayServices.length === 0) return null;

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00103A] mb-4">{title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our comprehensive suite of commercial cleaning solutions designed for your facility.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayServices.map((service) => (
            <Link key={service.id} href={service.href} className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-slate-100 transition-all flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-[#0090c8]" />
              </div>
              <h3 className="font-bold text-[#00103A] mb-2">{service.title}</h3>
              <span className="text-sm font-semibold text-[#E31837] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
