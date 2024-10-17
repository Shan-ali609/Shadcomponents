import React from "react";
import MyDropdown from "../pagecomp/Mydropdown";

export default function Combobox({ drp }) {
  return (
    <>
      <div className="py-48">
        <MyDropdown data={drp} cond={true} />
      </div>
    </>
  );
}

// import React, { useState } from "react";
// import { SlArrowUp, SlArrowDown } from "react-icons/sl";

// export default function Combobox() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("Select framework");
//   const data = ["Astro", "Remix", "Next.js", "Nuxt.js"];

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//   };

//   return (
//     <div className="flex items-center my-60">
//       <div className="relative flex items-center justify-between  px-9 w-full">
//         <div
//           className="w-52 cursor-pointer h-6 flex justify-between border dark:border-white/20 py-4 px-2 items-center rounded-md dark:text-white"
//           onClick={toggleDropdown}
//         >
//           <h4 className="flex text-md font-normal pl-1 dark:text-white">
//             <span className="text-gray-700 text-[12px] dark:text-white"></span>
//             {selectedOption}
//           </h4>
//           <div className="text-gray-400 dark:text-white">
//             <div className="flex flex-col px-2 py-1 border-none rounded-md cursor-pointer">
//               <div className="h-2">
//                 {isOpen ? (
//                   <SlArrowUp className="h-[8px]" />
//                 ) : (
//                   <SlArrowDown className="h-[8px]" />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {isOpen && (
//           <div className="absolute z-10 top-full bg-white border dark:border-white/20 rounded-md w-52 dark:bg-black dark:text-white">
//             {data.map((option, index) => (
//               <div
//                 key={index}
//                 className="px-6 text-[14px] py-1 cursor-pointer text-gray-500 hover:bg-gray-200 dark:hover:bg-white/15 dark:text-white"
//                 onClick={() => handleOptionClick(option)}
//               >
//                 {option}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
