"use client";

import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {

	return (
		<section className="w-full h-full">
			<div className="flex justify-between w-full h-full px-10">

				{/* TEXT */}
				<motion.div 
					initial={{opacity:0, x:-100}}
					animate={{
						opacity:1,
						x:0,
						transition:{duration:0.5, ease:"easeIn"}
					}}
					className="lg:w-[45%] flex flex-col items-center justify-center mx-auto"
				>
					<h1 className="mb-8 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
						<span className="text-maroon">School's #1</span> Trusted Platform for Student Elections <br />in the Philippines
					</h1>

					<Link href="">
						<button 
							className="px-6 py-2 mb-8 font-medium border-2 rounded-full bg-gradient-to-b from-maroon to-dmaroon text-white2 w-fit"
						>
							Register as Voter
						</button>
					</Link>
				</motion.div>
				


				{/* GUWANG */}
				<motion.div 
					initial={{opacity: 0, x:100}}
					animate={{
						opacity: 1, 
						x:0,
						transition:{duration:0.5, ease: "easeIn"}
					}}
					className="hidden mx-auto lg:flex"
				>
					<Image 
						src='/guwang.png'
						width={495}
						height={495}
					/>
				</motion.div>
			</div>



			{/* 3 STEPS */}
			<div className="flex flex-col justify-center w-full mx-auto lg:flex-row bg-maroon text-white2">
				<div className="flex flex-col p-10 mx-auto my-8">
					Step 1:
					<h1 className="text-3xl font-semibold">SIGN UP</h1>
				</div>

				<div className="flex flex-col p-10 mx-auto my-8">
					Step 2:
					<h1 className="text-3xl font-semibold">VOTE</h1>
				</div>

				<div className="flex flex-col p-10 mx-auto my-8">
					Step 3:
					<h1 className="text-3xl font-semibold">VIEW ELECTION RESULT</h1>
				</div>
			</div>



			{/* TEXT AFTER 3 STEPS */}
			<div 
				className="bg-[#F0EDED] text-maroon p-14 items-center flex flex-col"
			>
				<motion.h1
					initial={{opacity: 0, y:50}}
					whileInView={{
						opacity:1,
						y:0,
						transition:{duration:0.5, ease:"easeIn"}
					}} 
					className="w-full my-10 text-4xl font-bold text-center"
				>
					Fast, Secure, and Accessible
				</motion.h1>

				<motion.p 
					initial={{opacity: 0, y:50}}
					whileInView={{
						opacity:1,
						y:0,
						transition:{duration:0.5, ease:"easeIn"}
					}} 
					className="text-center font-medium text-xl mb-10 w-[80%]"
				>
					ElectEd is your school’s premier online platform for 
					electing student representatives. Simplifying the voting process, <br /> 
					we ensure that every student's voice is heard and every vote is 
					counted with utmost security and ease.
				</motion.p>
			</div>

			<Features/>

		</section>
	);
}
