"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2 } from "lucide-react";

interface VerseAudioProps {
  text: string;
  language?: string;
  verseNumber?: number;
}

export default function VerseAudio({
  text,
  language = "hi-IN",
  verseNumber,
}: VerseAudioProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  const speak = () => {
    if (!("speechSynthesis" in window)) {
      setIsSupported(false);
      return;
    }

    // Stop any current speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = 0.8;
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

    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  if (!isSupported) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      <Button
        size="sm"
        variant="ghost"
        onClick={isPlaying ? stop : speak}
        className="rounded-full hover:bg-[#38bdf8]/10"
        title={`${isPlaying ? "Stop" : "Play"} verse ${verseNumber || ""}`}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4 text-[#38bdf8]" />
        ) : (
          <Play className="h-4 w-4 text-[#38bdf8]" />
        )}
      </Button>
      <Volume2 className="h-3 w-3 text-muted-foreground" />
    </div>
  );
}
