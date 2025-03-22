import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024 - Digital Alpha",
      content: (
      <div>
        <p className="text-neutral-900 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 ">
          Full-Stack Engineer Intern • Jan 2024 - Present
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm mb-8">
          At Digital Alpha, I'm leading the enhancement of the EpiphAI chatbot platform using Django and React.js. 
          Through the implementation of 10+ innovative features, we've achieved a remarkable 20% increase in user engagement. 
          My role involves optimizing application performance, ensuring scalability, and delivering efficient solutions. 
          Working within Agile sprints, I contribute to rapid feature deployments while maintaining code quality.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/digital-alpha image1.png"
            alt="Digital Alpha Workplace"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <Image
            src="/digital-alpha image2.png"
            alt="Digital Alpha Office"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
        </div>
      </div>
      ),
    },
    {
      title: "2023 - Alemeno",
      content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Backend Engineer Intern • Nov 2023 - Dec 2023
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm mb-8">
          During my time at Alemeno, I was responsible for developing and maintaining a robust Django-based web application 
          that successfully handled over 10,000 daily requests. A key achievement was maintaining a 95% bug resolution rate 
          within 24-hour timeframes. I significantly improved development workflows by implementing CI/CD pipelines, which 
          reduced deployment time by 30% and enhanced overall team efficiency by 40%.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/alemeno image1.png"
            alt="Alemeno Workplace"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <Image
            src="/alemeno image2.png"
            alt="Alemeno Office"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
        </div>
      </div>
      ),
    },
    {
      title: "2023 - Across The Globe",
      content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Backend Engineer Intern • June 2023 - Oct 2023
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm mb-8">
          My journey in tech began at Across The Globe, where I specialized in designing and optimizing RESTful and 
          serverless APIs using AWS Lambda. I achieved significant improvements in system performance, enhancing 
          third-party integrations by 40% while reducing infrastructure costs by 20%. Working in Agile teams, I 
          contributed to improving code quality by 15% and accelerating feature rollouts through effective collaboration 
          and implementation of best practices.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/atg image1.png"
            alt="Across The Globe Workplace"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <Image
            src="/atg image2.png"
            alt="Modern Office"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
        </div>
      </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
