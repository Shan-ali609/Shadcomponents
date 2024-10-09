import React, { useState } from 'react';
import { SlArrowDown } from "react-icons/sl";

export default function Navigationmenu() {
  const [hoveredItem, setHoveredItem] = useState(null); 

  const handleMouseEnter = (item) => {
    setHoveredItem(item); 
  };

  const handleMouseLeave = () => {
    setHoveredItem(null); 
  };

  return (
    <div className="flex gap-11 py-44">
      
      <div 
        className="relative  text-[14px] flex items-center gap-3 cursor-pointer dark:text-white " 
        onMouseEnter={() => handleMouseEnter('gettingStarted1')} 
        onMouseLeave={handleMouseLeave}
      >
        <p className='font-roboto'>Getting started</p>
        <SlArrowDown 
          className={`transform transition-transform duration-300 ${hoveredItem === 'gettingStarted1' ? 'rotate-180' : ''}`} 
        />

        {hoveredItem === 'gettingStarted1' && (
          <div className="absolute  text-[14px] top-full left-0 dark:text-white dark:bg-black  w-[550px] p-4 bg-white border rounded-lg shadow-lg">
               
               <div className='flex gap-2'>
                 
                 <div className='max-w-48 h-[220px] bg-gray-400/35 text-center flex items-end'>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                 </div>
                   <div className='flex flex-col gap-3'> 
                   <div className='hover:bg-gray-300/30'>
                     <h2 className='font-roboto'>Hide</h2>
                     <p>Lorem ipsum, dolor seat non,
                       nemo quas nisi aut, am!</p>
                   </div>

                   <div className='hover:bg-gray-300/30'>
                     <h2 className='font-roboto'>Hide</h2>
                     <p>Lorem ipsum, dolor seat non,
                       nemo quas nisi aut, am!</p>
                   </div>

                   <div className='hover:bg-gray-300/30'>
                     <h2 className='font-roboto'>Hide</h2>
                     <p>Lorem ipsum, dolor seat non,
                       nemo quas nisi aut, am!</p>
                   </div>
                   </div>

               </div>
             
          </div>
        )}
      </div>
      
    
      <div 
        className="relative  font-roboto text-[14px] flex items-center gap-3 cursor-pointer dark:text-white" 
        onMouseEnter={() => handleMouseEnter('Components')} 
        onMouseLeave={handleMouseLeave}
      >
        Components
        <SlArrowDown 
          className={`transform transition-transform duration-300 ${hoveredItem === 'Components' ? 'rotate-180' : ''}`} 
        />

        {hoveredItem === 'Components' && (
          <div className="absolute top-full left-0 w-[550px]  p-4 dark:text-white dark:bg-black  bg-white border rounded-lg shadow-lg">
              <div className='flex gap-3'>
              <div className='flex flex-col gap-3'> 
                   <div className='hover:bg-gray-300/30'>
                     <h2 className='font-roboto'>Hide</h2>
                     <p>Lorem ipsum, dolor seat non,
                       nemo quas nisi aut, am!</p>
                   </div>

                   <div className='hover:bg-gray-300/30'>
                     <h2 className='font-roboto'>Hide</h2>
                     <p>Lorem ipsum, dolor seat non,
                       nemo quas nisi aut, am!</p>
                   </div>

                   <div className='hover:bg-gray-300/30'>
                     <h2 className='font-roboto'>Hide</h2>
                     <p>Lorem ipsum, dolor seat non,
                       nemo quas nisi aut, am!</p>
                   </div>
                   </div>
                   <div className='flex flex-col gap-3'> 
                   <div className='hover:bg-gray-300/30'>
                     <h2 className='font-roboto'>Hide</h2>
                     <p>Lorem ipsum, dolor seat non,
                       nemo quas nisi aut, am!</p>
                   </div>

                   <div className='hover:bg-gray-300/30'>
                     <h2 className='font-roboto'>Hide</h2>
                     <p>Lorem ipsum, dolor seat non,
                       nemo quas nisi aut, am!</p>
                   </div>

                   <div className='hover:bg-gray-300/30'>
                     <h2 className='font-roboto'>Hide</h2>
                     <p>Lorem ipsum, dolor seat non,
                       nemo quas nisi aut, am!</p>
                   </div>
                   </div>
              </div>
          </div>
        )}
      </div>

      <div 
        className="relative  font-roboto text-[14px]  flex items-center gap-3 cursor-pointer dark:text-white"
      >
        Documentation
      </div>
    </div>
  );
}

