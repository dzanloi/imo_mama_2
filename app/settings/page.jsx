import { Switch } from '@/components/ui/switch'
import Image from 'next/image'
import React from 'react'


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

        <div className='container grid grid-cols-1 gap-6 mt-10 md:grid-cols-2'>
            {/* ACCOUNT */}
            <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-2xl font-semibold text-itom'>Account</h1>
                <div className='flex w-full justify-evenly'>
                    <h1 className='font-medium'>Notification</h1>
                    <Switch/>
                </div>
                <div>
                    <h1 className='font-medium'>Language</h1>
                    <h1></h1>
                </div>
            </div>

            {/* OTHERS */}
            <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-2xl font-semibold text-itom'>Others</h1>
                <div>Legal Policies</div>
                <div>Help and Support</div>
            </div>
        </div>
    </section>
  )
}

export default page