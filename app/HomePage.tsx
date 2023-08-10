"use client";

import Particles from "./Particles";
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
      <Particles></Particles>
      <Hello></Hello>
    </div>
  );
}

export default HomePage;
