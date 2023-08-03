import "./globals.css";
import type { Metadata } from "next";
import NavBar from "./NavBar";

export const metadata: Metadata = {
  title: "Elisha Nam - Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black mt-16 max-w-4xl mx-auto">
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
