import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Contact = () => {
  return (
    <div>

      {/* header */}
      <header className='w-full  h-72 bg-[#EEEFFB] p-28'>
        <h1 className='text-5xl font-bold text-[#101750] flex  items-center pl-80'>Contact Us</h1>
        <h2 className='text-gray-500 text-4xl mt-2 px-80'>Home.Pages. <span className='text-[#FF289F] text-4xl cursor-pointer hover:underline'> Contact us </span></h2>
      </header>

      {/* section */}
      <section>
        <div className='flex flex-row gap-28 tracking-wider justify-center items-center'>

          {/* left side */}
          <div className='left flex flex-col bg-white my-12 gap-11 max-h-full leading-5 tracking-wider text-xl p-5 w-[1000px]'>

            {/* information about us */}
            <h1 className='font-bold text-[#151875] text-5xl mb-3'>Information About Us</h1>
            <p className='text-[#8A8FB9] leading-10 m-2 mb-1 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestiae, quo sunt earum, id porro, obcaecati quas odit quidem asperiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum architecto explicabo ex? Velit quia hic atque dicta itaque, et unde molestiae omnis accusamus, animi deserunt porro tempore tempora. Rerum, sit.</p>

            {/* colourful divs */}
            <div className='flex flex-row justify-start items-start gap-5'>
              <div className='border-2 border-solid border-[#7E33E0] bg-[#7E33E0] w-8 h-8 rounded-full'></div>
              <div className='border-2 border-solid bg-[#FB2E86] border-[#FB2E86] w-8 h-8 rounded-full'></div>
              <div className='border-2 border-solid border-[#31caf0] bg-[#31caf0] w-8 h-8 rounded-full'></div>
            </div>

            {/* get in touch */}
            <h1 className='font-bold text-[#151875] text-5xl mb-3 mt-16'>Get in Touch</h1>
            <p className='text-[#8A8FB9] leading-10 m-2 mb-1 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestiae, quo sunt earum, id porro, obcaecati quas odit quidem asperiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

            {/* input */}
            <div className='flex flex-row'>
              <input className='m-2 p-4 text-xl text-[#8A8FB9] border border-solid border-[#8A8FB9] ' type="text" placeholder='Your Name*' />
              <input className='m-2 p-4 text-xl text-[#8A8FB9] border border-solid border-[#8A8FB9]' type="text" placeholder='Your E-mail*' />
            </div>
            <input className='m-2 p-4 text-xl text-[#8A8FB9] border border-solid border-[#8A8FB9]' type="text" placeholder='Subject*' />
            <textarea className='m-2 p-4 text-2xl text-[#8A8FB9] border border-solid border-[#8A8FB9]' name="message" rows={7}>Type Your Message*</textarea>

            {/* button */}
            <Button className='bg-[#FB2E86] rounded-lg m-3 w-56 text-xl py-8 hover:bg-pink-400'>Send Mail</Button>

          </div>

          {/* right side */}
          <div className='right flex flex-col'>

            <h1 className='font-bold text-[#151875] text-5xl mb-3 mt-16 ml-28'>Contact Way</h1>

            <div className='flex flex-col ml-20'>
              <div className='flex flex-row' >
                
                {/* blue div */}
                <div className='flex flex-row m-4'>

                  {/* colourful div */}
                  <div className='border-2 border-solid border-[#7E33E0] bg-[#7E33E0] w-16 h-16 rounded-full my-4'>

                  </div>
                  {/* content */}
                  <div className='py-2 px-3 text-xl text-[#8A8FB9] my-4 font-semibold'>
                    <p>Tel:877-67-88-99</p>
                    <p>E-mail:shop@store.com</p>
                  </div>
                </div>

                {/* pink div */}
                <div className='flex flex-row m-4'>

                  {/* colourful div */}
                  <div className='border-2 border-solid border-[#FB2E86] bg-[#FB2E86] w-16 h-16 rounded-full my-4'>

                  </div>
                  {/* content */}
                  <div className='py-1 px-3 text-xl text-[#8A8FB9] my-4 font-semibold'>
                    <p>Support Forum</p>
                    <p>For over 24hr</p>
                  </div>
                </div>
              </div>

              <div className='flex flex-row' >
                 {/* orange div */}
                <div className='flex flex-row m-4'>

                  {/* colourful div */}
                  <div className='border-2 border-solid border-[#fcb03e] bg-[#fcb03e] w-16 h-16 rounded-full my-4'>

                  </div>
                  {/* content */}
                  <div className='py-2 px-3 text-xl text-[#8A8FB9] my-4 font-semibold'>
                    <p>20 Margaret st,London</p>
                    <p>Great britain,3NM98-LK</p>
                  </div>
                </div>

                {/* green div */}
                <div className='flex flex-row m-4'>

                  {/* colourful div */}
                  <div className='border-2 border-solid border-[#2efb94] bg-[#2efb94] w-16 h-16 rounded-full my-4'>

                  </div>
                  {/* content */}
                  <div className='py-1 px-5 text-xl text-[#8A8FB9] my-4 font-semibold'>
                    <p>Free standard shipping</p>
                    <p>on all orders.</p>
                  </div>
                </div>
              </div>
            </div>

            <Image className='m-16 ml-4'
            alt='contact'
            width={900}
            height={900}
            src='/contact/contactpic.png'
            />

          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact