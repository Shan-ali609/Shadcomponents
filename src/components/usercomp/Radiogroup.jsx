import React, { useState } from "react";

export default function Radiogroup() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col my-44">
      <label className="dark:text-white flex gap-2">
        <input
          type="radio"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleChange}
        />

        <div> Expexted</div>
      </label>
      <label className="dark:text-white flex gap-2">
        <input
          type="radio"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleChange}
        />

        <div> Outcomes</div>
      </label>
      <label className="dark:text-white flex gap-2 ">
        <input
          type="radio"
          value="option3"
          checked={selectedOption === "option3"}
          onChange={handleChange}
        />
        <div> Ratio</div>
      </label>
    </div>
  );
}
