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
            ? "fixed w-full inset-y-0 top-0 flex justify-end right-0  bg-black dark:bg-black dark:bg-opacity-50  bg-opacity-50 z-50"
            : accountform
            ? " border dark:border-white/20 rounded-sm mt-2  "
            : "fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
        }`}
      >
        <div
          className={`${
            dialprop
              ? accountform
                ? "Tabs bg-white dark:bg-black  px-7 py-6 rounded-md shadow-md max-w-[400px]  "
                : sheetcond
                ? "sheet bg-white p-6 rounded-md shadow-md w-[286px] md:w-[450px] lg:w-[450px] dark:bg-black dark:border-white/20 "
                : "Dialog bg-white p-6 rounded-md shadow-md w-full md:max-w-[450px] lg:max-w-[450px] dark:bg-black dark:border-white/20 "
              : "Alertdialog bg-white p-6 rounded-md  shadow-md max-w-[510px] dark:bg-black dark:border-white/20"
          }`}
        >
          <h2 className="text-lg font-roboto text-center md:text-left  lg:text-left dark:text-white">
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
              dialprop
                ? "text-[15px] text-gray-500 dark:text-gray-200"
                : "dark:text-gray-200 text-[14px] py-2 text-black/80 text-center md:text-left lg:text-left"
            }`}
          >
            {dialprop ? (
              pwdform ? (
                <>
                  <span className=" dark:text-white/50">
                    Change your password here. After saving you&apos;ll be
                    logged out.
                  </span>
                </>
              ) : (
                <>
                  <span className=" dark:text-white/50">
                    Make changes to your profile here. Click save when you are
                    done.
                  </span>
                </>
              )
            ) : (
              "This action cannot be undone. This will permanently delete your account and remove your data from our servers."
            )}
          </p>

          {dialprop && (
            <div>
              <div
                className={`${
                  accountform
                    ? " py-3 "
                    : "flex gap-2 py-3 justify-center md:justify-end lg:justify-end "
                }     `}
              >
                <p
                  className={` ${
                    accountform ? " text-md" : "text-[14px] dark:text-white "
                  } `}
                >
                  {" "}
                  {pwdform ? "Password" : "Name"}{" "}
                </p>
                <input
                  className={`${
                    accountform
                      ? " border dark:border-white/20 rounded-sm pl-2 w-full dark:bg-black"
                      : "border dark:border-white/20 rounded-sm pl-2 dark:bg-black dark:placeholder:text-white "
                  }`}
                  type="text"
                  placeholder={pwdform ? "" : "Name..."}
                />
              </div>
              <div
                className={`${
                  accountform
                    ? " "
                    : "flex gap-2 py-3  justify-center md:justify-end lg:justify-end"
                }     `}
              >
                <p
                  className={` ${
                    accountform ? " text-md" : "text-[14px] dark:text-white "
                  } `}
                >
                  {" "}
                  {pwdform ? "New Password" : "Username"}{" "}
                </p>
                <input
                  className={`${
                    accountform
                      ? " border dark:border-white/20 rounded-sm pl-2 w-full dark:bg-black"
                      : "border dark:border-white/20 rounded-sm pl-2 dark:bg-black dark:placeholder:text-white "
                  }`}
                  type="text"
                  placeholder={pwdform ? "" : "Name..."}
                />
              </div>
            </div>
          )}
          <div
            className={` ${
              accountform
                ? "flex justify-start mt-4"
                : "flex  flex-wrap-reverse md:justify-end mt-4 gap-2 w-full"
            }`}
          >
            {accountbtn && (
              <button
                onClick={onClose}
                className={`  ${
                  dialprop
                    ? "border px-3 py-1 rounded-md dark:text-white  "
                    : " border px-3 w-full md:w-20  lg:w-20  py-1 rounded-md bg-white hover:bg-gray-200 "
                } `}
              >
                Close
              </button>
            )}

            <button
              onClick={onClose}
              className={` ${
                accountform
                  ? " border dark:border-white/20 px-3 py-1 text-white rounded-md bg-black"
                  : dialprop
                  ? " border  px-3 py-1 rounded-md bg-black text-white dark:bg-white dark:text-black"
                  : "  w-full md:w-24 lg:w-24 border dark:border-white/20 px-3 py-1 text-white rounded-md bg-black dark:text-black dark:bg-white"
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
