// import React, { useContext, useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { AppStateContext } from "../contextApi/AppState";

// const Toast = () => {
//   const { theme } = useContext(AppStateContext);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 640); 
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); 

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const notify = () => {
//     toast.dismiss(); 
//     const amount = "$100"; 
//     const currentDate = new Date().toLocaleDateString();
//     toast(`Catch Up: ${amount} added on ${currentDate}`, {
//       position: isMobile ? "top-center" : "bottom-right",  
//       autoClose: isMobile ? false : 2000, 
//       hideProgressBar: isMobile ? false : true, 
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: theme === 'light' ? "light" : "dark",
//       style: isMobile
//         ? { width: "100%", fontSize: "16px", textAlign: "center" } 
//         : {},
//     });
//   };

//   return (
//     <div className="py-44">
//       <button
//         onClick={notify}
//         className="border dark:border-white/20 px-6 py-2 text-[14px] font-roboto rounded-sm hover:bg-slate-100 dark:text-white dark:hover:bg-white/10"
//       >
//         Show Toast
//       </button>
//       <ToastContainer
//         theme={theme === "light" ? "light" : "dark"}
//         position={isMobile ? "top-center" : "bottom-right"}
//       />
//     </div>
//   );
// };

// export default Toast;


import React from 'react'

function Toast() {
  return (
    <div>
      <h1>custom toast</h1>
    </div>
  )
}

export default Toast
