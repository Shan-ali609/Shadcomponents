"use client";
import React, { useState } from "react";
import { FaRegCalendarDays } from "react-icons/fa6";
import Calendar from "../pagecomp/Calendar";

export default function DatePicker() {
  const [selectedDate, setSelectedDate] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const handleDateChange = (day) => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    const options = { year: "numeric", month: "long", day: "numeric" };
    setSelectedDate(date.toLocaleDateString("en-US", options));
    setShowCalendar(false);
  };

  const changeMonth = (offset) => {
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() + offset))
    );
  };

  const renderDays = () => {
    const daysArray = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push(
        <div
          key={day}
          className="p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md text-center"
          onClick={() => handleDateChange(day)}
        >
          {day}
        </div>
      );
    }
    return daysArray;
  };

  return (
    <div className="relative w-80 mx-4 py-64">
      <div
        className="border cursor-pointer flex justify-between items-center px-4 py-2 rounded-md dark:bg-black dark:border-white/15"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <input
          type="text"
          value={selectedDate}
          placeholder="Pick a date"
          className="w-full bg-white dark:bg-black dark:text-white outline-none cursor-pointer"
          readOnly
        />
        <FaRegCalendarDays className="dark:text-white cursor-pointer" />
      </div>
      {showCalendar && (
        <Calendar
          currentMonth={currentMonth}
          changeMonth={changeMonth}
          renderDays={renderDays}
        />
      )}
    </div>
  );
}
