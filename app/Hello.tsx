"use client";

import { useContext } from "react";
import { ThemeContext } from "./Contexts";

function Hello() {
  let theme = useContext(ThemeContext);
  return (
    <div
      className={
        "flex justify-center items-center text-center h-screen" +
        (theme === "dark" ? " bg-black" : " bg-white")
      }
    >
      <div
        className={
          "font-light inline-block text-9xl" +
          (theme === "dark" ? " text-white" : " text-black")
        }
      >
        <span className="inline-block overflow-hidden animate-typing">
          &lt;Hello/&gt;
        </span>
        <span
          className={
            "box-border inline-block w-1 h-32 ml-2 -mb-4 animate-cursor" +
            (theme === "dark" ? " bg-white" : " bg-black")
          }
        ></span>
      </div>
    </div>
  );
}

export default Hello;
