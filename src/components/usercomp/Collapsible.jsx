  
   import React,{useState} from 'react'
import Mybutton from '../pagecomp/Mybutton'
   
   export default function Collapsible() {
    const [openit , setOpenit] = useState(false);
    const show = ()=>{
        setOpenit(!openit);
    }
   
     return (
       <>

               <div  >
              
                   
                    <div className=' h-[450px] flex flex-col justify-center items-center  dark:text-white '>
                       <p className='text-sm flex font-bold'>@peduarte starred 3 repositories   <div onClick={show} > <Mybutton /> </div></p> 
                     
                   
                     <div className='border w-[300px] px-[23px] py-2 rounded-md my-1 dark:text-white '>
                      <p className='text-sm font-bold'>@radix-ui/primitives</p></div>
                  
                      {openit && (
                        <>
                         <div className='border  w-[300px] px-[23px] py-2 rounded-md my-1 dark:text-white '>
                          <p className='text-sm font-bold'>@radix-ui/colors</p>
                          </div>
                         <div className='border w-[300px] px-[23px] py-2 rounded-md my-1 dark:text-white '>
                          <p className='text-sm font-bold'>@stitches/react</p>
                          </div>
                       </>
                      ) }
                          </div>
                    </div>
                


          

       </>
     )
   }
   