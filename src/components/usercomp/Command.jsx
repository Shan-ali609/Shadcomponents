import React from 'react'
import Mysearch from '../pagecomp/Mysearch'
import { FiCalendar } from "react-icons/fi";
import { GrEmoji } from "react-icons/gr";
import { PiCalculatorThin } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
export default function Command({dropprop}) {
  return (
    <>


                <div className={`  ${dropprop ? " w-[250px] h-80 border rounded-sm shadow-lg  " : " w-[450px] h-80 border rounded-sm shadow-lg"}    ` }>
               <div className={`  ${dropprop ? " pl-3 border dark:text-white" : " "}    ` }>  
                 {dropprop ? "My Account" : <Mysearch />} 
               </div>
                   <div className='border-b'>
                    <p className='text-xs px-2  pt-2 text-gray-500 font-bold  dark:text-gray-200 '>Suggestions</p>
                       <ul className='flex flex-col gap-3 w-full '>
                  
                        <li className='flex text-md items-center content-center cursor-pointer gap-2 px-2 mt-2 text-black hover:bg-gray-300 dark:text-white dark:hover:bg-gray-400'> <FiCalendar /> Calendar</li>
                        <li className='flex text-md items-center cursor-pointer gap-2 px-2 text-black hover:bg-gray-300 dark:text-white dark:hover:bg-gray-400' ><GrEmoji />Search Emoji</li>
                        <li className='flex text-md items-center pb-3  cursor-not-allowed pointer-events-none gap-2 px-2 text-gray-500 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-400' > <PiCalculatorThin />Calculator</li>
                        
                       </ul>
                   </div>

                   <div>
                    <p className='text-xs px-2  pt-2 text-gray-500 font-bold '>Settings</p>
                       <ul className='flex flex-col gap-3 w-full '>
                  
                        <li className='flex text-md items-center content-center cursor-pointer gap-2 px-2 mt-2 text-black hover:bg-gray-300 dark:text-white dark:hover:bg-gray-400'> <CgProfile /> Profile</li>
                        <li className='flex text-md items-center cursor-pointer gap-2 px-2 text-black hover:bg-gray-300 dark:text-white dark:hover:bg-gray-400' ><FaRegMoneyBillAlt />
                        Billing</li>
                        <li className='flex text-md items-center text-black cursor-pointer  gap-2 px-2  hover:bg-gray-300 dark:text-white dark:hover:bg-gray-400' > <IoSettingsOutline />Setting</li>
                        
                       </ul>
                   </div>
                </div>



    </>
  )
}
