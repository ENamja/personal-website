"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/Contexts";

function Bio() {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        "transition-colors duration-500 relative w-full max-w-5xl rounded-3xl my-8 drop-shadow-lg" +
        (theme === "dark" ? " bg-[#121212] text-white" : " bg-white text-black")
      }
    >
      <p className="m-4">I AM BIO</p>
      <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-white opacity-10"></div>
    </div>
  );
}

export default Bio;
