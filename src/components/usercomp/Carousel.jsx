
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

export default function Carousel() {
  const images = [
    
         "/images/nature1.jpg",
         "/images/nature2.jpeg",
         "/images/nature3.jpeg"
  ];

  const [currentimg, setcurrentimg] = useState(0);

  const nextimg = () => {
    // setcurrentimg(currentimg === images.length - 1 ? 0 : currentimg + 1);
    if(currentimg < images.length-1) {
        setcurrentimg(currentimg + 1);
    };

    
  };

  const preimg = () => {
    // setcurrentimg(currentimg === 0 ? images.length - 1 : currentimg - 1);
    if(currentimg > 0){
        setcurrentimg (currentimg - 1)
    }
  };

  return (
    <>
      <div className='flex justify-center items-center gap-8'>
        <div className='preimg cursor-pointer border px-2 py-2 rounded-xl' onClick={preimg}>
          <FaArrowLeft />
        </div>

        {/* <div className='images'>
          {images.map((items, index) =>
            currentimg === index && (
              <Image className='h-[340px] object-cover' key={index} src={items} alt='images' width={400} height={300} />
            )
          )}
        </div> */}
         <div className='images'>
          <Image className='h-[340px] object-cover' src={images[currentimg]} alt='images' width={400} height={300} />
        </div>

        <div className='nextimg cursor-pointer border px-2 py-2 rounded-xl' onClick={nextimg}>
          <FaArrowRight />
        </div>
      </div>
    </>
  );
}
