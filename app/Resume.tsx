"use client";

import { useContext } from "react";
import { ThemeContext } from "./Contexts";

function Resume() {
  const theme = useContext(ThemeContext);

  return (
    <div className="z-[100]">
      <a href="/vercel.svg" download="test_download">
        Download!
      </a>
    </div>
  );
}

export default Resume;
