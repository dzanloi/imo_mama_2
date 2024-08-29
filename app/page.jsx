import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function Home() {
	return (
		<section className="w-full h-full">


			<div className="flex justify-end w-full h-full px-10">

				{/* TEXT */}
				<div className="w-[40%] justify-center flex flex-col items-center">
					<h1 className="mb-8 text-6xl font-semibold leading-tight">
						<span className="text-maroon">School's #1</span> Trusted Platform for Student Elections <br />in the Philippines
					</h1>

					<button 
						className="px-6 py-2 font-medium border-2 rounded-full bg-gradient-to-b from-maroon to-dmaroon text-white2 w-fit">
						Register as Voter
					</button>
				</div>


				{/* GUWANG */}
				<div className="p-0 m-0">
					<Image 
						src='/guwang.png'
						width={800}
						height={800}
					/>
				</div>
			</div>



			{/* 3 STEPS */}
			<div className="flex justify-center w-full gap-10 mx-auto bg-maroon text-white2">
				<div className="w-[20%] flex flex-col p-10 my-8">
					Step 1:
					<h1 className="text-3xl font-semibold">SIGN UP</h1>
				</div>

				<div className="w-[20%] flex flex-col p-10 my-8">
					Step 2:
					<h1 className="text-3xl font-semibold">VOTE</h1>
				</div>

				<div className="w-[20%] flex flex-col p-10 my-8">
					Step 3:
					<h1 className="text-3xl font-semibold">VIEW ELECTION RESULT</h1>
				</div>
			</div>



			{/* TEXT AFTER 3 STEPS */}
			<div className="bg-[#F0EDED] text-maroon p-14 items-center flex flex-col">
				<h1 className="w-full my-10 text-3xl font-bold text-center">Fast, Secure, and Accessible</h1>

				<p className="text-center font-medium text-xl mb-10 w-[80%]">
					ElectEd is your school’s premier online platform for 
					electing student representatives. Simplifying the voting process, 
					we ensure that every student's voice is heard and every vote is 
					counted with utmost security and ease.
				</p>
			</div>



			<Footer/>

		</section>
	);
}
