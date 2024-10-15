import React, { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [submittedUsername, setSubmittedUsername] = useState(''); 

  const handleChange = (e) => {
    setUsername(e.target.value);
    if (e.target.value.length >= 2) {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length < 2) {
      setError('Username must be at least 2 characters.');
      return;
    }

    setSubmittedUsername(username); 
    setShowToast(true);
    setUsername(''); 

    setTimeout(() => {
      setShowToast(false);
      setSubmittedUsername(''); 
    }, 6000);
  };

  return (
    <div className="my-44 mx-10">
      <form onSubmit={handleSubmit}>
        <label className={`block mb-2 text-sm font-medium ${error ? 'text-red-500' : 'text-gray-700 dark:text-white '}`}>
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleChange}
          className="block w-[380px] px-2 py-1 border dark:border-white/15 outline-none dark:bg-black  rounded-md"
          placeholder="Shadcn"
        />
        <p className="text-[13px] font-raleway dark:text-white/70">This is your public display name.</p>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="mt-4 w-[70px] md:w-[80px] bg-black dark:bg-white dark:text-black text-white py-1 md:py-[6px] rounded-md hover:bg-black/80"
        >
          Submit
        </button>
      </form>

      {showToast && (
        <div className="fixed flex items-center z-50  bg-white text-black px-4 py-2 rounded-md shadow-lg transition-all duration-300 toast fade-in-out"
        style={{
            top: window.innerWidth <= 640 ? '20px' : 'auto',
            bottom: window.innerWidth > 640 ? '20px' : 'auto',
            right: window.innerWidth > 640 ? '20px' : 'auto',
            left: window.innerWidth <= 640 ? '50%' : 'auto',
            transform: window.innerWidth <= 640 ? 'translateX(-50%)' : 'none',
          }}
        >
        Username: {submittedUsername}
      </div>
      
      )}

      <style jsx>{`
        .toast {
          width: 300px; 
          
          height: 100px; 
        }

        @media (min-width: 640px) {
          .toast {
            width: 350px; 
          }
        }

        .fade-in-out {
          opacity: 0; 
          animation: fadeInOut 3s forwards; 
        }

        @keyframes fadeInOut {
          0% {
            opacity: 0; 
            transform: translateY(10px); 
          }
          10% {
            opacity: 1; 
            transform: translateY(0);
          }
          90% {
            opacity: 1; 
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Form;
