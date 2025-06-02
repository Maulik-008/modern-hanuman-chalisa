"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import VerseCard from "@/components/verse-card";
import { chalisa } from "@/lib/chalisa-data";
import Link from "next/link";

export default function VersePreview() {
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);
  const previewVerses = chalisa.slice(0, 4); // Only show first 4 verses in preview
  const currentVerse = previewVerses[currentVerseIndex];

  const goToNextVerse = () => {
    setCurrentVerseIndex((prev) => 
      prev < previewVerses.length - 1 ? prev + 1 : prev
    );
  };

  const goToPrevVerse = () => {
    setCurrentVerseIndex((prev) => 
      prev > 0 ? prev - 1 : prev
    );
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0b1120]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0b1120]/30 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#38bdf8]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#38bdf8]/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            EXPLORE THE <span className="text-[#38bdf8]">VERSES</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Preview some verses from the Hanuman Chalisa and navigate between them
          </motion.p>
        </div>
        
        <div className="max-w-2xl mx-auto mb-12">
          <VerseCard verse={currentVerse} index={currentVerseIndex} />
        </div>
        
        <div className="flex justify-center items-center space-x-6 mb-12">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border/50 text-muted-foreground hover:text-[#38bdf8] hover:border-[#38bdf8]/30"
            onClick={goToPrevVerse}
            disabled={currentVerseIndex === 0}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          
          <div className="text-sm text-muted-foreground">
            Verse <span className="text-primary font-medium">{currentVerseIndex + 1}</span> of <span className="text-primary font-medium">{previewVerses.length}</span>
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border/50 text-muted-foreground hover:text-[#38bdf8] hover:border-[#38bdf8]/30"
            onClick={goToNextVerse}
            disabled={currentVerseIndex === previewVerses.length - 1}
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="text-center">
          <Link href="/chalisa">
            <Button 
              variant="outline" 
              className="border-[#38bdf8]/30 text-[#38bdf8] hover:bg-[#38bdf8]/10 font-medium px-6 rounded-full"
            >
              View All Verses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}