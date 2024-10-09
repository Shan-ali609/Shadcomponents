import React from "react";
import { CiSearch } from "react-icons/ci";
export default function Mysearch({navsearch, datatable}) {
  return (
    <>
      <div className="relative ">
        <input
          className={` ${navsearch ? "  pr-10 cursor-pointer py-1  pl-3 w-40 md:w-52  lg:w-60 outline-none border  dark:border-black  dark:text-white/70 dark:placeholder-white/70 rounded-lg dark:bg-white/10  dark:hover:bg-white/20 " : " dark:placeholder:text-white/70 w-full pt-1.5 pr-10 pb-1.5 pl-7  border dark:border-white/20 dark:bg-white/10 dark:placeholder-white  " } ${datatable ? "w-[400px]  rounded-sm " : " outline-none"}  `}
          type="text"
          placeholder= {` ${datatable ? "Filter emails " : "Search here " }`}
        />
        <CiSearch className={`${navsearch ? "absolute top-2/4 right-4 transform -translate-y-2/4 text-gray-500 dark:text-white " : "absolute top-2/4 ml-2 transform -translate-y-2/4 text-gray-500 h-4 w-4 dark:text-white "}`} />
      </div>
    </>
  );
}




