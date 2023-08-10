"use client";

import { ThemeContext } from "@/app/Contexts";
import { useContext } from "react";

function Bio() {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={
        "duration-500 w-screen h-screen" +
        (theme === "dark" ? " bg-black text-white" : " bg-white text-black")
      }
    >
      About Page
    </div>
  );
}

export default Bio;
