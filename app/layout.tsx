import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HANDLY | Africa's Premier Freelancer Marketplace",
  description: "Hire Africa's best talent or sell your skills. HANDLY connects 50K+ freelancers with leading businesses across 15 countries. Secure payments. Instant matching. Real results.",
  keywords: "freelance, talent marketplace, Africa, remote work, hiring, jobs, gig economy",
  authors: [{ name: "HANDLY" }],
  openGraph: {
    title: "HANDLY - Work Worth Doing",
    description: "Africa's premier talent marketplace. 50K+ freelancers. 15 countries. Secure payments. Instant matching.",
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
