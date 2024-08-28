import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navigation from './Navigation'

const Header = () => {
    return (
        <header className="bg-header-bg bg-cover bg-no-repeat xl:py-6 xl:px-10 text-white">
            <div className="flex justify-between items-center">
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

                    <button 
                        className='py-1 
                        px-10 mx-7 
                        bg-transparent 
                        border-2 
                        border-white2 
                        rounded-full 
                        hover:bg-white2 hover:border-maroon hover:text-maroon'>
                            Login
                    </button>
                </div>



            </div>
        </header>
    )
}

export default Header