import React, { useState } from 'react';

export default function OTPInput() {
  const [otp, setOtp] = useState(['', '', '','', '', '']); 

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); 
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  return (
    <div className="flex gap-2 py-48 ">
      {otp.map((value, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          value={value}
          maxLength="1"
          onChange={(e) => handleChange(e.target.value, index)}
          className="w-10 h-10 text-center text-lg border border-gray-300 dark:bg-black rounded-md focus:outline-none focus:ring-2 dark:focus:ring-white "
        />
      ))}
    </div>
  );
}
