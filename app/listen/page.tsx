import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, Volume2, Globe, Headphones } from "lucide-react";
import { Metadata } from "next";
import AudioPlayer from "@/components/audio-player";
import { chalisa, doha, closingDoha } from "@/lib/chalisa-data";

export const metadata: Metadata = {
  title: "Listen to Hanuman Chalisa | Audio in Multiple Languages",
  description:
    "Listen to the complete Hanuman Chalisa in Hindi, English, Bengali, Gujarati, and Tamil. High-quality text-to-speech audio with playback controls for all 40 verses.",
  keywords: [
    "Hanuman Chalisa audio",
    "Listen Hanuman Chalisa",
    "Hanuman Chalisa pronunciation",
    "Audio prayer",
    "Hanuman Chalisa multiple languages",
    "Text to speech Hanuman Chalisa",
    "हनुमान चालीसा ऑडियो",
    "Hanuman Chalisa recitation",
  ],
  alternates: {
    canonical: "/listen",
  },
  openGraph: {
    title: "Listen to Hanuman Chalisa | Audio in Multiple Languages",
    description:
      "Listen to the complete Hanuman Chalisa with high-quality audio in Hindi, English, Bengali, Gujarati, and Tamil.",
    url: "/listen",
    type: "website",
  },
};

// Audio content for different languages
const audioContent = {
  hindi: {
    title: "हनुमान चालीसा - Hindi",
    subtitle: "Original Sanskrit/Hindi Text",
    text: `${doha.map((v) => v.hindi).join(" ")} ${chalisa
      .map((v) => v.hindi)
      .join(" ")} ${closingDoha.map((v) => v.hindi).join(" ")}`,
    language: "hi-IN",
    flag: "🇮🇳",
  },
  english: {
    title: "Hanuman Chalisa - English",
    subtitle: "English Translation",
    text: `${doha.map((v) => v.english).join(" ")} ${chalisa
      .map((v) => v.english)
      .join(" ")} ${closingDoha.map((v) => v.english).join(" ")}`,
    language: "en-US",
    flag: "🇺🇸",
  },
  bengali: {
    title: "হনুমান চালিশা - Bengali",
    subtitle: "Bengali Translation",
    text: "শ্রী গুরু চরণ সরোজ রজ নিজ মন মুকুর সুধারি। বরণউ রঘুবর বিমল যশ যো দায়ক ফল চারি।। বুদ্ধিহীন তনু জানিকে সুমিরউ পবন কুমার। বল বুদ্ধি বিদ্যা দেহু মোহি হরহু কলেশ বিকার।।",
    language: "bn-IN",
    flag: "🇧🇩",
  },
  gujarati: {
    title: "હનુમાન ચાલીસા - Gujarati",
    subtitle: "Gujarati Translation",
    text: "શ્રી ગુરુ ચરણ સરોજ રજ નિજ મન મુકુર સુધારિ। વરણઉ રઘુવર વિમલ યશ યો દાયક ફલ ચારિ।। બુદ્ધિહીન તનુ જાનિકે સુમિરઉ પવન કુમાર। બલ બુદ્ધિ વિદ્યા દેહુ મોહિ હરહુ કલેશ વિકાર।।",
    language: "gu-IN",
    flag: "🇮🇳",
  },
  tamil: {
    title: "ஹனுமான் சாலிசா - Tamil",
    subtitle: "Tamil Translation",
    text: "ஸ்ரீ குரு சரண சரோஜ ரஜ் நிஜ் மன் முகுர் சுதாரி। வரணௌ ரகுவர் விமல் யஸ் யோ தாயக் பல் சாரி।। புத்திஹீன் தனு ஜானிகே சுமிரௌ பவன் குமார். பல் புத்தி வித்யா தேஹு மோஹி ஹரஹு களேஸ் விகார்।।",
    language: "ta-IN",
    flag: "🇮🇳",
  },
};

export default function ListenPage() {
  return (
    <>
      {/* Background decorative elements */}
      <div className="relative">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7233120/pexels-photo-7233120.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent z-0"></div>

        <div className="pt-20 pb-16 relative z-10">
          <div className="container px-4 mx-auto">
            <nav className="flex items-center justify-between mb-6">
              <Link href="/">
                <Button variant="ghost" size="sm" className="rounded-full">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </nav>

            <header className="text-center max-w-4xl mx-auto mb-12">
              <div className="flex items-center justify-center mb-4">
                <Headphones className="h-8 w-8 text-[#38bdf8] mr-3" />
                <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-primary">
                  Listen to Hanuman Chalisa
                </h1>
              </div>
              <p className="text-muted-foreground text-lg mb-6">
                Experience the divine hymn in multiple languages with
                high-quality audio playback
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Volume2 className="h-4 w-4" />
                <span>Use headphones for the best experience</span>
              </div>
            </header>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                {Object.entries(audioContent).map(([key, content]) => (
                  <Card
                    key={key}
                    className="overflow-hidden bg-background/30 backdrop-blur-md border-border/30 hover:border-[#38bdf8]/30 transition-all duration-300"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="flex items-center justify-center space-x-3 mb-2">
                        <span className="text-2xl">{content.flag}</span>
                        <CardTitle className="text-xl font-orbitron text-[#38bdf8]">
                          {content.title}
                        </CardTitle>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {content.subtitle}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <AudioPlayer
                        text={content.text}
                        language={content.language}
                        title={`Listen in ${content.subtitle}`}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Information */}
              <div className="mt-12 text-center">
                <Card className="bg-background/20 backdrop-blur-md border-border/30">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center mb-4">
                      <Globe className="h-6 w-6 text-[#38bdf8] mr-2" />
                      <h3 className="font-orbitron text-lg font-semibold text-[#38bdf8]">
                        About Audio Playback
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">
                          Features:
                        </h4>
                        <ul className="space-y-1">
                          <li>• Adjustable playback speed</li>
                          <li>• Volume control</li>
                          <li>• Play/Pause/Stop controls</li>
                          <li>• Multiple language support</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">
                          Languages Available:
                        </h4>
                        <ul className="space-y-1">
                          <li>• Hindi (Original)</li>
                          <li>• English Translation</li>
                          <li>• Bengali Translation</li>
                          <li>• Gujarati Translation</li>
                          <li>• Tamil Translation</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Navigation Links */}
              <div className="pt-8 mt-8 border-t border-border/20 flex justify-center">
                <div className="flex flex-wrap gap-4">
                  <Link href="/chalisa">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      Read Hindi Text
                    </Button>
                  </Link>
                  <Link href="/languages">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      All Languages
                    </Button>
                  </Link>
                  <Link href="/meaning">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      Verse Meanings
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
