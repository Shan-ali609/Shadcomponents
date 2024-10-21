"use client";
import React, { useState, useContext } from "react";
import { BsBrightnessHigh } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiShadcnui } from "react-icons/si";
import { GiCircle } from "react-icons/gi";
import { RxMoon } from "react-icons/rx";
import "@/components/navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Leftside from "./leftcomp/Leftside";
import Mysearch from "./pagecomp/Mysearch";
import { CiSearch } from "react-icons/ci";
import { AppStateContext } from "./contextApi/AppState";
import Themes from "./pagecomp/Themes";
import Link from "next/link";
import Datacomp from "./pagecomp/Datacomp";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme, setTheme } = useContext(AppStateContext);
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    setDropdownOpen(false);
  };

  return (
    <>
      <nav className="w-full bg-white/95 border-b dark:border-white/10  md:px-20 lg:px-5 xl:px-10 h-[56px] text-[rgb(4,4,4)] flex justify-between items-center p-4 fixed z-50 dark:bg-black">
        <button
          className="imburger dark:text-white"
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <RxHamburgerMenu />
        </button>

        <div className={`logo-name dark:bg-black ${isNavOpen ? "open" : ""}`}>
          <div className="text-bar">
            <SiShadcnui className="icon-logo   dark:text-white" />
            {isNavOpen && (
              <button
                className="close-btn dark:text-white"
                aria-label="Close navigation"
                onClick={closeNav}
              >
                <RxCross2 />
              </button>
            )}

            <span className="text-logo font-sans dark:text-white ">
              shadcn/ui
            </span>
          </div>

          <ul className={`ul-flex font-sans ${isNavOpen ? "open" : ""}`}>
            <li className="dark:text-white/70  ">Docs</li>
            <li className="dark:text-white/90">Components</li>
          </ul>
          {isNavOpen && (
            <div>
              <Leftside navpaddingprop={true} />
            </div>
          )}
        </div>

        <div className="icons-pov">
          <div>
            <button onClick={() => setIsSearchPopupOpen(true)}>
              <Mysearch navsearch={true} />
            </button>
          </div>
          <FaGithub className="icon-con dark:text-white" />
          <FaXTwitter className="icon-con dark:text-white" />

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-label="Toggle Theme"
              className="flex items-center"
            >
              {theme === "dark" ? (
                <RxMoon className="icon-con dark:text-white" />
              ) : (
                <BsBrightnessHigh className="icon-con dark:text-white" />
              )}
            </button>

            {dropdownOpen && <Themes handleThemeChange={handleThemeChange} />}
          </div>
        </div>
      </nav>

      {isSearchPopupOpen && (
        <div className="search-popup  fixed inset-0 flex justify-center items-center  bg-black bg-opacity-80 z-50">
          <div className="bg-white border dark:border-white/15 dark:bg-black dark:text-white px-3 sm:px-5 md:px-5 lg:px-5 py-5 rounded-lg w-[600px] h-96 ">
            <div className="flex justify-between  w-full  mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="search here"
                  className="w-[260px] sm:w-[320px] md:w-[420px] lg:w-[450px] h-9 rounded border pl-2 dark:bg-black dark:text-white "
                />

                <CiSearch className="absolute top-2/4 right-4 transform -translate-y-2/4 text-gray-500 dark:text-white cursor-pointer" />
              </div>
              <button
                className="text-lg dark:text-white"
                onClick={() => setIsSearchPopupOpen(false)}
              >
                <RxCross2 />
              </button>
            </div>

            <ul className="dark:text-white max-h-[300px] overflow-auto">
              {Datacomp.map((data, index) => (
                <li
                  key={data.id}
                  className={`py-1 font-sans  ${
                    index === 0 ? "text-[10px]" : "text-[15px]"
                  }`}
                >
                  {index === 0 ? " " : <GiCircle className="inline mr-2 " />}
                  <Link
                    href={`/component/${data.id}`}
                    className="dark:text-white"
                    onClick={() => setIsSearchPopupOpen(false)}
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
