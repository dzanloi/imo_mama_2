"use client";

import React from 'react'
import { usePathname } from "next/navigation";


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
        <div>MobileNav</div>
    )
}

export default MobileNav