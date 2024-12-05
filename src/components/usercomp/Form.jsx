import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [submittedUsername, setSubmittedUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
    if (e.target.value.length >= 2) {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length < 2) {
      setError("Username must be at least 2 characters.");
      return;
    }

    setSubmittedUsername(username);
    setShowToast(true);
    setUsername("");

    setTimeout(() => {
      setShowToast(false);
      setSubmittedUsername("");
    }, 6000);
  };

  return (
    <div className="my-44 ">
      <form onSubmit={handleSubmit}>
        <label
          className={`block mb-2 text-sm font-medium ${
            error ? "text-red-500" : "text-gray-700 dark:text-white "
          }`}
        >
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleChange}
          className=" w-[230px] md:w-[380px]  px-2 py-1 border dark:border-white/15 outline-none dark:bg-black rounded-md"
          placeholder="Shadcn"
        />
        <p className="text-[13px] font-raleway dark:text-white/70">
          This is your public display name.
        </p>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="mt-4 w-[70px] md:w-[80px] bg-black dark:bg-white dark:text-black text-white py-1 md:py-[6px] rounded-md hover:bg-black/80"
        >
          Submit
        </button>
      </form>

      {showToast && (
        <div
          className={`fixed flex items-center z-50 border dark:border-white/40  bg-white dark:bg-black dark:text-white text-black px-4 py-5 rounded-md shadow-lg transition-all duration-300 ${
            window.innerWidth <= 640
              ? "top-5 left-1/2 transform -translate-x-1/2"
              : "bottom-5 right-5"
          }`}
          style={{
            top: window.innerWidth <= 640 ? "20px" : "auto",
            bottom: window.innerWidth > 640 ? "20px" : "auto",
            right: window.innerWidth > 640 ? "20px" : "auto",
            left: window.innerWidth <= 640 ? "50%" : "auto",
            transform: window.innerWidth <= 640 ? "translateX(-50%)" : "none",
          }}
        >
          Username: {submittedUsername}
        </div>
      )}
    </div>
  );
};

export default Form;
