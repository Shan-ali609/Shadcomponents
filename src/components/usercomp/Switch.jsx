import React, { useState } from 'react';

const Switch = () => {

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className="flex items-center">
  
         

      <div
        onClick={toggleSwitch}
        className={`relative inline-flex items-center w-12 h-6 bg-gray-300 rounded-full cursor-pointer transition-colors duration-300 
          ${isOn ? 'bg-green-500' : 'bg-gray-300'}`}
      >

        <span
          className={`absolute left-0 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 
            ${isOn ? 'translate-x-full' : 'translate-x-0'}`}
        />
      </div>
      Airplane Mode
    </div>
  );
};

export default Switch;

