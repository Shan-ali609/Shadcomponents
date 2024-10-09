import React,{useContext} from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AppStateContext } from "../contextApi/AppState";

const Toast = () => {
    const {theme} =    useContext(AppStateContext)
  const notify = () => {
    toast.dismiss(); 
    const amount = "$100"; 
    const currentDate = new Date().toLocaleDateString();
    toast(`Catch Up: ${amount} added on ${currentDate}`, {
      position: "bottom-right",  
      autoClose: 5000,  
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme : theme === 'light' ? "light" : " dark",
    });
  };

  return (
    <div className="py-44">
      <button onClick={notify} className="border px-6 py-2 text-[14px] font-roboto rounded-sm hover:bg-slate-100 dark:text-white dark:hover:bg-gray-400">
        Show Toast
      </button>
      <ToastContainer theme={theme === "light" ? "light" : "dark"} />
    </div>
  );
};

export default Toast;
