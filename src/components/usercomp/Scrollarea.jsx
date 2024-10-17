import React from "react";

export default function Scrollarea() {
  const detail = [
    "components",
    "accordion",
    "alert",
    "alert-dialog",
    "aspect-ratio",
    "avatar",
    "badge",
    "breadcrumb",
    "button",
    "calendar",
    "card",
    "carousel",
    "chart",
    "checkbox",
    "collapsible",
    "combobox",
    "command",
    "context-menu",
    "data-table",
    "date-picker",
    "dialog",
    "drawer",
    "dropdown-menu",
    "form",
    "hover-card",
    "input",
    "input-otp",
    "label",
    "menubar",
    "navigation-menu",
    "pagination",
    "popover",
    "progress",
    "radio-group",
    "resizable",
    "scroll-area",
    "select",
    "separator",
    "sheet",
    "skeleton",
    "slider",
    "sonner",
    "switch",
    "table",
    "tabs",
    "textarea",
    "toast",
    "toggle",
    "toggle-group",
    "tooltip",
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
