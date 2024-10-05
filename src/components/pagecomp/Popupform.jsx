import React from "react";

export default function Popupform({
  sheetcond,
  onClose,
  dialprop,
  accountform,
  accountbtn,
  pwdform,
}) {
  return (
    <>
      <div
        className={`${
          sheetcond
            ? "fixed w-full inset-y-0 top-0 flex justify-end right-0  bg-gray-200 dark:bg-black dark:bg-opacity-50  bg-opacity-90 z-50"
            : accountform
            ? " border rounded-sm mt-2  "
            : "fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
        }`}
      >
        <div
          className={`${
            dialprop
              ? accountform
                ? "bg-white dark:bg-black  px-7 py-6 rounded-md shadow-md max-w-[400px]  "
                : "bg-white p-6 rounded-md shadow-md max-w-[450px] dark:bg-black dark:border "
              : "bg-white p-6 rounded-md shadow-md max-w-[600px] dark:bg-black dark:border "
          }`}
        >
          <h2 className="text-lg font-semibold dark:text-white">
            {dialprop
              ? accountform
                ? pwdform
                  ? "Password "
                  : "Account "
                : "Edit Profile "
              : "Are you absolutely sure?"}
          </h2>
          <p
            className={`${
              dialprop ? "text-[15px] text-gray-500 dark:text-gray-200 " : "dark:text-gray-200"
            }`}
          >
            {dialprop
              ? pwdform
                ? "Change your password here. After saving, you'll be logged out."
                : "Make changes to your profile here. Click save when you're done."
              : "This action cannot be undone. This will permanently delete your account and remove your data from our servers."}
          </p>
          {dialprop && (
            <div>
              <div
                className={`${
                  accountform ? " py-3 " : "flex gap-2 py-3 ml-20 "
                }     `}
              >
                <p className={` ${accountform ? " text-md" : "text-lg dark:text-white "} `}>
                  {" "}
                  {pwdform ? "Password" : "Name"}{" "}
                </p>
                <input
                  className={`${
                    accountform
                      ? " border-2 rounded-sm pl-2 w-full dark:bg-black"
                      : "border-2 rounded-sm pl-2 dark:bg-black dark:placeholder:text-white "
                  }`}
                  type="text"
                  placeholder={pwdform ? "" : "Name..."}
                />
              </div>
              <div
                className={`${
                  accountform ? " " : "flex gap-2 py-3 ml-[44px]"
                }     `}
              >
                <p className={` ${accountform ? " text-md" : "text-lg dark:text-white "} `}>
                  {" "}
                  {pwdform ? "New Password" : "Username"}{" "}
                </p>
                <input
                  className={`${
                    accountform
                      ? " border-2 rounded-sm pl-2 w-full dark:bg-black"
                      : "border-2 rounded-sm pl-2 dark:bg-black dark:placeholder:text-white "
                  }`}
                  type="text"
                  placeholder={pwdform ? "" : "Name..."}
                />
              </div>
            </div>
          )}
          <div
            className={` ${
              accountform ? "flex justify-start mt-4" : "flex justify-end mt-4"
            }`}
          >
            {accountbtn && (
              <button
                onClick={onClose}
                className="border px-3 py-1 rounded-md bg-gray-300 hover:bg-gray-400"
              >
                Close
              </button>
            )}

            <button
              onClick={onClose}
              className={` ${
                accountform
                  ? " border px-3 py-1 text-white rounded-md bg-black"
                  : "ml-3 border px-3 py-1 text-white rounded-md bg-black dark:text-black dark:bg-white"
              }`}
            >
              {dialprop ? "Save Changes" : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
