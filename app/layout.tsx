import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Script from "next/script";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HANDLY | Trusted Help, One Tap Away",
  description: "Book verified plumbers, electricians, cleaners, and more — instantly or by posting a job. HANDLY connects customers with trusted skilled workers across Nigeria.",
  keywords: "handyman, artisan, services marketplace, Nigeria, plumber, electrician, cleaner, hire workers, skilled work",
  authors: [{ name: "HANDLY" }],
  openGraph: {
    title: "HANDLY - Work Worth Doing",
    description: "Book verified skilled workers instantly or post a job and compare offers. Africa's trusted services marketplace, starting in Nigeria.",
    url: "https://handly.africa",
    type: "website",
    locale: "en_US",
    siteName: "HANDLY",
    images: [
      {
        url: "https://handly.africa/og-image.png",
        width: 1200,
        height: 630,
        alt: "HANDLY - Africa's Talent Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HANDLY - Work Worth Doing",
    description: "Africa's premier talent marketplace",
    creator: "@handlyafrica",
    images: ["https://handly.africa/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "google_site_verification",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Structured Data - Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />

        {/* Structured Data - Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebsiteSchema()),
          }}
        />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="ga-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
