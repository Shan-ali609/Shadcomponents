import React, { useState } from 'react';

export default function Tooltip() {
  const [isshow, setisshow] = useState(false);

  const Enter = () => {
    setisshow(true);
  };

  const Leave = () => {
    setisshow(false);
  };

  return (
    <>
      <div className="border px-3 py-2 rounded-sm relative" onMouseEnter={Enter} onMouseLeave={Leave}>
        <button type="button">Hover</button>

        {isshow && (
          <div className="absolute bottom-full  mb-2 w-48 p-3 bg-gray-100 text-black text-sm rounded-md shadow-lg opacity-100 duration-200 animate-fadeIn">
            <p className="text-center"> Content about Library</p>
            
          </div>
        )}
      </div>
    </>
  );
}

  