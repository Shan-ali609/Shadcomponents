import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="py-6 border-t dark:border-white/10 px-4 sm:px-6 md:px-20 text-gray-500 text-center md:text-left dark:text-white/70">
      <p className="text-[14px] ">
        Built by
        <Link
          href="#"
          className="dark:text-white/70 px-1 underline underline-offset-8"
        >
          shadcn
        </Link>
        . The source code is available on
        <Link
          href="#"
          className="dark:text-white/70 px-1 underline underline-offset-8"
        >
          GitHub
        </Link>
        .
      </p>
    </div>
  );
}
