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



const components = [
    {
        Name : 'Accordian',
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
        text : 'Powerful table and datagrids built using TanStack Table.',
        Component: DatePicker
    },
    {
        Name : 'Dropdown-Menu',
        slug : 'dropdown-menu',
        text : 'Powerful table and datagrids built using TanStack Table.',
        Component: Dropmenu
    },
    {
        Name : 'Hover card',
        slug : 'hover-card',
        text : 'Powerful table and datagrids built using TanStack Table.',
        Component: Hovercard
    },
    {
        Name : 'Input',
        slug : 'input',
        text : 'Powerful table and datagrids built using TanStack Table.',
        Component: Input
    },
    {
        Name : 'input-OTP',
        slug : 'input-otp',
        text : 'Powerful table and datagrids built using TanStack Table.',
        Component: OTPInput
    },
    {
        Name : 'Label',
        slug : 'label',
        text : 'Powerful table and datagrids built using TanStack Table.',
        Component: Label
    },
    {
        Name : 'Menubar',
        slug : 'menubar',
        text : 'Powerful table and datagrids built using TanStack Table.',
        Component: Menubar
    },
    {
        Name : 'Navigation Menu',
        slug : 'navigation-menu',
        text : 'Powerful table and datagrids built using TanStack Table.',
        Component: Navigationmenu
    },
    {

        Name : 'Pagination',
        slug : 'pagination',
        text : 'Powerful table and datagrids built using TanStack Table.',
        Component: Pagination
    },
    {
        Name : 'Popover',
        slug : 'popover',
        text : 'Powerful table and datagrids built using TanStack Table.',
        Component: Popover
    },
    {

        Name : 'Progress',
        slug : 'progress',
        text : 'Powerful table and datagrids built using TanStack Table.',
        Component: Progress
    },  
      {
        Name : 'Radio Group',
        slug : 'radio-group',
        text : 'Powerful table and datagrids built using TanStack Table.',
        Component: Radiogroup
    },  
    {
        Name : 'Resizable',
        slug : 'resizable',
        text : 'Powerful table and datagrids built using TanStack Table.',
        Component: Resizable
    }, 
    {
        Name : 'Scroll-area',
        slug : 'scroll-area',
        text : 'Powerful table and datagrids built using TanStack Table.',
        Component: Scrollarea
    },  
    {
        Name : 'Select',
        slug : 'select',
        text : 'Powerful table and datagrids built using TanStack Table.',
        Component: Select
    }, 
    {
        Name : 'Separator',
        slug : 'separator',
        text : 'Powerful table and datagrids built using TanStack Table.',
        Component: Separator
    },  
    
];


export default components;