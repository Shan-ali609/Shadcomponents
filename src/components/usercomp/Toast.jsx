// import React, { useState, useEffect } from 'react';

// function Toast() {
//   const [toasts, setToasts] = useState([]);
//   const [toastId, setToastId] = useState(1); 

//   const handleShowToast = () => {
//     if (toasts.length > 0) {
//       setToasts([]); 
//     }

//     const newToast = {
//       id: toastId,
//       title: "Event Added",
//       message: "You have successfully added an event.",
//     };

//     setToasts([newToast]);
//     setToastId((prevId) => prevId + 1); 
//   };

//   const handleUndo = () => {
//     console.log("Undo action performed!");
//     setToasts([]); 
//   };

//   useEffect(() => {
//     if (toasts.length > 0) {
//       const timer = setTimeout(() => {
//         setToasts([]); 
//       }, 3000); // Toast stays for 3 seconds
//       return () => clearTimeout(timer);
//     }
//   }, [toasts]);

//   return (
//     <div className="relative">
//       <div className="my-44 flex items-center justify-center">
//         <div className='border px-2 py-1 rounded-md'>   
//           <button
//             onClick={handleShowToast}
//             className="px-2 py-1 bg-white text-black rounded-md"
//           >
//             Show Toast
//           </button>
//         </div>
//       </div>

//       {toasts.map((toast) => (
//         <div
//           key={toast.id}
//           className="fixed flex justify-between z-50 p-3 bg-white text-black rounded-lg shadow-lg transition-transform transform ease-in-out duration-300 toast"
//           style={{
           
//             top: window.innerWidth <= 640 ? '20px' : 'auto',
//             bottom: window.innerWidth > 640 ? '20px' : 'auto',
//             right: window.innerWidth > 640 ? '20px' : 'auto',
//             left: window.innerWidth <= 640 ? '50%' : 'auto',
//             transform: window.innerWidth <= 640 ? 'translateX(-50%)' : 'none',
//           }}
//         >
//           <div className='flex flex-col'>
//             <h4 className="font-bold text-sm">{toast.title}</h4>
//             <p className="text-sm">{toast.message}</p>
//           </div>
//           <div>
//           <button
//             onClick={handleUndo}
//             className="mt-2 px-2 py-1 bg-black text-[12px] text-white rounded-md"
//           >
//             Undo
//           </button>
//           </div>
//         </div>
//       ))}

//       <style jsx>{`
//         .toast {
//           width: 90vw; 
//           max-width: 350px; 
//           height: auto; // Allow height to adjust based on content
//         }

//         @media (min-width: 640px) {
//           .toast {
//             width: 350px; // Fixed width for larger screens
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Toast;

import React, { useState, useEffect } from 'react';

function Toast() {
  const [toasts, setToasts] = useState([]);
  const [toastId, setToastId] = useState(1); 

  const handleShowToast = () => {
    if (toasts.length > 0) {
      setToasts([]); 
    }

    const newToast = {
      id: toastId,
      title: "Event Added",
      message: "You have successfully added an event.",
    };

    setToasts([newToast]);
    setToastId((prevId) => prevId + 1); 
  };

  const handleUndo = () => {
    console.log("Undo action performed!");
    setToasts([]); 
  };

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts([]); 
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  return (
    <div className="relative">
      <div className="my-44 flex items-center justify-center">
        <div className='border dark:border-white/15 px-2 py-1 rounded-md'>   
          <button
            onClick={handleShowToast}
            className="text-black dark:text-white "
          >
            Show Toast
          </button>
        </div>
      </div>

      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="fixed flex justify-between items-center z-50 p-3 bg-white dark:bg-black text-black dark:text-white border dark:border-white/15 rounded-lg shadow-lg transition-all duration-300 toast fade-in-out"
          style={{
            top: window.innerWidth <= 640 ? '20px' : 'auto',
            bottom: window.innerWidth > 640 ? '20px' : 'auto',
            right: window.innerWidth > 640 ? '20px' : 'auto',
            left: window.innerWidth <= 640 ? '50%' : 'auto',
            transform: window.innerWidth <= 640 ? 'translateX(-50%)' : 'none',
          }}
        >
          <div className='flex flex-col'>
            <h4 className="font-bold text-sm">{toast.title}</h4>
            <p className="text-sm text-black dark:text-white/50">{toast.message}</p>
          </div>
          <div>
          <button
            onClick={handleUndo}
            className="mt-2 px-2 py-1 bg-black text-[12px] dark:bg-white dark:text-black  text-white rounded-md"
          >
            Undo
          </button>
          </div>
        </div>
      ))}

      <style jsx>{`
        .toast {
          width: 90vw; 
          max-width: 350px; 
          height: 100px; 
        }

        @media (min-width: 640px) {
          .toast {
            width: 350px; // Fixed width for larger screens
          }
        }

        .fade-in-out {
          opacity: 0; /* Start fully transparent */
          animation: fadeInOut 3s forwards; /* Fade in and out animation */
        }

        @keyframes fadeInOut {
          0% {
            opacity: 0; 
            transform: translateY(10px); /* Slide down effect */
          }
          10% {
            opacity: 1; /* Fully visible */
            transform: translateY(0); /* Reset position */
          }
          90% {
            opacity: 1; /* Fully visible */
          }
          100% {
            opacity: 0; /* Fade out */
          }
        }
      `}</style>
    </div>
  );
}

export default Toast;
