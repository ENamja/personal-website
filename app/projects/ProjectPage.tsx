"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/Contexts";
import ProjectList from "./ProjectList";

function ProjectPage() {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={
        "w-screen h-screen transition duration-500 pt-20 text-center text-5xl" +
        (theme === "dark" ? " bg-black text-white" : " bg-white text-black")
      }
    >
      Projects
      <ProjectList></ProjectList>
    </div>
  );
}

export default ProjectPage;
