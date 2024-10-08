"use client"
import React, { useState } from 'react';
import { HiChevronDoubleDown } from "react-icons/hi2";

export default function Card() {
  const options = [
    { label: "select" },
     { label: "Next js" },
     { label: "Nust.js" },
    
    ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0].label);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
  };
  return (
    <div div className='py-10'>
      <div className="w-80 h-[299px] border rounded-md shadow-md ">
        <div>
          <div className='flex flex-col px-4 py-4 '>

            <h1 className='text-md font-semibold dark:text-white '>Create project</h1>
            <p className='text-gray-400 text-[14px] Roboto dark:text-gray-400 '>Deploy your new project in one-click.</p>
            <h5 className='text-[15px] pt-4 dark:text-white '>Name</h5>
            <input  className="w-full border  rounded-md pl-2 text-[15px] h-10 mt-1 dark:text-white  dark:placeholder:text-gray-400 dark:bg-slate-900  " type="text"   placeholder="Name of your project " />

            <h5 className='text-md pt-4 dark:text-white  '>Framework</h5>

            <div className="relative">
              <div
                className="cursor-pointer border w-full h-10 px-2 flex  items-center rounded-md justify-between"
                onClick={toggleDropdown}
              >
                <h4 className=" text-[15px] flex dark:text-white ">
                  {selectedOption}{" "}
                
                </h4>
                <HiChevronDoubleDown className="text-gray-400 dark:text-white" />
              </div>
              {isOpen && (
                <div className="absolute text-[14px] z-10 bg-white dark:bg-black border rounded-md w-full">
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className="px-6 py-2 cursor-pointer hover:bg-gray-200 dark:text-white dark:hover:bg-gray-400"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          

            <div className="flex justify-between mt-4">
        <button  className="border px-3 py-1 rounded-md  hover:bg-gray-100">
          Cancel
        </button>
        <button className="ml-3 border px-3 py-1 text-white rounded-md bg-black">
          Deploy
        </button>
      </div>



          </div>
        </div>
      </div>
    </div>
  );
}
