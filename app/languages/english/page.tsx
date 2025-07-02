import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AudioPlayer from "@/components/audio-player";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hanuman Chalisa in English | Complete Translation with Meaning",
  description:
    "Read the complete Hanuman Chalisa in English translation. All 40 verses translated with accurate meaning, proper context and detailed explanation of this powerful Hindu prayer.",
  keywords: [
    "Hanuman Chalisa English",
    "English translation",
    "Hanuman Chalisa meaning",
    "English Hanuman prayer",
    "Chalisa translation",
    "Hanuman Chalisa English version",
    "40 verses English",
    "Hindu prayer English",
    "Lord Hanuman English",
    "Tulsidas English translation",
  ],
  alternates: {
    canonical: "/languages/english",
    languages: {
      "en-US": "/languages/english",
      "bn-IN": "/languages/bengali",
      "gu-IN": "/languages/gujarati",
      "ta-IN": "/languages/tamil",
      "hi-IN": "/chalisa",
    },
  },
  openGraph: {
    title: "Hanuman Chalisa in English | Complete Translation with Meaning",
    description:
      "Read the complete Hanuman Chalisa in English translation. All 40 verses translated with accurate meaning and detailed explanation.",
    url: "/languages/english",
    type: "article",
  },
};

// English translation of Hanuman Chalisa
const englishDoha = [
  {
    id: 1,
    text: "Cleansing the mirror of my mind with the dust of the holy Guru's lotus feet, I describe the unblemished glory of Lord Rama, which bestows the four fruits of life.",
  },
  {
    id: 2,
    text: "Knowing this body to be devoid of intelligence, I recall the Son of the Wind. Grant me strength, wisdom and knowledge, and remove all my afflictions and impurities.",
  },
];

const englishChalisa = [
  {
    id: 1,
    text: "Hail Hanuman, ocean of wisdom and virtue! Hail Monkey Lord, illuminator of the three worlds!",
  },
  {
    id: 2,
    text: "Ram's messenger, abode of matchless power. Anjani's son, named Son of the Wind.",
  },
  {
    id: 3,
    text: "Great hero, mighty as thunderbolt, destroyer of evil thoughts, companion of good thoughts.",
  },
  {
    id: 4,
    text: "Golden-colored body, dressed beautifully, adorned with earrings and curly hair.",
  },
  {
    id: 5,
    text: "In your hands shine the mace and flag, and on your shoulder rests the sacred thread.",
  },
  {
    id: 6,
    text: "You are the embodiment of Shiva and the son of Kesari. Your radiance and glory are revered throughout the world.",
  },
  {
    id: 7,
    text: "You are the repository of knowledge, virtuous and highly intelligent. You are always eager to perform tasks for Lord Rama.",
  },
  {
    id: 8,
    text: "You delight in listening to the Lord's stories. Rama, Lakshmana, and Sita dwell in your heart.",
  },
  {
    id: 9,
    text: "Taking the tiniest form, you appeared to Sita. And in your terrifying form, you burned Lanka.",
  },
  {
    id: 10,
    text: "Taking the dreadful form, you slayed the demons. You accomplished Lord Rama's mission.",
  },
  {
    id: 11,
    text: "Bringing the life-restoring herb (Sanjivani), you revived Lakshmana. Rama, overjoyed, embraced you.",
  },
  {
    id: 12,
    text: "Highly pleased with your immense devotion, Rama said, 'You are as dear to me as my brother Bharata.'",
  },
  {
    id: 13,
    text: "'May the thousand-mouthed serpent sing your glory.' So said Sesa, upon hearing which, Shiva was filled with joy.",
  },
  {
    id: 14,
    text: "Sanak and other sages, Brahma, the sage Narada, Sarasvati, and the king of serpents all sing your glory.",
  },
  {
    id: 15,
    text: "Yama, Kubera, and the Digpalas (guardians of the four quarters), poets and learned men are unable to express your glory.",
  },
  {
    id: 16,
    text: "You rendered a great service to Sugriva by introducing him to Rama, who then restored his kingdom to him.",
  },
  {
    id: 17,
    text: "Your mantra was accepted by Vibhishana, as a result of which he became the King of Lanka. The whole world knows this.",
  },
  {
    id: 18,
    text: "The sun is at a distance of thousands of miles, yet you swallowed it, mistaking it for a sweet fruit.",
  },
  {
    id: 19,
    text: "Holding the Lord's ring in your mouth, you leapt across the ocean. There is no wonder in that.",
  },
  {
    id: 20,
    text: "Every difficult task in this world becomes easy by your grace.",
  },
  {
    id: 21,
    text: "You are the guardian at Rama's door. No one can enter without your permission.",
  },
  {
    id: 22,
    text: "All happiness is attained under your protection. When you are the protector, there is nothing to fear.",
  },
  {
    id: 23,
    text: "You alone can control your own splendor. All three worlds tremble at your roar.",
  },
  {
    id: 24,
    text: "Ghosts and evil spirits dare not come near when your name, O Mahavir, is uttered.",
  },
  {
    id: 25,
    text: "All diseases are destroyed and all pain vanishes for one who constantly remembers Hanuman the brave.",
  },
  {
    id: 26,
    text: "Hanuman releases from affliction all those who remember him in thought, word and deed.",
  },
  {
    id: 27,
    text: "Rama is the supreme ascetic king, and you carry out all his work.",
  },
  {
    id: 28,
    text: "Whoever comes to you with any desire obtains the abundance of the four fruits of life.",
  },
  {
    id: 29,
    text: "Your glory prevails throughout the four ages, and your fame radiates throughout the world.",
  },
  {
    id: 30,
    text: "You are the protector of saints and sages, the destroyer of demons, and the darling of Rama.",
  },
  {
    id: 31,
    text: "You grant the eight powers and the nine treasures by the boon you received from Mother Janaki.",
  },
  {
    id: 32,
    text: "You hold the elixir of Rama's name and remain eternally his servant.",
  },
  {
    id: 33,
    text: "Through devotion to you, one comes to Rama and is freed from the sorrows of countless lives.",
  },
  {
    id: 34,
    text: "At death, one goes to Rama's own abode, and is born there as God's devotee.",
  },
  {
    id: 35,
    text: "One need not think of any other deity. Hanuman alone will give all happiness.",
  },
  {
    id: 36,
    text: "All afflictions cease and all pain is removed for those who remember Hanuman the powerful.",
  },
  {
    id: 37,
    text: "Victory, victory, victory to Lord Hanuman! Bestow your grace on me, as my supreme Guru!",
  },
  {
    id: 38,
    text: "One who recites this Chalisa a hundred times is freed from all bondage and obtains great happiness.",
  },
  {
    id: 39,
    text: "One who reads this Hanuman Chalisa will obtain success, as Gauri's Lord (Shiva) is witness.",
  },
  {
    id: 40,
    text: "Says Tulsidas, who is ever the servant of Lord Hari: 'O Lord, make your home in my heart.'",
  },
];

const englishClosingDoha = [
  {
    id: 1,
    text: "O Son of the Wind, destroyer of sorrow, embodiment of blessings, with Rama, Lakshmana and Sita, live in my heart, O King of Gods.",
  },
];

export default function EnglishHanumanChalisaPage() {
  return (
    <>
      {/* Schema.org structured data for English Hanuman Chalisa */}
      <Script id="structured-data-english" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://hanuman-chalisa.org/languages/english"
            },
            "headline": "Hanuman Chalisa in English - Complete Translation",
            "description": "Read the complete Hanuman Chalisa in English translation. Each verse translated with accurate meaning, proper context and detailed explanation.",
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
            "dateModified": "2023-09-10",
            "inLanguage": "en-US",
            "isAccessibleForFree": true,
            "isPartOf": {
              "@type": "WebSite",
              "url": "https://hanuman-chalisa.org/",
              "name": "Hanuman Chalisa App"
            }
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

        <article className="pt-20 pb-16 relative z-10" lang="en">
          <div className="container px-4 mx-auto">
            <nav
              className="flex items-center justify-between mb-6"
              aria-label="Breadcrumb"
            >
              <Link href="/languages">
                <Button variant="ghost" size="sm" className="rounded-full">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Languages
                </Button>
              </Link>

              <div className="flex gap-2">
                <Link href="/chalisa">
                  <Button variant="outline" size="sm" className="rounded-full">
                    View in Hindi
                  </Button>
                </Link>
              </div>
            </nav>

            <header className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-block mb-4">
                <div className="w-16 h-16 bg-[#38bdf8]/10 rounded-full flex items-center justify-center mx-auto">
                  <Languages className="h-8 w-8 text-[#38bdf8]" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                Hanuman Chalisa
              </h1>
              <h2 className="font-orbitron text-xl md:text-2xl mb-6 text-[#38bdf8]">
                ENGLISH TRANSLATION
              </h2>
              <p className="text-muted-foreground mb-6">
                Complete English translation of the Hanuman Chalisa, a
                devotional hymn dedicated to Lord Hanuman
              </p>

              {/* Audio Player */}
              <div className="max-w-md mx-auto">
                <AudioPlayer
                  text={`${englishDoha
                    .map((v) => v.text)
                    .join(" ")} ${englishChalisa
                    .map((v) => v.text)
                    .join(" ")} ${englishClosingDoha
                    .map((v) => v.text)
                    .join(" ")}`}
                  language="en-US"
                  title="Listen in English"
                />
              </div>
            </header>

            <section aria-labelledby="opening-verses-heading" className="mb-10">
              <Card
                className="max-w-3xl mx-auto overflow-hidden bg-background/30 backdrop-blur-md border-border/30"
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <CardContent className="p-6 md:p-8">
                  <h3
                    id="opening-verses-heading"
                    className="font-orbitron text-lg text-[#38bdf8] mb-6"
                    itemProp="name"
                  >
                    Opening Verses
                  </h3>
                  <div className="space-y-6" itemProp="text">
                    {englishDoha.map((verse) => (
                      <div
                        key={`doha-${verse.id}`}
                        className="border-b border-border/20 pb-6 last:border-0 last:pb-0"
                        itemScope
                        itemProp="hasPart"
                        itemType="https://schema.org/CreativeWork"
                      >
                        <meta itemProp="position" content={`${verse.id}`} />
                        <div className="flex items-start">
                          <div
                            className="bg-[#38bdf8]/10 text-[#38bdf8] text-xs rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1"
                            aria-hidden="true"
                          >
                            {verse.id}
                          </div>
                          <p
                            className="text-primary text-lg md:text-xl leading-relaxed"
                            itemProp="text"
                          >
                            {verse.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            <section aria-labelledby="main-verses-heading">
              <Card
                className="max-w-3xl mx-auto overflow-hidden bg-background/30 backdrop-blur-md border-border/30"
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <CardContent className="p-6 md:p-8">
                  <h3
                    id="main-verses-heading"
                    className="font-orbitron text-lg text-[#38bdf8] mb-6"
                    itemProp="name"
                  >
                    Main Verses
                  </h3>
                  <div className="space-y-6" itemProp="text">
                    {englishChalisa.map((verse) => (
                      <div
                        key={`chalisa-${verse.id}`}
                        className="border-b border-border/20 pb-6 last:border-0 last:pb-0"
                        itemScope
                        itemProp="hasPart"
                        itemType="https://schema.org/CreativeWork"
                      >
                        <meta itemProp="position" content={`${verse.id}`} />
                        <div className="flex items-start">
                          <div
                            className="bg-[#38bdf8]/10 text-[#38bdf8] text-xs rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1"
                            aria-hidden="true"
                          >
                            {verse.id}
                          </div>
                          <p
                            className="text-primary text-lg md:text-xl leading-relaxed"
                            itemProp="text"
                          >
                            {verse.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            <section aria-labelledby="closing-verse-heading" className="mt-10">
              <Card
                className="max-w-3xl mx-auto overflow-hidden bg-background/30 backdrop-blur-md border-border/30"
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <CardContent className="p-6 md:p-8">
                  <h3
                    id="closing-verse-heading"
                    className="font-orbitron text-lg text-[#38bdf8] mb-6"
                    itemProp="name"
                  >
                    Closing Verse
                  </h3>
                  <div className="space-y-6" itemProp="text">
                    {englishClosingDoha.map((verse) => (
                      <div
                        key={`closing-doha-${verse.id}`}
                        className="border-b border-border/20 pb-6 last:border-0 last:pb-0"
                        itemScope
                        itemProp="hasPart"
                        itemType="https://schema.org/CreativeWork"
                      >
                        <meta itemProp="position" content={`${verse.id}`} />
                        <div className="flex items-start">
                          <div
                            className="bg-[#38bdf8]/10 text-[#38bdf8] text-xs rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1"
                            aria-hidden="true"
                          ></div>
                          <p
                            className="text-primary text-lg md:text-xl leading-relaxed"
                            itemProp="text"
                          >
                            {verse.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            <nav className="max-w-3xl mx-auto mt-10 flex justify-center flex-wrap gap-4">
              <Link href="/languages">
                <Button
                  variant="outline"
                  className="border-[#38bdf8]/30 text-[#38bdf8] hover:bg-[#38bdf8]/10 font-medium px-6 rounded-full"
                >
                  Explore Other Languages
                </Button>
              </Link>
              <Link href="/chalisa">
                <Button
                  variant="outline"
                  className="border-[#38bdf8]/30 text-[#38bdf8] hover:bg-[#38bdf8]/10 font-medium px-6 rounded-full"
                >
                  View Original Hindi
                </Button>
              </Link>
            </nav>

            {/* SEO Content */}
            <section
              aria-labelledby="about-english-translation"
              className="max-w-3xl mx-auto mt-16 bg-background/20 rounded-xl p-6 md:p-8 border border-border/20"
            >
              <h3
                id="about-english-translation"
                className="text-xl font-bold mb-4 text-[#38bdf8]"
              >
                About the English Translation
              </h3>
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <p className="mb-4">
                  This English translation of the Hanuman Chalisa aims to
                  preserve the profound spiritual essence and poetic beauty of
                  the original text composed by Tulsidas. Each verse has been
                  carefully translated to convey not just the literal meaning,
                  but also the devotional sentiment behind the words.
                </p>
                <p className="mb-4">
                  The Hanuman Chalisa, written in Awadhi language (a dialect of
                  Hindi), is one of the most popular Hindu devotional hymns
                  dedicated to Lord Hanuman. This English version makes this
                  sacred text accessible to English-speaking audiences around
                  the world.
                </p>
                <p>
                  The translation captures the key theological concepts,
                  mythological references, and spiritual principles found in the
                  original text. It serves as both a devotional resource and an
                  educational tool for understanding the importance of Hanuman
                  in Hindu tradition.
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}
