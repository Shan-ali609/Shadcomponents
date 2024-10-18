import React from "react";

export default function Table() {
  const bankdetail = [
    {
      Inovice: "inovice1",
      Status: "pending",
      Method: "Paypal",
      Salary: "25.00",
    },
    {
      Inovice: "inovice2",
      Status: "approved",
      Method: "jazzcash",
      Salary: "29.00",
    },
    {
      Inovice: "inovice3",
      Status: "Detail",
      Method: "Easypaisa",
      Salary: "253.00",
    },
    {
      Inovice: "inovice5",
      Status: "pending",
      Method: "Neyapay",
      Salary: "25.00",
    },
    {
      Inovice: "inovice6",
      Status: "Approved",
      Method: "Paypal",
      Salary: "125.00",
    },
    {
      Inovice: "inovice7",
      Status: "Waiting",
      Method: "Paypal",
      Salary: "25.00",
    },
    { Inovice: "Total", Salary: "$2500.00" },
  ];

  return (
    <div className="w-full md:mx-9 lg:mx-9 overflow-auto p-4">
      <div className="grid grid-cols-4 gap-10 border-b dark:border-white/10 pb-3 text-gray-400 dark:text-white/50">
        <h1 className="whitespace-nowrap">Invoice</h1>
        <h1 className="whitespace-nowrap">Status</h1>
        <h1 className="whitespace-nowrap">Method</h1>
        <h1 className="whitespace-nowrap text-right">Salary</h1>
      </div>

      {bankdetail.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-4 gap-10 border-b dark:border-white/10 py-3 text-gray-700 dark:text-white/80"
        >
          <h1 className="whitespace-nowrap">{item.Inovice}</h1>
          <h1 className="whitespace-nowrap">{item.Status}</h1>
          <h1 className="whitespace-nowrap">{item.Method}</h1>
          <h1 className="whitespace-nowrap text-right">{item.Salary}</h1>
        </div>
      ))}
      <div className="w-full text-center py-4 font-roboto text-black/60 dark:text-white/50">
        <p className="text-center font-raleway">
          A list of your recent invoices.
        </p>
      </div>
    </div>
  );
}
