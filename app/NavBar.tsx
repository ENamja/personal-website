"use client";

import Contacts from "./Contacts";
import { ThemeContext } from "./Contexts";
import Dropdown from "./Dropdown";
import Toggle from "./Toggle";
import { Dispatch, SetStateAction, useContext } from "react";

const _GITHUB_LINK = "https://github.com/ENamja";
const _LINKEDIN_LINK = "https://www.linkedin.com/in/elisha-nam/";
const _EMAIL_LINK = "mailto:namelisha@gmail.com";

interface NavBarProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

function NavBar({ theme, setTheme }: NavBarProps) {
  const contextTheme = useContext(ThemeContext);

  return (
    <div className="fixed top-0 left-0 w-screen h-16 py-4 px-6 flex justify-between">
      <Dropdown></Dropdown>
      <Toggle theme={theme} setTheme={setTheme}></Toggle>
      <Contacts></Contacts>
    </div>
  );
}

export default NavBar;
