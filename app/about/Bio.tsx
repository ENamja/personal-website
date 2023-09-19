"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/Contexts";

function Bio() {
  const theme = useContext(ThemeContext);
  return (
    <div className="relative max-w-5xl rounded-3xl my-8">
      <p className="m-4 z-[100]">I AM BIO</p>
      <div
        className={
          "absolute top-0 left-0 w-full h-full rounded-3xl bg-white z-50" +
          (theme === "dark" ? " opacity-10" : "")
        }
      ></div>
    </div>
  );
}

export default Bio;
