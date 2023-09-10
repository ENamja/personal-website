"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/Contexts";
import Link from "next/link";

function ProjectList() {
  const theme = useContext(ThemeContext);
  const projects = [
    {
      name: "Personal Website",
      link: "https://github.com/ENamja/personal-website",
      description:
        "The website you are on was built as a dynamic extension of my resume, offering a comprehensive overview of my qualifications as a student developer. The site showcases my downloadable up-to-date resume for easy reference, key projects, and skillsets.",
      tools: ["Next.js", "Node.js", "TailwindCSS", "Typescript", "Vercel"],
    },
    {
      name: "Minesweeper Solver",
      link: "localhost:3000",
      description:
        "This is a Minesweeper-solving algorithm that demonstrates my problem-solving and programming skills. ",
      tools: ["Python", ""],
    },
    {
      name: "Apollo",
      link: "https://github.com/lanpai/apollo",
      description:
        "This is a Unity-based educational chemistry game that uses the concept of crafting to teach basic chemical compounds. The game focuses on a spaceman, Apollo, who must deconstruct items to their basic elements to create other needed items to repair his failing spaceship. Through our team's overall problem-solving skills, teamwork, and excellent visuals, our game was awarded first place in HackSoCal 2020.",
      tools: ["C#", "Unity"],
    },
  ];

  return (
    <ul className="flex flex-col items-center my-8 max-w-5xl w-full">
      {projects.map((project) => {
        return (
          <li
            key={project.name}
            className={
              "w-full hover:scale-[1.05] transition-transform duration-200 ease-in-out"
            }
          >
            <div
              className={
                "transition-all w-full duration-500 p-8 my-4 rounded-3xl drop-shadow-lg" +
                (theme === "dark" ? " text-white" : " bg-white text-black")
              }
            >
              <Link
                href={project.link}
                target="_blank"
                className="absolute rounded-3xl top-0 left-0 w-full h-full bg-white opacity-[.10]"
              ></Link>
              <div className="w-full h-full text-left">
                <div className="mb-4 text-3xl">{project.name}</div>
                <div className="my-8 font-light text-xl">
                  {project.description}
                </div>
                <div className="font-light text-xl">{project.tools}</div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ProjectList;
