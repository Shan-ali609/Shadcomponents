import React, { useState } from 'react';

export default function Popover() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className='relative py-52'>
      <button 
        className="px-4 py-2 bg-white text-black font-roboto text-[13px] border dark:bg-black dark:text-white rounded-md" 
        onClick={togglePopup}
      >
        Show Popover
      </button>

      {showPopup && (
        <div className="absolute   bg-gray-600 bg-opacity-50 flex justify-center items-center gap-4 ">
          <div className="bg-white  flex flex-col py-2 px-3  shadow-lg w-auto dark:text-white dark:bg-black  border">
            <h2 className="text-md font-roboto ">Dimensions</h2>
            <p className='text-[14px] text-gray-400'>Set the dimensions for the layer.</p>
            <div className="flex gap-4 items-center py-3">
              <label className=" text-[15px] font-roboto ">Width</label>
               <div className='pl-[41px]'>
              <input
                type="text"
                className=" border rounded-sm pl-2 dark:bg-black placeholder:text-black"
                placeholder="50%"
              />
            </div>
            </div>
            
            <div className="flex gap-4 items-center py-3">
              <label className="text-[15px] font-roboto ">Max Width</label>
              <div className='pl-[5px]'>
              <input
                type="text"
                className=" border rounded-sm pl-2 dark:bg-black placeholder:text-black"
                placeholder="200%"
              />
              </div>
            </div>
            
            <div className="flex gap-4 items-center py-3">
              <label className="text-[15px] font-roboto">Height</label>
             <div className='pl-[35px]'>
              <input
                type="text"
                className=" border rounded-sm pl-2 dark:bg-black placeholder:text-black"
                placeholder="200px"
              />
              </div>
            </div>
            
               
            <div className="flex gap-4 items-center py-3">
              <label className=" text-[15px] font-roboto">Max Height</label>
              <input
                type="text"
                className=" border rounded-sm pl-2 dark:bg-black placeholder:text-black"
                placeholder="none"
              />
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
