"use client";
import React, { useState } from 'react';
import Mybutton from './Mybutton';

export default function MyDropdown({ data, cond }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(data[0]);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      <div
        className={` ${cond ? "w-44 cursor-pointer h-6 flex justify-between border rounded-md dark:text-white " : "cursor-pointer  flex rounded-md border w-36 pl-2 dark:text-white "} `}
        onClick={toggleDropdown}
      >
        <h4 className={`${cond ? "flex  text-md w-36  pl-1 dark:text-white " : " dark:text-white text-xs flex w-28 items-center text-gray-500"}`}>
        
          <span className={` ${cond ? " text-gray-700 text-[12px] dark:text-white   " : "text-gray-400 text-xs pr-4 dark:text-white "}`}> 
            {cond ? "" : "Style:"} 
          </span>
        
          {selectedOption}
          </h4>
          <Mybutton className={cond ? "text-gray-400 dark:text-white  " : "text-gray-400 dark:text-white"} />
        
      
     
      </div>
  
     
      {isOpen && (
        <div className={` ${cond ? "absolute z-10  bottom-full bg-white border rounded-md w-44 dark:bg-black dark:text-white" : "dark:bg-black dark:text-white absolute z-10 bg-white border rounded-md w-36"} `}>
          {cond && (
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-1 border-b dark:bg-black dark:rounded-md text-gray-500 dark:text-white focus:outline-none"
            />
          )}
          {data.map((option, index) => (
            <div
              key={index}
              className={` ${cond ? "px-6 text-[16px] py-1 cursor-pointer text-gray-500 hover:bg-gray-200 dark:text-white" : "px-6 text-[12px] rounded-lg  py-1 cursor-pointer dark:text-white text-gray-500 hover:bg-neutral-200 dark:hover:bg-neutral-600 "}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


