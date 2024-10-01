  
   import React,{useState} from 'react'
import Mybutton from '../pagecomp/Mybutton'
   
   export default function Collapsible() {
    const [isopen , setIsOpen] = useState(false);
    const show = ()=>{
        setIsOpen(!isopen);
    }
   
     return (
       <>

               <div>
                  
                    <div className='flex justify-center items-center gap-2 '> <p className='text-sm font-bold'>@peduarte starred 3 repositories</p> <div onClick={show} > <Mybutton /> </div></div>
                     <div className='border w-[300px] px-[23px] py-2 rounded-md my-1'><p className='text-sm font-bold'>@radix-ui/primitives</p></div>
                      {isopen && (
                        <>
                         <div className='border w-[300px] px-[23px] py-2 rounded-md my-1'><p className='text-sm font-bold'>@radix-ui/colors</p></div>
                         <div className='border w-[300px] px-[23px] py-2 rounded-md my-1'><p className='text-sm font-bold'>@stitches/react</p></div>
                       </>
                      ) }



               </div>

       </>
     )
   }
   