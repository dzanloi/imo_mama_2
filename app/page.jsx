import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function Home() {
	return (
		<section className="w-full h-full">


			<div className="flex justify-between w-full h-full px-10">

				{/* TEXT */}
				<div className="lg:w-[45%] flex flex-col items-center justify-center mx-auto">
					<h1 className="mb-8 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
						<span className="text-maroon">School's #1</span> Trusted Platform for Student Elections <br />in the Philippines
					</h1>

					<button 
						className="px-6 py-2 mb-8 font-medium border-2 rounded-full bg-gradient-to-b from-maroon to-dmaroon text-white2 w-fit">
						Register as Voter
					</button>
				</div>


				{/* GUWANG */}
				<div className="hidden mx-auto lg:block">
					<Image 
						src='/guwang.png'
						width={495}
						height={495}
					/>
				</div>
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
			<div className="bg-[#F0EDED] text-maroon p-14 items-center flex flex-col">
				<h1 className="w-full my-10 text-3xl font-bold text-center">Fast, Secure, and Accessible</h1>

				<p className="text-center font-light text-xl mb-10 w-[80%]">
					ElectEd is your school’s premier online platform for 
					electing student representatives. Simplifying the voting process, <br /> 
					we ensure that every student's voice is heard and every vote is 
					counted with utmost security and ease.
				</p>
			</div>

			<Features/>

			<Footer/>

		</section>
	);
}
