import React, { useState } from 'react';
import Accountform from '@/components/pagecomp/Accountform'; 
import Passwordform from '@/components/pagecomp/Passwordform'; 

export default function Tabs() {
    const [activeTab, setActiveTab] = useState('account'); 

    return (
        <>
            <div className=' w-400px dark:text-white'>
                <div className='flex justify-between items-center rounded-sm shadow-lg bg-white dark:bg-zinc-500 h-10'>
                    <button
                        className={`  ml-3 px-[50px] rounded-lg h-8 ${activeTab === 'account' ? 'bg-gray-300 dark:bg-black' : 'bg-white dark:bg-zinc-500  '}`}
                        onClick={() => setActiveTab('account')}
                    >
                        Account
                    </button>
                    <button
                        className={` mr-3 px-[50px] rounded-lg h-8 ${activeTab === 'password' ? 'bg-gray-300 dark:bg-black' : 'bg-white dark:bg-zinc-500'}`}
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
