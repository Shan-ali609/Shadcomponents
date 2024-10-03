import React from 'react';

export default function Table() {
    const bankdetail = [
        {Inovice : "inovice1", Status : "pending", Method : "Paypal", Salary : "25.00" },
        {Inovice : "inovice2", Status : "approved", Method : "jazzcash", Salary : "29.00" },
        {Inovice : "inovice3", Status : "Detail", Method : "Easypaisa", Salary : "253.00" },
        {Inovice : "inovice5", Status : "pending", Method : "Neyapay", Salary : "25.00$" },
        {Inovice : "inovice6", Status : "Approved", Method : "Paypal", Salary : "125.00" },
        {Inovice : "inovice7", Status : "Waiting", Method : "Paypal", Salary : "25.00" },
    ];

    return (
        <div className='w-full'>
            
            <div className='flex justify-between border-b pb-3  mx-16  text-gray-400'>
                <h1 className='w-1/4'>Invoice</h1>
                <h1 className='w-1/4'>Status</h1>
                <h1 className='w-1/4'>Method</h1>
                <h1 className='w-1/4 text-right'>Salary</h1> 
            </div>
        
            {bankdetail.map((item, index) => (
                <div key={index} className='flex justify-between mx-16 pt-4 border-b pb-3 text-gray-700'>
                    <h1 className='w-1/4'>{item.Inovice}</h1>
                    <h1 className='w-1/4'>{item.Status}</h1>
                    <h1 className='w-1/4'>{item.Method}</h1>
                    <h1 className='w-1/4 text-right'>{item.Salary}$</h1> 
                </div>
            ))}
        </div>
    );
}
