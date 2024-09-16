import { Switch } from '@/components/ui/switch'
import Image from 'next/image'
import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoEarthOutline } from 'react-icons/io5'
import { RxQuestionMarkCircled } from "react-icons/rx";
import { BiMessageDetail } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa6";
import Link from 'next/link';

const page = () => {
  return (
    <section className='container mt-28 md:absolute md:left-28 lg:left-48 xl:left-72'>
        <div className='container flex flex-col justify-center text-center text-maroon'>
            {/* IMAGE CONTAINER */}
            <div className='justify-center w-64 h-64 mx-auto mb-3 overflow-hidden border-4 rounded-full border-maroon'>
              <Image 
                  src="/dobby.png"
                  width={500}
                  height={500}
                  className='object-cover'
              />
            </div>
            <h1 className='text-2xl font-bold'>Wang Pok</h1>
            <p className='font-medium'>View Profile</p>
        </div>

        <div className='container grid items-center grid-cols-1 mt-10 md:grid-cols-2'>


            {/* ACCOUNT */}
            <div className='flex flex-col items-center justify-center w-[60%] mx-auto text-center'>
                <h1 className='mb-2 text-2xl font-semibold text-itom'>Account</h1>

                <div className='flex items-center justify-between w-full py-1 my-2 rounded-md'>
                    <div className='flex items-center gap-4'>
                        <IoIosNotificationsOutline className='text-2xl text-itom'/>
                        <h1 className='text-xl'>Notification</h1>
                    </div>
                    <Switch/>
                </div>
            
                <Link 
                    href="/settings"
                    className='flex items-center justify-between w-full p-1 m-2 rounded-md hover:bg-black/20'
                >
                    <div className='flex items-center gap-4'>
                        <IoEarthOutline className='text-xl text-itom'/>
                        <h1 className='text-xl'>Language</h1>
                    </div>
                    <FaGreaterThan/>
                </Link>
            </div>



            {/* OTHERS */}
            <div className='flex flex-col items-center justify-center w-[60%] mx-auto text-center'>
                <h1 className='mb-2 text-2xl font-semibold text-itom'>Others</h1>

                <Link 
                    href=""
                    className='flex items-center justify-between w-full p-1 m-2 rounded-md hover:bg-black/20'
                >
                    <div className='flex items-center gap-4'>
                        <RxQuestionMarkCircled className='text-xl text-itom'/>
                        <h1 className='text-xl'>Legal Policies</h1>
                    </div>
                    <FaGreaterThan/>
                </Link>


                <Link 
                    href="/settings"
                    className='flex items-center justify-between w-full p-1 m-2 rounded-md hover:bg-black/20'
                >
                    <div className='flex items-center gap-4'>
                        <BiMessageDetail className='text-xl text-itom'/>
                        <h1 className='text-xl'>Help and Support</h1>
                    </div>
                    <FaGreaterThan/>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default page