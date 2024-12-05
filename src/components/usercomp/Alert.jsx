"use client";
import React from "react";
import "@/components/pagecomp/main.css";
import { RxRocket } from "react-icons/rx";

export default function Accordion() {
  return (
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
    </div>
  );
}
