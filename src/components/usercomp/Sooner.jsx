import React, { useState, useEffect } from 'react';

function Sooner() {
  const [toasts, setToasts] = useState([]);
  const [toastId, setToastId] = useState(1);
  const [isHovered, setIsHovered] = useState(false); 

  const showNewToast = () => {
    const newToast = { 
      id: toastId,
      Title: "Credit Edit",
      Description: "Event has been created. Why event created?" 
    };

    setToastId((prevId) => prevId + 1);
    if (toasts.length >= 3) {
      setToasts((prevToasts) => [...prevToasts.slice(1), newToast]); 
    } else {
      setToasts((prevToasts) => [...prevToasts, newToast]); 
    }
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  useEffect(() => {
    if (toasts.length === 0) return;

    const timer = setTimeout(() => {
      removeToast(toasts[0].id);
    }, 50000);

    return () => clearTimeout(timer);
  }, [toasts]);

  return (
    <div className="my-44 flex items-center justify-center ">
      <div className='dark:bg-black dark:text-white border rounded-md px-2 py-1 dark:border-white/15'>
        <button
          onClick={showNewToast}
          className="text-[14px]"
        >
          Show Toast
        </button>
      </div>
      <div
        className={`fixed bottom-0 z-50 right-5 mb-4 transition-all duration-500 ${isHovered ? 'space-y-2' : 'space-y-[-90px]'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {toasts.map((toast, index) => (
          <div
            key={toast.id}
            className="flex mx-2 md:right-5 lg:right-5 z-50 p-4 border dark:bg-black dark:text-white dark:border-white/15 bg-white text-black rounded-lg shadow-lg toast-animation"
          >
            <div className="flex flex-col mr-4 ">
              <div className="font-bold">{toast.Title}</div>
              <p className='text-[12px]'>{toast.Description}</p>
              <div>{toast.id}</div>
            </div>
            <div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-white dark:bg-white dark:text-black bg-black px-2 py-1 text-[11px] rounded-md hover:text-gray-300"
              >
                Undo
              </button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .toast-animation {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.5s forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Sooner;
