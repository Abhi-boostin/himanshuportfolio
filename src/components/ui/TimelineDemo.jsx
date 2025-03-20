import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024 - Digital Alpha",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Full-Stack Engineer Intern (Jan 2024 – Present)
          </p>
          <ul className="list-disc ml-5 mb-8 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            <li>
              Enhanced the EpiphAI chatbot by adding 10+ features using Django and React.js.
            </li>
            <li>
              Improved UI/UX, leading to a 20% increase in user engagement.
            </li>
            <li>
              Optimized application performance by debugging and refining code for scalable solutions.
            </li>
            <li>
              Contributed actively in Agile sprints to accelerate feature rollouts.
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://picsum.photos/seed/digitalalpha/500/500"
              alt="Digital Alpha Workplace"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <Image
              src="https://picsum.photos/seed/office1/500/500"
              alt="Office Environment"
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
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Backend Engineer Intern (Nov 2023 – Dec 2023)
          </p>
          <ul className="list-disc ml-5 mb-8 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            <li>
              Developed and maintained a Django-based web application handling over 10,000 daily requests.
            </li>
            <li>
              Achieved a 95% bug resolution rate within 24 hours.
            </li>
            <li>
              Implemented CI/CD pipelines, reducing deployment time by 30%.
            </li>
            <li>
              Automated workflows that increased overall efficiency by 40%.
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://picsum.photos/seed/alemeno/500/500"
              alt="Alemeno Workplace"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <Image
              src="https://picsum.photos/seed/office2/500/500"
              alt="Team Collaboration"
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
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Backend Engineer Intern (June 2023 – Oct 2023)
          </p>
          <ul className="list-disc ml-5 mb-8 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            <li>
              Designed and optimized RESTful and serverless APIs using AWS Lambda.
            </li>
            <li>
              Improved third-party integrations by 40% and reduced infrastructure costs by 20%.
            </li>
            <li>
              Collaborated in Agile teams to enhance feature rollout speed and improve code quality.
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://picsum.photos/seed/atg/500/500"
              alt="Across The Globe Workplace"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <Image
              src="https://picsum.photos/seed/office3/500/500"
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
