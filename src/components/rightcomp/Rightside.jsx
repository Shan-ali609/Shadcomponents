"use client"
import Link from 'next/link'
import React , {useState} from 'react'

export default function Rightside() {
  const [selecteditem , setselecteditem] = useState ('');
  const handleitem = (item)=>{
      setselecteditem(item);
  };
  return (
    <div className='ml-3 mt-9 '>
      <ul >
        <li className='mt-1 mb-1 text-black text-[14px] font-thin Roboto dark:text-white'  > 
          <Link href=''>On This Page</Link> </li>

        <li 
        className={`mt-2 mb-1 font-medium text-[14px] dark:text-white/70 raleway ${selecteditem === 'installation' ? 'text-black' : 'text-slate-300'} `}
        onClick={()=>handleitem('installation')}
        > <Link href=''>Installation</Link> </li>

<li 
        className={`mt-1 mb-1  raleway text-[14px] dark:text-white/70 font-medium ${selecteditem === 'usage' ? 'text-black' : 'text-slate-300'} `}
        onClick={()=>handleitem('usage')}
        > <Link href=''>Usage</Link> </li>
      
      </ul>
    </div>
  )
}
