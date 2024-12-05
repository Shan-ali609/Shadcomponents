import React from 'react'

export default function Menubar() {
  return (
    <>
       <div className='boder dark:border-white/10 round-md shadow-lg dark:shadow-lg my-48 mx-5' >
          <ul className='flex gap-6 border dark:border-white/30 rounded-md px-4 py-2 dark:text-white'>
            <li className='dark:text-white/70' >Navbar</li>
            <li className='dark:text-white/70'>Profile</li>
            <li className='dark:text-white/70'>View</li>
            <li className='dark:text-white/70'>Files</li>
          </ul>
        </div> 
    </>
  )
}
