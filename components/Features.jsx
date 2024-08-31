"use client";

import Image from 'next/image'
import { useState } from 'react';

const Features = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className='w-full h-full text-white p-14 bg-gradient-to-r from-dmaroon to-maroon'>
      {/* CONTAINER */}
      <div className="container mx-auto">

        {/* TEXT CONTENT */}
        <div className='flex flex-col gap-10'>
            <h1 className='text-3xl font-bold text-center'>
              Our Features
            </h1>

            <p className='mb-8 text-xl text-center font-extralight'>
                Explore the features that allow your school to conduct secure, 
                anonymous, <br /> and accessible elections entirely online, ensuring 
                every student’s voice is heard with ease and confidence.
            </p>
        </div>
    

        {/* CARDS CONTENT */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
          {/* <div className='flex-col justify-center flex-1 gap-6 group'>
          </div> */}
          <div className='transition-all duration-75 hover:bg-transparent'>
            <Image 
              src={hovered ? '/feature2.png':'/feature1.png'}
              width={500}
              height={500}
              onMouseEnter={() => setHovered(!hovered)}
              onMouseLeave={() => setHovered(!hovered)}
            />

          </div>

            <Image 
              src="/feature2.png"
              width={500}
              height={500}
            />

            <Image 
              src="/feature3.png"
              width={500}
              height={500}
            />

            <Image 
              src="/feature4.png"
              width={500}
              height={500}
            />
        </div>
      </div>

    </section>
  )
}

export default Features