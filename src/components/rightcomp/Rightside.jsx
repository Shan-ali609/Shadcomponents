"use client";
import Link from "next/link";
import React from "react";

export default function Rightside() {
  return (
    <div className="ml-3 mt-9 group:">
      <ul className="font-sans">
        <li className="mt-1 mb-1 text-black text-[14px] font-medium dark:text-white">
          <Link href="">On This Page</Link>
        </li>

        <li className="mt-2 mb-1 text-[14px] text-gray-500 dark:text-white/70">
          <Link href="">Installation</Link>
        </li>

        <li className="mt-1 mb-1 text-[14px] text-gray-500 dark:text-white/70">
          <Link href="">Usage</Link>
        </li>
      </ul>
      <div className="border w-[250px] h-[260px] rounded-md flex flex-col p-2 gap-2  ">
        <p className="font-sans font-bold text-[18px] group-hover:underline cursor-pointer  w-[160px] hover:underline">
          Bring your app built with shadcn to life on vercel
        </p>
        <p className="text-[13px] font-sans w-[170px]">
          Trusted by OpenAI, Sonos, Chick-fil-A, and more.
        </p>
        <p className="text-[13px] w-[190px] font-sans">
          Vercel provides tools and infrastructure to deploy apps and features
          at scale.
        </p>
        <button
          type="button"
          className="bg-black text-white text-[12px] w-[100px] p-2 rounded-md"
        >
          Deploy Now
        </button>
      </div>
    </div>
  );
}
