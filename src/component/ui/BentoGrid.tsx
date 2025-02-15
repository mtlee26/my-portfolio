"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SparklesCore } from "./Sparkles";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	id,
	title,
	description,
	img,
	imgClassName,
	titleClassName,
	spareImg,
}: {
	className?: string;
	id: number;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
}) => {
	const [copied, setCopied] = useState(false);

	return (
		<>
			<div
				className={cn(
					"row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
					className
				)}

			>
				{/* add img divs */}
				<div className={`${id === 6 && "flex justify-center"} h-full`}>
					<div className="w-full h-full absolute">
						{img && (
							<img
								src={img}
								alt={img}
								className={cn(imgClassName, "object-cover object-center ")}
							/>
						)}
					</div>
					<div
						className={`absolute right-0 -bottom-5 ${id === 2 && "w-full opacity-80"
							} `}
					>
						{spareImg && (
							<>
								<img
									src={spareImg}
									alt={spareImg}
									//   width={220}
									className="object-cover object-center w-full h-full"
								/>
							</>
						)}
					</div>
					{id === 3 && (<div
						className={`absolute right-0 -bottom-5 "w-full opacity-80"
							} `}
					>
						<>
							<SparklesCore
								id="tsparticlesfullpage"
								background="transparent"
								minSize={0.6}
								maxSize={1.4}
								particleDensity={100}
								className="w-full h-full"
								particleColor="#FFFFFF"
							/>

						</>
					</div>
					)}

					<div
						className={cn(
							titleClassName,
							"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
						)}
					>
						<div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
							{description}
						</div>
						<div
							className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
						>
							{title}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};