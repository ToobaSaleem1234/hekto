import React from 'react'
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";
import Topfooter from './topfooter';

const Blog = () => {
    return (
        <div>

            {/* header */}
            <header className='w-full  h-72 bg-[#EEEFFB] p-28 my-20'>
                <h1 className='text-5xl font-bold text-[#101750] flex  items-center pl-80'>Blog Page</h1>
                <h2 className='text-gray-500 text-4xl mt-4 px-80'>Home.Pages. <span className='text-[#FF289F] text-4xl cursor-pointer hover:underline'> Blog Page </span></h2>
            </header>

            {/* main content */}
            <section>
                <div className="flex flex-row">
                    {/* column 1 */}
                    <div className='flex flex-col ml-[400px]'>
                        <Image
                            alt='pic1'
                            width={1200}
                            height={600}
                            src='/blog-page/pic1.png'
                        ></Image>
                        <div className='flex flex-row gap-8 m-6 '>
                            <Image
                                alt='pen'
                                width={30}
                                height={30}
                                src='/home/latest-blog/pen.png'
                            />
                            <h2 className='flex items-center text-[#151875] tracking-widest text-xl border bg-[#FFE7F9] px-8 py-1'> Surf Auxion</h2>
                            <Image
                                alt='calender'
                                width={30}
                                height={30}
                                src='/home/latest-blog/calender.png'
                            />
                            <h2 className='flex items-center text-[#151875] tracking-widest text-xl border bg-[#FFECE2] px-8 py-1'>Aug  09 2020</h2>
                        </div>

                        <h1 className='text-5xl font-bold text-[#151875] my-9 tracking-wide'>Mauris at orci non vulputate diam tinctdunt nec.</h1>
                        <p className='text-[#8A8FB9] leading-10 m-2 text-xl tracking-widest w-[1270px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad reiciendis magni placeat illo id obcaecati eos. Eum eos saepe minus distinctio amet nam magni deleniti, ut quidem consequuntur inventore.</p>

                        <div className='flex flex-row gap-3'>
                            <h2 className='underline text-3xl cursor-pointer text-[#151875] font-semibold my-10 tracking-wider'>Read More</h2>
                            <div className='w-4 h-4 rounded-full bg-[#FF289F] my-12'></div>
                        </div>

                        <Image
                            alt='pic2'
                            width={1200}
                            height={600}
                            src='/blog-page/pic2.png'
                        ></Image>
                        <div className='flex flex-row gap-8 m-6 '>
                            <Image
                                alt='pen'
                                width={30}
                                height={30}
                                src='/home/latest-blog/pen.png'
                            />
                            <h2 className='flex items-center text-[#151875] tracking-widest text-xl border bg-[#FFE7F9] px-8 py-1'> Surf Auxion</h2>
                            <Image
                                alt='calender'
                                width={30}
                                height={30}
                                src='/home/latest-blog/calender.png'
                            />
                            <h2 className='flex items-center text-[#151875] tracking-widest text-xl border bg-[#FFECE2] px-8 py-1'>Aug  09 2020</h2>
                        </div>

                        <h1 className='text-5xl font-bold text-[#151875] my-9 tracking-wide'>Anenean vitae in aliquam ultrices lectus.Etiam..</h1>
                        <p className='text-[#8A8FB9] leading-10 m-2 text-xl tracking-widest w-[1270px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad reiciendis magni placeat illo id obcaecati eos. Eum eos saepe minus distinctio amet nam magni deleniti, ut quidem consequuntur inventore.</p>

                        <div className='flex flex-row gap-3'>
                            <h2 className='underline text-3xl cursor-pointer text-[#151875] font-semibold my-10 tracking-wider'>Read More</h2>
                            <div className='w-4 h-4 rounded-full bg-[#FF289F] my-12'></div>
                        </div>

                        <Image
                            alt='pic3'
                            width={1200}
                            height={600}
                            src='/blog-page/pic3.png'
                        ></Image>
                        <div className='flex flex-row gap-8 m-6 '>
                            <Image
                                alt='pen'
                                width={30}
                                height={30}
                                src='/home/latest-blog/pen.png'
                            />
                            <h2 className='flex items-center text-[#151875] tracking-widest text-xl border bg-[#FFE7F9] px-8 py-1'> Surf Auxion</h2>
                            <Image
                                alt='calender'
                                width={30}
                                height={30}
                                src='/home/latest-blog/calender.png'
                            />
                            <h2 className='flex items-center text-[#151875] tracking-widest text-xl border bg-[#FFECE2] px-8 py-1'>Aug  09 2020</h2>
                        </div>

                        <h1 className='text-5xl font-bold text-[#151875] my-9 tracking-wide'>Sit nam congue feugiat nisl,mauris amet nisi.</h1>
                        <p className='text-[#8A8FB9] leading-10 m-2 text-2xl tracking-widest w-[1270px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad reiciendis magni placeat illo id obcaecati eos. Eum eos saepe minus distinctio amet nam magni deleniti, ut quidem consequuntur inventore.</p>

                        <div className='flex flex-row gap-3'>
                            <h2 className='underline text-3xl cursor-pointer text-[#151875] font-semibold my-10 tracking-wider'>Read More</h2>
                            <div className='w-4 h-4 rounded-full bg-[#FF289F] my-12'></div>
                        </div>
                        <div className='flex flex-row justify-center items-center text-center gap-12 my-9'>
                            <div className='w-14 h-9 border-2 text-white bg-[#FF289F] pt-1 text-xl'>1</div>
                            <div className='w-14 h-9 border-2 border-gray-400 text-[#8A8FB9] pt-1 text-xl '>2</div>
                            <div className='w-14 h-9 border-2 border-gray-400 text-[#8A8FB9] pt-1 text-xl '>3</div>
                            <div className='w-14 h-9 border-2 border-gray-400 text-[#8A8FB9] pt-1 text-xl '>4</div>
                        </div>
                    </div>
                    {/* column 2 */}
                    <div className='flex flex-col'>
                        {/* search */}
                        <h1 className='font-bold text-[#151875] text-4xl my-3 tracking-wider '>Search</h1>
                        <div className='flex flex-row gap-16 border-4  border-gray-200 px-4 py-4 text-2xl tracking-wider'>
                        <input className='text-[#8A8FB9] outline-none' type="text" placeholder='Search For Posts'
                        /><CiSearch size={30} className='text-[#8A8FB9]'/>
                        </div>
                        {/* categories */}
                        <h1 className='font-bold text-[#151875] text-4xl tracking-wider mt-16 mb-5 '>Categories</h1>
                        <div className='grid grid-cols-2'>
                            <div className='bg-[#FF289F] w-44 h-12 text-center pt-2 text-white text-xl tracking-wider my-4'>Hobbies  (14)</div>
                            <div className='w-44 h-12 text-center pt-2 text-[#3F509E] text-2xl my-4'>Women (21)</div>
                            <div className='w-44 h-12 text-center pt-2 text-[#3F509E] text-2xl my-4'>Women (21)</div>
                            <div className='w-44 h-12 text-center pt-2 text-[#3F509E] text-2xl my-4'>Women (21)</div>
                            <div className='w-44 h-12 text-center pt-2 text-[#3F509E] text-2xl my-4'>Women (21)</div>
                            <div className='w-44 h-12 text-center pt-2 text-[#3F509E] text-2xl my-4'>Women (21)</div>
                            
                        </div>
                        {/* recent post */}
                        <h1 className='font-bold text-[#151875] text-4xl tracking-wider mt-16 mb-5 '>Recent Post</h1>
                        
                        <div className='flex flex-row gap-3 my-7'>
                            <Image
                            alt='pic4'
                            width={150}
                            height={120}
                            src='/blog-page/pic4.png'
                            ></Image>
                            <div className='flex flex-col gap-4'>
                            <h2 className='text-[#3F509E] pt-1 text-3xl  font-semibold tracking-wider'>It is a long established fact</h2>
                            <span className='text-[#3F509E] pt-1 text-2xl '>Aug 09 2020</span>
                            </div>
                        </div>

                        <div className='flex flex-row gap-3 my-7'>
                            <Image
                            alt='pic5'
                            width={150}
                            height={120}
                            src='/blog-page/pic5.png'
                            ></Image>
                            <div className='flex flex-col gap-4'>
                            <h2 className='text-[#3F509E] pt-1 text-3xl  font-semibold tracking-wider'>It is a long established fact</h2>
                            <span className='text-[#3F509E] pt-1 text-2xl '>Aug 09 2020</span>
                            </div>
                        </div>

                        <div className='flex flex-row gap-3 my-7'>
                            <Image
                            alt='pic6'
                            width={150}
                            height={120}
                            src='/blog-page/pic6.png'
                            ></Image>
                            <div className='flex flex-col gap-4'>
                            <h2 className='text-[#3F509E] pt-1 text-3xl  font-semibold tracking-wider'>It is a long established fact</h2>
                            <span className='text-[#3F509E] pt-1 text-2xl '>Aug 09 2020</span>
                            </div>
                        </div>

                        <div className='flex flex-row gap-3 my-7'>
                            <Image
                            alt='pic7'
                            width={150}
                            height={120}
                            src='/blog-page/pic7.png'
                            ></Image>
                            <div className='flex flex-col gap-4'>
                            <h2 className='text-[#3F509E] pt-1 text-3xl  font-semibold tracking-wider'>It is a long established fact</h2>
                            <span className='text-[#3F509E] pt-1 text-2xl '>Aug 09 2020</span>
                            </div>
                        </div>

                        {/* sale product */}
                        <h1 className='font-bold text-[#151875] text-4xl tracking-wider mt-16 mb-5 '>Sale Product</h1>
                        <div className='flex flex-row gap-3 my-7'>
                            <Image
                            alt='pic8'
                            width={150}
                            height={120}
                            src='/blog-page/pic8.png'
                            ></Image>
                            <div className='flex flex-col gap-4'>
                            <h2 className='text-[#3F509E] pt-1 text-3xl  font-semibold tracking-wider'>Elit cenare in enuim mauris</h2>
                            <span className='text-[#3F509E] pt-1 text-2xl '>Aug 09 2020</span>
                            </div>
                        </div>

                        <div className='flex flex-row gap-3 my-7'>
                            <Image
                            alt='pic9'
                            width={150}
                            height={120}
                            src='/blog-page/pic9.png'
                            ></Image>
                            <div className='flex flex-col gap-4'>
                            <h2 className='text-[#3F509E] pt-1 text-3xl  font-semibold tracking-wider'>Viverro pulvinor et enium</h2>
                            <span className='text-[#3F509E] pt-1 text-2xl '>Aug 09 2020</span>
                            </div>
                        </div>

                        <div className='flex flex-row gap-3 my-7'>
                            <Image
                            alt='pic10'
                            width={150}
                            height={120}
                            src='/blog-page/pic10.png'
                            ></Image>
                            <div className='flex flex-col gap-4'>
                            <h2 className='text-[#3F509E] pt-1 text-3xl  font-semibold tracking-wider'>Mattis varius donac fdsdfd</h2>
                            <span className='text-[#3F509E] pt-1 text-2xl '>Aug 09 2020</span>
                            </div>
                        </div>

                        {/* offer product */}
                        <h1 className='font-bold text-[#151875] text-4xl tracking-wider mt-16 mb-5 '>Offer Product</h1>
                        <div className='grid grid-cols-2 gap-12'>
                            
                            <div className='flex flex-col gap-4 '>
                            <Image
                            alt='pic11'
                            width={300}
                            height={300}
                            src='/blog-page/pic11.png'
                            ></Image>
                            <h2 className='text-[#3F509E] pt-1 text-3xl  font-semibold tracking-wider text-center'>Duis lectus est..</h2>
                            <span className='text-[#8A8FB9] mt-2 text-2xl  text-center'>$12.00 - $15.00</span>
                            </div>

                            <div className='flex flex-col gap-4'>
                            <Image
                            alt='pic12'
                            width={300}
                            height={300}
                            src='/blog-page/pic12.png'
                            ></Image>
                            <h2 className='text-[#3F509E] pt-1 text-3xl  font-semibold tracking-wider text-center'>Sed placerat..</h2>
                            <span className='text-[#8A8FB9] mt-2 text-2xl  text-center'>$12.00 - $15.00</span>
                            </div>

                            <div className='flex flex-col gap-4'>
                            <Image
                            alt='pic13'
                            width={300}
                            height={300}
                            src='/blog-page/pic13.png'
                            ></Image>
                            <h2 className='text-[#3F509E] pt-1 text-3xl  font-semibold tracking-wider text-center'>Netus proin..</h2>
                            <span className='text-[#8A8FB9] mt-2 text-2xl  text-center'>$12.00 - $15.00</span>
                            </div>

                            <div className='flex flex-col gap-4'>
                            <Image
                            alt='pic14'
                            width={300}
                            height={300}
                            src='/blog-page/pic14.png'
                            ></Image>
                            <h2 className='text-[#3F509E] pt-1 text-3xl  font-semibold tracking-wider text-center'>Platea in..</h2>
                            <span className='text-[#8A8FB9] mt-2 text-2xl  text-center'>$12.00 - $15.00</span>
                            </div>

                        </div>

                        {/* follow */}
                        <h1 className='font-bold text-[#151875] text-4xl tracking-wider mx-12 mt-7'>Follow</h1>
                        <Image className='h-[200px]'
                        alt='links'
                        width={300}
                        height={120}
                        src='/blog-page/pic15.png'
                        ></Image>

                        {/* tags */}
                        <h1 className='font-bold text-[#151875] text-4xl tracking-wider mx-12 my-0'>Tags</h1>
                        <div className='grid grid-cols-3'>
                            <h3 className='mx-12 my-3 pt-6 text-[#3F509E] text-3xl underline underline-offset-4'>General</h3>
                            <h3 className='mx-12 my-3 pt-6 text-[#FF289F] text-3xl underline underline-offset-4'>Atsanil</h3>
                            <h3 className='mx-12 my-3 pt-6 text-[#3F509E] text-3xl underline underline-offset-4'>Insas</h3>
                            <h3 className='mx-12 my-3 pt-6 text-[#3F509E] text-3xl underline underline-offset-4'>Bibsaas</h3>
                            <h3 className='mx-12 my-3 pt-6 text-[#3F509E] text-3xl underline underline-offset-4'>Nulla</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* footer */}
            <Topfooter/>
        </div>
    )
}

export default Blog