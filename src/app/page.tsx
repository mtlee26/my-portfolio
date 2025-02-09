"use client"
import Contact from '@/component/Contact';
import Skills from '@/component/Skills';
import Head from 'next/head';
import Nav from '@/component/Navbar';
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AuroraBackground } from '@/component/ui/aurora-background';
import { BackgroundGradient } from '@/component/ui/background-gradient';
import HomePage from '@/component/Home';
import { Projects } from '@/component/Project';

export default function Home() {
	return (
		<div className="bg-[#031428] text-white min-h-screen font-sans">
			<Head>
				<title>Portfolio</title>
			</Head>
			<header className="fixed top-0 w-full flex justify-end items-center p-4 bg-[#010b1a] z-50">
				{/* <Navbar/> */}
				<div></div>
				<Nav />
			</header>
			<main className="pt-16">
				<HomePage></HomePage>

				{/* About */}
				<section id="about" className="text-center p-10 min-h-screen flex flex-col justify-center scroll-mt-16 bg-transparent">
					<div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
						<div >
							<h2 className="text-4xl font-bold text-center mb-16">About me</h2>
							<h1 className="text-2xl mt-4">I&apos;m a Software Engineer.</h1>
							<p className="text-gray-400 mt-2">I&apos;m passionate ...</p>
						</div>
						<div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
					</div>
				</section>
				<Skills />
				<Projects></Projects>
				<Contact />

				<footer className="bottom-0 flex flex-row justify-between px-10 py-5 bg-[#010b1a]">
					<div className="flex flex-row gap-6 mobile:flex-col mobile:gap-2 ">
						<a className="font-bold text-lg" href="https://github.com/mtlee26" target="_blank">
							<FaGithub className="w-10 h-10 text-white" />
						</a>
						<a className="font-bold text-base text-white" href="https://facebook.com" target="_blank">
							<FaFacebook className="w-10 h-10 text-blue-600" />
						</a>
						<a className="font-bold text-lg" href="https://www.linkedin.com/" target="_blank">
							<FaLinkedinIn className="w-10 h-10 text-white" />
						</a>
					</div>
				</footer>
			</main>
		</div>
	);
}
