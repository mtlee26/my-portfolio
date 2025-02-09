
"use client";
import { Navbar, NavbarContent, NavbarItem } from "@heroui/react";
import { Link as ScrollLink } from "react-scroll";


export default function Nav() {
	return (
		<Navbar className="w-full flex justify-end">
			<NavbarContent className="hidden sm:flex gap-4 flex-grow justify-end">
				<NavbarItem>
					<ScrollLink
						to="home"
						smooth={true}
						duration={500}
						offset={-70}
						spy={true}
						className="hover:underline cursor-pointer text-lg font-medium"
					>
						Home
					</ScrollLink>
				</NavbarItem>
				<NavbarItem isActive>
					<ScrollLink
						to="about"
						smooth={true}
						duration={500}
						offset={-70}
						spy={true}
						className="hover:underline cursor-pointer text-lg font-medium"
					>
						About
					</ScrollLink>
				</NavbarItem>
				<NavbarItem>
					<ScrollLink
						to="skills"
						smooth={true}
						duration={500}
						offset={-70}
						spy={true}
						className="hover:underline cursor-pointer text-lg font-medium"
					>
						Skills
					</ScrollLink>
				</NavbarItem>
				<NavbarItem>
					<ScrollLink
						to="projects"
						smooth={true}
						duration={500}
						offset={-70}
						spy={true}
						className="hover:underline cursor-pointer text-lg font-medium"
					>
						Projects
					</ScrollLink>
				</NavbarItem>
				<NavbarItem>
					<ScrollLink
						to="contact"
						smooth={true}
						duration={500}
						offset={-70}
						spy={true}
						className="hover:underline cursor-pointer text-lg font-medium"
					>
						Contact
					</ScrollLink>
				</NavbarItem>



			</NavbarContent>
		</Navbar>
	);
}
