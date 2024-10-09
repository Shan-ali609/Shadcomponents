import React from 'react'

export default function Menubar() {
  return (
    <>
       <div className='boder round-md shadow-lg dark:shadow-lg my-48' >
          <ul className='flex gap-6 border rounded-md px-4 py-2 dark:text-white'>
            <li>Navbar</li>
            <li>Profile</li>
            <li>View</li>
            <li>Files</li>
          </ul>
        </div> 
    </>
  )
}
