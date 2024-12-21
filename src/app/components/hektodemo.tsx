import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Hektodemo = () => {
    return (
        <div>

            {/* header */}
            <header className='w-full  h-72 bg-[#EEEFFB] p-28 my-20'>
                <h1 className='text-5xl font-bold text-[#101750] flex  items-center pl-80'>Hekto Demo</h1>
            </header>

            {/* main content */}
            <section>
                <div className='flex flex-row justify-center gap-10'>
                    {/* shipping  */}
                    <div className='ml[100px] my-20  flex flex-col w-[1500px]'>
                        <h1 className='font-bold text-[#151875] text-5xl mb-6 ml-[50px]'>Hekto Demo</h1>
                        <h2 className=' text-[#1D3178] text-3xl my-8 tracking-wider ml-[50px]'>Cart/ Information/ Shipping/ Payment</h2>
                        <div className='bg-[#F8F8FD] px-10 py-20'>

                            <div className='flex flex-row justify-between'>
                                <h1 className='font-bold text-[#151875] text-4xl  tracking-widest my-20'>Contact Information</h1>
                                <h3 className='text-[#C1C8E1] text-2xl tracking-widest pr-7 my-20'>Already have an account ? <a className='underline' href="#account"> Log in</a></h3>
                            </div>

                            <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-8 '>Email or mobile phone number</h2>

                            <hr className='border-[#BFC6E0] border' />

                            <div className='flex flex-row m-5 gap-6 p-2'>
                                <Image className='bg-[#19D16F] w-6 h-6 p-1 my-9'
                                    alt='tick'
                                    width={30}
                                    height={40}
                                    src='/hekto demo/tick.png'

                                ></Image>
                                <h2 className='text-[#C1C8E1] text-3xl tracking-wider my-9 '>Keep me up to date on news and exclusive offers</h2>
                            </div>

                            <h1 className='font-bold text-[#151875] text-4xl  tracking-widest my-28'>Shipping address</h1>

                            <div className='flex flex-row gap-4'>
                                <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-7 w-[700px]'> First name(optional)
                                    <hr className='border-[#BFC6E0] border w-[700px] my-9' />
                                </h2>

                                <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-7 w-[700px] '>Last name
                                    <hr className='border-[#BFC6E0] border w-[700px] my-9' />
                                </h2>
                            </div>

                            <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-7 '>Address</h2>

                            <hr className='border-[#BFC6E0] border mb-16 my-9' />

                            <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-7 '>Appartment,suit,etc(optional)</h2>

                            <hr className='border-[#BFC6E0] border mb-16 mt-9' />

                            <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-6 '>City</h2>

                            <hr className='border-[#BFC6E0] border mb-16 mt-9' />

                            <div className='flex flex-row gap-4'>
                                <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-6 w-[900px]'> Bangladesh
                                    <hr className='border-[#BFC6E0] border w-[700px] my-9' />
                                </h2>

                                <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-6 w-[700px] '>Postal Code
                                    <hr className='border-[#BFC6E0] border w-[700px] my-9' />
                                </h2>
                            </div>

                            <Button className='hover:bg-pink-400 bg-[#FF289F] text-white h-12 text-3xl my-9 p-7 py-10' variant="destructive">Continue Shipping</Button>
                        </div>
                    </div>

                    <div className='flex flex-col '>
                        {/* payment */}
                    <div className='flex flex-col shadow-lg p-5 mt-52 '>
                        <div className='flex flex-row w-[900px]'>
                            <Image
                                alt='pic1'
                                width={200}
                                height={200}
                                src='/hekto demo/pic1.png'
                            ></Image>
                            <div className='flex flex-col gap-2 mt-8 ml-6'>
                                <h1 className='text-3xl tracking-widest font-semibold'>Ut diam conswquat</h1>
                                <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-2 font-semibold '>Color:Brown</h2>
                                <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-2 font-semibold '>Size: XL</h2>
                            </div>
                            <span className='text-[#151875] text-3xl mt-14 tracking-wider font-semibold ml-48'>$32.00</span>
                        </div>
                        <hr className='border-2 border-gray-300 my-9'/>

                        <div className='flex flex-row w-[900px]'>
                            <Image
                                alt='pic2'
                                width={200}
                                height={200}
                                src='/hekto demo/pic2.png'
                            ></Image>
                            <div className='flex flex-col gap-2 mt-8 ml-6'>
                                <h1 className='text-3xl tracking-widest font-semibold'>Ut diam conswquat</h1>
                                <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-2 font-semibold '>Color:Brown</h2>
                                <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-2 font-semibold '>Size: XL</h2>
                            </div>
                            <span className='text-[#151875] text-3xl mt-14 tracking-wider font-semibold ml-48'>$32.00</span>
                        </div>
                        <hr className='border-2 border-gray-300 my-9'/>

                        <div className='flex flex-row w-[900px]'>
                            <Image
                                alt='pic3'
                                width={200}
                                height={200}
                                src='/hekto demo/pic3.png'
                            ></Image>
                            <div className='flex flex-col gap-2 mt-8 ml-6'>
                                <h1 className='text-3xl tracking-widest font-semibold'>Ut diam conswquat</h1>
                                <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-2 font-semibold '>Color:Brown</h2>
                                <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-2 font-semibold '>Size: XL</h2>
                            </div>
                            <span className='text-[#151875] text-3xl mt-14 tracking-wider font-semibold ml-48'>$32.00</span>
                        </div>
                        <hr className='border-2 border-gray-300 my-9'/>

                        <div className='flex flex-row w-[900px]'>
                            <Image
                                alt='pic4'
                                width={200}
                                height={200}
                                src='/hekto demo/pic4.png'
                            ></Image>
                            <div className='flex flex-col gap-2 mt-8 ml-6'>
                                <h1 className='text-3xl tracking-widest font-semibold'>Ut diam conswquat</h1>
                                <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-2 font-semibold '>Color:Brown</h2>
                                <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-2 font-semibold '>Size: XL</h2>
                            </div>
                            <span className='text-[#151875] text-3xl mt-14 tracking-wider font-semibold ml-48'>$32.00</span>
                        </div>
                        <hr className='border-2 border-gray-300 my-9'/>

                        <div className='flex flex-row w-[900px]'>
                            <Image
                                alt='pic5'
                                width={200}
                                height={200}
                                src='/hekto demo/pic5.png'
                            ></Image>
                            <div className='flex flex-col gap-2 mt-8 ml-6'>
                                <h1 className='text-3xl tracking-widest font-semibold'>Ut diam conswquat</h1>
                                <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-2 font-semibold '>Color:Brown</h2>
                                <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-2 font-semibold '>Size: XL</h2>
                            </div>
                            <span className='text-[#151875] text-3xl mt-14 tracking-wider font-semibold ml-48'>$32.00</span>
                        </div>
                        <hr className='border-2 border-gray-300 my-9'/>
                    </div>

                    {/* checkout */}
                    <div className='bg-[#F8F8FD] p-10 my-20'>
                        <div className='flex flex-row justify-between my-6 '>
                            <h1 className='font-bold text-[#151875] text-4xl  '>Subtotals:</h1>
                            <span className='text-[#151875] text-3xl mt-1 tracking-wider font-semibold'>$219.00</span>
                        </div>
                        <hr className='border-2 border-gray-300' />
                        <div className='flex flex-row justify-between my-6 mt-16'>
                            <h1 className='font-bold text-[#151875] text-4xl '>Totals:</h1>
                            <span className='text-[#151875] text-3xl mt-1 tracking-wider font-semibold'>$325.00</span>
                        </div>
                        <hr className='border-2 border-gray-300' />
                        <div className='flex flex-row gap-4 my-9'>
                            <Image className='bg-[#19D16F] w-6 h-6 p-1'
                                alt='tick'
                                width={30}
                                height={30}
                                src='/hekto demo/tick.png'
                            ></Image>
                            <h2 className='text-[#C1C8E1] text-2xl tracking-wide '>Shipping and taxes included at checkout</h2>
                        </div>
                        <Button className='bg-[#19D16F] text-white h-12 text-3xl my-3 px-28 py-10 hover:bg-green-300' variant="destructive">Proceed To Checkout</Button>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hektodemo