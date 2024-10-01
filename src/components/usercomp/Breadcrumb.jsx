
import React from 'react';
import { SlArrowRight } from "react-icons/sl";

export default function Breadcrumb() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className='flex items-center space-x-2'>
        <div className='text-sm cursor-pointer text-gray-400 hover:text-black'>Home</div>
        <SlArrowRight className='h-3 w-3 text-gray-400' />
        <div className='cursor-pointer text-gray-400 flex pb-[8px] hover:text-black'>...</div>
        <SlArrowRight className='h-3 w-3 text-gray-400' />
        <div className='text-sm cursor-pointer text-gray-400 hover:text-black'>Components</div>
        <SlArrowRight className='h-3 w-3 text-gray-400' />
        <div className='text-sm'>Breadcrumb</div>
      </div>
    </div>
  );
}

