import React from "react";
import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";
import "@/components/pagecomp/main.css";
import { IoMdOpen } from "react-icons/io";
export default function Maintitle({ title, para }) {
  return (
    <div className="accordion pt-14 ">
      <div className="little-title">
        <h3 className="forever dark:text-white raleway">Docs</h3>
        <SlArrowRight className="right-side dark:text-white" />
        <h3 className="dark:text-white raleway">{title}</h3>
      </div>
      <h1 className="head-section raleway dark:text-white">{title}</h1>
      <p className="detail text-gray-400">{para}</p>

      <div className="pt-3  pb-10">
        <div className="inline-block">
          {" "}
          <Link
            href=""
            className=" flex items-center bg-neutral-100 text-xs px-2 py-[2px] rounded-md font-semibold text-gray-600 dark:bg-gray-800 dark:text-white "
          >
            Docs{" "}
            <span>
              <IoMdOpen className="font-light" />
            </span>{" "}
          </Link>{" "}
        </div>
        <div className="inline-block pl-3">
          {" "}
          <Link
            href=""
            className=" flex items-center bg-neutral-100 text-xs px-2 py-[2px] rounded-md font-semibold text-gray-600 dark:bg-gray-800 dark:text-white  "
          >
            API Reference{" "}
            <span>
              <IoMdOpen className="font-light" />
            </span>{" "}
          </Link>{" "}
        </div>
      </div>

      <h3 className="preview">
        <Link href="#" className="link-tot dark:text-white">
          Preview
        </Link>
      </h3>
    </div>
  );
}
