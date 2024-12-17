import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Ordercomplete = () => {
    return (
        <div>

            {/* header */}
            <header className='w-full  h-72 bg-[#EEEFFB] p-28'>
                <h1 className='text-5xl font-bold text-[#101750] flex  items-center pl-80'>Order Completed</h1>
                <h2 className='text-gray-500 text-4xl mt-2 px-80'>Home.Pages. <span className='text-[#FF289F] text-4xl cursor-pointer hover:underline'> Order Completed </span></h2>
            </header>

            {/* order-completed page */}
            <div className='flex flex-row justify-center items-center pl-9'>
                
                {/* clock */}
                <div className='ml-64'>
                    <Image
                    alt='clock'
                    width={150}
                    height={150}
                    src='/order-complete/clock.png'
                    />
                </div>

                <div className='flex flex-col'>
                {/* order-content */}
                <div className='flex flex-col justify-center items-center border-2 border-dotted border-gray-300 ml-0 mb-0 m-16 w-4/6'>
                    <div className='w-28 h-28 rounded-full border-2 border-gray-300 py-5 flex items-center justify-center my-6'>
                        <Image
                        alt='tick'
                        width={70}
                        height={70}
                        src='/order-complete/tick.png'
                        />
                    </div>
                    <h1 className='text-[#151875] text-7xl font-bold text-center m-8'>Your Order is Completed!</h1>
                    <p className='text-[#8A8FB9] text-center font-semibold text-4xl w-8/12 leading-relaxed'>Thank you for your order!Your order is being processed and will be completed within 3-6 hours.You will receive an email confirmation when your order is completed.</p>
                    <Button className='bg-[#FF1788] hover:bg-pink-400 p-14 text-2xl m-4'>Continue Shopping</Button>

                </div>

                {/* checklist */}
                <Image className='ml-[1200px] mb-20'
                alt='checklist'
                width={80}
                height={80}
                src='/order-complete/checklist .png'
                />
                </div>
            </div>
        </div>
    )
}

export default Ordercomplete