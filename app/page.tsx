import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Home Page",
};

export default function Home() {
  return (
    <div className="text-[#49c5b6] text-center font-light">
      <h1 className="text-9xl my-12 pt-16">Hello</h1>
      <div className="text-6xl">
        <p className="text-left my-6">
          &lt; I'm <span className="text-white font-normal">Elisha Nam</span>,
        </p>
        <p className="text-right">
          a <span className="text-white font-normal">Full-Stack Developer</span>{" "}
          &gt;
        </p>
      </div>
    </div>
  );
}
