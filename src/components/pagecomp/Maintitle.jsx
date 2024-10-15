import React from "react";
import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";
import "@/components/pagecomp/main.css";
import { IoMdOpen } from "react-icons/io";
export default function Maintitle({ title, para }) {
  
  return (
    <div className="accordion pt-14 dark:border-white/10 ">
      <div className="little-title">
        <h3 className="forever dark:text-white/70 raleway ">Docs</h3>
        <SlArrowRight className="right-side dark:text-white" />
        <h3 className="dark:text-white raleway text-[14px] text-black/90  text-gray-600 ">{title}</h3>
      </div>
      <h1 className="head-section GeistSans  dark:text-white">{title}</h1>
      <p className="pt-[10px] Roboto text-black/70 dark:text-white/70   ">{para}</p>

      <div className="pt-3">
        <div className="inline-block">
          {" "}
          <Link
            href=""
            className=" flex items-center bg-neutral-100 text-xs px-2 py-[2px] rounded-md font-semibold text-gray-600 dark:bg-white/10 dark:text-white/85 "
          >
            Docs{" "}
            <div className="px-1">
              <IoMdOpen className="font-light  " />
            </div>{" "}
          </Link>{" "}
        </div>
        <div className="inline-block pl-3">
          {" "}
          <Link
            href=""
            className=" flex items-center bg-neutral-100 text-xs px-2 py-[2px] rounded-md font-semibold text-gray-600 dark:bg-white/10 dark:text-white/85  "
          >
            API Reference{" "}
            <div className="px-1">
              <IoMdOpen className="font-light" />
            </div>{" "}
          </Link>{" "}
        </div>
      </div>
     
       

      </div>
    
  );
}
