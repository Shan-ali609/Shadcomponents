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
    <div className="flex gap-11">
      
      <div 
        className="relative text-[13px] flex items-center gap-3 cursor-pointer dark:text-white " 
        onMouseEnter={() => handleMouseEnter('gettingStarted1')} 
        onMouseLeave={handleMouseLeave}
      >
        Getting started
        <SlArrowDown 
          className={`transform transition-transform duration-300 ${hoveredItem === 'gettingStarted1' ? 'rotate-180' : ''}`} 
        />

        {hoveredItem === 'gettingStarted1' && (
          <div className="absolute top-full left-0 dark:text-white dark:bg-black  w-48 p-4 bg-white border rounded-lg shadow-lg">
            <p>Getting Started 1 Content</p>
            <p>Additional Info</p>
          </div>
        )}
      </div>
      
    
      <div 
        className="relative text-[13px] flex items-center gap-3 cursor-pointer dark:text-white" 
        onMouseEnter={() => handleMouseEnter('Components')} 
        onMouseLeave={handleMouseLeave}
      >
        Components
        <SlArrowDown 
          className={`transform transition-transform duration-300 ${hoveredItem === 'Components' ? 'rotate-180' : ''}`} 
        />

        {hoveredItem === 'Components' && (
          <div className="absolute top-full left-0 w-48 p-4 dark:text-white dark:bg-black  bg-white border rounded-lg shadow-lg hover:bg-slate-300">
            <p>Components Content</p>
            <p>Additional Info</p>
          </div>
        )}
      </div>

      <div 
        className="relative text-[13px] flex items-center gap-3 cursor-pointer dark:text-white"
      >
        Documentation
      </div>
    </div>
  );
}

