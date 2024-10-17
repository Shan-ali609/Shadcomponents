import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

export default function Navigationmenu() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="flex gap-11 py-44 px-7">
      <div
        className="relative  text-[14px] flex items-center gap-3 cursor-pointer dark:text-white "
        onMouseEnter={() => handleMouseEnter("gettingStarted1")}
        onMouseLeave={handleMouseLeave}
      >
        <p className="font-roboto dark:text-white/70 ">Getting started</p>
        <SlArrowDown
          className={`transform transition-transform duration-300 ${
            hoveredItem === "gettingStarted1" ? "rotate-180" : ""
          }`}
        />

        {hoveredItem === "gettingStarted1" && (
          <div className="absolute  text-[14px] top-full left-0 dark:text-white dark:bg-black  w-[380px] lg:w-[540px] p-4 bg-white border rounded-lg shadow-lg">
            <div className="flex flex-wrap md:flex-nowrap gap-2">
              <div className="w-full md:max-w-48 lg:max-w-48 h-[50px] md:h-[220px] lg:h-[220px]  bg-gray-400/35 text-center flex items-end">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
              <div className="flex flex-col gap-3">
                <div className="hover:bg-gray-300/30">
                  <h2 className="font-roboto">Hide</h2>
                  <p className="text-[12px] text-black/70">
                    Lorem ipsum, dolor seat non, nemo quas nisi aut, am!
                  </p>
                </div>

                <div className="hover:bg-gray-300/30">
                  <h2 className="font-roboto">Hide</h2>
                  <p className="text-[12px] text-black/70">
                    Lorem ipsum, dolor seat non, nemo quas nisi aut, am!
                  </p>
                </div>

                <div className="hover:bg-gray-300/30">
                  <h2 className="font-roboto">Hide</h2>
                  <p className="text-[12px] text-black/70">
                    Lorem ipsum, dolor seat non, nemo quas nisi aut, am!
                  </p>
                </div>

                <div className="hover:bg-gray-300/30">
                  <h2 className="font-roboto">Hide</h2>
                  <p className="text-[12px] text-black/70">
                    Lorem ipsum, dolor seat non, nemo quas nisi aut, am!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className="relative  font-roboto text-[14px] flex items-center gap-3 cursor-pointer dark:text-white"
        onMouseEnter={() => handleMouseEnter("Components")}
        onMouseLeave={handleMouseLeave}
      >
        <p className="dark:text-white/70">Components</p>
        <SlArrowDown
          className={`transform transition-transform duration-300 ${
            hoveredItem === "Components" ? "rotate-180" : ""
          }`}
        />

        {hoveredItem === "Components" && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[380px] sm:w-[440px] md:w-[470px] lg:w-[530px] z-50  p-2 dark:text-white dark:bg-black  bg-white border rounded-lg shadow-lg">
            <div className="flex gap-3">
              <div className="flex flex-col gap-3">
                <div className="hover:bg-gray-300/30 dark:hover:bg-white/10 ">
                  <h2 className="font-roboto">Hide</h2>
                  <p className="text-[12px] text-black/70">
                    Lorem ipsum, dolor seat non, nemo quas nisi aut, am!
                  </p>
                </div>

                <div className="hover:bg-gray-300/30">
                  <h2 className="font-roboto">Hide</h2>
                  <p className="text-[12px] text-black/70">
                    Lorem ipsum, dolor seat non, nemo quas nisi aut, am!
                  </p>
                </div>

                <div className="hover:bg-gray-300/30">
                  <h2 className="font-roboto">Hide</h2>
                  <p className="text-[12px] text-black/70">
                    Lorem ipsum, dolor seat non, nemo quas nisi aut, am!
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="hover:bg-gray-300/30">
                  <h2 className="font-roboto">Hide</h2>
                  <p className="text-[12px] text-black/70">
                    Lorem ipsum, dolor seat non, nemo quas nisi aut, am!
                  </p>
                </div>

                <div className="hover:bg-gray-300/30">
                  <h2 className="font-roboto">Hide</h2>
                  <p className="text-[12px] text-black/70">
                    Lorem ipsum, dolor seat non, nemo quas nisi aut, am!
                  </p>
                </div>

                <div className="hover:bg-gray-300/30">
                  <h2 className="font-roboto">Hide</h2>
                  <p className="text-[12px] text-black/70">
                    Lorem ipsum, dolor seat non, nemo quas nisi aut, am!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative  font-roboto text-[14px]  flex items-center gap-3 cursor-pointer dark:text-white">
        Documentation
      </div>
    </div>
  );
}
