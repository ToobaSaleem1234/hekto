import React from 'react'
import Image from 'next/image';
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiCirclesFourFill } from "react-icons/pi";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoStarSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Topfooter from './topfooter';


const Shopleftsidebar = () => {
    return (
        <div>

            {/* header */}
            <header className='w-full  h-72 bg-[#EEEFFB] p-28'>
                <h1 className='text-5xl font-bold text-[#101750] flex  items-center pl-80'>Shop Left Sidebar</h1>
                <h2 className='text-gray-500 text-4xl mt-2 px-80'>Home.Pages. <span className='text-[#FF289F] text-4xl cursor-pointer hover:underline'> Shop Left Sidebar </span></h2>
            </header>

            {/* navbar section */}
            <section>
                <div className='flex flex-row gap-52 my-36'>

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
                <div className='flex flex-row ml-[400px] mb-28'>

                    {/* sidebar section */}
                    <div className='flex flex-col gap-6 my-10'>

                        {/* product brand */}
                            <h1 className='text-[#151875] text-4xl font-bold tracking-wider my-4 leading-9 underline underline-offset-8 decoration-black'>Product Brand</h1>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/purpletick.png'
                                ></Image>
                                <h1 className='text-[#7E81A2] text-3xl tracking-wider'>Coaster Furniture</h1>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/purpletick.png'
                                ></Image>
                                <h1 className='text-[#7E81A2] text-3xl tracking-wider'>Fusion Dot High Fashion</h1>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='bold'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/bold-purple.png'
                                ></Image>
                                <h1 className='text-[#7E81A2] text-3xl tracking-wider'>Unique Furniture Restor</h1>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/purpletick.png'
                                ></Image>
                                <h1 className='text-[#7E81A2] text-3xl tracking-wider'>Dream Furniture Flipping</h1>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/purpletick.png'
                                ></Image>
                                <h1 className='text-[#7E81A2] text-3xl tracking-wider'>Young Repurposed</h1>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/purpletick.png'
                                ></Image>
                                <h1 className='text-[#7E81A2] text-3xl tracking-wider'>Green DIY Furniture</h1>
                            </div>
            

                        {/* discount offer */}
                            <h1 className='text-[#151875] text-4xl font-bold tracking-wider mb-6 leading-9 underline underline-offset-8 decoration-black mt-20'>Discount Offer</h1>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/pinktick.png'
                                ></Image>
                                <h1 className='text-[#7E81A2] text-3xl tracking-wider'>20% Cashback</h1>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/pinktick.png'
                                ></Image>
                                <h1 className='text-[#7E81A2] text-3xl tracking-wider'>5% Cashback Offer</h1>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/pinktick.png'
                                ></Image>
                                <h1 className='text-[#7E81A2] text-3xl tracking-wider'>25% Discount Offer</h1>
                            </div>

                        {/* Rating Item */}
                            <h1 className='text-[#151875] text-4xl font-bold tracking-wider my-4 leading-9 underline underline-offset-8 decoration-black mt-28'>Rating Item</h1>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/yellowtick.png'
                                ></Image>

                                <div className='flex flex-row gap-1'>
                                    <IoStarSharp size={20} className='text-yellow-400' />
                                    <IoStarSharp size={20} className='text-yellow-400' />
                                    <IoStarSharp size={20} className='text-yellow-400' />
                                    <IoStarSharp size={20} className='text-yellow-400' />
                                    <IoStarSharp size={20} className='text-gray-400' />
                                </div>
                                <span className='text-xl font-bold'>(2341)</span>

                            </div>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/bold-yellow.png'
                                ></Image>

                                <div className='flex flex-row gap-1'>
                                    <IoStarSharp size={20} className='text-yellow-400' />
                                    <IoStarSharp size={20} className='text-yellow-400' />
                                    <IoStarSharp size={20} className='text-yellow-400' />
                                    <IoStarSharp size={20} className='text-gray-400' />
                                    <IoStarSharp size={20} className='text-gray-400' />
                                </div>
                                <span className='text-xl font-bold'>(1726)</span>


                            </div>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/yellowtick.png'
                                ></Image>

                                <div className='flex flex-row gap-1'>
                                    <IoStarSharp size={20} className='text-yellow-400' />
                                    <IoStarSharp size={20} className='text-yellow-400' />
                                    <IoStarSharp size={20} className='text-gray-400' />
                                    <IoStarSharp size={20} className='text-gray-400' />
                                    <IoStarSharp size={20} className='text-gray-400' />
                                </div>
                                <span className='text-xl font-bold'>(258)</span>

                            </div>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/yellowtick.png'
                                ></Image>

                                <div className='flex flex-row gap-1'>
                                    <IoStarSharp size={20} className='text-yellow-400' />
                                    <IoStarSharp size={20} className='text-yellow-400' />
                                    <IoStarSharp size={20} className='text-gray-400' />
                                    <IoStarSharp size={20} className='text-gray-400' />
                                    <IoStarSharp size={20} className='text-gray-400' />
                                </div>
                                <span className='text-xl font-bold'>(25)</span>

                            </div>

                        {/* categories */}
                            <h1 className='text-[#151875] text-4xl font-bold tracking-wider mb-6 leading-9 underline underline-offset-8 decoration-black mt-20'>Categories</h1>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/pinktick.png'
                                ></Image>
                                <h1 className='text-[#7E81A2] text-3xl tracking-wider'>Prestashop</h1>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/pinktick.png'
                                ></Image>
                                <h1 className='text-[#7E81A2] text-3xl tracking-wider'>Magento</h1>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/bold-pink.png'
                                ></Image>
                                <h1 className='text-[#7E81A2] text-3xl tracking-wider'>Bigcommerce</h1>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/pinktick.png'
                                ></Image>
                                <h1 className='text-[#7E81A2] text-3xl tracking-wider'>osCommerce</h1>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/pinktick.png'
                                ></Image>
                                <h1 className='text-[#7E81A2] text-3xl tracking-wider'>3dcart</h1>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/pinktick.png'
                                ></Image>
                                <h1 className='text-[#7E81A2] text-3xl tracking-wider'>Bags</h1>
                            </div>

                            <div className='flex flex-row gap-5'>

                                <h1 className='text-[#7E81A2] text-3xl tracking-wider ml-10'>Accessories</h1>
                            </div>

                            <div className='flex flex-row gap-5'>

                                <h1 className='text-[#7E81A2] text-3xl tracking-wider ml-10'>Jewellery</h1>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/pinktick.png'
                                ></Image>
                                <h1 className='text-[#7E81A2] text-3xl tracking-wider'>Watches</h1>
                            </div>

                        {/* price filter */}
                            <h1 className='text-[#151875] text-4xl font-bold tracking-wider mb-6 leading-9 underline underline-offset-8 decoration-black mt-20'>Price Filter
                            </h1>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/pinktick.png'
                                ></Image>
                                <h1 className='text-[#7E81A2] text-3xl tracking-wider'>$0.00-$150.00</h1>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/pinktick.png'
                                ></Image>
                                <h1 className='text-[#7E81A2] text-3xl tracking-wider'>$150.00- $350.00</h1>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/bold-pink.png'
                                ></Image>
                                <h1 className='text-[#7E81A2] text-3xl tracking-wider'>$350.00- $504.00</h1>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='check'
                                    width={30}
                                    height={30}
                                    src='/shopleftsidebar/pinktick.png'
                                ></Image>
                                <h1 className='text-[#7E81A2] text-3xl tracking-wider'>$450.00 +</h1>
                            </div>
                        

                        {/* input section */}
                        <div className='flex flex-row my-4'>
                            <input className='border-4 border-[#BCBDDB] p-3 text-3xl pl-4 border-r-0 text-[#e7e8f7]' type="text" placeholder='$10.00-20000$' /> <CiSearch size={45} className=' border-4 border-[#BCBDDB] h-[67px] border-l-0 text-[#BCBDDB]' />
                        </div>

                        {/* filter by color */}
                        <div>
                            <h1 className='text-[#151875] text-4xl font-bold tracking-wider mb-6 leading-9 underline underline-offset-8 decoration-black mt-20'>Filter By Color
                            </h1>

                            <div className='flex flex-row gap-7'>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex flex-row gap-3'>
                                        <div className='w-6 h-6 rounded-full bg-[#5E37FF]'></div>
                                        <span className='text-[#7E81A2] text-2xl tracking-wider'>Blue</span>
                                    </div>

                                    <div className='flex flex-row gap-3'>
                                        <div className='w-6 h-6 rounded-full bg-[#33D221]'></div>
                                        <span className='text-[#7E81A2] text-2xl tracking-wider'>Green</span>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-5'>
                                    <div className='flex flex-row gap-3'>
                                        <div className='w-6 h-6 rounded-full bg-[#FF9437]'></div>
                                        <span className='text-[#7E81A2] text-2xl tracking-wider'>Orange</span>
                                    </div>

                                    <div className='flex flex-row gap-3'>
                                        <div className='w-6 h-6 rounded-full bg-[#E248FF]'></div>
                                        <span className='text-[#7E81A2] text-2xl tracking-wider'>Purple</span>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-5'>
                                    <div className='flex flex-row gap-3'>
                                        <div className='w-6 h-6 rounded-full bg-[#FFBF95]'></div>
                                        <span className='text-[#7E81A2] text-2xl tracking-wider'>Brown</span>
                                    </div>

                                    <div className='flex flex-row gap-3'>
                                        <div className='w-6 h-6 rounded-full bg-[#26CBFF]'></div>
                                        <span className='text-[#7E81A2] text-2xl tracking-wider'>Sky</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* shoplist section */}
                    <div className='shadow-xl pr-3 ml-2 '>
                        <div className='flex flex-col justify-center items-center'>
                            {/* first */}
                            <div className='flex flex-row'>
                                <Image className='m-9'
                                    alt='pic1'
                                    width={600}
                                    height={300}
                                    src='/shopleftsidebar/pic1.png'
                                />
                                <div className='flex flex-col gap-4 mt-9 ml-7'>

                                    <div className='flex flex-row gap-11 items-center'>
                                        <h1 className='text-[#151875] text-4xl font-bold tracking-wider my-3'>Dictum morbi</h1>
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
                                    src='/shopleftsidebar/pic2.png'
                                />
                                <div className='flex flex-col gap-4 mt-9 ml-7'>

                                    <div className='flex flex-row gap-64 items-center'>
                                        <h1 className='text-[#151875] text-4xl font-bold tracking-wider my-3'>Sadales sit</h1>
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
                                    src='/shopleftsidebar/pic3.png'
                                />
                                <div className='flex flex-col gap-4 mt-9 ml-7'>

                                    <div className='flex flex-row gap-64 items-center'>
                                        <h1 className='text-[#151875] text-4xl font-bold tracking-wider my-3'>Nibh varius</h1>
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
                                    src='/shopleftsidebar/pic4.png'
                                />
                                <div className='flex flex-col gap-4 mt-9 ml-7'>

                                    <div className='flex flex-row gap-48 items-center'>
                                        <h1 className='text-[#151875] text-4xl font-bold tracking-wider my-3'>Mauris quis</h1>
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
                                    src='/shopleftsidebar/pic5.png'
                                />
                                <div className='flex flex-col gap-4 mt-9 ml-7'>

                                    <div className='flex flex-row gap-72 items-center'>
                                        <h1 className='text-[#151875] text-4xl font-bold tracking-wider my-3'>Morbi sagittis</h1>
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
                                    src='/shopleftsidebar/pic6.png'
                                />
                                <div className='flex flex-col gap-4 mt-9 ml-7'>

                                    <div className='flex flex-row gap-44 items-center'>
                                        <h1 className='text-[#151875] text-4xl font-bold tracking-wider my-3'>Ultricies venotics</h1>
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
                                    src='/shopleftsidebar/pic7.png'
                                />
                                <div className='flex flex-col gap-4 mt-9 ml-7'>

                                    <div className='flex flex-row gap-36 items-center'>
                                        <h1 className='text-[#151875] text-4xl font-bold tracking-wider my-3'>Scelerisque dignissim</h1>
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

                    </div>
                </div>
            </section>

            {/* footer */}
            <Topfooter />
        </div>
    )
}

export default Shopleftsidebar