
import React from 'react';
import Image from 'next/image';

export default function Avatar() {
  return (
    <div className="flex justify-center items-center  w-full"> 
      <Image
        src="/images/avater.jpg" 
        className="rounded-full h-10 w-10 object-cover"
        alt="avatar"
        height={300}
        width={300}
      />
   
    </div>
  );
}
