"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/Contexts";
import ProjectList from "./ProjectList";

function ProjectPage() {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={
        "w-screen h-full min-h-screen transition duration-500 pt-20 text-center text-5xl font-bold flex flex-col items-center p-4" +
        (theme === "dark"
          ? " bg-[#121212] text-white"
          : " bg-gray-100 text-black")
      }
    >
      Projects
      <ProjectList></ProjectList>
    </div>
  );
}

export default ProjectPage;
