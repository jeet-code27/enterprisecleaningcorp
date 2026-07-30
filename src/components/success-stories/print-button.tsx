"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#003057] text-white text-xs sm:text-sm font-bold hover:bg-[#002244] active:scale-95 transition-all shadow-md cursor-pointer"
    >
      <Printer className="w-4 h-4 text-[#FFE800]" />
      <span>Print / Download PDF</span>
    </button>
  );
}
