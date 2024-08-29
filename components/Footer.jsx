import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='relative w-full text-white h-[50%] xl:py-6 xl:px-10'>
        <div className='absolute inset-0 z-0'>
                <Image 
                    src="/footerbg.png"
                    alt='background'
                    width={1700}
                    height={100}
                    // objectFit='cover'
                    // layout='fill'
                />
            </div>
    </footer>
  )
}

export default Footer