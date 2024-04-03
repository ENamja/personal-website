"use client";

import "./globals.css";
import NavBar from "./NavBar";
import { ThemeContext } from "./Contexts";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("dark");
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg" />
      </head>
      <body>
        <ThemeContext.Provider value={theme}>
          <NavBar theme={theme} setTheme={setTheme}></NavBar>
          {children}
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
