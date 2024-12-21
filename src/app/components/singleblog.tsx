import React from 'react'
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";
import { IoStarSharp } from "react-icons/io5";
import { Button } from '@/components/ui/button';
import Topfooter from './topfooter';

const Singleblog = () => {
    return (
        <div>

            {/* header */}
            <header className='w-full  h-72 bg-[#EEEFFB] p-28 my-6'>
                <h1 className='text-5xl font-bold text-[#101750] flex  items-center pl-80'>Single Blog</h1>
                <h2 className='text-gray-500 text-4xl mt-6 px-80'>Home.Pages. <span className='text-[#FF289F] text-4xl cursor-pointer hover:underline'> Single Blog </span></h2>
            </header>

            {/* section */}
            <section>
                <div className="flex flex-row my-20 ">
                    {/* section 1 */}
                    <div className='flex flex-col ml-[400px] mr-10 w-[1200px]'>
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
                        <p className='text-[#8A8FB9] leading-relaxed m-2 text-2xl tracking-widest w-[1200px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad reiciendis magni placeat illo id obcaecati eos. Eum eos saepe minus distinctio amet nam.</p>
                        <p className='text-[#8A8FB9] leading-relaxed m-2 text-2xl tracking-widest w-[1200px] my-20 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad reiciendis magni placeat illo id obcaecati eos. Eum eos saepe minus distinctio amet nam magni deleniti, ut quidem consequuntur inventore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed maxime fuga blanditiis magnam quos explicabo officiis ab reprehenderit recusandae enim facilis, atque itaque, error doloribus deserunt excepturi voluptates delectus sit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat commodi ad nulla facilis soluta, cupiditate veniam eius placeat facere ea autem sit repellendus dignissimos esse temporibus reiciendis optio? Quisquam, qui.</p>

                        <div className='border-l-[6px] border-l-[#FF289F] text-[#969CB4] bg-[#FAFAFB] text-justify text-3xl my-16 py-10 px-5 leading-loose w-[1170px]'>
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus cupiditate libero minima a, adipisci esse culpa ratione, unde eius, similique ut atque repellat. Voluptas fuga ab corrupti enim excepturi expedita'.
                        </div>
                        <div className='flex flex-row gap-4 my-6'>
                            <Image
                                alt='pic1'
                                width={600}
                                height={300}
                                src='/single-blog/pic1.png'
                            ></Image>
                            <Image
                                alt='pic2'
                                width={600}
                                height={300}
                                src='/single-blog/pic2.png'
                            ></Image>

                        </div>
                        <p className='text-[#8A8FB9] leading-relaxed m-2 text-2xl tracking-widest w-[1200px] my-20 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores explicabo quisquam voluptate iusto rem necessitatibus adipisci. Est in voluptas totam enim quis, facere quam nemo delectus, corporis sunt ab! Quidem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, atque? Consequuntur illum incidunt accusamus reiciendis quo sequi laborum, tempore architecto rem eius. Vero dolorem quae ipsam molestias blanditiis sunt officia.</p>

                        <div className='flex flex-row gap-2'>
                            <div className='flex flex-col gap-4'>
                                <Image
                                    alt='pic3'
                                    width={300}
                                    height={400}
                                    src='/single-blog/pic3.png'
                                ></Image>
                                <h2 className='text-4xl text-center font-semibold'>Quam sed</h2>
                                <div className='flex flex-row gap-3'>
                                    <span className='text-center text-[#151875] text-xl'>$32.00</span>
                                    <span className='text-[#FF289F] text-xl   line-through '>$56.00</span>
                                    <div className='flex flex-row gap-1'>
                                        <IoStarSharp size={30} className='text-yellow-400' />
                                        <IoStarSharp size={30} className='text-yellow-400' />
                                        <IoStarSharp size={30} className='text-yellow-400' />
                                        <IoStarSharp size={30} className='text-yellow-400' />
                                        <IoStarSharp size={30} className='text-gray-400' />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <Image
                                    alt='pic4'
                                    width={300}
                                    height={400}
                                    src='/single-blog/pic4.png'
                                ></Image>
                                <h2 className='text-4xl text-center font-semibold'>Tristique sed</h2>
                                <div className='flex flex-row gap-3'>
                                    <span className='text-center text-[#151875] text-xl'>$32.00</span>
                                    <span className='text-[#FF289F] text-xl line-through '>$56.00</span>
                                    <div className='flex flex-row gap-1'>
                                        <IoStarSharp size={30} className='text-yellow-400' />
                                        <IoStarSharp size={30} className='text-yellow-400' />
                                        <IoStarSharp size={30} className='text-yellow-400' />
                                        <IoStarSharp size={30} className='text-yellow-400' />
                                        <IoStarSharp size={30} className='text-gray-400' />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <Image
                                    alt='pic5'
                                    width={300}
                                    height={400}
                                    src='/single-blog/pic5.png'
                                ></Image>
                                <h2 className='text-4xl text-center font-semibold'>A etium</h2>
                                <div className='flex flex-row gap-3'>
                                    <span className='text-center text-[#151875] text-xl'>$32.00</span>
                                    <span className='text-[#FF289F] text-xl   line-through '>$56.00</span>
                                    <div className='flex flex-row gap-1'>
                                        <IoStarSharp size={30} className='text-yellow-400' />
                                        <IoStarSharp size={30} className='text-yellow-400' />
                                        <IoStarSharp size={30} className='text-yellow-400' />
                                        <IoStarSharp size={30} className='text-yellow-400' />
                                        <IoStarSharp size={30} className='text-gray-400' />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <Image
                                    alt='pic6'
                                    width={300}
                                    height={400}
                                    src='/single-blog/pic6.png'
                                ></Image>
                                <h2 className='text-4xl text-center font-semibold'>Mi nisi</h2>
                                <div className='flex flex-row gap-3'>
                                    <span className='text-center text-[#151875] text-xl'>$32.00</span>
                                    <span className='text-[#FF289F] text-xl   line-through '>$56.00</span>
                                    <div className='flex flex-row gap-1'>
                                        <IoStarSharp size={30} className='text-yellow-400' />
                                        <IoStarSharp size={30} className='text-yellow-400' />
                                        <IoStarSharp size={30} className='text-yellow-400' />
                                        <IoStarSharp size={30} className='text-yellow-400' />
                                        <IoStarSharp size={30} className='text-gray-400' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className='text-[#8A8FB9] leading-relaxed m-2 text-2xl tracking-widest w-[1200px] my-20 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad reiciendis magni placeat illo id obcaecati eos. Eum eos saepe minus distinctio amet nam magni deleniti, ut quidem consequuntur inventore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed maxime fuga blanditiis magnam quos explicabo officiis ab reprehenderit recusandae enim facilis, atque itaque, error doloribus deserunt excepturi voluptates delectus sit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat commodi ad nulla facilis soluta, cupiditate veniam eius placeat facere ea autem sit repellendus dignissimos esse temporibus reiciendis optio? Quisquam, qui.</p>

                        <p className='text-[#8A8FB9] leading-relaxed m-2 text-2xl tracking-widest w-[1200px] my-20 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad reiciendis magni placeat illo id obcaecati eos. Eum eos saepe minus distinctio amet nam magni deleniti, ut quidem consequuntur inventore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed maxime fuga blanditiis magnam quos explicabo officiis ab reprehenderit recusandae enim facilis, atque itaque, error doloribus deserunt excepturi voluptates delectus sit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat commodi ad nulla facilis soluta, cupiditate veniam eius placeat facere ea autem sit repellendus dignissimos esse temporibus reiciendis optio? Quisquam, qui.</p>

                        <Image className='ml-96'
                            alt='links'
                            width={300}
                            height={40}
                            src='/single-blog/links.png'
                        ></Image>
                        <Image className='my-12'
                            alt='navbar'
                            width={1200}
                            height={100}
                            src='/single-blog/navbar.png'
                        ></Image>

                        <div className='border-4 shadow-2xl p-4 w-[1200px] mb-16 mt-24'>
                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='pic7'
                                    width={200}
                                    height={200}
                                    src='/single-blog/pic7.png'
                                ></Image>
                                <div className='flex flex-col gap-2'>
                                <div className='flex flex-row gap-9 p-4'>
                                <h1 className='text-[#363385] text-4xl font-bold'>Sapien ac</h1>
                                <span className='text-[#A3A2B6] text-2xl leading-10 tracking-wide '>Jan 09 2020</span>
                                </div>
                                <p className='text-[#A3A2B6] text-2xl leading-10 tracking-wider w-[700px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam reiciendis nam.</p>
                                </div>
                            </div>
                        </div>

                        <div className='border-4 shadow-2xl p-4 w-[1200px] my-16'>
                            <div className='flex flex-row gap-5'>
                                <Image
                                    alt='pic8'
                                    width={200}
                                    height={200}
                                    src='/single-blog/pic8.png'
                                ></Image>
                                <div className='flex flex-col gap-2'>
                                <div className='flex flex-row gap-9 p-4'>
                                <h1 className='text-[#363385] text-4xl font-bold'>Augue conva</h1>
                                <span className='text-[#A3A2B6] text-2xl leading-10 tracking-wide '>Aug 18 2020</span>
                                </div>
                                <p className='text-[#A3A2B6] text-2xl leading-10 tracking-wider w-[700px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam reiciendis nam.</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-row gap-6 mt-16 '>
                        <div className='flex flex-row gap-4 border-2 border-[#8A8FB9] p-4 w-[600px]'>
                            <Image
                            alt='user'
                            width={30}
                            height={30}
                            src='/single-blog/user .png'
                            ></Image>
                        <input className='text-3xl text-[#8A8FB9] tracking-wider' type="text" placeholder='Your Name*'/>
                        </div>

                        <div className='flex flex-row gap-4 border-2 border-[#8A8FB9] p-4 w-[600px]'>
                            <Image
                            alt='mail'
                            width={30}
                            height={30}
                            src='/single-blog/mail.png'
                            ></Image>
                        <input className='text-3xl  text-[#8A8FB9]   tracking-wider' type="text" placeholder='Write Your Email*'/>
                        </div>
                        </div>
                        <div className='flex flex-row gap-4 border-2 border-[#8A8FB9] p-4 w-[1200px] my-16'>
                        <Image className='h-9 w-9 m-5 mr-2'
                            alt='message'
                            width={30}
                            height={30}
                            src='/single-blog/message.png'
                        ></Image> 
                        <textarea className='text-4xl text-[#8A8FB9]   tracking-wider p-5 pl-1' name="message" id="message" rows={8}>Write your comment*</textarea>
                        </div>
                        <div className='flex flex-row gap-4'>
                        <div className='w-7 h-7 border-4 border-[#8A8FB9]'></div>
                        <p className='text-[#8A91AB] text-3xl font-medium'>Save my name,email and website in this browser for the next time i comment</p>
                        </div>
                        <Button className='hover:bg-pink-400 bg-[#FF289F] text-white h-12 text-4xl my-16 px-7 py-10 tracking-widest font-medium' variant="destructive">Continue Shipping</Button>
                    </div>

                    {/* section 2 */}
                    <div className='flex flex-col ml-20'>
                        {/* search */}
                        <h1 className='font-bold text-[#151875] text-4xl my-3 tracking-wider '>Search</h1>
                        <div className='flex flex-row gap-16 border-4  border-gray-200 px-4 py-4 text-2xl tracking-wider'>
                            <input className='text-[#8A8FB9] outline-none' type="text" placeholder='Search For Posts'
                            /><CiSearch size={30} className='text-[#8A8FB9]' />
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

                    {/* footer */}
                    <Topfooter/>
                </div>
            </section>
        </div>
    )
}

export default Singleblog