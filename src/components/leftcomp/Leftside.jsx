"use client";
import React from "react";
import "@/components/leftcomp/leftside.css";
import Link from "next/link";
import Datacomp from "../pagecomp/Datacomp";
import { usePathname } from "next/navigation";

export default function Leftside({ navpaddingprop }) {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop();

  return (
    <div className={`left-container    dark:bg-black `}>
      <ul
        className={` left-ul ${
          navpaddingprop ? "pl-[10px]" : "pl-[50px]"
        } scroll-container pt-4  `}
      >
        {Datacomp.map((data) => (
          <li key={data.id} className=" left-li dark:text-white/70">
            <Link
              className={`font-sans left-a  ${
                data.id === currentSlug
                  ? " text-black dark:text-white font-medium dark:font-bold "
                  : ""
              } `}
              href={`/component/${data.id}`}
            >
              {data.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
