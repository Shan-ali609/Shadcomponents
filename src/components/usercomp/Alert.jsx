
"use client";
import React, { useState } from 'react';
import '@/components/pagecomp/main.css';
import { RxRocket } from "react-icons/rx";
import { Dropdown } from 'react-day-picker';

export default function Accordion({}) {
  
 

  

  return (
    
    <>
     
         
         
              
               <div className='w-full border-2 px-6 mx-auto  py-1 max-w-2xl  rounded-md '>
                <div className='flex'>
                <RxRocket className='mt-2' />
                <h4 className='pl-3'>Heads up!</h4>
                </div>
                  <p className='pl-6 text-slate-400 text-sm'>You can add components to your app using the cli.</p>
               </div>

         

   

    </>
  );
}