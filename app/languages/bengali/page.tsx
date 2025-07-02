import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AudioPlayer from "@/components/audio-player";

export const metadata = {
  title:
    "Hanuman Chalisa in Bengali - হনুমান চালিশা | Complete Bengali Translation",
  description:
    "Read the complete Hanuman Chalisa (হনুমান চালিশা) in Bengali with accurate translations. All 40 verses of this powerful Hindu devotional hymn dedicated to Lord Hanuman.",
  keywords: [
    "Hanuman Chalisa Bengali",
    "হনুমান চালিশা",
    "Bengali Hanuman Chalisa",
    "Hanuman Chalisa Bangla",
    "হনুমান চালিশা বাংলা",
    "Bengali prayer",
    "Hindu prayer Bengali",
    "Hanuman mantra Bengali",
  ],
  openGraph: {
    title: "Hanuman Chalisa in Bengali - হনুমান চালিশা",
    description:
      "Complete Bengali translation of Hanuman Chalisa with all 40 verses",
    type: "article",
  },
};

// Bengali translation of Hanuman Chalisa - Complete
const bengaliDoha = [
  {
    id: 1,
    text: "শ্রীগুরু চরণ সরোজ রজ নিজ মনু মুকুরু সুধারি।\nবরনউঁ রঘুবর বিমল যশু জো দায়ক ফল চারি॥",
    translation:
      "Cleansing the mirror of my mind with the dust of my Guru's lotus feet, I sing the pure fame of Raghuvir, the bestower of the four fruits of life.",
  },
  {
    id: 2,
    text: "বুদ্ধিহীন তনু জানিকৈ সুমিরৌ পবন কুমার।\nবল বুদ্ধি বিদ্যা দেহু মোহিং হরহু কলেস বিকার॥",
    translation:
      "Knowing this body to be devoid of intelligence, I remember Hanuman, the son of the Wind. Grant me strength, wisdom, and knowledge, and remove my afflictions and impurities.",
  },
];

const bengaliChalisa = [
  {
    id: 1,
    text: "জয় হনুমান জ্ঞান গুণ সাগর।\nজয় কপীস তিহুঁ লোক উজাগর॥",
    translation:
      "Victory to Hanuman, ocean of wisdom and virtue, Hail to the Lord of Monkeys who is known all over the three worlds.",
  },
  {
    id: 2,
    text: "রাম দূত অতুলিত বল ধামা।\nঅঞ্জনি পুত্র পবনসুত নামা॥",
    translation:
      "You are the messenger of Rama and the repository of immeasurable strength. Also known as Anjani's son and the son of the Wind God.",
  },
  {
    id: 3,
    text: "মহাবীর বিক্রম বজরঙ্গী।\nকুমতি নিবার সুমতি কে সঙ্গী॥",
    translation:
      "Great hero, you are as mighty as a thunderbolt. You are the trusted companion of those with good intellect and you destroy evil thoughts.",
  },
  {
    id: 4,
    text: "কঞ্চন বরন বিরাজ সুবেসা।\nকানন কুণ্ডল কুঞ্চিত কেসা॥",
    translation:
      "Your body is golden-hued and you are splendidly adorned. You wear earrings and have curly hair.",
  },
  {
    id: 5,
    text: "হাথ বজ্র ঔ ধ্বজা বিরাজৈ।\nকাঁধে মূঁজ জনেঊ সাজৈ॥",
    translation:
      "In your hands shine the mace and a flag. A sacred thread of munja grass adorns your shoulder.",
  },
  {
    id: 6,
    text: "শঙ্কর সুবন কেসরী নন্দন।\nতেজ প্রতাপ মহা জগ বন্দন॥",
    translation:
      "You are the embodiment of Shiva and the son of Kesari. Your radiance and glory are revered throughout the world.",
  },
  {
    id: 7,
    text: "বিদ্যাবান গুণী অতি চাতুর।\nরাম কাজ করিবে কো আতুর॥",
    translation:
      "You are wise, virtuous and very clever. You are always eager to do Lord Rama's work.",
  },
  {
    id: 8,
    text: "প্রভু চরিত্র সুনিবে কো রসিয়া।\nরাম লখন সীতা মন বসিয়া॥",
    translation:
      "You delight in hearing about the Lord's deeds. Rama, Lakshmana, and Sita dwell in your heart.",
  },
  {
    id: 9,
    text: "সূক্ষ্ম রূপ ধরি সিয়হিং দিখাবা।\nবিকট রূপ ধরি লঙ্ক জরাবা॥",
    translation:
      "Taking a tiny form, you appeared before Sita. Taking a fierce form, you burnt Lanka.",
  },
  {
    id: 10,
    text: "ভীম রূপ ধরি অসুর সংহারে।\nরামচন্দ্র কে কাজ সঁবারে॥",
    translation:
      "Taking a terrible form, you killed the demons. You accomplished Lord Rama's mission.",
  },
  {
    id: 11,
    text: "লায় সঞ্জীবন লখন জিয়ায়ে।\nশ্রী রঘুবীর হরষি উর লায়ে॥",
    translation:
      "Bringing the life-giving herb (Sanjivani), you revived Lakshmana. Rama embraced you with joy.",
  },
  {
    id: 12,
    text: "রঘুপতি কীন্হী বহুত বড়াঈ।\nতুম মম প্রিয় ভরতহি সম ভাঈ॥",
    translation:
      "Lord Rama praised you greatly saying, 'You are as dear to me as my brother Bharata.'",
  },
  {
    id: 13,
    text: "সহস বদন তুম্হরো জস গাবৈং।\nঅস কহি শ্রীপতি কণ্ঠ লগাবৈं॥",
    translation:
      "The thousand-headed serpent sings your glory. Saying this, Shri Hari embraced you.",
  },
  {
    id: 14,
    text: "সনকাদিক ব্রহ্মাদি মুনীসা।\nনারদ সারদ সহিত অহীসা॥",
    translation:
      "Sanak and other sages, Brahma and other gods, Narada, Saraswati and the King of serpents all sing your praise.",
  },
  {
    id: 15,
    text: "জম কুবের দিগপাল জহাঁ তে।\nকবি কোবিদ কহি সকে কহাঁ তে॥",
    translation:
      "Yama, Kubera and the guardians of the directions, poets and scholars cannot express your glory.",
  },
  {
    id: 16,
    text: "তুম উপকার সুগ্রীবহিং কীন্হা।\nরাম মিলায় রাজ পদ দীন্হা॥",
    translation:
      "You did Sugriva a great favor by introducing him to Rama and getting him the kingship.",
  },
  {
    id: 17,
    text: "তুম্হরো মন্ত্র বিভীষণ মানা।\nলঙ্কেশ্বর ভয়ে সব জগ জানা॥",
    translation:
      "Vibhishana heeded your advice and became the king of Lanka, as the whole world knows.",
  },
  {
    id: 18,
    text: "যুগ সহস্র যোজন পর ভানূ।\nলীল্যো তাহি মধুর ফল জানূ॥",
    translation:
      "The sun is thousands of miles away, but you swallowed it thinking it was a sweet fruit.",
  },
  {
    id: 19,
    text: "প্রভু মুদ্রিকা মেলি মুখ মাহীং।\nজলধি লাঁঘি গয়ে অচরজ নাহীং॥",
    translation:
      "With the Lord's ring in your mouth, you crossed the ocean – no wonder in that.",
  },
  {
    id: 20,
    text: "দুর্গম কাজ জগত কে জেতে।\nসুগম অনুগ্রহ তুম্হরে তেতে॥",
    translation:
      "All the difficult tasks in the world become easy by your grace.",
  },
  {
    id: 21,
    text: "রাম দুআরে তুম রখবারে।\nহোত ন আজ্ঞা বিনু পৈসারে॥",
    translation:
      "You are the guardian at Rama's door. No one can enter without your permission.",
  },
  {
    id: 22,
    text: "সব সুখ লহৈ তুম্হারী সরনা।\nতুম রক্ষক কাহূ কো ডর না॥",
    translation:
      "All find happiness in your refuge. When you are the protector, there is no fear from anyone.",
  },
  {
    id: 23,
    text: "আপন তেজ সম্হারো আপৈ।\nতীনোঁ লোক হাঁক তেঁ কাঁপৈ॥",
    translation:
      "You alone can sustain your own splendor. All three worlds tremble at your roar.",
  },
  {
    id: 24,
    text: "ভূত পিসাচ নিকট নহিং আবৈ।\nমহাবীর জব নাম সুনাবৈ॥",
    translation:
      "Ghosts and evil spirits do not come near when one chants the name of the great hero, Hanuman.",
  },
  {
    id: 25,
    text: "নাসৈ রোগ হরৈ সব পীরা।\nজপত নিরন্তর হনুমত বীরা॥",
    translation:
      "All diseases and pain are destroyed for those who continuously chant the name of brave Hanuman.",
  },
  {
    id: 26,
    text: "সঙ্কট তেঁ হনুমান ছুড়াবৈ।\nমন ক্রম বচন ধ্যান জো লাবৈ॥",
    translation:
      "Hanuman relieves from all afflictions those who remember him in thought, word and deed.",
  },
  {
    id: 27,
    text: "সব পর রাম তপস্বী রাজা।\nতিন কে কাজ সকল তুম সাজা॥",
    translation:
      "Ram, the ascetic king, is supreme over all. You execute all his tasks.",
  },
  {
    id: 28,
    text: "ঔর মনোরথ জো কোঈ লাবৈ।\nসোঈ অমিত জীবন ফল পাবৈ॥",
    translation:
      "Whoever comes to you with any desire, obtains the imperishable fruit of life.",
  },
  {
    id: 29,
    text: "চারোঁ যুগ পরতাপ তুম্হারা।\nহৈ পরসিদ্ধ জগত উজিয়ারা॥",
    translation:
      "Your glory is renowned in all four ages. Your fame is resplendent throughout the world.",
  },
  {
    id: 30,
    text: "সাধু সন্ত কে তুম রখবারে।\nঅসুর নিকন্দন রাম দুলারে॥",
    translation:
      "You are the protector of saints and sages. You are the destroyer of demons and the beloved of Rama.",
  },
  {
    id: 31,
    text: "অষ্ট সিদ্ধি নৌ নিধি কে দাতা।\nঅস বর দীন জানকী মাতা॥",
    translation:
      "You bestow the eight powers and the nine treasures as blessed by Mother Janaki (Sita).",
  },
  {
    id: 32,
    text: "রাম রসায়ন তুম্হরে পাসা।\nসদা রহো রঘুপতি কে দাসা॥",
    translation:
      "You possess the elixir of Rama's name. You are eternally the servant of Lord Raghupati.",
  },
  {
    id: 33,
    text: "তুম্হরে ভজন রাম কো পাবৈ।\nজনম জনম কে দুখ বিসরাবৈ॥",
    translation:
      "By worshipping you, one attains Rama and forgets the sorrows of many lives.",
  },
  {
    id: 34,
    text: "অন্ত কাল রঘুবর পুর জাঈ।\nজহাঁ জন্ম হরি ভক্ত কহাঈ॥",
    translation:
      "At the time of death, one goes to Lord Rama's abode and is born again as God's devotee.",
  },
  {
    id: 35,
    text: "ঔর দেবতা চিত্ত ন ধরঈ।\nহনুমত সেঈ সর্ব সুখ করঈ॥",
    translation:
      "One need not think of any other deity. Serving Hanuman brings all happiness.",
  },
  {
    id: 36,
    text: "সঙ্কট কটৈ মিটৈ সব পীরা।\nজো সুমিরৈ হনুমত বলবীরা॥",
    translation:
      "All troubles are removed and all pain disappears, for those who remember the mighty and brave Hanuman.",
  },
  {
    id: 37,
    text: "জয় জয় জয় হনুমান গোসাঈং।\nকৃপা করহু গুরুদেব কী নাঈং॥",
    translation:
      "Victory, victory, victory to Lord Hanuman! Please bestow your grace as my supreme Guru.",
  },
  {
    id: 38,
    text: "জো সত বার পাঠ কর কোঈ।\nছূটহি বন্দি মহা সুখ হোঈ॥",
    translation:
      "Whoever recites this a hundred times will be freed from bondage and will obtain great bliss.",
  },
  {
    id: 39,
    text: "জো যহ পঢ়ৈ হনুমান চালীসা।\nহোয় সিদ্ধি সাখী গৌরীসা॥",
    translation:
      "One who reads this Hanuman Chalisa will achieve success, as Lord Shiva himself testifies.",
  },
  {
    id: 40,
    text: "তুলসীদাস সদা হরি চেরা।\nকীজৈ নাথ হৃদয় মহঁ ডেরা॥",
    translation:
      "Tulsidas, the eternal servant of God, prays: 'O Lord, please dwell in my heart.'",
  },
];

const bengaliClosingDoha = [
  {
    id: 1,
    text: "পবন তনয় সঙ্কট হরন, মঙ্গল মূরতি রূপ।\nরাম লখন সীতা সহিত, হৃদয় বসহু সুর ভূপ॥",
    translation:
      "O son of the wind, remover of troubles, embodiment of auspiciousness, along with Rama, Lakshmana and Sita, please dwell in my heart, O king of gods.",
  },
];

export default function BengaliChalisaPage() {
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
            হনুমান চালিশা
          </h1>
          <h2 className="font-orbitron text-xl md:text-2xl mb-6 text-[#38bdf8]">
            BENGALI TRANSLATION
          </h2>
          <p className="text-muted-foreground mb-6">
            Complete Bengali translation of the Hanuman Chalisa, a powerful
            devotional hymn dedicated to Lord Hanuman consisting of 40 verses
          </p>

          {/* Audio Player */}
          <div className="max-w-md mx-auto">
            <AudioPlayer
              text={`${bengaliDoha
                .map((v) => v.text)
                .join(" ")} ${bengaliChalisa
                .map((v) => v.text)
                .join(" ")} ${bengaliClosingDoha.map((v) => v.text).join(" ")}`}
              language="bn-IN"
              title="Listen in Bengali"
            />
          </div>
        </div>

        <Card className="max-w-3xl mx-auto overflow-hidden bg-background/30 backdrop-blur-md border-border/30 mb-10">
          <CardContent className="p-6 md:p-8">
            <h3 className="font-orbitron text-lg text-[#38bdf8] mb-6">
              দোহা (Opening Verses)
            </h3>
            <div className="space-y-6">
              {bengaliDoha.map((verse) => (
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
              চৌপাঈ (Main Verses)
            </h3>
            <div className="space-y-6">
              {bengaliChalisa.map((verse) => (
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
              দোহা (Closing Verse)
            </h3>
            <div className="space-y-6">
              {bengaliClosingDoha.map((verse) => (
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
