import React,{useState} from 'react'
import Command from './Command';

export default function Dropmenu() {
 const [openclick , setopenclick] = useState(false);
 const handleit = ()=>{
    setopenclick(!openclick);
 }
  return (
    <div>
              
              <div className=' relative border px-3 py-2 rounded-md hover:bg-slate-300'>
                <button type='button' onClick={handleit} >Open</button>
              </div>

          {openclick && (
            <div className='absolute '>
            <Command dropprop = {true} />
            </div>
          )}


    </div>
  )
}
