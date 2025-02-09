import { useState, useEffect } from "react";
import { ScrollLink } from "react-scroll";

export default function HomePage() {

	return (
		<section id="home" className="h-screen relative bg-transparent">
			<div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
				<div className="max-w-screen-xl mx-auto px-4 py-2 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
					<div className='flex-1 hidden md:block'>
						<img src="/laptop.png" className="max-w-xl" />
					</div>
					<div className='flex-none space-y-5 max-w-xl'>
						<h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
							Hi, I&apos;m Minh Tam.
						</h1>
						<h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
							I&apos;m a Full Stack Developer
						</h2>
						<div className='flex items-center gap-x-3 sm:text-sm'>

						</div>
						<a href="#"
							onClick={(e) => {
								e.preventDefault();
								document.querySelector("#about")?.scrollIntoView({
									behavior: "smooth",
									block: "start",
								});
							}} className='inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white'>
							<span className='inline-block rounded-full px-3 py-1 bg-indigo-600 text-white'>
								About
							</span>

							<p className='flex items-center text-gray-500'>
								Get to know more about me
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
									<path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
								</svg>
							</p>
						</a>
					</div>
				</div>
			</div>
			<div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
		</section>
	)
}