  import React from 'react'
  
  export default function Checkbox() {
    return (
      <div>
          
          <div className='flex gap-2'>
            <input className='cursor-pointer dark:border-2 ' type='checkbox' />
            <h1 className='font-bold dark:text-white'>Accept term and conditions</h1>
          </div>
      </div>
    )
  }
  