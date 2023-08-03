"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Dropdown() {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div
      className="text-[#49c5b6] fixed top-4 left-8 font-open-sans"
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <div className="flex flex-row items-center text-lg font-normal">
        <Image
          className={
            "text-md change-color transition-all duration-500 " +
            (mouseOver ? "-rotate-90" : "")
          }
          src="/../public/menu-flat.png"
          width="32"
          height="32"
          alt="Menu"
        ></Image>
        <span className="pl-2 pr-6">Menu</span>
      </div>

      <ul className="text-lg font-normal pl-10 py-2 w-full absolute">
        <li className="w-full">
          <Link
            className={
              "w-full origin-top-center bg-[length:0px_2px] bg-gradient-to-r from-[#49c5b6] to-[#49c5b6] bg-left-bottom bg-no-repeat transition-all duration-500 ease-in-out hover:bg-[length:100%_2px] hover:bg-left-bottom " +
              (mouseOver
                ? "animate-[rotateX_300ms_60ms_ease-in-out_both]"
                : "hidden")
            }
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="w-full">
          <Link
            className={
              "w-full origin-top-center bg-[length:0px_2px] bg-gradient-to-r from-[#49c5b6] to-[#49c5b6] bg-left-bottom bg-no-repeat transition-all duration-500 ease-in-out hover:bg-[length:100%_2px] hover:bg-left-bottom " +
              (mouseOver
                ? "animate-[rotateX_300ms_120ms_ease-in-out_both]"
                : "hidden")
            }
            href="/"
          >
            Projects
          </Link>
        </li>
        <li className="w-full">
          <Link
            className={
              "w-full origin-top-center bg-[length:0px_2px] bg-gradient-to-r from-[#49c5b6] to-[#49c5b6] bg-left-bottom bg-no-repeat transition-all duration-500 ease-in-out hover:bg-[length:100%_2px] hover:bg-left-bottom " +
              (mouseOver
                ? "animate-[rotateX_300ms_180ms_ease-in-out_both]"
                : "hidden")
            }
            href="/"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
