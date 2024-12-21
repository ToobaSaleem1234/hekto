import React from 'react'
import Image from 'next/image';
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiCirclesFourFill } from "react-icons/pi";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoStarSharp } from "react-icons/io5";
import Topfooter from './topfooter';

const Shoplist = () => {
    return (
        <div>
            {/* header */}
            <header className='w-full  h-72 bg-[#EEEFFB] p-28 my-9'>
                <h1 className='text-5xl font-bold text-[#101750] flex  items-center pl-80'>Shop List</h1>
                <h2 className='text-gray-500 text-4xl mt-2 px-80'>Home.Pages. <span className='text-[#FF289F] text-4xl cursor-pointer hover:underline'> Shop List </span></h2>
            </header>

            {/* navbar section */}
            <section>
                <div className='flex flex-row gap-52 my-36 '>

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
                            <h1 className='text-[#3F509E] text-3xl font-semibold flex flex-row gap-2'>View: <PiCirclesFourFill className='mt-2' /> <TfiMenuAlt className='mt-2 font-bold' /></h1>
                            <div className='w-64 h-12 border-2 border-[#E7E6EF]p-2'></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* main content */}
            <section>
                <div className='flex flex-col justify-center items-center'>
                    {/* first */}
                    <div className='flex flex-row'>
                        <Image className='m-9'
                            alt='pic1'
                            width={600}
                            height={300}
                            src='/shoplist/pic1.png'
                        />
                        <div className='flex flex-col gap-4 mt-9 ml-7'>

                            <div className='flex flex-row gap-11 items-center'>
                                <h1 className='text-[#151875] text-4xl font-bold tracking-wider my-3'>Accumsan tincidunt</h1>
                                <div className='flex flex-row gap-3 justify-center'>
                                    <div className='w-5 h-5 rounded-full bg-[#DE9034]'></div>
                                    <div className='w-5 h-5 rounded-full bg-[#EC42A2]'></div>
                                    <div className='w-5 h-5 rounded-full bg-[#8568FF]'></div>
                                </div>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <h2 className='text-[#151875] text-2xl font-bold tracking-wider my-3 '>$26.00</h2>
                                <span className='text-[#FF289F] text-2xl font-bold tracking-wider my-3 '>$52.00</span>

                                <div className='flex gap-1'>
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-gray-400 my-3' />
                                </div>

                            </div>

                            <p className='text-[#8A8FB9] leading-10 text-3xl w-[1000px] text-justify '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil sequi minus a quasi soluta autem rem repellat eligendi laborum dolores, deleniti omnis repellendus temporibus quod ipsum, eos sapiente, inventore expedita?
                            <Image className=' ml-0'
                            alt='cart'
                            width={300}
                            height={200}
                            src='/shoplist/pic8.png'
                            />
                            </p>


                        </div>
                    </div>

                    {/* second */}
                    <div className='flex flex-row justify-center'>
                        <Image className='m-9'
                            alt='pic2'
                            width={600}
                            height={300}
                            src='/shoplist/pic2.png'
                        />
                        <div className='flex flex-col gap-4 mt-9 ml-7'>

                            <div className='flex flex-row gap-64 items-center'>
                                <h1 className='text-[#151875] text-4xl font-bold tracking-wider my-3'>In nulla</h1>
                                <div className='flex flex-row gap-3 justify-center'>
                                    <div className='w-5 h-5 rounded-full bg-[#DE9034]'></div>
                                    <div className='w-5 h-5 rounded-full bg-[#EC42A2]'></div>
                                    <div className='w-5 h-5 rounded-full bg-[#8568FF]'></div>
                                </div>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <h2 className='text-[#151875] text-2xl font-bold tracking-wider my-3 '>$26.00</h2>
                                <span className='text-[#FF289F] text-2xl font-bold tracking-wider my-3 '>$52.00</span>

                                <div className='flex gap-1'>
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-gray-400 my-3' />
                                </div>

                            </div>

                            <p className='text-[#8A8FB9] leading-10 text-3xl w-[1000px] text-justify '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil sequi minus a quasi soluta autem rem repellat eligendi laborum dolores, deleniti omnis repellendus temporibus quod ipsum, eos sapiente, inventore expedita?
                            <Image className=' ml-0'
                            alt='cart'
                            width={300}
                            height={200}
                            src='/shoplist/pic8.png'
                            />
                            </p>
                        </div>
                    </div>

                    {/* third */}
                    <div className='flex flex-row justify-center'>
                        <Image className='m-9'
                            alt='pic3'
                            width={600}
                            height={300}
                            src='/shoplist/pic3.png'
                        />
                        <div className='flex flex-col gap-4 mt-9 ml-7'>

                            <div className='flex flex-row gap-64 items-center'>
                                <h1 className='text-[#151875] text-4xl font-bold tracking-wider my-3'>Vel sem</h1>
                                <div className='flex flex-row gap-3 justify-center'>
                                    <div className='w-5 h-5 rounded-full bg-[#DE9034]'></div>
                                    <div className='w-5 h-5 rounded-full bg-[#EC42A2]'></div>
                                    <div className='w-5 h-5 rounded-full bg-[#8568FF]'></div>
                                </div>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <h2 className='text-[#151875] text-2xl font-bold tracking-wider my-3 '>$26.00</h2>
                                <span className='text-[#FF289F] text-2xl font-bold tracking-wider my-3 '>$52.00</span>

                                <div className='flex gap-1'>
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-gray-400 my-3' />
                                </div>

                            </div>

                            <p className='text-[#8A8FB9] leading-10 text-3xl w-[1000px] text-justify  '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil sequi minus a quasi soluta autem rem repellat eligendi laborum dolores, deleniti omnis repellendus temporibus quod ipsum, eos sapiente, inventore expedita?
                            <Image className=' ml-0'
                            alt='cart'
                            width={300}
                            height={200}
                            src='/shoplist/pic8.png'
                            />
                            </p>
                        </div>
                    </div>

                    {/* fourth */}
                    <div className='flex flex-row justify-center'>
                        <Image className='m-9'
                            alt='pic4'
                            width={600}
                            height={300}
                            src='/shoplist/pic4.png'
                        />
                        <div className='flex flex-col gap-4 mt-9 ml-7'>

                            <div className='flex flex-row gap-48 items-center'>
                                <h1 className='text-[#151875] text-4xl font-bold tracking-wider my-3'>Porttior cum</h1>
                                <div className='flex flex-row gap-3 justify-center'>
                                    <div className='w-5 h-5 rounded-full bg-[#DE9034]'></div>
                                    <div className='w-5 h-5 rounded-full bg-[#EC42A2]'></div>
                                    <div className='w-5 h-5 rounded-full bg-[#8568FF]'></div>
                                </div>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <h2 className='text-[#151875] text-2xl font-bold tracking-wider my-3 '>$26.00</h2>
                                <span className='text-[#FF289F] text-2xl font-bold tracking-wider my-3 '>$52.00</span>

                                <div className='flex gap-1'>
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-gray-400 my-3' />
                                </div>

                            </div>

                            <p className='text-[#8A8FB9] leading-10 text-3xl w-[1000px] text-justify '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil sequi minus a quasi soluta autem rem repellat eligendi laborum dolores, deleniti omnis repellendus temporibus quod ipsum, eos sapiente, inventore expedita?
                            <Image className=' ml-0'
                            alt='cart'
                            width={300}
                            height={200}
                            src='/shoplist/pic8.png'
                            />
                            </p>
                        </div>
                    </div>

                    {/* fifth */}
                    <div className='flex flex-row justify-center'>
                        <Image className='m-9'
                            alt='pic5'
                            width={600}
                            height={300}
                            src='/shoplist/pic5.png'
                        />
                        <div className='flex flex-col gap-4 mt-9 ml-7'>

                            <div className='flex flex-row gap-72 items-center'>
                                <h1 className='text-[#151875] text-4xl font-bold tracking-wider my-3'>Nunc in</h1>
                                <div className='flex flex-row gap-3 justify-center'>
                                    <div className='w-5 h-5 rounded-full bg-[#DE9034]'></div>
                                    <div className='w-5 h-5 rounded-full bg-[#EC42A2]'></div>
                                    <div className='w-5 h-5 rounded-full bg-[#8568FF]'></div>
                                </div>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <h2 className='text-[#151875] text-2xl font-bold tracking-wider my-3 '>$26.00</h2>
                                <span className='text-[#FF289F] text-2xl font-bold tracking-wider my-3 '>$52.00</span>

                                <div className='flex gap-1'>
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-gray-400 my-3' />
                                </div>

                            </div>

                            <p className='text-[#8A8FB9] leading-10 text-3xl w-[1000px] text-justify '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil sequi minus a quasi soluta autem rem repellat eligendi laborum dolores, deleniti omnis repellendus temporibus quod ipsum, eos sapiente, inventore expedita?
                            <Image className=' ml-0'
                            alt='cart'
                            width={300}
                            height={200}
                            src='/shoplist/pic8.png'
                            />
                            </p>
                        </div>
                    </div>

                    {/* sixth */}
                    <div className='flex flex-row justify-center'>
                        <Image className='m-9'
                            alt='pic6'
                            width={600}
                            height={300}
                            src='/shoplist/pic6.png'
                        />
                        <div className='flex flex-col gap-4 mt-9 ml-7'>

                            <div className='flex flex-row gap-44 items-center'>
                                <h1 className='text-[#151875] text-4xl font-bold tracking-wider my-3'>Vitae facilisis</h1>
                                <div className='flex flex-row gap-3 justify-center'>
                                    <div className='w-5 h-5 rounded-full bg-[#DE9034]'></div>
                                    <div className='w-5 h-5 rounded-full bg-[#EC42A2]'></div>
                                    <div className='w-5 h-5 rounded-full bg-[#8568FF]'></div>
                                </div>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <h2 className='text-[#151875] text-2xl font-bold tracking-wider my-3 '>$26.00</h2>
                                <span className='text-[#FF289F] text-2xl font-bold tracking-wider my-3 '>$52.00</span>

                                <div className='flex gap-1'>
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-gray-400 my-3' />
                                </div>

                            </div>

                            <p className='text-[#8A8FB9] leading-10 text-3xl w-[1000px] text-justify '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil sequi minus a quasi soluta autem rem repellat eligendi laborum dolores, deleniti omnis repellendus temporibus quod ipsum, eos sapiente, inventore expedita?
                            <Image className=' ml-0'
                            alt='cart'
                            width={300}
                            height={200}
                            src='/shoplist/pic8.png'
                            />
                            </p>
                        </div>
                    </div>

                    {/* seventh */}
                    <div className='flex flex-row justify-center'>
                        <Image className=' m-9'
                            alt='pic7'
                            width={600}
                            height={300}
                            src='/shoplist/pic7.png'
                        />
                        <div className='flex flex-col gap-4 mt-9 ml-7'>

                            <div className='flex flex-row gap-36 items-center'>
                                <h1 className='text-[#151875] text-4xl font-bold tracking-wider my-3'>Curaitur lectus</h1>
                                <div className='flex flex-row gap-3 justify-center'>
                                    <div className='w-5 h-5 rounded-full bg-[#DE9034]'></div>
                                    <div className='w-5 h-5 rounded-full bg-[#EC42A2]'></div>
                                    <div className='w-5 h-5 rounded-full bg-[#8568FF]'></div>
                                </div>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <h2 className='text-[#151875] text-2xl font-bold tracking-wider my-3 '>$26.00</h2>
                                <span className='text-[#FF289F] text-2xl font-bold tracking-wider my-3 '>$52.00</span>

                                <div className='flex gap-1'>
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-yellow-400 my-3' />
                                    <IoStarSharp size={30} className='text-gray-400 my-3' />
                                </div>

                            </div>

                            <p className='text-[#8A8FB9] leading-10 text-3xl w-[1000px] text-justify  '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil sequi minus a quasi soluta autem rem repellat eligendi laborum dolores, deleniti omnis repellendus temporibus quod ipsum, eos sapiente, inventore expedita?
                            <Image className=' ml-0'
                            alt='cart'
                            width={300}
                            height={200}
                            src='/shoplist/pic8.png'
                            />
                            </p>
                        </div>
                    </div>

                </div>

            </section>

            {/* footer */}
            <Topfooter/>
        </div>

    )
}

export default Shoplist