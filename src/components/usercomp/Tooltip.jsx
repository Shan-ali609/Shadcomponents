import React from 'react'
export default function Hovercard() {
  return (
    <>

    <div className="relative group my-44">
      <div className=' cursor-pointer dark:text-white border dark:border-white/20 px-3 py-2 font-roboto text-[14px] rounded-md'>
              <button type='button' className=''>Hover</button>
      </div>

      
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2  w-48 py-2  bg-white dark:bg-black border dark:border-white/20 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p className="text-center text-[13px] dark:text-white/70"> Content about Library</p>
      </div>
    </div>




    </>
  )
}
