import React, { useState } from 'react';
import Accountform from '@/components/pagecomp/Accountform'; 
import Passwordform from '@/components/pagecomp/Passwordform'; 

export default function Tabs() {
    const [activeTab, setActiveTab] = useState('account'); 

    return (
        <>
            <div className=' w-400px'>
                <div className='flex justify-between items-center border bg-white h-10'>
                    <button
                        className={`  ml-3 px-[50px] rounded-lg h-8 ${activeTab === 'account' ? 'bg-gray-300' : 'bg-white'}`}
                        onClick={() => setActiveTab('account')}
                    >
                        Account
                    </button>
                    <button
                        className={` mr-3 px-[50px] rounded-lg h-8 ${activeTab === 'password' ? 'bg-gray-300' : 'bg-white'}`}
                        onClick={() => setActiveTab('password')}
                    >
                        Password
                    </button>
                </div>
                <div >
                {activeTab === 'account' ? <Accountform /> : <Passwordform />}
            </div>
            </div>

           
        </>
    );
}
