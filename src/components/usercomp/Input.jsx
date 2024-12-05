import React from "react";

export default function Input() {
  return (
    <div className="py-44 ">
      <input
        className="border dark:border-white/10 px-2 py-2 w-64 sm:w-72 md:w-80 lg:w-96 rounded-md dark:bg-black dark:text-white"
        type="text"
        placeholder="Emails"
      />
    </div>
  );
}
