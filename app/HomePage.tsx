"use client";

import ParticleBG from "./ParticleBG";
import Hello from "./Hello";
import Resume from "./Resume";
import { useContext } from "react";
import { ThemeContext } from "./Contexts";

function HomePage() {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        "duration-500 flex flex-col justify-center items-center text-center w-screen h-screen" +
        (theme === "dark" ? " bg-[#121212]" : " bg-white")
      }
    >
      <ParticleBG></ParticleBG>
      <Hello></Hello>
      <Resume></Resume>
    </div>
  );
}

export default HomePage;
