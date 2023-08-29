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
    <ul className="flex flex-col items-center mt-8 max-w-full">
      {projects.map((project) => {
        return (
          <li
            id={project.name}
            className={
              "max-w-[1000px] hover:scale-[1.05] transition-transform duration-200 ease-in-out"
            }
          >
            <div
              className={
                "transition-all w-max h-max duration-500 p-4 my-4 rounded-3xl drop-shadow-lg" +
                (theme === "dark"
                  ? " bg-gray-800 text-white"
                  : " bg-white text-black")
              }
            >
              <Link href={project.link} target="_blank">
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
