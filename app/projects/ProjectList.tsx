"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/Contexts";
import Link from "next/link";

function ProjectList() {
  const theme = useContext(ThemeContext);
  const projects = [
    {
      name: "Redis Optimized Serverless Search Engine",
      link: "http://esnam-search.vercel.app",
      description:
        "Full stack website showcasing a search engine designed to efficiently handle tens of thousands of web pages in the UCI ICS subdomain. The search engine uses advanced techniques such as tf-idf scoring and page rank algorithms to deliver highly accurate query results. The website utilizes TailwindCSS and React for the frontend, Flask and Redis for backend, and is deployed on Vercel.",
      tools: [
        "Flask",
        "Next.js",
        "Python",
        "React",
        "Redis",
        "TailwindCSS",
        "Typescript",
        "Vercel",
      ],
    },
    {
      name: "Personal Website",
      link: "https://github.com/ENamja/personal-website",
      description:
        "The website you are on was built as a dynamic extension of my resume, offering a comprehensive overview of my qualifications as a student developer. The site showcases my downloadable up-to-date resume for easy reference, key projects, and skillsets.",
      tools: [
        "Next.js",
        "Node.js",
        "React",
        "TailwindCSS",
        "Typescript",
        "Vercel",
      ],
    },
    {
      name: "Comparative Analysis of Various Minesweeper Algorithms",
      link: "https://github.com/ENamja/Minesweeper-Solver",
      description:
        "This is a Minesweeper-solving algorithm that demonstrates my problem-solving and programming skills. The algorithm was a class project for an AI class with the goal of accurately and efficiently solving Minesweeper worlds of varying sizes. Our solution was built through the application of various ideas such as some basic fundamentals of AI like heuristic search, a search algorithm, and even Harvard sentence-reduction logic.",
      tools: ["Python"],
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
    <ul className="flex flex-col items-center my-8 max-w-4xl w-full">
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
                "transition-colors w-full duration-500 p-8 my-4 rounded-3xl drop-shadow-lg" +
                (theme === "dark"
                  ? " bg-[#121212] text-white border-transparent"
                  : " bg-white text-black border-[#121212]")
              }
            >
              <Link
                href={project.link}
                target="_blank"
                className="absolute rounded-3xl top-0 left-0 w-full h-full bg-white opacity-10"
              ></Link>
              <div className="w-full h-full text-left border-inherit bg-inherit">
                <div className="mb-4 text-3xl">{project.name}</div>
                <div className="my-8 font-light text-lg">
                  {project.description}
                </div>
                <div className="font-light text-lg flex flex-wrap w-full bg-inherit border-inherit">
                  {project.tools.map((tool) => {
                    return (
                      <div
                        key={tool}
                        className="rounded-3xl py-2 px-4 my-2 mr-2 border-[1px] bg-inherit border-inherit z-10"
                      >
                        {tool}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ProjectList;
