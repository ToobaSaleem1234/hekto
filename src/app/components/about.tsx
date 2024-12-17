import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div>

      {/* header */}
      <header className='w-full  h-72 bg-[#EEEFFB] p-28'>
        <h1 className='text-5xl font-bold text-[#101750] flex  items-center pl-80'>About Us</h1>
        <h2 className='text-gray-500 text-4xl mt-2 px-80'>Home.Pages. <span className='text-[#FF289F] text-4xl cursor-pointer hover:underline'> About Us </span></h2>
      </header>

      {/* hero section */}
      <section>
        <div className="flex flex-row gap-10 my-16 mx-[300px]">
          <div className="left">
            <Image className="h-[500px] w-[1800px]"
            alt='about'
            width={800}
            height={1700}
            src='/about/aboutpic.png'
            />

          </div>
          <div className="right flex flex-col gap-7">
            <h1 className="font-bold text-[#151875] text-5xl mb-3 w-4/6 leading-relaxed">Know About Our Ecommerce Business,History</h1>
            <p className="text-[#8A8FB9] leading-10 m-2 text-3xl w-5/6 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel quos itaque veniam temporibus incidunt quidem velit voluptates veritatis. Beatae quo obcaecati nihil tenetur, iusto totam quasi quia ratione blanditiis.</p>
            <Button className='bg-[#FB2E86] rounded-lg m-3 w-56 text-xl py-8 hover:bg-pink-400'>Contact Us</Button>
          </div>
        </div>
      </section>

      {/* features section */}
      <section>
        <div className="mx-[300px]">
          <h1 className='font-bold text-[#000000] text-5xl m-16 tracking-wider flex justify-center mt-36 '>Our features</h1>
          <div className=" flex flex-row gap-8">


          <div className="flex flex-col border border-solid m-4 p-4 justify-center items-center bg-white">
            <Image className="rounded-md shadow-lg"
            alt='free delivery'
            width={100}
            height={100}
            src='/about/free-delivery.png'
            />
            <h2 className="font-bold tracking-wider text-[#151875] text-2xl m-2 leading-7 mt-5">Free Delivery</h2>
            <p className='text-[#8A8FB9] leading-8 m-2 text-2xl tracking-wider text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut perferendis</p>
          </div>

          <div className="flex flex-col border border-solid m-4 p-4 justify-center items-center bg-white border-b-4 border-b-[#FF9100]">
            <Image
            alt='cash back'
            width={100}
            height={100}
            src='/about/cashback.png'
            />
            <h2 className="font-bold tracking-wider text-[#151875] text-2xl m-2 leading-7 mt-5">100% Cash Back</h2>
            <p className='text-[#8A8FB9] leading-8 m-2 text-2xl tracking-wider text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut perferendis</p>
          </div>

          <div className="flex flex-col border border-solid m-4 p-4 justify-center items-center bg-white">
            <Image
            alt='premium quality'
            width={100}
            height={100}
            src='/about/premium-quality.png'
            />
            <h2 className="font-bold tracking-wider text-[#151875] text-2xl m-2 leading-7 mt-5">Quality Product</h2>
            <p className='text-[#8A8FB9] leading-8 m-2 text-2xl tracking-wider text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut perferendis</p>
          </div>

          <div className="flex flex-col border border-solid m-4 p-4 justify-center items-center bg-white">
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

      {/* client section */}
      <section>
        <div className="bg-[#f5f5fd] mb-3">
          <h1 className='font-bold text-[#000000] text-5xl p-16 tracking-wider flex justify-center mt-36 '>Our Client Say!</h1>
          <div className=" flex flex-col justify-center items-center">
          <Image className="w-[350px] h-[100px] mt-6"
          alt='clients'
          width={100}
          height={100}
          src='/about/clients.png'
          />
          <h2 className='text-4xl text-[black] mb-1 mt-3 p-4 font-medium tracking-wide leading-5'>Selina Gomez</h2>
          <span className="text-[#8A8FB9] mb-4 text-xl">Ceo AC Watson Digital</span>
          <p className='text-[#8A8FB9] leading-10 m-3 mb-5 text-2xl tracking-wide text-center w-7/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusantium voluptas. Natus, totam. Illum quam dolore, sunt, minus eaque vitae, ratione odio voluptates officia quo facilis eum nesciunt option. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, at. Quis delectus dolorem perspiciatis aliquam harum amet. Expedita.</p>
          <div className="flex flex-row gap-3 m-7">
            <div className="w-5 h-1 bg-pink-300"></div>
            <div className="w-7 h-1 bg-[#FB2E86]"></div>
            <div className="w-5 h-1 bg-pink-300"></div>
          </div>
          </div>
          
        </div>
      </section>

    </div>
  )
}
