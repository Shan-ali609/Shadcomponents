import React from "react";
import { FaPlayCircle } from "react-icons/fa";

export default function Hovercard() {
  return (
    <>
      <div className="relative group my-44">
        <div className="hover:underline underline-offset-1 cursor-pointer dark:text-white">
          @nextjs
        </div>

        <div className="absolute top-full left-0 mt-2 w-44 sm:w-52 md:w-64 lg:w-64 p-4 bg-white dark:bg-black border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-4 dark:text-white">
            <FaPlayCircle />
            <h4 className="text-lg font-bold ">Nextjs</h4>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            This card appears when you hover over the trigger element.
          </p>
        </div>
      </div>
    </>
  );
}
