import React, { useState } from "react";
import Command from "./Command";

export default function Dropmenu() {
  const [openclick, setopenclick] = useState(false);
  const handleit = () => {
    setopenclick(!openclick);
  };
  const handleclose = () => {
    setopenclick(false);
  };
  return (
    <div className=" relative my-56 ">
      <div className="  border rounded-md hover:bg-slate-300 dark:text-white dark:hover:bg-gray-400 ">
        <button
          type="button"
          className=" px-3 py-2 font-roboto text-[14px] "
          onClick={handleit}
        >
          Open
        </button>
      </div>

      {openclick && (
        <div className="absolute bottom-full  ">
          <Command dropprop={true} handleclose={handleclose} />
        </div>
      )}
    </div>
  );
}
