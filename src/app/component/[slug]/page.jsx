"use client";
import components from "@/components/components";
import Maintitle from "@/components/pagecomp/Maintitle";
import MyDropdown from "@/components/pagecomp/Mydropdown";
import React from "react";

export default function Page({ params }) {
  const slug = params.slug;

  const component = components.find((item) => item.slug === slug);

  if (!component) {
    return (
      <div className="mt-32 bold dark:text-white">Component Not Found</div>
    );
  }

  const ComponentToRender = component.Component;

  return (
    <div >
      <Maintitle title={component.Name} para={component.text} />
      <div className=" w-full   mt-9 border border-gray-300 rounded-lg h-auto">
         <div className="w-full  flex justify-between px-1 pt-7 pb-5 border">
         <MyDropdown data = {["New york", "Default"]} />
       
        </div> 
        <div className=" w-full flex justify-center items-center  h-auto  ">
         
            <ComponentToRender drp={component.list} />
        </div>
      </div>
    </div>
  );
}
