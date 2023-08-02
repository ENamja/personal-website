"use client";

import Link from "next/link";
import Image from "next/image";

function NavBar() {
  return (
    <div className="flex justify-between my-4 mx-12">
      <button className="bg-[#49c5b6]">Menu</button>
      <div className="flex flex-row text-white items-center">
        <Link className="mx-3 change-color" href="/">
          <Image
            src="/../public/transparent-github.png"
            width="32"
            height="32"
            alt="GitHub Logo"
          ></Image>
        </Link>
        <Link className="mx-3 change-color" href="/">
          <Image
            src="/../public/transparent-linkedin.png"
            width="32"
            height="32"
            alt="LinkedIn Logo"
          ></Image>
        </Link>
        <Link className="mx-3 change-color" href="/">
          <Image
            src="/../public/transparent-email1.png"
            width="32"
            height="32"
            alt="Email Logo"
          ></Image>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
