import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Hanuman Chalisa in Tamil",
  description: "Read the complete Hanuman Chalisa translated in Tamil",
};

// Tamil translation of Hanuman Chalisa (First few verses as example)
const tamilDoha = [
  {
    id: 1,
    text: "ஸ்ரீகுரு சரண ஸரோஜ ரஜ நிஜ மனு முகுரு ஸுதாரி। பரனௌ ரகுபர பிமல யசு ஜோ தாயக பல சாரி॥",
    translation:
      "Cleansing the mirror of my mind with the dust of my Guru's lotus feet, I sing the pure fame of Raghuvir, the bestower of the four fruits of life.",
  },
  {
    id: 2,
    text: "புத்திஹீன் தனு ஜானிகை ஸுமிரௌ பவன குமார। பல புத்தி வித்யா தேஹு மோஹிம் ஹரஹு கலேஸ் விகார॥",
    translation:
      "Knowing this body to be devoid of intelligence, I remember Hanuman, the son of the Wind. Grant me strength, wisdom, and knowledge, and remove my afflictions and impurities.",
  },
];

const tamilChalisa = [
  {
    id: 1,
    text: "ஜெய் ஹனுமான ஜ்ஞான குண சாகர। ஜெய் கபீஸ் திஹு லோக் உஜாகர॥",
    translation:
      "Victory to Hanuman, ocean of wisdom and virtue, Hail to the Lord of Monkeys who is known all over the world.",
  },
  {
    id: 2,
    text: "ராம தூத அதுலித பல தாமா। அஞ்ஜனி புத்ர பவனசுத நாமா॥",
    translation:
      "You are the messenger of Rama and the repository of immeasurable strength. Also known as Anjani's son and the son of the Wind God.",
  },
  {
    id: 3,
    text: "மஹாவீர விக்ரம பஜ்ரங்கீ। குமதி நிவார ஸுமதி கே ஸங்கீ॥",
    translation:
      "Great hero, you are as mighty as a thunderbolt. You are the trusted companion of those with good intellect and you destroy evil thoughts.",
  },
  {
    id: 4,
    text: "கஞ்சன வரண விராஜ் ஸுவேஸா। கானன குண்டல குஞ்சித கேஸா॥",
    translation:
      "Your body is golden-hued and you are splendidly adorned. You wear earrings and have curly hair.",
  },
  {
    id: 5,
    text: "ஹாத வஜ்ர ஔ த்வஜா விராஜை। கா஁தே மூ஁ஜ் ஜனேவூ ஸாஜை॥",
    translation:
      "In your hands shine the mace and a flag. A sacred thread of munja grass adorns your shoulder.",
  },
  {
    id: 6,
    text: "சங்கர ஸுவன கேஸரீ நந்தன। தேஜ் ப்ரதாப மஹா ஜக் வந்தன॥",
    translation:
      "You are the embodiment of Shiva and the son of Kesari. Your radiance and glory are revered throughout the world.",
  },
];

export default function TamilChalisaPage() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-background">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[url('https://images.pexels.com/photos/7233120/pexels-photo-7233120.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5 z-0"></div>
      <div className="fixed top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent z-0"></div>
      <div className="fixed bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent z-0"></div>

      {/* Decorative elements */}
      <div className="fixed top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#38bdf8]/5 blur-[100px] z-0"></div>
      <div className="fixed bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#38bdf8]/5 blur-[100px] z-0"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex items-center mb-6">
          <Link href="/languages">
            <Button variant="ghost" size="sm" className="rounded-full">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Languages
            </Button>
          </Link>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 bg-[#38bdf8]/10 rounded-full flex items-center justify-center mx-auto">
              <Languages className="h-8 w-8 text-[#38bdf8]" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            ஹனுமான் சாலிசா
          </h1>
          <h2 className="font-orbitron text-xl md:text-2xl mb-6 text-[#38bdf8]">
            TAMIL TRANSLATION
          </h2>
          <p className="text-muted-foreground">
            Complete Tamil translation of the Hanuman Chalisa, a devotional hymn
            dedicated to Lord Hanuman
          </p>
        </div>

        <Card className="max-w-3xl mx-auto overflow-hidden bg-background/30 backdrop-blur-md border-border/30 mb-10">
          <CardContent className="p-6 md:p-8">
            <h3 className="font-orbitron text-lg text-[#38bdf8] mb-6">
              Opening Verses
            </h3>
            <div className="space-y-6">
              {tamilDoha.map((verse) => (
                <div
                  key={`doha-${verse.id}`}
                  className="border-b border-border/20 pb-6 last:border-0 last:pb-0"
                >
                  <div className="flex items-start">
                    <div className="bg-[#38bdf8]/10 text-[#38bdf8] text-xs rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      {verse.id}
                    </div>
                    <div>
                      <p className="text-primary text-lg md:text-xl leading-relaxed mb-2">
                        {verse.text}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {verse.translation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="max-w-3xl mx-auto overflow-hidden bg-background/30 backdrop-blur-md border-border/30">
          <CardContent className="p-6 md:p-8">
            <h3 className="font-orbitron text-lg text-[#38bdf8] mb-6">
              Main Verses
            </h3>
            <div className="space-y-6">
              {tamilChalisa.map((verse) => (
                <div
                  key={`chalisa-${verse.id}`}
                  className="border-b border-border/20 pb-6 last:border-0 last:pb-0"
                >
                  <div className="flex items-start">
                    <div className="bg-[#38bdf8]/10 text-[#38bdf8] text-xs rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      {verse.id}
                    </div>
                    <div>
                      <p className="text-primary text-lg md:text-xl leading-relaxed mb-2">
                        {verse.text}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {verse.translation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-[#0b1120]/30 rounded-lg border border-[#38bdf8]/10">
              <p className="text-sm text-muted-foreground">
                Note: This is a partial translation of the Hanuman Chalisa in
                Tamil. The complete 40 verses follow the same pattern.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="max-w-3xl mx-auto mt-10 text-center">
          <Link href="/languages">
            <Button
              variant="outline"
              className="border-[#38bdf8]/30 text-[#38bdf8] hover:bg-[#38bdf8]/10 font-medium px-6 rounded-full"
            >
              Explore Other Languages
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
