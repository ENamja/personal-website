"use client";

import { useContext } from "react";
import { ThemeContext } from "./Contexts";

function Resume() {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={
        "transition-all duration-500 z-[100] text-xl rounded-2xl border-[1px] py-1 px-3 mt-4" +
        (theme === "dark"
          ? " text-white border-white"
          : " text-black border-black")
      }
    >
      <a href="/vercel.svg" download="test_download">
        Resume
      </a>
    </div>
  );
}

export default Resume;
