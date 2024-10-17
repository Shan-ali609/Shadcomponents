"use client";
import React from "react";
import "@/components/leftcomp/leftside.css";
import Link from "next/link";
import Datacomp from "../pagecomp/Datacomp";
import { usePathname } from "next/navigation";

export default function Leftside({ marginprop }) {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop();

  return (
    <div className={`left-container   dark:bg-black `}>
      <ul className={` left-ul scroll-container pt-4  `}>
        {Datacomp.map((data) => (
          <li key={data.id} className=" left-li dark:text-white/70">
            <Link
              className={`Roboto left-a  ${
                data.id === currentSlug
                  ? "font-bold text-black dark:text-white "
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
