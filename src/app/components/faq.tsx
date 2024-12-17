import React from 'react'
import { Button } from '@/components/ui/button'
import Topfooter from './topfooter'

const FAQ = () => {
    return (
        <div>
            {/* header */}
            <header className='w-full  h-72 bg-[#EEEFFB] p-28'>
                <h1 className='text-5xl font-bold text-[#101750] flex  items-center pl-80'>FAQ</h1>
                <h2 className='text-gray-500 text-4xl mt-2 px-80'>Home.Pages. <span className='text-[#FF289F] text-4xl cursor-pointer hover:underline'> Faq </span></h2>
            </header>
           
            {/* main section */}
            <section>
                <div className='flex flex-row gap-7 tracking-wider justify-center'>

                    {/* left side */}
                    <div className='left flex flex-col bg-white my-12 gap-11 max-h-full leading-5 tracking-wider text-xl p-5 w-[1000px]'>
                    
                    <h1 className='font-bold text-[#151875] text-5xl mb-5'>Generel Information</h1>
                    
                    <h2 className='font-bold text-[#151875] text-2xl m-2 '>Eu dictumst cum at sed euismood condimentun?</h2>
                    
                    <p className='text-[#8A8FB9] leading-10 m-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit eaque aliquid nemo consequatur consequuntur. Aliquid, temporibus iste.</p>
                    
                    <h2 className='font-bold text-[#151875] text-2xl m-2 '>Manga bibendum est fermentum eros.</h2>
                    
                    <p className='text-[#8A8FB9] leading-10 m-2 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi fugiat, officia consequatur natus necessitatibus eum quo tenetur accusamus commodi nemo itaque rem. Est aut, corporis iure sed nemo quibusdam enim!</p>

                    <h2 className='font-bold text-[#151875] text-2xl m-2 '>Odio muskana hak eris conseekin sceleton?</h2>

                    <p className='text-[#8A8FB9] leading-10 m-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dolore, omnis dolor vitae temporibus ratione ab obcaecati aspernatur quia sit incidunt reprehenderit voluptas ullam eligendi iusto blanditiis eius, quam porro.</p>

                    <h2 className='font-bold text-[#151875] text-2xl m-2 '>Elit id blandit sabara boi velit gua mara?</h2>

                    <p className='text-[#8A8FB9] leading-10 m-2 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint fugiat, vel, consequatur eaque tempora quod et dolorem ratione quas quasi necessitatibus non, adipisci omnis doloribus placeat accusantium exercitationem repellendus quos.</p>
                    </div>

                    {/* right side */}
                    <div className='right flex flex-col border-2 border-[#EEEFFB] gap-9 justify-center border-solid my-5  leading-5 h-auto tracking-wider text-xl bg-[#EEEFFB] w-[800px] p-4'>
                        <h2 className='text-3xl font-bold text-[#151875] mb-5 p-4 mt-0'>Ask a Question</h2>
                        <input className='m-2 p-4 text-xl  text-[#8A8FB9] ' type="text" placeholder='Your Name*' />
                        <input className='m-3 p-4 text-xl  text-[#8A8FB9] ' type="text"  placeholder='Subject*'/>
                        <textarea className='m-2 p-4 text-2xl text-[#8A8FB9]' name="message" rows={7}>Type Your Message*</textarea>

                        <Button className='bg-[#FB2E86] rounded-lg m-3 w-56 text-xl py-8 hover:bg-pink-400'>Send Mail</Button>
                    </div>
                
                </div>
            </section>

            {/* footer */}
            <footer>
                <Topfooter/>
            </footer>
        </div>
    )
}

export default FAQ