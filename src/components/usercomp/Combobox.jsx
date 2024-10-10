import React from 'react'
import MyDropdown from '../pagecomp/Mydropdown'
export default function Combobox({drp}) {
  return (
    <>



              <div className='py-48'>
                <MyDropdown data={drp} cond={true} />
              </div>



    </>
  )
}

