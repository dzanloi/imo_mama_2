"use client";

import Link from 'next/link';
import Image from 'next/image';

const page = () => {

  return (
    // TRUE TO ALL PAGES SA DASHBOARD
    <section className='container mt-28 lg:absolute md:left-28 lg:left-48 xl:left-72'>
      {/* GREETINGS */}
      <div className='mb-4 text-dmaroon'>
        <h1 className='text-4xl font-medium'>Hello, <span className='font-bold'>Wang Pok</span></h1>
        <p className='text-xl'>Welcome to <span>ElectEd's Online Voting System</span></p>
      </div>

      {/* CONTAINER FOR ALL CARDS */}
      <div className='flex flex-col w-full gap-6'>
        {/* CARD 1 and 2 */}
        <div className='flex flex-col w-full gap-6 md:flex-row'>
          {/* CARD1 */}
          <div className='flex w-full border-2 shadow-md rounded-3xl border-itom/25 text-maroon'>
                <div className='flex flex-col py-5 px-7'>
                  <h3 className='mb-4 text-xl font-semibold text-dmaroon'>On going Election</h3>
                  <div className='w-full pl-4'>
                    <h1 className='text-5xl font-semibold'><span className='text-6xl font-bold'>S</span>upreme <span className='text-6xl font-bold'>S</span>tudent <span className='text-6xl font-bold'>G</span>overnment</h1>
                    {/* SUD UG DIV ANG BUTTON PARA TUNGA */}
                    <div className='flex items-center justify-center w-full'>
                      <button 
                        className='px-6 py-2 mt-4 font-semibold border rounded-full text-maroon border-maroon hover:bg-maroon hover:text-white2'
                      >
                        Vote Now
                      </button>
                    </div>
                  </div>
                </div>
                {/* IMAGE CONTAINER */}
                <div className='flex items-center justify-center h-full p-3'>
                  <Image src="/ongoingelections.png"
                    width={500}
                    height={100}
                  />
                </div>
          </div>

          {/* CARD 2 */}
          <div className='flex flex-col max-w-[50%] py-5 mx-auto border-2 shadow-md px-7 rounded-3xl border-itom/25 text-maroon'>
              <h3 className='mb-4 text-xl font-semibold text-dmaroon'>Live Results</h3>
              <Image src="/liveresults.png"
                width={400}
                height={100}
                className='py-4'
              />

              <Link href="/dashboard">
                <h1 className='w-full ml-auto text-xl font-semibold'>Watch Live</h1>
              </Link>
          </div>
        </div>

          {/* CARD 3 */}
          <div className='py-5 border-2 shadow-md px-7 rounded-3xl border-itom/25 text-maroon'>
            <h1 className='font-semibold text-center text-dmaroon'>Voting Process</h1>
            <div>
              asdlkfasldkf
            </div>
          </div>
        

      </div>
        

      
    </section>

  )
}

export default page