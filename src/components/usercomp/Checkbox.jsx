  import React from 'react'
  
  export default function Checkbox() {
    return (
      <div>
          
          <div className='flex gap-2 py-40 '>
           <div className=''>
            <input className='  cursor-pointer dark:border-2 ' type='checkbox' />
            </div>
           <div>
           <h1 className='font-bold dark:text-white'>Accept term and conditions</h1>
           </div>
          </div>
      </div>
    )
  }
  