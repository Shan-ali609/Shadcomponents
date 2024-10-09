 import React,{useState} from 'react'
 import { SlArrowDown } from "react-icons/sl";
 export default function Select() {
     const options = [
        "Apple",
        "Banana",
        "Mango",
        "Pine Apple"
     ];
    const [isopen  , setisopen ] = useState(false);
    const [selectvalue , setselectvalue ] = useState("Select fruit");

      const handleoption = (options)=>{
                 setselectvalue(options);
                 setisopen(false);
      }

    const handleopen = ()=>{
        setisopen(!isopen)
    }

    
   return (
     <>
                <div className=' relative w-46 py-44 '>
                    
                    <div className=' px-5 py-2 border rounded-md flex items-center gap-20 cursor-pointer dark:text-white'
                     onClick={handleopen}
                    >
                      <div className='text-[14px] font-roboto'>{selectvalue}</div>
                      <div > <SlArrowDown className='text-[12px]' /></div>
                    </div>
                    
                    {isopen && (
                        <div className='absolute w-46  z-10 left-0 right-0 border border-gray-300 py-2 dark:text-white'>
                       {options.map((option,index)=>(
                           <div key={index}
                           className="p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-400 text-[14px] font-roboto"
                           onClick={()=>handleoption(option)}
                           >
                          {option}
                           </div>

                       ))}
                        </div>
                    )}
                    </div> 
     </>
   )
 }
 