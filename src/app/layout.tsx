import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/constants";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description
  },
  alternates: {
    canonical: siteConfig.url
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${manrope.variable} ${cormorant.variable} bg-background font-sans text-foreground antialiased`}
      >
        <div className="min-h-screen bg-black">
          <SiteHeader />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
