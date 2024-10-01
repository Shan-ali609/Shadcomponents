import React from 'react'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
export default function Pagination() {
  return (
    <>

       <div className='flex gap-3 items-center cursor-pointer'>
        <div className=' flex items-center gap-2 px-5 py-2 rounded-md hover:bg-gray-200'>
        <SlArrowLeft />
            <button type='button' >Previous </button>
        </div>

        <div>1</div>
        <div className='px-2 py-2 hover:bg-gray-200'>2</div>
        <div>3</div>
        <div>...</div>
          



        <div className=' flex  items-center gap-2 px-9 py-2 rounded-md hover:bg-gray-200'>
        <button type='button' > Next </button>
        <SlArrowRight />
            
        </div>
       </div>


    </>
  )
}
