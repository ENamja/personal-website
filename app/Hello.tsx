"use client";

import { useContext } from "react";
import { ThemeContext } from "./Contexts";

function Hello() {
  const theme = useContext(ThemeContext);
  return (
    <div className="z-[100] whitespace-nowrap">
      <div
        className={
          "duration-500 font-light inline-block text-8xl" +
          (theme === "dark" ? " text-white" : " text-black")
        }
      >
        <span className="inline-block overflow-hidden animate-typing">
          &lt;Hello/&gt;
        </span>
        <span
          className={
            "duration-500 box-border inline-block w-1 h-28 ml-0.5 mr-1.5 -mb-4 animate-cursor" +
            (theme === "dark" ? " bg-white" : " bg-black")
          }
        ></span>
      </div>
    </div>
  );
}

export default Hello;
