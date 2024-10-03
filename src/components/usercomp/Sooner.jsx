import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MyComponent = () => {
  const notify = () => {
    toast("This is a custom toast!", {
      position: "bottom-right",  // Changed to bottom-right
      autoClose: 3000,  // Close after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <button onClick={notify} className="border px-6 py-1 rounded-sm hover:bg-slate-100">
        Show Toast
      </button>
      <ToastContainer />
    </div>
  );
};

export default MyComponent;




