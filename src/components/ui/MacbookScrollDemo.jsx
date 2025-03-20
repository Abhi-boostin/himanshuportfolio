import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden bg-transparent w-full">
      <MacbookScroll
        className="scale-[0.35] sm:scale-50 md:scale-100" 
        badge={
          <Link href="https://github.com/himanshu-sharmav">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={`/himashumacwindow.png`}
        showGradient={false} 
      />
    </div>
  );
}
// Peerlist logo
const Badge = ({
  className
}) => {
};
