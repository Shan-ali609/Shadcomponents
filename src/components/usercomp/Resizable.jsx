
import React from "react";

export default function Resizable() {
  return (
    <>
      <div className="w-[600px] h-48 grid grid-cols-2">
        <div className="border text-center row-span-2 px-3 py-7 flex justify-center items-center dark:text-white">
          One
        </div>
        <div className="border px-3 flex justify-center items-center dark:text-white">
          Two
        </div>
        <div className="border px-3 py-7 flex justify-center items-center dark:text-white">
          Three
        </div>
      </div>
    </>
  );
}

