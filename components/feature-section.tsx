"use client";

import { motion } from "framer-motion";
import { ScrollText, Book, Headphones, Info } from "lucide-react";

const features = [
  {
    icon: <ScrollText className="h-10 w-10" />,
    title: "Complete Chalisa",
    description: "Read the entire Hanuman Chalisa in Devanagari script with English transliteration"
  },
  {
    icon: <Book className="h-10 w-10" />,
    title: "Verse Meanings",
    description: "Understand the deep spiritual significance of each verse with detailed explanations"
  },
  {
    icon: <Headphones className="h-10 w-10" />,
    title: "Audio Recitation",
    description: "Listen to traditional recitations of each verse with perfect pronunciation"
  },
  {
    icon: <Info className="h-10 w-10" />,
    title: "About Hanuman",
    description: "Discover the story and significance of Lord Hanuman in Hindu mythology"
  }
];

export default function FeatureSection() {
  return (
    <section className="py-20 bg-background relative\" id="content">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0b1120]/30"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-primary">
            SPIRITUAL <span className="text-[#38bdf8]">EXPERIENCE</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the divine hymn dedicated to Lord Hanuman through our modern digital interface
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background/30 backdrop-blur-sm border border-border/30 rounded-xl p-6 group hover:border-[#38bdf8]/30 transition-all duration-300"
            >
              <div className="bg-[#38bdf8]/10 p-3 rounded-lg w-fit mb-4 text-[#38bdf8]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}