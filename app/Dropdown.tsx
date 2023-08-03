"use client";

import Link from "next/link";
import Image from "next/image";

function Dropdown() {
  const LINKS = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/" },
    { label: "About", href: "/" },
  ];

  return (
    <div className="text-[#49c5b6] fixed top-4 left-8 font-open-sans group">
      <div className="flex flex-row items-center text-lg font-normal">
        <Image
          className="text-md change-color transition-all duration-500 group-hover:-rotate-90"
          src="/menu-flat.png"
          width="32"
          height="32"
          alt="Menu"
        ></Image>
        <span className="pl-2 pr-6">Menu</span>
      </div>

      <ul className="text-lg font-normal pl-10 py-2 w-full absolute">
        {LINKS.map(({ label, href }, i) => (
          <li className="w-full">
            <Link
              className={
                "w-full origin-top-center group-hover:animate-[rotateX_300ms_ease-in-out_both] hidden group-hover:inline bg-[length:0px_2px] bg-gradient-to-r from-[#49c5b6] to-[#49c5b6] bg-left-bottom bg-no-repeat transition-all duration-500 ease-in-out hover:bg-[length:100%_2px] hover:bg-left-bottom"
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
