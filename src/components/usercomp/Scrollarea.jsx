import React from 'react'
import Datacomp from '@/components/pagecomp/Datacomp'
export default function Scrollarea() {
  return (
    <div className='overflow-auto  h-72 pl-3 pr-2 border scrollbar-hide scrollbar-show'>
      {Datacomp.map((items)=>(
          <ul key={items.id} className='w-full dark:text-white'  >
            <li className='border-b w-full'>{items.name}</li>
          </ul>
      ))}
    </div>
  )
}
