'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Topfooter from './topfooter'

const Error = () => {
    return (
        <div>
            {/* header */}
            <header className='w-full  h-72 bg-[#EEEFFB] p-28'>
                <h1 className='text-5xl font-bold text-[#101750] flex  items-center pl-80'>404 Not Found</h1>
                <h2 className='text-gray-500 text-4xl mt-2 px-80'>Home.Pages. <span className='text-[#FF289F] text-4xl cursor-pointer hover:underline'> 404 Not Found </span></h2>
            </header>

            {/* error page */}
            <section className='flex flex-col justify-center items-center'>
                <Image
                    alt='error'
                    width={700}
                    height={900}
                    src='/404 error/404error.png'
                />

                <Button className='bg-[#FB2E86] hover:bg-pink-400 text-2xl p-4 rounded-sm m-3'>Back to Home</Button>
            </section>

            <footer>
                <Topfooter/>
            </footer>

        </div>
    )
}

export default Error