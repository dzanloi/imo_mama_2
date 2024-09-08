"use client";

import Link from 'next/link';
import React from 'react'
import { BsArrowDownRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';


const questions = [
  {
    num: "item-1",
    title: "How do I vote using ElectEd?",
    answer: "To vote, simply log in to the platform with your school credentials, view the list of candidates, and select your preferred choices. Once you confirm your vote, it will be securely submitted.",
    href: "/"
  },

  {
    num: "item-2",
    title: "Is my vote anonymous?",
    answer: "Yes, all votes cast through ElectEd are completely anonymous. We use secure encryption to ensure your vote cannot be traced back to you.",
  },

  {
    num: "item-3",
    title: "Can I vote from my mobile device?",
    answer: "Absolutely! ElectEd is mobile-friendly, allowing you to vote from any device, whether it’s your smartphone, tablet, or desktop.",
  },

  {
    num: "item-4",
    title: "How secure is ElectEd?",
    answer: "ElectEd uses industry-standard encryption and security protocols to protect the integrity of every vote, ensuring a secure and tamper-proof election process.",
  },

  {
    num: "item-5",
    title: "Can I change my vote after submission?",
    answer: "No, once your vote is submitted and confirmed, it cannot be changed. This ensures the integrity and finality of the election results.",
  },

  {
    num: "item-6",
    title: "Who can I contact for support?",
    answer: "If you need assistance, you can reach out to your election administrator or contact us directly through the Contact Us page.",
  },
]

const Faqs = () => {
  return (
    <section className='flex flex-col justify-center py-12 xl:py-0'>
      {/* BACKGROUND */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image 
          src="/faqsbg.png" 
          alt="Contact Us Background" 
          layout="fill" 
          objectFit="cover" 
          quality={100}
        />
      </div>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <motion.div 
        initial={{opacity: 0}} 
        animate={{
          opacity: 1,
          transition:{duration: 0.5, ease: "easeIn"}
        }} 
        className="container flex items-end justify-end w-full pb-32 text-maroon pt-28"
      >
        <h1 className='text-6xl font-bold text-end'>FREQUENTLY <br /> ASKED QUESTIONS</h1>
      </motion.div>




      {/* ACCORDIONS */}
      <div className='bg-gradient-to-r from-dmaroon to-maroon text-white2' >
        <motion.div 
          initial={{opacity: 0}} 
          animate={{
            opacity: 1,
            transition:{duration: 0.5, ease: "easeIn"}
          }}
          className='container my-14'
        >
          

          <Accordion type='single'>
            {questions.map((item, index) => {
              return (
                <AccordionItem key={index} value={item.num}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

export default Faqs