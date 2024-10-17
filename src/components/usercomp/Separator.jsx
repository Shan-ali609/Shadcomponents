import React from "react";

export default function Separator() {
  return (
    <div className="flex flex-col py-44 ">
      <div className="border-b dark:border-white/20 pb-4 dark:text-white">
        <p className="text-[15px]">Radix Primitives</p>
        <p className="text-[14px] text-gray-400/90 dark:text-gray-400">
          An open-source UI component library.
        </p>
      </div>

      <div className="flex mt-2 dark:text-white">
        <p className="border-r-2 pr-2">Blog</p>
        <p className="pl-2 border-r-2 pr-2">Source</p>
        <p className="pl-5">Docs</p>
      </div>
    </div>
  );
}
