"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "./Contexts";

function Dropdown() {
  const theme = useContext(ThemeContext);

  const LINKS = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
  ];

  return (
    <div
      className={
        "absolute top-4 left-6 font-open-sans group font-semibold" +
        (theme === "dark" ? " text-white" : " text-black")
      }
    >
      <div className="flex flex-row items-center text-lg">
        <Image
          className={
            "text-md transition-all duration-500 group-hover:-rotate-90 brightness-0 z-[100]" +
            (theme === "dark" ? " invert" : "")
          }
          src="/menu-flat.png"
          width="32"
          height="32"
          alt="Menu"
        ></Image>
        <span className="duration-500 pl-2 pr-6 z-[100]">Menu</span>
      </div>

      <ul className="text-lg pl-10 py-2 w-full absolute">
        {LINKS.map(({ label, href }, i) => (
          <li key={label} className="w-full z-[100]">
            <Link
              className={
                "w-full origin-top-center z-[100] group-hover:animate-[rotateX_300ms_ease-in-out_both] hidden group-hover:inline bg-[length:0px_2px] bg-gradient-to-r bg-left-bottom bg-no-repeat transition-all duration-500 ease-in-out hover:bg-[length:100%_2px] hover:bg-left-bottom focus:bg-[length:100%_2px]" +
                (theme === "dark"
                  ? " from-white to-white"
                  : " from-black to-black")
              }
              href={href}
              style={{
                animationDelay: `${i * 60}ms`,
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
