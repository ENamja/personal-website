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
          Hello! I{"'"}m <span className="font-bold">Elisha Nam</span>, a{" "}
          <span className="font-bold">Computer Science major</span> specializing
          in <span className="font-bold">Intelligent Systems</span> at{" "}
          <span className="font-bold">UC Irvine</span> and am expecting to
          graduate <span className="font-bold">June 2025</span>.
        </p>
        <p className="my-6">
          I am actively{" "}
          <span className="font-bold">seeking internship opportunities</span>,
          eager to enhance my programming skills, and to possibly have a hands
          on experience with artificial intelligence.
        </p>
        <p className="my-6">
          Aside from coding, I like to be relatively active, consistently{" "}
          <span className="font-bold">weightlifting</span>,{" "}
          <span className="font-bold">bouldering</span>, and{" "}
          <span className="font-bold">bowling</span>. However, I do have the
          occasional urge to try my luck in{" "}
          <span className="font-bold">first-person shooters</span>.
        </p>
      </div>
      <Skills></Skills>
      <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-white opacity-10"></div>
    </div>
  );
}

export default Bio;
