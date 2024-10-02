import React from 'react'
import Dialog from "@/components/usercomp/Dialog"
export default function Sheet() {
  return (
    <>
    <div className='fixed  inset-y-0 top-0 right-0  bg-white bg-opacity-90 z-50'></div>
        <Dialog sheetprop = "Open" 
          sheetcond = {true}
          
        />
    </>
  )
}
