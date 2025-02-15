import { motion } from "framer-motion";
import Img from "react-cool-img";
import { FaLocationArrow } from "react-icons/fa";
import { Button } from "./ui/MovingBorder";
import Link from "next/link";

const projects = [
	{
		title: "Sign Language Translator",
		description: "A communication support solution for the hearing and speech impaired.",
		github: "https://github.com/mtlee26/Sign-language-translator",
		src: "/signlanguage.png",
		iconList: ["/re.svg", "/typescript.svg", "/p.svg"],
	},
	{
		title: "Dictionary",
		description: "An OOP-based application for quick and easy word lookup.",
		github: "https://github.com/mtlee26/OOPProject",
		src: "/dictionary.png",
		iconList: ["/java.svg", "/mysql.svg"],
	},
	{
		title: "Space Shooter Game",
		description: "An action-packed game with dynamic graphics and engaging gameplay.",
		github: "https://github.com/mtlee26/Game-SDL2",
		src: "/game.png",
		iconList: ["/cpp.svg"],
	},
];

const Projects = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ margin: "-100px" }}
			transition={{ duration: 0.6 }}
			id="projects" className="min-h-screen flex flex-col items-center justify-center"
		>
			<h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
			<div className="container mx-auto px-4 max-w-6xl m-4 flex flex-col items-center justify-center">
				<div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, index) => (
						<Button
							key={index}
							duration={Math.floor(Math.random() * 10000) + 10000}
							borderRadius="1.75rem"
							className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
						>
							<motion.div
								key={index}
								whileHover={{ scale: 1.05 }}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ margin: "-100px" }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="group backdrop-blur-sm p-6 rounded-xl"
							>
								<div className="img-section">
									<Img
										src={project.src}
										alt="React Cool Img"
										className="rounded-xl"
									/>
									<div className="imageCardEffect"></div>
								</div>
								<div className="project-info text-white">
									<h3 className="color-white font-bold text-center group-hover:text-[#9EB0E8] mt-4 mb-4">
										{project.title}
									</h3>
									<p className="color-white">{project.description}</p>
									<div className="flex items-center justify-between mt-7 mb-3">
										<div className="flex items-center">
											{project.iconList.map((icon, index) => (
												<div
													key={index}
													className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
													style={{
														transform: `translateX(-${5 * index + 2}px)`,
													}}
												>
													<img src={icon} alt="icon5" className="p-2" />
												</div>
											))}
										</div>

										<div className="flex justify-center items-center">
											<Link
												href={project.github}
												target="_blank"
												className="flex justify-center items-center"
											>
												<p className="flex lg:text-sm md:text-xs text-sm hover:text-[#9EB0E8]">View Project</p>
												<FaLocationArrow className="ms-3" color="#9EB0E8" />
											</Link>
										</div>
									</div>
								</div>
							</motion.div>
						</Button>
					))}
				</div>
			</div>
		</motion.section>

	);
};

export default Projects;
