"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { CiMenuFries, CiSearch } from 'react-icons/ci';
import { PiBellLight } from "react-icons/pi";
import Sidebar from './Sidebar';


const DashboardNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <nav className='fixed top-0 left-0 z-50 flex items-center justify-between w-full px-6 py-2 bg-transparent shadow-md bg-white2 text-maroon'>
        {/* LEFT */}
        <div className='flex items-center gap-6'>
          <button onClick={toggleSidebar} className="p-2">
            <CiMenuFries className="text-3xl font-bold" />
          </button>
          
          <Link href="/dashboard">
            <Image src="/logoonly.svg"
              width={45}
              height={45}
            />
          </Link>
        </div>

        
        {/* MID */}
        <div className='flex items-center px-4 py-1 border bg-maroon/5 rounded-full border-maroon/30 min-w-[50%]'>
          <Link href="/dashboard">
            <CiSearch className='mx-2 text-2xl text-itom'/>
          </Link>
          <input 
            type="text" 
            placeholder='Search' 
            className='w-full h-full py-1 pr-4 text-lg bg-transparent border-none outline-none text-itom' 
          />
        </div>


        {/* RIGHT */}
        <div className='flex items-center justify-start gap-4 pr-8'>
          <PiBellLight className='text-3xl font-bold rounded-full hover:bg-white2/20'/>
          <div className='justify-center overflow-hidden border-4 rounded-full w-14 h-14 border-maroon'>
              <Image 
                  src="/dobby.png"
                  width={50}
                  height={50}
                  className='object-cover'
              />
          </div>
          <h2 className='hidden text-xl font-medium md:block'>Wang Pok</h2>
        </div>
      </nav> 

      {/* Sidebar component */}
      <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
    </>
  )
}

export default DashboardNav