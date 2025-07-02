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
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
          <div>
            <h2
              className="font-devanagari text-3xl md:text-4xl font-bold text-primary"
              itemProp="headline"
            >
              श्री हनुमान चालीसा
            </h2>
          </div>
          <div className="flex gap-2">
            <Link href="/chalisa">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-[#38bdf8]/30 text-[#38bdf8] hover:bg-[#38bdf8]/10"
                aria-label="View detailed page with verse by verse meanings"
              >
                <BookOpen className="h-4 w-4 mr-1.5" />
                Detailed
              </Button>
            </Link>
            <Link href="/languages">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-[#38bdf8]/30 text-[#38bdf8] hover:bg-[#38bdf8]/10"
                aria-label="View Hanuman Chalisa in other languages"
              >
                <Languages className="h-4 w-4 mr-1.5" />
                Languages
              </Button>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          {/* Opening Doha */}
          <section
            className="bg-[#0b1120]/30 rounded-lg p-4 md:p-5 border border-[#38bdf8]/10"
            aria-labelledby="opening-doha-heading"
            itemProp="articleSection"
          >
            <h3
              id="opening-doha-heading"
              className="font-orbitron text-lg text-[#38bdf8] mb-3 uppercase tracking-wider"
            >
              दोहा
            </h3>
            <div className="space-y-3">
              {doha.map((verse) => (
                <div
                  key={`doha-${verse.id}`}
                  className="text-center"
                  itemScope
                  itemProp="hasPart"
                  itemType="https://schema.org/CreativeWork"
                >
                  <meta itemProp="position" content={`${verse.id}`} />
                  <meta itemProp="name" content={`Opening Doha ${verse.id}`} />
                  <p
                    className="font-devanagari text-lg md:text-xl leading-relaxed text-primary"
                    lang="hi"
                    itemProp="text"
                  >
                    {verse.hindi}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Chaupai */}
          <section
            className="bg-[#0b1120]/30 rounded-lg p-4 md:p-5 border border-[#38bdf8]/10"
            aria-labelledby="chaupai-heading"
            itemProp="articleSection"
          >
            <h3
              id="chaupai-heading"
              className="font-orbitron text-lg text-[#38bdf8] mb-4 uppercase tracking-wider text-center"
            >
              चौपाई
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {chalisa.map((verse) => (
                <div
                  key={`chalisa-${verse.id}`}
                  className="bg-[#0b1120]/20 rounded-md p-3 md:p-4 backdrop-blur-sm border border-[#38bdf8]/5 hover:bg-[#38bdf8]/5 transition-colors"
                  itemScope
                  itemProp="hasPart"
                  itemType="https://schema.org/CreativeWork"
                >
                  <meta itemProp="position" content={`${verse.id}`} />
                  <meta itemProp="name" content={`Verse ${verse.id}`} />
                  <div className="flex items-start gap-2">
                    <span className="text-lg text-[#38bdf8] font-medium">
                      {verse.id}.
                    </span>
                    <p
                      className="font-devanagari text-base md:text-lg leading-relaxed text-primary flex-1"
                      lang="hi"
                      itemProp="text"
                    >
                      {verse.hindi}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Closing Doha */}
          <section
            className="bg-[#0b1120]/30 rounded-lg p-4 md:p-5 border border-[#38bdf8]/10"
            aria-labelledby="closing-doha-heading"
            itemProp="articleSection"
          >
            <h3
              id="closing-doha-heading"
              className="font-orbitron text-lg text-[#38bdf8] mb-3 uppercase tracking-wider"
            >
              समापन दोहा
            </h3>
            <div className="space-y-3">
              {closingDoha.map((verse) => (
                <div
                  key={`closing-doha-${verse.id}`}
                  className="text-center"
                  itemScope
                  itemProp="hasPart"
                  itemType="https://schema.org/CreativeWork"
                >
                  <meta itemProp="position" content={`${verse.id}`} />
                  <meta itemProp="name" content="Closing Doha" />
                  <p
                    className="font-devanagari text-lg md:text-xl leading-relaxed text-primary"
                    lang="hi"
                    itemProp="text"
                  >
                    {verse.hindi}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </CardContent>
    </Card>
  );
}
