"use client";

import Link from "next/link";

function Dropdown() {
  return (
    <ul className="text-[#49c5b6] fixed top-4 left-8">
      <li>
        <h1 className="text-md hover:text-3xl duration-500">Menu</h1>
        <ul>
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
