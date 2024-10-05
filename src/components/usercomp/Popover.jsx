import React, { useState } from 'react';

export default function Popover() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className='relative'>
      <button 
        className="px-4 py-2 bg-white text-black border dark:bg-black dark:text-white rounded-md" 
        onClick={togglePopup}
      >
        Show Popup
      </button>

      {showPopup && (
        <div className="absolute  bg-gray-600 bg-opacity-50 flex justify-center items-center gap-4 ">
          <div className="bg-white p-6 flex flex-col gap-3 shadow-lg w-[400px] dark:text-white dark:bg-black  border">
            <h2 className="text-lg font-bold mb-4">Set Dimensions</h2>
            
            <div className="flex gap-4 items-center">
              <label className=" text-md">Width</label>
               <div className='pl-[41px]'>
              <input
                type="text"
                className=" border rounded-xs pl-2 dark:bg-black"
                placeholder="Enter width"
              />
            </div>
            </div>
            
            <div className="flex gap-4 items-center">
              <label className=" text-md">Max Width</label>
              <div className='pl-[5px]'>
              <input
                type="text"
                className=" border rounded-xs pl-2 dark:bg-black"
                placeholder="Max width"
              />
              </div>
            </div>
            
            <div className="flex gap-4 items-center">
              <label className=" text-md">Height</label>
             <div className='pl-[35px]'>
              <input
                type="text"
                className=" border rounded-xs pl-2 dark:bg-black"
                placeholder="Height"
              />
              </div>
            </div>
            
               
            <div className="flex gap-4 items-center">
              <label className=" text-md">Max Height</label>
              <input
                type="text"
                className=" border rounded-xs pl-2 dark:bg-black"
                placeholder="Height"
              />
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
