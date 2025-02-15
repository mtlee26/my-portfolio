"use client";
import { motion } from "framer-motion";
import { IconCloud } from "./ui/IconCloud";

const slugs = [
	"typescript",
	"javascript",
	"java",
	"react",
	"html5",
	"css3",
	"nodedotjs",
	"nextdotjs",
	"postgresql",
	"vercel",
	"git",
	"github",
	"visualstudiocode",
	"figma",
	"python",
	"mysql",
	"cplusplus",
];

function Skills() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ margin: "-100px" }}
			transition={{ duration: 0.6 }}
			id="skills" className="h-screen flex flex-col items-center justify-center"
		>
			<h2 className="text-4xl font-bold text-center mb-10">Skills &amp;{" "} <span className="text-[#ccd6f6]">Technologies</span></h2>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ margin: "-100px" }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="">
				<p className='py-8 text-xl text-center text-white mb-4'>These are the technologies I have worked with and gained experience in throughout my journey as a student and a developer</p>
			</motion.div>
			<IconCloud iconSlugs={slugs} />
		</motion.section>
	);
}

export default Skills;