import React from 'react';
import { IoCartOutline, IoHeartOutline, IoSearch } from 'react-icons/io5';
import { LuUserRound } from 'react-icons/lu';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="font-[sans-serif] tracking-widest relative z-50">
            {/* Top Section */}
            <section className="bg-[#7E33E0] py-2 px-4 sm:px-10 flex items-center flex-wrap justify-between">
                <div className="flex items-center justify-around w-full sm:w-auto">
                    <button type="button" className="text-white text-sm flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16px"
                            height="16px"
                            fill="#fff"
                            className="mr-2"
                            viewBox="0 0 479.058 479.058"
                        >
                            <path
                                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                            />
                        </svg>
                        saleemtooba365@gmail.com
                    </button>
                    <button type="button" className="text-white text-sm flex items-center ml-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16px"
                            height="16px"
                            fill="#fff"
                            className="mr-2"
                            viewBox="0 0 482.6 482.6"
                        >
                            <path
                                d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                            />
                        </svg>
                        +92-316-128-5016
                    </button>
                </div>

                <div className="flex flex-wrap gap-2 mt-2 sm:mt-0 sm:ml-auto">
                    <select className="bg-[#7E33E0] text-white text-sm px-2 py-1">
                        <option value="english">English</option>
                    </select>
                    <select className="bg-[#7E33E0] text-white text-sm px-2 py-1">
                        <option value="usd">USD</option>
                    </select>
                    <a className="text-white flex items-center">
                        Login
                        <LuUserRound className="ml-1" />
                    </a>
                    <a className="text-white flex items-center">
                        Wishlist
                        <IoHeartOutline size={25} className="ml-1" />
                    </a>
                    <IoCartOutline size={25} className="text-white flex items-center mx-2 mt-1" />
                </div>
            </section>

            {/* Bottom Section */}
            <div className="flex flex-wrap items-center justify-between px-4 py-3 sm:px-10 bg-white">
                <h1 className="text-black text-4xl font-bold">
                    Hekto
                </h1>
                <nav className="hidden lg:flex gap-10">
                    <select className=" text-red-700 text-sm font-medium cursor-pointer hover:underline">
                        <option value="Home">Home</option>
                    </select>
                    <Link href='/' className="text-gray-700 text-sm font-medium hover:underline" target='_blank'>About</Link>
                    <Link href='#contact' className="text-gray-700 text-sm font-medium hover:underline"target='_blank'>Contact</Link>
                    <Link href='#cart' className="text-gray-700 text-sm font-medium hover:underline"target='_blank'>Cart</Link>
                    <Link href='#productdetails' className="text-gray-700 text-sm font-medium hover:underline"target='_blank'>ProductDetails</Link>
                </nav>
                <div className="lg:hidden">
                    <button className="text-gray-700 text-xl">Menu</button>
                </div>
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded-l px-3 py-1 outline-none"
                    />
                    <IoSearch size={32} className="text-white bg-[#FB2E86]  text-xl rounded-r" />
                </div>
            </div>
        </header>
    );
};

export default Header;
