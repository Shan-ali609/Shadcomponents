import React, { useState } from "react";

export default function CustomSlider() {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="py-44 px-12 md:px-10 lg:px-8 flex flex-col items-center">
      <div className="relative w-96">
        <input
          className="absolute inset-0 w-full h-2 bg-gray-300 rounded-lg cursor-pointer"
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          style={{
            background: `linear-gradient(to right, #5F9FD8 0%, #5F9FD8 ${value}%, #e4eeed ${value}%, #e4eeed 100%)`,
            appearance: "none",
          }}
        />
        <div style={{ left: `calc(${value}% - 12.5px)` }} />
      </div>
      <div className="text-lg font-semibold mt-4">{value}</div>
    </div>
  );
}
