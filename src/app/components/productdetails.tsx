import React from 'react'
import Image from 'next/image'
import { IoStarSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button"
import Topfooter from './topfooter';

const Productdetails = () => {
  return (
    <div>

      {/* header */}
      <header className='w-full  h-72 bg-[#EEEFFB] p-28'>
        <h1 className='text-5xl font-bold text-[#101750] flex  items-center pl-80'>Products Details</h1>
        <h2 className='text-gray-500 text-4xl mt-2 px-80'>Home.Pages. <span className='text-[#FF289F] text-4xl cursor-pointer hover:underline'> Products Details </span></h2>
      </header>

      {/* detail section */}
      <section>
        <div className='mx-[400px] my-28 flex flex-row gap-5 border shadow-2xl p-7'>

          {/* column 1 */}
          <div className="flex flex-col gap-8">
            <Image
              alt='pic1'
              width={200}
              height={200}
              src='/productdetail/pic1.png'
            ></Image>

            <Image
              alt='pic2'
              width={200}
              height={200}
              src='/productdetail/pic2.png'
            ></Image>

            <Image
              alt='pic3'
              width={200}
              height={200}
              src='/productdetail/pic3.png'
            ></Image>

          </div>

          {/* column 2 */}
          <div className='m-2 mx-9'>
            <Image
              alt='bag'
              width={500}
              height={500}
              src='/productdetail/pic4.png'
            ></Image>
          </div>

          {/* column 3 */}
          <div className='flex flex-col gap-4 '>
            <h1 className='text-5xl font-bold text-[#101750] tracking-wider mt-9'>Playwood arm chair</h1>
            <div className='flex flex-row gap-4'>
              <div className='flex flex-row gap-1'>
                <IoStarSharp size={30} className='text-yellow-400' />
                <IoStarSharp size={30} className='text-yellow-400' />
                <IoStarSharp size={30} className='text-yellow-400' />
                <IoStarSharp size={30} className='text-yellow-400' />
                <IoStarSharp size={30} className='text-yellow-400' />
              </div>
              <span className='text-2xl font-semibold text-[#151875] '>(22)</span>
            </div>
            <div className='flex flex-row gap-7'>
              <h2 className='text-[#151875] text-2xl font-bold tracking-wider my-3 '>$26.00</h2>
              <span className='text-[#FF289F] text-2xl font-bold tracking-wider my-3 '>$52.00</span>
            </div>
            <h1 className='text-[#151875] text-4xl font-bold tracking-widest'>Colar</h1>
            <p className='text-[#A9ACC6] text-2xl tracking-widest text-justify leading-10 w-[800px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus architecto repudiandae cupiditate</p>
            <Button className='hover:bg-[#FF289F] text-[#151875] h-14 ml-60 text-3xl pl-9 py-7 font-bold tracking-wider border-0 my-6' variant="outline">Add To Cart
              <Image className='w-[300px] mt-8 h-[250px]'
                alt='button'
                width={100}
                height={100}
                src='/productdetail/button.png'
              >
              </Image></Button>
            <h1 className='text-[#151875] text-3xl font-bold tracking-wide my-2'>Categories:</h1>
            <h1 className='text-[#151875] text-3xl font-bold tracking-wide my-2'>Tags</h1>
            <div className='flex flex-row gap-4'>
              <h1 className='text-[#151875] text-3xl font-bold tracking-wide my-2'>Share</h1>
              <Image className='h-[40px] w-[180px] mt-2'
                alt='share'
                width={300}
                height={20}
                src='/productdetail/share.png'

              >

              </Image>
            </div>

          </div>

        </div>
      </section>

      {/* description */}
      <section>
        <div className='pl-[400px] bg-[#F9F8FE] py-20 my-10'>
          <div className='flex flex-row gap-36 mt-16'>
            <h1 className='text-[#151875] text-4xl font-bold tracking-widest my-4 leading-9 underline'>Description</h1>
            <h1 className='text-[#151875] text-4xl font-bold tracking-widest my-4 leading-9'>Additional Info</h1>
            <h1 className='text-[#151875] text-4xl font-bold tracking-widest my-4 leading-9'>Reviews</h1>
            <h1 className='text-[#151875] text-4xl font-bold tracking-widest my-4 leading-9'>Video</h1>
          </div>
          <div className='flex flex-col my-9'>
            <h1 className='text-[#151875] text-3xl font-bold tracking-wider my-4 leading-9'>Various tempor</h1>
            <p className='text-[#A9ACC6] text-xl tracking-widest my-4 text-justify leading-10 w-[1700px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, exercitationem? Aspernatur consequuntur incidunt velit odio. Adipisci illum ad molestias saepe laudantium blanditiis hic suscipit earum numquam, officia maiores voluptatem? Numquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam, hic facere totam placeat debitis et illo, laborum nam perspiciatis exercitationem laboriosam gffuvcfd vgfdrv ddeszvhujb </p>

            <h1 className='text-[#151875] text-3xl font-bold tracking-wider my-4 leading-9'>More Details</h1>

            <div className='flex flex-row gap-4'>
              <Image
                alt='arrow'
                width={40}
                height={20}
                src='/productdetail/arrow.png'
              ></Image>
              <p className='text-[#A9ACC6] text-xl tracking-widest my-4 text-justify leading-4 w-[1700px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur dicta veniam, laudantium quos expedita distinctio fugit molestiae quae.</p>
            </div>

            <div className='flex flex-row gap-4'>
              <Image
                alt='arrow'
                width={40}
                height={20}
                src='/productdetail/blue-arrow.png'
              ></Image>
              <p className='text-[#A9ACC6] text-xl tracking-widest my-4 text-justify leading-4 w-[1700px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur dicta veniam, laudantium quos expedita distinctio fugit molestiae quae.</p>
            </div>

            <div className='flex flex-row gap-4'>
              <Image
                alt='arrow'
                width={40}
                height={20}
                src='/productdetail/arrow.png'
              ></Image>
              <p className='text-[#A9ACC6] text-xl tracking-widest my-4 text-justify leading-4 w-[1700px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur dicta veniam, laudantium quos expedita distinctio fugit molestiae quae.</p>
            </div>

            <div className='flex flex-row gap-4'>
              <Image
                alt='arrow'
                width={40}
                height={20}
                src='/productdetail/arrow.png'
              ></Image>
              <p className='text-[#A9ACC6] text-xl tracking-widest my-4 text-justify leading-4 w-[1700px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur dicta veniam, laudantium quos expedita distinctio fugit molestiae quae.</p>
            </div>
          </div>
        </div>
      </section>

      {/* related products section */}
      <section>
        <div className='mx-[400px] my-20 flex flex-col'>
          <h1 className='text-[#151875] text-5xl font-bold tracking-wider my-16'>Related Products</h1>
          <div className='flex flex-row gap-7'>

            <div className='flex flex-col gap-4'>
              <Image
                alt='pic5'
                width={400}
                height={400}
                src='/productdetail/pic5.png'
              />
              <div className='flex flex-row justify-between mt-3'>
                <h1 className='text-[#151875] text-2xl font-bold tracking-wide text-center leading-9 '>Mens Fashion Wear</h1>
                <div className='flex flex-row'>
                  <IoStarSharp size={25} className='text-yellow-400' />
                  <IoStarSharp size={25} className='text-yellow-400' />
                  <IoStarSharp size={25} className='text-yellow-400' />
                  <IoStarSharp size={25} className='text-yellow-400' />
                  <IoStarSharp size={25} className='text-gray-400' />
                </div>
              </div>
              <span className=' text-[#151875] text-2xl tracking-wider'>$43.00</span>
            </div>

            <div className='flex flex-col gap-4'>
              <Image
                alt='pic6'
                width={400}
                height={400}
                src='/productdetail/pic6.png'
              />
              <div className='flex flex-row justify-between mt-3'>
                <h1 className='text-[#151875] text-2xl font-bold tracking-wide text-center leading-9 ml-2 '>Womens Fashion</h1>
                <div className='flex flex-row'>
                  <IoStarSharp size={25} className='text-yellow-400' />
                  <IoStarSharp size={25} className='text-yellow-400' />
                  <IoStarSharp size={25} className='text-yellow-400' />
                  <IoStarSharp size={25} className='text-yellow-400' />
                  <IoStarSharp size={25} className='text-yellow-400' />
                </div>
              </div>
              <span className=' text-[#151875] text-2xl tracking-wider ml-2'>$67.00</span>
            </div>

            <div className='flex flex-col gap-4'>
              <Image
                alt='pic7'
                width={400}
                height={400}
                src='/productdetail/pic7.png'
              />
              <div className='flex flex-row justify-between mt-3'>
                <h1 className='text-[#151875] text-2xl font-bold tracking-wide text-center leading-9 '>Wolx Dummy Fashion</h1>
                <div className='flex flex-row'>
                  <IoStarSharp size={25} className='text-yellow-400' />
                  <IoStarSharp size={25} className='text-yellow-400' />
                  <IoStarSharp size={25} className='text-yellow-400' />
                  <IoStarSharp size={25} className='text-yellow-400' />
                  <IoStarSharp size={25} className='text-gray-400' />
                </div>
              </div>
              <span className=' text-[#151875] text-2xl tracking-wider'>$67.00</span>
            </div>

            <div className='flex flex-col gap-4'>
              <Image
                alt='pic8'
                width={400}
                height={400}
                src='/productdetail/pic8.png'
              />
              <div className='flex flex-row justify-between mt-3'>
                <h1 className='text-[#151875] text-2xl font-bold tracking-wide text-center leading-9 '>Top Wall Digital Clock</h1>
                <div className='flex flex-row'>
                  <IoStarSharp size={25} className='text-yellow-400' />
                  <IoStarSharp size={25} className='text-yellow-400' />
                  <IoStarSharp size={25} className='text-yellow-400' />
                  <IoStarSharp size={25} className='text-gray-400' />
                  <IoStarSharp size={25} className='text-gray-400' />
                </div>
              </div>
              <span className=' text-[#151875] text-2xl tracking-wider'>$51.00</span>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <Topfooter/>
    </div>
  )
}

export default Productdetails