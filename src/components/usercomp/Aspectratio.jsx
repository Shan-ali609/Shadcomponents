import React from 'react'
import Image from 'next/image'
export default function Aspectratio() {
  return (
    <>



    
        <div className=' w-full h-auto px-3  '>
         <div className="h-[450px]  flex items-center">
         <Image src="/images/shadcn.webp"
           height={700}
           width={900}
           className='rounded'
           alt='Alert'
           />
         </div>
        </div>
    




    </>
  )
}
