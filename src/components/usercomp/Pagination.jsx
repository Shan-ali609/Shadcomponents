import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
export default function Pagination() {
  return (
    <>
      <div className="flex gap-3 items-center cursor-pointer py-44">
        <div className=" flex items-center gap-2 px-1 sm:px-3 md:px-5 lg:px-5 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-white/10 dark:text-white">
          <SlArrowLeft className="text-[9px]" />
          <button type="button " className="font-roboto">
            Previous
          </button>
        </div>

        <div className="dark:text-white">1</div>
        <div className="px-3 py-2 rounded-md hover:bg-gray-300/30 border dark:text-white ">
          2
        </div>
        <div className="dark:text-white">3</div>
        <div className="dark:text-white">...</div>

        <div className=" flex  items-center gap-2 px-1 sm:px-9 md:px-9 lg:px-9 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-white/10 dark:text-white">
          <button type="button" className="font-roboto">
            Next
          </button>
          <SlArrowRight className="text-[9px]" />
        </div>
      </div>
    </>
  );
}
