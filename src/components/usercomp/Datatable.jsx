
import React from "react";
import Mysearch from "@/components/pagecomp/Mysearch";
import MyDropdown2 from "../pagecomp/Mydropdown2";

export default function Datatable() {
  const data = [
    {
      statusbar: "processing",
      email: "ali123@gmail.com",
      amount: "50$"
    },
    {
      statusbar: "Approved",
      email: "hamza@gmail.com",
      amount: "20$"
    },
    {
      statusbar: "pending",
      email: "alihamz@gmail.com",
      amount: "50.4$"
    },
    {
      statusbar: "processing",
      email: "dingg@gmail.com",
      amount: "50.9$"
    },
  ];

  return (
    <>
      <div className=" w-full  mx-4  my-8 ">
     
        <div className="flex flex-row    items-center justify-between mb-5 ">
          <Mysearch datatable={true} />
          <MyDropdown2 />
        </div>

    
        <div className="border dark:border-white/20 py-5 rounded-md px-3 w-[400px] sm:w-full  md:w-full lg:w-full overflow-auto  ">
        
            <div className="flex gap-12 border-b dark:border-white/20 pb-3  text-gray-400 dark:text-white/50 text-[15px] font-roboto">
              <h2 className="w-1/12 text-center">
                <input type="checkbox"  />
              </h2>
              <h2 className="w-3/12 ">Status</h2>
              <h2 className="w-4/12 ">Email</h2> 
              <h2 className="w-2/12 pl-20 text-center">Amount</h2>
              <h2 className="w-2/12 text-center"></h2>
            </div>

            {data.map((item, index) => (
              <div
                className="flex gap-12 items-center py-3 border-b dark:border-white/20 text-gray-700 dark:text-white text-[14px]"
                key={index}
              >
                <div className="w-1/12 text-center">
                  <input type="checkbox" />
                </div>
                <div className="w-3/12 ">{item.statusbar}</div>
                <div className="w-4/12 ">{item.email}</div> 
                <div className="w-2/12  pl-20">{item.amount}</div>
                <div className="w-2/12 pl-7 ">...</div>
              </div>
            ))}
          </div>
        </div>
      
    </>
  );
}

