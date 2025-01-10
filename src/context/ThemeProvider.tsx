"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeType = "light" | "dark";

interface ThemeContextType {
  mode: string;
  setMode: (str: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<ThemeType>("light");

  const handleThemeChange = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setMode("dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  };

  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
