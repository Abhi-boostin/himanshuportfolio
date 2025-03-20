import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden bg-transparent w-full px-2 sm:px-4 md:px-0">
      <div className="max-w-screen-lg mx-auto">
        <MacbookScroll
          className="scale-[0.25] sm:scale-[0.4] md:scale-[0.8] lg:scale-100 transform-gpu" 
          badge={
            <Link href="https://github.com/himanshu-sharmav">
              <Badge className="h-10 w-10 transform -rotate-12" />
            </Link>
          }
          src={`/himashumacwindow.png`}
          showGradient={false} 
        />
      </div>
    </div>
  );
}
// Peerlist logo
const Badge = ({
  className
}) => {
};
