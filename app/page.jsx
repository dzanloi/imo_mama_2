import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function Home() {
	return (
		<section className="w-full h-full">


			<div className="flex justify-end w-full h-full px-10">

				{/* TEXT */}
				<div className="w-[40%] justify-center flex flex-col items-center">
					<h1 className="font-semibold text-6xl mb-8 leading-tight">
						<span className="text-maroon">School's #1</span> Trusted Platform for Student Elections <br />in the Philippines
					</h1>

					<button 
						className="
						border-2 
						bg-gradient-to-b 
						from-maroon 
						to-dmaroon 
						text-white2 
						w-fit 
						py-2 
						px-6 
						rounded-full
						font-medium
					">
						Register as Voter
					</button>
				</div>


				{/* GUWANG */}
				<div className="m-0 p-0">
					<Image 
						src='/guwang.png'
						width={800}
						height={800}
					/>
				</div>
			</div>



			{/* 3 STEPS */}
			<div className="mx-auto flex justify-center gap-10 w-full bg-maroon text-white2">
				<div className="w-[20%] flex flex-col p-10 my-8">
					Step 1:
					<h1 className="font-semibold text-3xl">SIGN UP</h1>
				</div>

				<div className="w-[20%] flex flex-col p-10 my-8">
					Step 2:
					<h1 className="font-semibold text-3xl">VOTE</h1>
				</div>

				<div className="w-[20%] flex flex-col p-10 my-8">
					Step 3:
					<h1 className="font-semibold text-3xl">VIEW ELECTION RESULT</h1>
				</div>
			</div>


			<div className="bg-[#F0EDED] text-maroon p-14 items-center flex flex-col">
				<h1 className="font-bold text-3xl w-full text-center my-10">Fast, Secure, and Accessible</h1>

				<p className="text-center font-medium text-xl mb-10 w-[80%]">
					ElectEd is your school’s premier online platform for 
					electing student representatives. Simplifying the voting process, 
					we ensure that every student's voice is heard and every vote is 
					counted with utmost security and ease.
				</p>
			</div>





		</section>
	);
}
