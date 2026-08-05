"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingContact } from "@/components/floating-contact";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const isStandaloneLandingPage = pathname?.startsWith("/commercial-cleaning-quote");

  if (isAdmin || isStandaloneLandingPage) {
    return <main className="flex-1 flex flex-col min-h-screen">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingContact />
    </>
  );
}
