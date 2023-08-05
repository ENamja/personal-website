import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Home Page",
};

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center text-center h-screen">
        <div className="text-[#49c5b6] font-light inline-block text-9xl">
          <span className="inline-block overflow-hidden animate-typing">
            &lt;Hello/&gt;
          </span>
          <span className="box-border inline-block w-1 h-32 ml-2 -mb-4 bg-white animate-cursor"></span>
        </div>
      </div>
      <div className="w-screen h-screen bg-white"></div>
    </>
  );
}
