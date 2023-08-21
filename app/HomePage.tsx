"use client";

import ParticleBG from "./ParticleBG";
import Hello from "./Hello";
import { useContext } from "react";
import { ThemeContext } from "./Contexts";

function HomePage() {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        "duration-500 flex justify-center items-center text-center w-screen h-screen" +
        (theme === "dark" ? " bg-black" : " bg-white")
      }
    >
      <ParticleBG></ParticleBG>
      <Hello></Hello>
    </div>
  );
}

export default HomePage;
