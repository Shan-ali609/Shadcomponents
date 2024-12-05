"use client";
import Accordion from "./pagecomp/Accordion";
import Alert from "./usercomp/Alert";
import Alertdialog from "./usercomp/Alertdialog";
import Aspectratio from "./usercomp/Aspectratio";
import Avater from "./usercomp/Avater";
import Badge from "./usercomp/Badge";
import Breadcrumb from "./usercomp/Breadcrumb";
import Button from "./usercomp/Button";
import Card from "./usercomp/Card";
import Carousel from "./usercomp/Carousel";
import Checkbox from "./usercomp/Checkbox";
import Collapsible from "./usercomp/Collapsible";
import Mycalendar from "./usercomp/Mycalendar";
import Combobox from "./usercomp/Combobox";
import Contextmenu from "./usercomp/Contextmenu";
import Command from "./usercomp/Command";
import Dialog from "./usercomp/Dialog";
import Drawer from "./usercomp/Drawer";
import Datatable from "./usercomp/Datatable";
import DatePicker from "./usercomp/DatePicker";
import Dropmenu from "./usercomp/Dropmenu";
import Hovercard from "./usercomp/Hovercard";
import Input from "./usercomp/Input";
import OTPInput from "./usercomp/Otpinput";
import Label from "./usercomp/Label";
import Menubar from "./usercomp/Menubar";
import Navigationmenu from "./usercomp/Navigationmenu";
import Pagination from "./usercomp/Pagination";
import Popover from "./usercomp/Popover";
import Progress from "./usercomp/Progress";
import Radiogroup from "./usercomp/Radiogroup";
import Resizable from "./usercomp/Resizable";
import Scrollarea from "./usercomp/Scrollarea";
import Select from "./usercomp/Select";
import Separator from "./usercomp/Separator";
import Sheet from "./usercomp/Sheet";
import Slider from "./usercomp/Slider";
import Tabs from "./usercomp/Tabs";
import Switch from "./usercomp/Switch";
import Textarea from "./usercomp/Textarea";
import Tooltip from "./usercomp/Tooltip";
import Toggle from "./usercomp/Toggle";
import Togglegroup from "./usercomp/Togglegroup";
import Sooner from "./usercomp/Sooner";
import Table from "./usercomp/Table";
import Skeleton from "./usercomp/Skeleton";
import Toast from "./usercomp/Toast";

import Form from "./usercomp/Form";

const components = [
  {
    Name: "Accordion",
    slug: "accordion",
    text: "A vertically stacked set of interactive headings that each reveal a section of content.",
    previewCode: `
"use client";
import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

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
              className={\`transform transition-transform duration-200 text-[13px] dark:text-white \${
                activeIndex === index ? "rotate-180" : ""
              }\`}
            />
          </div>
          {activeIndex === index && (
            <div
              className={\`px-4 py-2 bg-gray-50 dark:bg-black dark:text-white \${
                activeIndex === index ? "open" : ""
              }\`}
            >
              <p className="text-[14px]">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

        `,
    Component: Accordion,
  },
  {
    Name: "Alert",
    slug: "alert",
    text: "Displays a callout for user attention.",
    previewCode: `
"use client";
import React from 'react';
import '@/components/pagecomp/main.css';
import { RxRocket } from "react-icons/rx";

export default function Accordion() {
  return (
    <div className='w-full py-40'>
      <div className='w-auto border dark:border-white/20 pl-2  py-2 mx-9   rounded-md'>
        <div className='flex items-center'>
          <RxRocket className='text-md sm:text-md dark:text-white/90' />
          <h4 className='pl-[2px] sm:pl-3 text-md dark:text-white/90'>Heads up!</h4>
        </div>
        <p className='pl-5 sm:pl-6 text-[14px] text-black/90 dark:text-white/70 text-md'>
          You can add components to your app using the CLI.
        </p>
      </div>
    </div>
  );
}
`,
    Component: Alert,
  },
  {
    Name: "Alert Dialog",
    slug: "alert-dialog",
    text: "A modal dialog that interrupts the user with important content and expects a response.",
    previewCode: `
import React, { useState } from "react";
import Link from "next/link";
export default function Alertdialog() {
  const [openit, setOpenit] = useState(false);

  const isopen = () => setOpenit(true);
  const isclose = () => setOpenit(false);
  return (
    <>
      <div className="w-full flex justify-center items-center py-44">
        <Link
          href="#"
          onClick={isopen}
          className="mx-auto border dark:border-white/20 text-[13px] font-roboto  px-3 py-3 rounded-md dark:text-white dark:hover:bg-white/10 hover:bg-gray-100"
        >
          Show Dialog
        </Link>
      </div>
      {openit && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md  shadow-md max-w-[510px] dark:bg-black dark:border-white/20">
            <h2 className="text-lg font-roboto text-center md:text-left  lg:text-left dark:text-white">
              Are you absolutely sure
            </h2>
            <p className="dark:text-gray-200 text-[14px] py-2 text-black/80 text-center md:text-left lg:text-left">
              This action cannot be undone This will permanently delete your
              account and remove your data from our servers
            </p>

            <div
              onClick={isclose}
              className="flex  flex-wrap-reverse md:justify-end mt-4 gap-2 w-full"
            >
              <button className=" border px-3 w-full md:w-20  lg:w-20  py-1 rounded-md bg-white hover:bg-gray-200 ">
                Close
              </button>

              <button
                onClick={isclose}
                className=" w-full md:w-24 lg:w-24  border dark:border-white/20 px-3 py-1 text-white rounded-md bg-black dark:text-black dark:bg-white"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

    `,
    Component: Alertdialog,
  },
  {
    Name: "Aspect ratio",
    slug: "aspect-ratio",
    text: "Displays content within a desired ratio.",
    previewCode: `
import React from "react";
import Image from "next/image";
export default function Aspectratio() {
  return (
    <>
      <div className=" w-full h-[400px] px-3 py-5  ">
        <div className="">
          <Image
            src="/images/shadcn.webp"
            height={300}
            width={900}
            className="rounded h-[350px]"
            alt="Alert"
          />
        </div>
      </div>
    </>
  );
}

    `,
    Component: Aspectratio,
  },
  {
    Name: "Avater",
    slug: "avatar",
    text: "An image element with a fallback for representing the user.",
    previewCode: `
import React from "react";
import Image from "next/image";

export default function Avatar() {
  return (
    <div className="flex justify-center items-center py-36 w-full">
      <Image
        src="/images/avater.jpg"
        className="rounded-full h-10 w-10 object-cover"
        alt="avatar"
        height={300}
        width={300}
      />
    </div>
  );
}

    `,
    Component: Avater,
  },
  {
    Name: "Badge",
    slug: "badge",
    text: "Displays a badge or a component that looks like a badge.",
    previewCode: `
  import React from "react";

export default function Badge() {
  return (
    <>
      <div className=" w-full flex justify-center items-center cursor-pointer py-40">
        <p className="bg-black dark:bg-white dark:text-black hover:bg-black/70 text-white px-4 py-[4px] rounded-lg text-[11px]">
          Badge
        </p>
      </div>
    </>
  );
}

    `,
    Component: Badge,
  },
  {
    Name: "Breadcrumb",
    slug: "breadcrumb",
    text: "Displays the path to the current resource using a hierarchy of links.",
    previewCode: `
     
import React from 'react';
import { SlArrowRight } from "react-icons/sl";

export default function Breadcrumb() {
  return (
    <div className=' w-full flex justify-center items-center py-40 '>
      <div className='flex items-center space-x-2 px-7'>
        <div className='text-sm cursor-pointer text-gray-400 hover:text-black dark:hover:text-white'>Home</div>
        <SlArrowRight className='h-3 w-3 text-gray-400' />
        <div className='cursor-pointer text-gray-400 flex pb-[8px] hover:text-black dark:hover:text-white '>...</div>
        <SlArrowRight className='h-3 w-3 text-gray-400' />
        <div className='text-sm cursor-pointer text-gray-400 hover:text-black dark:hover:text-white '>Components</div>
        <SlArrowRight className='h-3 w-3 text-gray-400' />
        <div className='text-sm dark:text-white'>Breadcrumb</div>
      </div>
    </div>
  );
}


    `,
    Component: Breadcrumb,
  },
  {
    Name: "Button",
    slug: "button",
    text: "Displays a button or a component that looks like a button.",
    previewCode: `
import React from 'react'
 
export default function Button() {
   return (
     <div className='py-40 '>
       <button type='button' className='bg-black text-white dark:bg-white dark:text-black dark:hover:bg-gray-400 px-4 py-2  rounded-md hover:bg-zinc-900'>Button</button>
     </div>
   )
 }
    `,
    Component: Button,
  },
  {
    Name: "Calendar",
    slug: "calendar",
    text: "A date field component that allows users to enter and edit date.",
    previewCode: `
"use client";
import React, { useState } from "react";
import Calendar from "../pagecomp/Calendar";

function Mycalendar() {
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
      daysArray.push(<div key={\`empty-\${i}\`} className="p-2"></div>);
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
    <div className="relative w-80 py-64 flex items-center">
      <Calendar
        currentMonth={currentMonth}
        changeMonth={changeMonth}
        renderDays={renderDays}
      />
      {selectedDate && (
        <div className="absolute top-0 left-0 p-4 bg-white dark:bg-black rounded-md shadow-md">
          Selected Date: {selectedDate}
        </div>
      )}
    </div>
  );
}

export default Mycalendar;

    `,
    Component: Mycalendar,
  },
  {
    Name: "Card",
    slug: "card",
    text: "Displays a card with header, content, and footer.",
    previewCode: `
"use client";
import React, { useState } from "react";
import { HiChevronDoubleDown } from "react-icons/hi2";

export default function Card() {
  const options = [
    { label: "select" },
    { label: "Next js" },
    { label: "Nust.js" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0].label);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
  };
  return (
    <div div className="py-10">
      <div className="w-80 h-[299px] border dark:border-white/20 rounded-md shadow-md ">
        <div>
          <div className="flex flex-col px-4 py-4 ">
            <h1 className="text-md font-semibold dark:text-white/90 ">
              Create project
            </h1>
            <p className="text-gray-400 text-[14px] Roboto dark:text-white/70 ">
              Deploy your new project in one-click.
            </p>
            <h5 className="text-[15px] pt-4 dark:text-white/90 ">Name</h5>
            <input
              className="w-full border dark:border-white/10  rounded-md pl-2 text-[15px] h-10 mt-1 dark:text-white  dark:placeholder:text-white/70 dark:bg-white/10  "
              type="text"
              placeholder="Name of your project "
            />

            <h5 className="text-md pt-4 dark:text-white/90  ">Framework</h5>

            <div className="relative">
              <div
                className="cursor-pointer border dark:border-white/10 w-full h-10 px-2 flex  items-center rounded-md justify-between"
                onClick={toggleDropdown}
              >
                <h4 className=" text-[15px] flex dark:text-white ">
                  {selectedOption}{" "}
                </h4>
                <HiChevronDoubleDown className="text-gray-400 dark:text-white" />
              </div>
              {isOpen && (
                <div className="absolute text-[14px] z-10 bg-white dark:bg-black border dark:border-white/10 rounded-md w-full">
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className="px-6 py-2 cursor-pointer hover:bg-gray-200 dark:text-white dark:hover:bg-white/10"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-between mt-4">
              <button className="border px-3 py-1 rounded-md dark:bg-white dark:text-black  hover:bg-gray-100">
                Cancel
              </button>
              <button className="ml-3 border px-3 py-1 text-white rounded-md bg-black">
                Deploy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

    `,
    Component: Card,
  },
  {
    Name: "Carousal",
    slug: "carousel",
    text: "A carousel with motion and swipe built using Embla.",
    previewCode: `
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function Carousel() {
const images = [
    "/images/nature1.jpg",
    "/images/nature2.jpeg",
    "/images/nature3.jpeg",
  ];

  const [currentimg, setcurrentimg] = useState(0);

  const nextimg = () => {
    if (currentimg < images.length - 1) {
      setcurrentimg(currentimg + 1);
    }
  };

  const preimg = () => {
    if (currentimg > 0) {
      setcurrentimg(currentimg - 1);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center gap-5 px-2 py-9">
        <div
          className="preimg cursor-pointer border dark:border-white/20 px-2 py-2 rounded-xl dark:text-white/70"
          onClick={preimg}
        >
          <FaArrowLeft />
        </div>
        <div className="images">
          <Image
            className="h-[340px] object-cover"
            src={images[currentimg]}
            alt="images"
            width={400}
            height={300}
          />
        </div>

        <div
          className="nextimg cursor-pointer dark:text-white/70 border dark:border-white/20 px-2 py-2 rounded-xl "
          onClick={nextimg}
        >
          <FaArrowRight />
        </div>
      </div>
    </>
  );
}

    `,
    Component: Carousel,
  },
  {
    Name: "Checkbox",
    slug: "checkbox",
    text: "A control that allows the user to toggle between checked and not checked.",
    previewCode: `
import React, { useState } from "react";
import { MdOutlineCheck } from "react-icons/md";

export default function Checkbox() {
  const [isshow, setisshow] = useState(false);
  const toggleCheckbox = () => {
    setisshow(!isshow);
  };
  return (
    <div>
      <div className="flex items-center gap-2 my-40">
        <div
          className="border border-black dark:border-white/80 h-4 w-4 rounded-sm  text-white flex items-center justify-center cursor-pointer"
          onClick={toggleCheckbox}
        >
          {isshow && (
            <MdOutlineCheck className="text-white bg-black dark:bg-white dark:text-black w-full h-auto rounded-sm text-[10px]" />
          )}{" "}
        </div>
        <div>
          <h1 className="font-roboto dark:text-white">
            Accept terms and conditions
          </h1>
        </div>
      </div>
    </div>
  );
}

    `,
    Component: Checkbox,
  },

  {
    Name: "Collapsible",
    slug: "collapsible",
    text: "An interactive component which expands/collapses a panel.",
    previewCode: `
"use client"    
import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

export default function Collapsible() {
  const [openit, setOpenit] = useState(false);
  const show = () => {
    setOpenit(!openit);
  };

  return (
    <>
      <div>
        <div className=" h-[450px] flex flex-col justify-center items-center px-4  dark:text-white ">
          <div className="text-sm flex font-bold">
            @peduarte starred 3 repositories{" "}
            <div onClick={show}>
              <div className="flex flex-col px-2 py-1 border-none rounded-md cursor-pointer   ">
                <div className="h-2">
                  <SlArrowUp className="h-[8px]" />
                </div>
                <div>
                  <SlArrowDown className="h-[8px]" />
                </div>
              </div>
            </div>
          </div>

          <div className="border w-[300px] px-[23px] py-2 rounded-md my-1 dark:text-white ">
            <p className="text-sm font-bold">@radix-ui/primitives</p>
          </div>

          {openit && (
            <>
              <div className="border  w-[300px] px-[23px] py-2 rounded-md my-1 dark:text-white ">
                <p className="text-sm font-bold">@radix-ui/colors</p>
              </div>
              <div className="border w-[300px] px-[23px] py-2 rounded-md my-1 dark:text-white ">
                <p className="text-sm font-bold">@stitches/react</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

    `,
    Component: Collapsible,
  },
  {
    Name: "Combobox",
    slug: "combobox",
    text: "Autocomplete input and command palette with a list of suggestions.",
    previewCode: `
import React, { useState } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

export default function Combobox() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select framework");
  const data = ["Astro", "Remix", "Next.js", "Nuxt.js"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center my-60">
      <div className="relative flex items-center justify-between  px-9 w-full">
        <div
          className="w-52 cursor-pointer h-6 flex justify-between border dark:border-white/20 py-4 px-2 items-center rounded-md dark:text-white"
          onClick={toggleDropdown}
        >
          <h4 className="flex text-md font-normal pl-1 dark:text-white">
            <span className="text-gray-700 text-[12px] dark:text-white"></span>
            {selectedOption}
          </h4>
          <div className="text-gray-400 dark:text-white">
            <div className="flex flex-col px-2 py-1 border-none rounded-md cursor-pointer">
              <div className="h-2">
                {isOpen ? (
                  <SlArrowUp className="h-[8px]" />
                ) : (
                  <SlArrowDown className="h-[8px]" />
                )}
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="absolute z-10 top-full bg-white border dark:border-white/20 rounded-md w-52 dark:bg-black dark:text-white">
            {data.map((option, index) => (
              <div
                key={index}
                className="px-6 text-[14px] py-1 cursor-pointer text-gray-500 hover:bg-gray-200 dark:hover:bg-white/15 dark:text-white"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

    `,
    Component: Combobox,
    list: ["Astro", "Remix", "Next.js", "Nust.js"],
  },
  {
    Name: "Command",
    slug: "command",
    text: "Fast, composable, unstyled command menu for React.",
    previewCode: `
import React from "react";
import { FiCalendar } from "react-icons/fi";
import { GrEmoji } from "react-icons/gr";
import { PiCalculatorThin } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
export default function Command() {
  return (
    <>
      <div className=" w-[450px] h-auto my-14 border dark:border-white/20 rounded-sm shadow-lg mx-9 ">
        <div className="relative ">
          <input
            className=" dark:placeholder:text-white/70 w-full pt-1.5 pr-10 pb-1.5 pl-7  border dark:border-white/20 dark:bg-white/10 dark:placeholder-white outline-none  "
            type="text"
            placeholder=" Search here "
          />
          <CiSearch className="absolute top-2/4 ml-2 transform -translate-y-2/4 text-gray-500 h-4 w-4 dark:text-white " />
        </div>

        <div className="border-b  dark:border-white/20 ">
          <p className="text-xs px-2  pt-2 text-gray-500 font-bold  dark:text-white/90 ">
            Suggestions
          </p>
          <ul className="flex flex-col gap-3 w-full  ">
            <li className="flex text-[14px] items-center content-center cursor-pointer gap-2 px-2 mt-2 text-black hover:bg-gray-300/40 dark:text-white/90 dark:hover:bg-white/10">
              {" "}
              <FiCalendar /> Calendar
            </li>
            <li className="flex text-[14px] items-center cursor-pointer gap-2 px-2 text-black hover:bg-gray-300/40 dark:text-white/90 dark:hover:bg-white/10">
              <GrEmoji />
              Search Emoji
            </li>
            <li className="flex text-[14px] items-center pb-3  cursor-not-allowed pointer-events-none gap-2 px-2 text-gray-500 hover:bg-gray-300 dark:text-white/90 dark:hover:bg-white/10">
              {" "}
              <PiCalculatorThin />
              Calculator
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs px-2  pt-2 text-gray-500 font-bold ">
            Settings
          </p>
          <ul className="flex flex-col gap-3 w-full  ">
            <li className="flex text-[14px] items-center content-center cursor-pointer gap-2 px-2 mt-2 text-black hover:bg-gray-300/40 dark:text-white/90 dark:hover:bg-white/10">
              {" "}
              <CgProfile /> Profile
            </li>
            <li className="flex text-[14px] items-center cursor-pointer gap-2 px-2 text-black hover:bg-gray-300/40 dark:text-white/90 dark:hover:bg-white/10">
              <FaRegMoneyBillAlt />
              Billing
            </li>
            <li className="flex text-[14px] items-center text-black cursor-pointer  gap-2 px-2  hover:bg-gray-300/40 dark:text-white/90 dark:hover:bg-white/10">
              {" "}
              <IoSettingsOutline />
              Setting
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
    
    `,
    Component: Command,
  },
  {
    Name: "Context Menu",
    slug: "context-menu",
    text: "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
    previewCode: `
import React from "react";

export default function Contextmenu() {
  return (
    <>
      <div className="border-dotted border-2 px-20 py-16 dark:text-white my-24 ">
        <p>Right click here</p>
      </div>
    </>
  );
}

    `,
    Component: Contextmenu,
  },
  {
    Name: "Data Table",
    slug: "data-table",
    text: "Powerful table and datagrids built using TanStack Table.",
    previewCode: `
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { SlArrowDown } from "react-icons/sl";
export default function Datatable() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState();

  const options = ["Status", "Email", "Amount"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const data = [
    {
      statusbar: "processing",
      email: "ali123@gmail.com",
      amount: "50$",
    },
    {
      statusbar: "Approved",
      email: "hamza@gmail.com",
      amount: "20$",
    },
    {
      statusbar: "pending",
      email: "alihamz@gmail.com",
      amount: "50.4$",
    },
    {
      statusbar: "processing",
      email: "dingg@gmail.com",
      amount: "50.9$",
    },
  ];

  return (
    <>
      <div className=" w-full mx-9   my-8 ">
        <div className="flex flex-row items-center justify-between mb-5 ">
          <div className="relative ">
            <input
              className=" dark:placeholder:text-white/70 w-full pt-1.5 pr-10 pb-1.5 pl-7  border dark:border-white/20 dark:bg-white/10 dark:placeholder-white outline-none  "
              type="text"
              placeholder="Filter Emails"
            />
            <CiSearch className="absolute top-2/4 ml-2 transform -translate-y-2/4 text-gray-500 h-4 w-4 dark:text-white " />
          </div>
          <div className="relative w-28">
            <div
              onClick={toggleDropdown}
              className="border dark:border-white/10 p-2 rounded text-[13px] cursor-pointer bg-white flex items-center gap-8 dark:text-white dark:bg-zinc-900 "
            >
              {" "}
              Colums
              <SlArrowDown />
            </div>

            {isOpen && (
              <div className="absolute top-full left-0 w-full border dark:border-white/10 bg-white dark:bg-black dark:text-white  rounded mt-1 z-10">
                {options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-white/10 text-[13px] cursor-pointer"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="border dark:border-white/20 py-5 rounded-md  overflow-y-auto">
          <div className="flex gap-5 md:gap-[50px] min-w-[600px] border-b dark:border-white/20 pb-3 text-gray-400 dark:text-white/50 text-[15px] font-roboto">
            <h2 className="w-[40px] text-center">
              <input type="checkbox" className=" cursor-pointer" />
            </h2>
            <h2 className="w-[100px] sm:w-[120px] md:w-[150px]">Status</h2>
            <h2 className="w-[150px] sm:w-[200px] md:w-[220px]">Email</h2>
            <h2 className="w-[80px] sm:w-[100px] md:w-[120px]">Amount</h2>
            <h2 className="w-[10px] sm:w-[40px] "></h2>
          </div>

          {data.map((item, index) => (
            <div
              className="flex gap-5 md:gap-11 min-w-[600px] items-center py-3 border-b dark:border-white/20 text-gray-700 dark:text-white text-[14px]"
              key={index}
            >
              <div className="w-[40px] text-center ">
                <input type="checkbox" className="cursor-pointer" />
              </div>
              <div className="w-[100px] sm:w-[120px] md:w-[150px]">
                {item.statusbar}
              </div>
              <div className="w-[150px] sm:w-[200px] md:w-[250px]">
                {item.email}
              </div>
              <div className="w-[80px] sm:w-[100px] md:w-[120px]">
                {item.amount}
              </div>
              <div className="w-[40px] sm:w-[60px]">...</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

    `,
    Component: Datatable,
  },
  {
    Name: "Date-Picker",
    slug: "date-picker",
    text: "A date picker component with range and presets.",
    previewCode: `
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
      daysArray.push(<div key={\`empty-\${i}\`} className="p-2"></div>);
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
    <div className="relative w-80 py-64">
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
 `,
    Component: DatePicker,
  },

  {
    Name: "Dialog",
    slug: "dialog",
    text: "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.",
    previewCode: `
"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Alertdialog() {
  const [openit, setOpenit] = useState(false);

  const openDialog = () => setOpenit(true);
  const closeDialog = () => setOpenit(false);

  return (
    <>
      <div className="w-full flex justify-center items-center py-44">
        <Link
          href="#"
          onClick={openDialog}
          className="mx-auto border dark:border-white/20 text-[13px] font-roboto  px-3 py-3 rounded-md dark:text-white dark:hover:bg-white/10 hover:bg-gray-100"
        >
          Edit Profile
        </Link>
      </div>
      {openit && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-full md:max-w-[450px] lg:max-w-[450px] dark:bg-black dark:border-white/20">
            <h2 className="text-lg font-roboto text-center md:text-left lg:text-left dark:text-white">
              Edit Profile
            </h2>
            <p className="text-[15px] text-gray-500 dark:text-gray-200">
              <span className="dark:text-white/50">
                Change your password here. After saving you&apos;ll be logged
                out.
              </span>
            </p>

            <div>
              <div className="flex gap-2 py-3 justify-center md:justify-end lg:justify-end">
                <label className="text-[14px] dark:text-white">Name</label>
                <input
                  className="border dark:border-white/20 rounded-sm pl-2 dark:bg-black dark:placeholder:text-white"
                  type="text"
                  placeholder="Name..."
                />
              </div>
              <div className="flex gap-2 py-3 justify-center md:justify-end lg:justify-end">
                <label className="text-[14px] dark:text-white">Username</label>
                <input
                  className="border dark:border-white/20 rounded-sm pl-2 dark:bg-black dark:placeholder:text-white"
                  type="text"
                  placeholder="Username..."
                />
              </div>
            </div>

            <div className="flex flex-wrap-reverse md:justify-end mt-4 gap-2 w-full">
              <button
                onClick={closeDialog}
                className="border px-3 py-1 rounded-md dark:text-white"
              >
                Close
              </button>

              <button
                onClick={closeDialog}
                className="border px-3 py-1 rounded-md bg-black text-white dark:bg-white dark:text-black"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
    
    `,
    Component: Dialog,
  },
  {
    Name: "Drawer",
    slug: "drawer",
    text: "A drawer component for React.",
    previewCode: `
"use client";
import React, { useState } from "react";
import { LuMinus } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [counter, setCounter] = useState(200);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleclose = () => {
    setIsOpen(false);
  };

  const incrementCounter = () => {
    if (counter < 400) {
      setCounter(counter + 10);
    }
  };

  const decrementCounter = () => {
    if (counter > 200) {
      setCounter(counter - 10);
    }
  };

  return (
    <div className="relative py-40">
      <button
        className="px-4 py-2 font-roboto text-[14px]  text-black border rounded-lg dark:text-white"
        onClick={toggleDrawer}
      >
        Open Drawer
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black dark:bg-white opacity-50 z-30"
          onClick={toggleDrawer}
        ></div>
      )}

      <div
           className={\`fixed bottom-0 left-0 w-full bg-white z-40 transition-transform duration-300 \${
          isOpen ? "translate-y-0" : "translate-y-full"
        } h-2/3 rounded-t-lg shadow-lg\`}
      >
        <div className="absolute bottom-0 mb-3 left-1/2 transform -translate-x-1/2  ">
          <h2 className="text-lg font-bold dark:text-black ">Move Goal</h2>
          <p className="dark:text-black">Set your daily activity goal</p>

          <div className="flex items-center justify-center gap-16 mt-4">
            <button
              onClick={decrementCounter}
              className="p-1 rounded-full border dark:text:white"
            >
              <LuMinus className="text-xl" />
            </button>

            <div className="text-7xl font-bold dark:text:white">{counter}</div>

            <button
              onClick={incrementCounter}
              className="p-1 rounded-full border dark:text:white "
            >
              <FaPlus className="text-xl" />
            </button>
          </div>
          <div>
            <p className="text-xs text-center dark:text:white ">CALORIES/DAY</p>
          </div>

          <div className="flex items-end gap-2 overflow-hidden  mt-9">
            <div className="bg-black dark:text:white w-[22px] h-[100px]"></div>
            <div className="bg-black dark:text:white w-[22px] h-[55px]"></div>
            <div className="bg-black dark:text:white w-[22px] h-[80px]"></div>
            <div className="bg-black dark:text:white w-[22px] h-[60px]"></div>
            <div className="bg-black dark:text:white w-[22px] h-[40px]"></div>
            <div className="bg-black dark:text:white w-[22px] h-[65px]"></div>
            <div className="bg-black dark:text:white w-[22px] h-[35px]"></div>
            <div className="bg-black dark:text:white w-[22px] h-[75px]"></div>
            <div className="bg-black dark:text:white w-[22px] h-[45px]"></div>
            <div className="bg-black dark:text:white w-[22px] h-[55px]"></div>
          </div>

          <div className="flex flex-col w-full pt-4 gap-3 ">
            <button
              type="button"
              className="w-full border-2 bg-black text-white dark:bg-black  py-1 rounded-sm"
              onClick={handleclose}
            >
              Submit
            </button>
            <button
              type="button"
              className="w-full border-2  text-black dark:text:white py-1 rounded-sm"
              onClick={handleclose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
    
    `,
    Component: Drawer,
  },
  {
    Name: "Dropdown-Menu",
    slug: "dropdown-menu",
    text: "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
    previewCode: `
import React, { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { GrEmoji } from "react-icons/gr";
import { PiCalculatorThin } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

export default function Dropdownmenu() {
  const [openclick, setopenclick] = useState(false);

  const handleit = () => {
    setopenclick(!openclick);
  };

  const handleclose = () => {
    setopenclick(false);
  };

  return (
    <div className="relative my-56">
      <div className="border rounded-md hover:bg-slate-300 dark:text-white dark:hover:bg-gray-400">
        <button
          type="button"
          className="px-3 py-2 font-roboto text-[14px]"
          onClick={handleit}
        >
          Open
        </button>
      </div>

      {openclick && (
        <div className="absolute bottom-full">
          <div className="md:w-[230px] lg:w-[250px] sm:w-[200px] w-[185px] dark:bg-black bg-white h-auto border dark:border-white/15 rounded-sm shadow-lg">
            <div className="pl-3 text-[15px] border dark:border-white/15 dark:text-white">
              My Account
            </div>

            <div className="border-b dark:border-white/20">
              <p className="text-xs px-2 pt-2 text-gray-500 font-bold dark:text-white/90">
                Suggestions
              </p>
              <ul className="flex flex-col gap-3 w-full" onClick={handleclose}>
                <li className="flex text-[14px] items-center content-center cursor-pointer gap-2 px-2 mt-2 text-black hover:bg-gray-300/40 dark:text-white/90 dark:hover:bg-white/10">
                  <FiCalendar /> Calendar
                </li>
                <li className="flex text-[14px] items-center cursor-pointer gap-2 px-2 text-black hover:bg-gray-300/40 dark:text-white/90 dark:hover:bg-white/10">
                  <GrEmoji />
                  Search Emoji
                </li>
                <li className="flex text-[14px] items-center pb-3 cursor-not-allowed pointer-events-none gap-2 px-2 text-gray-500 hover:bg-gray-300 dark:text-white/90 dark:hover:bg-white/10">
                  <PiCalculatorThin />
                  Calculator
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs px-2 pt-2 text-gray-500 font-bold">
                Settings
              </p>
              <ul className="flex flex-col gap-3 w-full" onClick={handleclose}>
                <li className="flex text-[14px] items-center content-center cursor-pointer gap-2 px-2 mt-2 text-black hover:bg-gray-300/40 dark:text-white/90 dark:hover:bg-white/10">
                  <CgProfile /> Profile
                </li>
                <li className="flex text-[14px] items-center cursor-pointer gap-2 px-2 text-black hover:bg-gray-300/40 dark:text-white/90 dark:hover:bg-white/10">
                  <FaRegMoneyBillAlt /> Billing
                </li>
                <li className="flex text-[14px] items-center cursor-pointer gap-2 px-2 text-black hover:bg-gray-300/40 dark:text-white/90 dark:hover:bg-white/10">
                  <IoSettingsOutline /> Setting
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
    
    `,
    Component: Dropmenu,
  },
  {
    Name: "Hover card",
    slug: "hover-card",
    text: "For sighted users to preview content available behind a link.",
    previewCode: `
import React from "react";
import { FaPlayCircle } from "react-icons/fa";

export default function Hovercard() {
  return (
    <>
      <div className="relative group my-44">
        <div className="hover:underline underline-offset-1 cursor-pointer dark:text-white">
          @nextjs
        </div>

        <div className="absolute top-full left-0 mt-2 w-44 sm:w-52 md:w-64 lg:w-64 p-4 bg-white dark:bg-black border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-4 dark:text-white">
            <FaPlayCircle />
            <h4 className="text-lg font-bold ">Nextjs</h4>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            This card appears when you hover over the trigger element.
          </p>
        </div>
      </div>
    </>
  );
}
    
    `,
    Component: Hovercard,
  },
  {
    Name: "Input",
    slug: "input",
    text: "Displays a form input field or a component that looks like an input field.",
    previewCode: `
import React from "react";

export default function Input() {
  return (
    <div className="py-44 px-8">
      <input
        className="border dark:border-white/10 px-2 py-2 w-96 rounded-md dark:bg-black dark:text-white"
        type="text"
        placeholder="Emails"
      />
    </div>
  );
}
    
    `,
    Component: Input,
  },
  {
    Name: "input-OTP",
    slug: "input-otp",
    text: "Accessible one-time password component with copy paste functionality.",
    previewCode: `
import React, { useState } from 'react';

export default function OTPInput() {
  const [otp, setOtp] = useState(['', '', '','', '', '']); 

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); 
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(\`otp-input-\${index + 1}\`).focus();
    }
  };

  return (
    <div className="flex gap-2 py-48 px-7 ">
      {otp.map((value, index) => (
        <input
          key={index}
          id={\`otp-input-\${index}\`}
          type="text"
          value={value}
          maxLength="1"
          onChange={(e) => handleChange(e.target.value, index)}
          className="w-10 h-10 text-center text-lg border dark:border-white/20 border-gray-300 dark:bg-black rounded-md focus:outline-none focus:ring-2 dark:focus:ring-white "
        />
      ))}
    </div>
  );
}
    
    `,
    Component: OTPInput,
  },
  {
    Name: "Label",
    slug: "label",
    text: "Renders an accessible label associated with controls.",
    previewCode: `
import React, { useState } from "react";
import { MdOutlineCheck } from "react-icons/md";

export default function Label(){
  const [isshow, setisshow] = useState(false);
  const toggleCheckbox = () => {
    setisshow(!isshow);
  };
  return (
    <div>
      <div className="flex items-center gap-2 my-40">
        <div
          className="border border-black dark:border-white/80 h-4 w-4 rounded-sm  text-white flex items-center justify-center cursor-pointer"
          onClick={toggleCheckbox}
        >
          {isshow && (
            <MdOutlineCheck className="text-white bg-black dark:bg-white dark:text-black w-full h-auto rounded-sm text-[10px]" />
          )}
        </div>
        <div>
          <h1 className="font-roboto dark:text-white">
            Accept terms and conditions
          </h1>
        </div>
      </div>
    </div>
  );
}
    
    `,
    Component: Label,
  },
  {
    Name: "Menubar",
    slug: "menubar",
    text: "A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.",
    previewCode: `
import React from 'react'

export default function Menubar() {
  return (
    <>
       <div className='boder dark:border-white/10 round-md shadow-lg dark:shadow-lg my-48 mx-5' >
          <ul className='flex gap-6 border dark:border-white/30 rounded-md px-4 py-2 dark:text-white'>
            <li className='dark:text-white/70' >Navbar</li>
            <li className='dark:text-white/70'>Profile</li>
            <li className='dark:text-white/70'>View</li>
            <li className='dark:text-white/70'>Files</li>
          </ul>
        </div> 
    </>
  )
}
    
    `,
    Component: Menubar,
  },
  {
    Name: "Navigation Menu",
    slug: "navigation-menu",
    text: "A collection of links for navigating websites.",
    previewCode: `
import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

export default function Navigationmenu() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="flex gap-11 py-44 px-7">
      <div
        className="relative  text-[14px] flex items-center gap-3 cursor-pointer dark:text-white "
        onMouseEnter={() => handleMouseEnter("gettingStarted1")}
        onMouseLeave={handleMouseLeave}
      >
        <p className="font-roboto dark:text-white/70 ">Getting started</p>
        <SlArrowDown
          className={\`transform transition-transform duration-300 \${
            hoveredItem === "gettingStarted1" ? "rotate-180" : ""
          }\`}
        />

        {hoveredItem === "gettingStarted1" && (
          <div className="absolute  text-[14px] top-full left-0 dark:text-white dark:bg-black  w-[380px] lg:w-[540px] p-4 bg-white border rounded-lg shadow-lg">
            <div className="flex flex-wrap md:flex-nowrap gap-2">
              <div className="w-full md:max-w-48 lg:max-w-48 h-[50px] md:h-[220px] lg:h-[220px]  bg-gray-400/35 text-center flex items-end">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
              <div className="flex flex-col gap-3">
                <div className="hover:bg-gray-300/30">
                  <h2 className="font-roboto">Hide</h2>
                  <p className="text-[12px] text-black/70">
                    Lorem ipsum, dolor seat non, nemo quas nisi aut, am!
                  </p>
                </div>

                <div className="hover:bg-gray-300/30">
                  <h2 className="font-roboto">Hide</h2>
                  <p className="text-[12px] text-black/70">
                    Lorem ipsum, dolor seat non, nemo quas nisi aut, am!
                  </p>
                </div>

                <div className="hover:bg-gray-300/30">
                  <h2 className="font-roboto">Hide</h2>
                  <p className="text-[12px] text-black/70">
                    Lorem ipsum, dolor seat non, nemo quas nisi aut, am!
                  </p>
                </div>

                <div className="hover:bg-gray-300/30">
                  <h2 className="font-roboto">Hide</h2>
                  <p className="text-[12px] text-black/70">
                    Lorem ipsum, dolor seat non, nemo quas nisi aut, am!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className="relative  font-roboto text-[14px] flex items-center gap-3 cursor-pointer dark:text-white"
        onMouseEnter={() => handleMouseEnter("Components")}
        onMouseLeave={handleMouseLeave}
      >
        <p className="dark:text-white/70">Components</p>
        <SlArrowDown
          className={\`transform transition-transform duration-300 \${
            hoveredItem === "Components" ? "rotate-180" : ""
          }\`}
        />

        {hoveredItem === "Components" && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[380px] sm:w-[440px] md:w-[470px] lg:w-[530px] z-50  p-2 dark:text-white dark:bg-black  bg-white border rounded-lg shadow-lg">
            <div className="flex gap-3">
              <div className="flex flex-col gap-3">
                <div className="hover:bg-gray-300/30 dark:hover:bg-white/10 ">
                  <h2 className="font-roboto">Hide</h2>
                  <p className="text-[12px] text-black/70">
                    Lorem ipsum, dolor seat non, nemo quas nisi aut, am!
                  </p>
                </div>

                <div className="hover:bg-gray-300/30">
                  <h2 className="font-roboto">Hide</h2>
                  <p className="text-[12px] text-black/70">
                    Lorem ipsum, dolor seat non, nemo quas nisi aut, am!
                  </p>
                </div>

                <div className="hover:bg-gray-300/30">
                  <h2 className="font-roboto">Hide</h2>
                  <p className="text-[12px] text-black/70">
                    Lorem ipsum, dolor seat non, nemo quas nisi aut, am!
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="hover:bg-gray-300/30">
                  <h2 className="font-roboto">Hide</h2>
                  <p className="text-[12px] text-black/70">
                    Lorem ipsum, dolor seat non, nemo quas nisi aut, am!
                  </p>
                </div>

                <div className="hover:bg-gray-300/30">
                  <h2 className="font-roboto">Hide</h2>
                  <p className="text-[12px] text-black/70">
                    Lorem ipsum, dolor seat non, nemo quas nisi aut, am!
                  </p>
                </div>

                <div className="hover:bg-gray-300/30">
                  <h2 className="font-roboto">Hide</h2>
                  <p className="text-[12px] text-black/70">
                    Lorem ipsum, dolor seat non, nemo quas nisi aut, am!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative  font-roboto text-[14px]  flex items-center gap-3 cursor-pointer dark:text-white">
        Documentation
      </div>
    </div>
  );
}
    
    `,
    Component: Navigationmenu,
  },
  {
    Name: "Pagination",
    slug: "pagination",
    text: "Pagination with page navigation, next and previous links.",
    previewCode: `
import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
export default function Pagination() {
  return (
    <>
      <div className="flex gap-3 items-center cursor-pointer py-44">
        <div className=" flex items-center gap-2 px-5 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-400 dark:text-white">
          <SlArrowLeft className="text-[9px]" />
          <button type="button " className="font-roboto">
            Previous
          </button>
        </div>

        <div className="dark:text-white">1</div>
        <div className="px-3 py-2 rounded-md hover:bg-gray-300/30 border dark:text-white ">
          2
        </div>
        <div className="dark:text-white">3</div>
        <div className="dark:text-white">...</div>

        <div className=" flex  items-center gap-2 px-9 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-400 dark:text-white">
          <button type="button" className="font-roboto">
            Next
          </button>
          <SlArrowRight className="text-[9px]" />
        </div>
      </div>
    </>
  );
}
    
    
    `,
    Component: Pagination,
  },
  {
    Name: "Popover",
    slug: "popover",
    text: "Displays rich content in a portal, triggered by a button.",
    previewCode: `
import React, { useState } from "react";

export default function Popover() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="relative my-52 ">
      <button
        className="px-4 py-2  bg-white text-black font-roboto text-[13px] border dark:bg-black dark:text-white rounded-md"
        onClick={togglePopup}
      >
        Show Popover
      </button>

      {showPopup && (
        <div className="absolute bottom-14    left-1/2 -translate-x-1/2  bg-gray-600/50 b flex justify-center items-center gap-4 ">
          <div className="bg-white  flex flex-col py-2 px-3  shadow-lg w-auto dark:text-white dark:bg-black  border dark:border-white/20">
            <h2 className="text-md font-roboto ">Dimensions</h2>
            <p className="text-[14px] text-gray-400">
              Set the dimensions for the layer.
            </p>
            <div className="flex gap-4 items-center py-2">
              <label className=" text-[15px] font-roboto ">Width</label>
              <div className="pl-[41px]">
                <input
                  type="text"
                  className=" border rounded-sm pl-2 dark:bg-black placeholder:text-black outline-none dark:border-white/10 dark:placeholder:text-white"
                  placeholder="50%"
                />
              </div>
            </div>

            <div className="flex gap-4 items-center py-2">
              <label className="text-[15px] font-roboto ">Max Width</label>
              <div className="pl-[5px]">
                <input
                  type="text"
                  className=" border rounded-sm pl-2 dark:bg-black placeholder:text-black dark:border-white/10 dark:placeholder:text-white"
                  placeholder="200%"
                />
              </div>
            </div>

            <div className="flex gap-4 items-center py-2">
              <label className="text-[15px] font-roboto">Height</label>
              <div className="pl-[35px]">
                <input
                  type="text"
                  className=" border rounded-sm pl-2 dark:bg-black placeholder:text-black dark:border-white/10 dark:placeholder:text-white"
                  placeholder="200px"
                />
              </div>
            </div>

            <div className="flex gap-4 items-center py-2">
              <label className=" text-[15px] font-roboto">Max Height</label>
              <input
                type="text"
                className=" border rounded-sm pl-2 dark:bg-black placeholder:text-black dark:border-white/10 dark:placeholder:text-white"
                placeholder="none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
    
    `,
    Component: Popover,
  },

  {
    Name: "Progress",
    slug: "progress",
    text: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    previewCode: `
import React, { useEffect, useState } from "react";

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
          className={\`rounded-lg h-3 bg-black dark:bg-white transition-all duration-500\`}
          style={{ width: \`\${progress}%\` }}
        />
      </div>
    </>
  );
}
    
    `,
    Component: Progress,
  },
  {
    Name: "Radio Group",
    slug: "radio-group",
    text: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
    previewCode: `
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
    
    `,
    Component: Radiogroup,
  },
  {
    Name: "Resizable",
    slug: "resizable",
    text: "Accessible resizable panel groups and layouts with keyboard support.",
    previewCode: `
import React from "react";

export default function Resizable() {
  return (
    <>
      <div className="w-[600px] h-48 grid grid-cols-2 my-44">
        <div className="border text-center row-span-2 px-3 py-7 flex justify-center items-center dark:text-white">
          One
        </div>
        <div className="border px-3 flex justify-center items-center dark:text-white">
          Two
        </div>
        <div className="border px-3 py-7 flex justify-center items-center dark:text-white">
          Three
        </div>
      </div>
    </>
  );
}
    
    `,
    Component: Resizable,
  },
  {
    Name: "Form",
    slug: "form",
    text: "Renders an accessible label associated with controls.",
    previewCode: `
import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [submittedUsername, setSubmittedUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
    if (e.target.value.length >= 2) {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length < 2) {
      setError("Username must be at least 2 characters.");
      return;
    }

    setSubmittedUsername(username);
    setShowToast(true);
    setUsername("");

    setTimeout(() => {
      setShowToast(false);
      setSubmittedUsername("");
    }, 6000);
  };

  return (
    <div className="my-44 ">
      <form onSubmit={handleSubmit}>
        <label
          className={\`block mb-2 text-sm font-medium \${
            error ? "text-red-500" : "text-gray-700 dark:text-white "
          }\`}
        >
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleChange}
          className=" w-[230px] md:w-[380px]  px-2 py-1 border dark:border-white/15 outline-none dark:bg-black rounded-md"
          placeholder="Shadcn"
        />
        <p className="text-[13px] font-raleway dark:text-white/70">
          This is your public display name.
        </p>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="mt-4 w-[70px] md:w-[80px] bg-black dark:bg-white dark:text-black text-white py-1 md:py-[6px] rounded-md hover:bg-black/80"
        >
          Submit
        </button>
      </form>

      {showToast && (
        <div
          className={\`fixed flex items-center z-50 border dark:border-white/40  bg-white dark:bg-black dark:text-white text-black px-4 py-5 rounded-md shadow-lg transition-all duration-300 \${
            window.innerWidth <= 640
              ? "top-5 left-1/2 transform -translate-x-1/2"
              : "bottom-5 right-5"
          }\`}
          style={{
            top: window.innerWidth <= 640 ? "20px" : "auto",
            bottom: window.innerWidth > 640 ? "20px" : "auto",
            right: window.innerWidth > 640 ? "20px" : "auto",
            left: window.innerWidth <= 640 ? "50%" : "auto",
            transform: window.innerWidth <= 640 ? "translateX(-50%)" : "none",
          }}
        >
          Username: {submittedUsername}
        </div>
      )}
    </div>
  );
};

export default Form;
    
    `,
    Component: Form,
  },

  {
    Name: "Scroll-area",
    slug: "scroll-area",
    text: "Augments native scroll functionality for custom, cross-browser styling.",
    previewCode: `
import React from "react";

export default function Scrollarea() {
 const detail = [
    "components", "accordion", "alert",
    "alert-dialog", "aspect-ratio", "avatar",
    "badge", "breadcrumb", "button",
    "calendar", "card", "carousel",
    "chart", "checkbox", "collapsible",
    "combobox", "command", "context-menu",
    "data-table", "date-picker", "dialog",
    "drawer", "dropdown-menu", "form",
    "hover-card", "input", "input-otp",
    "label", "menubar", "navigation-menu",
    "pagination", "popover", "progress",
    "radio-group", "resizable", "scroll-area",
    "select", "separator", "sheet",
    "skeleton", "slider", "sonner",
    "switch", "table", "tabs",
    "textarea", "toast", "toggle",
    "toggle-group", "tooltip",
  ];

  return (
    <div className=" h-72 my-14 w-52 overflow-auto scrollbar-thin scrollbar-thumb-black/20 scrollbar-track-black/10 hover:scrollbar-thumb-gray-300 dark:scrollbar-thumb-[#2e2e2e] dark:scrollbar-track-[#121212] dark:hover:scrollbar-thumb-[#505050]">
      {detail.map((items, index) => (
        <ul key={index} className="w-full dark:text-white">
          <li className="border-b dark:border-white/10 w-full py-2 text-gray-600">
            {items}
          </li>
        </ul>
      ))}
    </div>
  );
}    
    `,
    Component: Scrollarea,
  },
  {
    Name: "Select",
    slug: "select",
    text: "Displays a list of options for the user to pick from—triggered by a button.",
    previewCode: `
import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
export default function Select() {
  const options = ["Apple", "Banana", "Mango", "Pine Apple"];
  const [isopen, setisopen] = useState(false);
  const [selectvalue, setselectvalue] = useState("Select fruit");

  const handleoption = (options) => {
    setselectvalue(options);
    setisopen(false);
  };

  const handleopen = () => {
    setisopen(!isopen);
  };

  return (
    <>
      <div className=" relative w-46 py-44 ">
        <div
          className=" px-5 py-2 border dark:border-white/20 rounded-md flex items-center gap-20 cursor-pointer dark:text-white"
          onClick={handleopen}
        >
          <div className="text-[14px] font-roboto">{selectvalue}</div>
          <div>
            <SlArrowDown className="text-[12px]" />
          </div>
        </div>

        {isopen && (
          <div className="absolute w-46  z-10 left-0 right-0 border dark:border-white/20 border-gray-300 py-2 dark:text-white">
            {options.map((option, index) => (
              <div
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-400 text-[14px]"
                onClick={() => handleoption(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
    
    `,
    Component: Select,
  },
  {
    Name: "Separator",
    slug: "separator",
    text: "Visually or semantically separates content.",
    previewCode: `
import React from "react";

export default function Separator() {
  return (
    <div className="flex flex-col py-44 ">
      <div className="border-b dark:border-white/20 pb-4 dark:text-white">
        <p className="text-[15px]">Radix Primitives</p>
        <p className="text-[14px] text-gray-400/90 dark:text-gray-400">
          An open-source UI component library.
        </p>
      </div>

      <div className="flex mt-2 dark:text-white">
        <p className="border-r-2 pr-2">Blog</p>
        <p className="pl-2 border-r-2 pr-2">Source</p>
        <p className="pl-5">Docs</p>
      </div>
    </div>
  );
}
    
    `,
    Component: Separator,
  },
  {
    Name: "Sheet",
    slug: "sheet",
    text: "Extends the Dialog component to display content that complements the main content of the screen.",
    previewCode: `
"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Alertdialog() {
  const [openit, setOpenit] = useState(false);

  const isopen = () => setOpenit(true);
  const isclose = () => setOpenit(false);

  return (
    <>
      <div className="w-full flex justify-center items-center py-44">
        <Link
          href="#"
          onClick={isopen}
          className="mx-auto border dark:border-white/20 text-[13px] font-roboto px-3 py-3 rounded-md dark:text-white dark:hover:bg-white/10 hover:bg-gray-100"
        >
          open
        </Link>
      </div>

      {openit && (
        <div className="fixed w-full inset-y-0 top-0 flex justify-end right-0 bg-black dark:bg-black dark:bg-opacity-50 bg-opacity-50 z-50">
          <div className="sheet bg-white p-6 rounded-md shadow-md w-[286px] md:w-[450px] lg:w-[450px] dark:bg-black dark:border-white/20">
            <h2 className="text-lg font-roboto text-center md:text-left lg:text-left dark:text-white">
              Edit Profile
            </h2>
            <p className="text-[15px] text-gray-500 dark:text-white/50">
              Make changes to your profile here. Click save when you are done.
            </p>
            <div>
              <div className="flex gap-2 py-3 justify-center md:justify-end lg:justify-end">
                <p className="text-[14px] dark:text-white">Name</p>
                <input
                  className="border dark:border-white/20 rounded-sm pl-2 dark:bg-black dark:placeholder:text-white"
                  type="text"
                  placeholder="Name..."
                />
              </div>
              <div className="flex gap-2 py-3 justify-center md:justify-end lg:justify-end">
                <p className="text-[14px] dark:text-white">Username</p>
                <input
                  className="border dark:border-white/20 rounded-sm pl-2 dark:bg-black dark:placeholder:text-white"
                  type="text"
                  placeholder="Username..."
                />
              </div>
            </div>
            <div className="flex flex-wrap-reverse md:justify-end mt-4 gap-2 w-full">
              <button
                onClick={isclose}
                className="border px-3 py-1 rounded-md bg-black text-white dark:bg-white dark:text-black"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
    
    `,
    Component: Sheet,
  },
  {
    Name: "Slider",
    slug: "slider",
    text: "An input where the user selects a value from within a given range.",
    previewCode: `
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
            background: \`linear-gradient(to right, #5F9FD8 0%, #5F9FD8 \${value}%, #e4eeed \${value}%, #e4eeed 100%)\`,
            appearance: "none",
          }}
        />
        <div style={{ left: \`calc(\${value}% - 12.5px)\` }} />
      </div>
      <div className="text-lg font-semibold mt-4">{value}</div>
    </div>
  );
}
    
    `,
    Component: Slider,
  },
  {
    Name: "Tabs",
    slug: "tabs",
    text: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    previewCode: `
"use client";
import React, { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <>
      <div className=" w-400px dark:text-white px-5 sm:py-10 md:py-16 lg:py-24 pb-3">
        <div className="flex justify-between items-center rounded-sm  bg-black/5 dark:bg-white/10 h-10">
          <button
            className={\`  ml-3 px-[50px] rounded-lg h-8 \${
              activeTab === "account" ? "bg-white/80 dark:bg-black" : "  "
            }\`}
            onClick={() => setActiveTab("account")}
          >
            Account
          </button>
          <button
            className={\` mr-3 px-[50px] rounded-lg h-8 \${
              activeTab === "password" ? "bg-white/80 dark:bg-black" : " "
            }\`}
            onClick={() => setActiveTab("password")}
          >
            Password
          </button>
        </div>
        <div>
          {activeTab === "account" ? (
            <div className=" border dark:border-white/20 rounded-sm mt-2  ">
              <div className="Tabs bg-white dark:bg-black  px-7 py-6 rounded-md shadow-md max-w-[400px]  ">
                <h2 className="text-lg font-roboto text-center md:text-left  lg:text-left dark:text-white">
                  Account
                </h2>
                <p className="text-[15px] text-gray-500 dark:text-white/50">
                  Make changes to your profile here. Click save when you are
                  done.
                </p>

                <div>
                  <div className=" py-3 ">
                    <p className=" text-md">Name</p>
                    <input
                      className=" border dark:border-white/20 rounded-sm pl-2 w-full dark:bg-black"
                      type="text"
                      placeholder="Name.."
                    />
                  </div>
                  <div>
                    <p className=" text-md">Username</p>
                    <input
                      className=" border dark:border-white/20 rounded-sm pl-2 w-full dark:bg-black"
                      type="text"
                      placeholder="Username.."
                    />
                  </div>
                </div>

                <div className="flex justify-start mt-4">
                  <button className=" border dark:border-white/20 px-3 py-1 text-white rounded-md bg-black">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className=" border dark:border-white/20 rounded-sm mt-2  ">
              <div className="Tabs bg-white dark:bg-black  px-7 py-6 rounded-md shadow-md max-w-[400px]  ">
                <h2 className="text-lg font-roboto text-center md:text-left  lg:text-left dark:text-white">
                  Password
                </h2>
                <p className="text-[15px] text-gray-500 dark:text-white/50">
                  Change your password here. After saving you'll be logged out.
                </p>

                <div>
                  <div className=" py-3 ">
                    <p className=" text-md">Password</p>
                    <input
                      className=" border dark:border-white/20 rounded-sm pl-2 w-full dark:bg-black"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <p className=" text-md">New Password</p>
                    <input
                      className=" border dark:border-white/20 rounded-sm pl-2 w-full dark:bg-black"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="flex justify-start mt-4">
                  <button className=" border dark:border-white/20 px-3 py-1 text-white rounded-md bg-black">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
    
    `,
    Component: Tabs,
  },

  {
    Name: "Skeleton",
    slug: "skeleton",
    text: "A control that allows the user to toggle between checked and not checked.",
    previewCode: `
"use client"    
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
    
    `,
    Component: Skeleton,
  },
  {
    Name: "Toast",
    slug: "toast",
    text: "A control that allows the user to toggle between checked and not checked.",
    previewCode: `
"use client";
import React, { useState, useEffect } from "react";

function Toast() {
  const [toasts, setToasts] = useState([]);
  const [toastId, setToastId] = useState(1);

  const handleShowToast = () => {
    if (toasts.length > 0) {
      setToasts([]);
    }

    const newToast = {
      id: toastId,
      title: "Event Added",
      message: "You have successfully added an event.",
    };

    setToasts([newToast]);
    setToastId((prevId) => prevId + 1);
  };

  const handleUndo = () => {
    console.log("Undo action performed!");
    setToasts([]);
  };

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  return (
    <div className="relative">
      <div className="my-44 flex items-center justify-center">
        <div className="border px-2 py-1 rounded-md">
          <button
            onClick={handleShowToast}
            className="px-2 py-1 bg-white text-black rounded-md"
          >
            Show Toast
          </button>
        </div>
      </div>

      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="fixed flex justify-between items-center z-50 p-3 bg-white dark:bg-black text-black dark:text-white border dark:border-white/15 rounded-lg shadow-lg transition-all duration-300 w-[90vw] max-w-[350px] h-[100px] toast"
          style={{
            top: window.innerWidth <= 640 ? "20px" : "auto",
            bottom: window.innerWidth > 640 ? "20px" : "auto",
            right: window.innerWidth > 640 ? "20px" : "auto",
            left: window.innerWidth <= 640 ? "50%" : "auto",
            transform: window.innerWidth <= 640 ? "translateX(-50%)" : "none",
          }}
        >
          <div className="flex flex-col">
            <h4 className="font-bold text-sm">{toast.title}</h4>
            <p className="text-sm">{toast.message}</p>
          </div>
          <div>
            <button
              onClick={handleUndo}
              className="mt-2 px-2 py-1 bg-black text-[12px] text-white rounded-md"
            >
              Undo
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Toast;
    
    `,
    Component: Toast,
  },

  {
    Name: "Switch",
    slug: "switch",
    text: "A control that allows the user to toggle between checked and not checked.",
    previewCode: `
import React, { useState } from "react";

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-2 dark:text-white py-44">
      <div
        onClick={toggleSwitch}
        className={\`relative inline-flex items-center w-8 h-5 bg-gray-300 rounded-full cursor-pointer transition-colors duration-300 
          \${
            isOn ? "bg-black/100 dark:bg-white" : "bg-gray-300 dark:bg-white/30"
          }\`}
      >
        <span
          className={\`absolute left-0 w-4 h-4 bg-white dark:bg-black rounded-full shadow-md transition-transform duration-300 
            \${isOn ? "translate-x-full" : "translate-x-0"}\`}
        />
      </div>
      Airplane Mode
    </div>
  );
};

export default Switch;
    
    `,
    Component: Switch,
  },
  {
    Name: "Textarea",
    slug: "textarea",
    text: "Displays a form textarea or a component that looks like a textarea.",
    previewCode: `
import React from 'react'

export default function Textarea() {
  return (
     <div className='w-full py-44'>
    <div className='w-full px-5   '>
      <textarea className=' w-full border dark:border-white/20 pl-3 overflow-hidden dark:bg-black dark:text-white dark:placeholder:text-white/70 ' placeholder='Type your message here' >Type your message here</textarea>
    </div>
    </div>
  )
}
    
    `,
    Component: Textarea,
  },
  {
    Name: "Toggle",
    slug: "toggle",
    text: "A two-state button that can be either on or off.",
    previewCode: `
import React from 'react'

export default function p() {
  return (
    <div className='px-2  hover:bg-slate-200  hover:text-slate-400 cursor-pointer dark:text-white dark:hover:bg-gray-400 my-44 '>
        <p className='dark:hover:opacity-75'>B</p>
    </div>
  )
}    
    `,
    Component: Toggle,
  },
  {
    Name: "Toggle Group",
    slug: "toggle-group",
    text: "A set of two-state buttons that can be toggled on or off.",
    previewCode: `
import React from 'react'

export default function Togglegroup() {
  return (
    <div className='flex gap-3 dark:text-white py-44 '>
    <p className='px-2  hover:bg-slate-200 dark:hover:bg-gray-300  hover:text-slate-400 italic  cursor-pointer'>B</p>
    <p className='px-2  hover:bg-slate-200 dark:hover:bg-gray-300  hover:text-slate-400 italic cursor-pointer'>I</p>
    <p className='px-2  hover:bg-slate-200 underline dark:hover:bg-gray-300 hover:text-slate-400 italic cursor-pointer'>U</p>
     </div>
  )
}
    
    `,
    Component: Togglegroup,
  },
  {
    Name: "Tooltip",
    slug: "tooltip",
    text: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    previewCode: `
import React from "react";
export default function Hovercard() {
  return (
    <>
      <div className="relative group my-44">
        <div className=" cursor-pointer dark:text-white border dark:border-white/20 px-3 py-2 font-roboto text-[14px] rounded-md">
          <button type="button" className="">
            Hover
          </button>
        </div>

        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2  w-48 py-2  bg-white dark:bg-black border dark:border-white/20 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-center text-[13px] dark:text-white/70">
            {" "}
            Content about Library
          </p>
        </div>
      </div>
    </>
  );
}
    
    `,
    Component: Tooltip,
  },
  {
    Name: "Sonner",
    slug: "sonner",
    text: "An opinionated toast component for React.",
    previewCode: `
import React, { useState, useEffect } from "react";

function Sooner() {
  const [toasts, setToasts] = useState([]);
  const [toastId, setToastId] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const showNewToast = () => {
    const newToast = {
      id: toastId,
      Title: "Credit Edit",
      Description: "Event has been created. Why event created?",
    };

    setToastId((prevId) => prevId + 1);
    if (toasts.length >= 3) {
      setToasts((prevToasts) => [...prevToasts.slice(1), newToast]);
    } else {
      setToasts((prevToasts) => [...prevToasts, newToast]);
    }
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  useEffect(() => {
    if (toasts.length === 0) return;

    const timer = setTimeout(() => {
      removeToast(toasts[0].id);
    }, 50000);

    return () => clearTimeout(timer);
  }, [toasts]);

  return (
    <div className="my-44 flex items-center justify-center ">
      <div className="dark:bg-black dark:text-white border rounded-md px-2 py-1 dark:border-white/15">
        <button onClick={showNewToast} className="text-[14px]">
          Show Toast
        </button>
      </div>
      <div
        className={\`fixed bottom-0 z-50 right-5 mb-4 transition-all duration-500 \${
          isHovered ? "space-y-2" : "space-y-[-90px]"
        }\`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {toasts.map((toast, index) => (
          <div
            key={toast.id}
            className="flex mx-2 md:right-5 lg:right-5 z-50 p-4 border dark:bg-black dark:text-white dark:border-white/15 bg-white text-black rounded-lg shadow-lg animate-fadeInUp"
          >
            <div className="flex flex-col mr-4 ">
              <div className="font-bold">{toast.Title}</div>
              <p className="text-[12px]">{toast.Description}</p>
              <div>{toast.id}</div>
            </div>
            <div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-white dark:bg-white dark:text-black bg-black px-2 py-1 text-[11px] rounded-md hover:text-gray-300"
              >
                Undo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sooner;
    
    `,
    Component: Sooner,
  },
  {
    Name: "Table",
    slug: "table",
    text: "A responsive table component.",
    previewCode: `
import React from "react";

export default function Table() {
    const bankdetail = [
        { Inovice: "inovice1", Status: "pending", Method: "Paypal", Salary: "25.00" },
        { Inovice: "inovice2", Status: "approved", Method: "jazzcash", Salary: "29.00" },
        { Inovice: "inovice3", Status: "Detail", Method: "Easypaisa", Salary: "253.00" },
        { Inovice: "inovice5", Status: "pending", Method: "Neyapay", Salary: "25.00" },
        { Inovice: "inovice6", Status: "Approved", Method: "Paypal", Salary: "125.00" },
        { Inovice: "inovice7", Status: "Waiting", Method: "Paypal", Salary: "25.00" },
        { Inovice: "Total", Salary: "$2500.00" },
      ];

  return (
    <div className="w-full md:mx-9 lg:mx-9 overflow-auto p-4">
      <div className="grid grid-cols-4 gap-10 border-b dark:border-white/10 pb-3 text-gray-400 dark:text-white/50">
        <h1 className="whitespace-nowrap">Invoice</h1>
        <h1 className="whitespace-nowrap">Status</h1>
        <h1 className="whitespace-nowrap">Method</h1>
        <h1 className="whitespace-nowrap text-right">Salary</h1>
      </div>

      {bankdetail.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-4 gap-10 border-b dark:border-white/10 py-3 text-gray-700 dark:text-white/80"
        >
          <h1 className="whitespace-nowrap">{item.Inovice}</h1>
          <h1 className="whitespace-nowrap">{item.Status}</h1>
          <h1 className="whitespace-nowrap">{item.Method}</h1>
          <h1 className="whitespace-nowrap text-right">{item.Salary}</h1>
        </div>
      ))}
      <div className="w-full text-center py-4 font-roboto text-black/60 dark:text-white/50">
        <p className="text-center font-raleway">
          A list of your recent invoices.
        </p>
      </div>
    </div>
  );
}
    
    
    `,
    Component: Table,
  },
];

export default components;
