"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "./Contexts";

const _GITHUB_LINK = "https://github.com/ENamja";
const _LINKEDIN_LINK = "https://www.linkedin.com/in/elisha-nam/";
const _EMAIL_LINK = "mailto:namelisha@gmail.com";

function Contacts() {
  const theme = useContext(ThemeContext);

  return (
    <div className="flex text-white items-center fixed top-4 right-4">
      <Link
        className={"mx-4 brightness-0" + (theme === "dark" ? " invert" : "")}
        href={_GITHUB_LINK}
        target="_blank"
      >
        <Image
          src="/transparent-github.png"
          width="32"
          height="32"
          alt="GitHub Logo"
        ></Image>
      </Link>
      <Link
        className={"mx-4 brightness-0" + (theme === "dark" ? " invert" : "")}
        href={_LINKEDIN_LINK}
        target="_blank"
      >
        <Image
          src="/transparent-linkedin.png"
          width="32"
          height="32"
          alt="LinkedIn Logo"
        ></Image>
      </Link>
      <Link
        className={"mx-4 brightness-0" + (theme === "dark" ? " invert" : "")}
        href={_EMAIL_LINK}
        target="_blank"
      >
        <Image
          src="/transparent-email1.png"
          width="32"
          height="32"
          alt="Email Logo"
        ></Image>
      </Link>
    </div>
  );
}

export default Contacts;
