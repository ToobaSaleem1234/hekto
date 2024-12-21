import React from 'react'
import Image from 'next/image'
import Topfooter from './topfooter'
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiCirclesFourFill } from "react-icons/pi";
import { TfiMenuAlt } from "react-icons/tfi";

const Shopgrid = () => {
    return (
        <section>
            <div>
                {/* header */}
                <header className='w-full  h-72 bg-[#EEEFFB] p-28 my-6'>
                    <h1 className='text-5xl font-bold text-[#101750] flex  items-center pl-80'>Shop Grid Default</h1>
                    <h2 className='text-gray-500 text-4xl mt-6 px-80'>Home.Pages. <span className='text-[#FF289F] text-4xl cursor-pointer hover:underline'> Shop Grid Default </span></h2>
                </header>

                {/* navbar  section */}
                <section>
                    <div className='flex flex-row gap-52 mt-36'>

                    <div className='left'>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-[#151875] text-5xl ml-[400px]' >Ecommerce Acceories & Fashion item</h1>
                            <h2 className='text-[#8A8FB9] ml-[400px] text-2xl tracking-wider leading-9 mt-5 font-bold'>About 9.6.20 results (10.62 seconds)</h2>
                        </div>
                        </div>

                        <div className='right flex flex-row gap-5'>
                        <div className='flex flex-row gap-5'>
                            <h1 className='text-[#3F509E] text-3xl font-semibold'>Per Page:</h1>
                            <div className='w-32 h-12 border-2 border-[#E7E6EF]'></div>
                        </div>

                        <div className='flex flex-row gap-5'>
                            <h1 className='text-[#3F509E] text-3xl font-semibold'>Sort By:</h1>
                            <div className='w-32 h-12 border-2 border-[#E7E6EF] flex flex-row py-2 pl-2 text-[#8A8FB9]'>Best Match <RiArrowDropDownLine size={30} className='text-[#8A8FB9]' /></div>
                        </div>

                        <div className='flex flex-row gap-5'>
                        <h1 className='text-[#3F509E] text-3xl font-semibold flex flex-row gap-2'>View: <PiCirclesFourFill className='mt-2' /> <TfiMenuAlt className='mt-2 font-bold'/></h1>
                        <div className='w-64 h-12 border-2 border-[#E7E6EF]p-2'></div>
                        </div>
                        </div>
                    </div>
                </section>

                {/* images section */}
                <section className='grid grid-cols-4 gap-28 mx-96 my-32 p-3'>

                    {/* image 1 */}
                    <div className='flex flex-col gap-4'>
                        <Image className='bg-[#F6F7FB] w-full p-5 h-[400px] '
                            alt='pic1'
                            width={300}
                            height={300}
                            src='/shopgrid/pic1.png'
                        ></Image>
                        <h1 className='text-[#151875] text-3xl font-bold mt-4 tracking-wider text-center leading-9 '>Vel elit eusimod</h1>
                        <div className='flex flex-row gap-5 justify-center'>
                            <div className='w-4 h-4 rounded-full bg-[#DE9034]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#EC42A2]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#8568FF]'></div>
                        </div>
                        <h2 className='text-center text-[#151875] text-xl '>$26.00 <span className='text-[#FF289F] text-xl   line-through '>$42.00</span></h2>

                    </div>

                    {/* image 2 */}
                    <div className='flex flex-col gap-4 '>
                        <Image className='bg-[#EBF4F3] w-full p-5 h-[400px] '
                            alt='pic2'
                            width={300}
                            height={300}
                            src='/shopgrid/pic2.png'
                        ></Image>
                        <h1 className='text-[#151875] text-2xl font-bold mt-4 tracking-wide leading-9 '>Ulticies condimentum imperdiet</h1>
                        <div className='flex flex-row gap-5 justify-center'>
                            <div className='w-4 h-4 rounded-full bg-[#DE9034]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#EC42A2]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#8568FF]'></div>
                        </div>
                        <h2 className='text-center text-[#151875] text-xl '>$26.00 <span className='text-[#FF289F] text-xl line-through'>$42.00</span></h2>

                    </div>

                    {/* image 3 */}
                    <div className='flex flex-col gap-4 '>
                        <Image className='bg-[#F6F7FB] w-full p-5 h-[400px]'
                            alt='pic3'
                            width={300}
                            height={300}
                            src='/shopgrid/pic3.png'
                        ></Image>
                        <h1 className='text-[#151875] text-3xl font-bold mt-4 tracking-wide leading-9 text-center '>Vitae suspendisse sed</h1>
                        <div className='flex flex-row gap-5 justify-center'>
                            <div className='w-4 h-4 rounded-full bg-[#DE9034]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#EC42A2]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#8568FF]'></div>
                        </div>
                        <h2 className='text-center text-[#151875] text-xl '>$26.00 <span className='text-[#FF289F] text-xl line-through'>$42.00</span></h2>

                    </div>

                    {/* image 4 */}
                    <div className='flex flex-col gap-4'>
                        <Image className='bg-[#F6F7FB] w-full p-5 h-[400px] '
                            alt='pic4'
                            width={300}
                            height={300}
                            src='/shopgrid/pic4.png'
                        ></Image>
                        <h1 className='text-[#151875] text-3xl font-bold mt-4 tracking-wider text-center leading-9 '>Sed at fermentum</h1>
                        <div className='flex flex-row gap-5 justify-center'>
                            <div className='w-4 h-4 rounded-full bg-[#DE9034]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#EC42A2]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#8568FF]'></div>
                        </div>
                        <h2 className='text-center text-[#151875] text-xl '>$26.00 <span className='text-[#FF289F] text-xl   line-through '>$42.00</span></h2>

                    </div>

                    {/* image 5 */}
                    <div className='flex flex-col gap-4'>
                        <Image className='bg-[#F6F7FB] w-full p-16 h-[400px] '
                            alt='pic5'
                            width={300}
                            height={300}
                            src='/shopgrid/pic5.png'
                        ></Image>
                        <h1 className='text-[#151875] text-3xl font-bold mt-4 tracking-wider text-center leading-9 '>Fusce pellentesque at</h1>
                        <div className='flex flex-row gap-5 justify-center'>
                            <div className='w-4 h-4 rounded-full bg-[#DE9034]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#EC42A2]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#8568FF]'></div>
                        </div>
                        <h2 className='text-center text-[#151875] text-xl '>$26.00 <span className='text-[#FF289F] text-xl   line-through '>$42.00</span></h2>

                    </div>

                    {/* image 6 */}
                    <div className='flex flex-col gap-4'>
                        <Image className='bg-[#F6F7FB] w-full p-11 h-[400px] '
                            alt='pic6'
                            width={300}
                            height={300}
                            src='/shopgrid/pic6.png'
                        ></Image>
                        <h1 className='text-[#151875] text-2xl font-bold mt-4 tracking-wide text-center leading-9 '>Vestibulum magna looreet</h1>
                        <div className='flex flex-row gap-5 justify-center'>
                            <div className='w-4 h-4 rounded-full bg-[#DE9034]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#EC42A2]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#8568FF]'></div>
                        </div>
                        <h2 className='text-center text-[#151875] text-xl '>$26.00 <span className='text-[#FF289F] text-xl   line-through '>$42.00</span></h2>

                    </div>

                    {/* image 7 */}
                    <div className='flex flex-col gap-4'>
                        <Image className='bg-[#F6F7FB] w-full p-16 h-[400px]'
                            alt='pic7'
                            width={300}
                            height={300}
                            src='/shopgrid/pic7.png'
                        ></Image>
                        <h1 className='text-[#151875] text-3xl font-bold mt-4 tracking-wide text-center leading-9 '>Sollicitudin amet orci</h1>
                        <div className='flex flex-row gap-5 justify-center'>
                            <div className='w-4 h-4 rounded-full bg-[#DE9034]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#EC42A2]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#8568FF]'></div>
                        </div>
                        <h2 className='text-center text-[#151875] text-xl '>$26.00 <span className='text-[#FF289F] text-xl   line-through '>$42.00</span></h2>

                    </div>

                    {/* image 8 */}
                    <div className='flex flex-col gap-4'>
                        <Image className='bg-[#F6F7FB] p-11 w-[400px] h-[400px] '
                            alt='pic8'
                            width={300}
                            height={300}
                            src='/shopgrid/pic8.png'
                        ></Image>
                        <h1 className='text-[#151875] text-3xl font-bold mt-4 tracking-wide text-center leading-9 '>Ultrices mauris sit</h1>
                        <div className='flex flex-row gap-5 justify-center'>
                            <div className='w-4 h-4 rounded-full bg-[#DE9034]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#EC42A2]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#8568FF]'></div>
                        </div>
                        <h2 className='text-center text-[#151875] text-xl '>$26.00 <span className='text-[#FF289F] text-xl   line-through '>$42.00</span></h2>

                    </div>

                    {/* image 9 */}
                    <div className='flex flex-col gap-4'>
                        <Image className='bg-[#F6F7FB] p-11 w-[400px] h-[400px] '
                            alt='pic9'
                            width={300}
                            height={300}
                            src='/shopgrid/pic9.png'
                        ></Image>
                        <h1 className='text-[#151875] text-2xl font-bold mt-4 tracking-wide text-center leading-9 '>Pallentesque condimentum ac</h1>
                        <div className='flex flex-row gap-5 justify-center'>
                            <div className='w-4 h-4 rounded-full bg-[#DE9034]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#EC42A2]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#8568FF]'></div>
                        </div>
                        <h2 className='text-center text-[#151875] text-xl '>$26.00 <span className='text-[#FF289F] text-xl   line-through '>$42.00</span></h2>

                    </div>

                    {/* image 10 */}
                    <div className='flex flex-col gap-4'>
                        <Image className='bg-[#F6F7FB] p-11 w-[420px] h-[400px] '
                            alt='pic10'
                            width={300}
                            height={300}
                            src='/shopgrid/pic10.png'
                        ></Image>
                        <h1 className='text-[#151875] text-3xl font-bold mt-4 tracking-wide text-center leading-9 '>Cras scelerisque velit</h1>
                        <div className='flex flex-row gap-5 justify-center'>
                            <div className='w-4 h-4 rounded-full bg-[#DE9034]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#EC42A2]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#8568FF]'></div>
                        </div>
                        <h2 className='text-center text-[#151875] text-xl '>$26.00 <span className='text-[#FF289F] text-xl   line-through '>$42.00</span></h2>

                    </div>

                    {/* image 11 */}
                    <div className='flex flex-col gap-4'>
                        <Image className='bg-[#F6F7FB] p-11 w-[400px] h-[400px] '
                            alt='pic11'
                            width={300}
                            height={300}
                            src='/shopgrid/pic11.png'
                        ></Image>
                        <h1 className='text-[#151875] text-3xl font-bold mt-4 tracking-wide text-center leading-9 '>Lectus vulputate faucibus</h1>
                        <div className='flex flex-row gap-5 justify-center'>
                            <div className='w-4 h-4 rounded-full bg-[#DE9034]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#EC42A2]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#8568FF]'></div>
                        </div>
                        <h2 className='text-center text-[#151875] text-xl '>$26.00 <span className='text-[#FF289F] text-xl   line-through '>$42.00</span></h2>

                    </div>

                    {/* image 12 */}
                    <div className='flex flex-col gap-4'>
                        <Image className='bg-[#F6F7FB] p-11 h-[400px] w-[420px]'
                            alt='pic12'
                            width={300}
                            height={300}
                            src='/shopgrid/pic12.png'
                        ></Image>
                        <h1 className='text-[#151875] text-3xl font-bold mt-4 tracking-wide text-center leading-9 '>Purus risus,ut</h1>
                        <div className='flex flex-row gap-5 justify-center'>
                            <div className='w-4 h-4 rounded-full bg-[#DE9034]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#EC42A2]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#8568FF]'></div>
                        </div>
                        <h2 className='text-center text-[#151875] text-xl '>$26.00 <span className='text-[#FF289F] text-xl   line-through '>$42.00</span></h2>

                    </div>


                </section>

                {/* footer */}
                <Topfooter />
            </div>
        </section>
    )
}

export default Shopgrid