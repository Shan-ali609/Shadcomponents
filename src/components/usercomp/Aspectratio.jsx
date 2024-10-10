import React from 'react'
import Image from 'next/image'
export default function Aspectratio() {
  return (
    <>



    
        <div className=' w-full h-auto m-10  '>
         <div className="h-[450px]">
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
