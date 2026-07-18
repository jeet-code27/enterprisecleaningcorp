import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingContact } from "@/components/floating-contact";
import AuthProvider from "@/components/auth-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.enterprisecleaningcorp.com"),
  title: {
    default: "Enterprise Cleaning Corp | Commercial Cleaning Services",
    template: "%s | Enterprise Cleaning Corp",
  },
  description: "Enterprise Cleaning Corporation provides professional commercial cleaning, janitorial, and emergency cleanup services in Central MA, Rhode Island & Southern NH.",
  authors: [{ name: "Enterprise Cleaning Corporation" }],
  publisher: "Enterprise Cleaning Corporation",
  creator: "Enterprise Cleaning Corporation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <AuthProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingContact />
        </AuthProvider>
      </body>
    </html>
  );
}
