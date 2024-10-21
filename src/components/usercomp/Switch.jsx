import React, { useState } from "react";

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-2 dark:text-white py-44">
      <div
        onClick={toggleSwitch}
        className={`relative inline-flex items-center w-8 h-5 bg-gray-300 rounded-full cursor-pointer transition-colors duration-300 
          ${
            isOn ? "bg-blue-600 dark:bg-white" : "bg-gray-300 dark:bg-white/30"
          }`}
      >
        <span
          className={`absolute left-0 w-4 h-4 bg-white dark:bg-black rounded-full shadow-md transition-transform duration-300 
            ${isOn ? "translate-x-full" : "translate-x-0"}`}
        />
      </div>
      Airplane Mode
    </div>
  );
};

export default Switch;
