import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Topfooter from './topfooter'

const Homepage = () => {
    return (
        <div className='complete-homepage'>

            {/* promotional header */}
            <header className='header-container flex flex-row bg-[#F2F0FF]  tracking-widest pl-96 px-14'>
                <div className="header-black-image pl-52">
                    <Image className='h-[600px]'
                        alt='lamp'
                        width={387}
                        height={387}
                        src='/home/header/black pic.png'
                    />
                </div>
                <div className="header-content flex flex-col gap-6 my-24 w-[1500px]">
                    <h2 className='text-[#FF289F] text-4xl font-bold mb-9 tracking-widest'>Best Furniture For Your Castle</h2>
                    <h1 className='text-[#000000] text-[43px] font-bold mb-5 w-[580px] h-36 tracking-wider'>New Furniture Collection Trends in 2020 </h1>
                    <p className='text-[#8A8FB9] text-3xl mb-7 w-2/3 tracking-widest leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi accusantium expedita quasi amet vitae tempore ullam nisi ducimus sint magni, doloribus molestias, explicabo et, cumque dolor dolorum provident unde fugit!</p>
                    <Button className='bg-[#FF289F] text-white h-12 w-52 text-3xl my-3 p-7' variant="destructive">Shop Now</Button>
                </div>
                <div className="header-sofa-image mr-24">
                    <Image className='w-[600px] h-[600px] mt-20'
                        alt='sofa'
                        width={900}
                        height={689}
                        src='/home/header/sofa.png'
                    />
                </div>
            </header>

            {/* featured-products */}
            <section>
                <div className="feature-container">

                    {/* heading */}
                    <h1 className='py-24 flex justify-center text-[#1A0B5B] text-5xl font-bold tracking-wider'>Featured Products</h1>

                    {/* images */}
                    <div className='flex flex-row gap-11 justify-center items-center'>

                        {/* image 1 */}
                        <div className='flex flex-col gap-5 text-center items-center shadow-2xl'>
                            <Image className='bg-[#F6F7FB] p-2 '
                                alt='white'
                                width={400}
                                height={400}
                                src='/home/featured/f.p-1.png'
                            />
                            <h2 className='text-[#FB2E86] font-bold text-3xl p-2 px-9'>Cantilever chair</h2>
                            <div className='flex flex-row gap-2 p-2 h-2'>
                                <div className='w-5 h-2 rounded-lg bg-[#05E6B7] flex items-center justify-center'></div>
                                <div className='w-5 h-2 rounded-lg bg-[#F701A8] flex items-center justify-center'></div>
                                <div className='w-5 h-2 rounded-lg bg-[#00009D] flex items-center justify-center'></div>
                            </div>
                            <h2 className='text-[#151875] font-semibold p-2 text-2xl px-12 tracking-wider'>Code . Y523201</h2>
                            <span className='px-20 text-[#151875] p-2 text-2xl tracking-wider'>$42.00</span>
                        </div>

                        {/* image 2 */}
                        <div className='flex flex-col  text-center items-center shadow-2xl'>
                            <Image className='bg-[#F6F7FB] '
                                alt='golden'
                                width={400}
                                height={400}
                                src='/home/featured/f.p-2.png'
                            />
                            <Button className='bg-[#08D15F] text-white h-9 w-40 text-2xl' variant="destructive">View Details</Button>
                            <div className='flex flex-col items-center justify-center w-full gap-3 bg-[#2F1AC4] mx-0 px-0 py-2 text-white'>
                                <h2 className='font-bold text-3xl px-9 tracking-wider'>Cantilever chair</h2>
                                <div className='flex flex-row gap-2 h-2'>
                                    <div className='w-5 h-2 rounded-lg bg-[#05E6B7] flex items-center justify-center'></div>
                                    <div className='w-5 h-2 rounded-lg bg-[#F701A8] flex items-center justify-center'></div>
                                    <div className='w-5 h-2 rounded-lg bg-[#FFEAC1] flex items-center justify-center'></div>
                                </div>
                                <h2 className='font-semibold text-2xl px-12 tracking-wider'>Code . Y523201</h2>
                                <span className='px-20 text-2xl tracking-wider'>$42.00</span>
                            </div>
                        </div>

                        {/* image 3 */}
                        <div className='flex flex-col gap-5 text-center items-center shadow-2xl'>
                            <Image className='bg-[#F6F7FB] p-2 '
                                alt='blue'
                                width={400}
                                height={400}
                                src='/home/featured/f.p-3.png'
                            />
                            <h2 className='text-[#FB2E86] font-bold text-3xl p-2 px-9'>Cantilever chair</h2>
                            <div className='flex flex-row gap-2 p-2 h-2'>
                                <div className='w-5 h-2 rounded-lg bg-[#05E6B7] flex items-center justify-center'></div>
                                <div className='w-5 h-2 rounded-lg bg-[#F701A8] flex items-center justify-center'></div>
                                <div className='w-5 h-2 rounded-lg bg-[#00009D] flex items-center justify-center'></div>
                            </div>
                            <h2 className='text-[#151875] font-semibold p-2 text-2xl px-12 tracking-wider'>Code . Y523201</h2>
                            <span className='px-20 text-[#151875] p-2 text-2xl tracking-wider'>$42.00</span>
                        </div>

                        {/* image 4 */}
                        <div className='flex flex-col gap-5 text-center items-center shadow-2xl '>
                            <Image className='bg-[#F6F7FB] p-2 h-[400px] '
                                alt='creme'
                                width={400}
                                height={400}
                                src='/home/featured/f.p-4.png'
                            />
                            <h2 className='text-[#FB2E86] font-bold text-3xl p-2 px-9'>Cantilever chair</h2>
                            <div className='flex flex-row gap-2 p-2 h-2'>
                                <div className='w-5 h-2 rounded-lg bg-[#05E6B7] flex items-center justify-center'></div>
                                <div className='w-5 h-2 rounded-lg bg-[#F701A8] flex items-center justify-center'></div>
                                <div className='w-5 h-2 rounded-lg bg-[#00009D] flex items-center justify-center'></div>
                            </div>
                            <h2 className='text-[#151875] font-semibold p-2 text-2xl px-12 tracking-wider'>Code . Y523201</h2>
                            <span className='px-20 text-[#151875] p-2 text-2xl tracking-wider'>$42.00</span>
                        </div>


                    </div>

                    {/* red lines */}
                    <div className='flex flex-row gap-2 justify-center h-4 m-28 mt-36'>
                        <div className='w-7 h-3 rounded-lg bg-[#FB2E86] flex items-center justify-center'></div>
                        <div className='w-7 h-3 rounded-lg bg-[#FEBAD7] flex items-center justify-center'></div>
                        <div className='w-7 h-3 rounded-lg bg-[#FEBAD7] flex items-center justify-center'></div>
                        <div className='w-7 h-3 rounded-lg bg-[#FEBAD7] flex items-center justify-center'></div>
                    </div>
                </div>
            </section>

            {/* latest-products */}
            <section>
                <div className='latest-container'>

                    {/* heading */}
                    <h1 className='m-16 flex justify-center text-[#1A0B5B] text-5xl font-bold tracking-wider'>Latest Products</h1>

                    {/* navbar */}
                    <ul className='flex flex-row gap-20 items-center justify-center text-4xl cursor-pointer text-[#151875] font-bold tracking-wide mx-16 my-24'>
                        <li className='text-[#FB2E86] underline'>New Arrival</li>
                        <li>Best Seller</li>
                        <li>Featured</li>
                        <li>Special Offer</li>
                    </ul>

                    {/* images */}
                    <div className='flex flex-col gap-7 '>

                        <div className='flex flex-row gap-16 justify-center m-3'>

                            {/* image 1 */}
                            <div className='shadow-2xl'>
                                <Image className='w-[500px] h-[400px] px-5'
                                    alt='brown'
                                    width={500}
                                    height={500}
                                    src='/home/latest/l.p-1.jpg'
                                />
                                <div className='flex justify-between'>
                                    <h1 className='text-[#151875] text-xl '>Comfort Handy Craft</h1>
                                    <p className='text-[#151875] text-lg '>$42.00 <span className='text-[#FB2448] line-through text-lg'>$65.00</span></p>
                                </div>
                            </div>

                            {/* image 2 */}
                            <div className='shadow-2xl'>
                                <Image className='w-[500px] h-[400px]'
                                    alt='orange'
                                    width={500}
                                    height={500}
                                    src='/home/latest/l.p-2.jpg'
                                />
                                <div className='flex justify-between '>
                                    <h1 className='text-[#151875] text-xl'>Comfort Handy Craft</h1>
                                    <p className='text-[#151875] text-lg'>$42.00 <span className='text-[#FB2448] line-through text-lg'>$65.00</span></p>
                                </div>
                            </div>

                            {/* image 3 */}
                            <div className='shadow-2xl'>
                                <Image className='w-[500px] h-[400px]'
                                    alt='white'
                                    width={500}
                                    height={500}
                                    src='/home/latest/l.p-3.jpg'
                                />
                                <div className='flex justify-between'>
                                    <h1 className='text-[#151875] text-xl'>Comfort Handy Craft</h1>
                                    <p className='text-[#151875] text-lg'>$42.00 <span className='text-[#FB2448] line-through text-lg'>$65.00</span></p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-row gap-16 justify-center m-3'>

                            {/* image 4 */}
                            <div className='shadow-2xl'>
                                <Image className='w-[500px] h-[400px]'
                                    alt='white'
                                    width={500}
                                    height={500}
                                    src='/home/latest/l.p-4.jpg'
                                />
                                <div className='flex justify-between'>
                                    <h1 className='text-[#151875] text-xl'>Comfort Handy Craft</h1>
                                    <p className='text-[#151875] text-lg'>$42.00 <span className='text-[#FB2448] line-through text-lg'>$65.00</span></p>
                                </div>
                            </div>

                            {/* image 5 */}
                            <div className='shadow-2xl'>
                                <Image className='w-[500px] h-[400px]'
                                    alt='black'
                                    width={500}
                                    height={500}
                                    src='/home/latest/l.p-5.jpg'
                                />
                                <div className='flex justify-between'>
                                    <h1 className='text-[#151875] text-xl'>Comfort Handy Craft</h1>
                                    <p className='text-[#151875] text-lg'>$42.00 <span className='text-[#FB2448] line-through text-lg'>$65.00</span></p>
                                </div>
                            </div>

                            {/* image 6 */}
                            <div className='shadow-2xl'>
                                <Image className='w-[500px] h-[400px]'
                                    alt='creme'
                                    width={500}
                                    height={500}
                                    src='/home/latest/l.p-6.jpg'
                                />
                                <div className='flex justify-between'>
                                    <h1 className='text-[#151875] text-xl'>Comfort Handy Craft</h1>
                                    <p className='text-[#151875] text-lg'>$42.00 <span className='text-[#FB2448] line-through text-lg'>$65.00</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row gap-7'></div>
                    </div>
                </div>
            </section>

            {/* What Shopex Offer! */}
            <section>
                <div className="mx-[300px] mb-20">
                    <h1 className='m-16 flex justify-center text-[#1A0B5B] text-5xl font-bold tracking-wider'>What Shopex Offer!</h1>
                    <div className=" flex flex-row gap-8">
                        <div className="flex flex-col border border-solid m-4 p-4 justify-center items-center bg-white shadow-2xl">
                            <Image className="rounded-md shadow-lg"
                                alt='free delivery'
                                width={100}
                                height={100}
                                src='/about/free-delivery.png'
                            />
                            <h2 className="font-bold tracking-wider text-[#151875] text-2xl m-2 leading-7 mt-5">Free Delivery</h2>
                            <p className='text-[#8A8FB9] leading-8 m-2 text-2xl tracking-wider text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut perferendis</p>
                        </div>

                        <div className="flex flex-col border border-solid m-4 p-4 justify-center items-center bg-white border-b-4 border-b-[#FF9100] shadow-2xl">
                            <Image
                                alt='cash back'
                                width={100}
                                height={100}
                                src='/about/cashback.png'
                            />
                            <h2 className="font-bold tracking-wider text-[#151875] text-2xl m-2 leading-7 mt-5">100% Cash Back</h2>
                            <p className='text-[#8A8FB9] leading-8 m-2 text-2xl tracking-wider text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut perferendis</p>
                        </div>

                        <div className="flex flex-col border border-solid m-4 p-4 justify-center items-center bg-white shadow-2xl">
                            <Image
                                alt='premium quality'
                                width={100}
                                height={100}
                                src='/about/premium-quality.png'
                            />
                            <h2 className="font-bold tracking-wider text-[#151875] text-2xl m-2 leading-7 mt-5">Quality Product</h2>
                            <p className='text-[#8A8FB9] leading-8 m-2 text-2xl tracking-wider text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut perferendis</p>
                        </div>

                        <div className="flex flex-col border border-solid m-4 p-4 justify-center items-center bg-white shadow-2xl">
                            <Image
                                alt='24 hours support'
                                width={100}
                                height={100}
                                src='/about/24-hours-support .png'
                            />
                            <h2 className="font-bold tracking-wider text-[#151875] text-2xl m-2 mt-5 leading-7 ">24/7 Support</h2>
                            <p className='text-[#8A8FB9] leading-8 m-2 text-2xl tracking-wider text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut perferendis</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* second header */}
            <header>
                <div className='flex flex-row justify-center gap-16 bg-[rgb(241,240,255)] p-20 mb-20'>
                    <div className="left">
                        <Image className='w-[600px] h-[600px]'
                            alt='blue sofa'
                            width={500}
                            height={500}
                            src='/home/sofa/sofapic.png'
                        />
                    </div>
                    <div className="right mt-16 w-[700px]">
                        <h1 className='font-bold text-[#151875] text-5xl mb-3 tracking-wide leading-relaxed'>Unique Features Of Latest & Trending Products</h1>
                        <div className='flex flex-col gap-8'>
                            <div className='flex flex-row gap-3'>
                                <div className='w-5 h-5 rounded-full bg-[#F52B70] mt-1'></div>
                                <div className='text-[#ACABC3] text-2xl tracking-wide'>
                                    All frames constructed with hardwood solids and laminates.
                                </div>
                            </div>
                            <div className='flex flex-row gap-3'>
                                <div className='w-5 h-5 rounded-full bg-[#2B2BF5] mt-1'></div>
                                <div className='text-[#ACABC3] text-2xl tracking-wide'>
                                    Reinforced with double wood dowels,glue,screw - nails corner blocks and machine nails.
                                </div>
                            </div>
                            <div className='flex flex-row gap-3'>
                                <div className='w-5 h-5 rounded-full bg-[#2BF5CC] mt-1'></div>
                                <div className='text-[#ACABC3] text-2xl tracking-wide'>
                                    Arms,backs and seats are structurally reinforced.
                                </div>
                            </div>
                            <div className='flex flex-row gap-4'>
                                <Button className='bg-[#FB2E86] rounded-lg m-3 w-56 text-xl py-8 hover:bg-pink-400'>Add To Cart</Button>
                                <div className='text-[#151875] text-2xl font-bold w-56 mt-4'>
                                    B&B Italian Sofa $32.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* trending products */}
            <section>
                <div>
                    <h1 className='m-16 flex justify-center text-[#1A0B5B] text-5xl font-bold tracking-wider'>Trending Products</h1>
                    <div className='flex flex-row gap-24 justify-center bg-white mb-16'>
                        <div className='flex flex-col shadow-2xl p-5'>
                            <Image className='bg-[#F5F6F8] p-2 '
                                alt='grey'
                                width={400}
                                height={400}
                                src='/home/trending/grey.png'
                            />
                            <h2 className='text-[#151875] text-2xl font-bold mt-4 tracking-wide text-center leading-9' >Centilever chair</h2>
                            <div className='flex flex-row justify-center gap-3'>
                                <span className='text-[#151875] text-xl mt-2 text-center font-bold'>$26.00</span>
                                <p className='text-[#8A8FB9] text-xl mt-2 text-center '>$42.00</p>
                            </div>
                        </div>
                        <div className='flex flex-col shadow-2xl p-5'>
                            <Image className='bg-[#F5F6F8] p-2 '
                                alt='red'
                                width={400}
                                height={400}
                                src='/home/trending/red.png'
                            />
                            <h2 className='text-[#151875] text-2xl font-bold mt-4 tracking-wide text-center leading-9' >Centilever chair</h2>
                            <div className='flex flex-row justify-center gap-3'>
                                <span className='text-[#151875] text-xl mt-2 text-center font-bold'>$26.00</span>
                                <p className='text-[#8A8FB9] text-xl mt-2 text-center '>$42.00</p>
                            </div>
                        </div>
                        <div className='flex flex-col shadow-2xl p-5'>
                            <Image className='bg-[#F5F6F8] p-2 h-[400px]'
                                alt='white'
                                width={400}
                                height={400}
                                src='/home/trending/white.png'
                            />
                            <h2 className='text-[#151875] text-2xl font-bold mt-4 tracking-wide text-center leading-9' >Centilever chair</h2>
                            <div className='flex flex-row justify-center gap-3'>
                                <span className='text-[#151875] text-xl mt-2 text-center font-bold'>$26.00</span>
                                <p className='text-[#8A8FB9] text-xl mt-2 text-center '>$42.00</p>
                            </div>
                        </div>
                        <div className='flex flex-col shadow-2xl p-5'>
                            <Image className='bg-[#F5F6F8] p-2 h-[400px]'
                                alt='black'
                                width={400}
                                height={400}
                                src='/home/trending/black.png'
                            />
                            <h2 className='text-[#151875] text-2xl font-bold mt-4 tracking-wide text-center leading-9' >Centilever chair</h2>
                            <div className='flex flex-row justify-center gap-6'>
                                <span className='text-[#151875] text-xl mt-2 text-center font-bold'>$26.00</span>
                                <p className='text-[#8A8FB9] text-xl mt-2 text-center '>$42.00</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-6 m-8 justify-center'>
                        <div className='flex flex-col p-6 gap-7 bg-[#FFF6FB] w-[700px]'>
                            <h1 className='text-[#151875] text-5xl font-semibold tracking-wider text-start'>23% off in all products</h1>
                            <span className='text-3xl underline text-[#FF289F] cursor-pointer font-semibold leading-8'>Shop Now</span>
                            <Image className='ml-96'
                                alt='clock'
                                width={300}
                                height={600}
                                src='/home/trending/black-clock.png'
                            />
                        </div>

                        <div className='flex flex-col p-6 gap-7 bg-[rgb(241,240,255)] w-[700px]'>
                            <h1 className='text-[#151875] text-5xl font-semibold tracking-wider text-start'>23% off in all products</h1>
                            <span className='text-3xl underline text-[#FF289F] cursor-pointer font-semibold leading-8'>View Collection</span>
                            <Image className='h-[300px] w-[500px] mt-6 ml-36'
                                alt='yellow'
                                width={300}
                                height={600}
                                src='/home/trending/yellow.png'
                            />
                        </div>
                        <div className='flex flex-col gap-4 p-6 w-[700px]'>
                            <div className='flex flex-row gap-9'>
                                <Image className='bg-[#F5F6F8] '
                                    alt='executive chair'
                                    width={120}
                                    height={120}
                                    src='/home/trending/ex.ch-1.png'
                                />
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#151875] text-3xl font-bold mt-4 tracking-wider text-center leading-9'>Executive Seat Chair</h1>
                                    <span className='text-[#151875] text-2xl mt-2 font-bold'>$32.00</span>
                                </div>

                            </div>
                            <div className='flex flex-row gap-9'>
                                <Image className='bg-[#F5F6F8] '
                                    alt='executive chair'
                                    width={120}
                                    height={120}
                                    src='/home/trending/ex.ch-2.png'
                                />
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#151875] text-3xl font-bold mt-4 tracking-wider text-center leading-9'>Executive Seat Chair</h1>
                                    <span className='text-[#151875] text-2xl mt-2 font-bold'>$32.00</span>
                                </div>
                            </div>
                            <div className='flex flex-row gap-9'>
                                <Image className='bg-[#F5F6F8] '
                                    alt='executive chair'
                                    width={120}
                                    height={120}
                                    src='/home/trending/ex.ch-3.png'
                                />
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#151875] text-3xl font-bold mt-4 tracking-wider text-center leading-9'>Executive Seat Chair</h1>
                                    <span className='text-[#151875] text-2xl mt-2 font-bold'>$32.00</span>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>

            {/* discount Item */}
            <section>

                {/* heading */}
                <h1 className='m-16 mt-36 flex justify-center text-[#1A0B5B] text-5xl font-bold tracking-wider'>Discount Item</h1>

                {/* navbar */}
                <ul className='flex flex-row gap-20 items-center justify-center text-4xl cursor-pointer text-[#151875] tracking-wide mx-16 my-8'>
                    <li className='text-[#FB2E86] underline'>Wood Chair</li>
                    <li>Plastic Chair</li>
                    <li>Sofa Collection</li>
                </ul>

                {/* discount content */}
                <div className='flex flex-row justify-center mx-28'>
                    {/* left side */}
                    <div className='flex flex-col ml-16'>
                        <h1 className='m-6 ml-16 mt-40 flex text-[#1A0B5B] text-5xl font-bold tracking-wider'>20% Discount Of All Products</h1>
                        <h3 className='text-4xl text-[#FF289F] leading-8 m-6 ml-16'>Eams Sofa Compact</h3>
                        <p className='text-[#8A8FB9] leading-loose m-8 text-2xl ml-16 tracking-wider text-left w-[1000px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nihil quidem commodi illo necessitatibus, rem cum reiciendis ipsa dicta, libero magnam assumenda totam, dolor aliquid. Amet explicabo et corporis totam!</p>

                        <div className='flex flex-row gap-8 mt-8'>
                            <div className="flex flex-row ml-16 gap-3">
                                <Image
                                    alt='tick'
                                    width={30}
                                    height={30}
                                    src='/home/discount/right.png'
                                />
                                <p className='text-[#B8B8DC] text-2xl tracking-wider'>Material expose like metals</p>
                            </div>

                            <div className="flex flex-row gap-3">
                                <Image
                                    alt='tick'
                                    width={30}
                                    height={30}
                                    src='/home/discount/right.png'
                                />
                                <p className='text-[#B8B8DC] text-2xl tracking-wider'>Clear lines and geomatric figures.</p>
                            </div>
                        </div>

                        <div className='flex flex-row ml-16 gap-24 m-8'>
                            <div className="flex flex-row gap-3">
                                <Image
                                    alt='tick'
                                    width={30}
                                    height={30}
                                    src='/home/discount/right.png'
                                />
                                <p className='text-[#B8B8DC] text-2xl tracking-wider'>Simple neutral colours</p>
                            </div>

                            <div className="flex flex-row gap-3">
                                <Image
                                    alt='tick'
                                    width={30}
                                    height={30}
                                    src='/home/discount/right.png'
                                />
                                <p className='text-[#B8B8DC] text-2xl tracking-wider'>Material expose like metals.</p>
                            </div>
                        </div>

                        <Button className='bg-[#FB2E86] rounded-lg m-9 w-56 text-xl py-8 hover:bg-pink-400 ml-16'>Shop Now</Button>

                    </div>

                    {/* right side */}
                    <div>
                        <Image
                            alt='discounted-sofa'
                            width={1100}
                            height={1100}
                            src='/home/discount/discount-sofa.png'
                        />
                    </div>
                </div>
            </section>

            {/* top categories */}
            <section>
                {/* heading */}
                <h1 className='m-16 mt-36 flex justify-center text-[#1A0B5B] text-5xl font-bold tracking-wider'>Top Categories</h1>

                {/* images */}
                <div className='flex flex-row gap-9 justify-center'>
                    {/* image 1 */}
                    <div className="flex flex-col">
                        <div className='flex flex-col border-b-8 border-l  border-l-violet-900 border-b-violet-900 rounded-full h-[450px] w-[450px] p-6 items-center justify-center bg-[#F5F6F8]' >
                            <Image className='w-[300px] h-[300px]'
                                alt='grey'
                                width={200}
                                height={200}
                                src='/home/top-categories/grey chair.png'
                            />
                            <Button className='bg-[#08D15F] text-white w-40 text-2xl  py-7'>View Shop</Button>
                        </div>

                        <h2 className='text-[#151875] font-semibold text-2xl tracking-wider mt-7 text-center'>Mini LCW Chair</h2>
                        <span className='text-[#151875] font-semibold text-xl tracking-wider mt-3 text-center'>$56.00</span>
                    </div>

                    {/* image 2 */}
                    <div className="flex flex-col">
                        <div className='flex flex-col rounded-full h-[450px] w-[450px] p-6 items-center justify-center bg-[#F5F6F8]' >
                            <Image className='w-[300px] h-[300px]'
                                alt='grey'
                                width={200}
                                height={200}
                                src='/home/top-categories/white chair.png'
                            />
                            
                        </div>

                        <h2 className='text-[#151875] font-semibold text-2xl tracking-wider mt-7 text-center'>Mini LCW Chair</h2>
                        <span className='text-[#151875] font-semibold text-xl tracking-wider mt-3 text-center'>$56.00</span>
                    </div>

                    {/* image 3 */}
                    <div className="flex flex-col">
                        <div className='flex flex-col rounded-full h-[450px] w-[450px] p-6 items-center justify-center bg-[#F5F6F8]' >
                            <Image className='w-[300px] h-[300px]'
                                alt='grey'
                                width={200}
                                height={200}
                                src='/home/top-categories/pink chair.png'
                            />
                            
                        </div>

                        <h2 className='text-[#151875] font-semibold text-2xl tracking-wider mt-7 text-center'>Mini LCW Chair</h2>
                        <span className='text-[#151875] font-semibold text-xl tracking-wider mt-3 text-center'>$56.00</span>
                    </div>

                    {/* image 4 */}
                    <div className="flex flex-col">
                        <div className='flex flex-col rounded-full h-[450px] w-[450px] p-6 items-center justify-center bg-[#F5F6F8]' >
                            <Image className='w-[300px] h-[300px]'
                                alt='grey'
                                width={200}
                                height={200}
                                src='/home/top-categories/grey chair.png'
                            />
                        </div>

                        <h2 className='text-[#151875] font-semibold text-2xl tracking-wider mt-7 text-center'>Mini LCW Chair</h2>
                        <span className='text-[#151875] font-semibold text-xl tracking-wider mt-3 text-center'>$56.00</span>
                    </div>

                </div>

                {/* red divs */}
                <div className='flex flex-row justify-center m-24 gap-5'>
                    <div className='w-4 h-4 rounded-full border-[#FF289F] bg-[#FF289F]'></div>
                    <div className='w-4 h-4 rounded-full border border-[#FF289F] bg-white'></div>
                    <div className='w-4 h-4 rounded-full border border-[#FF289F]'></div>
                </div>
            </section>

            {/* third header */}
            <section>
                <Image className='w-full my-6'
                    alt='background'
                    width={1200}
                    height={1200}
                    src='/home/third-header/header.png'
                />
            </section>

            {/* footer */}
            <Topfooter/>

            {/* latest blog */}
            <section>
            {/* heading */}
            <h1 className='m-16 mt-36 flex justify-center text-[#1A0B5B] text-5xl font-bold tracking-wider'>Leatest Blog</h1>

            {/* blogs */}
            <div className='flex flex-row gap-36 justify-center'>
                <div className='flex flex-col gap-7 shadow-2xl mb-16'>
                    <Image className='w-[600px]'
                    alt='blog1'
                    width={500}
                    height={500}
                    src='/home/latest-blog/blog1.png'
                    />
                    <div className='flex flex-row gap-4 m-6 '>
                        <Image
                        alt='pen'
                        width={30}
                        height={30}
                        src='/home/latest-blog/pen.png'
                        />
                        <h2 className='flex items-center font-semibold text-[#151875] tracking-wider text-xl'> Saber Ali</h2>
                        <Image
                        alt='calender'
                        width={30}
                        height={30}
                        src='/home/latest-blog/calender.png'
                        />
                        <h2 className='flex items-center font-semibold text-[#151875] tracking-wider text-xl'>21 August,2020</h2>
                    </div>

                    <h1 className='flex text-[#1A0B5B] text-3xl font-bold tracking-wide pl-6'>Top essential Trends in 2021</h1>
                    <p className='text-[#8A8FB9] text-2xl tracking-wider w-[600px] leading-loose pl-6'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                    <h2 className='underline text-2xl cursor-pointer text-[#151875] font-semibold pl-6 pb-9 tracking-wider'>Read More</h2>
                </div>

                <div className='flex flex-col gap-7 shadow-2xl mb-16'>
                    <Image className='w-[600px]'
                    alt='blog2'
                    width={500}
                    height={500}
                    src='/home/latest-blog/blog2.png'
                    />
                    <div className='flex flex-row gap-4 m-6 '>
                        <Image
                        alt='pen'
                        width={30}
                        height={30}
                        src='/home/latest-blog/pen.png'
                        />
                        <h2 className='flex items-center font-semibold text-[#151875] tracking-wider text-xl'> Surfauxion </h2>
                        <Image
                        alt='calender'
                        width={30}
                        height={30}
                        src='/home/latest-blog/calender.png'
                        />
                        <h2 className='flex items-center font-semibold text-[#151875] tracking-wider text-xl'>21 August,2020</h2>
                    </div>

                    <h1 className='flex text-[#FB2E86] text-3xl font-bold tracking-wide pl-6'>Top essential Trends in 2021</h1>
                    <p className='text-[#8A8FB9] text-2xl tracking-wider w-[600px] leading-loose pl-6'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                    <h2 className='underline text-2xl cursor-pointer text-[#FB2E86] font-semibold pl-6 pb-9 tracking-wider'>Read More</h2>
                </div>
                
                <div className='flex flex-col gap-7 shadow-2xl mb-16'>
                    <Image className='w-[600px]'
                    alt='blog3'
                    width={500}
                    height={500}
                    src='/home/latest-blog/blog3.png'
                    />
                    <div className='flex flex-row gap-4 m-6 '>
                        <Image
                        alt='pen'
                        width={30}
                        height={30}
                        src='/home/latest-blog/pen.png'
                        />
                        <h2 className='flex items-center font-semibold text-[#151875] tracking-wider text-xl'> Saber Ali</h2>
                        <Image
                        alt='calender'
                        width={30}
                        height={30}
                        src='/home/latest-blog/calender.png'
                        />
                        <h2 className='flex items-center font-semibold text-[#151875] tracking-wider text-xl'>21 August,2020</h2>
                    </div>

                    <h1 className='flex text-[#1A0B5B] text-3xl font-bold tracking-wide pl-6'>Top essential Trends in 2021</h1>
                    <p className='text-[#8A8FB9] text-2xl tracking-wider w-[600px] leading-loose pl-6'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                    <h2 className='underline text-2xl cursor-pointer text-[#151875] font-semibold pl-6 pb-9 tracking-wider'>Read More</h2>
                </div>

            </div>
            </section>
        </div>
    )
}

export default Homepage