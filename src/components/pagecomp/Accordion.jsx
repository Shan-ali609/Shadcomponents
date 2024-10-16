"use client";
import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import "@/components/pagecomp/main.css";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Is it accessible?",
      content: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      title: "Is it styled?",
      content:
        "Yes. It comes with default styles that match the other components.",
    },
    {
      title: "Is it animated?",
      content:
        "Yes. It is animated by default, but you can disable it if you prefer.",
    },
  ];

  return (
    <div className="flex flex-col items-center mx-auto justify-center w-full sm:w-3/4 lg:w-3/4 h-full space-y-4 px-4 py-24">
      {accordionItems.map((item, index) => (
        <div
          key={index}
          className="w-full border-b dark:border-white/20 last:border-b-0"
        >
          <div
            className="flex justify-between items-center p-4 cursor-pointer dark:hover:bg-black hover:bg-gray-100 transition-colors duration-200"
            onClick={() => toggleAccordion(index)}
          >
            <h4 className=" text-[14px] dark:text-white">{item.title}</h4>
            <SlArrowDown
              className={`transform transition-transform duration-200 text-[13px] dark:text-white ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            />
          </div>
          {activeIndex === index && (
            <div
              className={`px-4 py-2 bg-gray-50 dark:bg-black dark:text-white ${
                activeIndex === index ? "open" : ""
              }`}
            >
              <p className="text-[14px]">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
