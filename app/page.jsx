import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function Home() {
	return (
		<section className="w-full h-full">


			<div className="flex justify-end w-full">

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
				<div>
					<Image 
						src='/guwang.png'
						width={800}
						height={800}
					/>
				</div>

			</div>




		</section>
	);
}
