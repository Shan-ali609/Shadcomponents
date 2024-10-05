
// "use client"
// import React , {useState}from "react";
// import '@/components/leftcomp/leftside.css';
// import Link from "next/link";
// import Datacomp from "../pagecomp/Datacomp";
// export default function Leftside() {
//   const [selectedid , setselectedid ] = useState(null);
  
//   return (
//     <div className="left-container dark:bg-black">
//       <ul className="left-ul scroll-container">
//         {Datacomp.map((data) => (
//           <li key={data.id} 
//           onClick={()=>setselectedid(data.id)}
//           className= {`left-li  ${selectedid === data.id ? "shan" : ""}`}
//           >
//             <Link className=" raleway  left-a dark:text-white " href={`/component/${data.id}` }>
//               {data.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import '@/components/leftcomp/leftside.css';
import Link from "next/link";
import Datacomp from "../pagecomp/Datacomp";

export default function Leftside() {
  const [selectedid, setselectedid] = useState(null);

  // Load the selected id from localStorage when the component mounts
  useEffect(() => {
    const storedId = localStorage.getItem("selectedid");
    if (storedId) {
      setselectedid(storedId);
    }
  }, []);

  // Update the selected id and save it to localStorage
  const handleSelect = (id) => {
    setselectedid(id);
    localStorage.setItem("selectedid", id); // Save selected id to localStorage
  };

  return (
    <div className="left-container dark:bg-black">
      <ul className="left-ul scroll-container">
        {Datacomp.map((data) => (
          <li
            key={data.id}
            onClick={() => handleSelect(data.id)}
            className={`left-li ${selectedid === data.id ? "shan" : ""}`}
          >
            <Link className="raleway left-a dark:text-white" href={`/component/${data.id}`}>
              {data.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}




