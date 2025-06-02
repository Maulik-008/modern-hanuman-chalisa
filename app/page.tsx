import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/hero-section";
import CompleteChalisaCard from "@/components/complete-chalisa-card";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hanuman Chalisa - Complete Text in Multiple Languages",
  description:
    "Experience the complete Hanuman Chalisa in Hindi with translations to English, Bengali, Gujarati, and Tamil. Includes verse meanings and audio recitation.",
  keywords: [
    "Hanuman Chalisa",
    "हनुमान चालीसा",
    "Tulsidas",
    "devotional hymn",
    "Lord Hanuman worship",
    "complete text",
    "translations",
  ],
};

export default function Home() {
  return (
    <>
      {/* Schema.org structured data for Hanuman Chalisa */}
      <Script id="structured-data-home" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://hanuman-chalisa.org/"
            },
            "headline": "Hanuman Chalisa - Complete Text with Translations",
            "description": "Experience the complete Hanuman Chalisa in Hindi with translations to English, Bengali, Gujarati, and Tamil. Includes verse meanings and audio recitation.",
            "image": "https://hanuman-chalisa.org/images/hanuman-chalisa-cover.jpg",
            "author": {
              "@type": "Organization",
              "name": "Hanuman Chalisa App"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Hanuman Chalisa App",
              "logo": {
                "@type": "ImageObject",
                "url": "https://hanuman-chalisa.org/logo.png"
              }
            },
            "datePublished": "2023-08-15",
            "dateModified": "2023-09-10"
          }
        `}
      </Script>

      <HeroSection />

      <section className="container px-4 mx-auto py-12">
        <div className="max-w-5xl mx-auto">
          <header className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="font-devanagari">संपूर्ण हनुमान चालीसा</span> -
              Complete Hanuman Chalisa
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Composed by the 16th-century poet Tulsidas, the Hanuman Chalisa is
              a devotional hymn addressed to Lord Hanuman, consisting of 40
              verses.
            </p>
          </header>

          <CompleteChalisaCard />

          <div className="mt-8 text-center">
            <Link href="/languages">
              <Button className="rounded-full bg-[#38bdf8] hover:bg-[#38bdf8]/90 text-white">
                Explore Other Languages
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="benefits-heading"
        className="py-12 bg-[#0b1120]/50"
      >
        <div className="container px-4 mx-auto">
          <header className="text-center mb-10">
            <h2 id="benefits-heading" className="text-3xl font-bold mb-3">
              Benefits of Reciting Hanuman Chalisa
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              According to tradition, reciting Hanuman Chalisa brings numerous
              spiritual and worldly benefits
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-background/30 backdrop-blur-md p-6 rounded-xl border border-border/30 hover:border-[#38bdf8]/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-[#38bdf8]">
                Protection from Evil
              </h3>
              <p className="text-muted-foreground">
                Chanting Hanuman Chalisa is believed to ward off evil spirits
                and negative energies, providing divine protection.
              </p>
            </div>

            <div className="bg-background/30 backdrop-blur-md p-6 rounded-xl border border-border/30 hover:border-[#38bdf8]/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-[#38bdf8]">
                Strength and Courage
              </h3>
              <p className="text-muted-foreground">
                Regular recitation inspires strength, courage, and confidence to
                overcome life&apos;s challenges.
              </p>
            </div>

            <div className="bg-background/30 backdrop-blur-md p-6 rounded-xl border border-border/30 hover:border-[#38bdf8]/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-[#38bdf8]">
                Health and Healing
              </h3>
              <p className="text-muted-foreground">
                Many devotees believe that Hanuman Chalisa has healing
                properties and helps alleviate physical and mental ailments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="call-to-action-heading"
        className="py-16 bg-gradient-to-b from-background to-[#0b1120]/70"
      >
        <div className="container px-4 mx-auto text-center">
          <h2
            id="call-to-action-heading"
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Experience Hanuman Chalisa in Your Language
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover the divine verses of Hanuman Chalisa in multiple languages
            including Bengali, Gujarati, English, and Tamil.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/chalisa">
              <Button variant="default" size="lg" className="rounded-full">
                Hindi (Original)
              </Button>
            </Link>
            <Link href="/languages/english">
              <Button variant="outline" size="lg" className="rounded-full">
                English
              </Button>
            </Link>
            <Link href="/languages/bengali">
              <Button variant="outline" size="lg" className="rounded-full">
                Bengali
              </Button>
            </Link>
            <Link href="/languages/gujarati">
              <Button variant="outline" size="lg" className="rounded-full">
                Gujarati
              </Button>
            </Link>
            <Link href="/languages/tamil">
              <Button variant="outline" size="lg" className="rounded-full">
                Tamil
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
