"use client"
import Contact from '@/component/Contact';
// import Navbar from '@/component/Navbar';
import Projects from '@/component/Projects';
import Skills from '@/component/Skills';
import Head from 'next/head';
import Nav from '@/component/Navbar';
import { FaFacebook, FaGithub } from "react-icons/fa";

export default function Home() {
	return (
		<div className="bg-[#031428] text-white min-h-screen font-sans">
			<Head>
				<title>Portfolio</title>
			</Head>
			<header className="fixed top-0 w-full flex justify-end items-center p-4 bg-black">
				{/* <Navbar/> */}
				<div></div>
				<Nav />
			</header>
			<section id="home" className="text-center p-20 min-h-screen flex flex-col justify-center">
				<h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
					Hi, I&apos;m Minh Tam.
				</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
					I&apos;m a Full Stack Developer
				</h2>
			</section>

			{/* About */}
			<section id="about" className="text-center p-10 min-h-screen flex flex-col justify-center">
				<h2 className="text-4xl font-bold text-center mb-16">About me</h2>
				<h1 className="text-2xl mt-4">Im a Software Engineer.</h1>
				<p className="text-gray-400 mt-2">I&apos;m passionate ...</p>
			</section>


			<Skills />
			<Projects />
			<Contact />

			<footer className="bottom-0 flex flex-row justify-between px-10 py-5 bg-black">
				<div className="flex flex-row gap-6 mobile:flex-col mobile:gap-2 ">
					<a className="font-bold text-base text-white" href="https://facebook.com" target="_blank">
					<FaFacebook className="w-10 h-10 text-blue-600" /></a>
					<a className="font-bold text-lg" href="https://github.com/mtlee26" target="_blank">
						<FaGithub className="w-10 h-10 text-white" />
					</a>
				</div>
			</footer>
		</div>
	);
}
