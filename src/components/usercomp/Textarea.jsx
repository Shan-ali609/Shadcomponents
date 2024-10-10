import React from 'react'

export default function Textarea() {
  return (
     <div className='w-full py-44'>
    <div className='w-full px-5   '>
      <textarea className=' w-full border dark:border-white/20 pl-3 overflow-hidden dark:bg-black dark:text-white dark:placeholder:text-white/70 ' placeholder='Type your message here' >Type your message here</textarea>
    </div>
    </div>
  )
}
