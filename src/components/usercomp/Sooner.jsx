import React , {useContext} from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AppStateContext } from "../contextApi/AppState";
          
const MyComponent = () => {
   const {theme} =    useContext(AppStateContext)
  const notify = () => {
    toast("This is a custom toast!", {
      position: "bottom-right",  // Changed to bottom-right
      autoClose: 2000,  
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme : theme === 'light' ? "light" : " dark",
      
    });
  };

  return (
    <div>
      <button onClick={notify} className="border-2 px-6 py-1 rounded-sm hover:bg-slate-100 text-black dark:text-white dark:hover:bg-gray-400">
        Show Toast
      </button>
      <ToastContainer theme={theme === "light" ? "light" : "dark"}   />
    </div>
  );
};

export default MyComponent;




