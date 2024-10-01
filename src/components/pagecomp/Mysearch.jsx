import React from "react";
import { CiSearch } from "react-icons/ci";
export default function Mysearch({navsearch, datatable}) {
  return (
    <>
      <div className="relative ">
        <input
          className={` ${navsearch ? " pt-1.5 pr-10 pb-1.5 pl-3 outline-none border rounded-lg  " : " w-full pt-1.5 pr-10 pb-1.5 pl-7  border " } ${datatable ? "w-[400px]  rounded-sm " : " outline-none"}  `}
          type="text"
          placeholder= {datatable ? "Filter emails " : "Search here "}
        />
        <CiSearch className={`${navsearch ? "absolute top-2/4 right-4 transform -translate-y-2/4 text-gray-500" : "absolute top-2/4 ml-2 transform -translate-y-2/4 text-gray-500 h-4 w-4"}`} />
      </div>
    </>
  );
}
