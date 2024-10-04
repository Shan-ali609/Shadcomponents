
"use client"
import React, { createContext, useEffect, useState } from 'react';

export const AppStateContext = createContext(null);

function AppState({ children }) {
  const [theme, setTheme] = useState("light"); 

  useEffect(() => {
  
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <AppStateContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppStateContext.Provider>
  );
}

export default AppState;

