import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import Script from "next/script";
import { spaceGrotesk, orbitron, notoSansDevanagari } from "@/lib/fonts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://hanuman-chalisa.org"
  ),
  title: {
    default: "Hanuman Chalisa - Complete Text in Multiple Languages",
    template: "%s | Hanuman Chalisa",
  },
  description:
    "Read, recite and understand Hanuman Chalisa in Hindi, English, Bengali, Gujarati, Tamil and more languages. Complete with meanings, translations and audio.",
  keywords: [
    "Hanuman Chalisa",
    "हनुमान चालीसा",
    "Tulsidas",
    "devotional hymn",
    "Lord Hanuman",
    "Hindu prayer",
    "spiritual",
    "religious text",
    "Sanskrit",
    "Hindi prayer",
  ],
  authors: [{ name: "Hanuman Chalisa App" }],
  creator: "Hanuman Chalisa App",
  publisher: "Hanuman Chalisa App",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/languages/english",
      "bn-IN": "/languages/bengali",
      "gu-IN": "/languages/gujarati",
      "ta-IN": "/languages/tamil",
      "hi-IN": "/chalisa",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Hanuman Chalisa - Complete Text in Multiple Languages",
    description:
      "Read, recite and understand Hanuman Chalisa in Hindi, English, Bengali, Gujarati, Tamil and more languages. Complete with meanings, translations and audio.",
    siteName: "Hanuman Chalisa",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hanuman Chalisa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanuman Chalisa - Complete Text in Multiple Languages",
    description:
      "Read, recite and understand Hanuman Chalisa in Hindi, English, Bengali, Gujarati, Tamil and more languages. Complete with meanings, translations and audio.",
    images: ["/images/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
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
  category: "spirituality",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} ${orbitron.variable} ${notoSansDevanagari.variable} font-sans bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>

        {/* Schema.org structured data */}
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Hanuman Chalisa",
              "url": "${
                process.env.NEXT_PUBLIC_BASE_URL ||
                "https://hanuman-chalisa.org"
              }",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "${
                  process.env.NEXT_PUBLIC_BASE_URL ||
                  "https://hanuman-chalisa.org"
                }/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "description": "Read, recite and understand Hanuman Chalisa in Hindi, English, Bengali, Gujarati, Tamil and more languages. Complete with meanings, translations and audio."
            }
          `}
        </Script>
      </body>
    </html>
  );
}
