"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/Contexts";

function ProjectList() {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={
        "w-screen h-screen transition duration-500" +
        (theme === "dark" ? " bg-black text-white" : " bg-white text-black")
      }
    >
      Projects Page
    </div>
  );
}

export default ProjectList;
