
// "use client"
// import React, { createContext, useEffect, useState } from 'react';

// export const AppStateContext = createContext(null);

// function AppState({ children }) {
//   const [theme, setTheme] = useState("light"); 

//   useEffect(() => {
  
//     if (theme === "dark") {
//       document.body.classList.add("dark");
//     } else {
//       document.body.classList.remove("dark");
//     }
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <AppStateContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </AppStateContext.Provider>
//   );
// }

// export default AppState;

"use client"
import React, { createContext, useEffect, useState } from 'react';

export const AppStateContext = createContext(null);

function AppState({ children }) {
  const [theme, setTheme] = useState("light"); 

  useEffect(() => {
    // Clear existing theme classes
    document.body.classList.remove("dark", "light");

    switch (theme) {
      case "dark":
        document.body.classList.add("dark");
        break;
      case "light":
        document.body.classList.add("light");
        break;
      case "system":
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        document.body.classList.toggle("dark", mediaQuery.matches);
        document.body.classList.add("light");
        break;
      default:
        break;
    }
  }, [theme]);

  return (
    <AppStateContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppStateContext.Provider>
  );
}

export default AppState;
