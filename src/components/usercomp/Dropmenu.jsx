import React,{useState} from 'react'
import Command from './Command';

export default function Dropmenu() {
 const [openclick , setopenclick] = useState(false);
 const handleit = ()=>{
    setopenclick(!openclick);
 }
  return (
    <div className=' relative '>
              
              <div className='  border rounded-md hover:bg-slate-300 dark:text-white dark:hover:bg-gray-400 '>
                <button type='button' className=' px-3 py-2' onClick={handleit} >Open</button>
              </div>

          {openclick && (
            <div className='absolute   '>
            <Command dropprop = {true} />
            </div>
          )}


    </div>
  )
}
