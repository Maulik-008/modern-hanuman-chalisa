"use client";

import { useState } from "react";
import Link from "next/link";
import { chalisa, doha } from "@/lib/chalisa-data";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";

export default function MeaningPage() {
  const [expandAll, setExpandAll] = useState(false);
  
  const allVerses = [...doha, ...chalisa];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-background">
      {/* Background decorative elements */}
      <div className="fixed inset-0 bg-[url('https://images.pexels.com/photos/7233120/pexels-photo-7233120.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5 z-0"></div>
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
        
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-primary">
            Verse-by-Verse <span className="text-[#38bdf8]">Meaning</span>
          </h1>
          <p className="text-muted-foreground">
            Explore the profound spiritual significance of each verse in the Hanuman Chalisa
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <Button
            variant="outline"
            className="border-[#38bdf8]/30 text-[#38bdf8] hover:bg-[#38bdf8]/10 rounded-full"
            onClick={() => setExpandAll(!expandAll)}
          >
            {expandAll ? (
              <>
                <ChevronUp className="h-4 w-4 mr-2" />
                Collapse All
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-2" />
                Expand All
              </>
            )}
          </Button>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion 
            type="multiple" 
            defaultValue={expandAll ? allVerses.map(verse => `verse-${verse.id}`) : []}
            className="space-y-4"
          >
            {allVerses.map((verse, index) => (
              <AccordionItem
                key={`verse-${verse.id}`}
                value={`verse-${verse.id}`}
                className="border border-border/30 rounded-lg overflow-hidden bg-background/30 backdrop-blur-md hover:border-[#38bdf8]/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <div className="bg-[#38bdf8]/10 border border-[#38bdf8]/30 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#38bdf8] font-orbitron text-xs">{verse.id}</span>
                    </div>
                    <div>
                      <p className="font-devanagari text-lg text-primary">
                        {verse.hindi.split('\n')[0]}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {verse.english.split('\n')[0]}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="pt-2 border-t border-border/30">
                    <div className="mb-4">
                      <p className="font-devanagari text-lg text-primary my-2">
                        {verse.hindi}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {verse.english}
                      </p>
                    </div>
                    <div className="bg-[#38bdf8]/5 p-4 rounded-lg border border-[#38bdf8]/10">
                      <h4 className="text-sm font-medium text-[#38bdf8] mb-2">Meaning & Significance</h4>
                      <p className="text-sm text-muted-foreground">
                        {verse.meaning}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}