import React from "react";
import Image from "next/image";
export default function Aspectratio() {
  return (
    <>
      <div className=" w-full h-[400px] px-3 py-5  ">
        <div className="">
          <Image
            src="/images/shadcn.webp"
            height={300}
            width={900}
            className="rounded h-[350px]"
            alt="Alert"
          />
        </div>
      </div>
    </>
  );
}
