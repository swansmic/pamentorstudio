import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pamentorstudio.com"),
  title: {
    default: "PA Mentor Studio — Strategic PA School Admissions Mentorship",
    template: "%s | PA Mentor Studio",
  },
  description:
    "Longitudinal PA school admissions mentorship from an experienced admissions committee chair. Structured guidance for serious applicants.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pamentorstudio.com",
    siteName: "PA Mentor Studio",
    title: "PA Mentor Studio — Strategic PA School Admissions Mentorship",
    description:
      "Longitudinal PA school admissions mentorship from an experienced admissions committee chair. Structured guidance for serious applicants.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PA Mentor Studio — Strategic PA School Admissions Mentorship",
    description:
      "Longitudinal PA school admissions mentorship from an experienced admissions committee chair.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
