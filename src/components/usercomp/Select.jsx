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
    const [selectvalue , setselectvalue ] = useState("Select value");

      const handleoption = (options)=>{
                 setselectvalue(options);
                 setisopen(false);
      }

    const handleopen = ()=>{
        setisopen(!isopen)
    }

    
   return (
     <>
                <div className=' relative w-46 '>
                    
                    <div className=' px-5 py-2 border flex items-center gap-20 cursor-pointer'
                     onClick={handleopen}
                    >
                      <div>{selectvalue}</div>
                      <div> <SlArrowDown /></div>
                    </div>
                    
                    {isopen && (
                        <div className='absolute w-46  z-10 left-0 right-0 border border-gray-300 py-2'>
                       {options.map((option,index)=>(
                           <div key={index}
                           className="p-2 cursor-pointer hover:bg-gray-200"
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
 