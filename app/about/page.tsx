import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "Elisha Nam - Web Developer",
  description: "About Page",
};

function About() {
  return (
    <>
      <AboutPage></AboutPage>
    </>
  );
}

export default About;
