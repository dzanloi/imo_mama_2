import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'


const CandidateCard = props => {
  return (
    <div className='bg-[#FFFEFC] border border-maroon p-5 py-10 rounded-3xl text-center text-maroon flex flex-col items-center justify-center'>
        {/* IMAGE CONTAINER */}
        <div className='justify-center w-40 h-40 overflow-hidden border-4 rounded-full border-maroon'>
            <Image 
                src={props.source}
                width={200}
                height={200}
                className='object-cover'
            />
        </div>
        <h1 className='mt-6 mb-3 text-2xl font-bold'>{props.name}</h1>
        <p className='mb-10 text-xl font-medium text-maroon/75'>{props.year}</p>

        <div className='flex flex-col w-full gap-5 lg:flex-row'>
            <button className='container px-6 py-1 border rounded-full border-maroon text-white2 bg-maroon hover:bg-white2 hover:text-maroon'>
                Vote
            </button>

            <button className='container px-6 py-1 text-sm border rounded-full border-maroon text-maroon bg-white2 hover:bg-maroon hover:text-white2'>
                View Details
            </button>
        </div>
    </div>
  )
}

CandidateCard.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
}

export default CandidateCard