import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export const metadata = {
  title: 'About Hanuman | Hanuman Chalisa',
  description: 'Learn about Lord Hanuman and the significance of the Hanuman Chalisa',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-background">
      {/* Background decorative elements */}
      <div className="fixed inset-0 bg-[url('https://images.pexels.com/photos/7730440/pexels-photo-7730440.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5 z-0"></div>
      <div className="fixed top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent z-0"></div>
      <div className="fixed bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent z-0"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex items-center mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm" className="rounded-full">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-primary">
              About <span className="text-[#38bdf8]">Lord Hanuman</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the divine personality and profound significance of Lord Hanuman in Hindu mythology
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="col-span-1">
              <div className="sticky top-24 overflow-hidden rounded-lg bg-[#0b1120] border border-border/30">
                <div className="relative aspect-[3/4]">
                  <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/11514182/pexels-photo-11514182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/50 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 p-6 text-center w-full">
                    <h2 className="font-devanagari text-2xl font-bold text-white mb-1">श्री हनुमान</h2>
                    <p className="font-orbitron text-sm text-[#38bdf8]">LORD HANUMAN</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-span-2 space-y-8">
              <div className="bg-background/30 backdrop-blur-sm border border-border/30 rounded-xl p-6 group hover:border-[#38bdf8]/30 transition-all duration-300">
                <h2 className="text-xl font-semibold mb-3 text-primary">Divine Origin</h2>
                <p className="text-muted-foreground">
                  Lord Hanuman is the son of Anjana and Kesari, with the Wind-God Vayu being his spiritual father. 
                  Born as a vanara (a being that appears to be part monkey, part human), Hanuman was blessed with 
                  tremendous strength, intelligence, and divine powers from an early age.
                </p>
              </div>
              
              <div className="bg-background/30 backdrop-blur-sm border border-border/30 rounded-xl p-6 group hover:border-[#38bdf8]/30 transition-all duration-300">
                <h2 className="text-xl font-semibold mb-3 text-primary">Powers and Abilities</h2>
                <p className="text-muted-foreground mb-3">
                  Hanuman possesses extraordinary abilities that make him one of the most powerful figures in Hindu mythology:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                  <li>Immense physical strength</li>
                  <li>Ability to change his size at will</li>
                  <li>Power to fly across vast distances</li>
                  <li>Immunity to weapons</li>
                  <li>Exceptional intelligence and wisdom</li>
                  <li>Perfect devotion and selfless service</li>
                </ul>
              </div>
              
              <div className="bg-background/30 backdrop-blur-sm border border-border/30 rounded-xl p-6 group hover:border-[#38bdf8]/30 transition-all duration-300">
                <h2 className="text-xl font-semibold mb-3 text-primary">Role in the Ramayana</h2>
                <p className="text-muted-foreground">
                  Hanuman played a pivotal role in the Hindu epic Ramayana. As a devoted servant of Lord Rama, 
                  he helped in the search for Sita after she was abducted by Ravana. His journey to Lanka, 
                  discovering Sita, burning down parts of Lanka, and participating in the war against Ravana 
                  showcase his unwavering devotion and extraordinary capabilities.
                </p>
              </div>
              
              <div className="bg-background/30 backdrop-blur-sm border border-border/30 rounded-xl p-6 group hover:border-[#38bdf8]/30 transition-all duration-300">
                <h2 className="text-xl font-semibold mb-3 text-primary">Hanuman Chalisa</h2>
                <p className="text-muted-foreground">
                  The Hanuman Chalisa is a devotional hymn composed by the 16th-century poet Tulsidas. 
                  Consisting of forty chaupais (verses) in the Awadhi language, it glorifies Lord Hanuman, 
                  recounting his virtues, powers, and heroic deeds. The Chalisa is believed to invoke the 
                  divine blessings of Lord Hanuman, providing strength, courage, and protection to those who recite it.
                </p>
              </div>
              
              <div className="bg-background/30 backdrop-blur-sm border border-border/30 rounded-xl p-6 group hover:border-[#38bdf8]/30 transition-all duration-300">
                <h2 className="text-xl font-semibold mb-3 text-primary">Significance and Worship</h2>
                <p className="text-muted-foreground mb-3">
                  Lord Hanuman is one of the most beloved and worshipped deities in Hinduism. He is revered for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                  <li>Embodying perfect devotion (bhakti) to Lord Rama</li>
                  <li>Representing strength, courage, and resilience</li>
                  <li>Being a symbol of selfless service</li>
                  <li>Protecting devotees from evil forces and negative energies</li>
                  <li>Bestowing wisdom and knowledge</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/chalisa">
              <Button 
                className="bg-[#38bdf8] hover:bg-[#38bdf8]/80 text-[#0b1120] font-medium px-6 rounded-full"
              >
                Explore the Hanuman Chalisa
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}