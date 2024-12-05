import React, { useState } from 'react';
import { SlArrowDown } from "react-icons/sl";
export default function SimpleDropdown() {
  const [isOpen, setIsOpen] = useState(false); 
  const [selectedOption, setSelectedOption] = useState(); 

  const options = ['Status', 'Email', 'Amount']; 

  const toggleDropdown = () => setIsOpen(!isOpen); 

  const handleOptionClick = (option) => {
    setSelectedOption(option); 
    setIsOpen(false); 
  };

  return (
    <div className="relative w-28">
      <div 
        onClick={toggleDropdown} 
        className="border dark:border-white/10 p-2 rounded text-[13px] cursor-pointer bg-white flex items-center gap-8 dark:text-white dark:bg-zinc-900 "
      > Colums
        <SlArrowDown />
      </div>


      {isOpen && (
        <div className="absolute top-full left-0 w-full border dark:border-white/10 bg-white dark:bg-black dark:text-white  rounded mt-1 z-10">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className="p-2 hover:bg-gray-200 dark:hover:bg-white/10 text-[13px] cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
