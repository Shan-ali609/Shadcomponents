
"use client";
import React, { useState } from "react";
import { BsBrightnessHigh } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiShadcnui } from "react-icons/si";
import "@/components/navbar.css";
import { RxCross2 } from "react-icons/rx";
import Leftside from "./leftcomp/Leftside";
import Mysearch from "./pagecomp/Mysearch";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <nav className="nav-container">
        <button
          className="imburger"
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          ☰ 
        </button>

       
       
        <div className={`logo-name ${isNavOpen ? "open" : ""}`}>
          <div className="text-bar">
            <SiShadcnui className="icon-logo" />
            {isNavOpen && (
          <button
            className="close-btn"
            aria-label="Close navigation"
            onClick={closeNav}
          >
            <RxCross2 />
          </button>
          
        )}
              
            <span className="text-logo">shadcn/ui</span>
          
          </div>
          <ul className={`ul-flex ${isNavOpen ? "open" : ""}`}>
            <li> Docs</li>
            <li> Components</li>
          </ul>
          {isNavOpen && <Leftside />}
        </div>

        <div className="icons-pov">
          <div>
          <Mysearch navsearch = {true} />
          </div>         
          <FaGithub className="icon-con" />
          <FaXTwitter className="icon-con" />
          <BsBrightnessHigh className="icon-con" />
        </div>
      </nav>

      
    </>
  );
}
