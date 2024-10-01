import React from "react";
import Mysearch from "@/components/pagecomp/Mysearch";
import MyDropdown2 from "../pagecomp/Mydropdown2";
export default function Datatable() {
   const data = [
      {
        statusbar : "processing",
        email : "ali123@gmail.com",
        amount : "50$"
      },
      {
        statusbar : "Approved",
        email : "hamza@gmail.com",
        amount : "20$"
      },
      {
        statusbar : "pending",
        email : "alihamz@gmail.com",
        amount : "50.4$"
      },
      {
        statusbar : "processing",
        email : "dingg@gmail.com",
        amount : "50.9$"
      },
   ];
  return (
    <>
      <div className=" w-full grid mx-14 ">
        <div className="  flex items-center justify-between ">
          <div>
            {" "}
            <Mysearch datatable={true} />{" "}
          </div>

          <div>
            {" "}
            <MyDropdown2 />{" "}
          </div>
        </div>

        

        <div className="flex items-center gap-36 border mt-5 pl-2">
          <div className="flex items-center gap-8 py-2"> 
            <input type="checkbox" />
           <h2>Status</h2>
           </div>
           <h2 className="pl-16">Email</h2>
           <h2 className="pl-14">Amount</h2>
        </div>

        
         {data.map((item,index)=>(    
        <div className="flex items-center gap-36 border pl-2 " key={index}>
          <div className="flex items-center gap-8 py-4">
          <input type="checkbox" />
          <h2>{item.statusbar}</h2> 
          </div>
          <h2>{item.email}</h2>
           <div className="flex items-center gap-12">
            <h2>{item.amount}</h2>
            <p>...</p>
            </div>
                </div>

))}


      </div>
    </>
  );
}



// import React, { useState } from "react";
// import Mysearch from "@/components/pagecomp/Mysearch";
// import MyDropdown2 from "../pagecomp/Mydropdown2"; 

// export default function Datatable() {
//   const data = [
//     {
//       statusbar: "processing",
//       email: "ali123@gmail.com",
//       amount: "50$"
//     },
//     {
//       statusbar: "Approved",
//       email: "hamza@gmail.com",
//       amount: "20$"
//     },
//     {
//       statusbar: "pending",
//       email: "alihamz@gmail.com",
//       amount: "50.4$"
//     },
//     {
//       statusbar: "processing",
//       email: "dingg@gmail.com",
//       amount: "50.9$"
//     },
//   ];

  
//   const [selectedColumns, setSelectedColumns] = useState([]);

//   return (
//     <>
//       <div className="w-full grid mx-14">
//         <div className="flex items-center justify-between">
//           <div>
//             <Mysearch datatable={true} />
//           </div>
//           <div >
              
//             <MyDropdown2  onSelectionChange={setSelectedColumns} />
//           </div>
//         </div>

//         <div className="flex items-center gap-36 border mt-5 pl-2">
//           <div className="flex items-center gap-8 py-2"> 
//             <input type="checkbox" />
//             {selectedColumns.includes("Status") && <h2>Status</h2>}
//           </div>
//           {selectedColumns.includes("Email") && <h2 className="pl-16">Email</h2>}
//           {selectedColumns.includes("Amount") && <h2 className="pl-14">Amount</h2>}
//         </div>

//         {data.map((item, index) => (
//           <div className="flex items-center gap-36 border pl-2" key={index}>
//             <div className="flex items-center gap-8 py-4">
//               <input type="checkbox" />
//               {selectedColumns.includes("Status") && <h2>{item.statusbar}</h2>} 
//             </div>
//             {selectedColumns.includes("Email") && <h2>{item.email}</h2>}
//             <div className="flex items-center gap-12">
//               {selectedColumns.includes("Amount") && <h2>{item.amount}</h2>}
//               <p>...</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
