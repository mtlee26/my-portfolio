"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import Link from 'next/link';
import Image from "next/image";
import { HoverBorderGradient } from "./hover-border-gradient";

interface SlideData {
	title: string;
	src: string;
	description: string;
	github: string;
}

interface SlideProps {
	slide: SlideData;
	index: number;
	current: number;
	handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
	const slideRef = useRef<HTMLLIElement>(null);

	const xRef = useRef(0);
	const yRef = useRef(0);
	const frameRef = useRef<number>(null);

	useEffect(() => {
		const animate = () => {
			if (!slideRef.current) return;

			const x = xRef.current;
			const y = yRef.current;

			slideRef.current.style.setProperty("--x", `${x}px`);
			slideRef.current.style.setProperty("--y", `${y}px`);

			frameRef.current = requestAnimationFrame(animate);
		};

		frameRef.current = requestAnimationFrame(animate);

		return () => {
			if (frameRef.current) {
				cancelAnimationFrame(frameRef.current);
			}
		};
	}, []);

	const handleMouseMove = (event: React.MouseEvent) => {
		const el = slideRef.current;
		if (!el) return;

		const r = el.getBoundingClientRect();
		xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
		yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
	};

	const handleMouseLeave = () => {
		xRef.current = 0;
		yRef.current = 0;
	};

	const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
		event.currentTarget.style.opacity = "1";
	};

	const { src, title, description, github } = slide;

	return (
		<div className="[perspective:1200px] [transform-style:preserve-3d]">
			<li
				ref={slideRef}
				className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[60vmin] mx-[4vmin] z-10 "
				onClick={() => handleSlideClick(index)}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				style={{
					transform:
						current !== index
							? "scale(0.98) rotateX(8deg)"
							: "scale(1) rotateX(0deg)",
					transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
					transformOrigin: "bottom",
				}}
			>
				<div
					className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
					style={{
						transform:
							current === index
								? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
								: "none",
					}}
				>
					<div key={index} className='group absolute inset-0 '>
						<div className='items-center justify-center grid md:grid-cols-1 gap-2 shadow-lg shadow-[#040c16] bg-[#112240] rounded-lg p-6 
                                hover:scale-105 duration-500 h-[90%] self-start'>
							<div className="h-full flex flex-col justify-between items-center w-full">

								<Image
									src={src}
									alt={`${title} icon`}
									width={400}
									height={200}
									className="h-[70%] w-auto rounded-2xl object-cover"
								/>

								<div className="flex flex-col items-center justify-center w-full flex-1">
									<h3 className="text-2xl font-bold text-center mb-4">{title}</h3>


									<Link
										href={github}
										target="_blank"
										className="inline-flex opacity-0 group-hover:opacity-100 
										  transition-opacity duration-300 text-black bg-[#DCC9C9] hover:bg-[#9B8585] 
										  py-2 px-4 rounded-lg w-fit"
									>
										View Project
										<IconArrowNarrowRight className="text-black dark:text-neutral-200" />
										{/* <HiArrowNarrowRight className="ml-2" /> */}
									</Link>

								</div>
							</div>

						</div>
					</div>
				</div>
			</li>
		</div>
	);
};

interface CarouselControlProps {
	type: string;
	title: string;
	handleClick: () => void;
}

const CarouselControl = ({
	type,
	title,
	handleClick,
}: CarouselControlProps) => {
	return (
		<button
			className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${type === "previous" ? "rotate-180" : ""
				}`}
			title={title}
			onClick={handleClick}
		>
			<IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
		</button>
	);
};

interface CarouselProps {
	slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
	const [current, setCurrent] = useState(0);

	const handlePreviousClick = () => {
		const previous = current - 1;
		setCurrent(previous < 0 ? slides.length - 1 : previous);
	};

	const handleNextClick = () => {
		const next = current + 1;
		setCurrent(next === slides.length ? 0 : next);
	};

	const handleSlideClick = (index: number) => {
		if (current !== index) {
			setCurrent(index);
		}
	};

	const id = useId();

	return (
		<div
			className="relative w-[70vmin] h-[60vmin] mx-auto"
			aria-labelledby={`carousel-heading-${id}`}
		>
			<ul
				className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
				style={{
					transform: `translateX(-${current * (100 / slides.length)}%)`,
				}}
			>
				{slides.map((slide, index) => (
					<Slide
						key={index}
						slide={slide}
						index={index}
						current={current}
						handleSlideClick={handleSlideClick}
					/>
				))}
			</ul>

			<div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
				<CarouselControl
					type="previous"
					title="Go to previous slide"
					handleClick={handlePreviousClick}
				/>

				<CarouselControl
					type="next"
					title="Go to next slide"
					handleClick={handleNextClick}
				/>
			</div>
		</div>
	);
}
