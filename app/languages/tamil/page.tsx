import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AudioPlayer from "@/components/audio-player";

export const metadata = {
  title:
    "Hanuman Chalisa in Tamil - ஹனுமான் சாலிசா | Complete Tamil Translation",
  description:
    "Read the complete Hanuman Chalisa (ஹனுமான் சாலிசா) in Tamil with accurate translations. All 40 verses of this powerful Hindu devotional hymn dedicated to Lord Hanuman.",
  keywords: [
    "Hanuman Chalisa Tamil",
    "ஹனுமான் சாலிசா",
    "Tamil Hanuman Chalisa",
    "அனுமன் சாலிசா",
    "Hanuman Chalisa Tamil translation",
    "Tamil prayer",
    "Hindu prayer Tamil",
    "Hanuman mantra Tamil",
  ],
  openGraph: {
    title: "Hanuman Chalisa in Tamil - ஹனுமான் சாலிசா",
    description:
      "Complete Tamil translation of Hanuman Chalisa with all 40 verses",
    type: "article",
  },
};

// Tamil translation of Hanuman Chalisa - Complete
const tamilDoha = [
  {
    id: 1,
    text: "ஸ்ரீகுரு சரண ஸரோஜ ரஜ நிஜ மனு முகுரு ஸுதாரி।\nபரனௌ ரகுபர பிமல யசு ஜோ தாயக பல சாரி॥",
    translation:
      "Cleansing the mirror of my mind with the dust of my Guru's lotus feet, I sing the pure fame of Raghuvir, the bestower of the four fruits of life.",
  },
  {
    id: 2,
    text: "புத்திஹீன் தனு ஜானிகை ஸுமிரௌ பவன குமார।\nபல புத்தி வித்யா தேஹு மோஹிம் ஹரஹு கலேஸ் விகார॥",
    translation:
      "Knowing this body to be devoid of intelligence, I remember Hanuman, the son of the Wind. Grant me strength, wisdom, and knowledge, and remove my afflictions and impurities.",
  },
];

const tamilChalisa = [
  {
    id: 1,
    text: "ஜெய் ஹனுமான ஜ்ஞான குண சாகர।\nஜெய் கபீஸ் திஹு லோக் உஜாகர॥",
    translation:
      "Victory to Hanuman, ocean of wisdom and virtue, Hail to the Lord of Monkeys who is known all over the three worlds.",
  },
  {
    id: 2,
    text: "ராம தூத அதுலித பல தாமா।\nஅஞ்ஜனி புத்ர பவனசுத நாமா॥",
    translation:
      "You are the messenger of Rama and the repository of immeasurable strength. Also known as Anjani's son and the son of the Wind God.",
  },
  {
    id: 3,
    text: "மஹாவீர விக்ரம பஜ்ரங்கீ।\nகுமதி நிவார ஸுமதி கே ஸங்கீ॥",
    translation:
      "Great hero, you are as mighty as a thunderbolt. You are the trusted companion of those with good intellect and you destroy evil thoughts.",
  },
  {
    id: 4,
    text: "கஞ்சன வரண விராஜ் ஸுவேஸா।\nகானன குண்டல குஞ்சித கேஸா॥",
    translation:
      "Your body is golden-hued and you are splendidly adorned. You wear earrings and have curly hair.",
  },
  {
    id: 5,
    text: "ஹாத வஜ்ர ஔ த்வஜா விராஜை।\nகா஁தே மூ஁ஜ் ஜனேவூ ஸாஜை॥",
    translation:
      "In your hands shine the mace and a flag. A sacred thread of munja grass adorns your shoulder.",
  },
  {
    id: 6,
    text: "சங்கர ஸுவன கேஸரீ நந்தன।\nதேஜ் ப்ரதாப மஹா ஜக் வந்தன॥",
    translation:
      "You are the embodiment of Shiva and the son of Kesari. Your radiance and glory are revered throughout the world.",
  },
  {
    id: 7,
    text: "வித்யாவான் குணீ அதி சாதுர்।\nராம காஜ் கரிபே கோ ஆதுர்॥",
    translation:
      "You are wise, virtuous and very clever. You are always eager to do Lord Rama's work.",
  },
  {
    id: 8,
    text: "ப்ரபு சரித்ர ஸுனிபே கோ ரஸியா।\nராம லகன ஸீதா மன பஸியா॥",
    translation:
      "You delight in hearing about the Lord's deeds. Rama, Lakshmana, and Sita dwell in your heart.",
  },
  {
    id: 9,
    text: "ஸூக்ஷ்ம ரூப தரி ஸியஹிம் திகாவா।\nவிகட ரூப தரி லங்க ஜராவா॥",
    translation:
      "Taking a tiny form, you appeared before Sita. Taking a fierce form, you burnt Lanka.",
  },
  {
    id: 10,
    text: "பீம ரூப தரி அஸுர ஸம்ஹாரே।\nராமசந்த்ர கே காஜ் ஸ஁வாரே॥",
    translation:
      "Taking a terrible form, you killed the demons. You accomplished Lord Rama's mission.",
  },
  {
    id: 11,
    text: "லாய ஸஞ்ஜீவன லகன ஜியாயே।\nஸ்ரீ ரகுபீர ஹரஷி உர லாயே॥",
    translation:
      "Bringing the life-giving herb (Sanjivani), you revived Lakshmana. Rama embraced you with joy.",
  },
  {
    id: 12,
    text: "ரகுபதி கீன்ஹீ பஹுத படாஈ।\nதும மம ப்ரிய பரதஹி ஸம பாஈ॥",
    translation:
      "Lord Rama praised you greatly saying, 'You are as dear to me as my brother Bharata.'",
  },
  {
    id: 13,
    text: "ஸஹஸ் பதன தும்ஹரோ ஜஸ் காவைம்।\nஅஸ் கஹி ஸ்ரீபதி கண்ட லகாவைம்॥",
    translation:
      "The thousand-headed serpent sings your glory. Saying this, Shri Hari embraced you.",
  },
  {
    id: 14,
    text: "ஸனகாதிக ப்ரஹ்மாதி முனீஸா।\nநாரத ஸாரத ஸஹித அஹீஸா॥",
    translation:
      "Sanak and other sages, Brahma and other gods, Narada, Saraswati and the King of serpents all sing your praise.",
  },
  {
    id: 15,
    text: "ஜம குபேர திகபால ஜஹா஁ தே।\nகபி கோபித கஹி ஸகே கஹா஁ தே॥",
    translation:
      "Yama, Kubera and the guardians of the directions, poets and scholars cannot express your glory.",
  },
  {
    id: 16,
    text: "தும உபகார ஸுக்ரீவஹிம் கீன்ஹா।\nராம மிலாய ராஜ பத தீன்ஹா॥",
    translation:
      "You did Sugriva a great favor by introducing him to Rama and getting him the kingship.",
  },
  {
    id: 17,
    text: "தும்ஹரோ மந்த்ர விபீஷண மானா।\nலங்கேஸ்வர பயே ஸப ஜக ஜானா॥",
    translation:
      "Vibhishana heeded your advice and became the king of Lanka, as the whole world knows.",
  },
  {
    id: 18,
    text: "யுக ஸஹஸ்ர யோஜன பர பானூ।\nலீல்யோ தாஹி மதுர பல ஜானூ॥",
    translation:
      "The sun is thousands of miles away, but you swallowed it thinking it was a sweet fruit.",
  },
  {
    id: 19,
    text: "ப்ரபு முத்ரிகா மேலி முக மாஹீம்।\nஜலதி லா஁கி கயே அசரஜ் நாஹீம்॥",
    translation:
      "With the Lord's ring in your mouth, you crossed the ocean – no wonder in that.",
  },
  {
    id: 20,
    text: "துர்கம காஜ் ஜகத கே ஜேதே।\nஸுகம அனுக்ரஹ தும்ஹரே தேதே॥",
    translation:
      "All the difficult tasks in the world become easy by your grace.",
  },
  {
    id: 21,
    text: "ராம துவாரே தும ரகவாரே।\nஹோத ந ஆஜ்ஞா பினு பைஸாரே॥",
    translation:
      "You are the guardian at Rama's door. No one can enter without your permission.",
  },
  {
    id: 22,
    text: "ஸப ஸுக லஹை தும்ஹாரீ ஸரனா।\nதும ரக்ஷக காஹூ கோ டர நா॥",
    translation:
      "All find happiness in your refuge. When you are the protector, there is no fear from anyone.",
  },
  {
    id: 23,
    text: "ஆபன தேஜ் ஸம்ஹாரோ ஆபை।\nதீனோம் லோக ஹா஁க தேம் கா஁பை॥",
    translation:
      "You alone can sustain your own splendor. All three worlds tremble at your roar.",
  },
  {
    id: 24,
    text: "பூத பிஸாச நிகட நஹிம் ஆவை।\nமஹாபீர ஜப நாம ஸுனாவை॥",
    translation:
      "Ghosts and evil spirits do not come near when one chants the name of the great hero, Hanuman.",
  },
  {
    id: 25,
    text: "நாஸை ரோக ஹரை ஸப பீரா।\nஜபத நிரந்தர ஹனுமத பீரா॥",
    translation:
      "All diseases and pain are destroyed for those who continuously chant the name of brave Hanuman.",
  },
  {
    id: 26,
    text: "ஸங்கட தேம் ஹனுமான சுடாவை।\nமன க்ரம பசன த்யான ஜோ லாவை॥",
    translation:
      "Hanuman relieves from all afflictions those who remember him in thought, word and deed.",
  },
  {
    id: 27,
    text: "ஸப பர ராம தபஸ்வீ ராஜா।\nதின கே காஜ் ஸகல தும ஸாஜா॥",
    translation:
      "Ram, the ascetic king, is supreme over all. You execute all his tasks.",
  },
  {
    id: 28,
    text: "ஔர மனோரத ஜோ கோஈ லாவை।\nஸோஈ அமித ஜீவன பல பாவை॥",
    translation:
      "Whoever comes to you with any desire, obtains the imperishable fruit of life.",
  },
  {
    id: 29,
    text: "சாரோம் யுக பரதாப தும்ஹாரா।\nஹை பரஸித்த ஜகத உஜியாரா॥",
    translation:
      "Your glory is renowned in all four ages. Your fame is resplendent throughout the world.",
  },
  {
    id: 30,
    text: "ஸாது ஸந்த கே தும ரகவாரே।\nஅஸுர நிகந்தன ராம துலாரே॥",
    translation:
      "You are the protector of saints and sages. You are the destroyer of demons and the beloved of Rama.",
  },
  {
    id: 31,
    text: "அஷ்ட ஸித்தி நௌ நிதி கே தாதா।\nஅஸ் பர தீன ஜானகீ மாதா॥",
    translation:
      "You bestow the eight powers and the nine treasures as blessed by Mother Janaki (Sita).",
  },
  {
    id: 32,
    text: "ராம ரஸாயன தும்ஹரே பாஸா।\nஸதா ரஹோ ரகுபதி கே தாஸா॥",
    translation:
      "You possess the elixir of Rama's name. You are eternally the servant of Lord Raghupati.",
  },
  {
    id: 33,
    text: "தும்ஹரே பஜன ராம கோ பாவை।\nஜனம ஜனம கே துக பிஸராவை॥",
    translation:
      "By worshipping you, one attains Rama and forgets the sorrows of many lives.",
  },
  {
    id: 34,
    text: "அந்த கால ரகுபர புர ஜாஈ।\nஜஹா஁ ஜன்ம ஹரி பக்த கஹாஈ॥",
    translation:
      "At the time of death, one goes to Lord Rama's abode and is born again as God's devotee.",
  },
  {
    id: 35,
    text: "ஔர தேவதா சித்த ந தரஈ।\nஹனுமத ஸேஈ ஸர்வ ஸுக கரஈ॥",
    translation:
      "One need not think of any other deity. Serving Hanuman brings all happiness.",
  },
  {
    id: 36,
    text: "ஸங்கட கடை மிடை ஸப பீரா।\nஜோ ஸுமிரை ஹனுமத பலபீரா॥",
    translation:
      "All troubles are removed and all pain disappears, for those who remember the mighty and brave Hanuman.",
  },
  {
    id: 37,
    text: "ஜெய் ஜெய் ஜெய் ஹனுமான கோஸாஈம்।\nக்ருபா கரஹு குருதேவ கீ நாஈம்॥",
    translation:
      "Victory, victory, victory to Lord Hanuman! Please bestow your grace as my supreme Guru.",
  },
  {
    id: 38,
    text: "ஜோ ஸத பார பாட கர கோஈ।\nசூடஹி பந்தி மஹா ஸுக ஹோஈ॥",
    translation:
      "Whoever recites this a hundred times will be freed from bondage and will obtain great bliss.",
  },
  {
    id: 39,
    text: "ஜோ யஹ படை ஹனுமான சாலீஸா।\nஹோய ஸித்தி ஸாகீ கௌரீஸா॥",
    translation:
      "One who reads this Hanuman Chalisa will achieve success, as Lord Shiva himself testifies.",
  },
  {
    id: 40,
    text: "துலஸீதாஸ் ஸதா ஹரி சேரா।\nகீஜை நாத ஹ்ருதய மஹம் டேரா॥",
    translation:
      "Tulsidas, the eternal servant of God, prays: 'O Lord, please dwell in my heart.'",
  },
];

const tamilClosingDoha = [
  {
    id: 1,
    text: "பவன தனய ஸங்கட ஹரண, மங்கள மூரதி ரூப்।\nராம லகன ஸீதா ஸஹித, ஹ்ருதய பஸஹு ஸுர பூப்॥",
    translation:
      "O son of the wind, remover of troubles, embodiment of auspiciousness, along with Rama, Lakshmana and Sita, please dwell in my heart, O king of gods.",
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
          <p className="text-muted-foreground mb-6">
            Complete Tamil translation of the Hanuman Chalisa, a powerful
            devotional hymn dedicated to Lord Hanuman consisting of 40 verses
          </p>

          {/* Audio Player */}
          <div className="max-w-md mx-auto">
            <AudioPlayer
              text={`${tamilDoha.map((v) => v.text).join(" ")} ${tamilChalisa
                .map((v) => v.text)
                .join(" ")} ${tamilClosingDoha.map((v) => v.text).join(" ")}`}
              language="ta-IN"
              title="Listen in Tamil"
            />
          </div>
        </div>

        <Card className="max-w-3xl mx-auto overflow-hidden bg-background/30 backdrop-blur-md border-border/30 mb-10">
          <CardContent className="p-6 md:p-8">
            <h3 className="font-orbitron text-lg text-[#38bdf8] mb-6">
              தோஹா (Opening Verses)
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

        <Card className="max-w-3xl mx-auto overflow-hidden bg-background/30 backdrop-blur-md border-border/30 mb-10">
          <CardContent className="p-6 md:p-8">
            <h3 className="font-orbitron text-lg text-[#38bdf8] mb-6">
              சௌபாய் (Main Verses)
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
          </CardContent>
        </Card>

        <Card className="max-w-3xl mx-auto overflow-hidden bg-background/30 backdrop-blur-md border-border/30 mb-10">
          <CardContent className="p-6 md:p-8">
            <h3 className="font-orbitron text-lg text-[#38bdf8] mb-6">
              தோஹா (Closing Verse)
            </h3>
            <div className="space-y-6">
              {tamilClosingDoha.map((verse) => (
                <div
                  key={`closing-doha-${verse.id}`}
                  className="border-b border-border/20 pb-6 last:border-0 last:pb-0"
                >
                  <div className="flex items-start">
                    <div className="bg-[#38bdf8]/10 text-[#38bdf8] text-xs rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1"></div>
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
