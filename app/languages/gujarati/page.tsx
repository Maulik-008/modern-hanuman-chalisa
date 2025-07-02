import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AudioPlayer from "@/components/audio-player";

export const metadata = {
  title:
    "Hanuman Chalisa in Gujarati - હનુમાન ચાલીસા | Complete Gujarati Translation",
  description:
    "Read the complete Hanuman Chalisa (હનુમાન ચાલીસા) in Gujarati with accurate translations. All 40 verses of this powerful Hindu devotional hymn dedicated to Lord Hanuman.",
  keywords: [
    "Hanuman Chalisa Gujarati",
    "હનુમાન ચાલીસા",
    "Gujarati Hanuman Chalisa",
    "હનુમાન ચાલીસા ગુજરાતી",
    "Hanuman Chalisa Gujarati translation",
    "Gujarati prayer",
    "Hindu prayer Gujarati",
    "Hanuman mantra Gujarati",
  ],
  openGraph: {
    title: "Hanuman Chalisa in Gujarati - હનુમાન ચાલીસા",
    description:
      "Complete Gujarati translation of Hanuman Chalisa with all 40 verses",
    type: "article",
  },
};

// Gujarati translation of Hanuman Chalisa
const gujaratiDoha = [
  {
    id: 1,
    text: "શ્રીગુરુ ચરણ સરોજ રજ નિજ મનુ મુકુરુ સુધારિ। બરનઉં રઘુબર બિમલ જસુ જો દાયક ફલ ચારિ॥",
    translation:
      "Cleansing the mirror of my mind with the dust of my Guru's lotus feet, I sing the pure fame of Raghuvir, the bestower of the four fruits of life.",
  },
  {
    id: 2,
    text: "બુદ્ધિહીન તનુ જાનિકૈ સુમિરૌ પવન કુમાર। બલ બુદ્ધિ વિદ્યા દેહુ મોહિં હરહુ કલેસ વિકાર॥",
    translation:
      "Knowing this body to be devoid of intelligence, I remember Hanuman, the son of the Wind. Grant me strength, wisdom, and knowledge, and remove my afflictions and impurities.",
  },
];

const gujaratiChalisa = [
  {
    id: 1,
    text: "જય હનુમાન જ્ઞાન ગુણ સાગર। જય કપીસ તિહું લોક ઉજાગર॥",
    translation:
      "Victory to Hanuman, ocean of wisdom and virtue, Hail to the Lord of Monkeys who is known all over the three worlds.",
  },
  {
    id: 2,
    text: "રામ દૂત અતુલિત બલ ધામા। અંજની પુત્ર પવનસુત નામા॥",
    translation:
      "You are the messenger of Rama and the repository of immeasurable strength. Also known as Anjani's son and the son of the Wind God.",
  },
  {
    id: 3,
    text: "મહાવીર વિક્રમ બજરંગી। કુમતિ નિવાર સુમતિ કે સંગી॥",
    translation:
      "Great hero, you are as mighty as a thunderbolt. You are the trusted companion of those with good intellect and you destroy evil thoughts.",
  },
  {
    id: 4,
    text: "કંચન વરણ વિરાજ સુવેસા। કાનન કુંડલ કુંચિત કેસા॥",
    translation:
      "Your body is golden-hued and you are splendidly adorned. You wear earrings and have curly hair.",
  },
  {
    id: 5,
    text: "હાથ વજ્ર ઔ ધ્વજા વિરાજૈ। કાંધે મૂંજ જનેઉ સાજૈ॥",
    translation:
      "In your hands shine the mace and a flag. A sacred thread of munja grass adorns your shoulder.",
  },
  {
    id: 6,
    text: "શંકર સુવન કેસરી નંદન। તેજ પ્રતાપ મહા જગ વંદન॥",
    translation:
      "You are the embodiment of Shiva (or son of Shankara indirectly) and the son of Kesari. Your radiance and glory are revered throughout the world.",
  },
  {
    id: 7,
    text: "વિદ્યાવાન ગુણી અતિ ચાતુર। રામ કાજ કરિબે કો આતુર॥",
    translation:
      "You are knowledgeable, virtuous, and very clever. You are always eager to do Rama's work.",
  },
  {
    id: 8,
    text: "પ્રભુ ચરિત્ર સુનિબે કો રસિયા। રામ લખન સીતા મન બસિયા॥",
    translation:
      "You delight in listening to the Lord's deeds. Rama, Lakshmana, and Sita reside in your heart.",
  },
  {
    id: 9,
    text: "સૂક્ષ્મ રૂપ ધરિ સિયહિં દિખાવા। વિકટ રૂપ ધરિ લંક જરાવા॥",
    translation:
      "Assuming a subtle form, you appeared to Sita. Assuming a fearsome form, you burned Lanka.",
  },
  {
    id: 10,
    text: "ભીમ રૂપ ધરિ અસુર સંહારે। રામચંદ્ર કે કાજ સઁવારે॥",
    translation:
      "Assuming a mighty form, you destroyed the demons. You accomplished the tasks of Lord Ramachandra.",
  },
  {
    id: 11,
    text: "લાય સંજીવન લખન જિયાયે। શ્રી રઘુબીર હરષિ ઉર લાયે॥",
    translation:
      "Bringing the Sanjeevani herb, you revived Lakshmana. Shri Raghuvir embraced you joyfully.",
  },
  {
    id: 12,
    text: "રઘુપતિ કીન્હી બહુત બડાઈ। તુમ મમ પ્રિય ભરતહિ સમ ભાઈ॥",
    translation:
      'Raghupati (Rama) praised you greatly, saying, "You are as dear to me as my brother Bharata."',
  },
  {
    id: 13,
    text: "સહસ બદન તુમ્હરો જસ ગાવૈં। અસ કહિ શ્રીપતિ કંઠ લગાવૈં॥",
    translation:
      '"The thousand-hooded Sheshanaga sings your glories," saying this, Shri Rama embraced you.',
  },
  {
    id: 14,
    text: "સનકાદિક બ્રહ્માદિ મુનીસા। નારદ સારદ સહિત અહીસા॥",
    translation:
      "Sanaka and other sages, Brahma and other gods, Narada, Sharada (Saraswati), and the king of serpents (Sheshanaga).",
  },
  {
    id: 15,
    text: "જમ કુબેર દિગપાલ કહાં તે। કવિ કોબિદ કહિ સકે કહાં તે॥",
    translation:
      "Yama, Kubera, and the Digpalas (guardians of the directions); how can poets and scholars (even begin to) describe your glory?",
  },
  {
    id: 16,
    text: "તુમ ઉપકાર સુગ્રીવહિં કીન્હા। રામ મિલાય રાજપદ દીન્હા॥",
    translation:
      "You rendered a great service to Sugriva by introducing him to Rama and restoring his kingdom.",
  },
  {
    id: 17,
    text: "તુમ્હરો મંત્ર વિભીષણ માના। લંકેશ્વર ભયે સબ જગ જાના॥",
    translation:
      "Vibhishana heeded your counsel and became the king of Lanka; the whole world knows this.",
  },
  {
    id: 18,
    text: "જુગ સહસ્ર યોજન પર ભાનૂ। લીલ્યો તાહિ મધુર ફલ જાનૂ॥",
    translation:
      "You swallowed the sun, situated thousands of yojanas away, thinking it to be a sweet fruit.",
  },
  {
    id: 19,
    text: "પ્રભુ મુદ્રિકા મેલિ મુખ માહીં। જલધિ લાંઘિ ગયે અચરજ નાહીં॥",
    translation:
      "Carrying the Lord's ring in your mouth, you leaped across the ocean; there is no wonder in this.",
  },
  {
    id: 20,
    text: "દુર્ગમ કાજ જગત કે જેતે। સુગમ અનુગ્રહ તુમ્હરે તેતે॥",
    translation: "All difficult tasks in the world become easy by your grace.",
  },
  {
    id: 21,
    text: "રામ દુઆરે તુમ રખવારે। હોત ન આજ્ઞા બિનુ પૈસારે॥",
    translation:
      "You are the guardian at Rama's door; no one can enter without your permission.",
  },
  {
    id: 22,
    text: "સબ સુખ લહૈ તુમ્હારી સરના। તુમ રક્ષક કાહૂ કો ડર ના॥",
    translation:
      "All happiness is attained by taking refuge in you; with you as protector, there is no fear.",
  },
  {
    id: 23,
    text: "આપન તેજ સમ્હારો આપૈ। તીનોં લોક હાંક તે કાંપૈ॥",
    translation:
      "When you roar, all three worlds tremble; only you can control your own might.",
  },
  {
    id: 24,
    text: "ભૂત પિસાચ નિકટ નહિં આવૈ। મહબીર જબ નામ સુનાવૈ॥",
    translation:
      "Ghosts and evil spirits do not come near when the name of Mahavir (Hanuman) is uttered.",
  },
  {
    id: 25,
    text: "નાસૈ રોગ હરૈ સબ પીરા। જપત નિરંતર હનુમત બીરા॥",
    translation:
      "Diseases are destroyed and all suffering is removed by constantly chanting the name of the brave Hanuman.",
  },
  {
    id: 26,
    text: "સંકટ તેં હનુમાન છુડાવૈ। મન ક્રમ બચન ધ્યાન જો લાવૈ॥",
    translation:
      "Hanuman releases from troubles those who meditate on him in thought, word, and deed.",
  },
  {
    id: 27,
    text: "સબ પર રામ તપસ્વી રાજા। તિન કે કાજ સકલ તુમ સાજા॥",
    translation:
      "Rama is the ascetic king above all; you accomplish all his tasks.",
  },
  {
    id: 28,
    text: "ઔર મનોરથ જો કોઈ લાવૈ। સોઈ અમિત જીવન ફલ પાવૈ॥",
    translation:
      "And whoever brings any other desire (to you), they obtain the abundant fruit of life.",
  },
  {
    id: 29,
    text: "ચારો જુગ પરતાપ તુમ્હારા। હૈ પરસિદ્ધ જગત ઉજિયારા॥",
    translation:
      "Your glory prevails through all four ages; your fame illuminates the world.",
  },
  {
    id: 30,
    text: "સાધુ સંત કે તુમ રખવારે। અસુર નિકંદન રામ દુલારે॥",
    translation:
      "You are the protector of saints and sages, the destroyer of demons, and dear to Rama.",
  },
  {
    id: 31,
    text: "અષ્ટ સિદ્ધિ નવ નિધિ કે દાતા। અસ બર દીન જાનકી માતા॥",
    translation:
      "Mother Janaki (Sita) granted you the boon of being the bestower of the eight siddhis (supernatural powers) and nine nidhis (divine treasures).",
  },
  {
    id: 32,
    text: "રામ રસાયન તુમ્હરે પાસા। સદા રહો રઘુપતિ કે દાસા॥",
    translation:
      "You possess the elixir of Rama's name; you are ever the servant of Raghupati.",
  },
  {
    id: 33,
    text: "તુમ્હરે ભજન રામ કો પાવૈ। જનમ જનમ કે દુખ બિસરાવૈ॥",
    translation:
      "By devotion to you, one attains Rama and forgets the sorrows of many lifetimes.",
  },
  {
    id: 34,
    text: "અંત કાલ રઘુબર પુર જાઈ। જહાં જન્મ હરિભક્ત કહાઈ॥",
    translation:
      "At the end of life, one goes to Raghubar's (Rama's) abode, and in future births, is called a devotee of Hari.",
  },
  {
    id: 35,
    text: "ઔર દેવતા ચિત્ત ન ધરઈ। હનુમત સેઇ સર્બ સુખ કરઈ॥",
    translation:
      "One need not hold any other deity in mind; by serving Hanuman, all happiness is achieved.",
  },
  {
    id: 36,
    text: "સંકટ કટૈ મિટૈ સબ પીરા। જો સુમિરૈ હનુમત બલબીરા॥",
    translation:
      "Troubles are removed and all pains cease for one who remembers the mighty Hanuman.",
  },
  {
    id: 37,
    text: "જય જય જય હનુમાન ગોસાઈં। કૃપા કરહુ ગુરુદેવ કી નાઈં॥",
    translation:
      "Victory, victory, victory to Lord Hanuman! Bestow your grace, like a divine Guru.",
  },
  {
    id: 38,
    text: "જો સત બાર પાઠ કર કોઈ। છૂટહિ બંદિ મહા સુખ હોઈ॥",
    translation:
      "Whoever recites this a hundred times is freed from bondage and attains great happiness.",
  },
  {
    id: 39,
    text: "જો યહ પઢૈ હનુમાન ચાલીસા। હોય સિદ્ધિ સાખી ગૌરીસા॥",
    translation:
      "Whoever reads this Hanuman Chalisa will achieve success; Lord Shiva (Gaurisa) is witness.",
  },
  {
    id: 40,
    text: "તુલસીદાસ સદા હરિ ચેરા। કીજૈ નાથ હૃદય મહં ડેરા॥",
    translation:
      "Tulsidas is always a servant of Hari (Rama); O Lord, make your abode in my heart.",
  },
];

// Optional: Add the closing Doha if you want to display it separately
const gujaratiClosingDoha = [
  {
    id: 1,
    text: "પવનતનય સંકટ હરણ મંગલ મૂરતિ રૂપ। રામ લખન સીતા સહિત હૃદય બસહુ સુર ભૂપ॥",
    translation:
      "O Son of the Wind, remover of distress, embodiment of auspiciousness. With Rama, Lakshmana, and Sita, reside in my heart, O king of gods (Hanuman).",
  },
];

export default function GujaratiChalisaPage() {
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
            હનુમાન ચાલીસા
          </h1>
          <h2 className="font-orbitron text-xl md:text-2xl mb-6 text-[#38bdf8]">
            GUJARATI TRANSLATION
          </h2>
          <p className="text-muted-foreground mb-6">
            Complete Gujarati translation of the Hanuman Chalisa, a devotional
            hymn dedicated to Lord Hanuman
          </p>

          {/* Audio Player */}
          <div className="max-w-md mx-auto">
            <AudioPlayer
              text={`${gujaratiDoha
                .map((v) => v.text)
                .join(" ")} ${gujaratiChalisa
                .map((v) => v.text)
                .join(" ")} ${gujaratiClosingDoha
                .map((v) => v.text)
                .join(" ")}`}
              language="gu-IN"
              title="Listen in Gujarati"
            />
          </div>
        </div>

        <Card className="max-w-3xl mx-auto overflow-hidden bg-background/30 backdrop-blur-md border-border/30 mb-10">
          <CardContent className="p-6 md:p-8">
            <h3 className="font-orbitron text-lg text-[#38bdf8] mb-6">
              દોહા (Opening Verses)
            </h3>
            <div className="space-y-6">
              {gujaratiDoha.map((verse) => (
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
              ચૌપાઈ (Main Verses)
            </h3>
            <div className="space-y-6">
              {gujaratiChalisa.map((verse) => (
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

        {/* Optional: Section for Closing Doha */}
        <Card className="max-w-3xl mx-auto overflow-hidden bg-background/30 backdrop-blur-md border-border/30 mb-10">
          <CardContent className="p-6 md:p-8">
            <h3 className="font-orbitron text-lg text-[#38bdf8] mb-6">
              દોહા (Closing Verse)
            </h3>
            <div className="space-y-6">
              {gujaratiClosingDoha.map((verse) => (
                <div
                  key={`closing-doha-${verse.id}`}
                  className="border-b border-border/20 pb-6 last:border-0 last:pb-0"
                >
                  <div className="flex items-start">
                    <div className="bg-[#38bdf8]/10 text-[#38bdf8] text-xs rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      {/* You can choose not to show number for a single closing doha or keep it as 1 */}
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
