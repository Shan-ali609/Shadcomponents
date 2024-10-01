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
        className={` ${cond ? "w-44 cursor-pointer h-6 flex items-center border rounded-md justify-center" : "cursor-pointer rounded-md border w-36 pl-2"} `}
        onClick={toggleDropdown}
      >
        <h4 className={`${cond ? "flex items-center justify-between text-lg " : "text-xs flex justify-between items-center text-gray-500"}`}>
          <span className={` ${cond ? " text-gray-700 text-[12px] mr-10  " : "text-gray-400 text-xs pr-4 "}`}> 
            {cond ? "" : "Style:"} 
          </span>
          {selectedOption}
          <Mybutton className={cond ? "text-gray-400" : "text-gray-400"} />
        </h4>
      </div>
      {isOpen && (
        <div className={` ${cond ? "absolute z-10 bg-white border rounded-md w-44" : "absolute z-10 bg-white border rounded-md w-36"} `}>
          {cond && (
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-1 border-b text-gray-500 focus:outline-none"
            />
          )}
          {data.map((option, index) => (
            <div
              key={index}
              className={` ${cond ? "px-6 text-[16px] py-1 cursor-pointer text-gray-500 hover:bg-gray-200" : "px-6 text-[12px] py-1 cursor-pointer text-gray-500 hover:bg-gray-200"}`}
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


