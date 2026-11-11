import type { Metadata } from "next";

// Keeps the thank-you page from inheriting the quote page's title and canonical.
export const metadata: Metadata = {
  title: { absolute: "Thank You | Enterprise Cleaning Corp" },
  description: "Thank you for requesting a commercial cleaning quote from Enterprise Cleaning Corporation. Our team will contact you shortly to schedule your walkthrough.",
  alternates: {
    canonical: "https://www.enterprisecleaningcorp.com/commercial-cleaning-quote/thank-you",
  },
  openGraph: {
    title: "Thank You | Enterprise Cleaning Corp",
    url: "https://www.enterprisecleaningcorp.com/commercial-cleaning-quote/thank-you",
  },
};

export default function QuoteThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
