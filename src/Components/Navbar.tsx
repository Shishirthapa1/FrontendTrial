"use client";
import { navLinks, paddingX } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { TiArrowSortedUp } from "react-icons/ti";
import { IoMenu } from "react-icons/io5";


const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className={`bg-white w-full flex flex-row items-center justify-between ${paddingX} py-1`}>
            <div className='lg:w-[35%] md:w-[30%] w-1/2 flex justify-start items-center'>
                <Image
                    height={500}
                    width={500}
                    src="/images/logo.png"
                    alt='Hi'
                    className='xl:w-[19rem] w-auto h-auto'
                />
            </div>
            <div className='lg:w-[65%] md:w-[70%] w-1/2 flex'>
                <div className='md:flex hidden md:flex-row justify-end items-center w-full gap-4 md:gap-6 xl:gap-10'>
                    {navLinks.map((link, index) => (
                        <div key={link.id || index} className='relative'>
                            <Link href={link.linkTo} className={`md:text-base text-sm lg:text-lg relative ${pathname === link.linkTo ? "text-gray-600 font-medium" : "text-gray-500"} `}>{link.title}</Link>
                            {pathname === link.linkTo && (
                                <TiArrowSortedUp className='animate-bounce absolute left-1/3 text-[#6a9fcb]' />
                            )}
                        </div>
                    ))}
                </div>
                <div className='md:hidden flex w-full items-center justify-end'>
                    <IoMenu className='sm:text-3xl text-xl' />

                </div>


            </div>

        </div>
    )
}

export default Navbar
