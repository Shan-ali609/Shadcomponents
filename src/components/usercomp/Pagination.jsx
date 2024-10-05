import React from 'react'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
export default function Pagination() {
  return (
    <>

       <div className='flex gap-3 items-center cursor-pointer'>
        <div className=' flex items-center gap-2 px-5 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-400 dark:text-white'>
        <SlArrowLeft />
            <button type='button' >Previous </button>
        </div>

        <div className='dark:text-white'>1</div>
        <div className='px-2 py-2 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-400'>2</div>
        <div className='dark:text-white'>3</div>
        <div className='dark:text-white'>...</div>
          



        <div className=' flex  items-center gap-2 px-9 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-400 dark:text-white'>
        <button type='button' > Next </button>
        <SlArrowRight />
            
        </div>
       </div>


    </>
  )
}
