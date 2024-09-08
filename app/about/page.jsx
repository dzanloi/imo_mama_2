"use client";

import Card from '@/components/Card';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { BsCheckCircle } from 'react-icons/bs'
import { IoRocketOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";



const About = () => {
  return (
    <motion.section 
      initial={{opacity:0}}
      animate={{
        opacity:1,
        transition:{duration:0.5, ease:"easeIn"}
      }}
      className='bg-white2'
    >




      {/* ABOUT US TEXT */}
      <motion.div initial={{opacity:0}}
        whileInView={{
          opacity:1,
          transition:{duration:0.5, ease:"easeIn"}
        }} 
        className='container flex flex-col items-center justify-center h-full gap-6 mx-auto my-24 text-center'
      >
        <h1 className='text-6xl font-bold text-maroon '>About Us</h1>
          <p className='text-3xl font-semibold'>
            <span className='text-maroon'>ElectEd</span> is an <span className='text-maroon'>Advanced Online Voting Platform </span> 
            built for educational institutions. Our mission is to empower students with a secure, transparent, and easy-to-use system 
            that brings the entire election process online.
          </p>
      </motion.div>





      {/* MEET THE TEAM  */}
      <div className='flex flex-col items-center justify-center gap-3 pt-20 text-center bg-gradient-to-r from-dmaroon to-maroon text-white2'>
        <h1 className='text-6xl font-bold'>Meet the Team</h1>

        <p className='text-2xl mb-14 font-medium w-[45%]'>
          Our core team of voting software experts 
          empowers you to run secure, efficient elections online with ElectEd.
        </p>

        {/* CARDS */}
        <div className='container grid grid-cols-2 gap-8 mb-28 xl:px-20 xl:grid-cols-3'>
          <Card 
            source="/dobby.png"
            name="Dobby"
            details="Hi, I am dobby and i am gwapo basjdknasdlak"
          />

          <Card 
            source="/guwang.png"
            name="Dobby"
            details="Hi, I am dobby and i am gwapo basjdknasdlak"
          />

          <Card 
            source="/dobby.png"
            name="Dobby"
            details="Hi, I am dobby and i am gwapo basjdknasdlak"
          />

          <Card 
            source="/dobby.png"
            name="Dobby"
            details="Hi, I am dobby and i am gwapo basjdknasdlak"
          />

          <Card 
            source="/dobby.png"
            name="Dobby"
            details="Hi, I am dobby and i am gwapo basjdknasdlak"
          />

          <Card 
            source="/dobby.png"
            name="Dobby"
            details="Hi, I am dobby and i am gwapo basjdknasdlak"
          />
        </div>

      </div>




        {/* HOW WE WORK */}
        <motion.div 
          initial={{opacity:0}}
          whileInView={{
            opacity:1,
            transition:{duration:0.5, ease:"easeIn"}
          }}
          className='w-full pt-24 bg-white2 text-maroon'
        >
          <h1 className='mb-20 text-6xl font-bold text-center'>How We Work</h1>
          {/* 3DIVS */}
          <div className='flex flex-col justify-center gap-20 mx-20 mb-20 xl:flex-row'>
            {/* FIRST */}
            <div className='flex flex-col items-center w-full text-center'>
              <BsCheckCircle className='text-5xl font-bold'/>
              <h1 className='mb-2 text-3xl font-semibold'>
                Our Approach
              </h1>
              <p className='text-xl font-medium'>
                At ElectEd, we combine cutting-edge technology with a deep understanding of educational needs to deliver a 
                voting platform that is both secure and user-friendly. Our approach focuses on simplicity, reliability, and 
                accessibility, ensuring that the electoral process is seamless for every student and institution.
              </p>
            </div>

            {/* SECOND */}
            <div className='flex flex-col items-center w-full text-center'>
              <IoRocketOutline className='text-5xl font-bold'/>
              <h1 className='mb-2 text-3xl font-semibold'>
                Our Mission
              </h1>
              <p className='text-xl font-medium'>
                Our mission is to transform the way student elections are conducted by providing a platform that makes voting 
                accessible, secure, and transparent. We are committed to empowering students by simplifying the voting process 
                and enhancing their engagement in school governance.
              </p>
            </div>

            {/* THIRD */}
            <div className='flex flex-col items-center w-full text-center'>
              <FaRegStar className='text-5xl font-bold'/>
              <h1 className='mb-2 text-3xl font-semibold'>
                Our Values
              </h1>
              <p className='text-xl font-medium'>
                At ElectEd, we uphold the highest standards of integrity, ensuring that every election is conducted with transparency and security. 
                We believe in accessibility, striving to make sure every student has the opportunity to participate, regardless of their location or 
                technical skills. Our commitment to innovation drives us to stay at the forefront of technology, constantly improving our platform to 
                provide the best voting experience possible.
              </p>
            </div>
          </div>
        </motion.div>



          {/* JOIN OUR TEAM */}
        <div className='flex flex-col items-center justify-center pt-24 text-center bg-gradient-to-r from-dmaroon to-maroon text-white2'>
          <motion.div 
            initial={{opacity:0}}
            whileInView={{
              opacity:1,
              transition:{duration:0.5, ease:"easeIn"}
            }}
            className='container'
          >
            <h1 className='text-6xl font-bold mb-7'>Join Our Team</h1>

            <p className='mb-4 text-xl font-medium'>
              Be part of a dynamic group dedicated to revolutionizing student elections with innovative technology and a commitment to excellence.
            </p>

            <button className='px-8 py-2 mb-8 text-xl font-bold rounded-full bg-white2 text-maroon'>
              JOIN OUR TEAM
            </button>
          </motion.div>
        </div>

    </motion.section>
  )
}

export default About