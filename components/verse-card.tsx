"use client";

import { useState, useRef } from "react";
import { Play, Pause, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Verse } from "@/lib/chalisa-data";

interface VerseCardProps {
  verse: Verse;
  index: number;
}

export default function VerseCard({ verse, index }: VerseCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = () => {
    if (!("speechSynthesis" in window)) return;

    // Stop any current speech
    window.speechSynthesis.cancel();

    const text = `${verse.hindi}`;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "hi-IN";
    utterance.rate = 0.7;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      setIsPlaying(true);
    };

    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stop();
    } else {
      speak();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className={cn(
          "overflow-hidden bg-background/30 backdrop-blur-md border-border/30",
          "hover:border-[#38bdf8]/30 transition-all duration-300",
          "group relative"
        )}
      >
        <CardContent className="p-6 relative">
          {/* Verse number badge */}
          <div className="absolute -top-3 -left-3 bg-[#38bdf8]/10 border border-[#38bdf8]/30 rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-[#38bdf8] font-orbitron text-sm">
              {verse.id}
            </span>
          </div>

          {/* Hindi verse */}
          <div className="mb-4 mt-3">
            <p className="font-devanagari text-xl md:text-2xl text-center leading-relaxed text-primary">
              {verse.hindi}
            </p>
          </div>

          {/* English transliteration */}
          <div className="mb-4">
            <p className="text-base text-center text-muted-foreground">
              {verse.english}
            </p>
          </div>

          {/* Controls */}
          <div className="flex justify-center space-x-3 pt-2">
            <Button
              size="sm"
              variant="ghost"
              className="text-muted-foreground hover:text-[#38bdf8] hover:bg-[#38bdf8]/10 rounded-full"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 mr-2" />
              ) : (
                <Play className="h-4 w-4 mr-2" />
              )}
              {isPlaying ? "Stop" : "Listen"}
            </Button>

            <Button
              size="sm"
              variant={showMeaning ? "default" : "ghost"}
              className={cn(
                "rounded-full",
                !showMeaning &&
                  "text-muted-foreground hover:text-[#38bdf8] hover:bg-[#38bdf8]/10",
                showMeaning &&
                  "bg-[#38bdf8]/20 text-[#38bdf8] hover:bg-[#38bdf8]/30"
              )}
              onClick={() => setShowMeaning(!showMeaning)}
            >
              <Info className="h-4 w-4 mr-2" />
              Meaning
            </Button>
          </div>

          {/* Meaning panel */}
          <AnimatePresence>
            {showMeaning && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 pt-4 border-t border-border/30"
              >
                <p className="text-sm text-muted-foreground">{verse.meaning}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}
