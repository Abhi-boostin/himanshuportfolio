import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden bg-transparent w-full opacity-100 color-white">
      <MacbookScroll
        title={
          <span className="text-white opacity-100 dark:text-white dark:opacity-100 text-2xl font-bold">
            I'm a third-year B.Tech CSE student at KIET, passionate about backend development and problem-solving. With over a year of experience in Python and Django, I specialize in RESTful APIs, database management, and scalable backend systems.  

Currently, I'm exploring AI-integrated backends, combining machine learning with robust infrastructure. I also enjoy hackathons and open-source contributions to sharpen my skills.  

Let's connect and build something amazing!
          </span>
        }
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
