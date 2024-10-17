import React, { useState, useEffect } from "react";

export default function Skeleton() {
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisloading(false);
    }, 5000);
  }, []);
  return (
    <div className="p-8 flex flex-wrap text-4xl">
      {!isloading ? <Landingcomp /> : <div>...</div>}
    </div>
  );
}

function Landingcomp() {
  return (
    <div className="flex items-center gap-3 animate-pulse py-44">
      <div className="h-11 w-11 rounded-full bg-gray-800/20 dark:bg-gray-400"></div>
      <div className="flex flex-col gap-2">
        <div className="w-52 h-2 rounded-full bg-gray-800/20 dark:bg-gray-400"></div>
        <div className="w-44 h-2 rounded-full bg-gray-800/20 dark:bg-gray-400"></div>
      </div>
    </div>
  );
}
