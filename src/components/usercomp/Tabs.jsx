"use client"
import React, { useState } from 'react';
import Accountform from '@/components/pagecomp/Accountform'; 
import Passwordform from '@/components/pagecomp/Passwordform'; 

export default function Tabs() {
    const [activeTab, setActiveTab] = useState('account'); 

    return (
        <>
            <div className=' w-400px dark:text-white px-5 sm:py-10 md:py-16 lg:py-24 pb-3'>
                <div className='flex justify-between items-center rounded-sm  bg-black/10 dark:bg-white/10 h-10'>
                    <button
                        className={`  ml-3 px-[50px] rounded-lg h-8 ${activeTab === 'account' ? 'bg-gray-400/40 shadow-lg dark:bg-black' : '  '}`}
                        onClick={() => setActiveTab('account')}
                    >
                        Account
                    </button>
                    <button
                        className={` mr-3 px-[50px] rounded-lg h-8 ${activeTab === 'password' ? 'bg-gray-400/40 shadow-lg dark:bg-black' : ' '}`}
                        onClick={() => setActiveTab('password')}
                    >
                        Password
                    </button>
                </div>
                <div  >
                {activeTab === 'account' ? <Accountform /> : <Passwordform />}
            </div>
            </div>

           
        </>
    );
}
