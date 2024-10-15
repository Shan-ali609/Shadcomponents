import React, { useEffect, useState } from 'react';

export default function Progress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
 
    const timer = setTimeout(() => {
      setProgress(50); 
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="h-3 w-80 bg-gray-300 dark:bg-gray-400 rounded-lg my-44">
        <div
          className={`rounded-lg h-3 bg-black dark:bg-white transition-all duration-500`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
}
