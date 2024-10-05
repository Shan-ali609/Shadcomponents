import React from 'react';

export default function Progress() {
  return (
    <>
      <div className="h-3 w-80 bg-gray-300 dark:bg-gray-400 rounded-lg">
        <div className="rounded-lg h-3 bg-black dark:bg-white animate-scale-progress w-[230px]" />
      </div>
    </>
  );
}

 
