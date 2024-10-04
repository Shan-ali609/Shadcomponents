"use client";
import components from '@/components/components';
import Maintitle from '@/components/pagecomp/Maintitle';
import MyDropdown from '@/components/pagecomp/Mydropdown';
import { AiOutlineInbox } from "react-icons/ai";
import React from 'react';

export default function Page({ params }) {
    const slug = params.slug;

    const component = components.find(item => item.slug === slug);

    
    if (!component) {
        return <div className='mt-32 bold'>Component Not Found</div>;
    }

    const ComponentToRender = component.Component;

    return (
        <div>
            <Maintitle title={component.Name} para = {component.text} />
            <div className=' w-full   mt-9 border-2 rounded-lg h-[450px]'>
                <div className='w-full  flex justify-between px-5 py-3 '>
                    <div><MyDropdown data={['Default','New york' ]} /> </div>
                    <div className='border-2  flex items-center rounded-sm'> <AiOutlineInbox className='text-md cursor-pointer dark:text-white  text-black ' /></div>
                            </div>
                <div className=' w-full flex content-center items-center h-[409px]   '>
                <div className='h-auto w-full flex justify-center items-center'> 
            <ComponentToRender drp={component.list} /> 
            </div>
            </div> 
            </div>         
        </div>
    );
}
      