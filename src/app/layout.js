"use client";
import "./globals.css";
import Leftside from "../components/leftcomp/Leftside";
import Rightside from "../components/rightcomp/Rightside";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import { Raleway, Roboto } from "next/font/google";

import React, { useState, useEffect } from "react";
import AppState from "@/components/contextApi/AppState";
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-raleway",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-roboto",
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const [isrightvisible, setisrightvisible] = useState(true);
  const [isleftvisible, setisleftvisible] = useState(true);

  useEffect(() => {
    const hanldeResize = () => {
      setisrightvisible(window.innerWidth >= 1280);
      setisleftvisible(window.innerWidth >= 768);
    };
    hanldeResize();
    window.addEventListener("resize", hanldeResize);
    return () => {
      window.removeEventListener("resize", hanldeResize);
    };
  }, []);

  return (
    <html lang="en">
      <body
        // className="raleway.variable  "
        className={`${raleway.variable} ${roboto.variable}`}
      >
        <AppState>
          <Navbar />
          <div
            className={`max-w-screen  grid grid-cols-[300px_1fr] 1285:grid-cols-[300px_1fr_300px] `}
          >
            <div className="overflow-auto h-screen sticky dark:bg-black hidden md:block pl-16   top-0 mt-[52px]">
              <Leftside />
            </div>

            <div className="bg-white  dark:bg-black px-5 pt-4 pb-2  ">
              {children}
            </div>
            {isrightvisible && (
              <div className="sticky top-0  mt-[41px] h-screen dark:bg-black hidden xl:block  ">
                <Rightside />
              </div>
            )}
          </div>
          <div className="dark:bg-black">
            <Footer />
          </div>
        </AppState>
      </body>
    </html>
  );
}
