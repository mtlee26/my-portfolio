import { motion } from "framer-motion";

export default function HomePage() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ margin: "-100px" }}
			transition={{ duration: 0.6 }}
			className="h-screen p-8 flex items-center justify-center bg-transparent"
		>
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className="mb-8"
				>
					<h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
						Hi, I&apos;m Minh Tam.
					</h1>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ margin: "-100px" }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mb-8 rounded-lg shadow-md"
				>
					<h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
						I&apos;m a Full Stack Developer
					</h2>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ margin: "-100px" }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mt-4 rounded-lg shadow-md"
				>
					<a href="#"
						onClick={(e) => {
							e.preventDefault();
							document.querySelector("#contact")?.scrollIntoView({
								behavior: "smooth",
								block: "start",
							});
						}} className='inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-xl duration-150 hover:bg-white'>
						{/* <span className='inline-block rounded-full px-3 py-1 bg-indigo-600 text-white'>
							About
						</span> */}

						<p className='flex items-center text-gray-500 px-3 py-1'>
							Contact me
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
								<path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
							</svg>
						</p>
					</a>
				</motion.div>
			</div>
		</motion.section>
	)
}