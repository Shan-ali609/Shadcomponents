import React, { useState } from 'react';

export default function CustomSlider() {
  const [value, setValue] = useState(50); 

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="py-44 px-12 md:px-10 lg:px-8 flex flex-col items-center">
      <input
        className="w-96 appearance-none bg-gray-300 h- rounded-lg overflow-hidden slider" 
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        style={{
          background: `linear-gradient(to right, black 0%, black ${value}%, gray ${value}%, gray 100%)`,
        }}
      />
      {/* <div className="text-lg font-semibold mt-4">{value}</div> */}

      <style jsx>{`

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 15px;
          height: 15px;
          background: white; 
          border-radius: 9999px; 
          cursor: pointer;
          border: 2px solid black; 
        }

    

      
        .slider {
          -webkit-appearance: none; 
          appearance: none;
          height: 14px; 
          background: gray; 
          border-radius: 9999px; 
        }
      `}</style>
    </div>
  );
}

 