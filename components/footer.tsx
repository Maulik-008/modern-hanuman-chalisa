import Link from "next/link";
import { Instagram, Twitter, Youtube, Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background/50 backdrop-blur-md border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-orbitron text-xl font-bold text-primary">
              <span className="text-[#38bdf8]">हनुमान</span>Chalisa
            </h3>
            <p className="text-muted-foreground max-w-xs">
              A modern digital rendition of the sacred Hanuman Chalisa, blending spiritual tradition with futuristic design.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-[#38bdf8] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/chalisa" className="text-muted-foreground hover:text-[#38bdf8] transition-colors">
                  Hanuman Chalisa
                </Link>
              </li>
              <li>
                <Link href="/meaning" className="text-muted-foreground hover:text-[#38bdf8] transition-colors">
                  Verse Meanings
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-[#38bdf8] transition-colors">
                  About Hanuman
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-[#38bdf8] transition-colors">
                  Audio Library
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-[#38bdf8] transition-colors">
                  Spiritual Texts
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-[#38bdf8] transition-colors">
                  Hindu Deities
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-[#38bdf8] transition-colors">
                  Sacred Mantras
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-[#38bdf8] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#38bdf8] transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#38bdf8] transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#38bdf8] transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Hanuman Chalisa. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0 flex items-center">
              Made with <Heart className="h-3 w-3 mx-1 text-[#38bdf8]" /> for spiritual seekers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}