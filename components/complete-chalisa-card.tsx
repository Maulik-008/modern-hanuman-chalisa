import { chalisa, doha, closingDoha } from "@/lib/chalisa-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Languages } from "lucide-react";
import Link from "next/link";

export default function CompleteChalisaCard() {
  return (
    <Card
      className="w-full overflow-hidden bg-background/30 backdrop-blur-md border-border/30 hover:border-[#38bdf8]/30 transition-all duration-300"
      itemScope
      itemType="https://schema.org/Article"
    >
      <meta itemProp="name" content="Hanuman Chalisa" />
      <meta itemProp="inLanguage" content="hi-IN" />
      <meta itemProp="author" content="Tulsidas" />
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h2
              className="font-devanagari text-3xl font-bold text-primary mb-2"
              itemProp="headline"
            >
              संपूर्ण हनुमान चालीसा
            </h2>
            <p
              className="text-muted-foreground text-sm"
              itemProp="alternativeHeadline"
            >
              Complete Hanuman Chalisa in Hindi with Devanagari script
            </p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <Link href="/chalisa">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-[#38bdf8]/30 text-[#38bdf8] hover:bg-[#38bdf8]/10"
                aria-label="View detailed page with verse by verse meanings"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Detailed View
              </Button>
            </Link>
            <Link href="/languages">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-[#38bdf8]/30 text-[#38bdf8] hover:bg-[#38bdf8]/10"
                aria-label="View Hanuman Chalisa in other languages"
              >
                <Languages className="h-4 w-4 mr-2" />
                Other Languages
              </Button>
            </Link>
          </div>
        </div>

        <section
          className="bg-[#0b1120]/30 rounded-xl p-4 md:p-6 border border-[#38bdf8]/10 mb-6"
          aria-labelledby="opening-doha-heading"
          itemProp="articleSection"
        >
          <h3
            id="opening-doha-heading"
            className="font-orbitron text-lg text-[#38bdf8] mb-4"
          >
            Opening Doha (Couplets)
          </h3>
          <div className="space-y-4">
            {doha.map((verse) => (
              <div
                key={`doha-${verse.id}`}
                className="border-b border-border/20 pb-4 last:border-0 last:pb-0"
                itemScope
                itemProp="hasPart"
                itemType="https://schema.org/CreativeWork"
              >
                <meta itemProp="position" content={`${verse.id}`} />
                <meta itemProp="name" content={`Opening Doha ${verse.id}`} />
                <p
                  className="font-devanagari text-lg md:text-xl text-primary mb-2"
                  lang="hi"
                  itemProp="text"
                >
                  {verse.hindi}
                </p>
                <p
                  className="text-sm text-muted-foreground"
                  lang="en"
                  itemProp="alternateName"
                >
                  {verse.english}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="bg-[#0b1120]/30 rounded-xl p-4 md:p-6 border border-[#38bdf8]/10 mb-6"
          aria-labelledby="chaupai-heading"
          itemProp="articleSection"
        >
          <h3
            id="chaupai-heading"
            className="font-orbitron text-lg text-[#38bdf8] mb-4"
          >
            Chaupai (Quatrains)
          </h3>
          <div className="space-y-4">
            {chalisa.map((verse) => (
              <div
                key={`chalisa-${verse.id}`}
                className="border-b border-border/20 pb-4 last:border-0 last:pb-0"
                itemScope
                itemProp="hasPart"
                itemType="https://schema.org/CreativeWork"
              >
                <meta itemProp="position" content={`${verse.id}`} />
                <meta itemProp="name" content={`Verse ${verse.id}`} />
                <p
                  className="font-devanagari text-lg md:text-xl text-primary mb-2"
                  lang="hi"
                  itemProp="text"
                >
                  {verse.hindi}
                </p>
                <p
                  className="text-sm text-muted-foreground"
                  lang="en"
                  itemProp="alternateName"
                >
                  {verse.english}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="bg-[#0b1120]/30 rounded-xl p-4 md:p-6 border border-[#38bdf8]/10"
          aria-labelledby="closing-doha-heading"
          itemProp="articleSection"
        >
          <h3
            id="closing-doha-heading"
            className="font-orbitron text-lg text-[#38bdf8] mb-4"
          >
            Closing Doha
          </h3>
          <div className="space-y-4">
            {closingDoha.map((verse) => (
              <div
                key={`closing-doha-${verse.id}`}
                className="border-b border-border/20 pb-4 last:border-0 last:pb-0"
                itemScope
                itemProp="hasPart"
                itemType="https://schema.org/CreativeWork"
              >
                <meta itemProp="position" content={`${verse.id}`} />
                <meta itemProp="name" content="Closing Doha" />
                <p
                  className="font-devanagari text-lg md:text-xl text-primary mb-2"
                  lang="hi"
                  itemProp="text"
                >
                  {verse.hindi}
                </p>
                <p
                  className="text-sm text-muted-foreground"
                  lang="en"
                  itemProp="alternateName"
                >
                  {verse.english}
                </p>
              </div>
            ))}
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
