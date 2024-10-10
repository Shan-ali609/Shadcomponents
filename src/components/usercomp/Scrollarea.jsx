import React from 'react'
import "@/components/leftcomp/leftside.css"
import Datacomp from '@/components/pagecomp/Datacomp'
export default function Scrollarea() {
  return (
    <div className='scroll-container h-72 my-14s max-w-48'>
      {Datacomp.map((items)=>(
          <ul key={items.id} className='w-full dark:text-white'  >
            <li className='border-b dark:border-white/10 w-full py-2 text-gray-600  '>{items.name}</li>
          </ul>
      ))}
    </div>
  )
}
