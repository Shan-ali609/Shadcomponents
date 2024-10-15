"use client"
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
import Combobox from "./usercomp/Combobox"
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

import Form from "./usercomp/Form"


const components = [
    {
        Name : 'Accordion',
        slug : 'accordion',
        text : 'A vertically stacked set of interactive headings that each reveal a section of content.',
        Component: Accordion,

    },
    {
        Name : 'Alert',
        slug : 'alert',
        text : 'Displays a callout for user attention.',
        Component: Alert
    },
    {
        Name : 'Alert Dialog',
        slug : 'alert-dialog',
        text : 'A modal dialog that interrupts the user with important content and expects a response.',
        Component: Alertdialog
    },
    {
        Name : 'Aspect ratio',
        slug : 'aspect-ratio',
        text : 'Displays content within a desired ratio.',
        Component: Aspectratio
    },
    {
        Name : 'Avater',
        slug : 'avatar',
        text : 'An image element with a fallback for representing the user.',
        Component: Avater
    },
    {
        Name : 'Badge',
        slug : 'badge',
        text : 'Displays a badge or a component that looks like a badge.',
        Component: Badge
    },
    {
        Name : 'Breadcrumb',
        slug : 'breadcrumb',
        text : 'Displays the path to the current resource using a hierarchy of links.',
        Component: Breadcrumb
    },
    {
        Name : 'Button',
        slug : 'button',
        text : 'Displays a button or a component that looks like a button.',
        Component: Button
    },
    {
        Name : 'Calendar',
        slug : 'calendar',
        text : 'A date field component that allows users to enter and edit date.',
        Component: Mycalendar
    },
    {
        Name : 'Card',
        slug : 'card',
        text : 'Displays a card with header, content, and footer.',
        Component: Card
    },
    {
        Name : 'Checkbox',
        slug : 'checkbox',
        text : 'A control that allows the user to toggle between checked and not checked.',
        Component: Checkbox
    },
    {
        Name : 'Carousal',
        slug : 'carousel',
        text : 'A carousel with motion and swipe built using Embla.',
        Component: Carousel
    },
    {
        Name : 'Collapsible',
        slug : 'collapsible',
        text : 'An interactive component which expands/collapses a panel.',
        Component: Collapsible
    },
    {
        Name : 'Context Menu',
        slug : 'context-menu',
        text : 'Displays a menu to the user — such as a set of actions or functions — triggered by a button.',
        Component: Contextmenu
    },
    {
        Name : 'Combobox',
        slug : 'combobox',
        text : 'Autocomplete input and command palette with a list of suggestions.',
        Component: Combobox,
        list: [ 'Select framework','Astro', 'Remix','Next.js','Nust.js'] ,
    },
    {
        Name : 'Command',
        slug : 'command',
        text : 'Fast, composable, unstyled command menu for React.',
        Component: Command
    },
    {
        Name : 'Dialog',
        slug : 'dialog',
        text : 'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.',
        Component: Dialog
    },
    {
        Name : 'Drawer',
        slug : 'drawer',
        text : 'A drawer component for React.',
        Component: Drawer
    },
    {
        Name : 'Data Table',
        slug : 'data-table',
        text : 'Powerful table and datagrids built using TanStack Table.',
        Component: Datatable
    },
    {
        Name : 'Date-Picker',
        slug : 'date-picker',
        text : 'A date picker component with range and presets.',
        Component: DatePicker
    },
    {
        Name : 'Dropdown-Menu',
        slug : 'dropdown-menu',
        text : 'Displays a menu to the user — such as a set of actions or functions — triggered by a button.',
        Component: Dropmenu
    },
    {
        Name : 'Hover card',
        slug : 'hover-card',
        text : 'For sighted users to preview content available behind a link.',
        Component: Hovercard
    },
    {
        Name : 'Input',
        slug : 'input',
        text : 'Displays a form input field or a component that looks like an input field.',
        Component: Input
    },
    {
        Name : 'input-OTP',
        slug : 'input-otp',
        text : 'Accessible one-time password component with copy paste functionality.',
        Component: OTPInput
    },
    {
        Name : 'Label',
        slug : 'label',
        text : 'Renders an accessible label associated with controls.',
        Component: Label
    },
    {
        Name : 'Form',
        slug : 'form',
        text : 'Renders an accessible label associated with controls.',
        Component: Form
    },
    {
        Name : 'Menubar',
        slug : 'menubar',
        text : 'A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.',
        Component: Menubar
    },
    {
        Name : 'Navigation Menu',
        slug : 'navigation-menu',
        text : 'A collection of links for navigating websites.',
        Component: Navigationmenu
    },
    {

        Name : 'Pagination',
        slug : 'pagination',
        text : 'Pagination with page navigation, next and previous links.',
        Component: Pagination
    },
    {
        Name : 'Popover',
        slug : 'popover',
        text : 'Displays rich content in a portal, triggered by a button.',
        Component: Popover
    },
    {

        Name : 'Progress',
        slug : 'progress',
        text : 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
        Component: Progress
    },  
      {
        Name : 'Radio Group',
        slug : 'radio-group',
        text : 'A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.',
        Component: Radiogroup
    },  
    {
        Name : 'Resizable',
        slug : 'resizable',
        text : 'Accessible resizable panel groups and layouts with keyboard support.',
        Component: Resizable
    }, 
    {
        Name : 'Scroll-area',
        slug : 'scroll-area',
        text : 'Augments native scroll functionality for custom, cross-browser styling.',
        Component: Scrollarea
    },  
    {
        Name : 'Select',
        slug : 'select',
        text : 'Displays a list of options for the user to pick from—triggered by a button.',
        Component: Select
    }, 
    {
        Name : 'Separator',
        slug : 'separator',
        text : 'Visually or semantically separates content.',
        Component: Separator
    },
    {
        Name : 'Sheet',
        slug : 'sheet',
        text : 'Extends the Dialog component to display content that complements the main content of the screen.',
        Component: Sheet
    },  
    {
        Name : 'Slider',
        slug : 'slider',
        text : 'An input where the user selects a value from within a given range.',
        Component: Slider
    },
    {
        Name : 'Tabs',
        slug : 'tabs',
        text : 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
        Component: Tabs
    }, 
       
    {
        Name : 'Skeleton',
        slug : 'skeleton',
        text : 'A control that allows the user to toggle between checked and not checked.',
        Component: Skeleton
    }, 
    {
        Name : 'Toast',
        slug : 'toast',
        text : 'A control that allows the user to toggle between checked and not checked.',
        Component: Toast
    }, 

    {
        Name : 'Switch',
        slug : 'switch',
        text : 'A control that allows the user to toggle between checked and not checked.',
        Component: Switch
    }, 
    {
        Name : 'Textarea',
        slug : 'textarea',
        text : 'Displays a form textarea or a component that looks like a textarea.',
        Component: Textarea
    }, 
    {
        Name : 'Toggle',
        slug : 'toggle',
        text : 'A two-state button that can be either on or off.',
        Component: Toggle
    }, 
    {
        Name : 'Toggle Group',
        slug : 'toggle-group',
        text : 'A set of two-state buttons that can be toggled on or off.',
        Component: Togglegroup
    }, 
    {
        Name : 'Tooltip',
        slug : 'tooltip',
        text : 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
        Component: Tooltip
    }, 
    {
        Name : 'Sonner',
        slug : 'sonner',
        text : 'An opinionated toast component for React.',
        Component: Sooner
    },
    {
        Name : 'Table',
        slug : 'table',
        text : 'A responsive table component.',
        Component: Table
    },     
    
];


export default components;