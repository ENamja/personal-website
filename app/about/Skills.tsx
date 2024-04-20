"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/Contexts";

function Skills() {
  const theme = useContext(ThemeContext);
  const hard = [
    "Python",
    "C/C++",
    "TypeScript",
    "Java",
    "HTML/CSS",
    "Tailwind",
    "Git",
    "React.js",
    "Next.js",
    "Node.js",
    "Vercel",
    "Flask",
    "MySQL",
    "Redis",
    "Linux",
    "AWS (EC2)",
    "Kubernetes",
    "Maven",
    "JDBC",
    "NLTK",
    "NumPy",
    "Matplotlib",
    "Microsoft Office",
    "Unity",
    "LaTeX",
  ];
  const soft = [
    "Problem-Solving",
    "Teamwork",
    "Communication",
    "Flexibility",
    "Teaching",
  ];

  return (
    <div
      className={
        "transition-all duration-500 text-left mt-10" +
        (theme === "dark"
          ? " border-white text-white"
          : " border-black text-black")
      }
    >
      <div className="text-4xl font-bold">Skills:</div>
      <div className="px-4 py-1 text-2xl border-inherit">
        <div className="flex flex-row flex-wrap border-inherit my-2">
          Hard:
          {hard.map((skill) => {
            return (
              <div
                key={skill}
                className="mx-1 mb-2 font-normal text-base rounded-xl border-2 px-2 py-1 border-inherit"
              >
                {skill}
              </div>
            );
          })}
        </div>
        <div className="flex flex-row flex-wrap border-inherit">
          Soft:
          {soft.map((skill) => {
            return (
              <div
                key={skill}
                className="mx-1 mb-2 font-normal text-base rounded-xl border-2 px-2 py-1 border-inherit"
              >
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
