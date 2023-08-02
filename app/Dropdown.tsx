"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Dropdown() {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <ul
      className="text-[#49c5b6] fixed top-4 left-8"
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <li>
        <Image
          className={
            "text-md overflow-hidden change-color transition-all duration-300 " +
            (mouseOver ? "-rotate-90" : "")
          }
          src="/../public/menu-flat.png"
          width="32"
          height="32"
          alt="Menu"
        ></Image>
        <ul className={"absolute " + (mouseOver ? "opacity-1" : "opacity-0")}>
          <li>
            <Link
              className={
                "origin-top-center " +
                (mouseOver
                  ? "animate-[rotateX_300ms_60ms_ease-in-out_both]"
                  : "hidden")
              }
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={
                "origin-top-center " +
                (mouseOver
                  ? "animate-[rotateX_300ms_120ms_ease-in-out_both]"
                  : "hidden")
              }
              href="/"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={
                "origin-top-center " +
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
      </li>
    </ul>
  );
}

export default Dropdown;
