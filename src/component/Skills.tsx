import Image from 'next/image'

const Skills = () => {
	const skills = [
		{ name: 'HTML', src: '/html.png' },
		{ name: 'CSS', src: '/css.png' },
		{ name: 'JavaScript', src: '/javascript.png' },
		{ name: 'React', src: '/react.png' },
		{ name: 'Tailwind', src: '/tailwind.png' },
		{ name: 'Github', src: '/github.png' },
		{ name: 'Firebase', src: '/firebase.png' }
	]

	return (
		<section id="skills" className="text-center p-10 min-h-screen flex flex-col justify-center">
			<div className='w-full bg-[#0a192f] text-gray-300 px-4'>
				<div className='max-w-[1000px] mx-auto p-4'>
					<div>
						<p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
						<p className='py-4 text-gray-400'>These are the technologies I have worked with and gained experience in throughout my journey as a student and a developer</p>
					</div>

					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-4'>
						{skills.map((skill, index) => (
							<div
								key={index}
								className="shadow-lg shadow-[#040c16] rounded-md p-4 transform transition duration-500 hover:scale-110"
								// className='shadow-lg shadow-[#040c16] rounded-md p-4 hover:scale-110 duration-500'
							>
								<Image
									src={skill.src}
									alt={`${skill.name} icon`}
									width={70}
									height={70}
									className='mx-auto'
								/>
								<p className='my-2'>{skill.name}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Skills