// "use client";
// import { Link as ScrollLink } from "react-scroll";

// export default function Navbar() {
//   return (
//     <nav className="flex justify-end p-5 bg-white fixed top-0 right-0 w-full shadow-md">
//       <div className="space-x-6 mr-10">
//         <ScrollLink
//           to="home"
//           smooth={true}
//           duration={500}
//           offset={-70}
//           className="hover:underline cursor-pointer"
//         >
//           Home
//         </ScrollLink>
//         <ScrollLink to="about" smooth={true} duration={500} offset={-70} className="hover:underline cursor-pointer">
//           About
//         </ScrollLink>
//         <ScrollLink to="skills" smooth={true} duration={500} offset={-70} className="hover:underline cursor-pointer">
//           Skills
//         </ScrollLink>
//         <ScrollLink to="projects" smooth={true} duration={500} offset={-70} className="hover:underline cursor-pointer">
//           Projects
//         </ScrollLink>
//         <ScrollLink to="contact" smooth={true} duration={500} offset={-70} className="hover:underline cursor-pointer">
//           Contact
//         </ScrollLink>
//       </div>
//     </nav>
//   );
// }

// // "use client";
// // import Link from "next/link";

// // export default function Navbar() {
// //   return (
// //     <nav className="flex justify-between p-5 bg-white fixed top-0 right-0 w-full shadow-md">
// //       <div className="space-x-6">
// //         <Link href="/#home" className="hover:underline">
// //           Home
// //         </Link>
// //         <Link href="/#about" className="hover:underline">
// //           About
// //         </Link>
// //         <Link href="/#skills" className="hover:underline">
// //           Skills
// //         </Link>
// //         <Link href="/#projects" className="hover:underline">
// //           Projects
// //         </Link>
// //         <Link href="/#contact" className="hover:underline">
// //           Contact
// //         </Link>
// //       </div>
// //     </nav>
// //   );
// // }

'use client';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
	return (
		<nav className="fixed top-0 right-0 w-full bg-white shadow-md z-50">
			<div className="flex justify-end p-5 pr-10 space-x-6">
				<ScrollLink
					to="home"
					smooth={true}
					duration={500}
					offset={-70}
					spy={true}
					className="hover:underline cursor-pointer"
				>
					Home
				</ScrollLink>
				<ScrollLink
					to="about"
					smooth={true}
					duration={500}
					offset={-70}
					spy={true}
					className="hover:underline cursor-pointer"
				>
					About
				</ScrollLink>
				<ScrollLink
					to="skills"
					smooth={true}
					duration={500}
					offset={-70}
					spy={true}
					className="hover:underline cursor-pointer"
				>
					Skills
				</ScrollLink>
				<ScrollLink
					to="projects"
					smooth={true}
					duration={500}
					offset={-70}
					spy={true}
					className="hover:underline cursor-pointer"
				>
					Projects
				</ScrollLink>
				<ScrollLink
					to="contact"
					smooth={true}
					duration={500}
					offset={-70}
					spy={true}
					className="hover:underline cursor-pointer"
				>
					Contact
				</ScrollLink>
			</div>
		</nav>
	);
}
