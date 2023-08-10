import type { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "Elisha Nam - Web Developer",
  description: "Home Page",
};

export default function Home() {
  return (
    <>
      <HomePage></HomePage>
    </>
  );
}
