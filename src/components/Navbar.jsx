
"use client";
import React, { useState, useContext } from "react";
import { BsBrightnessHigh } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiShadcnui } from "react-icons/si";
import { RxMoon } from "react-icons/rx";
import "@/components/navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Leftside from "./leftcomp/Leftside";
import Mysearch from "./pagecomp/Mysearch";
import { AppStateContext } from "./contextApi/AppState";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { theme, toggleTheme } = useContext(AppStateContext);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
     <nav className="w-full h-auto text-[rgb(4,4,4)] flex justify-between items-center p-2 fixed z-50 bg-white dark:bg-black">
        <button
          className="imburger dark:text-white"
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <RxHamburgerMenu />
        </button>

        <div className={`logo-name dark:bg-black ${isNavOpen ? "open" : ""}`}>
          <div className="text-bar">
            <SiShadcnui className="icon-logo dark:text-white" />
            {isNavOpen && (
              <button
                className="close-btn dark:text-white"
                aria-label="Close navigation"
                onClick={closeNav}
              >
                <RxCross2 />
              </button>
            )}

            <span className="text-logo dark:text-white ">shadcn/ui</span>
          </div>

          <ul className={`ul-flex ${isNavOpen ? "open" : ""}`}>
            <li className="dark:text-white" >Docs</li>
            <li className="dark:text-white" >Components</li>
          </ul>
          {isNavOpen && <Leftside />}
        </div>

        <div className="icons-pov">
          <div>
            <Mysearch navsearch={true} />
          </div>
          <FaGithub className="icon-con dark:text-white" />
          <FaXTwitter className="icon-con dark:text-white" />

        
          <button onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light'? (
                <BsBrightnessHigh className="icon-con" />
           
            ) : (
       
              <RxMoon className="icon-con dark:text-white" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
}

