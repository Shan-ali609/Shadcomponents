import React from 'react'
import { FaPlayCircle } from "react-icons/fa";

export default function Hovercard() {
  return (
    <>

    <div className="relative group">
      <div className='hover:underline underline-offset-1 cursor-pointer'>
                 @nextjs
      </div>

      
      <div className="absolute top-full left-0 mt-2 w-64 p-4 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className='flex items-center gap-4'>
        <FaPlayCircle />
        <h4 className="text-lg font-bold ">Nextjs</h4>
          
        </div>
        <p className="text-xs text-gray-600">
          This card appears when you hover over the trigger element.
        </p>
      </div>
    </div>




    </>
  )
}
