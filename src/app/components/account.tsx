import React from 'react'
import { Button } from '@/components/ui/button'

const Account = () => {
    return (
        <div>
            {/* header */}
            <header className='w-full  h-72 bg-[#EEEFFB] p-28'>
                <h1 className='text-5xl font-bold text-[#101750] flex  items-center pl-80'>My Account</h1>
                <h2 className='text-gray-500 text-4xl mt-2 px-80'>Home.Pages. <span className='text-[#FF289F] text-4xl cursor-pointer hover:underline'> My Account </span></h2>
            </header>

            {/* login page */}
            <div className='flex justify-center'>
            <div className='flex flex-col gap-6 justify-center items-center border-2 border-solid border-[#C2C5E1] bg-white my-8 p-6 max-w-lg max-h-full '>
                <h1 className='text-5xl font-semibold text-center my-4 text-[#151875]' >Log In</h1>
                <p className='font-semibold text-2xl text-[#8A8FB9] my-4'>Please login using account detail below</p>
                <input className='border rounded-sm border-[#C2C5E1] w-full my-2 outline-none p-4 text-xl' type="text" placeholder='Email Address' />
                <input className='w-full border rounded-sm border-[#C2C5E1] mb-2 outline-none p-4 text-xl' type="password" placeholder='Password' />
                <p className='text-[#8A8FB9] text-start text-2xl hover:underline ml-0'>Forget your password?</p>
                <Button className='bg-[#FB2E86] rounded-lg m-3 w-full text-2xl py-8 hover:bg-pink-400'>Sign In</Button>
                <p className='font-semibold text-2xl text-[#8A8FB9] my-4'>Dont have an account?Create Account</p>
            </div>
            </div>
        </div>
    )
}

export default Account