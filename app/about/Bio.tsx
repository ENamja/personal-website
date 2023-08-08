"use client";

import { ThemeContext } from "@/app/Contexts";
import { useContext } from "react";

function Bio() {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={
        "duration-500 w-screen h-screen" +
        (theme === "dark" ? " bg-black" : " bg-white")
      }
    >
      <div></div>
    </div>
  );
}

export default Bio;
