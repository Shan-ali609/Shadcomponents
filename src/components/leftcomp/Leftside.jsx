
"use client";
import React, { useState, useEffect } from "react";
import '@/components/leftcomp/leftside.css';
import Link from "next/link";
import Datacomp from "../pagecomp/Datacomp";

export default function Leftside() {
  const [selectedid, setselectedid] = useState(null);
  useEffect(() => {
    const storedId = localStorage.getItem("selectedid");
    if (storedId) {
      setselectedid(storedId);
    }
  }, []);

  const handleSelect = (id) => {
    setselectedid(id);
    localStorage.setItem("selectedid", id); 
  };

  return (
    <div className="left-container dark:bg-black ">
      <ul className="left-ul scroll-container">
        {Datacomp.map((data) => (
          <li
            key={data.id}
            onClick={() => handleSelect(data.id)}
            className={`left-li  ${selectedid === data.id ? "shan" : ""}`}
          >
            <Link className="raleway   left-a dark:text-white" href={`/component/${data.id}`}>
              {data.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}




