"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/Contexts";

function Skills() {
  const theme = useContext(ThemeContext);

  return (
    <div className="text-left mt-10">
      <span className="text-4xl font-bold">Skills:</span>
      <p></p>
    </div>
  );
}

export default Skills;
