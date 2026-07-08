import { MapPin } from "lucide-react";

export function GoogleMapSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 shadow-sm">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#EA4335]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-800">
              Find Us on Google Maps
            </h2>
          </div>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Visit our headquarters at West Boylston, MA — proudly serving MA, RI and Southern NH.
          </p>
        </div>

        <div className="w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-video md:aspect-[21/9]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.241779976411!2d-71.77732379999999!3d42.3373683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3f9e82349f5d1%3A0x548a39c70a7955f9!2sEnterprise%20Cleaning%20and%20Restoration%20Corporation!5e0!3m2!1sen!2sin!4v1782374970550!5m2!1sen!2sin" 
            className="w-full h-full"
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
