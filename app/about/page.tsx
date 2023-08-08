import type { Metadata } from "next";
import Bio from "./Bio";

export const metadata: Metadata = {
  title: "Elisha Nam - Web Developer",
  description: "About Page",
};

function About() {
  return (
    <>
      <Bio></Bio>
    </>
  );
}

export default About;
