import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function Carousel() {
  const images = [
    "/images/nature1.jpg",
    "/images/nature2.jpeg",
    "/images/nature3.jpeg",
  ];

  const [currentimg, setcurrentimg] = useState(0);

  const nextimg = () => {
    if (currentimg < images.length - 1) {
      setcurrentimg(currentimg + 1);
    }
  };

  const preimg = () => {
    if (currentimg > 0) {
      setcurrentimg(currentimg - 1);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center gap-8 py-9">
        <div
          className="preimg cursor-pointer border px-2 py-2 rounded-xl dark:text-white"
          onClick={preimg}
        >
          <FaArrowLeft />
        </div>
        <div className="images">
          <Image
            className="h-[340px] object-cover"
            src={images[currentimg]}
            alt="images"
            width={400}
            height={300}
          />
        </div>

        <div
          className="nextimg cursor-pointer border px-2 py-2 rounded-xl dark:text-white"
          onClick={nextimg}
        >
          <FaArrowRight />
        </div>
      </div>
    </>
  );
}
