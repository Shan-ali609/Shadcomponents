import React from 'react';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function Calendar({ currentMonth, changeMonth, renderDays }) {
  return (
    <>
      <div className="absolute mt-2 w-full bg-white dark:bg-black dark:text-white border dark:border-white/15 rounded-lg shadow-lg px-2 py-1">
        <div className="flex justify-between items-center mb-2">
          <button onClick={() => changeMonth(-1)} className="p-2">
            <MdOutlineArrowBackIosNew />
          </button>
          <div>
            {currentMonth.toLocaleString('default', { month: 'long' })}{' '}
            {currentMonth.getFullYear()}
          </div>
          <button onClick={() => changeMonth(1)} className="p-2">
            <MdOutlineArrowForwardIos />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          <div className="font-bold">Sun</div>
          <div className="font-bold">Mon</div>
          <div className="font-bold">Tue</div>
          <div className="font-bold">Wed</div>
          <div className="font-bold">Thu</div>
          <div className="font-bold">Fri</div>
          <div className="font-bold">Sat</div>
          {renderDays()}  
        </div>
      </div>
    </>
  );
}
