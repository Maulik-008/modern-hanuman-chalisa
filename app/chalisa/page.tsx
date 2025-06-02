import Link from "next/link";
import { chalisa, doha, closingDoha } from "@/lib/chalisa-data";
import VerseCard from "@/components/verse-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Share2 } from "lucide-react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hanuman Chalisa - Complete Original Text with Meanings",
  description:
    "Read the complete Hanuman Chalisa with verse-by-verse meaning and translations. Original text in Hindi with Devanagari script and romanized transliteration.",
  keywords: [
    "Hanuman Chalisa",
    "हनुमान चालीसा",
    "Tulsidas",
    "Original text",
    "Verse meanings",
    "Hindi",
    "Sanskrit",
    "Religious hymn",
    "Lord Hanuman",
  ],
  alternates: {
    canonical: "/chalisa",
    languages: {
      "hi-IN": "/chalisa",
      "en-US": "/languages/english",
    },
  },
  openGraph: {
    title: "Hanuman Chalisa - Complete Original Text with Meanings",
    description:
      "Read the complete Hanuman Chalisa with verse-by-verse meaning and translations. Original text in Hindi with Devanagari script and romanized transliteration.",
    url: "/chalisa",
    type: "article",
  },
};

export default function ChalisaPage() {
  return (
    <>
      {/* Schema.org structured data for Hanuman Chalisa content */}
      <Script id="structured-data-chalisa" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://hanuman-chalisa.org/chalisa"
            },
            "headline": "Hanuman Chalisa - Complete Original Text with Meanings",
            "description": "Read the complete Hanuman Chalisa with verse-by-verse meaning and translations. Original text in Hindi with Devanagari script and romanized transliteration.",
            "image": "https://hanuman-chalisa.org/images/hanuman-chalisa-cover.jpg",
            "author": {
              "@type": "Person",
              "name": "Tulsidas"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Hanuman Chalisa App",
              "logo": {
                "@type": "ImageObject",
                "url": "https://hanuman-chalisa.org/logo.png"
              }
            },
            "datePublished": "1600-01-01",
            "dateModified": "2023-09-10",
            "inLanguage": "hi-IN"
          }
        `}
      </Script>

      {/* Background decorative elements */}
      <div className="relative">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7233120/pexels-photo-7233120.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent z-0"></div>

        <article className="pt-20 pb-16 relative z-10">
          <div className="container px-4 mx-auto">
            <nav
              className="flex items-center justify-between mb-6"
              aria-label="Breadcrumb"
            >
              <Link href="/">
                <Button variant="ghost" size="sm" className="rounded-full">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "Hanuman Chalisa",
                      text: "Read the complete Hanuman Chalisa with meanings",
                      url: window.location.href,
                    });
                  }
                }}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </nav>

            <header className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="font-devanagari text-4xl md:text-5xl font-bold mb-4 text-primary">
                हनुमान चालीसा
              </h1>
              <h2 className="font-orbitron text-xl md:text-2xl mb-6 text-[#38bdf8]">
                HANUMAN CHALISA
              </h2>
              <p className="text-muted-foreground">
                A devotional hymn dedicated to Lord Hanuman, composed by the
                16th-century poet Tulsidas in the Awadhi language.
              </p>
            </header>

            <div className="max-w-3xl mx-auto space-y-6">
              {/* Doha section */}
              <section aria-labelledby="opening-doha-heading" className="mb-12">
                <h2
                  id="opening-doha-heading"
                  className="font-orbitron text-2xl text-center mb-6 text-[#38bdf8]"
                >
                  Opening Doha (Couplets)
                </h2>
                <div className="space-y-6">
                  {doha.map((verse, index) => (
                    <VerseCard
                      key={`doha-${index}`}
                      verse={verse}
                      index={index}
                    />
                  ))}
                </div>
              </section>

              {/* Main Chalisa section */}
              <section aria-labelledby="chaupai-heading" className="mb-12">
                <h2
                  id="chaupai-heading"
                  className="font-orbitron text-2xl text-center mb-6 text-[#38bdf8]"
                >
                  Chaupai (Quatrains)
                </h2>
                <div className="space-y-6">
                  {chalisa.map((verse, index) => (
                    <VerseCard
                      key={`chalisa-${index}`}
                      verse={verse}
                      index={index}
                    />
                  ))}
                </div>
              </section>

              {/* Closing Doha section */}
              <section aria-labelledby="closing-doha-heading">
                <h2
                  id="closing-doha-heading"
                  className="font-orbitron text-2xl text-center mb-6 text-[#38bdf8]"
                >
                  Closing Doha
                </h2>
                <div className="space-y-6">
                  {closingDoha.map((verse, index) => (
                    <VerseCard
                      key={`closing-doha-${index}`}
                      verse={verse}
                      index={index}
                    />
                  ))}
                </div>
              </section>

              <div className="pt-8 mt-8 border-t border-border/20 flex justify-center">
                <div className="flex flex-wrap gap-4">
                  <Link href="/languages">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      Other Languages
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      Home
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
