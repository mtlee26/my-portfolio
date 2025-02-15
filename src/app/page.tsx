"use client"
import Head from 'next/head';
import HomePage from '@/component/Home';
import Skills from '@/component/Skills';
import Projects from '@/component/Projects';
import Contact from '@/component/Contact';
import Footer from '@/component/Footer';
import CustomCursor from '@/component/ui/Cursor';
import Grid from '@/component/About';

export default function Home() {
	return (
		<div className="bg-[#000102] text-white min-h-screen font-sans">
			<Head>
				<title>Portfolio</title>
			</Head>
			<CustomCursor />
			<main>
				<HomePage></HomePage>
				<Grid></Grid>
				<Skills></Skills>
				<Projects></Projects>
				<Contact></Contact>
				<Footer></Footer>
			</main>
		</div>
	);
}