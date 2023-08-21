import type { Metadata } from "next";
import ProjectPage from "./ProjectPage";

export const metadata: Metadata = {
  title: "Elisha Nam - Web Developer",
  description: "About Page",
};

function Projects() {
  return (
    <>
      <ProjectPage></ProjectPage>
    </>
  );
}

export default Projects;
