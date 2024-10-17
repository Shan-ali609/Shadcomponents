// import React from "react";
// import Alertdialogreuse from "@/components/pagecomp/Alertdialogreuse";

// export default function Dialog() {
//   return (
//     <>
//       <Alertdialogreuse
//         nameprop="Edit Profile"
//         dialprop={true}
//         accountbtn={true}
//       />
//     </>
//   );
// }

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
