"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/Contexts";

function ProjectList() {
  const theme = useContext(ThemeContext);
  const projects = [
    { name: "Personal Website", link: "localhost:3000" },
    { name: "Minesweeper Solver", link: "localhost:3000" },
    { name: "Apollo", link: "localhost:3000" },
    { name: "Filler", link: "localhost:3000" },
  ];

  return (
    <div className="flex flex-row">
      {projects.map((project) => {
        return (
          <div id={project.name} className="w-[1000]">
            {project.name} {project.link}
          </div>
        );
      })}
    </div>
  );
}

export default ProjectList;
