"use client"
import Link from 'next/link'
import React , {useState} from 'react'

export default function Rightside() {
  const [selecteditem , setselecteditem] = useState ('');
  const handleitem = (item)=>{
      setselecteditem(item);
  };
  return (
    <div className='ml-3 mt-5 '>
      <ul >
        <li className='mt-1 mb-1 text-black dark:text-white'  > 
          <Link href=''>On This Page</Link> </li>

        <li 
        className={`mt-1 mb-1 dark:text-white ${selecteditem === 'installation' ? 'text-black' : 'text-slate-300'} `}
        onClick={()=>handleitem('installation')}
        > <Link href=''>installation</Link> </li>

<li 
        className={`mt-1 mb-1  ${selecteditem === 'usage' ? 'text-black' : 'text-slate-300'} `}
        onClick={()=>handleitem('usage')}
        > <Link href=''>usage</Link> </li>
      
      </ul>
    </div>
  )
}
