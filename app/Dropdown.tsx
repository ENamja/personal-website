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
        <ul
          className={
            "absolute transition-all duration-500 " +
            (mouseOver ? "" : "text-black")
          }
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Projects</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default Dropdown;
