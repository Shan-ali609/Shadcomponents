
"use client"
import React , {useState}from "react";
import '@/components/leftcomp/leftside.css';
import Link from "next/link";

export default function Leftside() {
  const [selectedid , setselectedid ] = useState(null);
  const detail = [
    { id: 'components', name: 'Components' },
    { id: 'accordion', name: 'Accordion' },
    { id: 'alert', name: 'Alert' },
    { id: 'alert-dialog', name: 'Alert Dialog' },
    { id: 'aspect-ratio', name: 'Aspect Ratio' },
    { id: 'avatar', name: 'Avatar' },
    { id: 'badge', name: 'Badge' },
    { id: 'breadcrumb', name: 'Breadcrumb' },
    { id: 'button', name: 'Button' },
    { id: 'calendar', name: 'Calendar' },
    { id: 'card', name: 'Card' },
    { id: 'carousel', name: 'Carousel' },
    { id: 'chart', name: 'Chart' },
    { id: 'checkbox', name: 'Checkbox' },
    { id: 'collapsible', name: 'Collapsible' },
    { id: 'combobox', name: 'Combobox' },
    { id: 'command', name: 'Command' },
    { id: 'context-menu', name: 'Context Menu' },
    { id: 'data-table', name: 'Data Table' },
    { id: 'date-picker', name: 'Date Picker' },
    { id: 'dialog', name: 'Dialog' },
    { id: 'drawer', name: 'Drawer' },
    { id: 'dropdown-menu', name: 'Dropdown Menu' },
    { id: 'form', name: 'Form' },
    { id: 'hover-card', name: 'Hover Card' },
    { id: 'input', name: 'Input' },
    { id: 'input-otp', name: 'Input OTP' },
    { id: 'label', name: 'Label' },
    { id: 'menubar', name: 'Menubar' },
    { id: 'navigation-menu', name: 'Navigation Menu' },
    { id: 'pagination', name: 'Pagination' },
    { id: 'popover', name: 'Popover' },
    { id: 'progress', name: 'Progress' },
    { id: 'radio-group', name: 'Radio Group' },
    { id: 'resizable', name: 'Resizable' },
    { id: 'scroll-area', name: 'Scroll Area' },
    { id: 'select', name: 'Select' },
    { id: 'separator', name: 'Separator' },
    { id: 'sheet', name: 'Sheet' },
    { id: 'skeleton', name: 'Skeleton' },
    { id: 'slider', name: 'Slider' },
    { id: 'sonner', name: 'Sonner' },
    { id: 'switch', name: 'Switch' },
    { id: 'table', name: 'Table' },
    { id: 'tabs', name: 'Tabs' },
    { id: 'textarea', name: 'Textarea' },
    { id: 'toast', name: 'Toast' },
    { id: 'toggle', name: 'Toggle' },
    { id: 'toggle-group', name: 'Toggle Group' },
    { id: 'tooltip', name: 'Tooltip' },
  ];

  return (
    <div className="left-container">
      <ul className="left-ul scroll-container">
        {detail.map((data) => (
          <li key={data.id} 
          onClick={()=>setselectedid(data.id)}
          className= {`left-li  ${selectedid === data.id ? "shan" : ""}`}
          >
            <Link className="left-a" href={`/component/${data.id}` }>
              {data.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

