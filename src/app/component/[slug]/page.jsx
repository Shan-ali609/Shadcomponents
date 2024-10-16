"use client";
import components from "@/components/components";
import Maintitle from "@/components/pagecomp/Maintitle";
import MyDropdown from "@/components/pagecomp/Mydropdown";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "@/components/leftcomp/leftside.css";
export default function Page({ params }) {
  const [activetab, setactivetab] = useState("preview");
  const slug = params.slug;

  const component = components.find((item) => item.slug === slug);

  if (!component) {
    return (
      <div className="mt-32 bold dark:text-white">Component Not Found</div>
    );
  }

  const ComponentToRender = component.Component;

  const customStyle = {
    whiteSpace: "pre-wrap", // Enables text to wrap
    wordWrap: "break-word", // Break long words when needed
  };

  return (
    <>
      <div>
        <Maintitle title={component.Name} para={component.text} />

        <div className="flex gap-3 border-b dark:border-white/15 mt-10 mb-4">
          <div className="inline-block cursor-pointer">
            <div
              className={`${
                activetab === "preview" ? "border-b-2 " : "text-black/40 "
              } text-[15px] md:text-[17px] lg:text-[17px] link-tot text-black/90 font-roboto px-3 dark:border-white/85 border-black pb-1 dark:text-white/90`}
              onClick={() => setactivetab("preview")}
            >
              Preview
            </div>
          </div>
          <div className="inline-block cursor-pointer">
            <div
              className={`${
                activetab === "code" ? "border-b-2 " : "text-black/40"
              } text-[15px] md:text-[17px] lg:text-[17px] link-tot text-black/90 font-roboto px-3 dark:border-white/85 border-black pb-1 dark:text-white/90`}
              onClick={() => setactivetab("code")}
            >
              Code
            </div>
          </div>
        </div>

        {activetab === "preview" ? (
          <div className="w-full border  border-gray-300 dark:border-white/10 rounded-lg h-fill overflow-auto my-auto">
            <div className=" w-full flex justify-between px-1 pt-7 pb-5">
              <MyDropdown data={["New york", "Default"]} />
            </div>
            <div className="w-full flex justify-center items-center h-auto">
              <ComponentToRender drp={component.list} />
            </div>
          </div>
        ) : (
          <div className="w-full overflow-auto ">
            <div className=" w-full text-wrap h-auto max-h-[400px] rounded-md dark:bg-white/5 text-white scroll-container overflow-auto my-auto">
              <SyntaxHighlighter
                language="javascript"
                style={darcula}
                customStyle={customStyle}
                wrapLongLines={true}
              >
                {component.previewCode}
              </SyntaxHighlighter>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
