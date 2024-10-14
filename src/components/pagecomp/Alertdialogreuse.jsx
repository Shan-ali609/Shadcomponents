"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Popupform from '../pagecomp/Popupform';

export default function Alertdialog({nameprop , sheetcond , dialprop,accountbtn }) {
    const [openit, setOpenit] = useState(false);

    const isopen = () => setOpenit(true);
    const isclose = () => setOpenit(false); 

    return (
        <>
            <div className="w-full flex justify-center items-center py-44">
                <div>
                    <Link href="#" onClick={isopen} className="mx-auto border dark:border-white/20 text-[13px] font-roboto  px-3 py-3 rounded-md dark:text-white dark:hover:bg-white/10 hover:bg-gray-100">
                        {nameprop} 
                    </Link>
                </div>
            </div>
            {openit && (
                <Popupform  dialprop = {dialprop} sheetcond={sheetcond} accountbtn={accountbtn} onClose={isclose} />
            )}
        </>
    );
}
