import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fall Facility Cleaning Assessment │ On-Site Facility Review",
  description: "Claim your complimentary Fall Facility Cleaning Assessment from Enterprise Cleaning Corporation. Commercial cleaning, floor care, and seasonal disinfection across Central MA, RI & Southern NH.",
  keywords: "fall cleaning commercial assessment, facility cleaning audit, office cleaning Central MA, healthcare cleaning, warehouse cleaning, commercial cleaning offer",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/fall-cleaning-assessment",
  },
  openGraph: {
    title: "Get Your Fall Cleaning Done | Facility Cleaning Assessment",
    description: "Prepare your commercial facility for the autumn and winter months. Complimentary on-site cleaning assessment by Enterprise Cleaning Corporation.",
    url: "https://www.enterprisecleaningcorp.com/fall-cleaning-assessment",
    siteName: "Enterprise Cleaning Corporation",
    images: [
      {
        url: "/images/fall-cleaning-assessment-offer.jpg",
        width: 1200,
        height: 900,
        alt: "Enterprise Cleaning Corporation Fall Cleaning Assessment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Your Fall Cleaning Done | Facility Cleaning Assessment",
    description: "Complimentary on-site commercial cleaning assessment by Enterprise Cleaning Corporation.",
    images: ["/images/fall-cleaning-assessment-offer.jpg"],
  },
};

export default function FallCleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
