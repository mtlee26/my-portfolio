"use client";

import { section } from "motion/react-client";
import { Carousel } from "./ui/carousel";
export function Projects() {
	const projects = [
		{
			title: "Sign Language Translator",
			description: "SignLanguage Translator provides a communication support solution for the hearing and speech impaired by creating a platform for translating and learning sign language through dictionary, games and interactive lessons.",
			github: "https://github.com/mtlee26/Sign-language-translator",
			src: "/signlanguage.png",
		},
		{
			title: "Dictionary",
			description: "",
			github: "https://github.com/mtlee26/OOPProject",
			src: "/dictionary.png"
		},
		{
			title: "Space Shooter Game",
			description: "",
			github: "https://github.com/mtlee26/Game-SDL2",
			src: "/game.png"
		},
	];

	return (
		<section id="projects" className="text-center h-screen flex flex-col justify-center">
			<h1 className='text-4xl font-bold inline  text-gray-300 '>
				Projects
			</h1>
			<div className="relative overflow-hidden w-full h-full py-10">
				<Carousel slides={projects} />
			</div>
		</section>
	);
}
