import React,{useState} from 'react'
    
  export default function Tooltip() {
    const [isshow , setisshow] = useState(false);
    const Enter = ()=>{
        setisshow(true)
    }
    const Leave = ()=>{
        setisshow(false)
    }
    return (


      <>
                         <div className='border px-3 py-2 rounded-sm relative' onMouseEnter={Enter} onMouseLeave={Leave}>
                           <button type='button'>Hover</button>
                         
                           
                            {isshow && (
                            <div className='absolute'>
                                <p>Popup content</p>
                                 </div>
                           )}
                   </div> 
      </>
    )
  }
  