import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'

const Card = props => {
  return (
    <div className='bg-[#FFFEFC] p-5 py-10 rounded-3xl text-center text-maroon flex flex-col items-center justify-center'>
        <div className='rounded-full overflow-hidden justify-center border-4 border-maroon w-40 h-40'>
            <Image 
                src={props.source}
                width={200}
                height={200}
                className='object-cover'
            />
        </div>
        <h1 className='text-2xl font-bold mt-6'>{props.name}</h1>
        <p className='text-xl font-medium text-maroon/75'>{props.details}</p>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
}

export default Card