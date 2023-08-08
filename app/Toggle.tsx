"use client";

import { Dispatch, SetStateAction } from "react";

interface ToggleProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

function handleChange({ theme, setTheme }: ToggleProps) {
  theme == "dark" ? setTheme("light") : setTheme("dark");
}

function Toggle({ theme, setTheme }: ToggleProps) {
  return (
    <div
      className={
        "fixed top-0 left-0 w-screen h-16 flex justify-center items-center" +
        (theme === "dark" ? " text-white" : " text-black")
      }
    >
      <input
        className="w-0 h-0 hidden"
        type="checkbox"
        id="toggle"
        onChange={() => handleChange({ theme, setTheme })}
      />
      <label
        className={
          "duration-500 w-14 h-8 relative block rounded-2xl cursor-pointer after:content-[''] after:w-6 after:h-6 after:absolute \
          after:top-1 after:left-1 after:bg-gradient-to-b after:rounded-[12px] after:duration-500 after:transition-all" +
          (theme === "dark"
            ? " shadow-[inset_0_-1.5px_3px_rgba(255,255,255,0.4)] after:from-[#777] after:to-[#3a3a3a] bg-[#242424]"
            : " shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.4)] after:from-[#ffffff] after:to-[#e0e0e0] after:translate-x-[100%] bg-[#d4d4d4]")
        }
        htmlFor="toggle"
      ></label>
    </div>
  );
}

export default Toggle;
