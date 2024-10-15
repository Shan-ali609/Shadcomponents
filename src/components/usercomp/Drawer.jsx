"use client";
import React, { useState } from "react";
import { LuMinus } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [counter, setCounter] = useState(200);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

   const handleclose = () => {
    setIsOpen(false);
   }

  const incrementCounter = () => {
    if (counter < 400) {
      setCounter(counter + 10);
    }
  };

  const decrementCounter = () => {
    if (counter > 200) {
      setCounter(counter - 10);
    }
  };

  return (
    <div className="relative py-40">
      <button
        className="px-4 py-2 font-roboto text-[14px]  text-black border rounded-lg dark:text-white"
        onClick={toggleDrawer}
      >
        Open Drawer
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black dark:bg-white opacity-50 z-30"
          onClick={toggleDrawer}
        ></div>
      )}

      <div
        className={`fixed bottom-0 left-0 w-full bg-white z-40 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } h-2/3 rounded-t-lg shadow-lg`}
      >
        <div className="absolute bottom-0 mb-3 left-1/2 transform -translate-x-1/2  ">
          <h2 className="text-lg font-bold dark:text-black ">Move Goal</h2>
          <p className="dark:text-black">Set your daily activity goal</p>

          <div className="flex items-center justify-center gap-16 mt-4">
            <button
              onClick={decrementCounter}
              className="p-1 rounded-full border dark:text:white"
            >
              <LuMinus className="text-xl" />
            </button>

            <div className="text-7xl font-bold dark:text:white">{counter}</div>

            <button
              onClick={incrementCounter}
              className="p-1 rounded-full border dark:text:white "
            >
              <FaPlus className="text-xl" />
            </button>
          </div>
          <div>
            <p className="text-xs text-center dark:text:white ">CALORIES/DAY</p>
          </div>

          <div className="flex items-end gap-2 overflow-hidden  mt-9">
            <div className="bg-black dark:text:white w-[22px] h-[100px]"></div>
            <div className="bg-black dark:text:white w-[22px] h-[55px]"></div>
            <div className="bg-black dark:text:white w-[22px] h-[80px]"></div>
            <div className="bg-black dark:text:white w-[22px] h-[60px]"></div>
            <div className="bg-black dark:text:white w-[22px] h-[40px]"></div>
            <div className="bg-black dark:text:white w-[22px] h-[65px]"></div>
            <div className="bg-black dark:text:white w-[22px] h-[35px]"></div>
            <div className="bg-black dark:text:white w-[22px] h-[75px]"></div>
            <div className="bg-black dark:text:white w-[22px] h-[45px]"></div>
            <div className="bg-black dark:text:white w-[22px] h-[55px]"></div>
          </div>

          <div className="flex flex-col w-full pt-4 gap-3 ">
            <button
              type="button"
              className="w-full border-2 bg-black text-white dark:bg-black  py-1 rounded-sm"
              onClick={handleclose}
            >
              Submit
            </button>
            <button
              type="button"
              className="w-full border-2  text-black dark:text:white py-1 rounded-sm"
              onClick={handleclose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
