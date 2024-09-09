"use client";

import { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { GoHomeFill } from "react-icons/go";
import { MdEventNote, MdSettings, MdTask } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    {
        label: 'Dashboard',
        href: "/dashboard",
        icon: <GoHomeFill />,
    },
    {
        label: 'Vote',
        href: "/vote",
        icon: <MdEventNote />
    },
    {
        label: 'Settings',
        href: "/settings",
        icon: <MdSettings />
    },
    {
        label: 'Guidelines',
        href: "/guidelines",
        icon: <MdTask />
    },

    {
        label: 'Logout',
        href: "/logout",
        icon: <IoLogOut />,
        bottom: true,
    },
];


const Sidebar = ({ isExpanded, toggleSidebar }) => {
    const pathname = usePathname();

    return (
        // TO MAKE IT FIXED
        // fixed top-[87px] left-0 z-50 
        // ${isExpanded ? 'w-52' : 'w-20'}
        // duration-300 h-[80%]
        <aside 
            className={`
                ${isExpanded ? 'w-52' : 'w-20'}
                hidden
                md:block
                fixed top-16
                left-0 h-[80%]
                bg-red-100 duration-300
                rounded-br-xl
                shadow-md`
            }
        >
            <div className='flex-col h-full justify-evenly'>
                <ul className='flex flex-col justify-center pt-12'>
                    {links.map((item, index) => {
                        return (
                            <Link
                                href={item.href}
                                key={index}
                                className={`${
                                    pathname === item.href && 'bg-gradient-to-r from-dmaroon to-maroon text-white2'
                                } 
                                ${
                                    item.bottom ? 'absolute bottom-0 w-full text-center hover:rounded-br-xl' : ''
                                } 
                                text-maroon flex items-center hover:bg-gradient-to-r from-dmaroon to-maroon hover:text-white2 
                                gap-x-4 p-2
                                `}
                            >
                                <div className='py-3 pl-5 text-2xl'>{item.icon}</div>
                                {isExpanded && <span className='ml-3'>{item.label}</span>}
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
