"use client";

import { Dispatch, SetStateAction } from "react";

interface ToggleProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

function handleClick({ theme, setTheme }: ToggleProps) {
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
      <button onClick={() => handleClick({ theme, setTheme })}>Theme</button>
    </div>
  );
}

export default Toggle;
