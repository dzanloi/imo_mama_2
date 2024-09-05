import Image from 'next/image'
import { GrMail } from "react-icons/gr";
import { 
  FaDiscord, 
  FaXTwitter, 
  FaGithub,
  FaLocationDot,
  FaPhone, 
  FaFacebook
} from 'react-icons/fa6'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='relative flex justify-center w-full font-medium pt-28 py-14 text-maroon bg-gradient-to-r from-dmaroon to-maroon'>

        {/* BACKGROUND */}
        <div className='absolute inset-0 z-0'>
            <Image 
                src="/footerbg.png"
                alt='background'
                // width={1700}
                // height={1000}
                layout='fill'
            />
        </div>

        {/* cCONTENT*/}
        <div className="relative z-10 grid justify-between w-full grid-cols-2 gap-10 xl:flex">

          {/* FIRST */}
          <div className='flex flex-col gap-2 mx-auto'>
            <Image 
              src="/logocolored.svg"
              width={150}
              height={150}
            />
            <p className='mb-5'>
              &copy; Copyright 2024 J3 Technologies. <br /> Limited | All Rights Reserved.
            </p>

            <div className='flex gap-8 mx-auto text-3xl'>
              <Link href="/">
                <FaFacebook/>
              </Link>

              <Link href="/">
                <FaXTwitter/>
              </Link>

              <Link href="/">
                <FaGithub/>
              </Link>
            </div>
          </div>

          {/* SECOND */}
          <div className='flex flex-col gap-2 mx-auto'>
            <h1 className='text-xl font-bold'>Product</h1>
            <p>Website</p>
          </div>
    
          {/* THIRD */}
          <div className='flex flex-col gap-2 mx-auto'>
            <h1 className='text-xl font-bold'>Legal</h1>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>FAQS</p>
          </div>

          {/* FOURTH */}
          <div className='flex flex-col gap-2 mx-auto'>
            <h1 className='text-xl font-bold'>Contact Us</h1>

            <div className='flex items-center gap-2'>
              <FaLocationDot className='text-xl'/>
              <p>Cebu City, Philippines</p>
            </div>

            <div className='flex items-center gap-2'>
              <GrMail className='text-xl'/>
              <p>elected@cit.edu</p>
            </div>

            <div className='flex items-center gap-2'>
              <FaPhone className='text-xl'/>
              <p>+63 987 654 3210</p>
            </div>
          </div>

        </div>

    </footer>
  )
}

export default Footer
