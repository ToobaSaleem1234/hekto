import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Cart = () => {
  return (
    <div>
      {/* header */}
      <header className='w-full  h-72 bg-[#EEEFFB] p-28'>
        <h1 className='text-5xl font-bold text-[#101750] flex  items-center pl-80'>Shopping Cart</h1>
        <h2 className='text-gray-500 text-4xl mt-2 px-80'>Home.Pages. <span className='text-[#FF289F] text-4xl cursor-pointer hover:underline'> shopping curt </span></h2>
      </header>

      {/* main content */}
      <section>
        <div className='flex flex-row justify-center gap-10'>
          {/* section 1 */}
          <div className='ml-[100px] my-20  flex flex-col'>

            {/* header */}
            <div className='flex flex-row gap-[600px]'>
              <h1 className='font-bold text-[#151875] text-4xl my-16 '>Product</h1>
              <div className='flex flex-row gap-36'>
                <h2 className='font-bold text-[#151875] text-4xl my-16 '>Price</h2>
                <h2 className='font-bold text-[#151875] text-4xl my-16 '>Quantity</h2>
                <h2 className='font-bold text-[#151875] text-4xl my-16 '>Total</h2>
              </div>

            </div>

            {/* image 1 */}
            <div className='flex flex-row'>
              <div className='flex flex-row'>
                <Image className='mt-2'
                  alt='pic1'
                  width={200}
                  height={200}
                  src='/cart/pic1.png'
                >
                </Image>
                <Image className='bg-black w-6 h-6 rounded-full'
                  alt='cross'
                  width={30}
                  height={40}
                  src='/cart/cross.png'
                ></Image>

                <div className='flex flex-row gap-36'>
                  {/* details */}
                  <div className='flex flex-col gap-3 my-9 mx-5'>
                    <h1 className='text-3xl tracking-widest font-semibold'>Ut diam consequot</h1>
                    <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-2 font-semibold '>Color:Brown</h2>
                    <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-2 font-semibold '>Size:XL</h2>
                  </div>
                  {/* price */}
                  <span className='text-[#151875] text-2xl mt-32 tracking-wider font-semibold'>$32.00</span>
                  {/* quantity */}
                  <Button className='mt-28 py-6 px-4 bg-[#E7E7EF]'>
                    <div className='w-5 text-3xl text-[#BEBFC2] font-bold'>-</div>
                    <div className='w-16 text-3xl text-[#BEBFC2] font-bold'>1</div>
                    <div className='w-5 text-3xl text-[#BEBFC2] font-bold'>+</div>
                  </Button>
                  {/* total */}
                  <span className='text-[#151875] text-2xl mt-32 tracking-wider font-semibold'>$219.00</span>
                </div>
              </div>

            </div>
            <hr className='border-2 border-[#E1E1E4] my-9 w-[1400px]' />

            {/* image 2 */}
            <div className='flex flex-row'>
              <div className='flex flex-row'>
                <Image className='mt-2'
                  alt='pic2'
                  width={200}
                  height={200}
                  src='/cart/pic2.png'
                >
                </Image>
                <Image className='bg-black w-6 h-6 rounded-full'
                  alt='cross'
                  width={30}
                  height={40}
                  src='/cart/cross.png'
                ></Image>

                <div className='flex flex-row gap-36'>
                  {/* details */}
                  <div className='flex flex-col gap-3 my-9 mx-5'>
                    <h1 className='text-3xl tracking-widest font-semibold'>Vel faubus posuire</h1>
                    <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-2 font-semibold '>Color:Brown</h2>
                    <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-2 font-semibold '>Size:XL</h2>
                  </div>
                  {/* price */}
                  <span className='text-[#151875] text-2xl mt-32 tracking-wider font-semibold'>$32.00</span>
                  {/* quantity */}
                  <Button className='mt-28 py-6 px-4 bg-[#E7E7EF]'>
                    <div className='w-5 text-3xl text-[#BEBFC2] font-bold'>-</div>
                    <div className='w-16 text-3xl text-[#BEBFC2] font-bold'>1</div>
                    <div className='w-5 text-3xl text-[#BEBFC2] font-bold'>+</div>
                  </Button>
                  {/* total */}
                  <span className='text-[#151875] text-2xl mt-32 tracking-wider font-semibold'>$219.00</span>
                </div>
              </div>

            </div>
            <hr className='border-2 border-[#E1E1E4] my-9 w-[1400px]' />

            {/* image 3 */}
            <div className='flex flex-row'>
              <div className='flex flex-row'>
                <Image className='mt-2'
                  alt='pic3'
                  width={200}
                  height={200}
                  src='/cart/pic3.png'
                >
                </Image>
                <Image className='bg-black w-6 h-6 rounded-full'
                  alt='cross'
                  width={30}
                  height={40}
                  src='/cart/cross.png'
                ></Image>

                <div className='flex flex-row gap-36'>
                  {/* details */}
                  <div className='flex flex-col gap-3 my-9 mx-5'>
                    <h1 className='text-3xl tracking-widest font-semibold'>Ac vitae westiblum</h1>
                    <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-2 font-semibold '>Color:Brown</h2>
                    <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-2 font-semibold '>Size:XL</h2>
                  </div>
                  {/* price */}
                  <span className='text-[#151875] text-2xl mt-32 tracking-wider font-semibold'>$32.00</span>
                  {/* quantity */}
                  <Button className='mt-28 py-6 px-4 bg-[#E7E7EF]'>
                    <div className='w-5 text-3xl text-[#BEBFC2] font-bold'>-</div>
                    <div className='w-16 text-3xl text-[#BEBFC2] font-bold'>1</div>
                    <div className='w-5 text-3xl text-[#BEBFC2] font-bold'>+</div>
                  </Button>
                  {/* total */}
                  <span className='text-[#151875] text-2xl mt-32 tracking-wider font-semibold'>$219.00</span>
                </div>
              </div>

            </div>
            <hr className='border-2 border-[#E1E1E4] my-9 w-[1400px]' />

            {/* image 4 */}
            <div className='flex flex-row'>
              <div className='flex flex-row'>
                <Image className='mt-2'
                  alt='pic4'
                  width={200}
                  height={200}
                  src='/cart/pic4.png'
                >
                </Image>
                <Image className='bg-black w-6 h-6 rounded-full'
                  alt='cross'
                  width={30}
                  height={40}
                  src='/cart/cross.png'
                ></Image>

                <div className='flex flex-row gap-36'>
                  {/* details */}
                  <div className='flex flex-col gap-3 my-9 mx-5'>
                    <h1 className='text-3xl tracking-widest font-semibold'>Elit mabvissa diom</h1>
                    <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-2 font-semibold '>Color:Brown</h2>
                    <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-2 font-semibold '>Size:XL</h2>
                  </div>
                  {/* price */}
                  <span className='text-[#151875] text-2xl mt-32 tracking-wider font-semibold'>$32.00</span>
                  {/* quantity */}
                  <Button className='mt-28 py-6 px-4 bg-[#E7E7EF]'>
                    <div className='w-5 text-3xl text-[#BEBFC2] font-bold'>-</div>
                    <div className='w-16 text-3xl text-[#BEBFC2] font-bold'>1</div>
                    <div className='w-5 text-3xl text-[#BEBFC2] font-bold'>+</div>
                  </Button>
                  {/* total */}
                  <span className='text-[#151875] text-2xl mt-32 tracking-wider font-semibold'>$219.00</span>
                </div>
              </div>

            </div>
            <hr className='border-2 border-[#E1E1E4] my-9 w-[1400px]' />

            {/* image 5 */}
            <div className='flex flex-row'>
              <div className='flex flex-row'>
                <Image className='mt-2'
                  alt='pic5'
                  width={200}
                  height={200}
                  src='/cart/pic5.png'
                >
                </Image>
                <Image className='bg-black w-6 h-6 rounded-full'
                  alt='cross'
                  width={30}
                  height={40}
                  src='/cart/cross.png'
                ></Image>

                <div className='flex flex-row gap-36'>
                  {/* details */}
                  <div className='flex flex-col gap-3 my-9 mx-5'>
                    <h1 className='text-3xl tracking-widest font-semibold'>Proin prea elentum</h1>
                    <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-2 font-semibold '>Color:Brown</h2>
                    <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-2 font-semibold '>Size:XL</h2>
                  </div>
                  {/* price */}
                  <span className='text-[#151875] text-2xl mt-32 tracking-wider font-semibold'>$32.00</span>
                  {/* quantity */}
                  <Button className='mt-28 py-6 px-4 bg-[#E7E7EF]'>
                    <div className='w-5 text-3xl text-[#BEBFC2] font-bold'>-</div>
                    <div className='w-16 text-3xl text-[#BEBFC2] font-bold'>1</div>
                    <div className='w-5 text-3xl text-[#BEBFC2] font-bold'>+</div>
                  </Button>
                  {/* total */}
                  <span className='text-[#151875] text-2xl mt-32 tracking-wider font-semibold'>$219.00</span>
                </div>
              </div>

            </div>
            <hr className='border-2 border-[#E1E1E4] my-9 w-[1400px]' />

            {/* button */}
            <div className='flex justify-between w-[1400px]'>
              <Button className='hover:bg-pink-400 bg-[#FF289F] text-white h-12 text-3xl my-3 p-7 py-10' variant="destructive">Update Cart</Button>

              <Button className='hover:bg-pink-400 bg-[#FF289F] text-white h-12 text-3xl my-3 p-7 py-10' variant="destructive">Clear Cart</Button>
            </div>
          </div>
          {/* section 2 */}
          <div className='flex flex-col my-20 py-28 px-16'>
            <h1 className='font-bold text-[#151875] text-5xl text-center mb-16 tracking-wider'>Cart Totals</h1>
            <div className='bg-[#F8F8FD] p-10'>
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

            <h1 className='font-bold text-[#151875] text-5xl text-center mt-36 mb-16 tracking-wide'>Calculate Shipping</h1>
            <div className='bg-[#F8F8FD] px-16 py-20'>
              <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-6 '>Bangladesh</h2>

              <hr className='border-gray-300 border mb-16 mt-6' />

              <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-6 '>Mirpur Dhaka 1200</h2>

              <hr className='border-gray-300 border mb-16 mt-6' />

              <h2 className='text-[#C1C8E1] text-3xl tracking-widest my-6 '>Postal Code</h2>

              <hr className='border-gray-300 border mb-16 mt-6' />

              <Button className='hover:bg-pink-400 bg-[#FF289F] text-white h-12 text-3xl my-3 p-7 py-10' variant="destructive">Calculate Shipping</Button>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart