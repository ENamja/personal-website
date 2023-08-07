"use client";

import Contacts from "./Contacts";
import { ThemeContext } from "./Contexts";
import Dropdown from "./Dropdown";
import { Dispatch, SetStateAction, useContext } from "react";

const _GITHUB_LINK = "https://github.com/ENamja";
const _LINKEDIN_LINK = "https://www.linkedin.com/in/elisha-nam/";
const _EMAIL_LINK = "mailto:namelisha@gmail.com";

interface NavBarProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

function handleClick({ theme, setTheme }: NavBarProps) {
  theme == "dark" ? setTheme("light") : setTheme("dark");
}

function NavBar({ theme, setTheme }: NavBarProps) {
  const contextTheme = useContext(ThemeContext);

  return (
    <div>
      <div
        className={
          "fixed top-0 left-0 w-screen h-16 flex justify-center items-center" +
          (theme === "dark" ? " bg-black" : " bg-white")
        }
      >
        <button
          className={theme === "dark" ? "text-white" : "text-black"}
          onClick={() => handleClick({ theme, setTheme })}
        >
          context: {contextTheme} theme: {theme}
        </button>
      </div>
      <Dropdown></Dropdown>
      <Contacts></Contacts>
    </div>
  );
}

export default NavBar;
