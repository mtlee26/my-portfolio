"use client";
import React from 'react'
import { BentoGrid, BentoGridItem } from '@/component/ui/BentoGrid';

const gridItems = [
	{
		id: 1,
		title: "Tech enthusiast with a passion for development.",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "/grid.svg",
		spareImg: "/i1.svg",
	},

	{
		id: 2,
		title: "Clean Code and Modern Technology.",
		description: "Passionate about transforming ideas into reality.",
		className: "md:col-span-3 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: "/code.svg",
		spareImg: "/grid.svg",
	},
	{
		id: 3,
		title: "Driven by curiosity and a love for coding.",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "",
		spareImg: "",
	},
];

const Grid = () => {
	return (
		<section id='about'
			className="p-10 flex items-center justify-center bg-transparent"
		>
			<BentoGrid>
				{gridItems.map(({ id, title, titleClassName, description, className, img, imgClassName, spareImg }, i) => (
					<BentoGridItem
						id={id}
						key={id}
						title={title}
						titleClassName={titleClassName}
						description={description}
						className={className}
						img={img}
						imgClassName={imgClassName}
						spareImg={spareImg}
					/>
				))}
			</BentoGrid>
		</section>
	)
}

export default Grid