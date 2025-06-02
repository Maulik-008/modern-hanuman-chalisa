import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Languages } from "lucide-react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Hanuman Chalisa in Multiple Languages | Sanskrit, Hindi, English, Bengali, Gujarati, Tamil",
  description:
    "Read and recite Hanuman Chalisa in multiple languages including Hindi, English, Bengali, Gujarati, and Tamil. Complete translations with accurate meaning and proper pronunciation.",
  keywords: [
    "Hanuman Chalisa translations",
    "multiple languages",
    "हनुमान चालीसा",
    "Bengali Hanuman Chalisa",
    "Gujarati Hanuman Chalisa",
    "English Hanuman Chalisa",
    "Tamil Hanuman Chalisa",
  ],
  alternates: {
    canonical: "/languages",
    languages: {
      "en-US": "/languages/english",
      "bn-IN": "/languages/bengali",
      "gu-IN": "/languages/gujarati",
      "ta-IN": "/languages/tamil",
      "hi-IN": "/chalisa",
    },
  },
  openGraph: {
    title: "Hanuman Chalisa in Multiple Languages",
    description:
      "Read and recite Hanuman Chalisa in multiple languages including Hindi, English, Bengali, Gujarati, and Tamil. Complete translations with accurate meaning and proper pronunciation.",
    url: "/languages",
  },
};

const languages = [
  {
    name: "Hindi",
    description: "The original Hanuman Chalisa in Devanagari script",
    path: "/chalisa",
    featured: true,
    langCode: "hi",
    hreflang: "hi-IN",
  },
  {
    name: "Bengali",
    description:
      "Hanuman Chalisa translated in Bengali with accurate pronunciation",
    path: "/languages/bengali",
    featured: false,
    langCode: "bn",
    hreflang: "bn-IN",
  },
  {
    name: "Gujarati",
    description:
      "Hanuman Chalisa translated in Gujarati with proper verse meanings",
    path: "/languages/gujarati",
    featured: false,
    langCode: "gu",
    hreflang: "gu-IN",
  },
  {
    name: "English",
    description:
      "Hanuman Chalisa translated in English with detailed explanations",
    path: "/languages/english",
    featured: false,
    langCode: "en",
    hreflang: "en-US",
  },
  {
    name: "Tamil",
    description:
      "Hanuman Chalisa translated in Tamil with accurate transliteration",
    path: "/languages/tamil",
    featured: false,
    langCode: "ta",
    hreflang: "ta-IN",
  },
];

export default function LanguagesPage() {
  return (
    <>
      {/* Schema.org structured data for language listings */}
      <Script id="structured-data-languages" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://hanuman-chalisa.org/languages"
            },
            "headline": "Hanuman Chalisa in Multiple Languages",
            "description": "Read and recite Hanuman Chalisa in multiple languages including Hindi, English, Bengali, Gujarati, and Tamil.",
            "publisher": {
              "@type": "Organization",
              "name": "Hanuman Chalisa App",
              "logo": {
                "@type": "ImageObject",
                "url": "https://hanuman-chalisa.org/logo.png"
              }
            },
            "hasPart": [
              ${languages
                .map(
                  (lang) => `{
                "@type": "WebPage",
                "url": "https://hanuman-chalisa.org${lang.path}",
                "name": "Hanuman Chalisa in ${lang.name}",
                "description": "${lang.description}",
                "inLanguage": "${lang.hreflang}"
              }`
                )
                .join(",")}
            ]
          }
        `}
      </Script>

      {/* Background effects */}
      <div className="relative">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7233120/pexels-photo-7233120.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent z-0"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#38bdf8]/5 blur-[100px] z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#38bdf8]/5 blur-[100px] z-0"></div>

        <div className="pt-20 pb-16 relative z-10">
          <div className="container px-4 mx-auto">
            <nav className="flex items-center mb-6" aria-label="Breadcrumb">
              <Link href="/">
                <Button variant="ghost" size="sm" className="rounded-full">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </nav>

            <header className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="font-devanagari text-4xl md:text-5xl font-bold mb-4 text-primary">
                हनुमान चालीसा
              </h1>
              <h2 className="font-orbitron text-xl md:text-2xl mb-6 text-[#38bdf8]">
                AVAILABLE LANGUAGES
              </h2>
              <p className="text-muted-foreground">
                Experience the divine Hanuman Chalisa in your preferred
                language. Choose from our available translations.
              </p>
            </header>

            <div className="max-w-4xl mx-auto">
              {/* Featured language */}
              <section
                aria-labelledby="featured-language-heading"
                className="mb-10"
              >
                <h3 id="featured-language-heading" className="sr-only">
                  Featured Language
                </h3>
                <div className="bg-[#0b1120]/30 backdrop-blur-md border border-[#38bdf8]/20 rounded-xl p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-[#38bdf8]/10 rounded-full flex items-center justify-center">
                        <Languages className="h-8 w-8 md:h-10 md:w-10 text-[#38bdf8]" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Hindi (Original)
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Read the original Hanuman Chalisa in Hindi with
                        Devanagari script as composed by Tulsidas.
                      </p>
                      <Link
                        href="/chalisa"
                        hrefLang="hi-IN"
                        aria-label="Read Hanuman Chalisa in Hindi (Original)"
                      >
                        <Button className="bg-[#38bdf8] hover:bg-[#38bdf8]/80 text-[#0b1120] font-medium px-6 rounded-full">
                          Read in Hindi
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Other languages */}
              <section aria-labelledby="other-languages-heading">
                <h3 id="other-languages-heading" className="sr-only">
                  Other Available Languages
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {languages
                    .filter((lang) => !lang.featured)
                    .map((language) => (
                      <Link
                        href={language.path}
                        key={language.name}
                        hrefLang={language.hreflang}
                        aria-label={`Read Hanuman Chalisa in ${language.name}`}
                      >
                        <div className="bg-background/30 backdrop-blur-sm border border-border/30 rounded-xl p-6 hover:border-[#38bdf8]/30 hover:shadow-lg hover:shadow-[#38bdf8]/5 transition-all duration-300 h-full">
                          <h4 className="text-xl font-semibold mb-2 text-primary">
                            {language.name}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-4">
                            {language.description}
                          </p>
                          <div className="text-[#38bdf8] text-sm font-medium">
                            Read in {language.name} →
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </section>

              {/* SEO-friendly text section */}
              <section
                aria-labelledby="about-translations-heading"
                className="mt-16 bg-background/20 rounded-xl p-6 md:p-8 border border-border/20"
              >
                <h3
                  id="about-translations-heading"
                  className="text-xl font-bold mb-4 text-[#38bdf8]"
                >
                  About Our Translations
                </h3>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p className="mb-4">
                    Our Hanuman Chalisa translations are meticulously prepared
                    to maintain the essence and meaning of the original Sanskrit
                    text composed by Goswami Tulsidas. Each language version
                    includes proper transliteration, accurate pronunciation
                    guides, and detailed explanations of the verses.
                  </p>
                  <p className="mb-4">
                    The Hanuman Chalisa is a 40-verse devotional hymn (chalisa
                    means forty) dedicated to Lord Hanuman, a divine figure in
                    Hinduism known for his unwavering devotion, strength, and
                    service to Lord Rama. These translations allow devotees from
                    different linguistic backgrounds to access and appreciate
                    this sacred text.
                  </p>
                  <p>
                    Whether you prefer to read the Hanuman Chalisa in its
                    original Hindi form with Devanagari script, or in
                    translations like Bengali, Gujarati, English, or Tamil, our
                    aim is to make this powerful prayer accessible to all, while
                    preserving its spiritual significance and poetic beauty.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
