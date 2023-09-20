"use client";

import { ThemeContext } from "@/app/Contexts";
import { useContext } from "react";
import Bio from "./Bio";

function AboutPage() {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={
        "duration-500 w-screen h-full min-h-screen pt-20 p-4 flex flex-col items-center text-center text-5xl font-bold" +
        (theme === "dark"
          ? " bg-[#121212] text-white"
          : " bg-gray-100 text-black")
      }
    >
      About Me
      <Bio></Bio>
    </div>
  );
}

export default AboutPage;
