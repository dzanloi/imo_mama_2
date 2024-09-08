"use client";

import DashboardNav from '@/components/dashboard-components/DashboardNav'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { CiMenuFries } from 'react-icons/ci';
import { GoHomeFill } from "react-icons/go";
import { MdEventNote, MdSettings, MdTask } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import Footer from '@/components/Footer';

const links = [
  {
    icon: <GoHomeFill/>,
    href: '/dashboard',
  },

  {
    icon: <MdEventNote/>,
    href: '/vote',
  },

  {
    icon: <MdSettings/>,
    href: '/settings',
  },

  {
    icon: <MdTask/>,
    href: '/task',
  },
];

const page = () => {
  const pathname = usePathname();

  return (
    // TRUE TO ALL PAGES SA DASHBOARD
    <section className='container absolute left-80 top-28'>
      {/* GREETINGS */}
      <div className='mb-4 text-dmaroon'>
        <h1 className='text-4xl font-medium'>Hello, <span className='font-bold'>Wong Pak</span></h1>
        <p className='text-xl'>Welcome to <span>ElectEd's Online Voting System</span></p>
      </div>

      {/* Card1 */}
      <div className='flex w-full h-full border-2 shadow-md rounded-3xl border-itom/25 text-maroon'>

        <div className='flex flex-col py-5 px-7'>
          <h3 className='mb-4 text-xl font-medium text-dmaroon'>On going Election</h3>
          <div className='w-full pl-4'>
            <h1 className='text-4xl font-semibold'>Student Supreme <br /> Government</h1>
            <button 
              className='px-6 py-2 mt-4 font-semibold border rounded-full text-maroon border-maroon hover:bg-maroon hover:text-white2'
            >
              Vote Now
            </button>
          </div>
        </div>


      </div>
      
    </section>

  )
}

export default page