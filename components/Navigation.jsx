"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"


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
]

const Navigation = () => {

    const pathname = usePathname();

    return (
        <nav className="flex gap-20">
            {links.map((link, index) => {
                return (
                    <Link 
                        href={link.path}
                        key={index}
                        className={`${
                            link.path === pathname && "border-b-2 border-white"
                        } capitalize font-medium hover:text-accent transition-all`}
                    >
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    )
}

export default Navigation