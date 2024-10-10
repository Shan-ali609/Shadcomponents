   

   import React from 'react'
   import { SlArrowDown } from "react-icons/sl";
   import { SlArrowUp } from "react-icons/sl";
   export default function Mybutton() {
     return (
       <>
            <div className='flex flex-col px-2 py-1 border-none rounded-md cursor-pointer   '>
                 <div className='h-2'><SlArrowUp className='h-[8px]' /></div>
                 <div><SlArrowDown  className='h-[8px]' /></div>
                </div> 
       </>
     )
   }
   