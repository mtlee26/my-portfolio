import { HiArrowNarrowRight } from 'react-icons/hi';
import Link from 'next/link';
import Image from "next/image";

const Projects = () => {
	const projects = [
		{
			title: "Sign Language Translator",
			description: "",
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
		<section id="projects" className="text-center p-10 min-h-screen flex flex-col justify-center">
			<div className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
				<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
					<div className='pb-8'>
						<h1 className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
							Projects
						</h1>
					</div>

					<div className='grid grid-cols-1 gap-6'>
						{projects.map((project, index) => (
							<div key={index} className='group'>
								<div className='grid md:grid-cols-2 gap-8 shadow-lg shadow-[#040c16] bg-[#112240] rounded-lg p-6 
                    hover:scale-105 duration-500'>
									{/* Ảnh bên trái */}
									<div className='relative w-full h-[300px]'>
										<Image
											src={project.src}
											alt={`${project.title} icon`}
											width={400}
											height={300}
										/>
									</div>

									{/* Content bên phải */}
									<div className='flex flex-col justify-between'>
										<div>
											<h3 className='text-2xl font-bold mb-4'>{project.title}</h3>
											<p className='text-gray-400 mb-4'>{project.description}</p>
										</div>

										{/* Button Github */}
										<Link
											href={project.github}
											target="_blank"
											className='inline-flex items-center opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 bg-pink-600 text-white 
                      py-2 px-4 rounded-lg w-fit hover:bg-pink-700'
										>
											View Project
											<HiArrowNarrowRight className='ml-2' />
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
