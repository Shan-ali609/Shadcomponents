"use client";
import React, { useState } from 'react';
import { SlArrowDown } from "react-icons/sl";

import '@/components/pagecomp/main.css';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    { title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
    { title: 'Is it styled?', content: 'Yes. It comes with default styles that match the other components.' },
    { title: 'Is it animated?', content: 'Yes. It is animated by default, but you can disable it if you prefer.' },
  ];

  return (
    <>
      {/* <div className='w-full flex content-center items-center  mt-9 border-2 rounded-lg h-[450px]'> */}
      <div className=' border-green-900 flex flex-col items-center mx-auto justify-center w-2/4 h-full'> 
  {accordionItems.map((item, index) => (
    <div key={index} className='  w-full border-b last:border-b-0'> 
      <div
        className='flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200' 
        onClick={() => toggleAccordion(index)}
      >
        <h4 className='text-sm '>{item.title}</h4> 
        <SlArrowDown className={`transform transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`} /> 
      </div>
      {activeIndex === index && (
        <div className={`p-4 bg-gray-50 ${activeIndex === index ? 'open' : ''}`}> 
          <p>{item.content}</p>
        </div>
      )}
    </div>
  ))}
</div>

      {/* </div> */}
    </>
  );
}


