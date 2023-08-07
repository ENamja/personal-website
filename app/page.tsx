import type { Metadata } from "next";
import Hello from "./Hello";

export const metadata: Metadata = {
  description: "Home Page",
};

export default function Home() {
  return (
    <>
      <Hello></Hello>
    </>
  );
}
