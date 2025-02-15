import { motion } from "framer-motion";
import Img from "react-cool-img";

const projects = [
	{
		title: "Sign Language Translator",
		description: "A communication support solution for the hearing and speech impaired.",
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
						<motion.div
							key={index}
							whileHover={{ scale: 1.05 }}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ margin: "-100px" }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
						>
							<div className="img-section">
								<Img
									src={project.src}
									alt="React Cool Img"
									className="rounded-xl"
								/>
								<div className="imageCardEffect"></div>
							</div>
							<div className="project-info">
								<h3 className="color-white font-bold text-center group-hover:text-blue-500 mt-4 mb-4">
									{project.title}
								</h3>
								<p className="color-white">{project.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>

	);
};

export default Projects;
