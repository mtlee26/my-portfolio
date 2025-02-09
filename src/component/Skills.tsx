import Image from 'next/image'

const Skills = () => {
	const skills = [
		{ name: 'HTML', src: '/html.png' },
		{ name: 'CSS', src: '/css.png' },
		{ name: 'JavaScript', src: '/javascript.png' },
		{ name: 'React', src: '/react.png' },
		{ name: 'Java', src: '/java.png' },
		{ name: 'Github', src: '/github.png' },
		{ name: 'NodeJs', src: '/node.png' },
		{ name: 'Python', src: '/python.png' },
	]

	return (
		<section id="skills" className="h-screen flex flex-col items-center justify-center">
			<h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
			<p className='py-8 text-xl text-center text-gray-400 mb-8'>These are the technologies I have worked with and gained experience in throughout my journey as a student and a developer</p>
			<div className="container mx-auto px-4 max-w-6xl ">
				<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="p-4 rounded-2xl max-w-sm shadow-md bg-[#0a192f] w-fit text-white hover:scale-110 hover:shadow-[#040c16] hover:border transition-all duration-300"
						>
							<Image
								src={skill.src}
								alt={`${skill.name} icon`}
								width={70}
								height={70}
								className='mx-auto'
							/>

							<p className="my-4 text-xl text-center mb-2">{skill.name}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Skills