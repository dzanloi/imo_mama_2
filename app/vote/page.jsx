import CandidateCard from '@/components/dashboard-components/CandidateCard'
import React from 'react'

const page = () => {
  return (
    <section className='container mt-28 md:absolute md:left-28 lg:left-48 xl:left-72'>
        <h1 className='text-5xl font-bold text-maroon'>CAST YOUR VOTES NOW!</h1>

        <div className='container mt-12 text-center text-maroon'>
          <h1 className='text-3xl font-bold text-dmaroon'>President</h1>
          <p className='mb-4 font-semibold'>You can only vote for one candidate</p>

          {/* Candidate Cards (PRESIDENT) */}
          <div className='container grid grid-cols-2 gap-6 mb-10 md:grid-cols-3'>
            <CandidateCard 
              source="/dobby.png"
              name="Wang Pok"
              year="4th Year"
            />

            <CandidateCard 
              source="/dobby.png"
              name="Wang Pok"
              year="4th Year"
            />

            <CandidateCard 
              source="/dobby.png"
              name="Wang Pok"
              year="4th Year"
            />

            <CandidateCard 
              source="/dobby.png"
              name="Wang Pok"
              year="4th Year"
            />

            <CandidateCard 
              source="/dobby.png"
              name="Wang Pok"
              year="4th Year"
            />

            <CandidateCard 
              source="/dobby.png"
              name="Wang Pok"
              year="4th Year"
            />
          </div>
        </div>



        <div className='container mt-12 text-center text-maroon'>
          <h1 className='text-3xl font-bold text-dmaroon'>Vice-President</h1>
          <p className='mb-4 font-semibold'>You can only vote for one candidate</p>

          {/* Candidate Cards (PRESIDENT) */}
          <div className='container grid grid-cols-2 gap-6 mb-10 md:grid-cols-3'>
            <CandidateCard 
              source="/dobby.png"
              name="Wang Pok"
              year="4th Year"
            />

            <CandidateCard 
              source="/dobby.png"
              name="Wang Pok"
              year="4th Year"
            />

            <CandidateCard 
              source="/dobby.png"
              name="Wang Pok"
              year="4th Year"
            />

            <CandidateCard 
              source="/dobby.png"
              name="Wang Pok"
              year="4th Year"
            />

            <CandidateCard 
              source="/dobby.png"
              name="Wang Pok"
              year="4th Year"
            />

            <CandidateCard 
              source="/dobby.png"
              name="Wang Pok"
              year="4th Year"
            />
          </div>
        </div>


        <div className='flex items-center justify-center w-full mb-10'>
          <button className='px-10 py-2 font-medium text-center text-white rounded-full bg-gradient-to-t from-dmaroon to-maroon'>
            Submit Votes
          </button>

        </div>
    </section>
  )
}

export default page