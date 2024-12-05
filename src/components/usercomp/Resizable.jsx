import React from "react";

export default function Resizable() {
  return (
    <>
      <div className="w-[600px] mx-3 h-48 grid grid-cols-2 my-44">
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
