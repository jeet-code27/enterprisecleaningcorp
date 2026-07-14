import Link from "next/link";
import { HardHat, Stethoscope, Briefcase, GraduationCap, Building2, Package, ArrowRight } from "lucide-react";

export const ALL_INDUSTRIES = [
  { id: "manufacturing", title: "Manufacturing & Industrial", href: "/manufacturing-industrial-cleaning-central-ma", icon: HardHat },
  { id: "medical", title: "Medical & Healthcare", href: "/medical-healthcare-cleaning-central-ma", icon: Stethoscope },
  { id: "office", title: "Offices & Financial", href: "/office-financial-cleaning-central-ma", icon: Briefcase },
  { id: "education", title: "Educational & Municipal", href: "/school-municipal-cleaning-central-ma", icon: GraduationCap },
  { id: "property", title: "Property Management", href: "/property-management-cleaning-central-ma", icon: Building2 },
  { id: "warehouse", title: "Warehouses & Distribution", href: "/warehouse-distribution-cleaning-central-ma", icon: Package },
  { id: "real-estate", title: "Real Estate", href: "/real-estate-cleaning-central-ma", icon: Building2 },
];

export function RelatedIndustries({ industryIds, title = "Industries We Serve" }: { industryIds: string[], title?: string }) {
  const displayIndustries = ALL_INDUSTRIES.filter(ind => industryIds.includes(ind.id));

  if (displayIndustries.length === 0) return null;

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00103A] mb-4">{title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide specialized cleaning programs tailored to the unique compliance and operational needs of these facilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayIndustries.map((industry) => (
            <Link key={industry.id} href={industry.href} className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-slate-100 transition-all flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <industry.icon className="w-6 h-6 text-[#0090c8]" />
              </div>
              <h3 className="font-bold text-[#00103A] mb-2">{industry.title}</h3>
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
