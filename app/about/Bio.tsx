"use client";

import { ThemeContext } from "@/app/Contexts";
import { useContext } from "react";

function Bio() {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={
        "duration-500 w-screen h-screen pt-16" +
        (theme === "dark" ? " bg-[#121212] text-white" : " bg-white text-black")
      }
    >
      About Page
    </div>
  );
}

export default Bio;
