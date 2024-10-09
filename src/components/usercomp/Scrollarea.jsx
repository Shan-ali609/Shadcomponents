import React from 'react'
import Datacomp from '@/components/pagecomp/Datacomp'
export default function Scrollarea() {
  return (
    <div className='overflow-auto  h-72 pl-3 pr-8 border scrollbar-hide scrollbar-show my-40'>
      {Datacomp.map((items)=>(
          <ul key={items.id} className='w-full dark:text-white'  >
            <li className='border-b w-full py-2 text-gray-600  '>{items.name}</li>
          </ul>
      ))}
    </div>
  )
}
