"use client"
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export default function Mycalendar() {
    const [value, onChange] = useState(new Date());
  return (
   <div className='py-16'>
     <Calendar onChange={onChange} value={value} />
   
   </div>
  )
}
