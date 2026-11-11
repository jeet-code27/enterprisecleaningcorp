import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Free Commercial Cleaning Quote | Enterprise Cleaning Corp" },
  description: "Request a free commercial cleaning quote in Worcester and Central MA. Free on-site walkthrough, written scope and price, no obligation. Call 508-304-2369.",
  keywords: "commercial cleaning quote, free cleaning quote, janitorial services quote, office cleaning quote Worcester MA, commercial cleaning estimate Central MA",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-quote",
  },
  openGraph: {
    title: "Free Commercial Cleaning Quote | Enterprise Cleaning Corp",
    description: "Request a free commercial cleaning quote in Worcester and Central MA. Free on-site walkthrough, written scope and price, no obligation. Call 508-304-2369.",
    url: "https://www.enterprisecleaningcorp.com/commercial-cleaning-quote",
    siteName: "Enterprise Cleaning Corporation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Commercial Cleaning Quote | Enterprise Cleaning Corp",
    description: "Request a free commercial cleaning quote in Worcester and Central MA. Free on-site walkthrough, written scope and price, no obligation. Call 508-304-2369.",
  },
};

export default function CommercialCleaningQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
