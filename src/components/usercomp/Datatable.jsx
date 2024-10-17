import React from "react";
import Mysearch from "@/components/pagecomp/Mysearch";
import MyDropdown2 from "../pagecomp/Mydropdown2";

export default function Datatable() {
  const data = [
    {
      statusbar: "processing",
      email: "ali123@gmail.com",
      amount: "50$",
    },
    {
      statusbar: "Approved",
      email: "hamza@gmail.com",
      amount: "20$",
    },
    {
      statusbar: "pending",
      email: "alihamz@gmail.com",
      amount: "50.4$",
    },
    {
      statusbar: "processing",
      email: "dingg@gmail.com",
      amount: "50.9$",
    },
  ];

  return (
    <>
      <div className=" w-full mx-9   my-8 ">
        <div className="flex flex-row items-center justify-between mb-5 ">
          <Mysearch datatable={true} />
          <MyDropdown2 />
        </div>
        <div className="border dark:border-white/20 py-5 rounded-md  overflow-y-auto">
          <div className="flex gap-5 md:gap-[50px] min-w-[600px] border-b dark:border-white/20 pb-3 text-gray-400 dark:text-white/50 text-[15px] font-roboto">
            <h2 className="w-[40px] text-center">
              <input type="checkbox" />
            </h2>
            <h2 className="w-[100px] sm:w-[120px] md:w-[150px]">Status</h2>
            <h2 className="w-[150px] sm:w-[200px] md:w-[220px]">Email</h2>
            <h2 className="w-[80px] sm:w-[100px] md:w-[120px]">Amount</h2>
            <h2 className="w-[10px] sm:w-[40px] "></h2>
          </div>

          {data.map((item, index) => (
            <div
              className="flex gap-5 md:gap-11 min-w-[600px] items-center py-3 border-b dark:border-white/20 text-gray-700 dark:text-white text-[14px]"
              key={index}
            >
              <div className="w-[40px] text-center">
                <input type="checkbox" />
              </div>
              <div className="w-[100px] sm:w-[120px] md:w-[150px]">
                {item.statusbar}
              </div>
              <div className="w-[150px] sm:w-[200px] md:w-[250px]">
                {item.email}
              </div>
              <div className="w-[80px] sm:w-[100px] md:w-[120px]">
                {item.amount}
              </div>
              <div className="w-[40px] sm:w-[60px]">...</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
