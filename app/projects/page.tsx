import type { Metadata } from "next";
import ProjectList from "./ProjectList";

export const metadata: Metadata = {
  title: "Elisha Nam - Web Developer",
  description: "About Page",
};

function Projects() {
  return (
    <>
      <ProjectList></ProjectList>
    </>
  );
}

export default Projects;
