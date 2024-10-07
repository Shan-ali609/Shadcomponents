
import React from 'react';
import { SlArrowRight } from "react-icons/sl";

export default function Breadcrumb() {
  return (
    <div className=' w-full flex justify-center items-center'>
      <div className='flex items-center space-x-2'>
        <div className='text-sm cursor-pointer text-gray-400 hover:text-black dark:hover:text-white'>Home</div>
        <SlArrowRight className='h-3 w-3 text-gray-400' />
        <div className='cursor-pointer text-gray-400 flex pb-[8px] hover:text-black dark:hover:text-white '>...</div>
        <SlArrowRight className='h-3 w-3 text-gray-400' />
        <div className='text-sm cursor-pointer text-gray-400 hover:text-black dark:hover:text-white '>Components</div>
        <SlArrowRight className='h-3 w-3 text-gray-400' />
        <div className='text-sm dark:text-white'>Breadcrumb</div>
      </div>
    </div>
  );
}

