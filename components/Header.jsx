import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navigation from './Navigation'

const Header = () => {
    return (
        <header className="
            w-full 
            h-30
            xl:py-6 xl:px-10 
            text-white
            relative
        ">
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
            <div className="relative z-10 flex justify-between items-center">
                <Link href="/">
                    <Image 
                        src="/logo.svg"
                        width={150}
                        height={150}
                    />
                </Link>

                
                
                {/* Hidden if small screens */}
                <div className="hidden xl:flex items-center gap-10">
                    <Navigation/>

                    <button className='
                        py-1 
                        font-medium
                        px-10 mx-12
                        bg-transparent
                        border-2
                        border-white2
                        rounded-full
                        hover:bg-white2 hover:border-maroon hover:text-maroon
                    '>
                            Login
                    </button>
                </div>


                {/* Hidden if dagko screen */}
                <div className='xl:hidden'>

                </div>



            </div>
        </header>
    )
}

export default Header