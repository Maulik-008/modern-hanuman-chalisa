"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Play,
  Pause,
  Square,
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";

interface AudioPlayerProps {
  text: string;
  language?: string;
  title?: string;
  onPlay?: () => void;
  onPause?: () => void;
  onStop?: () => void;
}

export default function AudioPlayer({
  text,
  language = "hi-IN",
  title = "Audio Player",
  onPlay,
  onPause,
  onStop,
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [volume, setVolume] = useState([1]);
  const [rate, setRate] = useState([1]);
  const [isMuted, setIsMuted] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    setIsSupported("speechSynthesis" in window);
  }, []);

  const speak = () => {
    if (!isSupported) return;

    // Stop any current speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.volume = isMuted ? 0 : volume[0];
    utterance.rate = rate[0];
    utterance.pitch = 1;

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      onPlay?.();
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      onStop?.();
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
      onStop?.();
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const pause = () => {
    if (!isSupported) return;
    window.speechSynthesis.pause();
    setIsPaused(true);
    setIsPlaying(false);
    onPause?.();
  };

  const resume = () => {
    if (!isSupported) return;
    window.speechSynthesis.resume();
    setIsPaused(false);
    setIsPlaying(true);
    onPlay?.();
  };

  const stop = () => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    onStop?.();
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (utteranceRef.current) {
      utteranceRef.current.volume = isMuted ? volume[0] : 0;
    }
  };

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume);
    if (utteranceRef.current && !isMuted) {
      utteranceRef.current.volume = newVolume[0];
    }
  };

  const handleRateChange = (newRate: number[]) => {
    setRate(newRate);
    if (utteranceRef.current) {
      utteranceRef.current.rate = newRate[0];
    }
  };

  if (!isSupported) {
    return (
      <Card className="bg-background/30 backdrop-blur-md border-border/30">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground text-center">
            Text-to-speech is not supported in your browser.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-background/30 backdrop-blur-md border-border/30">
      <CardContent className="p-4">
        <div className="flex flex-col space-y-4">
          {/* Title */}
          <div className="text-center">
            <h3 className="text-sm font-medium text-[#38bdf8]">{title}</h3>
          </div>

          {/* Main Controls */}
          <div className="flex items-center justify-center space-x-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={stop}
              disabled={!isPlaying && !isPaused}
              className="rounded-full"
            >
              <Square className="h-4 w-4" />
            </Button>

            {isPlaying ? (
              <Button
                size="sm"
                onClick={pause}
                className="rounded-full bg-[#38bdf8] hover:bg-[#38bdf8]/80"
              >
                <Pause className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                size="sm"
                onClick={isPaused ? resume : speak}
                className="rounded-full bg-[#38bdf8] hover:bg-[#38bdf8]/80"
              >
                <Play className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={toggleMute}
              className="rounded-full"
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </Button>
            <div className="flex-1">
              <Slider
                value={volume}
                onValueChange={handleVolumeChange}
                max={1}
                min={0}
                step={0.1}
                className="w-full"
              />
            </div>
            <span className="text-xs text-muted-foreground w-8">
              {Math.round(volume[0] * 100)}%
            </span>
          </div>

          {/* Speed Control */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-muted-foreground w-12">Speed:</span>
            <div className="flex-1">
              <Slider
                value={rate}
                onValueChange={handleRateChange}
                max={2}
                min={0.5}
                step={0.1}
                className="w-full"
              />
            </div>
            <span className="text-xs text-muted-foreground w-8">
              {rate[0].toFixed(1)}x
            </span>
          </div>

          {/* Status */}
          <div className="text-center">
            <span className="text-xs text-muted-foreground">
              {isPlaying ? "Playing..." : isPaused ? "Paused" : "Ready to play"}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
