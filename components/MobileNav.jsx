"use client";

import React from 'react'
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import Link from 'next/link';
import Image from 'next/image';


const links = [
    {
        name: "home",
        path: "/",
    },

    {
        name: "about",
        path: "/about",
    },

    {
        name: "Contact Us",
        path: "/contact",
    },

    {
        name: "FAQS",
        path: "/faqs",
    },
];


const MobileNav = () => {

    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className='flex items-center justify-center'>
                <CiMenuFries className='text-2xl'/>
            </SheetTrigger>

            <SheetContent className='flex flex-col items-center'>
                <div className='mt-20 mb-20 text-2xl text-center'>
                    <Link href="/">
                        <Image src="/logo.svg"
                            width={150}
                            height={150}
                        />
                    </Link>
                </div>

                <div className='flex flex-col items-center justify-center gap-8 text-white'>
                    {links.map((link, index) => {
                        return (
                            <Link 
                                key={index}
                                href={link.path}
                                className={`${
                                    pathname === link.path && 'border-b-2 border-white'
                                } capitalize text-xl`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </div>
                <Link href="/dashboard">
                    <button className='px-10 py-1 mt-10 font-medium bg-transparent border-2 rounded-full text-white2 border-white2 hover:bg-white2 hover:border-maroon hover:text-maroon'>
                        Login
                    </button>
                </Link>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav