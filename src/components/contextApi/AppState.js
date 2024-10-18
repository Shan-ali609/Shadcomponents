"use client";
import React, { createContext, useEffect, useState } from "react";

export const AppStateContext = createContext(null);

function AppState({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    document.body.classList.remove("dark", "light");

    switch (theme) {
      case "dark":
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        document.body.classList.add("light");
        localStorage.setItem("theme", "light");
        break;
      case "system":
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        document.body.classList.toggle("dark", mediaQuery.matches);
        document.body.classList.add("light");
        localStorage.setItem("theme", "system");
        break;
      default:
        break;
    }
  }, [theme]);

  const shetcond = true;

  return (
    <AppStateContext.Provider value={{ theme, setTheme, shetcond }}>
      {children}
    </AppStateContext.Provider>
  );
}

export default AppState;
