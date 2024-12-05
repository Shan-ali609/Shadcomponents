import React from "react";

export default function Button() {
  return (
    <div className="py-40 ">
      <button
        type="button"
        className="bg-black text-white dark:bg-white dark:text-black dark:hover:bg-gray-400 px-3 py-1  rounded-md hover:bg-zinc-900"
      >
        Button
      </button>
    </div>
  );
}
