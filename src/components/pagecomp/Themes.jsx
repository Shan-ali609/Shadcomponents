import React from 'react'

export default function Themes({handleThemeChange}) {
  return (
    < >
          <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-black  shadow-lg rounded-md z-10">
                <ul className="">
                  <li
                    className="cursor-pointer text-[14px] hover:bg-gray-200 dark:hover:bg-white/10 dark:text-white px-4 py-1"
                    onClick={() => handleThemeChange('light')}
                  >
                    Light
                  </li>
                  <li
                    className="cursor-pointer text-[14px] hover:bg-gray-200 dark:hover:bg-white/10 dark:text-white px-4 py-1"
                    onClick={() => handleThemeChange('dark')}
                  >
                    Dark
                  </li>
                  <li
                    className="cursor-pointer text-[14px] hover:bg-gray-200 dark:hover:bg-white/10 dark:text-white px-4 py-1"
                    onClick={() => handleThemeChange('system')}
                  >
                    System
                  </li>
                </ul>
              </div>  
    </>
  )
}
