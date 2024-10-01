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
    <>
      <div className="w-80 h-[300px] border rounded-md shadow-md">
        <div>
          <div className='flex flex-col px-4 py-4 '>

            <h1 className='text-lg font-semibold'>Create project</h1>
            <p className='text-gray-400 text-[16px]'>Deploy your new project in one-click.</p>
            <h5 className='text-lg pt-4 '>Name</h5>
            <input  className="w-full border-2 border-gray-400 rounded-md pl-2 mt-1  focus:outline-none" type="text"   placeholder="name" />

            <h5 className='text-lg pt-4 pb-2'>Framework</h5>

            <div className="relative">
              <div
                className="cursor-pointer border w-full h-8 px-2 flex  items-center rounded-md justify-between"
                onClick={toggleDropdown}
              >
                <h4 className=" text-md flex ">
                  {selectedOption}{" "}
                
                </h4>
                <HiChevronDoubleDown className="text-gray-400" />
              </div>
              {isOpen && (
                <div className="absolute z-10 bg-white border rounded-md w-full">
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className="px-6 py-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          

            <div className="flex justify-between mt-4">
        <button  className="border px-3 py-2 rounded-md bg-gray-300 hover:bg-gray-400">
          Cancel
        </button>
        <button className="ml-3 border px-3 py-1 text-white rounded-md bg-black">
          Deploy
        </button>
      </div>



          </div>
        </div>
      </div>
    </>
  );
}
