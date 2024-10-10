import React from 'react';

export default function Table() {
    const bankdetail = [
        {Inovice : "inovice1", Status : "pending", Method : "Paypal", Salary : "25.00" },
        {Inovice : "inovice2", Status : "approved", Method : "jazzcash", Salary : "29.00" },
        {Inovice : "inovice3", Status : "Detail", Method : "Easypaisa", Salary : "253.00" },
        {Inovice : "inovice5", Status : "pending", Method : "Neyapay", Salary : "25.00$" },
        {Inovice : "inovice6", Status : "Approved", Method : "Paypal", Salary : "125.00" },
        {Inovice : "inovice7", Status : "Waiting", Method : "Paypal", Salary : "25.00" },
        {Inovice : "Total", Salary : "$2500.00" },
    ];

    return (
        <div className='lg:w-full md:w-full sm:w-full w-[400px] overflow-auto  '>
            
            <div className='flex gap-12  border-b dark:border-white/10 pb-3  mx-16  text-gray-400 dark:text-white/50'>
                <h1 className='w-1/4'>Invoice</h1>
                <h1 className='w-1/4'>Status</h1>
                <h1 className='w-1/4'>Method</h1>
                <h1 className='w-1/4 text-right'>Salary</h1> 
            </div>
        
            {bankdetail.map((item, index) => (
                <div key={index} className='flex gap-12 mx-16 pt-4 border-b dark:border-white/10 pb-3 text-gray-700 dark:text-white/80'>
                    <h1 className='w-1/4'>{item.Inovice}</h1>
                    <h1 className='w-1/4'>{item.Status}</h1>
                    <h1 className='w-1/4'>{item.Method}</h1>
                    <h1 className='w-1/4 text-right'>{item.Salary}$</h1> 
                </div>
            ))}
          
            <div className='w-full text-center py-4 font-roboto text-black/60 dark:text-white/50'>
                <p className='text-center font-raleway'>A list of your recent invoices.</p>
            </div>
        </div>
    );
}
