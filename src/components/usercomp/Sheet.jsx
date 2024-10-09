import React from 'react'
import Alertdialogreuse from '@/components/pagecomp/Alertdialogreuse'
export default function Sheet() {
  return (
    <>
    <div className='fixed  inset-y-0 top-0 right-0  bg-white bg-opacity-90 z-50'></div>
        <Alertdialogreuse nameprop="open" sheetcond = {true} dialprop = {true}  />
    </>
  )
}
{/* <div className='fixed  inset-y-0 top-0 right-0  bg-white bg-opacity-90 z-50'></div>
<Alertdialogreuse nameprop="open" sheetcond = {true} dialprop = {true}  />
</> */}