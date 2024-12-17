import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div>
      <div className=" bg-[#EEEFFB] h-[532px] w-full mt-5 flex flex-row gap-96">
        <div className="flex flex-col gap-10">
          <div className="w-[120px] ml-[310px]">
            <h1 className="text-[44px] font-bold mt-[95px]">Hekto</h1>
          </div>
          <div className="text-2xl ml-[309px] w-[375px] p-2 flex items-center absolute rounded-[3px] mt-[194px]">
            <input type="text" placeholder="Enter Email Address" className="h-16" />
            <div className="bg-red-400 text-white text-[25px] p-2 ">
              <p className="w-[120px] h-12 pt-3 pl-2">Sign Up</p>
            </div>
          </div>
          <div className="text-[#8A8FB9] ml-[308px] mt-[62px]">
            <p className="text-2xl mt-5">Contact info</p>
            <p className="text-2xl mt-5">201, Khatri Palace, Bhimpura Karachi - Pakistan</p>
          </div>
        </div>
        <div>
          <div className="mt-[94px] ml-[780]">
            <div className="font-bold text-3xl mb-[15px]">
              <h1>Catagories</h1>
            </div>
            <div>
              <ul className="text-[#8A8FB9] text-2xl mt-5">
                <li className="my-[7px]">Laptops & Computers</li>
                <li className="my-[7px]">Cameras & Photography</li>
                <li className="my-[7px]">Smart Phones & Tablets</li>
                <li className="my-[7px]">Video Games & Consoles</li>
                <li className="my-[7px]">Waterproof Headphones</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[94px] ml-[1047]">
            <div className="font-bold text-3xl mb-[15px]">
              <h1>Customer Care</h1>
            </div>
            <div>
              <ul className="text-[#8A8FB9] text-2xl mt-5">
                <li className="my-[7px]">My Account</li>
                <li className="my-[7px]">Discount</li>
                <li className="my-[7px]">Returns</li>
                <li className="my-[7px]">Orders History</li>
                <li className="my-[7px]">Order Tracking</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[94px] ml-[1287]">
            <div className="font-bold text-3xl mb-[15px]">
              <h1>Pages</h1>
            </div>
            <div>
              <ul className="text-[#8A8FB9] text-2xl mt-5">
                <li className="my-[7px]">Blog</li>
                <li className="my-[7px]">Browse the Shop</li>
                <li className="my-[7px]">Category</li>
                <li className="my-[7px]">Pre-Built Pages</li>
                <li className="my-[7px]">Visual Composer Elements</li>
                <li className="my-[7px]">WooCommerce Pages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E7E4F8] h-32">
        <div className="flex h-full items-center justify-evenly ">
          <p className="text-3xl items-center justify-center font-bold text-gray-500"> @Copyright....All Rights Reserved</p>

          <div className=" flex flex-row gap-3">
        
        <Link href='https://www.facebook.com/tooba.saleem.739?mibextid=ZbWKwL' target="_blank" className="text-[#151875] hover:text-[#0077B5]"><FaFacebookF size={40} />
        </Link>
        
        <Link href='https://github.com/ToobaSaleem1234' target="_blank" className="text-[#151875] hover:text-[#656161]"><GrGithub size={40}/>
        </Link>
        
        <Link href='https://www.instagram.com/tooba8693/profilecard/?igsh=a3A0NjR6djR1NTh5' target="_blank" className="text-[#151875] hover:text-[purple]"><FaInstagram size={40} />
        </Link>
        
        <Link href='https://www.linkedin.com/in/tooba-saleem-043b972b4/' target='_blank' className="text-[#151875] hover:text-[#0077B5]"><RiLinkedinLine  size={40}/>
        </Link>
        </div>
        </div>
      </div>
    </div>
  );
};