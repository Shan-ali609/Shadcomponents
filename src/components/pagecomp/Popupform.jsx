
import React from 'react';

export default function Popupform({  sheetcond, onClose , dialprop }) {
    return (
        <>
            <div className={`${sheetcond ? "fixed inset-y-0 top-0 mt-7 right-0 bg-gray-200 bg-opacity-90 z-50" : "fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"}`}>
                <div className={`${dialprop ? "bg-white p-6 rounded-md shadow-md max-w-[450px]" : "bg-white p-6 rounded-md shadow-md max-w-[600px]"}`}>
                    <h2 className="text-lg font-semibold">{dialprop ? "Edit Profile" : "Are you absolutely sure?"}</h2>
                    <p className={`${dialprop ? "text-[15px] text-gray-500" : ""}`}>
                        {dialprop ? "Make changes to your profile here. Click save when you're done." : "This action cannot be undone. This will permanently delete your account and remove your data from our servers."}
                    </p>
                    {dialprop && ( 
                        <div>
                            <div className='flex gap-2 py-3 ml-20'>
                                <p className='text-lg'>Name</p>
                                <input className='border-2 rounded-sm pl-2' type='text' placeholder='Name....' />
                            </div>
                            <div className='flex gap-2 py-3 ml-[44px]'>
                                <p className='text-lg'>Username</p>
                                <input className='border-2 rounded-sm pl-2' type='text' placeholder='@username' />
                            </div>
                        </div>
                    )}
                    <div className="flex justify-end mt-4">
                        <button onClick={onClose} className="border px-3 py-1 rounded-md bg-gray-300 hover:bg-gray-400">
                            Close
                        </button>
                        <button onClick={onClose} className="ml-3 border px-3 py-1 text-white rounded-md bg-black">
                            {dialprop ? "Save Changes" : "Continue"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
