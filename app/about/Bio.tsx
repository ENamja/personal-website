"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/Contexts";
import Skills from "./Skills";

function Bio() {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        "transition-colors duration-500 relative w-full max-w-4xl rounded-3xl my-8 drop-shadow-lg p-8" +
        (theme === "dark" ? " bg-[#121212] text-white" : " bg-white text-black")
      }
    >
      <div className="text-left font-normal text-xl">
        <p className="mb-6">
          Hello! I{"'"}m Elisha Nam, a Computer Science major specializing in
          Intelligent Systems at UC Irvine and am expecting to graduate June
          2025.
        </p>
        <p className="my-6">
          I am actively seeking internship opportunities, eager to enhance my{" "}
          programming skills, and to possibly have a hands on experience with
          artificial intelligence.
        </p>
        <p className="my-6">
          Aside from coding, I like to be relatively active, consistently{" "}
          weightlifting, bouldering, and bowling. However, I do have the{" "}
          occasional urge to try my luck in first-person shooters.
        </p>
      </div>
      <Skills></Skills>
      <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-white opacity-10"></div>
    </div>
  );
}

export default Bio;
