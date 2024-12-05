import React, { useState } from "react";
import { MdOutlineCheck } from "react-icons/md";

export default function Checkbox() {
  const [isshow, setisshow] = useState(false);
  const toggleCheckbox = () => {
    setisshow(!isshow);
  };
  return (
    <div>
      <div className="flex items-center gap-2 my-40">
        <div
          className="border border-black dark:border-white/80 h-4 w-4 rounded-sm  text-white flex items-center justify-center cursor-pointer"
          onClick={toggleCheckbox}
        >
          {isshow && (
            <MdOutlineCheck className="text-white bg-black dark:bg-white dark:text-black w-full h-auto rounded-sm text-[10px]" />
          )}
        </div>
        <div>
          <h1 className="font-roboto dark:text-white">
            Accept terms and conditions
          </h1>
        </div>
      </div>
    </div>
  );
}
