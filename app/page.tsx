import type { Metadata } from "next";
import Hello from "./Hello";

export const metadata: Metadata = {
  title: "Elisha Nam - Web Developer",
  description: "Home Page",
};

export default function Home() {
  return <Hello></Hello>;
}
