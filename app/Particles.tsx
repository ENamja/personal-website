"use client";

import { useContext } from "react";
import { ThemeContext } from "./Contexts";
import Script from "next/script";
import Hello from "./Hello";

function Particles() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <Script src="/particles.js/particles.js" />
      <Script src="particles.js/demo/js/app.js" />
      <div
        id="particles-js"
        className="absolute top-0 left-0 w-screen h-screen z-[-100]"
      ></div>
    </>
  );
}

export default Particles;
