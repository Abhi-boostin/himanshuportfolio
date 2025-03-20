import React from 'react'
import { MacbookScrollDemo } from '@/components/ui/MacbookScrollDemo'
import { TimelineDemo } from '@/components/ui/TimelineDemo'
import { TypewriterEffectSmoothDemo } from '@/components/ui/TypewriterEffectSmoothDemo'   
import { TechStack } from "@/components/ui/techstack";
import { ExpandableCardDemo } from '@/components/ui/ExpandableCardDemo'
import {DockUse} from '@/components/reactbits/Components/Dock/DockUse'

export default function page() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      
      <div className="fixed inset-0 z-0 bg-black">
      </div>
      <div className="relative z-10 bg-transparent pb-24"> {/* Added pb-24 for dock space */}
        <TypewriterEffectSmoothDemo />
        <MacbookScrollDemo />
        <TimelineDemo />
        <TechStack />
        <div className="text-center py-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            PROJECTS
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Some of my recent work
          </p>
        </div>
        <ExpandableCardDemo />
      </div>
      <DockUse />
    </div>
  )
}