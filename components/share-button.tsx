"use client";

import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

export default function ShareButton() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Hanuman Chalisa",
        text: "Read the complete Hanuman Chalisa with meanings",
        url: window.location.href,
      });
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="rounded-full"
      onClick={handleShare}
    >
      <Share2 className="h-4 w-4 mr-2" />
      Share
    </Button>
  );
}
