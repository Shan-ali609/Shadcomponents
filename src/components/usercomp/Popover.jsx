import React, { useState } from 'react';

export default function Popover() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className='relative my-52 '>
      <button 
        className="px-4 py-2  bg-white text-black font-roboto text-[13px] border dark:bg-black dark:text-white rounded-md" 
        onClick={togglePopup}
      >
        Show Popover
      </button>

      {showPopup && (
        <div className="absolute bottom-14    left-1/2 -translate-x-1/2  bg-gray-600/50 b flex justify-center items-center gap-4 ">
          <div className="bg-white  flex flex-col py-2 px-3  shadow-lg w-auto dark:text-white dark:bg-black  border dark:border-white/20">
            <h2 className="text-md font-roboto ">Dimensions</h2>
            <p className='text-[14px] text-gray-400'>Set the dimensions for the layer.</p>
            <div className="flex gap-4 items-center py-2">
              <label className=" text-[15px] font-roboto ">Width</label>
               <div className='pl-[41px]'>
              <input
                type="text"
                className=" border rounded-sm pl-2 dark:bg-black placeholder:text-black outline-none dark:border-white/10 dark:placeholder:text-white"
                placeholder="50%"
              />
            </div>
            </div>
            
            <div className="flex gap-4 items-center py-2">
              <label className="text-[15px] font-roboto ">Max Width</label>
              <div className='pl-[5px]'>
              <input
                type="text"
                className=" border rounded-sm pl-2 dark:bg-black placeholder:text-black dark:border-white/10 dark:placeholder:text-white"
                placeholder="200%"
              />
              </div>
            </div>
            
            <div className="flex gap-4 items-center py-2">
              <label className="text-[15px] font-roboto">Height</label>
             <div className='pl-[35px]'>
              <input
                type="text"
                className=" border rounded-sm pl-2 dark:bg-black placeholder:text-black dark:border-white/10 dark:placeholder:text-white"
                placeholder="200px"
              />
              </div>
            </div>
            
               
            <div className="flex gap-4 items-center py-2">
              <label className=" text-[15px] font-roboto">Max Height</label>
              <input
                type="text"
                className=" border rounded-sm pl-2 dark:bg-black placeholder:text-black dark:border-white/10 dark:placeholder:text-white"
                placeholder="none"
              />
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
