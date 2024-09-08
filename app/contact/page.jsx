"use client";

import { motion } from 'framer-motion'
import Image from 'next/image';
import React from 'react'

const Contact = () => {
  return (
    <section>
      {/* BACKGROUND */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image 
          src="/contactusbg.png" 
          alt="Contact Us Background" 
          layout="fill" 
          objectFit="cover" 
          quality={100}
        />
      </div>


      {/* GREETINGS */}
      <motion.div 
      initial={{opacity:0}}
      animate={{
        opacity:1,
        transition:{duration:0.5, ease:"easeIn"}
      }}
        className="h-full w-[70%] mx-auto pb-32 pt-28 text-maroon"
      >
        <h1 className='text-6xl font-bold'>Hello.</h1>
        <p className='text-2xl font-semibold'>
          Got a question? We're here to help!
        </p>
      </motion.div>



      {/* FORM */}
      <div className='p-16 bg-gradient-to-r from-dmaroon to-maroon'>
        <motion.form initial={{opacity:0}}
          animate={{
            opacity:1,
            transition:{duration:0.5, ease:"easeIn"}
          }}
          action="" 
          className="container flex flex-col gap-6 p-10 bg-white2/90 text-itom rounded-xl"
        >

          {/* INPUT */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* 1st */}
            <div>
              <p className='font-semibold'>FIRST NAME</p>
              <input type="firstname" placeholder="eg. John" className='w-full px-4 py-2 bg-transparent border-2 rounded-xl border-itom/50'/>
            </div>

            {/* 2nd */}
            <div>
              <p className='font-semibold'>LAST NAME</p>
              <input type="lastname" placeholder="eg. Doe" className='w-full px-4 py-2 bg-transparent border-2 rounded-xl border-itom/50'/>
            </div>

            {/* 3rd */}
            <div>
              <p className='font-semibold'>EMAIL</p>
              <input type="email" placeholder="eg. johndoe@gmail.com" className='w-full px-4 py-2 bg-transparent border-2 rounded-xl border-itom/50'/>
            </div>

            {/* 4th */}
            <div>
              <p className='font-semibold'>PHONE NUMBER</p>
              <input type="number" placeholder="eg. 09212321" className='w-full px-4 py-2 bg-transparent border-2 rounded-xl border-itom/50'/>
            </div>

            {/* 5th */}
            <div>
              <p className='font-semibold'>NUMBER OF ELIGIBLE VOTERS</p>
              <input type="number" className='w-full px-4 py-2 bg-transparent border-2 rounded-xl border-itom/50'/>
            </div>

            {/* 6th */}
            <div>
              <p className='font-semibold'>ESTIMATED VOTE START DATE</p>
              <input type="date" className='w-full px-4 py-2 bg-transparent border-2 rounded-xl border-itom/50'/>
            </div>
          </div>

          {/* TEXTAREA */}
          <div>
            <p className='font-semibold'>ORGANIZATION</p>
            <input type="text" placeholder='eg. CIT-U' className='w-full px-4 py-2 bg-transparent border-2 rounded-xl border-itom/50'/>
          </div>
          <div>
            <p className='font-semibold'>YOUR MESSAGE</p>
            <textarea className="h-[200px] w-full bg-transparent border-2 border-itom/50 rounded-xl py-2 px-4" placeholder="Type your message here."/>
          </div>


          {/* BUTTON */}
          <button className="items-center px-12 py-2 mx-auto font-bold rounded-full shadow-md text-maroon bg-white2">
            Contact Us
          </button>
        </motion.form>

      </div>
    </section>
  )
} 

export default Contact