"use client";

import Link from 'next/link';
import React from 'react'
import { BsArrowDownRight } from 'react-icons/bs';


const questions = [
  {
    num: "01",
    title: "Unsaon pag vote",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sunt at fugiat a.",
    href: "/"
  },

  {
    num: "02",
    title: "Nya happy?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sunt at fugiat a.",
    href: "/"
  },

  {
    num: "03",
    title: "Love ka?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sunt at fugiat a.",
    href: "/"
  },

  {
    num: "04",
    title: "Pasar ka?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sunt at fugiat a.",
    href: "/"
  },
]

const Faqs = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]' 
        >
          {questions.map((question, index) => {
            return(
              <div key={index} className='flex-1 flex-col justify-center gap-6 group'>


                {/* TOP */}
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold 
                      text-dmaroon
                      text-outline text-transparent 
                      group-hover:text-outline-hover transition-all duration-500'
                  >{question.num}</div>
                  <Link 
                    href={question.href} 
                    className='w-[70px] h-[70px] rounded-full 
                    bg-maroon group-hover:bg-accent transition-all duration-500 flex justify-center
                    items-center hover:-rotate-45'
                  >
                    <BsArrowDownRight className='text-white2 text-3xl' />
                  </Link>
                </div>


                {/* TITLE */}
                <h2 className='text-[42px] font-bold leading-none text-maroon 
                 group-hover:text-accent transition-all duration-500'
                >
                  {question.title}
                </h2>

                {/* DESCRIPTION */}
                <p className='text-dmaroon'>{question.answer}</p>

                {/* BORDER */}
                <div className='border-b border-white/20 w-full'></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faqs