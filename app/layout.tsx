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
      <body className="bg-black mt-16">
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
