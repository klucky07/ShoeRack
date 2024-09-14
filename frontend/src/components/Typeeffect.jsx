"use client";
import { TypewriterEffectSmooth } from "../components/ui/Typewriter";
import { Link } from "react-router-dom";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Developed ",
    },
    {
      text: " by ",
    },
    {
      text: "Lucky ",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: " with ",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "   Aceternity UI .",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    (<div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-700 font-extrabold  dark:text-neutral-200   sm:text-base  ">
        Software Developer
      </p>
      <TypewriterEffectSmooth words={words} />
      <div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
     <Link to={'https://x.com/_k_lucky'} >
     <button
          className="w-40 h-10 text-2xl rounded-xl dark:text-white border-transparent underline underline-offset-2 text-blue-400 hover:scale-110 ">
          Twitter
        </button>
     </Link>   
     <Link to={'https://www.linkedin.com/in/luckyalikhan/'} >
     <button
          className="w-40 h-10 text-2xl rounded-xl dark:text-white border-transparent underline underline-offset-2 text-blue-400 ">
        Linkedin
        </button>
     </Link>   
      </div>
    </div>)
  );
}
