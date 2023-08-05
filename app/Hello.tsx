"use client";

import { useState } from "react";

function Hello() {
  // true => dark; false => light
  const [theme, setTheme] = useState(true);

  return (
    <div
      className={
        "flex justify-center items-center text-center h-screen" +
        (theme ? " bg-black" : " bg-white")
      }
    >
      <div
        className={
          "font-light inline-block text-9xl" + (theme ? " text-[#49c5b6]" : "")
        }
      >
        <span className="inline-block overflow-hidden animate-typing">
          &lt;Hello/&gt;
        </span>
        <span
          className={
            "box-border inline-block w-1 h-32 ml-2 -mb-4 animate-cursor" +
            (theme ? " bg-white" : "")
          }
        ></span>
      </div>
    </div>
  );
}

export default Hello;
