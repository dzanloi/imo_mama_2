import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'

const Card = props => {
  return (
    <div className='bg-[#FFFEFC] p-5 py-10 rounded-3xl text-center text-maroon flex flex-col items-center justify-center'>
        <div className='justify-center w-40 h-40 overflow-hidden border-4 rounded-full border-maroon'>
            <Image 
                src={props.source}
                width={200}
                height={200}
                className='object-cover'
            />
        </div>
        <h1 className='mt-6 text-2xl font-bold'>{props.name}</h1>
        <p className='text-xl font-medium text-maroon/75'>{props.details}</p>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
}

export default Card