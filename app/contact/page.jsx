"use client";

import { motion } from 'framer-motion'
import React from 'react'

const Contact = () => {
  return (
    <motion.section 
      initial={{opacity:0}}
      animate={{
        opacity:1,
        transition:{duration:0.5, ease:"easeIn"}
      }}
      className="bg-white2"
    >



      {/* FORM */}
      <div className='p-16 bg-gradient-to-r from-dmaroon to-maroon'>
        <form action="" className="flex flex-col gap-6 p-10 bg-white2/90 text-itom rounded-xl">

          {/* INPUT */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <input type="firstname" placeholder="eg. John" className='px-4 py-2 bg-transparent border rounded-xl border-itom'/>
            <input type="lastname" placeholder="eg. Doe" className='px-4 py-2 bg-transparent border rounded-xl border-itom'/>
            <input type="email" placeholder="eg. johndoe@gmail.com" className='px-4 py-2 bg-transparent border rounded-xl border-itom'/>
            <input type="text" placeholder="eg. CIT-U" className='px-4 py-2 bg-transparent border rounded-xl border-itom'/>
          </div>

          {/* TEXTAREA */}
          <textarea className="h-[200px] bg-transparent border border-itom rounded-xl py-2 px-4" placeholder="Type your message here."/>


          {/* BUTTON */}
          <button className="items-center px-6 py-2 mx-auto font-bold rounded-full shadow-md text-maroon bg-white2">
            Contact Us
          </button>
        </form>

      </div>
    </motion.section>
  )
} 

export default Contact