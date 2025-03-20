"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Himanshu ",
      className: "text-white-500 dark:text-blue-500",
    },
    {
      text: "Sharma.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="bg-transparent flex items-center justify-center h-[40vh] mt-20">
      <div className="flex flex-col items-center justify-center space-y-6">
        <p className="text-neutral-200 dark:text-neutral-200 text-xs sm:text-base">
          Full Stack Developer. | Based in India.
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-6">
          <button 
            onClick={() => window.open('https://drive.google.com/file/d/1Eq0RyjxtpwLN1YCchteHxMJroeQ88Wo9/view?usp=drivesdk', '_blank')}
            className="w-40 h-10 rounded-xl bg-black border-white border text-white text-sm"
          >
            MY RESUME
          </button>
          <button 
            onClick={() => window.open('https://github.com/himanshu-sharmav', '_blank')}
            className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm"
          >
            GITHUB
          </button>
        </div>
      </div>
    </div>
  );
}
