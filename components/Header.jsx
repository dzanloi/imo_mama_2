import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navigation from './Navigation'
import MobileNav from './MobileNav'

const Header = () => {
    return (
        <header className="relative w-full px-10 py-2 text-white h-30 xl:py-6 xl:px-10">
            {/* BACKGROUND */}
            <div className='absolute inset-0 z-0'>
                <Image 
                    src="/headerbackground.png"
                    alt='background'
                    // width={1720}
                    // height={50}
                    // objectFit='cover'
                    layout='fill'
                />
            </div>

            {/* LOGO */}
            <div className="relative z-10 flex items-center justify-between">
                <Link href="/">
                    <Image 
                        src="/logo.svg"
                        width={150}
                        height={150}
                    />
                </Link>

                
                
                {/* Hidden if small screens */}
                <div className="items-center hidden gap-10 xl:flex">
                    <Navigation/>

                    <button className='px-10 py-1 mx-12 font-medium bg-transparent border-2 rounded-full border-white2 hover:bg-white2 hover:border-maroon hover:text-maroon'>
                            Login
                    </button>
                </div>


                {/* Hidden if dagko screen */}
                <div className='xl:hidden'>
                    <MobileNav/>
                </div>
                
            </div>
        </header>
    )
}

export default Header