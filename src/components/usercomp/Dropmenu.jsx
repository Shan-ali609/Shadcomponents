// import React, { useState } from "react";
// import Command from "./Command";

// export default function Dropmenu() {
//   const [openclick, setopenclick] = useState(false);
//   const handleit = () => {
//     setopenclick(!openclick);
//   };
//   const handleclose = () => {
//     setopenclick(false);
//   };
//   return (
//     <div className=" relative my-56 ">
//       <div className="  border rounded-md hover:bg-slate-300 dark:text-white dark:hover:bg-gray-400 ">
//         <button
//           type="button"
//           className=" px-3 py-2 font-roboto text-[14px] "
//           onClick={handleit}
//         >
//           Open
//         </button>
//       </div>

//       {openclick && (
//         <div className="absolute bottom-full  ">
//           <Command dropprop={true} handleclose={handleclose} />
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { GrEmoji } from "react-icons/gr";
import { PiCalculatorThin } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

export default function Dropdownmenu() {
  const [openclick, setopenclick] = useState(false);

  const handleit = () => {
    setopenclick(!openclick);
  };

  const handleclose = () => {
    setopenclick(false);
  };

  return (
    <div className="relative my-56">
      <div className="border rounded-md hover:bg-slate-300 dark:text-white dark:hover:bg-gray-400">
        <button
          type="button"
          className="px-3 py-2 font-roboto text-[14px]"
          onClick={handleit}
        >
          Open
        </button>
      </div>

      {openclick && (
        <div className="absolute bottom-full">
          <div className="md:w-[230px] lg:w-[250px] sm:w-[200px] w-[185px] dark:bg-black bg-white h-auto border dark:border-white/15 rounded-sm shadow-lg">
            <div className="pl-3 text-[15px] border dark:border-white/15 dark:text-white">
              My Account
            </div>

            <div className="border-b dark:border-white/20">
              <p className="text-xs px-2 pt-2 text-gray-500 font-bold dark:text-white/90">
                Suggestions
              </p>
              <ul className="flex flex-col gap-3 w-full" onClick={handleclose}>
                <li className="flex text-[14px] items-center content-center cursor-pointer gap-2 px-2 mt-2 text-black hover:bg-gray-300/40 dark:text-white/90 dark:hover:bg-white/10">
                  <FiCalendar /> Calendar
                </li>
                <li className="flex text-[14px] items-center cursor-pointer gap-2 px-2 text-black hover:bg-gray-300/40 dark:text-white/90 dark:hover:bg-white/10">
                  <GrEmoji />
                  Search Emoji
                </li>
                <li className="flex text-[14px] items-center pb-3 cursor-not-allowed pointer-events-none gap-2 px-2 text-gray-500 hover:bg-gray-300 dark:text-white/90 dark:hover:bg-white/10">
                  <PiCalculatorThin />
                  Calculator
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs px-2 pt-2 text-gray-500 font-bold">
                Settings
              </p>
              <ul className="flex flex-col gap-3 w-full" onClick={handleclose}>
                <li className="flex text-[14px] items-center content-center cursor-pointer gap-2 px-2 mt-2 text-black hover:bg-gray-300/40 dark:text-white/90 dark:hover:bg-white/10">
                  <CgProfile /> Profile
                </li>
                <li className="flex text-[14px] items-center cursor-pointer gap-2 px-2 text-black hover:bg-gray-300/40 dark:text-white/90 dark:hover:bg-white/10">
                  <FaRegMoneyBillAlt /> Billing
                </li>
                <li className="flex text-[14px] items-center cursor-pointer gap-2 px-2 text-black hover:bg-gray-300/40 dark:text-white/90 dark:hover:bg-white/10">
                  <IoSettingsOutline /> Setting
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
