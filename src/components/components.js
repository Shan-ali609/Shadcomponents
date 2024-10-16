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
              className={transform transition-transform duration-200 text-[13px] dark:text-white /{
                activeIndex === index ? "rotate-180" : ""
              }}
            />
          </div>
          {activeIndex === index && (
            <div
              className={px-4 py-2 bg-gray-50 dark:bg-black dark:text-white /{
                activeIndex === index ? "open" : ""
              }}
            >
              <p className="text-[14px]">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
        `,
    Component: Accordion,
  },
  {
    Name: "Alert",
    slug: "alert",
    text: "Displays a callout for user attention.",
    previewCode: `
        <div className="w-full py-40">
          <div className="w-auto border dark:border-white/20 pl-2  py-2 mx-9   rounded-md">
            <div className="flex items-center">
              <RxRocket className="text-md sm:text-md dark:text-white/90" />
              <h4 className="pl-[2px] sm:pl-3 text-md dark:text-white/90">
                Heads up!
              </h4>
            </div>
            <p className="pl-5 sm:pl-6 text-[14px] text-black/90 dark:text-white/70 text-md">
              You can add components to your app using the CLI.
            </p>
          </div>
        </div>`,
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
      daysArray.push(<div key={empty-/{i}} className="p-2"></div>);
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
import React, { useState } from "react";
import Mybutton from "../pagecomp/Mybutton";

export default function Collapsible() {
  const [openit, setOpenit] = useState(false);
  const show = () => {
    setOpenit(!openit);
  };

  return (
    <>
      <div>
        <div className=" h-[450px] flex flex-col justify-center items-center px-4  dark:text-white ">
          <p className="text-sm flex font-bold">
            @peduarte starred 3 repositories{" "}
            <div onClick={show}>
              {" "}
              <Mybutton />{" "}
            </div>
          </p>

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
    Name: "Context Menu",
    slug: "context-menu",
    text: "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
    Component: Contextmenu,
  },
  {
    Name: "Combobox",
    slug: "combobox",
    text: "Autocomplete input and command palette with a list of suggestions.",
    Component: Combobox,
    list: ["Select framework", "Astro", "Remix", "Next.js", "Nust.js"],
  },
  {
    Name: "Command",
    slug: "command",
    text: "Fast, composable, unstyled command menu for React.",
    Component: Command,
  },
  {
    Name: "Dialog",
    slug: "dialog",
    text: "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.",
    Component: Dialog,
  },
  {
    Name: "Drawer",
    slug: "drawer",
    text: "A drawer component for React.",
    Component: Drawer,
  },
  {
    Name: "Data Table",
    slug: "data-table",
    text: "Powerful table and datagrids built using TanStack Table.",
    Component: Datatable,
  },
  {
    Name: "Date-Picker",
    slug: "date-picker",
    text: "A date picker component with range and presets.",
    Component: DatePicker,
  },
  {
    Name: "Dropdown-Menu",
    slug: "dropdown-menu",
    text: "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
    Component: Dropmenu,
  },
  {
    Name: "Hover card",
    slug: "hover-card",
    text: "For sighted users to preview content available behind a link.",
    Component: Hovercard,
  },
  {
    Name: "Input",
    slug: "input",
    text: "Displays a form input field or a component that looks like an input field.",
    Component: Input,
  },
  {
    Name: "input-OTP",
    slug: "input-otp",
    text: "Accessible one-time password component with copy paste functionality.",
    Component: OTPInput,
  },
  {
    Name: "Label",
    slug: "label",
    text: "Renders an accessible label associated with controls.",
    Component: Label,
  },
  {
    Name: "Form",
    slug: "form",
    text: "Renders an accessible label associated with controls.",
    Component: Form,
  },
  {
    Name: "Menubar",
    slug: "menubar",
    text: "A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.",
    Component: Menubar,
  },
  {
    Name: "Navigation Menu",
    slug: "navigation-menu",
    text: "A collection of links for navigating websites.",
    Component: Navigationmenu,
  },
  {
    Name: "Pagination",
    slug: "pagination",
    text: "Pagination with page navigation, next and previous links.",
    Component: Pagination,
  },
  {
    Name: "Popover",
    slug: "popover",
    text: "Displays rich content in a portal, triggered by a button.",
    Component: Popover,
  },
  {
    Name: "Progress",
    slug: "progress",
    text: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    Component: Progress,
  },
  {
    Name: "Radio Group",
    slug: "radio-group",
    text: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
    Component: Radiogroup,
  },
  {
    Name: "Resizable",
    slug: "resizable",
    text: "Accessible resizable panel groups and layouts with keyboard support.",
    Component: Resizable,
  },
  {
    Name: "Scroll-area",
    slug: "scroll-area",
    text: "Augments native scroll functionality for custom, cross-browser styling.",
    Component: Scrollarea,
  },
  {
    Name: "Select",
    slug: "select",
    text: "Displays a list of options for the user to pick from—triggered by a button.",
    Component: Select,
  },
  {
    Name: "Separator",
    slug: "separator",
    text: "Visually or semantically separates content.",
    Component: Separator,
  },
  {
    Name: "Sheet",
    slug: "sheet",
    text: "Extends the Dialog component to display content that complements the main content of the screen.",
    Component: Sheet,
  },
  {
    Name: "Slider",
    slug: "slider",
    text: "An input where the user selects a value from within a given range.",
    Component: Slider,
  },
  {
    Name: "Tabs",
    slug: "tabs",
    text: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    Component: Tabs,
  },

  {
    Name: "Skeleton",
    slug: "skeleton",
    text: "A control that allows the user to toggle between checked and not checked.",
    Component: Skeleton,
  },
  {
    Name: "Toast",
    slug: "toast",
    text: "A control that allows the user to toggle between checked and not checked.",
    Component: Toast,
  },

  {
    Name: "Switch",
    slug: "switch",
    text: "A control that allows the user to toggle between checked and not checked.",
    Component: Switch,
  },
  {
    Name: "Textarea",
    slug: "textarea",
    text: "Displays a form textarea or a component that looks like a textarea.",
    Component: Textarea,
  },
  {
    Name: "Toggle",
    slug: "toggle",
    text: "A two-state button that can be either on or off.",
    Component: Toggle,
  },
  {
    Name: "Toggle Group",
    slug: "toggle-group",
    text: "A set of two-state buttons that can be toggled on or off.",
    Component: Togglegroup,
  },
  {
    Name: "Tooltip",
    slug: "tooltip",
    text: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    Component: Tooltip,
  },
  {
    Name: "Sonner",
    slug: "sonner",
    text: "An opinionated toast component for React.",
    Component: Sooner,
  },
  {
    Name: "Table",
    slug: "table",
    text: "A responsive table component.",
    Component: Table,
  },
];

export default components;
