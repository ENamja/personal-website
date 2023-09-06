"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/Contexts";
import Link from "next/link";

function ProjectList() {
  const theme = useContext(ThemeContext);
  const projects = [
    { name: "Personal Website", link: "localhost:3000" },
    { name: "Minesweeper Solver", link: "localhost:3000" },
    { name: "Apollo", link: "localhost:3000" },
    { name: "Filler", link: "localhost:3000" },
  ];

  return (
    <ul className="flex flex-col items-center mt-8 max-w-5xl">
      {projects.map((project) => {
        return (
          <li
            id={project.name}
            className={
              "max-w-full hover:scale-[1.05] transition-transform duration-200 ease-in-out"
            }
          >
            <div
              className={
                "transition-all w-full duration-500 p-4 my-4 rounded-3xl drop-shadow-lg" +
                (theme === "dark" ? " text-white" : " bg-white text-black")
              }
            >
              <div className="absolute rounded-3xl top-0 left-0 w-full h-full bg-white opacity-[.10]"></div>
              <Link href={project.link} target="_blank" className="text">
                {project.name} {project.link}
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ProjectList;
