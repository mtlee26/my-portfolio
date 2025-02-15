import { useEffect, useRef } from "react";

const CustomCursor = () => {
	const cursorRef = useRef<HTMLDivElement>(null);
	const followerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
			const { clientX, clientY } = event;
			if (cursorRef.current && followerRef.current) {
				const mouseX = clientX - cursorRef.current.clientWidth / 2;
				const mouseY = clientY - cursorRef.current.clientHeight / 2;

				cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

				followerRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
			}
		};

		const handleMouseEnter = () => {
			if (cursorRef.current) {
				cursorRef.current.classList.add("cursor-hover");
			}
			if (followerRef.current) {
				followerRef.current.classList.add("follower-hover");
			}
		};

		const handleMouseLeave = () => {
			if (cursorRef.current) {
				cursorRef.current.classList.remove("cursor-hover");
			}
			if (followerRef.current) {
				followerRef.current.classList.remove("follower-hover");
			}
		};

		document.addEventListener("mousemove", handleMouseMove);
		document.querySelectorAll("a").forEach((el) => {
			el.addEventListener("mouseenter", handleMouseEnter);
			el.addEventListener("mouseleave", handleMouseLeave);
		});

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.querySelectorAll("a").forEach((el) => {
				el.removeEventListener("mouseenter", handleMouseEnter);
				el.removeEventListener("mouseleave", handleMouseLeave);
			});
		};
	}, []);

	return (
		<>
			<div
				ref={followerRef}
				className="fixed w-12 h-12 bg-blue-500 rounded-full pointer-events-none z-50 transition-transform duration-500 ease-out opacity-50 blur-xl"
			/>
			<div
				ref={cursorRef}
				className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 transition-transform duration-150"
			/>
		</>
	);
};

export default CustomCursor;
