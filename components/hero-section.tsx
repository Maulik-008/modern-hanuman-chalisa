"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  const scrollToContent = () => {
    const contentElement = document.getElementById("content");
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background effect with modern gradient */}
      <div className="absolute inset-0 bg-[#0b1120]">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3648850/pexels-photo-3648850.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120]/80 via-[#0b1120] to-background"></div>

        {/* Modern glow effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#38bdf8]/20 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#38bdf8]/10 blur-[100px]"></div>

        {/* Animated particles */}
        <motion.div
          className="absolute top-20 left-1/3 w-1 h-1 rounded-full bg-[#38bdf8]"
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        <motion.div
          className="absolute top-40 right-1/4 w-2 h-2 rounded-full bg-[#38bdf8]"
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-1 h-1 rounded-full bg-[#38bdf8]"
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20 p-1 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#38bdf8]/20 to-transparent" />
              <div className="text-[#38bdf8] font-devanagari text-5xl md:text-6xl">
                ॐ
              </div>
            </div>
          </motion.div>

          <h1 className="font-devanagari text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
            हनुमान चालीसा
          </h1>
          <h2 className="font-orbitron text-xl md:text-2xl mb-6 text-[#38bdf8]">
            HANUMAN CHALISA
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            A divine hymn dedicated to Lord Hanuman, reimagined for the digital
            age
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#content">
              <Button
                className="bg-[#38bdf8] hover:bg-[#38bdf8]/80 text-[#0b1120] font-medium px-6 rounded-full w-full sm:w-auto"
                size="lg"
                onClick={scrollToContent}
              >
                Read Hanuman Chalisa
              </Button>
            </Link>

            <Link href="/languages">
              <Button
                variant="outline"
                className="border-[#38bdf8]/30 text-[#38bdf8] hover:bg-[#38bdf8]/10 font-medium px-6 rounded-full w-full sm:w-auto"
                size="lg"
              >
                Explore Languages
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Button
          variant="ghost"
          size="sm"
          className="rounded-full text-[#38bdf8]"
          onClick={scrollToContent}
        >
          <ChevronDown className="h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  );
}
